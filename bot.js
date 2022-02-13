// IMPORTS
var fs = require("fs");
eval(fs.readFileSync("data.js").toString());

eval(fs.readFileSync("fighter.js").toString());
eval(fs.readFileSync("duel.js").toString());

eval(fs.readFileSync("utils.js").toString());
eval(fs.readFileSync("db.js").toString());

// VARIABLES
var DISCORD = require("discord.js");
var CLIENT = new DISCORD.Client();

// ENCYCLOPEDIA
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var PP_SERVER_ID = "616224531073204239";
var ENCY_CATEGORY_ID = "697773079996399637";
var RAW_BIBLE_LINK = "https://raw.githubusercontent.com/wiki/brennfeu/pp-bot/PP-Bible.md";
var LAST_ENCY_UPDATE = 0; // timestamp

// Variables
var DUEL_LIST = [];

// FONCTIONS
String.prototype.secureXSS = function(){
	return this.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

function getDuel(_id) {
	for (var i in DUEL_LIST) {
		if (DUEL_LIST[i].BATTLE_CHANNEL.id == _id) {
			return DUEL_LIST[i];
		}
	}
	return null;
}
function killDeadDuels() {
	for (var i = DUEL_LIST.length - 1; i >= 0; i--) {
		if (DUEL_LIST[i].DEAD_DUEL) {
			if (DUEL_LIST[i].CHECKPOINT_DUEL != null) {
				DUEL_LIST[i].addMessage("-----------------");
				DUEL_LIST[i].addMessage("**DUEL SAVE STATE USED**");
				DUEL_LIST[i].addMessage("-----------------");
				DUEL_LIST[i].sendMessages();
				var duel = DUEL_LIST[i].CHECKPOINT_DUEL;
				DUEL_LIST[i] = duel;
				DUEL_LIST[i].CHECKPOINT_DUEL = null;
				DUEL_LIST[i].newTurnDuel();
			}
			else {
				DUEL_LIST.splice(i, 1);
			}
		}
	}
}
function skipWaitingDuels() {
	for (var i = DUEL_LIST.length - 1; i >= 0; i--) {
		if (DUEL_LIST[i].TIMESTAMP + (3 * 60*1000) < +new Date()) {
			if (DUEL_LIST[i].TUTORIAL) {
				DUEL_LIST[i].addMessage("Tutoriel cancelled:(")
				DUEL_LIST[i].sendMessages();
				DUEL_LIST[i].DEAD_DUEL = true;
			}
			else if (DUEL_LIST[i].FIGHTER1.attack == "" && DUEL_LIST[i].FIGHTER2.attack == "") {
				DUEL_LIST[i].FIGHTER1.attack = EMOTE_PP47;
				DUEL_LIST[i].FIGHTER1.playMove();
				DUEL_LIST[i].FIGHTER2.attack = EMOTE_PP47;
				DUEL_LIST[i].FIGHTER2.playMove();
				DUEL_LIST[i].AUTO_MOVES_COUNTDOWN = 1;
			}
			else if (DUEL_LIST[i].FIGHTER1.attack == "") {
				DUEL_LIST[i].FIGHTER1.attack = EMOTE_SKIP;
			}
			else if (DUEL_LIST[i].FIGHTER2.attack == "") {
				DUEL_LIST[i].FIGHTER2.attack = EMOTE_SKIP;
			}
			DUEL_LIST[i].TIMESTAMP = +new Date();
			DUEL_LIST[i].BATTLE_CHANNEL.send("...");
			DUEL_LIST[i].launchAttacks();
		}
	}
}
function checkCityNameChange(_message) {
	var duel = getDuel(_message.channel.id);
	if (duel == null || duel.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) {
		return;
	}
	if (_message.content.length > 500) {
		return;
	}

	duel.bothFightersAction(function(_fighter) {
		if (_fighter.customName == null && _message.author.id == _fighter.idUser && _fighter.idUser != CLIENT.user.id) {
			_fighter.customName = _message.content.secureXSS();
			_fighter.duel.BATTLE_CHANNEL.send(_fighter.mayor.getName() + " changed his city name!");
		}
	});
}
function checkMusicLoops() {
	for (var i = DUEL_LIST.length - 1; i >= 0; i--) {
		DUEL_LIST[i].setMusic(DUEL_LIST[i].getBattleTheme())
	}
}
function checkUpdateEncyclopedia() {
 	if (LAST_ENCY_UPDATE + (300 * 60*1000) > +new Date()) {
		return;
	}
	LAST_ENCY_UPDATE = +new Date();

	var httpReq = new XMLHttpRequest(); // a new request
	httpReq.open("GET", RAW_BIBLE_LINK, false);
	httpReq.send(null);
	var fullBible = httpReq.responseText;
	fullBible = fullBible.split("*").join("\\*").split("_").join("*").split(/\r?\n/);

	CLIENT.guilds.fetch(PP_SERVER_ID).then( _guild => {
		var encyChannels = _guild.channels.cache.get(ENCY_CATEGORY_ID).children.array();
		for (var i in encyChannels) {
			encyChannels[i].messages.fetch({ limit: 10 }).then( _messages => {
				var liste = _messages.array();
				for (var i in liste) {
					liste[i].delete();
				}
			});

			var shouldRead = false;
			var message = "";
			for (var j in fullBible) {
				var emote = "";
				if (!shouldRead && fullBible[j].includes("## ***" + encyChannels[i].topic + ":***")) { // Start
					shouldRead = true;
				}
				else if ((fullBible[j].includes("## ") || j == fullBible.length-1) && !fullBible[j].includes("### ") && shouldRead) { // End (I check the start of the next one)
					shouldRead = false;
					encyChannels[i].send(message);
					message = "";
					var date = new Date();
					encyChannels[i].send("*Last updated: " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "*");
				}
				else if (shouldRead) {
					if (message.length + fullBible[j].length > 1900) {
						encyChannels[i].send(message);
						message = "";
					}
					if (encyChannels[i].topic == "Moves"
					   || encyChannels[i].topic == "Stånds"
					   || encyChannels[i].topic == "Civilisation Mode") {
						var cutBiblePart = fullBible[j].split(" ").join("").split("*").join("");
						for (var k in EMOTE_LIST) {
							if ((cutBiblePart.includes(CLIENT.emojis.cache.get(EMOTE_LIST[k]).name + ":")
							   || cutBiblePart.includes(CLIENT.emojis.cache.get(EMOTE_LIST[k]).name + "/")
							   || cutBiblePart.includes(CLIENT.emojis.cache.get(EMOTE_LIST[k]).name + "("))
							   && (emote == "" ||
							       CLIENT.emojis.cache.get(EMOTE_LIST[k]).name.length > CLIENT.emojis.cache.get(emote).name.length)) {
								emote = EMOTE_LIST[k];
							}
						}
					}
					else if (encyChannels[i].topic == "Gods") {
						var cutBiblePart = fullBible[j].split("*").join("");
						for (var k in GOD_LIST) {
							if ((cutBiblePart.includes(GOD_LIST[k].name + ":")
							    || cutBiblePart.includes(GOD_LIST[k].name + " ("))
							    && (emote == "" ||
							      GOD_LIST[k].name.length > GOD_LIST.find(r => r.emote == emote).name.length)) {
								emote = GOD_LIST[k].emote;
							}
						}
					}

					if (emote != "") {
						var emote2 = CLIENT.emojis.cache.get(emote);
						message += `${emote2} `;
					}
					message += fullBible[j] + "\n";
				}
			}
		}
	} );
}

function setBotActivity(_texte = "Lonely PP Squeezing :(") {
	var texte = _texte;
	if (DUEL_LIST.length > 0) {
		if (DUEL_LIST.length == 1) {
			texte = DUEL_LIST.length + " duel of PP Punching:)";
		}
		else {
			texte = DUEL_LIST.length + " duels of PP Punching:)";
		}
	}
	CLIENT.user.setPresence({ activity: { name: texte } })
}

function updatePlayer(_fighterID, _username) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, _username);

	if (_username != result[0].username) {
		executeQuery("UPDATE Player SET username = '" + _username + "' WHERE id = " + result[0].id);
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

	console.log(_fighter.getName() + " wins: " + _number);
	executeQuery("UPDATE Player SET points = " + (_number+getWinCounter(_fighter.user.id)) + " WHERE id = " + _fighter.user.id);
}
function getTopFighters() {
	return executeQuery("SELECT * FROM Player ORDER BY points DESC LIMIT 10");
}

function getPlayerBuild(_fighterID) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	var result2 = executeQuery("SELECT build FROM Player WHERE id = " + _fighterID)
	return JSON.parse(result2[0].build);
}
function setPlayerBuild(_fighterID, _build) {
	var result = executeQuery("SELECT id, points FROM Player WHERE id = " + _fighterID)

	if (result.length == 0) return addFighterToDB(_fighterID, "???");

	console.log(_fighter.getName() + " updates his build to: " + _build);
	executeQuery("UPDATE Player SET build = " + _build + " WHERE id = " + _fighterID);
}
function buildToString(_build) {
	var txt = "Fighting Styles:";

	if (_build.fightingstyles.length = 0) txt += " None";
	else {
		for (var i in _build.fightingstyles) txt += " " + _build.fightingstyles[i];
	}

	txt += "\nGods: ";
	if (_build.gods.length = 0) txt += " None";
	else {
		for (var i in _build.gods) txt += " " + _build.gods[i];
	}

	return txt;
}

function toggleFightingStyle(_fighterID, _fightingStyle) {
	var build = getPlayerBuild(_fighterID);

	if (build.fightingstyles.indexOf(_fightingStyle) > -1) {
		build.fightingstyles.splice(build.fightingstyles.indexOf(_fightingStyle), 1);
	}
	else {
		build.fightingstyles.push(_fightingStyle);
	}

	return this.setPlayerBuild(_fighterID, build);
}
function toggleGod(_fighterID, _god) {
	var build = getPlayerBuild(_fighterID);

	if (build.gods.indexOf(_god) > -1) {
		build.gods.splice(build.gods.indexOf(_god), 1);
	}
	else if (build.gods.length < 4) {
		build.gods.push(_god);
	}

	return this.setPlayerBuild(_fighterID, build);
}

async function sendCheatPanel(_channel, _category = null) {
	var emotes = {
		"Cheat Panel: Normal Moves I": [
			EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5, EMOTE_PP6, EMOTE_PP7, EMOTE_PP8,
			EMOTE_PP9, EMOTE_PP10, EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16,
			EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20
		],
		"Cheat Panel: Normal Moves II": [
			EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28,
			EMOTE_PP29, EMOTE_PP30, EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP36,
			EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40
		],
		"Cheat Panel: Normal Moves III": [
			EMOTE_PP41, EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP47, EMOTE_PP48,
			EMOTE_PP49, EMOTE_PP50],
		"Cheat Panel: Priest Moves": [
			EMOTE_PP51, EMOTE_PP52
		],
		"Cheat Panel: Infernal Moves": [
			EMOTE_PP135, EMOTE_PP136, EMOTE_PP137, EMOTE_PP138, EMOTE_PP139, EMOTE_PP140, EMOTE_PP141,
			EMOTE_PP142, EMOTE_PP143, EMOTE_PP144, EMOTE_PP145, EMOTE_PP146, EMOTE_PP147, EMOTE_PP149, EMOTE_PP150
		],
		"Cheat Panel: Animated Moves": [
			EMOTE_PP53, EMOTE_PP54, EMOTE_PP55, EMOTE_PP56, EMOTE_PP57, EMOTE_PP58, EMOTE_PP59, EMOTE_PP60,
			EMOTE_PP61, EMOTE_PP62
		],
		"Cheat Panel: Stånds Moves": [
			EMOTE_PP63, EMOTE_PP64, EMOTE_PP65, EMOTE_PP66, EMOTE_PP67, EMOTE_PP68, EMOTE_PP69, EMOTE_PP70,
			EMOTE_PP71, EMOTE_PP72, EMOTE_PP73, EMOTE_PP74, EMOTE_PP75, EMOTE_PP76, EMOTE_PP77, EMOTE_PP78
		],
		"Cheat Panel: Rare Moves": [
			EMOTE_PP79, EMOTE_PP80, EMOTE_PP81, EMOTE_PP148
		],
		"Cheat Panel: Civilisation Moves I": [
			EMOTE_PP82, EMOTE_PP83, EMOTE_PP84, EMOTE_PP85, EMOTE_PP86, EMOTE_PP87, EMOTE_PP88, EMOTE_PP89,
			EMOTE_PP90, EMOTE_PP91, EMOTE_PP92, EMOTE_PP93, EMOTE_PP117
		],
		"Cheat Panel: Civilisation Moves II": [
			EMOTE_PP94, EMOTE_PP95, EMOTE_PP96, EMOTE_PP97, EMOTE_PP98, EMOTE_PP99, EMOTE_PP100, EMOTE_PP101,
			EMOTE_PP102, EMOTE_PP103, EMOTE_PP104, EMOTE_PP105, EMOTE_PP106, EMOTE_PP107, EMOTE_PP108,
			EMOTE_PP109, EMOTE_PP110, EMOTE_PP111, EMOTE_PP112
		],
		"Cheat Panel: Civilisation Moves III": [
			EMOTE_PP113, EMOTE_PP114, EMOTE_PP115, EMOTE_PP116, EMOTE_PP118, EMOTE_PP119, EMOTE_PP120,
			EMOTE_PP121, EMOTE_PP123, EMOTE_PP125, EMOTE_PP126, EMOTE_PP127
		],
		"Cheat Panel: Civilisation Moves IV": [
			EMOTE_PP124, EMOTE_PP128, EMOTE_PP129, EMOTE_PP130, EMOTE_PP131, EMOTE_PP132, EMOTE_PP133,
			EMOTE_PP134
		],
		"Cheat Panel: Gods I": [], // filled later in a loop
		"Cheat Panel: Gods II": [],
		"Cheat Panel: Gods III": [],
		"Cheat Panel: Other": [
			EMOTE_ABILITY, EMOTE_FRIEDESPINOZA, EMOTE_ESPINOZE, EMOTE_OBAMAHEDRON, EMOTE_OBAMASPHERE,
			EMOTE_OBOMBA, EMOTE_SKIPPER
		]
	}
	for (var i in GOD_LIST) {
		if (GOD_LIST[i].type == "normal") {
			emotes["Cheat Panel: Gods I"].push(GOD_LIST[i].emote)
		}
		else if (GOD_LIST[i].type == "eldritch") {
			emotes["Cheat Panel: Gods II"].push(GOD_LIST[i].emote)
		}
		else if (GOD_LIST[i].type == "waifu") {
			emotes["Cheat Panel: Gods III"].push(GOD_LIST[i].emote)
		}
	}

	var final = {}
	if (_category != null) {
		for (var i in emotes) {
			if (i.toLowerCase().includes(_category.toLowerCase())) final[i] = emotes[i];
		}
	}
	else {
		final = emotes;
	}

	for (var i in final) {
		await _channel.send(i).then(async function (_message2) {
			for (var j in final[i]) {
				await _message2.react(final[i][j]);
			}
		}).catch(function(e) {
			console.log(e);
		});
	}
}

function cloneObject(obj) {
	obj = obj && obj instanceof Object ? obj: '';

	// Handle Date (return new Date object with old value)
	if (obj instanceof Date) {
		return new Date(obj);
	}

	// Handle Array (return a full slice of the array)
	if (obj instanceof Array) {
		return obj.slice();
	}

	// Handle Object
	if (obj instanceof Fighter || obj instanceof Duel) {
		var copy = new obj.constructor();
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)){
				if (obj[attr] instanceof Object){
					copy[attr] = cloneObject(obj[attr]);
				}
				else {
					copy[attr] = obj[attr];
				}
			}
		}
		return copy;
	}

	if (obj instanceof Object) {
		return obj; // discord js objects
	}

	throw new Error("Unable to copy obj! Its type isn't supported.");
}

CLIENT.on('ready', () => {
	console.log(`Logged in as ${CLIENT.user.tag}!`);
	setBotActivity("nothing, I just rebooted.");
});

// This event will run on every single message received, from any channel or DM.
CLIENT.on("message", async _message => {
	killDeadDuels();
	setBotActivity();
	skipWaitingDuels();
	checkCityNameChange(_message);
	checkMusicLoops();
	checkUpdateEncyclopedia();

	// Recuperation commande
	var argsUser = _message.content.trim().split(" ");

	// Ignore si bot
	if(_message.author.bot) return;

	// PM
	if(_message.channel.type == "dm") {
		_message.channel.send("**PP Cancer Translation:**\n\n" + changeTextRandomSpoil(changeTextLeet(changeTextRandomCap(changeTextRussian(changeTextUwu(_message.content.trim()))))));
		return;
	}

	// Ignore si pas appelé
	if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.first().id != CLIENT.user.id) return;
	console.log(argsUser);

	killDeadDuels();

	if (argsUser[1] == "rank") {
		// RANK
		_message.channel.send("You have " + getWinCounter(_message.author.id) + " PP Points\nYour Rank is #" + getRank(_message.author.id));
		return;
	}
	if (argsUser[1] == "ranks") {
		// RANKS
		var topFighters = getTopFighters();
		_message.channel.send("TOP 10 PP PUNCHERS:")
		for (var i in topFighters) {
			_message.channel.send("#" + (1+parseInt(i)) + ": " + topFighters[i].username + " (" + topFighters[i].points + " PP Points)");
		}
		return;
	}
	if (argsUser[1] == "cheatpanel") {
		var cat = null;
		if (argsUser.length > 2) {
			cat = argsUser[2].toLowerCase()
			switch(argsUser[2].toLowerCase()) {
				case "regular":
					cat = "normal";
					break;
				case "god":
					cat = "gods";
					break;
				case "armageddon":
					cat = "animated";
					break;
				case "stand":
				case "stands":
				case "stånd":
					cat = "stånds";
					break;
				case "civ":
					cat = "civilisation";
					break;
			}
		}

		sendCheatPanel(_message.channel, cat);
		return;
	}
	if (argsUser[1] == "training") {
		if (getDuel(_message.channel.id) != null) {
			return _message.reply("there's a battle going on here...");
		}

		var duel = new Duel();
		DUEL_LIST.push(duel);

		duel.startDuel(_message, true);

		return;
	}
	if (argsUser[1] == "civilisation") {
		if (getDuel(_message.channel.id) != null) {
			return _message.reply("there's a battle going on here...");
		}

		var duel = new Duel();
		DUEL_LIST.push(duel);

		duel.startDuel(_message, true);
		duel.FORCE_EVENT_ID = 300;

		return;
	}
	if (argsUser[1] == "duel" || argsUser[1] == "simpleduel" || argsUser[1] == "hug") {
		if (getDuel(_message.channel.id) != null) {
			return _message.reply("there's a battle going on here...");
		}

		if (_message.mentions.users.array().length <= 1) {
			return _message.reply("you need to tag the person you want to duel in the command!\nSee the help command for more help!");
		}

		if (_message.author.id == _message.mentions.users.last().id) {
			return _message.reply("you can't battle yourself!");
		}

		if (_message.mentions.users.last().bot) {
			return _message.reply("u is a big dumby dumb dumb, you can't battle a bot!");
		}

		if (getRandomPercent() <= 2) {
			return _message.channel.send("Oops, looks like there was an error:\n<Error>: \"I don't care about your duel\"");
		}

		var duel = new Duel(argsUser[1] == "simpleduel");
		duel.CHRISTIAN_TEXT = argsUser[1] == "hug";
		DUEL_LIST.push(duel);

		duel.startDuel(_message);

		return;
	}
	if (argsUser[1] == "punch") {
		if (_message.mentions.users.array().length <= 1) {
			if (argsUser.length == 3) return _message.reply("why?:("); // punch arbitrator

			return _message.reply("you need to tag the person you want to punch in the command!\nSee the help command for more help!");
		}

		return _message.channel.send("Video proof of " + _message.author.username + " punching " + _message.mentions.users.last().username + "'s PP:\n" + IMAGE_PP5);
	}
	if (argsUser[1] == "quit") {
		if (getDuel(_message.channel.id) != null) {
			var duel = getDuel(_message.channel.id);
			if (_message.author.id == duel.FIGHTER1.user.id) {
				duel.FIGHTER1.playMove(EMOTE_PP47);
				duel.FIGHTER2.win()
				duel.stopDuel();
				return;
			}
			else if (_message.author.id == duel.FIGHTER2.user.id) {
				duel.FIGHTER2.playMove(EMOTE_PP47);
				duel.FIGHTER1.win()
				duel.stopDuel();
				return;
			}
			else {
				return _message.reply("this fight is not yours.");
			}
		}
		else {
			return _message.reply("there's no fight here...");
		}
	}
	if (argsUser[1] == "tutorial") {
		if (getDuel(_message.channel.id) != null) {
			return _message.reply("there's a battle going on here...");
		}

		var duel = new Duel();
		DUEL_LIST.push(duel);

		duel.startTutorial(_message);

		return;
	}
	if (argsUser[1] == "custom" || argsUser[1] == "cumstom") {
		if (getDuel(_message.channel.id) != null) return _message.reply("let's try somewhere else...");
		// STYLE
		var guild = _message.channel.guild;
		var user = guild.members.cache.get(_message.author.id);

		_message.reply("change your style with a reaction.").then(function (_message2) {
			_message2.react(EMOTE_PP38); // Fast PP
			_message2.react(EMOTE_PP40); // Big PP
			_message2.react(EMOTE_PP9); // Hockey Puck PP
			_message2.react(EMOTE_PP34); // Alien PP
			_message2.react(EMOTE_PP41); // Drunk PP
		}).catch(function(e) {
			console.log(e);
		});
		_message.reply("change your God with a reaction.").then(function (_message2) {
			for (var i in GOD_LIST) {
				if (GOD_LIST[i].type == "normal") {
					_message2.react(GOD_LIST[i].emote);
				}
			}
		}).catch(function(e) {
			console.log(e);
		});
		if (user.roles.cache.find(r => r.name == WEEB_PP_ROLE)) {
			_message.reply("here are your Weeb PP choices.").then(function (_message2) {
				for (var i in GOD_LIST) {
					if (GOD_LIST[i].type == "waifu") {
						_message2.react(GOD_LIST[i].emote);
					}
				}
			}).catch(function(e) {
				console.log(e);
			});
		}
		if (user.roles.cache.find(r => r.name == PP_EXPERT_ROLE)) {
			_message.reply("here are your PP Expert choices.").then(function (_message2) {
				for (var i in GOD_LIST) {
					if (GOD_LIST[i].type == "eldritch") {
						_message2.react(GOD_LIST[i].emote);
					}
				}
				_message2.react(EMOTE_SKIPPER); // Skipper
			}).catch(function(e) {
				console.log(e);
			});
		}
		return;

	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("you should read the PP Bible here: https://github.com/brennfeu/pp-bot/wiki/PP-Bible");
	}
	if (argsUser[1] == "admin") {
		try {
			if (ADMIN_LIST.indexOf(_message.author.id) < 0) {
				return _message.reply("you aren't an admin, sorry.");
			}
			if (argsUser.length <= 2) {
				return _message.reply("I need more arguments.");
			}

			if (argsUser[2] == "megaKill") {
				for (var i in DUEL_LIST) {
					DUEL_LIST[i].addMessage(" -- HEAT DEATH OF THE UNIVERSE --");
					DUEL_LIST[i].addMessage("*The Universe suddenly collapses.*\n" + IMAGE_PP2);
					DUEL_LIST[i].MOVE_COUNT = 1000000;
					DUEL_LIST[i].stopDuel();
				}
				return;
			}

			if (getDuel(_message.channel.id) == null) {
				return _message.reply("there's no fight here...");
			}

			var duel = getDuel(_message.channel.id);
			if (argsUser[2] == "move1" && argsUser.length >= 4) {
				duel.FIGHTER1.playMove(EMOTE_LIST[parseInt(argsUser[3])-1]);
				return duel.sendMessages();
			}
			if (argsUser[2] == "move2" && argsUser.length >= 4) {
				duel.FIGHTER2.playMove(EMOTE_LIST[parseInt(argsUser[3])-1]);
				return duel.sendMessages();
			}
			if (argsUser[2] == "forceEvent" && argsUser.length >= 4) {
				duel.FORCE_EVENT_ID = parseInt(argsUser[3]);
				return _message.reply("next event id will be: " + duel.FORCE_EVENT_ID);
			}
			if (argsUser[2] == "requiem1" && argsUser.length >= 4) {
				duel.FIGHTER1.requiemPower = REQUIEM_LIST[parseInt(argsUser[3])-1];
				return _message.reply(duel.FIGHTER1.getName() + " gets: " + REQUIEM_LIST[parseInt(argsUser[3])-1]);
			}
			if (argsUser[2] == "requiem2" && argsUser.length >= 4) {
				duel.FIGHTER2.requiemPower = REQUIEM_LIST[parseInt(argsUser[3])-1];
				return _message.reply(duel.FIGHTER2.getName() + " gets: " + REQUIEM_LIST[parseInt(argsUser[3])-1]);
			}
			if (argsUser[2] == "moveCount" && argsUser.length >= 4) {
				duel.MOVE_COUNT = parseInt(argsUser[3]);
				return _message.reply("duel move count: " + duel.MOVE_COUNT);
			}
		}
		catch(e) {
			return _message.reply("wat ?");
		}
	}
	if (argsUser.length > 3) {
		_message.reply("sorry, but I'm not interested.");
		return;
	}

	return _message.reply("I don't know this command, try using the help command!");
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	killDeadDuels();
	setBotActivity();
	checkMusicLoops();
	checkUpdateEncyclopedia();

	reactionChannel = _reaction.message.channel;

	// DUEL
	if (getDuel(reactionChannel.id) != null && _user.id != CLIENT.user.id) {
		var duel = getDuel(_reaction.message.channel.id);

		duel.triggerReaction(_reaction.emoji.name, _user);
		return;
	}

	// CHANGE ROLE
	if (_user.bot) return;
	if (_reaction.emoji.id == EMOTE_PP38) {
		// Fast PP
		toggleFightingStyle(_user.id, FAST_PP_ROLE);
		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
		return;
	}
	else if (_reaction.emoji.id == EMOTE_PP40) {
		// Big PP
		toggleFightingStyle(_user.id, BIG_PP_ROLE);
		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
		return;
	}
	else if (_reaction.emoji.id == EMOTE_PP41) {
		// Drunk PP
		toggleFightingStyle(_user.id, DRUNK_PP_ROLE);
		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
		return;
	}
	else if (_reaction.emoji.id == EMOTE_PP34) {
		// Alien PP
		toggleFightingStyle(_user.id, ALIEN_PP_ROLE);
		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
		return;
	}
	else if (_reaction.emoji.id == EMOTE_PP9) {
		// Hockey Puck PP
		toggleFightingStyle(_user.id, HOCKEY_PUCK_PP_ROLE);
		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
		return;
	}

	// gods
	for (var i in GOD_LIST) {
		if (_reaction.emoji.id == GOD_LIST[i].emote) {
			toggleGod(_user.id, GOD_LIST[i].name);
			reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
			return;
		}
	}
});

CLIENT.login(process.env.BOT_TOKEN);
// poo or poop ?
