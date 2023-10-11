// DATABASE
var MYSQL = require('sync-mysql');
var DB_CONNECTION = new MYSQL({
	host: process.env.DB_HOST,
	user: process.env.DB_LOGIN,
	password: process.env.DB_PASSWORD,
	database: "brennfeu_pp_punch"
});

function executeQuery(_str) {
	try {
		//console.log(_str);
		return DB_CONNECTION.query(_str)
	}
	catch(e) {
		console.log("QUERY ERROR:")
		console.log(_str)
		throw e
	}
}

function updatePlayer(_fighterID, _username) {
	var result = executeQuery("SELECT username FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, _username);

	if (_username != result[0].username) {
		executeQuery("UPDATE Player SET username = '" + _username + "' WHERE id = " + _fighterID);
	}
}
function getWinCounter(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT points FROM Player WHERE id = " + _fighterID)
	return result2[0].points;
}
function addFighterToDB(_id, _name) {
	executeQuery("INSERT INTO Player (id, username) VALUES (" + _id + ", '" + _name + "')");
	console.log("Added a new fighter to the DB: " + _name);
}
function getRank(_fighterID) {
	var result = executeQuery("SELECT num FROM ( SELECT (@row_number:=@row_number + 1) AS num, id FROM Player, (SELECT @row_number:=0) AS t ORDER BY points DESC ) AS t2 WHERE id = " + _fighterID)
	return result[0].num;
}
function addWinCounter(_fighter, _number) {
	updatePlayer(_fighter.user.id, _fighter.user.username.secureXSS())

	if (_fighter.getName != undefined) console.log(_fighter.getName() + " wins: " + _number);
	executeQuery("UPDATE Player SET points = " + (_number+getWinCounter(_fighter.user.id)) + " WHERE id = " + _fighter.user.id);
}
function getTopFighters(_limit = 10) {
	return executeQuery("SELECT * FROM Player ORDER BY points DESC LIMIT " + _limit);
}

function getPlayerBuild(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT build FROM Player WHERE id = " + _fighterID)
	return JSON.parse(result2[0].build);
}
function setPlayerBuild(_fighterID, _build) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	console.log(_fighterID + " updates his build to:\n" + buildToString(_build));
	executeQuery("UPDATE Player SET build = '" + JSON.stringify(_build) + "' WHERE id = " + _fighterID);
}
function buildToString(_build) {
	var txt = "**Fighting Styles:**";

	if (_build.fightingstyles.length == 0) txt += " None";
	else {
		for (var i in _build.fightingstyles) txt += " - " + _build.fightingstyles[i];
	}

	txt += "\n**Gods:**";
	if (_build.gods.length == 0) txt += " None";
	else {
		for (var i in _build.gods) txt += " - " + _build.gods[i];
	}

	return txt;
}

function isPlayerExpertPP(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)
	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT expertPP FROM Player WHERE id = " + _fighterID);
	return result2[0].expertPP == 1;
}
function isPlayerWeebPP(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)
	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT weebPP FROM Player WHERE id = " + _fighterID);
	return result2[0].weebPP == 1;
}
function isPlayerDestroyer(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)
	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT destroyer FROM Player WHERE id = " + _fighterID);
	return result2[0].destroyer == 1;
}
function getPlayerAchievements(_fighterID) {
    var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)
    if (result.length == 0) return addFighterToDB(_fighterID, "???");

    var result2 = executeQuery("SELECT achievements FROM Player WHERE id = " + _fighterID);
    while (result2[0].length < ACHIEVEMENT_LIST.length) result2[0] += "0";
    return result2[0].achievements;
}
function getPlayerAchievementsPercent(_fighterID) {
    return Math.floor((getPlayerAchievements(_fighterID).split("1").length - 1)*100/ACHIEVEMENT_LIST.length);
}
function grantPlayerExpertPP(_fighter) {
	updatePlayer(_fighter.user.id, _fighter.user.username.secureXSS());

	executeQuery("UPDATE Player SET expertPP = 1 WHERE id = " + _fighter.idUser);
}
function grantPlayerWeebPP(_fighter) {
	updatePlayer(_fighter.user.id, _fighter.user.username.secureXSS());

	executeQuery("UPDATE Player SET weebPP = 1 WHERE id = " + _fighter.idUser);
}
function grantPlayerDestroyer(_fighter) {
	updatePlayer(_fighter.user.id, _fighter.user.username.secureXSS());

	executeQuery("UPDATE Player SET destroyer = 1 WHERE id = " + _fighter.idUser);
}
function grantPlayerAchievement(_fighter, _achievement) {
    if (_fighter.idUser == CLIENT.user.id) return;
    updatePlayer(_fighter.user.id, _fighter.user.username.secureXSS());

    var current_unlocked = getPlayerAchievements(_fighter.idUser);
    if (current_unlocked.charAt(_achievement) == "1") return;
    executeQuery("UPDATE Player SET achievements = '" + current_unlocked.replaceAt(_achievement, '1') + "' WHERE id = " + _fighter.idUser);

    var embedMessage = new DISCORD.MessageEmbed();
    embedMessage.setColor("GREEN");
    embedMessage.setThumbnail(ACHIEVEMENT_LIST[_achievement].imageLink);
    embedMessage.setTitle("**Achievement Unlocked!**");
    embedMessage.setDescription("**" + ACHIEVEMENT_LIST[_achievement].name + "**\n" + ACHIEVEMENT_LIST[_achievement].description);

    try { _fighter.guildUser.send("", {embed: embedMessage.toJSON()}); } catch(e) {}
}

function toggleFightingStyle(_fighterID, _fightingStyle) {
	var build = getPlayerBuild(_fighterID);

	if (build.fightingstyles.indexOf(_fightingStyle) > -1) {
		build.fightingstyles.splice(build.fightingstyles.indexOf(_fightingStyle), 1);
	}
	else {
		build.fightingstyles.push(_fightingStyle);
	}

	return setPlayerBuild(_fighterID, build);
}
function toggleGod(_fighterID, _god) {
	var build = getPlayerBuild(_fighterID);

	if (build.gods.indexOf(_god) > -1) {
		build.gods.splice(build.gods.indexOf(_god), 1);
	}
	else {
		if (build.gods.length > 4 || (build.gods.length > 3 && !isPlayerExpertPP(_fighterID))) return;
		if (GOD_LIST.find(a => a.name == _god).type == "eldritch") {
			for (var j in build.gods) if (GOD_LIST.find(a => a.name == build.gods[j]).type == "eldritch") return;
		}

		build.gods.push(_god);
	}

	return setPlayerBuild(_fighterID, build);
}

function k_addMessageCount(_userId, _username, _channel) {
    var points_before = k_getUserPoints(_userId);
	var result = executeQuery("SELECT k_points FROM Player WHERE id = " + _userId);

	if (result.length == 0) { // add user and sets points to 0
		addFighterToDB(_userId, _username);
		result.push({ k_points: 0 });
	}
	var value = 1+parseInt(result[0].k_points);
	if (k_getToday() < k_getUserDoubleXpDate(_userId)) value += 1;

    var points_after = value;
	executeQuery("UPDATE Player SET k_points = " + points_after + " WHERE id = " + _userId);

    if (k_getARFromPoints(points_before) >= 60) { // money
        executeQuery('UPDATE Player SET k_mora=(k_mora+5000) WHERE id = ' + _userId);
    }
    else { // xp
        for (var i in K_AR_LIST) { // check if AR up
            if (points_before >= K_AR_LIST[i].xp || K_AR_LIST[i].xp > points_after) continue;

            var _current_ar = parseInt(i)+1;
            var _mora = _current_ar*10000;
            k_sendMessage(K_PROFIL_PAIMON_CHAD,
                "Nouveau Rang d'Ascension Atteint !",
                "**Bravo "+_username+"**, tu es passé Rang d'Aventurier **"+_current_ar+"** !\n\nTu gagnes "+sciText(_mora)+" Moras !", _channel);
            k_checkRoles(_message);

            executeQuery('UPDATE Player SET k_mora=(k_mora+' + _mora + ') WHERE id = ' + _userId);
        }
    }
}
function k_getUserPoints(_userId) {
	var result = executeQuery("SELECT k_points FROM Player WHERE id = " + _userId)

	if (result.length == 0) return 0;
	else return parseInt(result[0].k_points);
}
function k_getUserMora(_userId) {
	var result = executeQuery("SELECT k_mora FROM Player WHERE id = " + _userId)

	if (result.length == 0) return 0;
	else return parseInt(result[0].k_mora);
}
function k_getUserWishes(_userId) {
	var result = executeQuery("SELECT k_wishes FROM Player WHERE id = " + _userId)

	if (result.length == 0) return 0;
	else return parseInt(result[0].k_wishes)*10;
}
function k_getUserPity(_userId) {
	var result = executeQuery("SELECT k_pity FROM Player WHERE id = " + _userId)

	if (result.length == 0) return 0;
	else return parseInt(result[0].k_pity);
}
function k_getUserPlacement(_userId) {
	return parseInt(executeQuery("SELECT COUNT(id) count FROM Player WHERE k_points >= ( SELECT k_points FROM Player WHERE id = " + _userId + " )")[0].count);
}
function k_getLeaderboard() {
	return executeQuery("SELECT id, username, k_points FROM Player WHERE k_points>0 ORDER BY k_points DESC LIMIT 10;");
}
function k_getUserDailyProgress(_userId) {
	var result = executeQuery("SELECT k_dailies_progress FROM Player WHERE id = " + _userId);

	if (result.length == 0) return {};
	else return JSON.parse(result[0].k_dailies_progress);
}
function k_checkUserDailyProgressDate(_userId) {
	var result = executeQuery("SELECT k_dailies_progress_date FROM Player WHERE id = " + _userId);

	if (result.length == 0) return false;
	return result[0].k_dailies_progress_date == k_getTodayDate();
}
function k_resetUserDailyProgress(_userId) {
	if (k_checkUserDailyProgressDate(_userId)) return; // only if too late

	executeQuery('UPDATE Player SET k_dailies_progress=\'' + JSON.stringify(k_generateDailyMissions()) +
		'\', k_dailies_progress_date="' + k_getTodayDate() + '" WHERE id = ' + _userId);
}
function k_getUserDoubleXpDate(_userId) {
	var result = executeQuery("SELECT k_doublexp FROM Player WHERE id = " + _userId);

	if (result.length == 0) return 0;
	return parseInt(result[0]["k_doublexp"]);
}
function k_getArtworkColumn(_userId) {
	var result = executeQuery("SELECT k_alternate_artworks FROM Player WHERE id = " + _userId);

	var txt = "art_link";
	if (result[0].k_alternate_artworks != "0") txt += "_alt" + result[0].k_alternate_artworks;

	return txt;
}
function k_getUserOptions(_id) {
    var opt = executeQuery("SELECt k_options FROM Player WHERE id=" + _id)[0]["k_options"];
    opt = JSON.parse(opt);

    // default
    if (opt.fullinventory == undefined) opt.fullinventory = 0;
    if (opt.autorefund == undefined) opt.autorefund = 0;

    return opt;
}
function k_setUserOptions(_id, _options) {
    executeQuery('UPDATE Player SET k_options=\'' + JSON.stringify(_options) + '\' WHERE id = ' + _id);
}
