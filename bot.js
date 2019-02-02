// PP ARBITRATOR

// VARIABLES
// Constantes
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

const BETA_TEST = true;
const PRIVATE_TEST = true;

const EMOTE_PP1 = "535844749467320322"; // Fast Punch
const EMOTE_PP2 = "535240768441548810"; // Big Punch
const EMOTE_PP3 = "358232421537284109"; // Hologram
const EMOTE_PP4 = "358018762991075328"; // Flex
const EMOTE_PP5 = "358018763020435456"; // High Five
const EMOTE_PP6 = "358205593712066560"; // Kick

// Variables
var IS_BUSY = false;
var GUILD;


// CLASSES
class Fighter {
	/*
	this.isBigPP = false;
	this.isFastPP = false;
	this.isDrunkPP = false;
	this.isHockeyPuckPP = false;
	this.isAlienPP = false;
	
	this.idUser = 0;
	this.user; 
	*/
	
	constructor(_idUser) {
		// set variables
		this.idUser = _idUser;
		this.guildUser = GUILD.members.get(_idUser);
		this.user = this.guildUser.user;
		
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
			txt += "Big PP\n";
		}
		if (this.isFastPP) {
			txt += "Fast PP\n";
		}
		if (this.isDrunkPP) {
			txt += "Drunken PP\n";
		}
		if (this.isHockeyPuckPP) {
			txt += "Hockey Puck PP\n";
		}
		if (this.isAlienPP) {
			txt += "Alien PP\n";
		}
		
		txt += "\n"
		
		return txt;
	}
}


// FONCTIONS
function getRandomPercent() {
	return Math.floor(Math.random() * 100 + 1);
}

function setBotActivity(texte) {
	if (PRIVATE_TEST) {
		return CLIENT.user.setActivity("[PRIVATE TEST] " + texte);
	}
	if (BETA_TEST) {
		return CLIENT.user.setActivity("[BETA TEST] " + texte);
	}
	return CLIENT.user.setActivity(texte);
}
function clearBotActivity() {
	return CLIENT.user.setActivity("");
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
	var _battleChannel = _message.channel;
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
			return _message.reply("sorry " + _message.mentions.users.array()[0].username + "'s rank is not available atm :/");
		}
		return _message.reply("sorry, your rank is not availables atm :/");
	}
	if (argsUser[1] == "ranks") {
		return _message.reply("sorry, global ranks are not availables atm :/");
	}
	if (argsUser[1] == "duel") {
		if (_message.mentions.users.array().length <= 1) {
			return _message.reply("you need to tag the person you want to duel in the command");
		}
		return _message.reply("WIP");
	}
	if (argsUser[1] == "help") {
		return _message.reply("too lazy to make the doc for now\ncommands : rank, rank @someone, ranks, duel @someone, help");
	}
	console.log(argsUser);
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	var _message = _reaction.message;
	var _battleChannel = _message.channel;
	GUILD = _message.guild;
	
	// Ignore si bot
	if (_user.bot) return;
	
});

CLIENT.login(process.env.BOT_TOKEN);

