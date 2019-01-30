const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame('PP Punch Arena');
});

var STRFighter1;
var DEXFighter1;
var STRFighter2;
var DEXFighter2;

var STRFighter1Battle;
var DEXFighter1Battle;
var STRFighter2Battle;
var DEXFighter2Battle;

var fighter1;
var fighter2;

var attackFighter1 = "";
var attackFighter2 = "";

var EMOTE_PP1 = "535844749467320322";
var EMOTE_PP2 = "535240768441548810";
var EMOTE_PP3 = "358232421537284109";
var EMOTE_PP4 = "358018762991075328";
var EMOTE_PP5 = "358018763020435456"; 


// This event will run on every single message received, from any channel or DM.
client.on("message", async message => {
	var prefixCommande = "PP Arbitrator#2638"
	var battleChannel = message.channel;
  
	// Ignore les autres bots
	if(message.author.bot) return;

	// Ignore si pas appelé
	if (message.mentions.users.array().length <= 1) return;
	if (!message.mentions.users.array()[1].bot) return;
	
	if (message.mentions.users.array()[0].id == message.author.id) return message.reply("you can't battle yourself you dumb shit");

	var argsUser = message.content.slice(prefixCommande.length).trim().split(/ +/g);
	var commandUser = argsUser.shift().toLowerCase();
	
	// reset attaques
	attackFighter1 = "";
	attackFighter2 = "";
  
	if(argsUser[0] === "duel") { 
		// def variables fighters
		fighter1 = message.guild.members.get(message.author.id);
		fighter2 = message.guild.members.get(message.mentions.users.array()[0].id);
		
		battleChannel.send(fighter1.roles);
		
		STRFighter1 = 50;
		DEXFighter1 = 30;
		STRFighter2 = 50;
		DEXFighter2 = 30;
		
		// changements en fonction des roles
		if (fighter1.roles.find("name", "Big PP")) {
			STRFighter1 += 10;
			DEXFighter1 -= 5;
		}
		if (fighter1.roles.find("name", "Fast PP")) {
			STRFighter1 -= 10;
			DEXFighter1 += 5;
		}
		if (fighter1.roles.find("name", "Drunken PP")) {
			DEXFighter1 -= 25;
		}
		if (fighter1.roles.find("name", "Hockey Puck PP")) {
			STRFighter1 -= 45;
			DEXFighter1 -= 45;
		}
		
		if (fighter2.roles.find("name", "Big PP")) {
			STRFighter2 += 10;
			DEXFighter2 -= 5;
		}
		if (fighter2.roles.find("name", "Fast PP")) {
			STRFighter2 -= 10;
			DEXFighter2 += 5;
		}
		if (fighter2.roles.find("name", "Drunken PP")) {
			DEXFighter2 -= 25;
		}
		if (fighter2.roles.find("name", "Hockey Puck PP")) {
			STRFighter2 -= 45;
			DEXFighter2 -= 45;
		}
		
		// au cas ou, pas super utile je pense
		STRFighter1Battle = STRFighter1;
		DEXFighter1Battle = DEXFighter1;
		STRFighter2Battle = STRFighter2;
		DEXFighter2Battle = DEXFighter2;
		
		// messages
		battleChannel.send(fighter1.user.username + " /VS/ " + fighter2.user.username);
		battleChannel.send("STR : " + STRFighter1 + ", DEX : " + DEXFighter1 + " /VS/ STR : " + STRFighter2 + ", DEX : " + DEXFighter2);
		
		// message w/ emotes
		battleChannel.send("Attack with a reaction !")
            .then(function (message2) {
				message2.react(EMOTE_PP1);
				message2.react(EMOTE_PP2);
				message2.react(EMOTE_PP3);
				message2.react(EMOTE_PP4);
            }).catch(function(e) {
				battleChannel.send(e);
			});
		return;
	}
	
	return "error ?";
});

client.on('messageReactionAdd', (reaction, user) => {
	var message = reaction.message;
	var battleChannel = message.channel;
	
	// ignore si bot
	if (user.bot) return;
	
	// definit type attaque
	if (user.username == fighter1.user.username) {
		attackFighter1 = reaction.emoji.name;
		battleChannel.send(fighter1.user.username + " : " + attackFighter1);
	}
	if (user.username == fighter2.user.username) {
		attackFighter2 = reaction.emoji.name;
		battleChannel.send(fighter2.user.username + " : " + attackFighter2);
	}
	
	// Les deux joueurs ont une attaque
	if (attackFighter1 != "" && attackFighter2 != "") {	
		// setup variables
		STRFighter1Battle = STRFighter1;
		DEXFighter1Battle = DEXFighter1;
		STRFighter2Battle = STRFighter2;
		DEXFighter2Battle = DEXFighter2;
			
		// Attaque brutale
		if (attackFighter1 == "PunchingPPReallyHard") {
			STRFighter1Battle += 100;
			DEXFighter1Battle -= 10;
		}
		if (attackFighter2 == "PunchingPPReallyHard") {
			STRFighter2Battle += 100;
			DEXFighter2Battle -= 10;
		}
		
		// Attaque Fuck
		if (attackFighter1 == "Hologram") {
			STRFighter1Battle += 1000000;
			DEXFighter1Battle -= 30;
		}
		if (attackFighter2 == "Hologram") {
			STRFighter2Battle += 1000000;
			DEXFighter2Battle -= 30;
		}
		
		// CALCUL
		DEXFighter1Battle += Math.floor(Math.random() * 50 + 1);
		DEXFighter2Battle += Math.floor(Math.random() * 50 + 1);
		
		var testDrunk1 = (Math.floor(Math.random() * 1000 + 1) > 500);
		var testDrunk2 = (Math.floor(Math.random() * 1000 + 1) > 500);
		
		// Attaque Heal
		if (attackFighter1 == "FlexBro") {
			STRFighter1Battle = -10;
			DEXFighter1Battle -= 10;
		}
		if (attackFighter2 == "FlexBro") {
			STRFighter2Battle = -10;
			DEXFighter2Battle -= 10;
		}
		
		battleChannel.send(fighter1.user.username + " : " + DEXFighter1Battle + " /VS/ " + fighter2.user.username + " : " + DEXFighter2Battle);
		
		// Test qui gagne
		if (DEXFighter1Battle > DEXFighter2Battle) {
			battleChannel.send(fighter1.user.username + " hits " + fighter2.user.username);
			if (fighter2.roles.find("name", "Drunken PP") && testDrunk2) {
				battleChannel.send(fighter2.user.username + " felt nothing cause too drunk");
			}
			else {
				STRFighter2 -= Math.floor(10 + STRFighter1Battle / 10);
			}
			
			// Heal
			if(attackFighter1 == "FlexBro") {
				STRFighter1 += 10;
				STRFighter1 += Math.floor(50-STRFighter1*0.2);
			}
		}
		else if (DEXFighter1Battle < DEXFighter2Battle) {
			battleChannel.send(fighter2.user.username + " hits " + fighter1.user.username);
			if (fighter1.roles.find("name", "Drunken PP") && testDrunk1) {
				battleChannel.send(fighter1.user.username + " felt nothing cause too drunk");
			}
			else {
				STRFighter1 -= Math.floor(10 + STRFighter2Battle / 10);
			}
			
			// Heal
			if(attackFighter2 == "FlexBro") {
				STRFighter2 += 10;
				STRFighter2 += Math.floor(50-STRFighter2*0.2);
			}
		}
		else {
			battleChannel.send("Both of you attacks !");
			// Heal
			if(attackFighter1 == "FlexBro") {
				STRFighter1 += 10;
				STRFighter1 += Math.floor(50-STRFighter1*0.2);
			}
			else {
				// Immune
				if (fighter1.roles.find("name", "Drunken PP") && testDrunk1) {
					battleChannel.send(fighter1.user.username + " felt nothing cause too drunk");
				}
				else {
					STRFighter1 -= Math.floor(10 + STRFighter2Battle / 10);
				}
			}
			
			// Heal
			if(attackFighter2 == "FlexBro") {
				STRFighter2 += 10;
				STRFighter2 += Math.floor(50-STRFighter2*0.2);
			}
			else {
				// Immune
				if (fighter2.roles.find("name", "Drunken PP") && testDrunk2) {
					battleChannel.send(fighter2.user.username + " felt nothing cause too drunk");
				}
				else {
					STRFighter2 -= Math.floor(10 + STRFighter1Battle / 10);
				}
			}
		}
		// reset attaques
		attackFighter1 = "";
		attackFighter2 = "";
		
		// messages
		battleChannel.send("-----------------------------");
		if (STRFighter1 <= 0 && STRFighter2 <= 0) {
			battleChannel.send("Both of you lost. No one won this time. You losers");
			
			fighter1 = null;
			fighter2 = null;
			
			return;
		}
		else if (STRFighter1 <= 0) {
			battleChannel.send(fighter2.user.username + " won ! Congrats !");
			
			fighter1 = null;
			fighter2 = null;
			
			return;
		}
		else if (STRFighter2 <= 0) {
			battleChannel.send(fighter1.user.username + " won ! Congrats !");
			
			fighter1 = null;
			fighter2 = null;
			
			return;
		}
		
		// messages
		battleChannel.send(fighter1.user.username + " /VS/ " + fighter2.user.username);
		battleChannel.send("STR : " + STRFighter1 + ", DEX : " + DEXFighter1 + " /VS/ STR : " + STRFighter2 + ", DEX : " + DEXFighter2);
		
		// message w/ emotes
		battleChannel.send("Attack with a reaction !")
            .then(function (message2) {
				message2.react(EMOTE_PP1);
				message2.react(EMOTE_PP2);
				message2.react(EMOTE_PP3);
				message2.react(EMOTE_PP4);
            }).catch(function(e) {
				battleChannel.send(e);
			});
		return;
		
	}
	
	return; 
});

client.login(process.env.BOT_TOKEN);
