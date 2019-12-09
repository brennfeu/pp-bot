// COMPLETE GARBAGE CODE WARNING //

// VARIABLES
// Constantes
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

const FAST_PP_ROLE = "Fast PP";
const BIG_PP_ROLE = "Big PP";
const ALIEN_PP_ROLE = "Alien PP";
const DRUNK_PP_ROLE = "Drunken PP";
const HOCKEY_PUCK_PP_ROLE = "Hockey Puck PP";

const GOD_PP1_PRIEST = "Mongo Priest";
const GOD_PP2_PRIEST = "Dr Phil Priest";
const GOD_PP3_PRIEST = "LeprePuds Priest";
const GOD_PP4_PRIEST = "DickHead Pudding Priest";
const GOD_PP5_PRIEST = "Hello There Puds Priest";
const GOD_PP6_PRIEST = "DickDickSon666 Priest";
const GOD_PP7_PRIEST = "Jew Priest";
const GOD_PP8_PRIEST = "Fabulous Toast Man Priest";
const GOD_PP9_PRIEST = "Brenn Priest";
const GOD_PP10_PRIEST = "Fabio Priest";
const GOD_PP11_PRIEST = "Country Music Brenn Priest";
const GOD_PP12_PRIEST = "Espinoza Priest";
const GOD_PP13_PRIEST = "700IQ Priest";
const GOD_PP14_PRIEST = "UREGonnaGetRAPED Priest";
const GOD_PP15_PRIEST = "STFU Isaac Priest";
const GOD_PP16_PRIEST = "The Man Who made a Monster Priest";
const GOD_PP17_PRIEST = "Hitler Priest";
const GOD_PP18_PRIEST = "Salt King Priest";
const GOD_PP19_PRIEST = ""; // TO ADD TO PRIEST_ROLES
const GOD_PP20_PRIEST = ""; // TO ADD TO PRIEST_ROLES
const GOD_PP21_PRIEST = "D.I.C.K. Priest";
const PRIEST_ROLES = [GOD_PP1_PRIEST, GOD_PP2_PRIEST, GOD_PP3_PRIEST, GOD_PP4_PRIEST, GOD_PP5_PRIEST, GOD_PP6_PRIEST, GOD_PP7_PRIEST, GOD_PP8_PRIEST, GOD_PP9_PRIEST, GOD_PP10_PRIEST, GOD_PP11_PRIEST, GOD_PP12_PRIEST, GOD_PP13_PRIEST, GOD_PP14_PRIEST, GOD_PP15_PRIEST, GOD_PP16_PRIEST, GOD_PP17_PRIEST, GOD_PP18_PRIEST];

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
const EMOTE_PP15 = "358018762701668353"; // Hobro
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
const EMOTE_PP31 = "358018762705731586"; // SaveMeSign
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

const EMOTE_PP51 = "615518949110448129"; // Priest move
const EMOTE_PP52 = "615516249912508419"; // Special Priest Move

const EMOTE_PP53 = "645196083516932107"; // Singular Explosion
const EMOTE_PP54 = "644881329116413972"; // Explosion Loop
const EMOTE_PP55 = "644880197123833856"; // Dual Explosion Loop
const EMOTE_PP56 = "644880194209054721"; // SignPost
const EMOTE_PP57 = "644881328592125980"; // Cage / Sacrifice
const EMOTE_PP58 = "644880195341254656"; // Cageless
const EMOTE_PP59 = "650987017571926016"; // Triggered Pépin2Pom
const EMOTE_PP60 = "644880194959704085"; // PP Duel
const EMOTE_LIST = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5, EMOTE_PP6, EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, EMOTE_PP10, EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20, EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30, EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP36, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40, EMOTE_PP41, EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP47, EMOTE_PP48, EMOTE_PP49, EMOTE_PP50, EMOTE_PP51, EMOTE_PP52, EMOTE_PP53, EMOTE_PP54, EMOTE_PP55, EMOTE_PP56, EMOTE_PP57, EMOTE_PP58, EMOTE_PP59, EMOTE_PP60];
const SPECIAL_EMOTE_LIST = [EMOTE_PP53, EMOTE_PP54, EMOTE_PP55, EMOTE_PP56, EMOTE_PP57, EMOTE_PP58, EMOTE_PP59, EMOTE_PP60];

const GOD_PP1 = "644643782888783892" // Mongo
const GOD_PP2 = "617686716479832064" // Dr Phil / WhatDAFuk
const GOD_PP3 = "616332243337609257" // LeprePuds
const GOD_PP4 = "614823752492122156" // DickHead Pudding
const GOD_PP5 = "614823329731313670" // Hello There Puds
const GOD_PP6 = "616877566396989451" // DickDickSon666
const GOD_PP7 = "644621040093364283" // Jew
const GOD_PP8 = "614823500951060481" // Fabulous Toast Man
const GOD_PP9 = "615268884651442186" // That's me
const GOD_PP10 = "618037444222255104" // Fabio
const GOD_PP11 = "614825720962744344" // Country Music Brenn
const GOD_PP12 = "615887132157804564" // Espinoza
const GOD_PP13 = "617258233307987986" // 700IQ
const GOD_PP14 = "615271176314290249" // UREGonnaGetRAPED
const GOD_PP15 = "614822537800712213" // STFU Isaac
const GOD_PP16 = "619795568230924291" // The Man Who made a Monster
const GOD_PP17 = "622395294390157329" // Hitler
const GOD_PP18 = "650830165751889935"; // Salt King
const GOD_PP19 = "" // TO ADD TO MESSAGE REACTS
const GOD_PP20 = "" // TO ADD TO MESSAGE REACTS
const GOD_PP21 = "644617343456247829"; // D.I.C.K.

// BOSSES
const BOSS_PP1 = "Cthulhu";
const BOSS_PP2 = "Free Lives HQ";
const BOSS_PP3 = "The Moon Lord";

// Variables
var IS_BUSY = false;
var IS_DUELLING = false;
var IS_CHANGING_STYLE = false;

var GUILD;
var BATTLE_CHANNEL;
var LIST_AVAILABLE_ATTACKS = [];
var LIST_MESSAGES = [];

var FIGHTER1 = null;
var FIGHTER2 = null;
var STYLER = 0;

var ILLEGAL_BOMBING = false;
var BLIND_COUNTDOWN = 0;
var STEEL_PROTECTION = false;
var BARREL_DAMAGE = false;
var SAVE_LIST = [];
var STOPPED_MOVE_LIST = [];
var INFINITE_DAMAGE = 0;
var MOVE_COUNT = 0;
var DAMAGE_COUNT = 0;
var REVERSE_DAMAGE = 0;
var FORCE_EVENT = false;
var GAY_TURNS = 0;
var ILLEGAL_JEWS = false;
var ATTACK_MISS_COUNTDOWN = 0;
var AUTO_MOVES_COUNTDOWN = 0;
var NUCLEAR_BOMB = 0;

var DISABLE_ABANDON = false;

var PP_ARMAGEDDON = false;
var EVENT_PP_ENLIGHTENMENT = false;
var EVENT_PP_PURGE = false;
var EVENT_CONFUSION = false;
var EVENT_BOSS = false;
var BOSS_HEALTH = 0;
var BOSS_DAMAGE = 0;
var CURRENT_BOSS = "";
var EVENT_BLOOD_MOON = false;

var FORCE_PERHAPS = false;
var FORCE_SATAN = false;


// CLASSES
class Fighter {
	constructor(_idUser) {
		// set variables
		this.idUser = _idUser;
		this.guildUser = GUILD.members.get(_idUser);
		this.user = this.guildUser.user;
		this.attack = "";
		this.oldAttack = "";

		// set roles
		this.isBigPP = false;
		this.isFastPP = false;
		this.isDrunkPP = false;
		this.isHockeyPuckPP = false;
		this.isAlienPP = false;
		if (this.guildUser.roles.find("name", BIG_PP_ROLE)) {
			this.isBigPP = true;
		}
		if (this.guildUser.roles.find("name", FAST_PP_ROLE)) {
			this.isFastPP = true;
		}
		if (this.guildUser.roles.find("name", DRUNK_PP_ROLE)) {
			this.isDrunkPP = true;
		}
		if (this.guildUser.roles.find("name", HOCKEY_PUCK_PP_ROLE)) {
			this.isHockeyPuckPP = true;
		}
		if (this.guildUser.roles.find("name", ALIEN_PP_ROLE)) {
			this.isAlienPP = true;
		}

		this.godList = [];
		for (var i in PRIEST_ROLES) {
			if (this.guildUser.roles.find("name", PRIEST_ROLES[i])) {
				this.godList.push(PRIEST_ROLES[i])
			}
		}
		while (this.godList.length < 3) {
			var r = PRIEST_ROLES[Math.floor(Math.random()*PRIEST_ROLES.length)];
			if (this.godList.indexOf(r) <= -1) {
				this.godList.push(r);
			}
		}
		if (this.guildUser.roles.find("name", GOD_PP21_PRIEST)) {
			this.godList.push(GOD_PP21_PRIEST); // D.I.C.K.
		}
		
		this.regularCharges = 0;
		this.specialCharges = 0;

		// Natural values
		this.STRValue = 70;
		this.DEXValue = 20;

		// Battle variables
		this.resetBattleVariables();
		this.isCircumcised = false;
		this.isOverCircumcised = false;
		this.missedMoves = 0;
		this.bonusDamage = 0;
		this.attackedThisTurn = false;
		this.isTerrorist = false;
		this.hasBurst = 0;
		this.chimera = false;
		this.tearDrinker = 0;
		this.summonTankCountdown = 0;
		this.turnSkip = 0;
		this.eldritchFriend = false;
		this.isCowBoy = false;
		this.trueBarbarian = false;
		this.isSalty = false;
		this.pigHeal = 0;
		this.isLucky = 0;
		this.doomReverse = 0;
		this.hasExamined = 0;
		this.extraLife = 0;

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
		if (this.isAlienPP) {
			str -= 10;
		}
		if (this.hasBoner) {
			str += 50
		}
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			str += 50;
		}
		if (PP_ARMAGEDDON) {
			str += 1000000;
		}

		if (EVENT_BOSS && str <= 0) {
			return 0;
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
		if (this.hasBoner) {
			dex -= 20;
		}
		if (this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
			dex += 10;
		}
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			dex += 50;
		}
		if (PP_ARMAGEDDON) {
			dex += 200;
		}
		
		if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1 && dex <= 0) {
			return 0;
		}
		return dex;
	}

	// fighter.toString
	toString() {
		if (this.STR <= 0 && EVENT_BOSS) {
			return this.user.username + "\n -> Dead :(";
		}

		var txt = "**" + this.user.username;
		txt += "\nSTR :** " + this.STR + "  //  **DEX :** " + this.DEX;

		if (this.regularCharges > 0 || this.specialCharges > 0) {
			txt += "\n\n**Faith :**"
			for (var i in this.godList) {
				txt += "\n - " + this.godList[i];
			}
		}
		if (this.regularCharges > 0) {
			txt += "\nRegular Charges : " + this.regularCharges;
		}
		if (this.specialCharges > 0) {
			txt += "\nSpecial Charges : " + this.specialCharges;
		}
		    
		txt += "\n\n**Fighting Styles :**\n";
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
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			txt += " - *Ultimate PP*\n";
		}

		// Status
		txt += "\n**Status :**\n"
		if (this.isOverCircumcised) {
			txt += " - Overcircumcised\n";
		}
		else if (this.isCircumcised) {

			txt += " - Circumcised\n";
		}
		if (this.bleedDamage > 0) {
			txt += " - Haemorrhage : " + this.bleedDamage + "\n";
		}
		if (this.turkeyCountdown > 0) {
			txt += " - Turkey Countdown : " + this.turkeyCountdown + " turns\n";
		}
		if (this.eldritchFriend) {
			txt += " - Eldritch Friendly\n";
		}
		if (this.pigHeal > 0) {
			txt += " - Hog Squeezer\n";
		}
		if (this.doomReverse > 0) {
			txt += " - DOOM-REVERSE(tm) (for " + this.doomReverse + " turns)\n";
		}
		if (this.acidArmor > 0) {
			txt += " - Armored in acid (for " + this.acidArmor + " turns)\n";
		}
		if (this.hasBoomerang > 0) {
			txt += " - With a Boomerang (for " + this.hasBoomerang + " turns)\n";
		}
		if (this.isLucky > 0) {
			txt += " - Lucky (for " + this.isLucky + " turns)\n";
		}
		if (this.badLuck) {
			txt += " - Unlucky\n";
		}
		if (this.hasBoner) {
			txt += " - Big Boner Mmmmmmh...\n";
		}
		if (this.chimera) {
			txt += " - Furry PP\n";
		}
		if (this.tearDrinker > 0) {
			txt += " - Tear Drinker\n";
		}
		if (this.isCowBoy) {
			txt += " - Cowboy\n";
		}
		if (this.isSalty) {
			txt += " - Salty\n";
		}
		if (this.trueBarbarian) {
			txt += " - Great Barbarian from the North Seeking New Lands for his Kingdom\n";
		}
		if (this.isPossessed > 0) {
			txt += " - **Possessed by " + getOpponentOf(this).user.username + "**\n";
		}
		if (this.turnSkip > 0) {
			txt += " - **To the Ranch**\n";
		}
		if (this.grabbedPP > 0) {
			txt += " - **Grabbed PP**\n";
		}
		if (this.summonTankCountdown > 0) {
			txt += " - **Summoning the Monster...**\n";
		}
		if (this.extraLife > 0) {
			txt += " - **Extra lives : " + this.extraLife + "**\n";
		}
		
		txt += "\n**Synergies :**\n"
		if (this.godList.indexOf(GOD_PP5_PRIEST) > -1 && this.godList.indexOf(GOD_PP6_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			txt += " - Unholy Pudding Trinity\n";
		}
		if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			txt += " - A Sad Witness\n";
		}
		if (this.godList.indexOf(GOD_PP7_PRIEST) > -1 && this.godList.indexOf(GOD_PP17_PRIEST) > -1) {
			txt += " - Jew-Hitler Paradox\n";
		}
		if (this.godList.indexOf(GOD_PP11_PRIEST) > -1 && this.godList.indexOf(GOD_PP9_PRIEST) > -1) {
			txt += " - Garbage Music Maker\n";
		}
		if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
			txt += " - Getting therapy sessions\n";
		}
		if (this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
			txt += " - Too smart and too powerful\n";
		}
		if (this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
			txt += " - Super Predator\n";
		}
		if (this.godList.indexOf(GOD_PP10_PRIEST) > -1 && this.godList.indexOf(GOD_PP8_PRIEST) > -1) {
			txt += " - Yaoi fan\n";
		}
		if (this.godList.indexOf(GOD_PP16_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
			txt += " - Salt Master\n";
		}
		if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
			txt += " - Chad Team Member\n";
		}

		return txt;
	}

	playMove(_newMove = this.attack) {
		this.attackedThisTurn = true;
		MOVE_COUNT += 1;
		INFINITE_DAMAGE = 0;
		var attack = _newMove;

		if (false) { // maybe someday
			var numberAttacks = 3;
		}
		else {
			var numberAttacks = 1;
		}

		if (EVENT_BOSS && this.STR <= 0) {
			this.attack = "IS_DEAD_LOL"
		}

		for (var sdsds = 0; sdsds < numberAttacks; sdsds++) {
			if (attack == EMOTE_PP1) {
				// Punching PP
				addMessage(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).damage(Math.floor(10 + this.STR / 10));
			}
			else if (attack == EMOTE_PP2) {
				// Punching PP Really Hard
				addMessage(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP really hard !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10));
			}
			else if (attack == EMOTE_PP3) {
				// Hologram
				addMessage(this.user.username + " touches " + getOpponentOf(this).user.username + "'s PP vital point !");
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP4) {
				// Flex
				addMessage(this.user.username + " flexes !");
				this.heal(Math.floor(Math.random() * 30 + 1));
			}
			else if (attack == EMOTE_PP5) {
				// High Five
				addMessage(this.user.username + " is feeling lonely... :(");
			}
			else if (attack == EMOTE_PP6) {
				// Kick
				addMessage(this.user.username + " kicks " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10)*3);
			}
			else if (attack == EMOTE_PP7) {
				// Turkey
				addMessage(this.user.username + " and " + getOpponentOf(this).user.username + " start a feast !");
				this.heal(100);
				this.turkeyCountdown = 11;
				getOpponentOf(this).heal(100);
				getOpponentOf(this).turkeyCountdown = 11;
				if (this.isOverCircumcised) {
					addMessage(this.user.username + "'s circumcision gets a bit healed !");
					this.isOverCircumcised = false;
					this.isCircumcised = true;
				}
				else if (this.isCircumcised) {
					addMessage(this.user.username + " is no longer circumcised !");
					this.isCircumcised = false;
				}
				if (getOpponentOf(this).isOverCircumcised) {
					addMessage(getOpponentOf(this).user.username + "'s circumcision gets a bit healed !");
					getOpponentOf(this).isOverCircumcised = false;
					getOpponentOf(this).isCircumcised = true;
				}
				else if (getOpponentOf(this).isCircumcised) {
					addMessage(getOpponentOf(this).user.username + " is no longer circumcised !");
					getOpponentOf(this).isCircumcised = false;
				}
			}
			else if (attack == EMOTE_PP8) {
				// Trap Sign
				addMessage(this.user.username + " is ready to burst !");
				addMessage("...");
				addMessage("Well...");
			}
			else if (attack == EMOTE_PP9) {
				// Time Kick
				addMessage(this.user.username + " wants a hockey puck PP...");
				if (this.isHockeyPuckPP) {
					addMessage("...but he already had one !");
				}
				else {
					this.isHockeyPuckPP = true;
					addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP10) {
				// Tank
				addMessage(this.user.username + " brings a tank !");
				addMessage("FIRE !");
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP11) {
				// Steel
				addMessage(this.user.username + " sets up a protection for nothing...");
			}
			else if (attack == EMOTE_PP12) {
				// Overcircumscise
				addMessage(this.user.username + " over-circumcises himself !");
				if (this.isOverCircumcised) {
					addMessage("Wait he already was !");
				}
				else {
					this.isCircumcised = true;
					this.isOverCircumcised = true;
					this.STRValue = this.STR/2;
				}
			}
			else if (attack == EMOTE_PP13) {
				// Scout
				addMessage(this.user.username + " examines the qualities of " + getOpponentOf(this).user.username + "'s PP !");
				if (getRandomPercent() <= 33) {
					addMessage("And he learns a lot !");
					this.hasExamined = 2;
				}
				else {
					addMessage("And he learns nothing...");
				}
			}
			else if (attack == EMOTE_PP14) {
				// SawBlade
				addMessage(this.user.username + " cuts " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).bleedDamage += 5;
			}
			else if (attack == EMOTE_PP15) {
				// Save
				addMessage(this.user.username + " reverses the damages and heals !");
				if (REVERSE_DAMAGE < 0) {
					REVERSE_DAMAGE = 1;
				}
				else {
					REVERSE_DAMAGE = -1;
				}
			}
			else if (attack == EMOTE_PP16) {
				// Satan
				addMessage(this.user.username + " possesses " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).isPossessed = 2;
			}
			else if (attack == EMOTE_PP17) {
				// RiotShield
				addMessage(this.user.username + " gets a shield !");
				this.isProtected = true;
			}
			else if (attack == EMOTE_PP18) {
				// Red Pill
				addMessage(this.user.username + " gets a pill !");
				this.STRValue += 5;
				this.DEXValue += 3;
			}
			else if (attack == EMOTE_PP19) {
				// Pig
				addMessage(this.user.username + " squeezes hog yeah yeah !");
				this.pigHeal += 2;
				if (this.hasBoner) {
					addMessage(this.user.username + " loses his boner !");
				}
				this.hasBoner = false;
			}
			else if (attack == EMOTE_PP20) {
				// DoomReverse (MookGrenade)
				addMessage(this.user.username + " sets up a DOOM-REVERSE(tm) !");
				this.doomReverse = 4;
				if (this.STR <= 0) {
					addMessage(this.user.username + " uses DOOM-REVERSE(tm) !");
					this.STRValue += (0-this.STR)+1;
					this.doomReverse = 0;
				}
			}
			else if (attack == EMOTE_PP21) {
				// Acid
				addMessage(this.user.username + " gets an acid armor !");
				this.acidArmor = 5;
			}
			else if (attack == EMOTE_PP22) {
				// Circumscise
				addMessage(this.user.username + " circumcises himself !");
				if (this.isCircumcised) {
					addMessage("Wait he already was !");
				}
				else {
					this.isCircumcised = true;
					this.resetBattleVariables();
				}
			}
			else if (attack == EMOTE_PP23) {
				// LaughSoul
				addMessage(this.user.username + " laughs at " + getOpponentOf(this).user.username + " !");
				addMessage("He gets " + getOpponentOf(this).missedMoves*50 + " STR !");
				this.STRValue += getOpponentOf(this).missedMoves*50;
			}
			else if (attack == EMOTE_PP24) {
				// KnockBack
				addMessage(this.user.username + " swaps the natural STR values !");
				this.STRValue += getOpponentOf(this).STRValue;
				getOpponentOf(this).STRValue = this.STRValue - getOpponentOf(this).STRValue;
				this.STRValue -= getOpponentOf(this).STRValue;
			}
			else if (attack == EMOTE_PP25) {
				// Bombardment
				addMessage(this.user.username + " calls for a bombardment !!!");
				this.damage(1000);
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP26) {
				// Big Satan
				DISABLE_ABANDON = true;
				addMessage(this.user.username + " summons Satan chaotic powers !!!");
				sendMessages();
				this.playMove(getRandomEmote(false));
				addMessage("-----------------");
				this.playMove(getRandomEmote(false));
				addMessage("-----------------");
				this.playMove(getRandomEmote(false));
				addMessage("-----------------");
				this.playMove(getRandomEmote());
				addMessage("-----------------");
				this.playMove(getRandomEmote());
				addMessage("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				addMessage("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				addMessage("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				addMessage("-----------------");
				getOpponentOf(this).playMove(getRandomEmote());
				addMessage("-----------------");
				getOpponentOf(this).playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP27) {
				// BigGuyBullet
				addMessage(this.user.username + " uses his PP as a gun !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10));
				this.DEXValue -= 20;
				getOpponentOf(this).DEXValue -= 20;

			}
			else if (attack == EMOTE_PP28) {
				// BigGuy
				addMessage(this.user.username + " intimidates " + getOpponentOf(this).user.username + " !");
				getOpponentOf(this).hasBurst = 2;

			}
			else if (attack == EMOTE_PP29) {
				// Barrel
				addMessage(this.user.username + " sets up a barrel for nothing...");
			}
			else if (attack == EMOTE_PP30) {
				// ExclamationPoint
				addMessage(this.user.username + " tries to go back too far in time !");
				addMessage("This create a space-time distortion !");
				this.playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP31) {
				// Save Me Sign
				addMessage(this.user.username + " wants to be saved !");
			}
			else if (attack == EMOTE_PP32) {
				// High Five Emote
				addMessage(this.user.username + " stops the time !");
				STOPPED_MOVE_LIST = LIST_AVAILABLE_ATTACKS;
			}
			else if (attack == EMOTE_PP33) {
				// Headless - Big Kidney Stone
				addMessage(this.user.username + " shoots a big kidney stone !");
				this.damage(50);
				getOpponentOf(this).damage(50);
			}
			else if (attack == EMOTE_PP34) {
				// Facehugger
				addMessage(this.user.username + " impregnates " + getOpponentOf(this).user.username + " !");
				if (!getOpponentOf(this).isAlienPP) {
					addMessage(getOpponentOf(this).user.username + " gets an alien PP !");
				}
				getOpponentOf(this).isAlienPP = true;
				getOpponentOf(this).damage(Math.floor(getOpponentOf(this).STR/2));
			}
			else if (attack == EMOTE_PP35) {
				// Facehugged
				addMessage(this.user.username + " impregnates the arbitratory !");
				BLIND_COUNTDOWN = 2;
				if (getRandomPercent() < 33) {
					BLIND_COUNTDOWN = 9999999;
					addMessage("It looks like permanent damage !");
				}
			}
			else if (attack == EMOTE_PP36) {
				// Explosion
				addMessage(this.user.username + " plays the terrorist move !");
				if (this.isTerrorist) {
					getOpponentOf(this).damage(5000);
				}
				else {
					addMessage("But no terrorist move was planned !");
				}
			}
			else if (attack == EMOTE_PP37) {
				// Disembowled - Kidney Stone
				addMessage(this.user.username + " shoots a kidney stone !");
				this.damage(25);
				getOpponentOf(this).damage(25);
			}
			else if (attack == EMOTE_PP38) {
				// DeadBro
				addMessage(this.user.username + " wants a fast PP...");
				if (this.isFastPP) {
					addMessage("...but he already had one !");
				}
				else {
					this.isFastPP = true;
					addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP39) {
				// Interrogation Point
				addMessage(this.user.username + " summons a random move !");
				this.playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP40) {
				// ChestBurst
				addMessage(this.user.username + " wants a big PP...");
				if (this.isBigPP) {
					addMessage("...but he already had one !");
				}
				else {
					this.isBigPP = true;
					addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP41) {
				// 007 Drunk
				addMessage(this.user.username + " wants a drunk PP...");
				if (this.isDrunkPP) {
					addMessage("...but he already had one !");
				}
				else {
					this.isDrunkPP = true;
					addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP42) {
				// Bronan Slam
				addMessage(this.user.username + " builds up for his next attack...");
				this.bonusDamage += 20;
			}
			else if (attack == EMOTE_PP43) {
				// BrocketeerDive
				addMessage(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP with his head !");
				getOpponentOf(this).damage(Math.floor(10 + this.STR / 10));
				getOpponentOf(this).hasBurst = 2;
			}
			else if (attack == EMOTE_PP44) {
				// Kamikaze
				addMessage(this.user.username + " plans a suicide move !");
				ILLEGAL_BOMBING = true;
				this.isTerrorist = true;
			}
			else if (attack == EMOTE_PP45) {
				// Boomerang
				addMessage(this.user.username + " gets a nice boomerang.");
				this.hasBoomerang = 4;
			}
			else if (attack == EMOTE_PP46) {
				// TruffleHistorian
				DISABLE_ABANDON = true;
				addMessage(this.user.username + " calls the Ancient Fongus !");
				var chaosNumber = getRandomPercent();
				if (getRandomPercent() >= 50) {
					var winner = this;
				}
				else {
					var winner = getOpponentOf(this);
				}
				if (this.eldritchFriend && !getOpponentOf(this).eldritchFriend) {
					chaosNumber = 100;
					var winner = this;
				}
				else if (getOpponentOf(this).eldritchFriend && !this.eldritchFriend) {
					chaosNumber = 100;
					var winner = getOpponentOf(this);
				}
				addMessage("He will use " + chaosNumber + "% of his power in " + winner.user.username + " !");
				sendMessages();
				chaosNumber = Math.floor(chaosNumber/4);
				var i;
				for (i = 0; i < chaosNumber; i++) {
					addMessage("-----------------");
					winner.playMove(getRandomEmote());
				}
			}
			else if (attack == EMOTE_PP47) {
				// Pudding
				addMessage(this.user.username + " abandons the battle !");
				this.STRValue = -999999999;
				return;
			}
			else if (attack == EMOTE_PP48) {
				// Brennfeu
				addMessage(this.user.username + " messes everything !");
				addMessage("As always !");
				this.STRValue += Math.floor((getRandomPercent() - 50)/2);
				this.DEXValue += Math.floor((getRandomPercent() - 50)/2);
				getOpponentOf(this).STRValue += Math.floor((getRandomPercent() - 50)/2);
				getOpponentOf(this).DEXValue += Math.floor((getRandomPercent() - 50)/2);
			}
			else if (attack == EMOTE_PP49) {
				// Soup
				addMessage(this.user.username + " ascends !");
				addMessage("Behold " + this.user.username + " the living God !");
				this.STRValue += 10000;
				this.DEXValue += 10000;
			}
			else if (attack == EMOTE_PP50) {
				// Perhaps
				addMessage(this.user.username + " thinks about life and the universe...");
				if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
					var randomEvent = getRandomPercent();
					// Events, chance at becoming god, making everything proc twice, both players getting 0 dex.
					if (randomEvent <= 25) {
						if (!FORCE_EVENT) {
							addMessage("Events will now occur every turn !");
						}
						else {
							addMessage("Events will stop occurring every turn !");
						}
						FORCE_EVENT = !FORCE_EVENT;
					}
					else if (randomEvent <= 50) {
						if (getRandomPercent() <= 34) {
							addMessage("His body and mind have now ascended !");
							this.playMove(EMOTE_PP49);
						}
						else {
							addMessage("But he isn't ready to become a Living God...");
						}
					}
					else if (randomEvent <= 75) {
						addMessage("Natural values have been doubled !");
						this.STRvalue = this.STRValue*2;
						this.DEXvalue = this.DEXValue*2;
						getOpponentOf(this).STRValue = getOpponentOf(this).STRValue*2;
						getOpponentOf(this).DEXValue = getOpponentOf(this).DEXValue*2;
					}
					else {
						addMessage("Both fighers DEX has been changed to 0 !");
						this.DEXValue = 0 - (this.DEX - this.DEXValue);
						getOpponentOf(this).DEXValue = 0 - (getOpponentOf(this).DEX - getOpponentOf(this).DEXValue);
					}
				}
				else {
					addMessage("Wait he forgot about the battle...");
				}
			}
			else if (attack == EMOTE_PP51) {
				// Priest Regular Move
				addMessage(this.user.username + " calls for his Gods to help him !");
				if (this.regularCharges > 0) {
					this.regularCharges -= 1;
				}
				else if (this.godList.indexOf(GOD_PP21_PRIEST) > -1) { // D.I.C.K.
					addMessage("-----------------");
					addMessage("D.I.C.K. is disappointed in " + this.user.username + " !");
					this.playMove(EMOTE_PP47);
					return;
				}
				if (this.godList.indexOf(GOD_PP8_PRIEST) > -1) { // Fabulous Toast Man
					addMessage("-----------------");
					addMessage("Fabulous Toast Man answers his calls !");
					var randomGod = Math.floor(Math.random()*PRIEST_ROLES.length)
					var nbTries = 0;
					while (this.godList.indexOf(PRIEST_ROLES[randomGod]) > -1 && nbTries < 100) {
						randomGod = Math.floor(Math.random()*PRIEST_ROLES.length)
						nbTries += 1;
					}
					if (nbTries < 100) {
						this.godList.push(PRIEST_ROLES[randomGod]);
						addMessage(this.user.username + " becomes a " + PRIEST_ROLES[randomGod] + " thanks to his charisma !");
					}
					else {
						addMessage(this.user.username + " has no more god to worship !");
						this.playMove(EMOTE_PP49)
					}
				}
				if (this.godList.indexOf(GOD_PP1_PRIEST) > -1) { // Mongo
					addMessage("-----------------");
					addMessage("Mongo answers his calls !");
					addMessage(this.user.username + " gains some barbarian strength");
					this.heal(50);
				}
				if (this.godList.indexOf(GOD_PP2_PRIEST) > -1) { // Dr Phil
					addMessage("-----------------");
					addMessage("Dr. Phil answers his calls !");
					addMessage("You suddenly all wonder about life...");
					FORCE_PERHAPS = true;
				}
				if (this.godList.indexOf(GOD_PP3_PRIEST) > -1) { // LeprePuds
					addMessage("-----------------");
					addMessage("LeprePuds answers his calls !");
					addMessage(this.user.username + " feels lucky !");
					this.isLucky = 4;
					this.badLuck = false;
				}
				if (this.godList.indexOf(GOD_PP4_PRIEST) > -1) { // DickHead Pudding
					addMessage("-----------------");
					addMessage("DickHead Pudding answers his calls !");
					if (getRandomPercent() == 1) {
						addMessage(this.user.username + " wins !");
						getOpponentOf(this).playMove(EMOTE_PP47);
						return;
					} 
					else {
						addMessage(this.user.username + " fails to be a complete dickhead !");
					}
				}
				if (this.godList.indexOf(GOD_PP5_PRIEST) > -1) { // Hello There Puds
					addMessage("-----------------");
					addMessage("Hello There Puds answers his calls !");
					addMessage(this.user.username + " tries to scare " + getOpponentOf(this).user.username + " !");
					if (getRandomPercent() <= 50+this.STR-getOpponentOf(this).STR) {
						getOpponentOf(this).damage(50);
					}
					else {
						addMessage("But it fails !");
					}
				}
				if (this.godList.indexOf(GOD_PP6_PRIEST) > -1) { // Dickdickson666
					addMessage("-----------------");
					addMessage("DickDickSon666 answers his calls !");
					if (this.eldritchFriend) {
						addMessage("But "+ this.user.username + " already has an eldritch friend !");
					}
					else {
						addMessage(this.user.username + " gets an eldritch friend !");
						this.eldritchFriend = true;
					}
				}
				if (this.godList.indexOf(GOD_PP7_PRIEST) > -1) { // Jew
					addMessage("-----------------");
					addMessage("The Jew Lord answers his calls !");
					addMessage(this.user.username + " takes " + MOVE_COUNT*2 + " DEX from " + getOpponentOf(this).user.username + " as the emerald tax !");
					this.DEXValue += MOVE_COUNT*2;
					getOpponentOf(this).DEXValue -= MOVE_COUNT*2;
				}
				// GOD 8 IS FIRST
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1) { // Brenn
					addMessage("-----------------");
					addMessage("Brenn answers his calls !");
					addMessage(this.user.username + " plays a guitar solo that makes " + getOpponentOf(this).user.username + "'s PP bleed !");
					getOpponentOf(this).bleedDamage += 5;
				}
				if (this.godList.indexOf(GOD_PP10_PRIEST) > -1) { // Fabio
					addMessage("-----------------");
					addMessage("Fabio answers his calls !");
					addMessage(this.user.username + " let his hair flow in the wind !");
					this.heal(50*MOVE_COUNT);
				}
				if (this.godList.indexOf(GOD_PP11_PRIEST) > -1) { // Country Music Brenn
					addMessage("-----------------");
					addMessage("Country Music Brenn answers his calls !");
					addMessage(this.user.username + " plays some country !");
					if (getOpponentOf(this).isHockeyPuckPP) {
						addMessage("But his opponent doesn't care.");
					}
					else {
						addMessage(getOpponentOf(this).user.username + " gets an Hocky Puck PP !");
						getOpponentOf(this).isHockeyPuckPP = true;
					}
				}
				if (this.godList.indexOf(GOD_PP12_PRIEST) > -1) { // Espinoza
					addMessage("-----------------");
					addMessage("Espinoza answers his calls !");
					addMessage(this.user.username + " sniffs " + getOpponentOf(this).user.username + "'s PP and becomes faster !");
					this.DEXValue += 10;
				}
				if (this.godList.indexOf(GOD_PP13_PRIEST) > -1) { // 700IQ
					addMessage("-----------------");
					addMessage("The Mutantoid Lycanthrope answers his calls !");
					addMessage(this.user.username + " makes a scientific discovery !");
					this.playMove(getRandomEmote());
				}
				if (this.godList.indexOf(GOD_PP14_PRIEST) > -1) { // UREGonnaGETRaped
					addMessage("-----------------");
					addMessage("Rapist Pudding answers his calls !");
					addMessage(this.user.username + " gives a boner punch to " + getOpponentOf(this).user.username + " !");
					this.hasBoner = true;
					getOpponentOf(this).damage(Math.floor((this.STR - this.DEX)/10));
				}
				if (this.godList.indexOf(GOD_PP15_PRIEST) > -1) { // STFU Isaac
					addMessage("-----------------");
					addMessage("Isaac answers his calls !");
					addMessage(this.user.username + " starts to cry !");
					addMessage(BATTLE_CHANNEL.guild.members.random().user.username + " helps the fighters !");
					FIGHTER1.heal(50);
					FIGHTER2.heal(50);
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1) { // The Man Who Made a Monster
					addMessage("-----------------");
					addMessage("The Man who Made a Monster answers his calls !");
					addMessage(this.user.username + " drinks " + getOpponentOf(this).user.username + "'s salty tears !");
					this.tearDrinker += 3;
				}
				if (this.godList.indexOf(GOD_PP17_PRIEST) > -1) { // Hitler
					addMessage("-----------------");
					addMessage("Literally Hitler answers his calls !");
					if (ILLEGAL_JEWS) {
						addMessage(this.user.username + " makes jew priests illegal again, just to be sure.");
					}
					else {
						addMessage(this.user.username + " makes jew priests illegal !");
						ILLEGAL_JEWS = true;
					}
				}
				if (this.godList.indexOf(GOD_PP18_PRIEST) > -1) { // Salt King
					addMessage("-----------------");
					addMessage("The Salt King answers his calls !");
					if (getOpponentOf(this).isSalty) {
						addMessage("But " + getOpponentOf(this).user.username + " is already salty...");
					}
					else {
						addMessage(this.user.username + " makes his opponent's wounds salty !");
						getOpponentOf(this).bleedDamage += 3;
						getOpponentOf(this).isSalty = true;
					}
				}
				if (this.godList.indexOf(GOD_PP21_PRIEST) > -1) { // D.I.C.K.
					addMessage("-----------------");
					addMessage("D.I.C.K. answers his calls !");
					addMessage(this.user.username + " gets a special charge, overcircumcised and more DEX !");
					this.specialCharges += 1;
					this.overCircumcised = true;
					this.DEXValue += 10;
				}
			}
			else if (attack == EMOTE_PP52) {
				// Priest Special Move
				addMessage(this.user.username + " calls for his Gods to help him !");
				if (this.specialCharges > 0) {
					this.specialCharges -= 1;
				}
				else if (this.godList.indexOf(GOD_PP21_PRIEST) > -1) { // D.I.C.K.
					addMessage("-----------------");
					addMessage("D.I.C.K. is disappointed in " + this.user.username + " !");
					this.playMove(EMOTE_PP47);
					return;
				}
				if (this.godList.indexOf(GOD_PP1_PRIEST) > -1) { // Mongo
					addMessage("-----------------");
					addMessage("Mongo answers his calls !");
					if (this.trueBarbarian) {
						addMessage(this.user.username + " is already barbarian enough !");
					}
					else {
						addMessage(this.user.username + " becomes a true barbarian from the north !");
						this.trueBarbarian = true;
					}
				}
				if (this.godList.indexOf(GOD_PP2_PRIEST) > -1) { // Dr Phil
					addMessage("-----------------");
					addMessage("Dr. Phil answers his calls !");
					addMessage("Dr Phil sends " + getOpponentOf(this).user.username + "'s will to fight to the ranch for 1 turn...");
					getOpponentOf(this).turnSkip = 2;
				}
				if (this.godList.indexOf(GOD_PP3_PRIEST) > -1) { // LeprePuds
					addMessage("-----------------");
					addMessage("LeprePuds answers his calls !");
					addMessage(this.user.username + " is faster than ever !");
					if (this.DEX < 0) {
						this.DEXValue -= this.DEX;
					}
					this.DEXValue += 20;
				}
				if (this.godList.indexOf(GOD_PP4_PRIEST) > -1) { // DickHead Pudding
					addMessage("-----------------");
					addMessage("DickHead Pudding answers his calls !");
					if (getRandomPercent() <= 10) {
						addMessage(this.user.username + " wins !");
						getOpponentOf(this).playMove(EMOTE_PP47);
						return;
					} 
					else {
						addMessage(this.user.username + " fails to be a complete dickhead !");
					}
				}
				if (this.godList.indexOf(GOD_PP5_PRIEST) > -1) { // Hello There Puds
					addMessage("-----------------");
					addMessage("Hello There Puds answers his calls !");
					addMessage(this.user.username + " gets a sudden body change !");
					this.DEXValue += this.STRValue;
					this.STRValue = this.DEXValue - this.STRValue;
					this.DEXValue -= this.STRValue;
				}
				if (this.godList.indexOf(GOD_PP6_PRIEST) > -1) { // Dickdickson666
					addMessage("-----------------");
					addMessage("DickDickSon666 answers his calls !");
					addMessage(this.user.username + " releases Hell on earth !");
					FORCE_SATAN = true;
				}
				if (this.godList.indexOf(GOD_PP7_PRIEST) > -1) { // Jew
					addMessage("-----------------");
					addMessage("The Jew Lord answers his calls !");
					addMessage(this.user.username + " uses his long nose to get a new special charge !");
					this.specialCharges += 1;
				}
				if (this.godList.indexOf(GOD_PP8_PRIEST) > -1) { // Fabulous Toast Man
					addMessage("-----------------");
					addMessage("Fabulous Toast Man answers his calls !");
					addMessage(this.user.username + " calls for a bit of power from all his gods !");
					getOpponentOf(this).damage(Math.floor(this.godList.length*this.STR/10));
				}
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1) { // Brenn
					addMessage("-----------------");
					addMessage("Brenn answers his calls !");
					addMessage("Brenn's massive dong falls in the battlefield !");
					this.damage(100);
					getOpponentOf(this).damage(100);
					addMessage("Its healing properties grants an extra life to both fighters !");
					this.extraLife += 1;
					getOpponentOf(this).extraLife += 1;
				}
				if (this.godList.indexOf(GOD_PP10_PRIEST) > -1) { // Fabio
					addMessage("-----------------");
					addMessage("Fabio answers his calls !");
					addMessage(this.user.username + " makes you all turn gay !");
					GAY_TURNS = 5;
				}
				if (this.godList.indexOf(GOD_PP11_PRIEST) > -1) { // Country Music Brenn
					addMessage("-----------------");
					addMessage("Country Music Brenn answers his calls !");
					if (this.isCowboy) {
						addMessage("But " + this.user.username + " already is Cow-Boy !");
					}
					else {
						addMessage(this.user.username + " becomes a Cow-Boy !");
						this.isCowBoy = true;
					}
				}
				if (this.godList.indexOf(GOD_PP12_PRIEST) > -1) { // Espinoza
					addMessage("-----------------");
					addMessage("Espinoza answers his calls !");
					addMessage(this.user.username + " grabs " + getOpponentOf(this).user.username + "'s PP !");
					getOpponentOf(this).grabbedPP = 2;
				}
				if (this.godList.indexOf(GOD_PP13_PRIEST) > -1) { // 700IQ
					addMessage("-----------------");
					addMessage("The Mutantoid Lycanthrope answers his calls !");
					if (!this.chimera) {
						addMessage(this.user.username + " shares his furry genes with " + getOpponentOf(this).user.username + " UwU");
						getOpponentOf(this).chimera = true;
						for (var i in getOpponentOf(this).godList) {
							if (getOpponentOf(this).godList[i] != GOD_PP13_PRIEST) {
								getOpponentOf(this).godList[i] = GOD_PP13_PRIEST;
								break;
							}
						}
						var fullChimera = true;
						for (var i in getOpponentOf(this).godList) {
							if (getOpponentOf(this).godList[i] != GOD_PP13_PRIEST) {
								fullChimera = false
							}
						}
						if (fullChimera) {
							addMessage(getOpponentOf(this).user.username + " is now fully a furry !");
							getOpponentOf(this).playMove(EMOTE_PP47);
						}
					}
					else {
						addMessage(this.user.username + " barks like the retarded furry he is !");
					}
				}
				if (this.godList.indexOf(GOD_PP14_PRIEST) > -1) { // UREGonnaGETRaped
					addMessage("-----------------");
					addMessage("Rapist Pudding answers his calls !");
					addMessage(this.user.username + " sensually touches " + getOpponentOf(this).user.username + "'s PP...");
					this.hasBoner = true;
					getOpponentOf(this).hasBoner = true;
					getOpponentOf(this).damage(Math.floor(this.STR/2));
				}
				if (this.godList.indexOf(GOD_PP15_PRIEST) > -1) { // STFU Isaac
					addMessage("-----------------");
					addMessage("Isaac answers his calls !");
					addMessage(this.user.username + " curses " + getOpponentOf(this).user.username + " with bad luck !");
					getOpponentOf(this).badLuck = true;
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1) { // The Man Who Made a Monster
					addMessage("-----------------");
					addMessage("The Man who Made a Monster answers his calls !");
					addMessage(this.user.username + " starts summoning the Monster !");
					this.summonTankCountdown = 2;
				}
				if (this.godList.indexOf(GOD_PP17_PRIEST) > -1) { // Hitler
					addMessage("-----------------");
					addMessage("Literally Hitler answers his calls !");
					addMessage(this.user.username + " starts a new genocide !");
					if (getOpponentOf(this).godList.indexOf(GOD_PP7_PRIEST) > -1) {
						getOpponentOf(this).playMove(EMOTE_PP47);
					}
					else {
						addMessage(getOpponentOf(this).user.username + " is unaffected...");
					}
				}
				if (this.godList.indexOf(GOD_PP18_PRIEST) > -1) { // Salt King
					addMessage("-----------------");
					addMessage("The Salt King answers his calls !");
					addMessage(getOpponentOf(this).user.username + " is Salt King's best friend");
					addMessage(this.user.username + " takes " + Math.floor(getOpponentOf(this).DEX/2) + " DEX from him.");
					this.DEXValue += Math.floor(getOpponentOf(this).DEX/2);
					getOpponentOf(this).DEXValue -= Math.floor(getOpponentOf(this).DEX/2);
				}
				if (this.godList.indexOf(GOD_PP21_PRIEST) > -1) { // D.I.C.K.
					addMessage("-----------------");
					addMessage("D.I.C.K. answers his calls !");
					this.STRValue = this.STR*1000-this.STRValue;
					addMessage(this.user.username + " gets the strength of a thousand punchers !");
					this.playMove(EMOTE_PP2);
				}
			}
			else if (attack == EMOTE_PP53) {
				// Singular Explosion
				MOVE_COUNT += 33;
				addMessage(this.user.username + " summons the Singular Explosion");
				if (NUCLEAR_BOMB <= 0) {
					addMessage("A new Nuclear Bomb is launched !");
				}
				else {
					addMessage("The Nuclear Bomb timer has been reset !");
				}
				addMessage("The Nuclear Bomb will explode in 5 turns !");
				NUCLEAR_BOMB = 6;
			}
			else if (attack == EMOTE_PP54) {
				// Explosion Loop
				MOVE_COUNT += 33;
				addMessage(this.user.username + " summons the Explosion Loop");
				addMessage("All damages has 90% getting ignored for 7 turns");
				ATTACK_MISS_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP55) {
				// Dual Explosion Loop
				MOVE_COUNT += 33;
				addMessage(this.user.username + " summons the Dual Explosion Loop");
				addMessage("All moves will be used, no matter the DEX, for 7 turns");
				AUTO_MOVES_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP56) {
				// SignPost
				MOVE_COUNT += 33;
				addMessage(this.user.username + " summons every moves !");
				for (var i = 0; i < EMOTE_LIST.length-SPECIAL_EMOTE_LIST.length; i++) {
				addMessage("-----------------");
					if (EMOTE_LIST[i] != EMOTE_PP47) {
						this.playMove(EMOTE_LIST[i]);
					}
				}
			}
			else if (attack == EMOTE_PP57) {
				// Cage / Sacrifice
				MOVE_COUNT += 33;
				addMessage(this.user.username + " changes his gods for a bit !");
				var godListMemory = this.godList.slice();
				this.godList = [];
				for (var i = 0; i < 5; i++) {
					var randomGod = Math.floor(Math.random()*PRIEST_ROLES.length)
					var nbTries = 0;
					while (this.godList.indexOf(PRIEST_ROLES[randomGod]) > -1 && nbTries < 100) {
						randomGod = Math.floor(Math.random()*PRIEST_ROLES.length);
						nbTries += 1;
					}
				}
				this.playMove(EMOTE_PP51);
				addMessage("-----------------");
				this.playMove(EMOTE_PP52);
				this.godList = godListMemory.slice();
			}
			else if (attack == EMOTE_PP58) {
				// Cageless
				MOVE_COUNT += 33;
				addMessage(this.user.username + " gets a new life !");
				this.extraLife += 1;
			}
			else if (attack == EMOTE_PP59) {
				// Triggered Pépin2Pom
				MOVE_COUNT += 33;
				for (var i in this.godList) {
					if (this.godList[i] != GOD_PP18_PRIEST) {
						addMessage(this.user.username + " gets closer to the Salt King !");
						this.godList[i] = GOD_PP18_PRIEST;
						break;
					}
				}
				var nbSalt = 0;
				for (var i in this.godList) {
					if (this.godList[i] == GOD_PP18_PRIEST) {
						nbSalt += 1;
					}
				}
				if (nbSalt >= 3) {
					addMessage(this.user.username + " is now touched by Saltus Maximus Retardus !");
					for (var i = 0; i < 30; i++) {
						if (getRandomPercent() < 10) {
							addMessage(getOpponentOf(this).user.username + " sucks !");
						}
						else if (getRandomPercent() < 20) {
							addMessage(getOpponentOf(this).user.username + " has the big gay !");
						}
						else if (getRandomPercent() < 30) {
							addMessage(getOpponentOf(this).user.username + " has a smoll pp !");
						}
						else if (getRandomPercent() < 40) {
							addMessage(getOpponentOf(this).user.username + " is ugly AF !");
						}
						else if (getRandomPercent() < 50) {
							addMessage(getOpponentOf(this).user.username + " has 3 nipples !");
						}
						else if (getRandomPercent() < 60) {
							addMessage(getOpponentOf(this).user.username + " is a weakling !");
						}
						else if (getRandomPercent() < 70) {
							addMessage(getOpponentOf(this).user.username + " can't even fight properly !");
						}
						else if (getRandomPercent() < 80) {
							addMessage(getOpponentOf(this).user.username + " is a loser !");
						}
						else if (getRandomPercent() < 90) {
							addMessage(getOpponentOf(this).user.username + " has 0.0026 IQ !");
						}
						else {
							addMessage(getOpponentOf(this).user.username + " is a big nerd !");
						}
						sendMessages();
					}
					addMessage("You loose now lol !");
					getOpponentOf(this).playMove(EMOTE_PP47);
				}
			}
			else if (attack == EMOTE_PP60) {
				// PP Duel
				MOVE_COUNT += 33;
				addMessage(this.user.username + " asks for a PP Duel !");
				this.STRValue -= this.STR-10;
				this.DEXValue -= this.DEX-10;
				getOpponentOf(this).STRValue -= getOpponentOf(this).STR-10;
				getOpponentOf(this).DEXValue -= getOpponentOf(this).DEX-10;
				this.bleedDamage = 0;
				getOpponentOf(this).bleedDamage = 0;
			}
			else if (attack == "IS_DEAD_LOL") {
				// Dead (Cthulhu battle)
				addMessage(this.user.username + " is dead so funny lol omg");
			}
			else {
				addMessage(this.user.username + " makes an unknown move ?");
				console.log("UNKNOWN MOVE : " + attack)
			}

			// Boomerang
			if (!this.isBoomerangUsed && this.hasBoomerang >= 1) {
				this.isBoomerangUsed = true;
				this.playMove();
			}
		}
	}

	heal(_amount) {
		if (REVERSE_DAMAGE <= 0) {
			this.STRValue += _amount;
			return addMessage(this.user.username + " get healed by " + _amount + " HP");
		}
		else {
			this.STRValue -= _amount;
			return addMessage(this.user.username + " takes " + _amount + " damages !");
		}
	}

	damage(_amount) {
		_amount += getOpponentOf(this).bonusDamage;
		getOpponentOf(this).bonusDamage = 0;


		if (INFINITE_DAMAGE >= 10) {
			addMessage("Damage cap achieved !");
			return addMessage(_amount + " damages were canceled");
		}
		INFINITE_DAMAGE += 1;
		
		if (ATTACK_MISS_COUNTDOWN > 0 && getRandomPercent() < 90) {
			_amount += _amount;
		}

		if (EVENT_BOSS) {
			BOSS_HEALTH -= _amount;
			addMessage(CURRENT_BOSS + " takes " + _amount + " damages !");
			DAMAGE_COUNT += _amount;
			return;
		}

		if (REVERSE_DAMAGE >= 0) {
			this.STRValue += _amount;
			return addMessage(this.user.username + " get healed by " + _amount + " HP");
		}

		// Acid
		if (this.acidArmor >= 1) {
			addMessage(this.user.username + " has an acid armor !");
			if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
				addMessage(getOpponentOf(this).user.username + " therapy helps !");
				getOpponentOf(this).heal(10);
			}
			else {
				getOpponentOf(this).damage(10);
			}
		}

		if (this.isDrunkPP && getRandomPercent() < 50) {
			// Drunk PP
			addMessage(this.user.username + " felt nothing because too drunk !");
		}
		else if (this.attack == EMOTE_PP10) {
			// Tank
			addMessage(this.user.username + " felt nothing !");
		}
		else if (this.isProtected) {
			// RiotShield
			addMessage(this.user.username + " reflects the damages !");
			this.isProtected = false;
			getOpponentOf(this).damage(_amount);
		}
		else if (STEEL_PROTECTION) {
			// Steel
			this.STRValue -= Math.floor(_amount/10);
			DAMAGE_COUNT += Math.floor(_amount/10);
			addMessage(this.user.username + " takes " + Math.floor(_amount/10) + " damages !");
		}
		else if (BARREL_DAMAGE) {
			// Barrel
			this.STRValue -= Math.floor(_amount*2);
			DAMAGE_COUNT += Math.floor(_amount*2);
			addMessage(this.user.username + " takes " + Math.floor(_amount*2) + " damages !");
		}
		else {
			// Damage
			this.STRValue -= _amount;
			DAMAGE_COUNT += _amount;
			addMessage(this.user.username + " takes " + _amount + " damages !");
		}

		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			addMessage(this.user.username + " uses DOOM-REVERSE(tm) !");
			this.STRValue += (0-this.STR)+1;
			this.doomReverse = 0;
		}
		// Alien PP
		if (this.isAlienPP) {
			getOpponentOf(this).bleedDamage += 1;
		}
	}

	turnChange() {
		// Clear attaque
		this.attack = "";
		if (!this.attackedThisTurn) {
			this.missedMoves += 1;
		}
		this.attackedThisTurn = false;

		// Overcircumcised = immune to status effects
		if (this.isOverCircumcised) {
			this.resetBattleVariables()
		}

		// Turkey
		if (this.turkeyCountdown != -1) {
			this.turkeyCountdown -= 1;
			if (this.turkeyCountdown <= 0) {
				addMessage(this.user.username + " explodes !");
				this.damage(1000);
			}
			else {
				addMessage(this.user.username + " has " + this.turkeyCountdown + " turn(s) left !");
			}
			addMessage("-----------------");
		}

		// Trap Sign, Examine, SatanPossess etc..
		this.hasBurst -= 1;
		this.hasExamined -= 1;
		this.isPossessed -= 1;
		this.doomReverse -= 1;
		this.acidArmor -= 1;
		this.hasBoomerang -= 1;
		this.isBoomerangUsed = false;
		this.turnSkip -= 1;
		this.grabbedPP -= 1;
		this.isLucky -= 1;
		this.summonTankCountdown -= 1;

		// Bleed (SawBlade)
		if (this.bleedDamage > 0) {
			addMessage(this.user.username + " bleeds !");
			if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
				addMessage(this.user.username + " therapy helps !");
				this.heal(this.bleedDamage);
			}
			else {
				if (this.isSalty) {
					this.damage(this.bleedDamage*5);
				}
				else {
					this.damage(this.bleedDamage);
				}
			}
			addMessage("-----------------");
		}

		// Pig
		if (this.pigHeal > 0) {
			if (this.isCowBoy) {
				addMessage(this.user.username + " squeezes hog YEEHAAAAAW !");
				this.heal(this.pigHeal*50);
			}
			else {
				addMessage(this.user.username + " squeezes hog !");
				this.heal(this.pigHeal);
			}
			addMessage("-----------------");
		}
		// The Man Wh Made a Monster regular move
		if (this.tearDrinker > 0) {
			addMessage(this.user.username + " drinks salty tears !");
			this.heal(this.tearDrinker);
			if (this.godList.indexOf(GOD_PP16_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
				getOpponentOf(this).damage(this.tearDrinker);
			}
			addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP5_PRIEST) > -1 && this.godList.indexOf(GOD_PP6_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			addMessage(this.user.username + " gets healed by the Unholy Pudding Trinity !");
			this.heal(10);
			addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			addMessage(this.user.username + " remembers haunting memories...");
			this.playMove(EMOTE_PP42);
			addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP11_PRIEST) > -1 && this.godList.indexOf(GOD_PP9_PRIEST) > -1) {
			addMessage(this.user.username + " plays garbage music");
			addMessage(getOpponentOf(this).user.username + "'s ears starts bleeding");
			getOpponentOf(this).bleedDamage++;
			addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP10_PRIEST) > -1 && this.godList.indexOf(GOD_PP8_PRIEST) > -1 && getRandomPercent() <= 10) {
			addMessage(this.user.username + "'s Yaoi starts !");
			GAY_TURNS = 2;
			addMessage("-----------------");
		}

		// PP Armageddon
		if (PP_ARMAGEDDON) {
			this.STRValue -= 5000;
		}
		
		if (this.turnSkip > 0) {
			this.attack = EMOTE_PP50;
		}
		if (this.grabbedPP > 0) {
			this.attack = EMOTE_PP39;
		}
		if (this.summonTankCountdown == 1) {
			this.attack = EMOTE_PP10;
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
		this.bleedDamage = 0;
		this.isPossessed = 0;
		this.acidArmor = 0;
		this.isBoomerangUsed = false;
		this.turnSkip = 0;
		this.grabbedPP = 0;
		this.hasBoner = false;
		this.badLuck = false;
		// TODO keep up to date --> negative effects only
	}
}

class Duel {
	constructor(_message) {
		this.BATTLE_CHANNEL = _message.channel;
		
		this.IS_BUSY = true;
		this.IS_DUELLING = true;
		this.IS_CHANGING_STYLE = false;

		this.ILLEGAL_BOMBING = false;
		this.BLIND_COUNTDOWN = 0;
		this.STEEL_PROTECTION = false;
		this.BARREL_DAMAGE = false;
		this.SAVE_LIST = [];
		this.STOPPED_MOVE_LIST = [];
		this.INFINITE_DAMAGE = 0;
		this.MOVE_COUNT = 0;
		this.DAMAGE_COUNT = 0;
		this.FORCE_EVENT = false;
		this.REVERSE_DAMAGE = 0;
		this.GAY_TURNS = 0;
		this.ILLEGAL_JEWS = false;
		this.ATTACK_MISS_COUNTDOWN = 0;
		this.AUTO_MOVES_COUNTDOWN = 0;
		this.NUCLEAR_BOMB = 0;

		this.PP_ARMAGEDDON = false;
		this.EVENT_PP_ENLIGHTENMENT = false;
		this.EVENT_PP_PURGE = false;
		this.EVENT_CONFUSION = false;
		this.EVENT_BOSS = false;
		this.EVENT_BLOOD_MOON = false;

		this.FORCE_PERHAPS = false;
		this.FORCE_SATAN = false;

		console.log("F1 " + _message.author.id);
		console.log("F2 " + _message.mentions.users.array()[0]);
		this.FIGHTER1 = new Fighter(_message.author.id);
		this.FIGHTER2 = new Fighter(_message.mentions.users.array()[0].id);

		if (this.FIGHTER1.user.id == this.FIGHTER2.user.id) {
			this.addMessage("You can't battle yourself");
			return;
		}

		this.addMessage("TIME FOR A DUEL");
	}
	function stopDuel() {
		this.sendMessages();
		this.addMessage("**===== RECAP =====**");
		this.addMessage("FIGHTERS CURRENT STATE :");
		this.addMessage(this.FIGHTER1.toString());
		this.addMessage("-----------------");
		this.addMessage(this.FIGHTER2.toString());
		this.addMessage("SOME STATS :");
		this.addMessage(" - Number of moves : " + this.MOVE_COUNT);
		this.addMessage(" - Number of damages inflicted : " + this.DAMAGE_COUNT);

		setBotActivity("");
		this.sendMessages();
	}
	
	function addMessage(_texte) {
		this.LIST_MESSAGES.push(_texte);
	}
	function sendMessages() {
		var counter = 0;
		while (this.LIST_MESSAGES.length > 10) {
			this.LIST_MESSAGES.splice(0, 1);
			counter += 1;
		}

		if (counter > 0) {
			this.LIST_MESSAGES = ["**-----------------\n" + counter + " messages were cancelled !\n-----------------**"].concat(LIST_MESSAGES);
		}
		for (var i in this.LIST_MESSAGES) {
			this.BATTLE_CHANNEL.send(this.LIST_MESSAGES[i]);
		}
		this.LIST_MESSAGES = [];
	}
	
	getOpponentOf(_fighter) {
		if (this.FIGHTER1.user.id == _fighter.user.id) {
			return this.FIGHTER2;
		}
		return this.FIGHTER1;
	}
	getOppOf(_fighter) {
		return this.getOpponentOf(_fighter);
	}
	
	function newTurnDuel() {
		this.addMessage("**===== TURN CHANGE =====**");
		this.sendMessages();
		this.FIGHTER1.turnChange();
		this.FIGHTER2.turnChange();

		if (this.FIGHTER1.STR <= 0 && this.FIGHTER1.extraLife > 0) {
			this.addMessage(this.FIGHTER1.user.username + " uses an extra life !");
			this.FIGHTER1 = new Fighter(this.FIGHTER1.idUser);
		}
		if (this.FIGHTER2.STR <= 0 && this.FIGHTER2.extraLife > 0) {
			this.addMessage(this.FIGHTER2.user.username + " uses an extra life !");
			this.FIGHTER2 = new Fighter(this.FIGHTER2.idUser);
		}

		this.STEEL_PROTECTION = false;
		this.BARREL_DAMAGE = false;
		this.SAVE_LIST = [];
		this.BLIND_COUNTDOWN -= 1;
		this.INFINITE_DAMAGE = 0;
		this.DISABLE_ABANDON = false;
		this.REVERSE_DAMAGE -= 1;
		this.GAY_TURNS -= 1;
		this.ATTACK_MISS_COUNTDOWN -= 1;
		this.AUTO_MOVES_COUNTDOWN -= 1;
		this.NUCLEAR_BOMB -= 1;

		if (this.NUCLEAR_BOMB == 0) {
			this.addMessage("The Nuclear Bomb explodes now !");
			this.FIGHTER1.damage(1000000000);
			this.FIGHTER2.damage(1000000000);
		}

		// Blood Moon Save
		if (this.EVENT_BLOOD_MOON) {
			if (this.FIGHTER1.STR <= 0) {
				this.FIGHTER1.DEXValue += (0-this.FIGHTER1.STR)+1;
				this.FIGHTER1.STRValue += (0-this.FIGHTER1.STR)+1;
				this.addMessage(this.FIGHTER1.user.username + " got saved thanks to the Blood Moon");
			}
			if (this.FIGHTER2.STR <= 0) {
				this.FIGHTER2.DEXValue += (0-this.FIGHTER2.STR)+1;
				this.FIGHTER2.STRValue += (0-this.FIGHTER2.STR)+1;
				this.addMessage(this.FIGHTER2.user.username + " got saved thanks to the Blood Moon");
			}
		}

		// Cthulhu
		if (this.EVENT_BOSS) {
			if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP1) {
				this.addMessage(this.CURRENT_BOSS + " goes back to sleep to heal his poor PP !");
				this.addMessage("You both win !");
				this.addWinCounter(this.FIGHTER1, 1);
				this.addWinCounter(this.FIGHTER2, 1);
				this.EVENT_BOSS = false;
				return this.stopDuel();
			}
			else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP2) {
				this.addMessage(this.CURRENT_BOSS + " will now stop making updates for some time !");
				this.EVENT_BOSS = false;
			}
			else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP3) {
				this.addMessage(this.CURRENT_BOSS + " goes back to sleep to heal his poor PP !");
				this.addMessage("You both win !");
				this.addWinCounter(this.FIGHTER1, 1);
				this.addWinCounter(this.FIGHTER2, 1);
				this.EVENT_BOSS = false;

				var role = this.GUILD.roles.find(r => r.name == GOD_PP21_PRIEST);
				try {
					this.FIGHTER1.guildUser.addRole(role).catch(console.error);
					this.FIGHTER2.guildUser.addRole(role).catch(console.error);
					this.addMessage("**D.I.C.K. is proud of you. He grants you his powers.**");
					this.addMessage("**If you don't want to be a D.I.C.K. Priest, use the custom command to automatically remove this role.**");
				}
				catch(e) {
					this.addMessage("D.I.C.K. is proud of you. However, he can't grant you his powers on this server.");
				}

				return this.stopDuel();
			}
			else {
				if (getRandomPercent() >= 50) {
					this.addMessage(this.FIGHTER1.user.username + " gets attacked by " + this.CURRENT_BOSS + " !");
					this.FIGHTER1.STRValue -= this.BOSS_DAMAGE;
				}
				else {
					this.addMessage(this.FIGHTER2.user.username + " gets attacked by " + this.CURRENT_BOSS + " !");
					this.FIGHTER2.STRValue -= this.BOSS_DAMAGE;
				}
				this.addMessage("He takes" + this.BOSS_DAMAGE + " damages !");
			}

			// Check if loose
			if (this.FIGHTER1.STR <= 0 && this.FIGHTER2.STR <= 0) {
				this.addMessage("Both of you lost. No one won this time. You losers");
				this.stopDuel();
				return;
			}
		}
		else {
			// Check if dead
			if (this.FIGHTER1.STR <= 0 && this.FIGHTER2.STR <= 0) {
				this.addMessage("Both of you lost. No one won this time. You losers");
				this.stopDuel();
				return;
			}
			else if (this.FIGHTER1.STR <= 0) {
				this.addMessage(this.FIGHTER2.user.username + " won ! Congrats !");
				this.FIGHTER2.win();
				this.stopDuel();
				return;
			}
			else if (this.FIGHTER2.STR <= 0) {
				this.addMessage(this.FIGHTER1.user.username + " won ! Congrats !");
				this.FIGHTER1.win();
				this.stopDuel();
				return;
			}
		}

		this.startRandomEvent();

		this.addMessage("\n\n**===== NEW TURN =====**");

		this.addMessage("**=== FIGHTERS ===**");
		if (!this.EVENT_BOSS) {
			this.addMessage(this.FIGHTER1.toString());
			this.addMessage("**===== /VS/ =====**");
			this.addMessage(this.FIGHTER2.toString());
		}
		else {
			this.addMessage(this.FIGHTER1.toString());
			this.addMessage("-----------------");
			this.addMessage(this.FIGHTER2.toString());
			this.addMessage("**===== /VS/ =====**");
			this.addMessage("**" + this.CURRENT_BOSS + "\nSTR : " + this.BOSS_HEALTH);
		}

		this.addMessage("**=== GLOBAL STATUS ===**");
		if (this.BLIND_COUNTDOWN > 0) {
			this.addMessage(" - WTF I'M FUCKING BLIND !");
			if (this.BLIND_COUNTDOWN < 100) {
				this.addMessage("(I'll be healed in " + this.BLIND_COUNTDOWN + " turns...)");
			}
		}
		if (this.REVERSE_DAMAGE > 0) {
			this.addMessage(" - Damages and heals are reversed for " + this.REVERSE_DAMAGE + " turns !");
		}
		if (this.GAY_TURNS > 0) {
			this.addMessage(" - You are both gay for " + this.GAY_TURNS + " turns !");
		}
		if (this.ATTACK_MISS_COUNTDOWN > 0) {
			this.addMessage(" - Attacks are twice as powerful for " + this.ATTACK_MISS_COUNTDOWN + " turns !");
		}
		if (this.AUTO_MOVES_COUNTDOWN > 0) {
			this.addMessage(" - Both fighters always play for " + this.AUTO_MOVES_COUNTDOWN + " turns !");
		}
		if (this.NUCLEAR_BOMB > 0) {
			this.addMessage(" - The Nuclear Bomb will explode in " + this.NUCLEAR_BOMB + " turns !");
		}
		if (this.FORCE_EVENT) {
			this.addMessage(" - Events will occur every turns !");
		}
		if (this.ILLEGAL_JEWS) {
			this.addMessage(" - Jew Priests are illegal !");
		}
		if (this.EVENT_BLOOD_MOON) {
			this.addMessage(" - The Blood Moon is up in the sky !");
		}
		if (this.EVENT_PP_ENLIGHTENMENT) {
			this.addMessage(" - You can use moves that aren't in this turn's movepool !");
		}
		if (this.EVENT_PP_PURGE) {
			this.addMessage(" - Illegal moves are legal for this turn !");
		}
		if (this.PP_ARMAGEDDON) {
			this.addMessage(" - **PP ARMAGEDDON**");
		}

		// HighFiveEmote - Stop move_list
		if (this.STOPPED_MOVE_LIST.length >= 1) {
			this.LIST_AVAILABLE_ATTACKS = this.STOPPED_MOVE_LIST;
			this.STOPPED_MOVE_LIST = [];
		}
		else {
			this.setRandomAttackList();
		}

		var gay = ""
		if (this.GAY_TURNS > 0) {
			gay = "opponent's "
		}

		this.addMessage("**=== MOVE SELECT ===**");
		this.sendMessages();
		this.BATTLE_CHANNEL.send("\n\nChoose your " + gay + "attack with a reaction !").then(function (_message2) {
			for (var i in LIST_AVAILABLE_ATTACKS) {
				console.log(LIST_AVAILABLE_ATTACKS[i]);
				if (LIST_AVAILABLE_ATTACKS[i] != "IS_DEAD_LOL") {
					_message2.react(LIST_AVAILABLE_ATTACKS[i]);
				}
			}
		}).catch(function(e) {
			addMessage(e);
		});

		// Stop if dead (cthulhu battle)
		if (this.FIGHTER1.STR <= 0) {
			this.FIGHTER1.attack = "IS_DEAD_LOL";
			this.FIGHTER1.STRValue = -10;
		}
		if (this.FIGHTER2.STR <= 0) {
			this.FIGHTER2.attack = "IS_DEAD_LOL";
			this.FIGHTER2.STRValue = -10;
		}

		if ((this.FIGHTER1.turnSkip > 0 || this.FIGHTER1.grabbedPP > 0 || this.FIGHTER1.summonTankCountdown > 0 || this.FIGHTER1.isPossessed > 0) && 
		    (this.FIGHTER2.turnSkip > 0 || this.FIGHTER2.grabbedPP > 0 || this.FIGHTER2.summonTankCountdown > 0 || this.FIGHTER2.isPossessed > 0)) {
			this.newTurnDuel();
		}

		if (getRandomPercent() <= 25) {
			this.FORCE_SATAN = false;
		}
	}
	
	illegalGetCaught(_percentage) {
		if (this.BLIND_COUNTDOWN >= 0) {
			return false;
		}
		var result = (getRandomPercent() < _percentage);
		return result;
	}
	getRisk(_move) {
		if (this.EVENT_PP_PURGE) {
			return 0;
		}
		switch(_move) {
			case EMOTE_PP46:
				return 10;
			case EMOTE_PP6:
				return 20;
			case EMOTE_PP10:
				return 70;
			case EMOTE_PP43:
				return 15;
			case EMOTE_PP25:
				return 60;
			case EMOTE_PP23:
				return 20;
			case EMOTE_PP44:
				return 40;
			case EMOTE_PP49:
				return 98;
		}
		return 0;
	}
	getDexChange(_move) {
		switch(_move) {
			case EMOTE_PP3:
				return -30;
			case EMOTE_PP26:
			case EMOTE_PP17:
			case EMOTE_PP4:
			case EMOTE_PP46:
				return -20;
			case EMOTE_PP2:
			case EMOTE_PP6:
			case EMOTE_PP16:
				return -10;
			case EMOTE_PP28:
				return -5;
			case EMOTE_PP12:
			case EMOTE_PP22:
				return 20;
			case EMOTE_PP49:
				return 1000;
		}
		return 0;
	}
}


// FONCTIONS
function getRandomPercent() {
	var i = Math.floor(Math.random() * 100 + 1);
	console.log("random : " + i);
	return i;
}

function setBotActivity(_texte) {
	return CLIENT.user.setActivity(_texte);
}


function setRandomAttackList() {
	var listeAttaques = [];
	var emote;

	if (EVENT_CONFUSION) {
		return LIST_AVAILABLE_ATTACKS = [EMOTE_PP39];
	}
	if (FORCE_PERHAPS) {
		LIST_AVAILABLE_ATTACKS = [EMOTE_PP50];
		return FORCE_PERHAPS = false
	}
	if (FORCE_SATAN) {
		return LIST_AVAILABLE_ATTACKS = [EMOTE_PP26];
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

	if (FIGHTER1.regularCharges > 0 || FIGHTER2.regularCharges > 0) {
		listeAttaques.push(EMOTE_PP51);
	}
	if (FIGHTER1.specialCharges > 0 || FIGHTER2.specialCharges > 0) {
		listeAttaques.push(EMOTE_PP52);
	}

	LIST_AVAILABLE_ATTACKS = listeAttaques;
	LIST_AVAILABLE_ATTACKS.push("IS_DEAD_LOL");
}
function getRandomEmote(_canBeIllegal = true) {
	var legalList = [EMOTE_PP7, EMOTE_PP8, EMOTE_PP9,
					EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20,
					EMOTE_PP21, EMOTE_PP22, EMOTE_PP24, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30,
					EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40,
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP45, EMOTE_PP46, EMOTE_PP48, EMOTE_PP50
					];
	var illegalList = [EMOTE_PP6, EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, EMOTE_PP10,
					EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20,
					EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30,
					EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40,
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP48, EMOTE_PP49, EMOTE_PP50
					];
	var goodList;
	if (_canBeIllegal) {
		goodList = illegalList;
	}
	else {
		goodList = legalList;
	}

	if (ILLEGAL_BOMBING) {
		goodList.push(EMOTE_PP36);
	}
	if (!DISABLE_ABANDON) {
		goodList.push(EMOTE_PP47);
	}
	if (PP_ARMAGEDDON || getRandomPercent() <= 3) {
		goodList = goodList.concat(SPECIAL_EMOTE_LIST);
	}

	return goodList[Math.floor(Math.random()*goodList.length)];
}
function getAttackFromEmote(_emote) {
	for (var i in EMOTE_LIST) {
		if (_emote.name == CLIENT.emojis.get(EMOTE_LIST[i]).name) {
			return EMOTE_LIST[i];
		}
	}
	return EMOTE_PP50;
}

function startRandomEvent() {
	// Reset events
	EVENT_PP_ENLIGHTENMENT = false;
	EVENT_PP_PURGE = false;
	EVENT_CONFUSION = false;
	EVENT_BLOOD_MOON = false;

	addMessage("**===== EVENTS =====**");
	var randomVar = getRandomPercent();

	if (FORCE_EVENT) {
		while (!(randomVar <= 25 && randomVar >= 2)) {
			randomVar = getRandomPercent();
		}
	}

	// PP ARMAGEDDON
	if (!PP_ARMAGEDDON && MOVE_COUNT >= 100) {
		PP_ARMAGEDDON = true;
		addMessage(" -- PP ARMAGEDDON --");
		addMessage("PPs have ascended, the end is near !");
	}
	else if (randomVar == 2) {
		// PP Enlightenment
		EVENT_PP_ENLIGHTENMENT = true;
		addMessage(" -- PP ENLIGHTENMENT --");
		addMessage("Your PP temporarily become enlightened. All moves can now be used for this turn. \nIllegal moves are still illegal.");
	}
	else if (randomVar == 3) {
		// PP Purge
		EVENT_PP_PURGE = true;
		addMessage(" -- PP PURGE --");
		addMessage("All PPs grow a mohawk and start to roam the streets. \nIllegal moves can now be used freely but the judge will still see you if you use unavailable moves");
	}
	else if (randomVar == 4) {
		// Sexually Confused
		EVENT_CONFUSION = true;
		addMessage(" -- SEXUAL CONFUSION --");
		addMessage("Your PPs are confused for this turn");
	}
	else if (randomVar == 5) {
		// Cthulhu
		if (EVENT_BOSS && CURRENT_BOSS == BOSS_PP1) {
			addMessage(" -- MOON LORD AWAKENS --");
			addMessage("Cthulhu evolves to be the Moon Lord !");
			CURRENT_BOSS = BOSS_PP3;
			BOSS_HEALTH = 500000;
			BOSS_DAMAGE = 200;
		}
		else if (EVENT_BOSS && CURRENT_BOSS == BOSS_PP3) {
			addMessage(" -- MOON LORD REGENERATION --");
			addMessage("The Moon Lord gets 500 000 more health !");
			BOSS_HEALTH += 500000;
		}
		else if (EVENT_BOSS) {
			addMessage(" -- CTHULHU SLEEPS --");
			addMessage("And nothing happens at all...");
		}
		else {
			addMessage(" -- CTHULHU AWAKENS --");
			EVENT_BOSS = true;
			addMessage("You have to beat Cthulhu by punching his huge PP in order to save the world !");
			BOSS_HEALTH = 10000;
			BOSS_DAMAGE = 50;
			CURRENT_BOSS = BOSS_PP1;
		}
	}
	else if (randomVar == 6) {
		// Accidental Summoning
		addMessage(" -- ACCIDENTAL SUMMONING --");
		if (getRandomPercent() >= 50) {
			var winner = FIGHTER1;
		}
		else {
			var winner = FIGHTER2;
		}
		addMessage(winner.user.username + " accidentaly plays Psychodiös on his phone and it summons Satan and the Ancient Fongus !");
		winner.playMove(EMOTE_PP26);
		winner.playMove(EMOTE_PP46);
	}
	else if (randomVar == 7) {
		// Blood Moon
		EVENT_BLOOD_MOON = true;
		addMessage(" -- BLOOD MOON --");
		addMessage("If someone dies this turn, STR automatically stays at 1 but the remaining damages goes negative in the DEX.");
		if (FIGHTER1.STR <= 0) {
			FIGHTER1.DEXValue += (0-FIGHTER1.STR)+1;
			FIGHTER1.STRValue += (0-FIGHTER1.STR)+1;
			addMessage(FIGHTER1.user.username + " got saved thanks to the Blood Moon");
		}
		if (FIGHTER2.STR <= 0) {
			FIGHTER2.DEXValue += (0-FIGHTER2.STR)+1;
			FIGHTER2.STRValue += (0-FIGHTER2.STR)+1;
			addMessage(FIGHTER2.user.username + " got saved thanks to the Blood Moon");
		}
	}
	else if (randomVar == 8) {
		// Ascension
		addMessage(" -- ASCENSION --");
		if (getRandomPercent() >= 50) {
			var winner = FIGHTER1;
		}
		else {
			var winner = FIGHTER2;
		}
		addMessage(winner.user.username + " accidentaly plays Ascend on his phone !");
		FIGHTER1.playMove(EMOTE_PP49);
		FIGHTER2.playMove(EMOTE_PP49);
	}
	else if ([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].indexOf(randomVar) > -1) {
		// Charge
		addMessage(" -- GODS BIRTHDAY GIFTS --");
		addMessage("Gods decide to give you a regular charge each");
		FIGHTER1.regularCharges++;
		FIGHTER2.regularCharges++;
	}
	else if ([20, 21].indexOf(randomVar) > -1) {
		// Charge
		addMessage(" -- GODS CHRISTMAS GIFTS --");
		addMessage("Gods decide to give you a special charge each");
		FIGHTER1.specialCharges++;
		FIGHTER2.specialCharges++;
	}
	else if (randomVar == 22) {
		// Huge Gay Night
		addMessage(" -- HUGE GAY NIGHT --");
		if (GAY_TURNS > 0) {
			GAY_TURNS += 10;
			addMessage("Your gayness increase by 10 turns !");
		}
		else {
			GAY_TURNS = 1;
			addMessage("You suddenly become gay for this turn !");
		}
		
	}
	else if (randomVar == 23) {
		// PP Blessing
		addMessage(" -- PP BLESSING --");
		addMessage("You suddenly feel new powers in your PP !");
		FIGHTER1.godList = [GOD_PP21_PRIEST];
		FIGHTER2.godList = [GOD_PP21_PRIEST];
		for (var i in PRIEST_ROLES) {
			FIGHTER1.godList.push(PRIEST_ROLES[i]);
			FIGHTER2.godList.push(PRIEST_ROLES[i]);
		}
		FIGHTER1.isBigPP = true;
		FIGHTER1.isFastPP = true;
		FIGHTER1.isDrunkPP = true;
		FIGHTER1.isHockeyPuckPP = true;
		FIGHTER1.isAlienPP = true;
		
		FIGHTER2.isBigPP = true;
		FIGHTER2.isFastPP = true;
		FIGHTER2.isDrunkPP = true;
		FIGHTER2.isHockeyPuckPP = true;
		FIGHTER2.isAlienPP = true;
		
	}
	else if ([24, 25].indexOf(randomVar) > -1) {
		// Free Lives
		if (EVENT_BOSS) {
			addMessage(" -- FREE LIVES GOOD UPDATES --");
			addMessage("Let's NOT riot Free Lives HQ.");
			if (CURRENT_BOSS == BOSS_PP2) {
				EVENT_BOSS = false;
				BOSS_HEALTH = 0;
				BOSS_DAMAGE = 0;
			}
		}
		else {
			EVENT_BOSS = true;
			addMessage(" -- FREE LIVES RIOT --");
			addMessage("Let's riot Free Lives HQ just for fun !");
			BOSS_HEALTH = 1000;
			BOSS_DAMAGE = 20;
			CURRENT_BOSS = BOSS_PP2;
		}
	}
	else {
		addMessage("No event this turn...");
	}
	sendMessages()
}

function addWinCounter(_fighter, _number) {
	// TODO
	// negative number of wins for cheaters
	console.log(_fighter.user.username + " wins : " + _number);
}

function changeRoleToStyler(_nomRole) {
	var role = GUILD.roles.find(r => r.name == _nomRole);
	var user = GUILD.members.get(STYLER);

	try {
		if (user.roles.has(role.id)) {
			user.removeRole(role).catch(console.error);
			addMessage(user.user.username + " removes the role : " + _nomRole);
		}
		else {
			if (getNumberOfGods(user) >= 3 && PRIEST_ROLES.indexOf(_nomRole) > -1) {
				return addMessage("You can't have more than 3 Gods");
			}
			user.addRole(role).catch(console.error);
			addMessage(user.user.username + " gets the role : " + _nomRole);
		}
	}
	catch(e) {
		addMessage("I'm sorry I can't do that :(");
		addMessage("Looks like there is no " + _nomRole + " role here...");
	}
	sendMessages();
}
function getNumberOfGods(_guildUser) {
	var counter = 0;
	for (var i in PRIEST_ROLES) {
		if (_guildUser.roles.find("name", PRIEST_ROLES[i])) {
			counter++;
		}
	}
	return counter;
}


CLIENT.on('ready', () => {
	console.log(`Logged in as ${CLIENT.user.tag} !`);
	setBotActivity("");
});


// This event will run on every single message received, from any channel or DM.
CLIENT.on("message", async _message => {
	// Recuperation commande
	var argsUser = _message.content.trim().split(" ");
	
	// Ignore si bot
	if(_message.author.bot) return;
	// Ignore si pas appelé
	if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.array()[_message.mentions.users.array().length-1].id != CLIENT.user.id) return;
	// Ignore si deja occupé
	if (IS_BUSY && argsUser[1] != "quit") return _message.reply("I'm busy right now, try again when I'll be available. You can check that on my activity.");

	BATTLE_CHANNEL = _message.channel;
	GUILD = _message.guild;

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
	if (argsUser[1] == "quit") {
		if (_message.author.id == FIGHTER1.user.id) {
			FIGHTER1.playMove(EMOTE_PP47);
			stopDuel();
			return;
		}
		else if (_message.author.id == FIGHTER2.user.id) {
			FIGHTER2.playMove(EMOTE_PP47);
			stopDuel();
			return;
		}
		else {
			return _message.reply("this fight is not yours.");
		}
	}
	if (argsUser[1] == "custom") {
		// STYLE
		IS_CHANGING_STYLE = true;
		STYLER = _message.author.id;
		
		var user = GUILD.members.get(STYLER);
		var role = GUILD.roles.find(r => r.name == GOD_PP21_PRIEST);
		if (user.roles.has(role.id)) {
			user.removeRole(GUILD.roles.find(r => r.name == GOD_PP21_PRIEST)).catch(console.error);
			addMessage("D.I.C.K Priest was removed from your roles.");
			sendMessages();
		}
		
		_message.reply("change your style with a reaction.").then(function (_message2) {
			_message2.react(EMOTE_PP38); // Fast PP
			_message2.react(EMOTE_PP40); // Big PP
			_message2.react(EMOTE_PP9); // Hockey Puck PP
			_message2.react(EMOTE_PP34); // Alien PP
			_message2.react(EMOTE_PP41); // Drunk PP
		}).catch(function(e) {
			addMessage(e);
		});
		return _message.reply("change your God with a reaction.").then(function (_message2) {
			_message2.react(GOD_PP1); // Mongo
			_message2.react(GOD_PP2); // Dr Phil / WhatDAFuk
			_message2.react(GOD_PP3); // LeprePuds
			_message2.react(GOD_PP4); // DickHead Pudding
			_message2.react(GOD_PP5); // Hello There Puds
			_message2.react(GOD_PP6); // DickDickSon666
			_message2.react(GOD_PP7); // Jew
			_message2.react(GOD_PP8); // Fabulous Toast Man
			_message2.react(GOD_PP9); // That's me
			_message2.react(GOD_PP10); // Fabio
			_message2.react(GOD_PP11); // Country Music Brenn
			_message2.react(GOD_PP12); // Espinoza
			_message2.react(GOD_PP13); // 700IQ
			_message2.react(GOD_PP14); // UREGonnaGetRAPED
			_message2.react(GOD_PP15); // STFU Isaac
			_message2.react(GOD_PP16); // The Man Who made a Monster
			_message2.react(GOD_PP17); // Hitler
			_message2.react(GOD_PP18); // Salt King
		}).catch(function(e) {
			addMessage(e);
		});

	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("you should read the PP Bible here : https://github.com/brennfeu/pp-bot/wiki/PP-Bible");
	}

	return _message.reply("I don't know this command, try using the help command !");
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	// Ignore si bot
	if (_user.bot) return;

	// Save Me Move
	if (IS_DUELLING && getAttackFromEmote(_reaction.emoji) == EMOTE_PP31 && SAVE_LIST.indexOf(_user.id) < 0) {
		SAVE_LIST.push(_user.id);
		addMessage(_user.username + " helps the fighters !");
		sendMessages();
		FIGHTER1.heal(50);
		FIGHTER2.heal(50);
	}


	// DUEL
	if (IS_DUELLING) {
		// GAY_TURNS
		if (GAY_TURNS > 0) {
			if (_user.id == FIGHTER1.user.id) {
				if (LIST_AVAILABLE_ATTACKS.indexOf(getAttackFromEmote(_reaction.emoji)) < 0) {
					addMessage("Gay people can't cheat...");
					return sendMessages();
				}
				else {
					FIGHTER2.attack = getAttackFromEmote(_reaction.emoji);
					addMessage(FIGHTER2.user.username + " : " + _reaction.emoji.name);
					sendMessages();
				}
			}
			if (_user.id == FIGHTER2.user.id) {
				if (LIST_AVAILABLE_ATTACKS.indexOf(getAttackFromEmote(_reaction.emoji)) < 0) {
					addMessage("Gay people can't cheat...");
					return sendMessages();
				}
				else {
					FIGHTER1.attack = getAttackFromEmote(_reaction.emoji);
					addMessage(FIGHTER1.user.username + " : " + _reaction.emoji.name);
					sendMessages();
				}
			}
		}

		// Assigne attaque
		else if (_user.id == FIGHTER1.user.id && FIGHTER1.isPossessed <= 0 && FIGHTER1.turnSkip <= 0 && FIGHTER1.grabbedPP <= 0 && FIGHTER1.summonTankCountdown <= 0) {
			FIGHTER1.attack = getAttackFromEmote(_reaction.emoji);
			addMessage(FIGHTER1.user.username + " : " + _reaction.emoji.name);
			sendMessages();

			// Possession
			if (FIGHTER2.isPossessed >= 1) {
				FIGHTER2.attack = getAttackFromEmote(_reaction.emoji);
				addMessage(FIGHTER2.user.username + " : " + _reaction.emoji.name);
				sendMessages();
			}
		}
		else if (_user.id == FIGHTER2.user.id && FIGHTER2.isPossessed <= 0 && FIGHTER2.turnSkip <= 0 && FIGHTER2.grabbedPP <= 0 && FIGHTER2.summonTankCountdown <= 0) {
			FIGHTER2.attack = getAttackFromEmote(_reaction.emoji);
			addMessage(FIGHTER2.user.username + " : " + _reaction.emoji.name);
			sendMessages();

			// Possession
			if (FIGHTER1.isPossessed >= 1) {
				FIGHTER1.attack = getAttackFromEmote(_reaction.emoji);
				addMessage(FIGHTER1.user.username + " : " + _reaction.emoji.name);
				sendMessages();
			}
		}

		// Deux attaques sont faites
		if (FIGHTER1.attack != "" && FIGHTER2.attack != "") {
			if (FIGHTER1.turnSkip > 0) {
				FIGHTER1.attack = EMOTE_PP50;
			}
			if (FIGHTER2.turnSkip > 0) {
				FIGHTER2.attack = EMOTE_PP50;
			}
			if (FIGHTER1.grabbedPP > 0) {
				FIGHTER1.attack = EMOTE_PP39;
			}
			if (FIGHTER2.grabbedPP > 0) {
				FIGHTER2.attack = EMOTE_PP39;
			}
			if (FIGHTER1.summonTankCountdown > 0) {
				FIGHTER1.attack = EMOTE_PP10;
			}
			if (FIGHTER2.summonTankCountdown > 0) {
				FIGHTER2.attack = EMOTE_PP10;
			}
			console.log(FIGHTER1.attack + " / " + FIGHTER2.attack);

			// test illegal
			var caught1 = illegalGetCaught(getRisk(FIGHTER1.attack)) || (FIGHTER1.badLuck && getRisk(FIGHTER1.attack) > 0);
			var caught2 = illegalGetCaught(getRisk(FIGHTER2.attack)) || (FIGHTER2.badLuck && getRisk(FIGHTER2.attack) > 0);

			if (LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER1.attack) < 0 && !(FIGHTER1.attack == EMOTE_PP50 && FIGHTER1.turnSkip) && !(FIGHTER1.attack == EMOTE_PP39 && FIGHTER1.grabbedPP) && !(FIGHTER1.attack == EMOTE_PP10 && FIGHTER1.summonTankCountdown)) {
				caught1 = caught1 || (illegalGetCaught(50) && !EVENT_PP_ENLIGHTENMENT) && !FIGHTER1.badLuck;
			}
			if (LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER2.attack) < 0 && !(FIGHTER2.attack == EMOTE_PP50 && FIGHTER2.turnSkip) && !(FIGHTER2.attack == EMOTE_PP39 && FIGHTER2.grabbedPP) && !(FIGHTER2.attack == EMOTE_PP10 && FIGHTER2.summonTankCountdown)) {
				caught2 = caught2 || (illegalGetCaught(50) && !EVENT_PP_ENLIGHTENMENT) && !FIGHTER2.badLuck;
			}

			if (FIGHTER1.attack == EMOTE_PP51 && FIGHTER1.regularCharges <= 0 && illegalGetCaught(80)) {
				caught1 = true;
			}
			if (FIGHTER2.attack == EMOTE_PP51 && FIGHTER2.regularCharges <= 0 && illegalGetCaught(80)) {
				caught2 = true;
			}
			if (FIGHTER1.attack == EMOTE_PP52 && FIGHTER1.specialCharges <= 0 && illegalGetCaught(95)) {
				caught1 = true;
			}
			if (FIGHTER2.attack == EMOTE_PP52 && FIGHTER2.specialCharges <= 0 && illegalGetCaught(95)) {
				caught2 = true;
			}
			
			if (SPECIAL_EMOTE_LIST.indexOf(FIGHTER1.attack) > -1 && LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER1.attack) < 0) {
				caught1 = true;
			}
			if (SPECIAL_EMOTE_LIST.indexOf(FIGHTER2.attack) > -1 && LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER2.attack) < 0) {
				caught2 = true;
			}
			
			if (FIGHTER1.summonTankCountdown == 1) {
				caught1 = false;
			}
			if (FIGHTER2.summonTankCountdown == 1) {
				caught2 = false;
			}
			
			if (ILLEGAL_JEWS && FIGHTER1.godList.indexOf(GOD_PP7_PRIEST) > -1 && illegalGetCaught(5)) {
				addMessage("Wait, I think " + FIGHTER1.user.username + " is a jew !");
				caught1 = true;
			}
			if (ILLEGAL_JEWS && FIGHTER2.godList.indexOf(GOD_PP7_PRIEST) > -1 && illegalGetCaught(5)) {
				addMessage("Wait, I think " + FIGHTER2.user.username + " is a jew !");
				caught2 = true;
			}

			if (FIGHTER1.isLucky && getRandomPercent() <= 50) {
				caught1 = false;
			}
			if (FIGHTER2.isLucky && getRandomPercent() <= 50) {
				caught2 = false;
			}
			
			if (FIGHTER1.trueBarbarian && FIGHTER1.STR >= 100 && caught1) {
				caught1 = false;
				addMessage(FIGHTER1.user.username + " strong. " + FIGHTER1.user.username + " punch arbitratory if arbitratory bad.");
			}
			if (FIGHTER2.trueBarbarian && FIGHTER2.STR >= 100 && caught2) {
				caught2 = false;
				addMessage(FIGHTER2.user.username + " strong. " + FIGHTER2.user.username + " punch arbitratory if arbitratory bad.");
			}
			
			if (caught1 && (getRandomPercent() >= 33 || FIGHTER1.godList.indexOf(GOD_PP12_PRIEST) > -1 && FIGHTER1.godList.indexOf(GOD_PP13_PRIEST) > -1)) {
				addMessage(FIGHTER1.user.username + " is doing illegal stuff ! He loses 20 DEX and 10 STR.");
				FIGHTER1.user.username.STRValue -= 10;
				FIGHTER1.user.username.DEXValue -= 20;
				FIGHTER1.attack = EMOTE_PP50;
				caught1 = false;
			}
			if (caught2 && (getRandomPercent() >= 33 || FIGHTER2.godList.indexOf(GOD_PP12_PRIEST) > -1 && FIGHTER2.godList.indexOf(GOD_PP13_PRIEST) > -1)) {
				addMessage(FIGHTER2.user.username + " is doing illegal stuff ! He loses 20 DEX and 10 STR.");
				FIGHTER2.user.username.STRValue -= 10;
				FIGHTER2.user.username.DEXValue -= 20;
				FIGHTER2.attack = EMOTE_PP50;
				caught2 = false;
			}

			var winner;
			if (caught1 && caught2) {
				addMessage("WAIT YOU ARE DOING ILLEGAL STUFF RIGHT NOW !");
				addMessage("You both loose the fight !");
				addMessage("You cheaters do not deserve to live !");
				addMessage("You fucking suckers");

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
				addMessage("WAIT " + getOpponentOf(winner).user.username.toUpperCase() + " IS DOING ILLEGAL STUFF RIGHT NOW !");
				addMessage(getOpponentOf(winner).user.username + " is disqualified for being a dumb shit.");
				addMessage(winner.user.username + " wins !");

				winner.win();
				addWinCounter(getOpponentOf(winner), -1);

				stopDuel();
				return;
			}
			
			addMessage("\n\n**===== ATTACKS =====**");
			
			if (FIGHTER1.godList.indexOf(GOD_PP7_PRIEST) > -1 && FIGHTER1.godList.indexOf(GOD_PP17_PRIEST) > -1 && getRandomPercent() <= 10) {
				addMessage(FIGHTER1.user.username + " gets the Jew-Hitler Paradox Effect !");
				FIGHTER1.attack = getRandomEmote(false);
			}
			if (FIGHTER2.godList.indexOf(GOD_PP7_PRIEST) > -1 && FIGHTER2.godList.indexOf(GOD_PP17_PRIEST) > -1 && getRandomPercent() <= 10) {
				addMessage(FIGHTER2.user.username + " gets the Jew-Hitler Paradox Effect !");
				FIGHTER2.attack = getRandomEmote(false);
			}

			// Change attack if dead (cthulhu battle)
			if (FIGHTER1.STR <= 0) {
				FIGHTER1.attack = "IS_DEAD_LOL";
			}
			if (FIGHTER2.STR <= 0) {
				FIGHTER2.attack = "IS_DEAD_LOL";
			}

			// ATTAQUES
			var dexAttack1 = FIGHTER1.DEX + getDexChange(FIGHTER1.attack) + Math.floor(Math.random() * 50 + 1);
			var dexAttack2 = FIGHTER2.DEX + getDexChange(FIGHTER2.attack) + Math.floor(Math.random() * 50 + 1);
			addMessage(FIGHTER1.user.username + " : " + dexAttack1 + " /VS/ " + FIGHTER2.user.username + " : " + dexAttack2);

			if (FIGHTER1.attack == EMOTE_PP5 && FIGHTER2.attack == EMOTE_PP5) {
				// HIGH FIVES :D
				addMessage("Wow, look at those bros !");
				addMessage("That was some good high five.");
				addMessage("Okay, the fight ends now !");
				addMessage("I'm literally shaking and crying right now.");
				addMessage("This is so beautiful...");
				addMessage("I love you all.");
				stopDuel();
				return;
			}

			// Steel
			if (FIGHTER1.attack == EMOTE_PP11 || FIGHTER2.attack == EMOTE_PP11) {
				STEEL_PROTECTION = true;
			}
			// Barrel
			if (FIGHTER1.attack == EMOTE_PP29 || FIGHTER2.attack == EMOTE_PP29) {
				BARREL_DAMAGE = true;
			}

			// ExclamationPoint
			if (FIGHTER1.attack == EMOTE_PP30) {
				FIGHTER1.attack = FIGHTER1.oldAttack;
			}
			else {
				FIGHTER1.oldAttack = FIGHTER1.attack;
			}
			if (FIGHTER2.attack == EMOTE_PP30) {
				FIGHTER2.attack = FIGHTER2.oldAttack;
			}
			else {
				FIGHTER2.oldAttack = FIGHTER2.attack;
			}

			if ((dexAttack1 - dexAttack2 <= 10 && dexAttack1 - dexAttack2 >= -10) || AUTO_MOVES_COUNTDOWN > 0 || EVENT_BOSS) {
				addMessage("Both opponents attack this turn !");

				FIGHTER1.playMove();
				// Burst
				if (FIGHTER2.attack == EMOTE_PP8) {
					addMessage(FIGHTER2.user.username + " burst !");
					FIGHTER1.hasBurst = 2;
				}
				addMessage("-----------------");

				FIGHTER2.playMove();
				// Burst
				if (FIGHTER1.attack == EMOTE_PP8) {
					addMessage(FIGHTER1.user.username + " burst !");
					FIGHTER2.hasBurst = 2;
				}
			}
			else if (dexAttack1 > dexAttack2) {
				// Save
				if (FIGHTER2.attack == EMOTE_PP15) {
					FIGHTER2.playMove();
				}
				
				FIGHTER1.playMove();
				// Burst
				if (FIGHTER2.attack == EMOTE_PP8) {
					addMessage(FIGHTER2.user.username + " burst !");
					FIGHTER1.hasBurst = 2;
				}

				// Scout
				if (FIGHTER2.attack == EMOTE_PP13) {
					FIGHTER2.playMove();
				}

				// Intimidates
				if (FIGHTER2.attack == EMOTE_PP28 && getRandomPercent() <= 25) {
					FIGHTER2.playMove();
				}
				
				// Dual Loop
				if (FIGHTER2.attack == EMOTE_PP55) {
					FIGHTER2.playMove();
				}
			}
			else {
				// Save
				if (FIGHTER1.attack == EMOTE_PP15) {
					FIGHTER1.playMove();
				}
				
				FIGHTER2.playMove();
				// Burst
				if (FIGHTER1.attack == EMOTE_PP8) {
					addMessage(FIGHTER1.user.username + " burst !");
					FIGHTER2.hasBurst = 2;
				}

				// Scout
				if (FIGHTER1.attack == EMOTE_PP13) {
					FIGHTER1.playMove();
				}

				// Intimidates
				if (FIGHTER1.attack == EMOTE_PP28 && getRandomPercent() <= 25) {
					FIGHTER1.playMove();
				}
				
				// Dual Loop
				if (FIGHTER1.attack == EMOTE_PP55) {
					FIGHTER1.playMove();
				}
			}

			sendMessages();
			newTurnDuel();
		}
		
		sendMessages();
		return;
	}

	// CHANGE ROLE
	if (IS_CHANGING_STYLE && STYLER == _user.id) {
		if (_reaction.emoji.id == EMOTE_PP38) {
			// Fast PP
			changeRoleToStyler(FAST_PP_ROLE);
		}
		else if (_reaction.emoji.id == EMOTE_PP40) {
			// Big PP
			changeRoleToStyler(BIG_PP_ROLE);
		}
		else if (_reaction.emoji.id == EMOTE_PP41) {
			// Drunk PP
			changeRoleToStyler(DRUNK_PP_ROLE);
		}
		else if (_reaction.emoji.id == EMOTE_PP34) {
			// Alien PP
			changeRoleToStyler(ALIEN_PP_ROLE);
		}
		else if (_reaction.emoji.id == EMOTE_PP9) {
			// Hockey Puck PP
			changeRoleToStyler(HOCKEY_PUCK_PP_ROLE);
		}

		else if (_reaction.emoji.id == GOD_PP1) {
			changeRoleToStyler(GOD_PP1_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP2) {
			changeRoleToStyler(GOD_PP2_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP3) {
			changeRoleToStyler(GOD_PP3_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP4) {
			changeRoleToStyler(GOD_PP4_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP5) {
			changeRoleToStyler(GOD_PP5_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP6) {
			changeRoleToStyler(GOD_PP6_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP7) {
			changeRoleToStyler(GOD_PP7_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP8) {
			changeRoleToStyler(GOD_PP8_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP9) {
			changeRoleToStyler(GOD_PP9_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP10) {
			changeRoleToStyler(GOD_PP10_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP11) {
			changeRoleToStyler(GOD_PP11_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP12) {
			changeRoleToStyler(GOD_PP12_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP13) {
			changeRoleToStyler(GOD_PP13_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP14) {
			changeRoleToStyler(GOD_PP14_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP15) {
			changeRoleToStyler(GOD_PP15_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP16) {
			changeRoleToStyler(GOD_PP16_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP17) {
			changeRoleToStyler(GOD_PP17_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP18) {
			changeRoleToStyler(GOD_PP18_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP19) {
			changeRoleToStyler(GOD_PP19_PRIEST);
		}
		else if (_reaction.emoji.id == GOD_PP21) {
			changeRoleToStyler(GOD_PP21_PRIEST);
		}
		return;
	}
	return;
});

CLIENT.login(process.env.BOT_TOKEN);
