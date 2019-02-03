// PP ARBITRATOR

// VARIABLES
// Constantes
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

const BETA_TEST = true;
const PRIVATE_TEST = true;

const EMOTE_PP1 = "535844749467320322"; // PunchingPP
const EMOTE_PP2 = "535240768441548810"; // PunchingPPRealyHard
const EMOTE_PP3 = "358232421537284109"; // Hologram
const EMOTE_PP4 = "358018762991075328"; // Flex
const EMOTE_PP5 = "358018763020435456"; // High Five
const EMOTE_PP6 = "358205593712066560"; // Kick
const EMOTE_PP7 = "358018762739548162"; // Turkey
const EMOTE_PP8 = "358018763095801866"; // TrapSign
const EMOTE_PP9 = "358018763179819010"; // TimeKick
const EMOTE_PP10 = "358571576754700288"; // Tank
const EMOTE_PP11 = "358018763141939200"; // Steel
const EMOTE_PP12 = "358018763792318466"; // Skeleton
const EMOTE_PP13 = "358568671204999188"; // Scout
const EMOTE_PP14 = "358018763037212673"; // SawBlade
const EMOTE_PP15 = "358018762705731586"; // Save 
const EMOTE_PP16 = "358018763058053120"; // Satan 
const EMOTE_PP17 = "358235326608703488"; // RiotShield
const EMOTE_PP18 = "358018762999595018"; // RedPill
const EMOTE_PP19 = "358196010687922176"; // Pig
const EMOTE_PP20 = "358196010448846851"; // MookGrenade
const EMOTE_PP21 = "358232420815732736"; // Acid
const EMOTE_PP22 = "358018762642948097"; // MeatBro
const EMOTE_PP23 = "358555894772006922"; // LaughSoul
const EMOTE_PP24 = "358018762710188044"; // Knockback
const EMOTE_PP25 = "358018762940612608"; // Bombardment
const EMOTE_PP26 = "358196010264297473"; // BigSatan
const EMOTE_PP27 = "358018762928160768"; // Bullet
const EMOTE_PP28 = "358018762756063244"; // BigGuy
const EMOTE_PP29 = "358018763330945027"; // Barrel
const EMOTE_PP30 = "358018762999463946"; // AlertExclamationPoint
const EMOTE_PP31 = "358018762701668353"; // HoBro
const EMOTE_PP32 = "358018763200790529"; // HighFiveEmote
const EMOTE_PP33 = "358232421239619584"; // Headless
const EMOTE_PP34 = "358547363138109440"; // Facehugger
const EMOTE_PP35 = "358558744931467265"; // Facehugged
const EMOTE_PP36 = "358018763007721472"; // Explosion
const EMOTE_PP37 = "358018763666489344"; // KidneyStone
const EMOTE_PP38 = "358570453205516288"; // DeadBro
const EMOTE_PP39 = "358018762689216514"; // Confused ?
const EMOTE_PP40 = "358547363129982976"; // ChestBurst = Big PP
const EMOTE_PP41 = "358562555263713282"; // CheersBro = 007
const EMOTE_PP42 = "358232420635639811"; // BronanSlam
const EMOTE_PP43 = "358232420882841600"; // BrocketeerDive
const EMOTE_PP44 = "358018763523620864"; // Kamikaze
const EMOTE_PP45 = "358196010197188609"; // Boomerang
const EMOTE_PP46 = "340915657032073216"; // Truffle
const EMOTE_PP47 = "338053599299108864"; // Pudding
const EMOTE_PP48 = "340516123210547201"; // Brennfeu
const EMOTE_PP49 = "358188173651607552"; // Soup
const EMOTE_PP50 = "342313262651670528"; // Perhaps

// Variables
var IS_BUSY = false;
var IS_DUELLING = false;

var GUILD;
var BATTLE_CHANNEL;
var LIST_AVAILABLE_ATTACKS = [];

var FIGHTER1 = null;
var FIGHTER2 = null;

var ILLEGAL_BOMBING = false;
var IS_ARBITRATORY_BLIND = false;


// CLASSES
class Fighter {	
	constructor(_idUser) {
		// set variables
		this.idUser = _idUser;
		this.guildUser = GUILD.members.get(_idUser);
		this.user = this.guildUser.user;
		this.attack = "";
		
		// set roles
		this.isBigPP = false;
		this.isFastPP = false;
		this.isDrunkPP = false;
		this.isHockeyPuckPP = false;
		this.isAlienPP = false;
		if (this.guildUser.roles.find("name", "Big PP")) {
			this.isBigPP = true;
		}
		if (this.guildUser.roles.find("name", "Fast PP")) {
			this.isFastPP = true;
		} 
		if (this.guildUser.roles.find("name", "Drunken PP")) {
			this.isDrunkPP = true;
		}
		if (this.guildUser.roles.find("name", "Hockey Puck PP")) {
			this.isHockeyPuckPP = true;
		}
		if (this.guildUser.roles.find("name", "Alien PP")) {
			this.isAlienPP = true;
		}
	}
	
	// fighter.STR
	get STR() {
		var str = 50;
		if (this.isBigPP) {
			str += 10;
		}
		if (this.isFastPP) {
			str -= 5;
		}
		if (this.isHockeyPuckPP) {
			str -= 45;
		}
		return str;
	}
	
	// fighter.DEX
	get DEX() {
		var dex = 20;
		if (this.isBigPP) {
			dex -= 5;
		}
		if (this.isFastPP) {
			dex += 5;
		}
		if (this.isDrunkPP) {
			dex -= 25;
		}
		if (this.isHockeyPuckPP) {
			dex -= 45;
		}
		return dex;
	}
	
	// fighter.toString
	toString() {
		var txt = this.user.username;
		txt += "\nSTR : " + this.STR + "  //  DEX : " + this.DEX;
		
		txt += "\n\nFighting Styles :\n";
		if (this.isBigPP) {
			txt += " - Big PP\n";
		}
		if (this.isFastPP) {
			txt += " - Fast PP\n";
		}
		if (this.isDrunkPP) {
			txt += " - Drunken PP\n";
		}
		if (this.isHockeyPuckPP) {
			txt += " - Hockey Puck PP\n";
		}
		if (this.isAlienPP) {
			txt += " - Alien PP\n";
		}
		
		txt += "\n"
		
		return txt;
	}
	
	playMove() {
		BATTLE_CHANNEL.send(this.user.username + " MOVE ARE IN PROGRESS");
		console.log(this.attack);
	}
}


// FONCTIONS
function getRandomPercent() {
	var i = Math.floor(Math.random() * 100 + 1);
	console.log(i);
	return i;
}

function setBotActivity(_texte) {
	if (PRIVATE_TEST) {
		return CLIENT.user.setActivity("[PRIVATE TEST] " + _texte);
	}
	if (BETA_TEST) {
		return CLIENT.user.setActivity("[BETA TEST] " + _texte);
	}
	return CLIENT.user.setActivity(_texte);
}
function clearBotActivity() {
	return CLIENT.user.setActivity("");
}

function getOpponentOf(_fighter) {
	if (FIGHTER1.user.id == _fighter.user.id) {
		return FIGHTER2;
	}
	return FIGHTER1;
}

function illegalGetCaught(_percentage) {
	if (IS_ARBITRATORY_BLIND) {
		console.log("blind");
		return false;
	}
	var result = (getRandomPercent() < _percentage);
	console.log("Illegal percentage : " + _percentage);
	return result;
}
function getRisk(_move) {
	console.log("risk of move : " + _move);
	switch(_move) {
		case EMOTE_PP6:
			return 20;
		case EMOTE_PP10:
			return 90;
		case EMOTE_PP43:
			return 15;
		case EMOTE_PP25:
			return 60;
		case EMOTE_PP23:
			return 75;
		case EMOTE_PP44:
			return 40;
		case EMOTE_PP49:
			return 98;
	}
	return 0;
}
function getDexChange(_move) {
	console.log("move dex : " + _move);
	switch(_move) {
		case EMOTE_PP26:
		case EMOTE_PP17:
			return -20;
		case EMOTE_PP2:
		case EMOTE_PP6:
			return -10;
		case EMOTE_PP28:
			return -5;
		case EMOTE_PP13:
			return 100;
		case EMOTE_PP49:
			return 10000;
	}
	return 0;
}

function startDuel(_message) {
	IS_BUSY = true;
	IS_DUELLING = true;
	setBotActivity("PP Punch Arena");
	
	console.log("F1 " + _message.author.id);
	console.log("F2 " + _message.mentions.users.array()[0]);
	FIGHTER1 = new Fighter(_message.author.id);
	FIGHTER2 = new Fighter(_message.mentions.users.array()[0].id);
	
	ILLEGAL_BOMBING = false;
	BATTLE_CHANNEL.send("TIME FOR A DUEL");
}
function stopDuel() {
	FIGHTER1 = null;
	FIGHTER2 = null;
	
	ILLEGAL_BOMBING = false;
	
	setBotActivity("");
	IS_DUELLING = false;
	IS_BUSY = false;
}
function newTurnDuel() {
	FIGHTER1.attack = "";
	FIGHTER2.attack = "";
	
	BATTLE_CHANNEL.send("\n\n===== NEW TURN =====");
	BATTLE_CHANNEL.send(FIGHTER1.toString());
	BATTLE_CHANNEL.send("===== /VS/ =====");
	BATTLE_CHANNEL.send(FIGHTER2.toString());
	setRandomAttackList();
	BATTLE_CHANNEL.send("\n\nAttack with a reaction !").then(function (_message2) {
		for (var i in LIST_AVAILABLE_ATTACKS) {
			console.log(LIST_AVAILABLE_ATTACKS[i]);
			_message2.react(LIST_AVAILABLE_ATTACKS[i]);
		}
	}).catch(function(e) {
		_battleChannel.send(e);
	});
}

function setRandomAttackList(_isBlind = false) {
	var listeAttaques = [];
	var emote;
	
	if (_isBlind) {
		return [EMOTE_39];
	}
	// Attaque 1
	if (getRandomPercent() > 20) {
		emote = getRandomEmote();
		listeAttaques.push(emote);
	}
	else {
		listeAttaques.push(EMOTE_PP1);
	}
	// Attaque 2
	if (getRandomPercent() > 20) {
		emote = getRandomEmote();
		if (listeAttaques.indexOf(emote) < 0) {
			listeAttaques.push(emote);
		}
		else {
			listeAttaques.push(EMOTE_PP2);
		}
	}
	else {
		listeAttaques.push(EMOTE_PP2);
	}
	// Attaque 3
	if (getRandomPercent() > 20) {
		emote = getRandomEmote();
		if (listeAttaques.indexOf(emote) < 0) {
			listeAttaques.push(emote);
		}
		else {
			listeAttaques.push(EMOTE_PP3);
		}
	}
	else {
		listeAttaques.push(EMOTE_PP3);
	}
	// Attaque 4
	if (getRandomPercent() > 20) {
		emote = getRandomEmote();
		if (listeAttaques.indexOf(emote) < 0) {
			listeAttaques.push(emote);
		}
		else {
			listeAttaques.push(EMOTE_PP4);
		}
	}
	else {
		listeAttaques.push(EMOTE_PP4);
	}
	// Attaque 5
	if (getRandomPercent() > 20) {
		emote = getRandomEmote();
		if (listeAttaques.indexOf(emote) < 0) {
			listeAttaques.push(emote);
		}
		else {
			listeAttaques.push(EMOTE_PP5);
		}
	}
	else {
		listeAttaques.push(EMOTE_PP5);
	}
	
	LIST_AVAILABLE_ATTACKS = listeAttaques;
}
function getRandomEmote(_canBeIllegal = true) {
	var legalList = [EMOTE_PP7, EMOTE_PP8, EMOTE_PP9,
					EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20,
					EMOTE_PP21, EMOTE_PP22, EMOTE_PP24, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30,
					EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40,
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP45, EMOTE_PP46, EMOTE_PP47, EMOTE_PP48, EMOTE_PP50
					];
	var illegalList = [EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, EMOTE_PP10,
					EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20,
					EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30,
					EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40,
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP47, EMOTE_PP48, EMOTE_PP49, EMOTE_PP50
					];
	var goodList
	if (_canBeIllegal) {
		goodList = illegalList;
	}
	else {
		goodList = legaList;
	}
	
	if (ILLEGAL_BOMBING) {
		goodList.push(EMOTE_36);
	}
	
	return goodList[Math.floor(Math.random()*goodList.length)];
}

function addWinCounter(_fighter, _number) {
	// TODO
	// negative number of wins for cheaters
}


CLIENT.on('ready', () => {
	console.log(`Logged in as ${CLIENT.user.tag}!`);
	
	// annonce BETA_TEST
	if (BETA_TEST || PRIVATE_TEST) {
		setBotActivity("");
	}
});


// This event will run on every single message received, from any channel or DM.
CLIENT.on("message", async _message => {
	BATTLE_CHANNEL = _message.channel;
	GUILD = _message.guild;
  
	// Ignore si bot
	if(_message.author.bot) return;
	// Ignore si pas appelé
	if (_message.mentions.users.array()[_message.mentions.users.array().length-1].id != CLIENT.user.id) return;
	// Ignore si test privé
	if (PRIVATE_TEST && _message.author.username != "brennfeu") return _message.reply("I am currently unavailable, sorry :/");
	// Ignore si deja occupé
	if (IS_BUSY) return;
	
	// Recuperation commande
	var argsUser = _message.content.trim().split(" ");
	
	if (argsUser[1] == "rank") {
		if (_message.mentions.users.array().length > 1) {
			// RANK @SOMEONE
			return _message.reply("sorry " + _message.mentions.users.array()[0].username + "'s rank is not available atm :/");
		}
		// RANK
		return _message.reply("sorry, your rank is not availables atm :/");
	}
	if (argsUser[1] == "ranks") {
		// RANKS
		return _message.reply("sorry, global ranks are not availables atm :/");
	}
	if (argsUser[1] == "duel") {
		if (_message.mentions.users.array().length <= 1) {
			return _message.reply("you need to tag the person you want to duel in the command !\nSee the help command for more help !");
		}
		
		// DUEL
		startDuel(_message);
		newTurnDuel();
		
		return;
	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("too lazy to make the doc for now\ncommands : rank, rank @someone, ranks, duel @someone, help");
	}
	
	return _message.reply("I don't know this command, try using the help command !");
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	var _message = _reaction.message;
	
	// Ignore si bot
	if (_user.bot) return;
	
	// DUEL
	if (IS_DUELLING) {
		// Assigne attaque
		if (_user.id == FIGHTER1.user.id) {
			FIGHTER1.attack = _reaction.emoji.id;
			BATTLE_CHANNEL.send(FIGHTER1.user.username + " : " + _reaction.emoji.name);
		}
		else if (_user.id == FIGHTER2.user.id) {
			FIGHTER2.attack = _reaction.emoji.id;
			BATTLE_CHANNEL.send(FIGHTER2.user.username + " : " + _reaction.emoji.name);
		}
		
		// Deux attaques sont faites
		if (FIGHTER1.attack != "" && FIGHTER2.attack != "") {
			console.log(FIGHTER1.attack + " / " + FIGHTER2.attack);
			
			// test illegal
			var caught1 = illegalGetCaught(getRisk(FIGHTER1.attack));
			var caught2 = illegalGetCaught(getRisk(FIGHTER2.attack));
			
			if (LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER1.attack) < 0) {
				caught1 = caught1 || illegalGetCaught(50);
			}
			if (LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER2.attack) < 0) {
				caught2 = caught2 || illegalGetCaught(50);
			}
			
			var winner;
			
			BATTLE_CHANNEL.send("\n\n===== ATTACKS =====");
			if (caught1 && caught2) {
				BATTLE_CHANNEL.send("WAIT YOU ARE DOING ILLEGAL STUFF RIGHT NOW !");
				BATTLE_CHANNEL.send("You both loose the fight !");
				BATTLE_CHANNEL.send("You cheaters do net deserve to live !");
				BATTLE_CHANNEL.send("You fucking suckers");
				
				addWinCounter(FIGHTER1, -1);
				addWinCounter(FIGHTER2, -1);
				
				stopDuel();
				return;
			}
			else if (caught1) {
				winner = FIGHTER2;
			}
			else if (caught2) {
				winner = FIGHTER1;
			}
			
			if (caught1 || caught2) {
				BATTLE_CHANNEL.send("WAIT " + getOpponentOf(winner).user.username.toUpperCase() + " IS DOING ILLEGAL STUFF RIGHT NOW !");
				BATTLE_CHANNEL.send(getOpponentOf(winner).user.username + " is disqualified for being a dumb shit.");
				BATTLE_CHANNEL.send(winner.user.username + " wins !");
				
				addWinCounter(winner, 1);
				addWinCounter(getOpponentOf(winner), -1);
				
				stopDuel();
				return;
			}
			
			// ATTAQUES
			var dexAttack1 = FIGHTER1.DEX + getDexChange(FIGHTER1.attack) + Math.floor(Math.random() * 50 + 1);
			var dexAttack2 = FIGHTER2.DEX + getDexChange(FIGHTER2.attack) + Math.floor(Math.random() * 50 + 1);
			BATTLE_CHANNEL.send(FIGHTER1.user.username + " : " + dexAttack1 + " /VS/ " + FIGHTER2.user.username + " : " + dexAttack2);
			
			if (dexAttack1 == dexAttack2) {
				BATTLE_CHANNEL.send("Both opponents attack this turn !");
				FIGHTER1.playMove(attackFighter1);
				BATTLE_CHANNEL.send("-----------------");
				FIGHTER2.playMove(attackFighter2);
			}
			else if (dexAttack1 > dexAttack2) {
				FIGHTER1.playMove();
			}
			else {
				FIGHTER2.playMove();
			}
			
			newTurnDuel();
		}
		
		return;
	}
	
	// CHANGE ROLE
	
	
	
	
	return;
	
});

CLIENT.login(process.env.BOT_TOKEN);

