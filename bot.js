// PP ARBITRATOR

// VARIABLES
// Constantes
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

const BETA_TEST = false;
const PRIVATE_TEST = false;

const FAST_PP_ROLE = "Fast PP";
const BIG_PP_ROLE = "Big PP";
const ALIEN_PP_ROLE = "Alien PP";
const HOCKEY_PUCK_PP_ROLE = "Hockey Puck PP";
const DRUNK_PP_ROLE = "Drunken PP";

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

// Variables
var IS_BUSY = false;
var IS_DUELLING = false;
var IS_CHANGING_STYLE = false;

var GUILD;
var BATTLE_CHANNEL;
var LIST_AVAILABLE_ATTACKS = [];

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

var DISABLE_ABANDON = false;

var PP_ARMAGEDDON = false;
var EVENT_PP_ENLIGHTENMENT = false;
var EVENT_PP_PURGE = false;
var EVENT_CONFUSION = false;
var EVENT_BOSS = false;
var BOSS_HEALTH = 10000;
var EVENT_BLOOD_MOON = false;


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
		return dex;
	}
	
	// fighter.toString
	toString() {
		if (this.STR <= 0 && EVENT_BOSS) {
			return this.user.username; + "\n -> Is dead";
		}
		
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
		
		// Status
		txt += "\nStatus :\n"
		if (this.isOverCircumcised) {
			txt += " - Overcircumcised\n";
		}
		else if (this.isCircumcised) {
			
			txt += " - Circumcised\n";
		}
		if (this.bleedDamage > 0) {
			txt += " - Hemoragy : " + this.bleedDamage + "\n";
		}
		if (this.isPossessed > 0) {
			txt += " - Possessed by " + getOpponentOf(this).user.username + "\n"
		}
		if (this.isPigged) {
			txt += " - Hog Squeezer\n"
		}
		if (this.doomReverse > 0) {
			txt += " - DOOM-REVERSE(tm)\n"
		}
		if (this.acidArmor > 0) {
			txt += " - Armored in acid\n"
		}
		if (this.hasBoomerang > 0) {
			txt += " - With a Boomerang"
		}
		
		return txt;
	}
	
	playMove(_newMove = this.attack) {
		try {
			this.attackedThisTurn = true;
			MOVE_COUNT += 1;
			INFINITE_DAMAGE = 0;
			var attack = _newMove;
			
			if (EVENT_BOSS && this.STR <= 0) { 
				this.attack = "IS_DEAD_LOL"
			}
			
			if (attack == EMOTE_PP1) {
				// Punching PP
				BATTLE_CHANNEL.send(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).damage(Math.floor(10 + this.STR / 10));
			}
			else if (attack == EMOTE_PP2) {
				// Punching PP Really Hard
				BATTLE_CHANNEL.send(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP really hard !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10));
			}
			else if (attack == EMOTE_PP3) {
				// Hologram
				BATTLE_CHANNEL.send(this.user.username + " touches " + getOpponentOf(this).user.username + "'s PP vital point !");
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP4) {
				// Flex
				BATTLE_CHANNEL.send(this.user.username + " flexes !");
				var bonus = Math.floor(Math.random() * 30 + 1);
				BATTLE_CHANNEL.send(this.user.username + " get " + bonus + " STR !");
				this.STRValue += bonus;			
			}
			else if (attack == EMOTE_PP5) {
				// High Five
				BATTLE_CHANNEL.send(this.user.username + " is feeling lonely... :(");			
			}
			else if (attack == EMOTE_PP6) {
				// Kick
				BATTLE_CHANNEL.send(this.user.username + " kicks " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10)*3);
			}
			else if (attack == EMOTE_PP7) {
				// Turkey
				BATTLE_CHANNEL.send(this.user.username + " and " + getOpponentOf(this).user.username + " start a feast !");
				this.STRValue += 100;
				this.turkeyCountdown = 11;
				getOpponentOf(this).STRValue += 100;
				getOpponentOf(this).turkeyCountdown = 11;
				BATTLE_CHANNEL.send("They both gain 100 STR !");
			}
			else if (attack == EMOTE_PP8) {
				// Trap Sign
				BATTLE_CHANNEL.send(this.user.username + " is ready to burst !");
				BATTLE_CHANNEL.send("...");
				BATTLE_CHANNEL.send("Well...");
			}
			else if (attack == EMOTE_PP9) {
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
			else if (attack == EMOTE_PP10) {
				// Tank
				BATTLE_CHANNEL.send(this.user.username + " brings a tank !");
				BATTLE_CHANNEL.send("FIRE !");
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP11) {
				// Steel
				BATTLE_CHANNEL.send(this.user.username + " sets up a protection for nothing...");
			}
			else if (attack == EMOTE_PP12) {
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
			else if (attack == EMOTE_PP13) {
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
			else if (attack == EMOTE_PP14) {
				// SawBlade
				BATTLE_CHANNEL.send(this.user.username + " cuts " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).bleedDamage += 5;
			}
			else if (attack == EMOTE_PP15) {
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
			else if (attack == EMOTE_PP16) {
				// Satan
				BATTLE_CHANNEL.send(this.user.username + " possesses " + getOpponentOf(this).user.username + "'s PP !");
				getOpponentOf(this).isPossessed = 2;
			}
			else if (attack == EMOTE_PP17) {
				// RiotShield
				BATTLE_CHANNEL.send(this.user.username + " gets a shield !");
				this.isProtected = true;
			}
			else if (attack == EMOTE_PP18) {
				// Red Pill
				BATTLE_CHANNEL.send(this.user.username + " gets a pill !");
				this.STRValue += 5;
				this.DEXValue += 3;
			}
			else if (attack == EMOTE_PP19) {
				// Pig
				BATTLE_CHANNEL.send(this.user.username + " squeezes hog yeah yeah !");
				this.isPigged = true;
			}
			else if (attack == EMOTE_PP20) {
				// DoomReverse (MookGrenade)
				BATTLE_CHANNEL.send(this.user.username + " sets up a DOOM-REVERSE(tm) !");
				this.doomReverse = 4;
			}
			else if (attack == EMOTE_PP21) {
				// Acid
				BATTLE_CHANNEL.send(this.user.username + " gets an acid armor !");
				this.acidArmor = 5;
			}
			else if (attack == EMOTE_PP22) {
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
			else if (attack == EMOTE_PP23) {
				// LaughSoul
				BATTLE_CHANNEL.send(this.user.username + " laughs at " + getOpponentOf(this).user.username + " !");
				BATTLE_CHANNEL.send("He gets " + getOpponentOf(this).missedMoves*10 + " STR !");
				this.STRValue += getOpponentOf(this).missedMoves*10;
			}
			else if (attack == EMOTE_PP24) {
				// KnockBack
				BATTLE_CHANNEL.send(this.user.username + " swap the natural STR values !");
				this.STRValue += getOpponentOf(this).STRValue;
				getOpponentOf(this).STRValue = this.STRValue - getOpponentOf(this).STRValue;
				this.STRValue -= getOpponentOf(this).STRValue;
			}
			else if (attack == EMOTE_PP25) {
				// Bombardment
				BATTLE_CHANNEL.send(this.user.username + " call for a bombardment !!!");
				this.damage(1000);
				getOpponentOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP26) {
				// Big Satan
				DISABLE_ABANDON = true;
				BATTLE_CHANNEL.send(this.user.username + " summon Satan chaotic powers !!!");
				this.playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				this.playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				this.playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				this.playMove(getRandomEmote());
				BATTLE_CHANNEL.send("-----------------");
				this.playMove(getRandomEmote());
				BATTLE_CHANNEL.send("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				getOpponentOf(this).playMove(getRandomEmote(false));
				BATTLE_CHANNEL.send("-----------------");
				getOpponentOf(this).playMove(getRandomEmote());
				BATTLE_CHANNEL.send("-----------------");
				getOpponentOf(this).playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP27) {
				// BigGuyBullet
				BATTLE_CHANNEL.send(this.user.username + " uses his PP as a gun !");
				getOpponentOf(this).damage(Math.floor(20 + this.STR / 10));
				this.DEXValue -= 20;
				getOpponentOf(this).DEXValue -= 20;
				
			}
			else if (attack == EMOTE_PP28) {
				// BigGuy
				BATTLE_CHANNEL.send(this.user.username + " intimidates " + getOpponentOf(this).user.username + " !");
				getOpponentOf(this).hasBurst = 2;
				
			}
			else if (attack == EMOTE_PP29) {
				// Barrel
				BATTLE_CHANNEL.send(this.user.username + " sets up a barrel for nothing...");
			}
			else if (attack == EMOTE_PP30) {
				// ExclamationPoint
				BATTLE_CHANNEL.send(this.user.username + " tries to go back too far in time !");
				BATTLE_CHANNEL.send("This create a space-time distortion !");
				this.playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP31) {
				// Save Me Sign
				BATTLE_CHANNEL.send(this.user.username + " wants to be saved !");
			}
			else if (attack == EMOTE_PP32) {
				// High Five Emote
				BATTLE_CHANNEL.send(this.user.username + " stops the time !");
				STOPPED_MOVE_LIST = LIST_AVAILABLE_ATTACKS;
			}
			else if (attack == EMOTE_PP33) {
				// Headless - Big Kidney Stone
				BATTLE_CHANNEL.send(this.user.username + " shoots a big kidney stone !");
				this.damage(50);
				getOpponentOf(this).damage(50);
			}
			else if (attack == EMOTE_PP34) {
				// Facehugger
				BATTLE_CHANNEL.send(this.user.username + " impregnates " + getOpponentOf(this).user.username + " !");
				getOpponentOf(this).isAlienPP = true;
				getOpponentOf(this).damage(Math.floor(getOpponentOf(this).STR/2));
			}
			else if (attack == EMOTE_PP35) {
				// Facehugged
				BATTLE_CHANNEL.send(this.user.username + " impregnates the arbitratory !");
				BLIND_COUNTDOWN = 2;
				if (getRandomPercent() < 33) {
					BLIND_COUNTDOWN = 9999999;
				}
			}
			else if (attack == EMOTE_PP36) {
				// Explosion
					BATTLE_CHANNEL.send(this.user.username + " plays the terrorist move !");
				if (ILLEGAL_BOMBING) {
					getOpponentOf(this).damage(1000);
				}
				else {
					BATTLE_CHANNEL.send("But no terrorist move was planned !");
				}
			}
			else if (attack == EMOTE_PP37) {
				// Disembowled - Kidney Stone
				BATTLE_CHANNEL.send(this.user.username + " shoots a kidney stone !");
				this.damage(25);
				getOpponentOf(this).damage(25);
			}
			else if (attack == EMOTE_PP38) {
				// DeadBro
				BATTLE_CHANNEL.send(this.user.username + " wants a fast PP...");
				if (this.isFastPP) {
					BATTLE_CHANNEL.send("...but he already had one !");
				}
				else {
					this.isFastPP = true;
					BATTLE_CHANNEL.send("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP39) {
				// Interrogation Point
				BATTLE_CHANNEL.send(this.user.username + " summon a random move !");
				this.playMove(getRandomEmote());
			}
			else if (attack == EMOTE_PP40) {
				// ChestBurst
				BATTLE_CHANNEL.send(this.user.username + " wants a big PP...");
				if (this.isBigPP) {
					BATTLE_CHANNEL.send("...but he already had one !");
				}
				else {
					this.isBigPP = true;
					BATTLE_CHANNEL.send("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP41) {
				// 007 Drunk
				BATTLE_CHANNEL.send(this.user.username + " wants a drunk PP...");
				if (this.isDrunkPP) {
					BATTLE_CHANNEL.send("...but he already had one !");
				}
				else {
					this.isDrunkPP = true;
					BATTLE_CHANNEL.send("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP42) {
				// Bronan Slam
				BATTLE_CHANNEL.send(this.user.username + " builds up for his next attack...");
				this.bonusDamage += 20;
			}
			else if (attack == EMOTE_PP43) {
				// BrocketeerDive
				BATTLE_CHANNEL.send(this.user.username + " punches " + getOpponentOf(this).user.username + "'s PP with his head !");
				getOpponentOf(this).damage(Math.floor(10 + this.STR / 10));
				getOpponentOf(this).hasBurst = 2;
				
			}
			else if (attack == EMOTE_PP44) {
				// Kamikaze
				BATTLE_CHANNEL.send(this.user.username + " plans a suicide move !");
				ILLEGAL_BOMBING = true;
			}
			else if (attack == EMOTE_PP45) {
				// Boomerang
				BATTLE_CHANNEL.send(this.user.username + " gets a nice boomerang");
				this.hasBoomerang = 4;
			}
			else if (attack == EMOTE_PP46) {
				// TruffleHistorian
				DISABLE_ABANDON = true;
				BATTLE_CHANNEL.send(this.user.username + " calls the Ancient Fongus");
				var chaosNumber = getRandomPercent();
				if (getRandomPercent() >= 50) {
					var winner = this;
				}
				else {
					var winner = getOpponentOf(this);
				}
				BATTLE_CHANNEL.send("He will use " + chaosNumber + "% of his power in " + winner.user.username);
				chaosNumber = Math.floor(chaosNumber/4);
				var i;
				for (i = 0; i < chaosNumber; i++) {
					BATTLE_CHANNEL.send("-----------------");
					winner.playMove(getRandomEmote());
				} 
			}
			else if (attack == EMOTE_PP47) {
				// Pudding
				BATTLE_CHANNEL.send(this.user.username + " abandons the battle !");
				this.STRValue = -999999999;
				return;
			}
			else if (attack == EMOTE_PP48) {
				// Brennfeu
				BATTLE_CHANNEL.send(this.user.username + " messes everything !");
				BATTLE_CHANNEL.send("As always !");
				this.STRValue += Math.floor((getRandomPercent() - 50)/2);
				this.DEXValue += Math.floor((getRandomPercent() - 50)/2);
				getOpponentOf(this).STRValue += Math.floor((getRandomPercent() - 50)/2);
				getOpponentOf(this).DEXValue += Math.floor((getRandomPercent() - 50)/2);
			}
			else if (attack == EMOTE_PP49) {
				// Soup
				BATTLE_CHANNEL.send("Behold " + this.user.username + " the living God !");
				this.STRValue += 10000;
				this.DEXValue += 10000;
			}
			else if (attack == EMOTE_PP50) {
				// Perhaps
				BATTLE_CHANNEL.send(this.user.username + " thinks about life and the universe...");
				BATTLE_CHANNEL.send("Wait he forgot about the battle");
			}
			else if (attack == "IS_DEAD_LOL") {
				// Dead (Cthulhu battle)
				BATTLE_CHANNEL.send(this.user.username + " is dead so funny lol omg");
			}
			else {
				BATTLE_CHANNEL.send(this.user.username + " makes an unknown move ?");
			}
			
			// Boomerang
			if (!this.isBoomerangUsed && this.hasBoomerang >= 1) {
				this.isBoomerangUsed = true;
				this.playMove();
			} 
		}
		catch(e) {
			BATTLE_CHANNEL.send(e);
			BATTLE_CHANNEL.send("lol");
			stopDuel();
			return;
		}
	}
	
	damage(_amount) {
		_amount += getOpponentOf(this).bonusDamage;
		getOpponentOf(this).bonusDamage = 0;
		
		
		if (INFINITE_DAMAGE >= 10) {
			BATTLE_CHANNEL.send("Damage cap achieved !");
			return BATTLE_CHANNEL.send(_amount + " damages were canceled");
		}
		INFINITE_DAMAGE += 1;
		
		if (EVENT_BOSS) {
			BOSS_HEALTH -= _amount;
			BATTLE_CHANNEL.send("Cthulhu takes " + _amount + " damages !");
			DAMAGE_COUNT += _amount;
			return;
		}
		
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
			this.isProtected = false;
			getOpponentOf(this).damage(_amount);
		}
		else if (STEEL_PROTECTION) {
			// Steel
			this.STRValue -= Math.floor(_amount/10);
			DAMAGE_COUNT += Math.floor(_amount/10);
			BATTLE_CHANNEL.send(this.user.username + " takes " + Math.floor(_amount/10) + " damages !");
		}
		else if (BARREL_DAMAGE) {
			// Barrel
			this.STRValue -= Math.floor(_amount*2);
			DAMAGE_COUNT += Math.floor(_amount*2);
			BATTLE_CHANNEL.send(this.user.username + " takes " + Math.floor(_amount*2) + " damages !");
		}
		else {
			// Damage
			this.STRValue -= _amount;
			DAMAGE_COUNT += _amount;
			BATTLE_CHANNEL.send(this.user.username + " takes " + _amount + " damages !");
		}
		
		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			BATTLE_CHANNEL.send(this.user.username + " uses DOOM-REVERSE(tm) !");
			getOpponentOf(this).damage(50);
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
			if (this.turkeyCountdown <= 0) {
				BATTLE_CHANNEL.send(this.user.username + " explodes !");
				this.damage(1000);
			}
			else {
				BATTLE_CHANNEL.send(this.user.username + " has " + this.turkeyCountdown + " turn(s) left !");
			}
		}
		
		// Trap Sign, Examine, SatanPossess etc..
		this.hasBurst -= 1;
		this.hasExamined -= 1;
		this.isPossessed -= 1;
		this.doomReverse -= 1;
		this.acidArmor -= 1;
		this.hasBoomerang -= 1;
		this.isBoomerangUsed = false;
		
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
		
		// PP Armageddon
		if (PP_ARMAGEDDON) {
			this.STRValue -= 5000;
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
		this.isBoomerangUsed = false;
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
		return CLIENT.user.setActivity(_texte + " [PRIVATE TEST]");
	}
	if (BETA_TEST) {
		return CLIENT.user.setActivity(_texte + " [BETA TEST] ");
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
	if (BLIND_COUNTDOWN >= 0) {
		console.log("blind");
		return false;
	}
	var result = (getRandomPercent() < _percentage);
	console.log("Illegal percentage : " + _percentage);
	return result;
}
function getRisk(_move) {
	console.log("risk of move : " + _move);
	if (EVENT_PP_PURGE) {
		return 0;
	}
	switch(_move) {
		case EMOTE_PP46:
			return 10;
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
		case EMOTE_PP46:
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
			return 1000;
	}
	return 0;
}

function startDuel(_message) {
	IS_BUSY = true;
	IS_DUELLING = true;
	IS_CHANGING_STYLE = false;
	
	ILLEGAL_BOMBING = false;
	BLIND_COUNTDOWN = 0;
	STEEL_PROTECTION = false;
	BARREL_DAMAGE = false;
	SAVE_LIST = [];
	STOPPED_MOVE_LIST = [];
	INFINITE_DAMAGE = 0;
	MOVE_COUNT = 0;
	DAMAGE_COUNT = 0;

	PP_ARMAGEDDON = false;
	EVENT_PP_ENLIGHTENMENT = false;
	EVENT_PP_PURGE = false;
	EVENT_CONFUSION = false;
	EVENT_BOSS = false;
	EVENT_BLOOD_MOON = false;
	
	console.log("F1 " + _message.author.id);
	console.log("F2 " + _message.mentions.users.array()[0]);
	FIGHTER1 = new Fighter(_message.author.id);
	FIGHTER2 = new Fighter(_message.mentions.users.array()[0].id);
	
	if (FIGHTER1.user.id == FIGHTER2.user.id) {
		BATTLE_CHANNEL.send("You can't battle yourself");
		stopDuel()
		return;
	}
	
	BATTLE_CHANNEL.send("TIME FOR A DUEL");
}
function stopDuel() {
	BATTLE_CHANNEL.send("===== RECAP =====");
	BATTLE_CHANNEL.send("FIGHTERS CURRENT STATE :");
	BATTLE_CHANNEL.send(FIGHTER1.toString());
	BATTLE_CHANNEL.send("-----------------");
	BATTLE_CHANNEL.send(FIGHTER2.toString());
	BATTLE_CHANNEL.send("SOME STATS :");
	BATTLE_CHANNEL.send(" - Number of moves : " + MOVE_COUNT);
	BATTLE_CHANNEL.send(" - Number of damages inflicted : " + DAMAGE_COUNT);
	
	setBotActivity("");
	IS_DUELLING = false;
	IS_BUSY = false;
}
function newTurnDuel() {
	FIGHTER1.turnChange();
	FIGHTER2.turnChange();
	
	STEEL_PROTECTION = false;
	BARREL_DAMAGE = false;
	SAVE_LIST = [];
	BLIND_COUNTDOWN -= 1;
	INFINITE_DAMAGE = 0;
	DISABLE_ABANDON = false;
	
	if (BLIND_COUNTDOWN >= 1) {
		setBotActivity("WTF I'M FUCKING BLIND");
		BLIND_COUNTDOWN -= 1;
	}
	else {
		setBotActivity("PP Punch Arena");
	}
	
	// Blood Moon Save
	if (EVENT_BLOOD_MOON) {
		if (FIGHTER1.STR <= 0) {
			FIGHTER1.DEXValue -= (0-FIGHTER1.STR);
			FIGHTER1.STRValue += (0-FIGHTER1.STR);
			BATTLE_CHANNEL.send(FIGHTER1.user.username + " got saved thanks to the Blood Moon");
		}
		if (FIGHTER2.STR <= 0) {
			FIGHTER2.DEXValue -= (0-FIGHTER2.STR);
			FIGHTER2.STRValue += (0-FIGHTER2.STR);
			BATTLE_CHANNEL.send(FIGHTER2.user.username + " got saved thanks to the Blood Moon");
		}
	}
	
	startRandomEvent();
	
	// Blood Moon Save
	if (EVENT_BLOOD_MOON) {
		if (FIGHTER1.STR <= 0) {
			FIGHTER1.DEXValue -= (0-FIGHTER1.STR);
			FIGHTER1.STRValue += (0-FIGHTER1.STR);
			BATTLE_CHANNEL.send(FIGHTER1.user.username + " got saved thanks to the Blood Moon");
		}
		if (FIGHTER2.STR <= 0) {
			FIGHTER2.DEXValue -= (0-FIGHTER2.STR);
			FIGHTER2.STRValue += (0-FIGHTER2.STR);
			BATTLE_CHANNEL.send(FIGHTER2.user.username + " got saved thanks to the Blood Moon");
		}
	}
	
	// Cthulhu
	if (EVENT_BOSS) {
		if (BOSS_HEALTH <= 0) {
			BATTLE_CHANNEL.send("Cthulhu go back to sleep to heal his poor PP !");
			BATTLE_CHANNEL.send("You both win !");
			addWinCounter(FIGHTER1, 1);
			addWinCounter(FIGHTER2, 1);
			EVENT_BOSS = false;
			return stopDuel();
		}
		else {
			if (getRandomPercent() >= 50) {
				BATTLE_CHANNEL.send(FIGHTER1.user.username + " gets attacked by Cthulhu !");
				FIGHTER1.STRValue -= 50;
			}
			else {
				BATTLE_CHANNEL.send(FIGHTER2.user.username + " gets attacked by Cthulhu !");
				FIGHTER1.STRValue -= 50;
			}
		}
		
		// Check if loose
		if (FIGHTER1.STR <= 0 && FIGHTER2.STR <= 0) {
			BATTLE_CHANNEL.send("Both of you lost. No one won this time. You losers");
			stopDuel();
			return;
		}
	}
	else {
		// Check if dead
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
	}
	
	BATTLE_CHANNEL.send("\n\n===== NEW TURN =====");
	if (!EVENT_BOSS) {
		BATTLE_CHANNEL.send(FIGHTER1.toString());
		BATTLE_CHANNEL.send("===== /VS/ =====");
		BATTLE_CHANNEL.send(FIGHTER2.toString());
	}
	else {
		BATTLE_CHANNEL.send(FIGHTER1.toString());
		BATTLE_CHANNEL.send(FIGHTER2.toString());
		BATTLE_CHANNEL.send("===== /VS/ =====");
		BATTLE_CHANNEL.send("Cthulhu\n\nSTR : " + BOSS_HEALTH);
	}
	
	// HighFiveEmote - Stop move_list
	if (STOPPED_MOVE_LIST.length >= 1) {
		LIST_AVAILABLE_ATTACKS = STOPPED_MOVE_LIST;
		STOPPED_MOVE_LIST = [];
	}
	else {
		setRandomAttackList();
	}
	
	
	BATTLE_CHANNEL.send("\n\nAttack with a reaction !").then(function (_message2) {
		for (var i in LIST_AVAILABLE_ATTACKS) {
			console.log(LIST_AVAILABLE_ATTACKS[i]);
			_message2.react(LIST_AVAILABLE_ATTACKS[i]);
		}
	}).catch(function(e) {
		BATTLE_CHANNEL.send(e);
	});
	
	// Stop if dead (cthulhu battle)
	if (FIGHTER1.STR <= 0) {
		FIGHTER1.attack = "IS_DEAD_LOL";
		FIGHTER1.STRValue = -10;
	}
	if (FIGHTER2.STR <= 0) {
		FIGHTER2.attack = "IS_DEAD_LOL";
		FIGHTER2.STRValue = -10;
	}
}

function setRandomAttackList() {
	var listeAttaques = [];
	var emote;

	if (EVENT_CONFUSION) {
		return LIST_AVAILABLE_ATTACKS = [EMOTE_PP39];
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
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP45, EMOTE_PP46, EMOTE_PP48, EMOTE_PP50
					];
	var illegalList = [EMOTE_PP6, EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, EMOTE_PP10,
					EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP20,
					EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30,
					EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, EMOTE_PP34, EMOTE_PP35, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40,
					EMOTE_PP41, EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP48, EMOTE_PP49, EMOTE_PP50
					];
	var goodList
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
	
	return goodList[Math.floor(Math.random()*goodList.length)];
}

function startRandomEvent() {
	// Reset events
	EVENT_PP_ENLIGHTENMENT = false;
	EVENT_PP_PURGE = false;
	EVENT_CONFUSION = false;
	EVENT_BLOOD_MOON = false;
	
	BATTLE_CHANNEL.send("===== EVENTS =====");
	var randomVar = getRandomPercent();
	//test
	//if (MOVE_COUNT <= 4 && !EVENT_BOSS) {randomVar = 5;}
	//randomVar = 6;
	
	// PP ARMAGEDDON
	if (!PP_ARMAGEDDON && MOVE_COUNT >= 100) {
		PP_ARMAGEDDON = true;
		BATTLE_CHANNEL.send(" -- PP ARMAGEDDON --");
		BATTLE_CHANNEL.send("PPs have ascended, the end is near !");
		FIGHTER1.STRValue += 1000000;
		FIGHTER1.DEXValue += 200;
		FIGHTER2.STRValue += 1000000;
		FIGHTER2.DEXValue += 200;
	}
	else if (randomVar == 2) {
		// PP Enlightenment
		EVENT_PP_ENLIGHTENMENT = true;
		BATTLE_CHANNEL.send(" -- PP ENLIGHTENMENT --");
		BATTLE_CHANNEL.send("Your PP temporarily become enlightened. All moves can now be used for this turn. \nIllegal moves are still illegal.");
	}
	else if (randomVar == 3) {
		// PP Purge
		EVENT_PP_PURGE = true;
		BATTLE_CHANNEL.send(" -- PP PURGE --");
		BATTLE_CHANNEL.send("All PPs grow a mohawk and start to roam the streets. \nIllegal moves can now be used freely but the judge will still see you if you use unavailable moves");
	}
	else if (randomVar == 4) {
		// Sexually Confused
		EVENT_CONFUSION = true;
		BATTLE_CHANNEL.send(" -- SEXUAL CONFUSION --");
		BATTLE_CHANNEL.send("Your PPs are confused for this turn");
	}
	else if (randomVar == 5) {
		// Cthulhu
		EVENT_BOSS = true;
		BATTLE_CHANNEL.send(" -- CTHULHU AWAKENS --");
		BATTLE_CHANNEL.send("You have to beat Cthulhu by punching his huge PP in order to save the world !");
		BOSS_HEALTH = 10000;
	}
	else if (randomVar == 6) {
		// Accidental Summoning
		BATTLE_CHANNEL.send(" -- ACCIDENTAL SUMMONING --");
		if (getRandomPercent() >= 50) {
			var winner = FIGHTER1;
		}
		else {
			var winner = FIGHTER2;
		}
		BATTLE_CHANNEL.send(winner.user.username + " accidentaly plays Psychedeous on their phone and it summons Satan and the Ancient Fongus !");
		winner.playMove(EMOTE_PP26);
		winner.playMove(EMOTE_PP46);
	}
	else if (randomVar == 7) {
		// Blood Moon
		EVENT_BLOOD_MOON = true;
		BATTLE_CHANNEL.send(" -- BLOOD MOON --");
		BATTLE_CHANNEL.send("If someone dies this turn, STR automatically stays at 1 but the remaining damages in the DEX");
	}
	else {
		BATTLE_CHANNEL.send("No event this turn...");
	}
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
			BATTLE_CHANNEL.send(user.user.username + " removes the role : " + _nomRole);
		}
		else {
			user.addRole(role).catch(console.error);
			BATTLE_CHANNEL.send(user.user.username + " gets the role : " + _nomRole);
		}
	}
	catch(e) {
		BATTLE_CHANNEL.send("I'm sorry I can't do that :(");
		BATTLE_CHANNEL.send("Looks like there is no " + _nomRole + " role here...");
	}
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
	// Ignore si bot
	if(_message.author.bot) return;
	// Ignore si pas appelé
	if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.array()[_message.mentions.users.array().length-1].id != CLIENT.user.id) return;
	// Ignore si test privé
	if (PRIVATE_TEST && _message.author.username != "brennfeu") return _message.reply("I am currently unavailable, sorry :/");
	// Ignore si deja occupé
	if (IS_BUSY) return _message.reply("I'm busy right now, try again when I'll be available. You can check that on my activity.");
	
	BATTLE_CHANNEL = _message.channel;
	GUILD = _message.guild;
	
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
		IS_CHANGING_STYLE = true;
		STYLER = _message.author.id;
		return _message.reply("Change your style with a reaction.").then(function (_message2) {
			_message2.react(EMOTE_PP38); // Fast PP
			_message2.react(EMOTE_PP40); // Big PP
			_message2.react(EMOTE_PP9); // Hockey Puck PP
			_message2.react(EMOTE_PP34); // Alien PP
			_message2.react(EMOTE_PP41); // Drunk PP
		}).catch(function(e) {
			BATTLE_CHANNEL.send(e);
		});
	
	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("Go read the PP Bible here : https://github.com/brennfeu/pp-bot/wiki/PP-Bible");
	}
	
	return _message.reply("I don't know this command, try using the help command !");
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	var _message = _reaction.message;
	
	// Ignore si bot
	if (_user.bot) return;
	
	// Save Me Move
	if (IS_DUELLING && _reaction.emoji.id == EMOTE_PP31 && SAVE_LIST.indexOf(_user.id) < 0) {
		SAVE_LIST.push(_user.id);
		BATTLE_CHANNEL.send(_user.username + " helps the fighters !");
		FIGHTER1.STRValue += 50;
		FIGHTER2.STRValue += 50;
	}
	
	
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
				caught1 = caught1 || (illegalGetCaught(50) && !EVENT_PP_ENLIGHTENMENT);
			}
			if (LIST_AVAILABLE_ATTACKS.indexOf(FIGHTER2.attack) < 0) {
				caught2 = caught2 || (illegalGetCaught(50) && !EVENT_PP_ENLIGHTENMENT);
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
				
				// Intimidates
				if (FIGHTER2.attack == EMOTE_PP28 && getRandomPercent() <= 25) {
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
				
				// Intimidates
				if (FIGHTER1.attack == EMOTE_PP28 && getRandomPercent() <= 25) {
					FIGHTER1.playMove();
				}
			}
			
			newTurnDuel();
		}
		
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
		
		return;
	} 
	
	
	return;
	
});

CLIENT.login(process.env.BOT_TOKEN);

