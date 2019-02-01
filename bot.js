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


// FONCTIONS
function getRandomPercent() {
	return Math.floor(Math.random() * 100 + 1);
}

function setBotActivity(texte) {
	if (BETA_TEST || PRIVATE_TEST) {
		return CLIENT.user.setActivity("[BETA TEST] " + texte);
	}
	return CLIENT.user.setActivity(texte);
}
function clearBotActivity() {
	return CLIENT.user.setActivity("");
}


CLIENT.on('ready', () => {
  console.log(`Logged in as ${CLIENT.user.tag}!`);
});


// This event will run on every single message received, from any channel or DM.
client.on("message", async _message => {
	var _battleChannel = _message.channel;
  
	// Ignore les autres bots
	if(_message.author.bot) return;
	// Ignore si pas appelé
	if (_message.mentions.users.array()[_message.mentions.users.array().size()].id != CLIENT.user.id) return;
	// Ignore si test privé
	if (_PRIVATE_TEST && _message.guild.members.get(_message.author.id).username != "brennfeu") return _message.reply("I am currently unavailable, sorry :/");
	// Ignore si deja occupé
	if (IS_BUSY) return;

});

client.on('messageReactionAdd', (_reaction, _user) => {
	var _message = _raction.message;
	var _battleChannel = _message.channel;
	
	// ignore si bot
	if (_user.bot) return;
	
});

CLIENT.login(process.env.BOT_TOKEN);
