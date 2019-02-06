// PP ARBITRATOR

// VARIABLES
// Constantes
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

const BETA_TEST = true;
const PRIVATE_TEST = false;

const EMOTE_PP1 = "535844749467320322"; // PunchingPP
const EMOTE_PP2 = "535240768441548810"; // PunchingPPReallyHard
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
const EMOTE_PP15 = "358018762701668353"; // Save 
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
var STEEL_PROTECTION = false;


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
		
		// Natural values
		this.STRValue = 50;
		this.DEXValue = 20;
		
		// Battle variables
		this.resetBattleVariables();
		this.isCircumcised = false;
		this.isOverCircumcised = false;
		this.missedMoves = 0;
		
		// Check Bad Values
		if (this.STR <= 0) {
			this.STRValue += (0 - this.STR) + 1 
		}
	}
	
	// fighter.STR
	get STR() {
		var str = this.STRValue;
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
		var dex = this.DEXValue;
		// Burst
		if (this.hasBurst == 1) {
			return 0;
		}
		// Scout
		if (this.hasExamined == 1) {
			dex += 30;
		}
		
		if (this.isBigPP) {
			dex -= 5;
		}
		if (this.isFastPP) {
			dex += 5;
		}
		if (this.isDrunkPP) {
			dex -= 15;
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
		
		if (this.isOverCircumcised) {
			txt += "\nAlso is overcircumcised";
		}
		else if (this.isCircumcised) {
			
			txt += "\nAlso is circumcised";
		}
		
		txt += "\n"
		
		return txt;
	}
	
	playMove() {
		// Also +1 in newTurn
		this.missedMoves -= 1;
		
		if (this.attack == EMOTE_PP1) {
			// Punching PP
			BATTLE_CHANNEL.send(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP !");
			getOpponentOf(this).damage(Math.floor(10 + this.STR / 10));
		}
		else if (this.attack == EMOTE_PP2) {
			// Punching PP Really Hard
			BATTLE_CHANNEL.send(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP really hard !");
			getOpponentOf(this).damage(Math.floor(20 + this.STR / 10));
		}
		else if (this.attack == EMOTE_PP3) {
			// Hologram
			BATTLE_CHANNEL.send(this.user.username + " touches " + getOpponentOf(this).user.username + "'s PP vital point !");
			getOpponentOf(this).damage(1000);
		}
		else if (this.attack == EMOTE_PP4) {
			// Flex
			BATTLE_CHANNEL.send(this.user.username + " flexes !");
			var bonus = Math.floor(Math.random() * 30 + 1);
			BATTLE_CHANNEL.send(this.user.username + " get " + bonus + " STR !");
			this.STRValue += bonus;			
		}
		else if (this.attack == EMOTE_PP5) {
			// High Five
			BATTLE_CHANNEL.send(this.user.username + " is feeling lonely... :(");			
		}
		else if (this.attack == EMOTE_PP6) {
			// Kick
			BATTLE_CHANNEL.send(this.user.username + " kicks " + getOpponentOf(this).user.username + "'s PP !");
			getOpponentOf(this).damage(Math.floor(20 + this.STR / 10)*3);
		}
		else if (this.attack == EMOTE_PP7) {
			// Turkey
			BATTLE_CHANNEL.send(this.user.username + " and " + getOpponentOf(this).user.username + " start a feast !");
			this.STRValue += 100;
			this.turkeyCountdown = 11;
			getOpponentOf(this).STRValue += 100;
			getOpponentOf(this).turkeyCountdown = 11;
			BATTLE_CHANNEL.send("They both gain 100 STR !");
		}
		else if (this.attack == EMOTE_PP8) {
			// Trap Sign
			BATTLE_CHANNEL.send(this.user.username + " is ready to burst !");
			BATTLE_CHANNEL.send("...");
			BATTLE_CHANNEL.send("Well...");
		}
		else if (this.attack == EMOTE_PP9) {
			// Time Kick
			BATTLE_CHANNEL.send(this.user.username + " wants a hockey puck PP...");
			if (this.isHockeyPuckPP) {
				BATTLE_CHANNEL.send("...but he already had one !");
			}
			else {
				this.isHockeyPuckPP = true;
				BATTLE_CHANNEL.send("...and now he got it !");
			}
		}
		else if (this.attack == EMOTE_PP10) {
			// Tank
			BATTLE_CHANNEL.send(this.user.username + " brings a tank !");
			BATTLE_CHANNEL.send("FIRE !");
			getOpponentOf(this).damage(1000);
		}
		else if (this.attack == EMOTE_PP11) {
			// Steel
			BATTLE_CHANNEL.send(this.user.username + " sets up a protection for nothing...");
		}
		else if (this.attack == EMOTE_PP12) {
			// Overcircumscise
			BATTLE_CHANNEL.send(this.user.username + " over-circumcised himself !");
			if (this.isOverCircumcised) {
				BATTLE_CHANNEL.send("Wait he already was !");
			}
			else {
				this.isCircumcised = true;
				this.isOverCircumcised = true;
				this.STRValue = this.STR/2;
			}
		}
		else if (this.attack == EMOTE_PP13) {
			// Scout
			BATTLE_CHANNEL.send(this.user.username + " examine the qualities of " + getOpponentOf(this).user.username + "'s PP !");
			if (getRandomPercent() <= 33) {
				BATTLE_CHANNEL.send("And he learns a lot !");
				this.hasExamined = 2;
			}
			else {
				BATTLE_CHANNEL.send("And he learns nothing...");
			}
		}
		else if (this.attack == EMOTE_PP14) {
			// SawBlade
			BATTLE_CHANNEL.send(this.user.username + " cuts " + getOpponentOf(this).user.username + "'s PP !");
			getOpponentOf(this).bleedDamage += 5;
		}
		else if (this.attack == EMOTE_PP15) {
			// Save
			var test = getRandomPercent();
			BATTLE_CHANNEL.send(this.user.username + " changes one of his roles !");
			if (test <= 20) {
				this.isFastPP = !this.isFastPP;
			}
			else if (test <= 40) {
				this.isBigPP = !this.isBigPP;
			}
			else if (test <= 60) {
				this.isAlienPP = !this.isAlienPP;
			}
			else if (test <= 80) {
				this.isHockeyPuckPP = !this.isHockeyPuckPP;
			}
			else {
				this.isDrunkPP = !this.isDrunkPP;
			}
		}
		else if (this.attack == EMOTE_PP16) {
			// Satan
			BATTLE_CHANNEL.send(this.user.username + " possesses " + getOpponentOf(this).user.username + "'s PP !");
			getOpponentOf(this).isPossessed = 2;
		}
		else if (this.attack == EMOTE_PP17) {
			// RiotShield
			BATTLE_CHANNEL.send(this.user.username + " gets a shield !");
			this.isProtected = true;
		}
		else if (this.attack == EMOTE_PP18) {
			// Red Pill
			BATTLE_CHANNEL.send(this.user.username + " gets a pill !");
			this.STRValue += 5;
			this.DEXValue += 3;
		}
		else if (this.attack == EMOTE_PP19) {
			// Pig
			BATTLE_CHANNEL.send(this.user.username + " squeezes hog yeah yeah !");
			this.isPigged = true;
		}
		else if (this.attack == EMOTE_PP20) {
			// DoomReverse (MookGrenade)
			BATTLE_CHANNEL.send(this.user.username + " sets up a DOOM-REVERSE(tm) !");
			this.doomReverse = 4;
		}
		else if (this.attack == EMOTE_PP21) {
			// Acid
			BATTLE_CHANNEL.send(this.user.username + " gets an acid armor !");
			this.acidArmor = 5;
		}
		else if (this.attack == EMOTE_PP22) {
			// Circumscise
			BATTLE_CHANNEL.send(this.user.username + " circumcised himself !");
			if (this.isCircumcised) {
				BATTLE_CHANNEL.send("Wait he already was !");
			}
			else {
				this.isCircumcised = true;
				this.resetBattleVariables();
			}
		}
		else if (this.attack == EMOTE_PP23) {
			// LaughSoul
			BATTLE_CHANNEL.send(this.user.username + " laughs at " + getOpponentOf(this).user.username + " !");
			BATTLE_CHANNEL.send("He gets " + getOpponentOf(this).missedMoves*10 + " STR !");
			this.STRValue += getOpponentOf(this).missedMoves*10;
		}
		else if (this.attack == EMOTE_PP24) {
			// KnockBack
			BATTLE_CHANNEL.send(this.user.username + " swap the natural STR values !");
			this.STRValue += getOpponentOf(this).STRValue;
			getOpponentOf(this).STRValue = this.STRValue - getOpponentOf(this).STRValue;
			this.STRValue -= getOpponentOf(this).STRValue;
		}
		else if (this.attack == EMOTE_PP25) {
			// Bombardment
			BATTLE_CHANNEL.send(this.user.username + " call for a bombardment !!!");
			this.damage(1000);
			getOpponentOf(this).damage(1000);
		}
		else {
			BATTLE_CHANNEL.send(this.user.username + " MOVE NOT PROGRAMMED YET");
		}
	}
	
	damage(_amount) {
		// Acid
		if (this.acidArmor >= 1) {
			BATTLE_CHANNEL.send(this.user.username + " has an acid armor !");
			getOpponentOf(this).damage(10);
		}
		
		if (this.isDrunkPP && getRandomPercent() < 50) {
			// Drunk PP
			BATTLE_CHANNEL.send(this.user.username + " felt nothing because too drunk !");
		}
		else if (this.attack == EMOTE_PP10) {
			// Tank
			BATTLE_CHANNEL.send(this.user.username + " felt nothing !");
		}
		else if (this.isProtected) {
			// RiotShield
			BATTLE_CHANNEL.send(this.user.username + " reflects the damages !");
			getOpponentOf(this).damage(_amount);
		}
		else if (STEEL_PROTECTION) {
			// Steel
			this.STRValue -= Math.floor(_amount/10);
			BATTLE_CHANNEL.send(this.user.username + " takes " + Math.floor(_amount/10) + " damages !");
		}
		else {
			// Damage
			this.STRValue -= _amount;
			BATTLE_CHANNEL.send(this.user.username + " takes " + _amount + " damages !");
		}
		
		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			BATTLE_CHANNEL.send(this.user.username + " uses DOOM-REVERSE(tm) !");
			getOpponentOf(this).damage(50);
		}
	}
	
	turnChange() {
		// Clear attaque
		this.attack = "";
		
		// Also -1 in playMove
		this.missedMoves += 1;
		
		// Overcircumcised = immune to status effects
		if (this.isOverCircumcised) {
			this.isBigPP = false;
			this.isFastPP = false;
			this.isDrunkPP = false;
			this.isHockeyPuckPP = false;
			this.isAlienPP = false;
			this.hasExamined = 0;
			
			this.resetBattleVariables()
		}
		
		// Turkey
		if (this.turkeyCountdown != -1) {
			this.turkeyCountdown -= 1;
			if (this.turkeyCountdown == 0) {
				BATTLE_CHANNEL.send(this.user.username + " explodes !");
				this.damage(1000);
			}
			else {
				BATTLE_CHANNEL.send(this.user.username + " has " + this.turkeyCountdown + " turn(s) left !");
			}
		}
		
		// Trap Sign, Examine, SatanPossess
		this.hasBurst -= 1;
		this.hasExamined -= 1;
		this.isPossessed -= 1;
		this.doomReverse -= 1;
		this.acidArmor -= 1;
		
		// Bleed (SawBlade)
		if (this.bleedDamage > 0) {
			BATTLE_CHANNEL.send(this.user.username + " bleeds !");
			this.damage(this.bleedDamage);
		}
		
		// Pig
		if (this.isPigged) {
			BATTLE_CHANNEL.send(this.user.username + " squeezes hog !");
			this.STRValue += 2;
		}
	}
	
	win() {
		if (this.isHockeyPuckPP) {
			addWinCounter(this, 4);
		}
		else {
			addWinCounter(this, 1);
		}
	}
	
	resetBattleVariables() {
		this.turkeyCountdown = -1;
		this.hasBurst = 0;
		this.bleedDamage = 0;
		this.hasExamined = 0;
		this.isPossessed = 0;
		this.isPigged = false;
		this.doomReverse = 0;
		this.acidArmor = 0;
		// TODO keep up to date
	}
}


// FONCTIONS
function getRandomPercent() {
	var i = Math.floor(Math.random() * 100 + 1);
	console.log("random : " + i);
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
		case EMOTE_PP4:
			return -20;
		case EMOTE_PP2:
		case EMOTE_PP6:
			return -10;
		case EMOTE_PP28:
			return -5;
		case EMOTE_PP12:
		case EMOTE_PP22:
			return 20;
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
	
	if (FIGHTER1.user.id == FIGHTER2.user.id) {
		BATTLE_CHANNEL.send("You can't battle yourself");
		stopDuel()
		return;
	}
	
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
	FIGHTER1.turnChange();
	FIGHTER2.turnChange();
	
	STEEL_PROTECTION = false;
	
	if (FIGHTER1.STR <= 0 && FIGHTER2.STR <= 0) {
		BATTLE_CHANNEL.send("Both of you lost. No one won this time. You losers");
		stopDuel();
		return;
	}
	else if (FIGHTER1.STR <= 0) {
		BATTLE_CHANNEL.send(FIGHTER2.user.username + " won ! Congrats !");
		FIGHTER2.win();
		stopDuel();
		return;
	}
	else if (FIGHTER2.STR <= 0) {
		BATTLE_CHANNEL.send(FIGHTER1.user.username + " won ! Congrats !");
		FIGHTER1.win();
		stopDuel();
		return;
	}
	
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
		BATTLE_CHANNEL.send(e);
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
	var illegalList = [EMOTE_PP6, EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, EMOTE_PP10,
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
	console.log(_fighter.user.username + " wins : " + _number);
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
	if (_message.mentions.users.array().length < 1) return;
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
	if (argsUser[1] == "style") {
		// STYLE
		return _message.reply("sorry, you can't change your roles for now");
	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("too lazy to make the doc for now\ncommands : rank, rank @someone, ranks, duel @someone, style, help");
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
			
			// Possession
			if (FIGHTER2.isPossessed == 1) {	
				FIGHTER2.attack = _reaction.emoji.id;
				BATTLE_CHANNEL.send(FIGHTER2.user.username + " : " + _reaction.emoji.name);
			}
		}
		else if (_user.id == FIGHTER2.user.id) {
			FIGHTER2.attack = _reaction.emoji.id;
			BATTLE_CHANNEL.send(FIGHTER2.user.username + " : " + _reaction.emoji.name);
			
			// Possession
			if (FIGHTER1.isPossessed == 1) {	
				FIGHTER1.attack = _reaction.emoji.id;
				BATTLE_CHANNEL.send(FIGHTER1.user.username + " : " + _reaction.emoji.name);
			}
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
				BATTLE_CHANNEL.send("You cheaters do not deserve to live !");
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
				
				winner.win();
				addWinCounter(getOpponentOf(winner), -1);
				
				stopDuel();
				return;
			}
			
			// ATTAQUES
			var dexAttack1 = FIGHTER1.DEX + getDexChange(FIGHTER1.attack) + Math.floor(Math.random() * 50 + 1);
			var dexAttack2 = FIGHTER2.DEX + getDexChange(FIGHTER2.attack) + Math.floor(Math.random() * 50 + 1);
			BATTLE_CHANNEL.send(FIGHTER1.user.username + " : " + dexAttack1 + " /VS/ " + FIGHTER2.user.username + " : " + dexAttack2);
			
			if (FIGHTER1.attack == EMOTE_PP5 && FIGHTER2.attack == EMOTE_PP5) {
				// HIGH FIVES :D
				BATTLE_CHANNEL.send("Wow, look at those bros !");
				BATTLE_CHANNEL.send("That was some good high five.");
				BATTLE_CHANNEL.send("Okay, the fight ends now !");
				BATTLE_CHANNEL.send("I'm literally shaking and crying right now.");
				BATTLE_CHANNEL.send("This is so beautiful...");
				BATTLE_CHANNEL.send("I love you all.");
				stopDuel();
				return;
			}
			
			// Steel
			if (FIGHTER1.attack == EMOTE_PP11 || FIGHTER2.attack == EMOTE_PP11) {
				STEEL_PROTECTION = true;
			}
			
			if (dexAttack1 - dexAttack2 <= 10 && dexAttack1 - dexAttack2 >= -10) {
				BATTLE_CHANNEL.send("Both opponents attack this turn !");
				
				FIGHTER1.playMove();
				// Burst
				if (FIGHTER2.attack == EMOTE_PP8) {
					BATTLE_CHANNEL.send(FIGHTER2.user.username + " burst !");
					FIGHTER1.hasBurst = 2;
				}
				BATTLE_CHANNEL.send("-----------------");
				
				FIGHTER2.playMove();
				// Burst
				if (FIGHTER1.attack == EMOTE_PP8) {
					BATTLE_CHANNEL.send(FIGHTER1.user.username + " burst !");
					FIGHTER2.hasBurst = 2;
				}
			}
			else if (dexAttack1 > dexAttack2) {
				FIGHTER1.playMove();
				// Burst
				if (FIGHTER2.attack == EMOTE_PP8) {
					BATTLE_CHANNEL.send(FIGHTER2.user.username + " burst !");
					FIGHTER1.hasBurst = 2;
				}
				
				// Scout
				if (FIGHTER2.attack == EMOTE_PP13) {
					FIGHTER2.playMove();
				}
			}
			else {
				FIGHTER2.playMove();
				// Burst
				if (FIGHTER1.attack == EMOTE_PP8) {
					BATTLE_CHANNEL.send(FIGHTER1.user.username + " burst !");
					FIGHTER2.hasBurst = 2;
				}
				
				// Scout
				if (FIGHTER1.attack == EMOTE_PP13) {
					FIGHTER1.playMove();
				}
			}
			
			newTurnDuel();
		}
		
		return;
	}
	
	// CHANGE ROLE
	
	
	
	
	return;
	
});

CLIENT.login(process.env.BOT_TOKEN);

