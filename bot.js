// IMPORTS
var fs = require("fs");
eval(fs.readFileSync("kusanali-bot.js").toString());

eval(fs.readFileSync("data.js").toString());

eval(fs.readFileSync("duel/duel.js").toString());
eval(fs.readFileSync("duel/events.js").toString());
eval(fs.readFileSync("duel/movepool.js").toString());

eval(fs.readFileSync("fighters/fighter.js").toString());
eval(fs.readFileSync("fighters/bosses.js").toString());
eval(fs.readFileSync("fighters/moves.js").toString());
eval(fs.readFileSync("fighters/ai.js").toString());

eval(fs.readFileSync("utils.js").toString());
eval(fs.readFileSync("db.js").toString());

// DLCs
eval(fs.readFileSync("dlc/gungeon/_init.js").toString());
eval(fs.readFileSync("dlc/genshin/_init.js").toString());


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
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

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
				duel.TIMESTAMP = DUEL_LIST[i].TIMESTAMP;
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
		if (DUEL_LIST[i].TIMESTAMP + (60*1000) < +new Date()) {
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
    FULL_BIBLE = [];

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
				for (var i in liste) liste[i].delete();
			}); // reset the encyclopedia

			var shouldRead = false;
			var message = "";
			var stand = "";
			for (var j in fullBible) {
				var emote = "";

				if (!shouldRead && fullBible[j].includes("## ***" + encyChannels[i].topic + ":***")) { // Start
					shouldRead = true;
                    BIBLE_ORDER[j] = encyChannels[i].topic;
				}
				else if ((fullBible[j].includes("## ") || j == fullBible.length-1) && !fullBible[j].includes("### ") && shouldRead) { // End (I check the start of the next one)
					shouldRead = false;
                    addTextToBibleCat(encyChannels[i].topic, sciText(message));
					if (message.trim().length > 0) encyChannels[i].send(sciText(message));
					message = "";
					var date = new Date();
					encyChannels[i].send("*Last updated: " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "*");
				}
				else if (shouldRead) {
					if (message.length + fullBible[j].length > 1900) {
                        addTextToBibleCat(encyChannels[i].topic, sciText(message));
						encyChannels[i].send(sciText(message));
						message = "";
					}

					if (encyChannels[i].topic == "Moves"
					   || encyChannels[i].topic == "Stånds"
                       || encyChannels[i].topic == "Gungeon Battalion"
                       || encyChannels[i].topic == "Teyvat Elements") {
						var cutBiblePart = fullBible[j].split(" ").join("").split("*").join("").split(".").join("").split("'").join("");
						for (var k in EMOTE_LIST) {
							if ((cutBiblePart.includes(getEmote(EMOTE_LIST[k]).name + ":")
							   || cutBiblePart.includes(getEmote(EMOTE_LIST[k]).name + "/")
							   || cutBiblePart.includes(getEmote(EMOTE_LIST[k]).name + "("))
							   && (emote == "" ||
							       CLIENT.emojis.cache.get(EMOTE_LIST[k]).name.length > getEmote(emote).name.length)) {
								emote = EMOTE_LIST[k];
							}
						}

						if (encyChannels[i].topic == "Stånds") {
							// stands help
							if (fullBible[j].includes("-")) {
								for (var s in STAND_SUMMONS) {
									if (fullBible[j].includes(s)) stand = s;
								}
							}
							else if (fullBible[j].includes("Special Effects")) {
								STAND_HELP[stand] = fullBible[j];
							}

							// requiems help
							if (fullBible[j].includes(":")) {
								for (var r in REQUIEM_LIST) {
									if (fullBible[j].includes(REQUIEM_LIST[r])) REQUIEM_HELP[REQUIEM_LIST[r]] = fullBible[j];
								}
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
					else if (encyChannels[i].topic == "Relics") {
						for (var k in RELIC_LIST) {
							if (fullBible[j].includes(RELIC_LIST[k])) {
								RELIC_HELP[RELIC_LIST[k]] = fullBible[j];
							}
						}
					}
					else if (encyChannels[i].topic == "Stats") {
						for (var k in FIGHTING_STYLE_LIST) {
							if (fullBible[j].includes(FIGHTING_STYLE_LIST[k].name)) {
								emote = FIGHTING_STYLE_LIST[k].emote;
							}
						}
					}

					if (emote != "") {
						var emote2 = CLIENT.emojis.cache.get(emote);
						message += `${emote2} `;

						MOVE_HELP[emote] = fullBible[j];
					}
					message += fullBible[j] + "\n";
				}
			}
		}

		console.log(MOVE_HELP);
		console.log(STAND_HELP);
		console.log(REQUIEM_HELP);
		console.log(RELIC_HELP);
	} );
}
function addTextToBibleCat(_cat, _txt) {
    if (FULL_BIBLE[_cat] == undefined) FULL_BIBLE[_cat] = [];
    FULL_BIBLE[_cat].push(_txt);
}

function setBotActivity(_texte = "Lonely PP Squeezing :(") {
	var texte = _texte;
	if (DUEL_LIST.length > 0) {
		if (DUEL_LIST.length == 1) {
			texte = DUEL_LIST.length + " duel of PP Punching :)";
		}
		else {
			texte = DUEL_LIST.length + " duels of PP Punching :)";
		}
	}
	CLIENT.user.setPresence({ activity: { name: texte } })
}

function sendErrorToDev(_err) {
	console.log("ERROR:")
	console.log(_err);
	for (var i in DUEL_LIST) {
		DUEL_LIST[i].LIST_MESSAGES = [];
		DUEL_LIST[i].LIST_MESSAGES_OTHER = [];

        DUEL_LIST[i].addMessage("**An error occured and I might soon restart. Reporting the issue would be greatly appreciated! I'm sorry to end your duel like this, some PP Points should still be awarded.**");
        DUEL_LIST[i].addMessage(_err.stack.toString());
		DUEL_LIST[i].addMessage(_err.toString());
		DUEL_LIST[i].FIGHTER1.win("quarter");
		DUEL_LIST[i].FIGHTER2.win("quarter");
		DUEL_LIST[i].sendMessages();
	}
	DUEL_LIST = [];
}

function getEmote(_id) {
	return CLIENT.emojis.cache.get(_id);
}
function displayEmote(_id) {
	return `${getEmote(_id)}`;
}

async function sendCheatPanel(_channel, _category = null) {
	var emotes = {
		"Cheat Panel: Regular Moves": NORMAL_EMOTE_LIST,
		"Cheat Panel: Faith Moves": GOD_EMOTE_LIST,
		"Cheat Panel: Infernal Moves": INFERNAL_EMOTE_LIST,
		"Cheat Panel: Animated Moves": SPECIAL_EMOTE_LIST,
		"Cheat Panel: Stånd Moves": STAND_EMOTE_LIST,
        "Cheat Panel: Rare Moves": RARE_EMOTE_LIST,
		"Cheat Panel: Gods - Regular": [], // filled later in a loop
		"Cheat Panel: Gods - Waifu": [],
		"Cheat Panel: Gods - Eldritch": [],
        "Cheat Panel: Genshin Skills Moves": GENSHIN_AVAILABLE_EMOTE_LIST,
        "Cheat Panel: Genshin Skills - 5* Talent Moves": [], // filled later
        "Cheat Panel: Genshin Skills - 4* Talent Moves": [], // filled later
        "Cheat Panel: Gungeon Battalion - Shrine Moves": GUNGEON_SHRINE_EMOTE_LIST,
		"Cheat Panel: Gungeon Battalion - Unit Moves": GUNGEON_UNIT_EMOTE_LIST,
        "Cheat Panel: Gungeon Battalion - Gun Moves": GUNGEON_RAID_EMOTE_LIST,
        "Cheat Panel: Gungeon Battalion - Other Moves": GUNGEON_OTHER_EMOTE_LIST,
		"Cheat Panel: Other Moves": [
			EMOTE_ABILITY, EMOTE_MECHA, EMOTE_FRIEDESPINOZA, EMOTE_ESPINOZE, EMOTE_OBAMAHEDRON, EMOTE_OBAMASPHERE,
			EMOTE_OBOMBA, EMOTE_BOSS_ATTACK
		]
	}
	for (var i in GOD_LIST) {
		if (GOD_LIST[i].type == "normal") {
			emotes["Cheat Panel: Gods - Regular"].push(GOD_LIST[i].emote);
		}
		else if (GOD_LIST[i].type == "waifu") {
			emotes["Cheat Panel: Gods - Waifu"].push(GOD_LIST[i].emote);
		}
		else if (GOD_LIST[i].type == "eldritch") {
			emotes["Cheat Panel: Gods - Eldritch"].push(GOD_LIST[i].emote);
		}
	}
    for (var i in GENSHIN_CHARACTER_LIST) {
        if (GENSHIN_FIVESTARS_CHARACTER_LIST.indexOf(GENSHIN_CHARACTER_LIST[i]) >= 0) {
            emotes["Cheat Panel: Genshin Skills - 5* Talent Moves"].push(GENSHIN_CHARACTER_LIST[i].skillEmote);
            emotes["Cheat Panel: Genshin Skills - 5* Talent Moves"].push(GENSHIN_CHARACTER_LIST[i].burstEmote);
        }
        else {
            emotes["Cheat Panel: Genshin Skills - 4* Talent Moves"].push(GENSHIN_CHARACTER_LIST[i].skillEmote);
            emotes["Cheat Panel: Genshin Skills - 4* Talent Moves"].push(GENSHIN_CHARACTER_LIST[i].burstEmote);
        }
    }

    var final = {}
    for (var i in emotes) {
        if (emotes[i].length <= 20) final[i] = emotes[i];
        else {
            var l = sliceIntoChunks(emotes[i], 20);
            for (var j in l) final[i + " " + romanizeNumber(parseInt(j)+1)] = l[j];
        }
    }

	if (_category != null) {
		for (var i in emotes) {
			if (i.toLowerCase().includes(_category.toLowerCase())) final[i] = final[i];
		}
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
	if (obj instanceof Fighter || obj instanceof Duel || obj instanceof GenshinElementManager) {
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
	checkUpdateEncyclopedia();
});

// This event will run on every single message received, from any channel or DM.
CLIENT.on("message", async _message => { try {
	if (_message.channel.guild.id == "835951523325542400") return kusanaliBotMessage(_message);
	killDeadDuels();
	setBotActivity();
	skipWaitingDuels();
	checkMusicLoops();
	checkUpdateEncyclopedia();

	// Recuperation commande
	var argsUser = _message.content.trim().split(" ").filter(a => a != "");

	// Ignore si bot
	if(_message.author.bot) return;

	// PM
	if(_message.channel.type == "dm") {
		_message.channel.send(changeTextLeet(changeTextRandomCap(changeTextRussian(changeTextUwu(_message.content.trim())))));
		return;
	}

	// Ignore si pas appelé
	if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.first().id != CLIENT.user.id) return;
	console.log(argsUser);

	killDeadDuels();

	if (argsUser[1] == "rank") {
		// RANK
		var author = _message.author;
		if (_message.mentions.users.array().length > 1) author = _message.mentions.users.last();

		var firstTxt = "**" + author.username + "**"
		if (isPlayerWeebPP(author.id)) firstTxt += " - Weeb";
		if (isPlayerExpertPP(author.id)) firstTxt += " - PP Expert";
		if (isPlayerDestroyer(author.id)) firstTxt += " - Destroyer of Worlds";
		_message.channel.send(firstTxt + ":")

		_message.channel.send("You have " + getWinCounter(author.id) + " PP Points\nYour Rank is #" + getRank(author.id));
        _message.channel.send("Current build:\n" + buildToString(getPlayerBuild(author.id)));
		_message.channel.send("Achievements: " + getPlayerAchievementsPercent(author.id) + "%");
		return;
	}
	if (argsUser[1] == "ranks") {
		// RANKS
        if (argsUser.length > 1 && argsUser[2] == "full")  {
            var topFighters = getTopFighters(500);
            _message.channel.send("TOP 500 PP PUNCHERS:")
        }
        else {
            var topFighters = getTopFighters();
            _message.channel.send("TOP 10 PP PUNCHERS:")
        }

		for (var i in topFighters) {
			_message.channel.send("#" + (1+parseInt(i)) + ": " + topFighters[i].username + " (" + sciText(topFighters[i].points) + " PP Points)");
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
			}
		}

		sendCheatPanel(_message.channel, cat);
		return;
	}
    if (argsUser[1] == "bible") {
		if (argsUser.length > 2) {
			for (var i in BIBLE_ORDER) {
				var split = BIBLE_ORDER[i].split(" ");
				for (var k in split) {
					if (BIBLE_ORDER[i] != undefined && argsUser[2].toLowerCase() == split[k].toLowerCase()) {
		                _message.channel.send("**===== " + BIBLE_ORDER[i] + " =====**");
		                for (var j in FULL_BIBLE[BIBLE_ORDER[i]]) _message.channel.send(FULL_BIBLE[BIBLE_ORDER[i]][j]);
						return;
		            }
				}
	        }
			return _message.reply("sorry, I don't know this category. Are you sure it's spelled right?");
		}
        for (var i in BIBLE_ORDER) {
            if (BIBLE_ORDER[i] != undefined) {
                _message.channel.send("**===== " + BIBLE_ORDER[i] + " =====**");
                for (var j in FULL_BIBLE[BIBLE_ORDER[i]]) _message.channel.send(FULL_BIBLE[BIBLE_ORDER[i]][j]);
            }
        }
        _message.channel.send("-----------------");
        _message.channel.send("Have fun reading all that, nerd.");
		return;
    }
	if (argsUser[1] == "cheat" || argsUser[1] == "react") {
		if (argsUser.length <= 1) {
			return _message.reply(", please tell me the exact name of the emote you want to use.");
		}

		var duel = getDuel(_message.channel.id);
		if (duel == null) {
			return _message.reply(", you can only use this command during a duel.");
		}
		if (duel.getAttackFromEmote(argsUser[2]) == EMOTE_SKIP) {
			return _message.reply("sorry, I don't know this emote. Are you sure it is spelled right?");
		}

		duel.triggerReaction(argsUser[2], _message.author);
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
	if (argsUser[1] == "duel" || argsUser[1] == "hug") {
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
			return _message.channel.send("Sorry I've chosen to ignore your request because it is complete shit.");
		}

		var duel = new Duel(false);
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
	if (argsUser[1] == "quit" || argsUser[1] == "stop") {
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
            for (var i in FIGHTING_STYLE_LIST) {
                _message2.react(FIGHTING_STYLE_LIST[i].emote);
            }
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

		if (isPlayerWeebPP(user.id)) {
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
		if (isPlayerExpertPP(user.id)) {
			_message.reply("here are your PP Expert choices.").then(function (_message2) {
				for (var i in GOD_LIST) {
					if (GOD_LIST[i].type == "eldritch") {
						_message2.react(GOD_LIST[i].emote);
					}
				}
			}).catch(function(e) {
				console.log(e);
			});
		}

		_message.channel.send(buildToString(getPlayerBuild(user.id)));
		return;

	}
    if (argsUser[1] == "achievements") {
        var unlocks = getPlayerAchievements(_message.author.id);
        for (var i in ACHIEVEMENT_LIST) {
            var embedMessage = new DISCORD.MessageEmbed();
            if (unlocks.charAt(i) == '1') embedMessage.setColor("GREEN");
            else embedMessage.setColor("RED");
            embedMessage.setThumbnail(ACHIEVEMENT_LIST[i].imageLink);
            embedMessage.setTitle(ACHIEVEMENT_LIST[i].name);
            embedMessage.setDescription(ACHIEVEMENT_LIST[i].description);

            _message.channel.send("", {embed: embedMessage.toJSON()});
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
            if (argsUser[2] == "test1") {
                MERGABLE_WORLDS = [ DLC_GENSHIN ];
                ADMIN_CHEAT = true;
                return _message.reply("Genshin Only DLC");
            }

			if (getDuel(_message.channel.id) == null) {
				return _message.reply("there's no fight here...");
			}

			var duel = getDuel(_message.channel.id);
			if (argsUser[2] == "log") {
				console.log(duel);
				return _message.channel.send("Current duel logged.");
			}
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
			return _message.reply("huh?");
		}
	}
	if (argsUser.length > 3) {
		_message.reply("sorry, but I'm not interested.");
		return;
	}

	return _message.reply("I don't know this command, try using the help command!");
} catch(e) { sendErrorToDev(e) }
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => { try {
	if (_message.channel.guild.id == "835951523325542400") return;
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
    for (var i in FIGHTING_STYLE_LIST) {
        if (_reaction.emoji.id == FIGHTING_STYLE_LIST[i].emote) {
            toggleFightingStyle(_user.id, FIGHTING_STYLE_LIST[i].name);
    		reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
    		return;
        }
    }

	// gods
	for (var i in GOD_LIST) {
		if (_reaction.emoji.id == GOD_LIST[i].emote) {
			if (GOD_LIST[i].type == "waifu" && !isPlayerWeebPP(_user.id)) return;
			if (GOD_LIST[i].type == "eldritch" && !isPlayerExpertPP(_user.id)) return;

			toggleGod(_user.id, GOD_LIST[i].name);
			reactionChannel.send(buildToString(getPlayerBuild(_user.id)));
			return;
		}
	}
} catch(e) { sendErrorToDev(e) }
});

CLIENT.on('error', (_error) => {
	if (_message.channel.guild.id == "835951523325542400") return;
	sendErrorToDev(_error);
})
CLIENT.login(process.env.BOT_TOKEN);
