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

const PP_EXPERT_ROLE = "PP Expert";
const PP_SKIPPER_ROLE = "PP Skipper";

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
const GOD_PP19_PRIEST = "Chad Brenn Priest";
const GOD_PP20_PRIEST = "Mikasa Priest";
const PRIEST_ROLES = [GOD_PP1_PRIEST, GOD_PP2_PRIEST, GOD_PP3_PRIEST, GOD_PP4_PRIEST, GOD_PP5_PRIEST, GOD_PP6_PRIEST,
		      GOD_PP7_PRIEST, GOD_PP8_PRIEST, GOD_PP9_PRIEST, GOD_PP10_PRIEST, GOD_PP11_PRIEST, GOD_PP12_PRIEST,
		      GOD_PP13_PRIEST, GOD_PP14_PRIEST, GOD_PP15_PRIEST, GOD_PP16_PRIEST, GOD_PP17_PRIEST, GOD_PP18_PRIEST,
		      GOD_PP19_PRIEST, GOD_PP20_PRIEST];

const GOD_PP21_PRIEST = "D.I.C.K. Priest";
const GOD_PP22_PRIEST = "Satan Priest";
const GOD_PP23_PRIEST = "Ancient Fongus Priest";
const GOD_PP24_PRIEST = "Time Cube Priest";
const GOD_PP25_PRIEST = "Cthulhu Priest";
const ELDRITCH_PRIEST_ROLES = [GOD_PP21_PRIEST, GOD_PP22_PRIEST, GOD_PP23_PRIEST, GOD_PP24_PRIEST, GOD_PP25_PRIEST];

const EMOTE_SKIP = "TURN_SKIP";
const EMOTE_DEAD = "IS_DEAD_LOL";
const EMOTE_SKIPPER = "665141844640006156";

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
const EMOTE_PP61 = "644880195903553536"; // Flag
const EMOTE_PP62 = "644881329317478411"; // SuperCheckpoint

const EMOTE_PP63 = "662651475515670534"; // Xenomorph
const EMOTE_PP64 = "662651475524321330"; // XenoHead
const EMOTE_PP65 = "662651475503218688"; // Signpost
const EMOTE_PP66 = "662651475549225000"; // SatanHead
const EMOTE_PP67 = "662651475641499648"; // RageSatan
const EMOTE_PP68 = "662651475394297867"; // Mech
const EMOTE_PP69 = "662651475457212447"; // LostSoul
const EMOTE_PP70 = "662651475398361099"; // HellDogHead
const EMOTE_PP71 = "662651475549356051"; // Freedom
const EMOTE_PP72 = "662651475629178880"; // AmmoCrate
const EMOTE_PP73 = "663523761148133408"; // Quickening
const EMOTE_PP74 = "663738297687867405"; // Sword
const EMOTE_PP75 = "664116840070512660"; // AcidShot
const EMOTE_PP76 = "664845944252137494"; // EldritchPudding
const EMOTE_PP77 = "668790615902912514"; // SatanHand
const EMOTE_PP78 = "669581624026988578"; // SatanSkull

const EMOTE_PP79 = "667336163396288522"; // Eye of Truth
const EMOTE_PP80 = "644617031739768842"; // Fherla
const EMOTE_PP81 = "650398049126055937"; // Melodia

const GOD_PP1 = "644643782888783892"; // Mongo
const GOD_PP2 = "617686716479832064"; // Dr Phil / WhatDAFuk
const GOD_PP3 = "616332243337609257"; // LeprePuds
const GOD_PP4 = "614823752492122156"; // DickHead Pudding
const GOD_PP5 = "614823329731313670"; // Hello There Puds
const GOD_PP6 = "616877566396989451"; // DickDickSon666
const GOD_PP7 = "644621040093364283"; // Jew
const GOD_PP8 = "614823500951060481"; // Fabulous Toast Man
const GOD_PP9 = "615268884651442186"; // That's me
const GOD_PP10 = "618037444222255104"; // Fabio
const GOD_PP11 = "614825720962744344"; // Country Music Brenn
const GOD_PP12 = "615887132157804564"; // Espinoza
const GOD_PP13 = "617258233307987986"; // 700IQ
const GOD_PP14 = "615271176314290249"; // UREGonnaGetRAPED
const GOD_PP15 = "614822537800712213"; // STFU Isaac
const GOD_PP16 = "619795568230924291"; // The Man Who made a Monster
const GOD_PP17 = "622395294390157329"; // Hitler
const GOD_PP18 = "650830165751889935"; // Salt King
const GOD_PP19 = "644634924477055015"; // Chad Brenn
const GOD_PP20 = "655523518812913664"; // Waifu
const GOD_PP21 = "644617343456247829"; // D.I.C.K.
const GOD_PP22 = "671344081841946625"; // Satan
const GOD_PP23 = "671347173270618112"; // Ancient Fongus
const GOD_PP24 = "671347614431576065"; // Time Cube
const GOD_PP25 = "672065078144794645"; // Cthulhu

// DON'T FORGET TO ADD TO THE CHEAT PANEL
const NORMAL_EMOTE_LIST = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5, EMOTE_PP6, EMOTE_PP7, EMOTE_PP8, EMOTE_PP9, 
		    EMOTE_PP10, EMOTE_PP11, EMOTE_PP12, EMOTE_PP13, EMOTE_PP14, EMOTE_PP15, EMOTE_PP16, EMOTE_PP17, 
		    EMOTE_PP18, EMOTE_PP19, EMOTE_PP20, EMOTE_PP21, EMOTE_PP22, EMOTE_PP23, EMOTE_PP24, EMOTE_PP25, 
		    EMOTE_PP26, EMOTE_PP27, EMOTE_PP28, EMOTE_PP29, EMOTE_PP30, EMOTE_PP31, EMOTE_PP32, EMOTE_PP33, 
		    EMOTE_PP34, EMOTE_PP35, EMOTE_PP36, EMOTE_PP37, EMOTE_PP38, EMOTE_PP39, EMOTE_PP40, EMOTE_PP41, 
		    EMOTE_PP42, EMOTE_PP43, EMOTE_PP44, EMOTE_PP45, EMOTE_PP46, EMOTE_PP47, EMOTE_PP48, EMOTE_PP49, 
		    EMOTE_PP50];
const GOD_EMOTE_LIST = [EMOTE_PP51, EMOTE_PP52];
const SPECIAL_EMOTE_LIST = [EMOTE_PP53, EMOTE_PP54, EMOTE_PP55, EMOTE_PP56, EMOTE_PP57, EMOTE_PP58, EMOTE_PP59, EMOTE_PP60,
			   EMOTE_PP61, EMOTE_PP62];
const STAND_EMOTE_LIST = [EMOTE_PP63, EMOTE_PP64, EMOTE_PP65, EMOTE_PP66, EMOTE_PP67, EMOTE_PP68, EMOTE_PP69, EMOTE_PP70,
			  EMOTE_PP71, EMOTE_PP72, EMOTE_PP73, EMOTE_PP74, EMOTE_PP75, EMOTE_PP76, EMOTE_PP77, EMOTE_PP78];
const RARE_EMOTE_LIST = [EMOTE_PP79, EMOTE_PP80, EMOTE_PP81];
const GOD_LIST = [GOD_PP1, GOD_PP2, GOD_PP3, GOD_PP4, GOD_PP5, GOD_PP6, GOD_PP7, GOD_PP8, GOD_PP9, GOD_PP10, GOD_PP11,
		 GOD_PP12, GOD_PP13, GOD_PP14, GOD_PP15, GOD_PP16, GOD_PP17, GOD_PP18, GOD_PP19, GOD_PP20, GOD_PP21,
		 GOD_PP22, GOD_PP23, GOD_PP24];
const EMOTE_LIST = NORMAL_EMOTE_LIST.concat(GOD_EMOTE_LIST).concat(SPECIAL_EMOTE_LIST).concat(STAND_EMOTE_LIST).concat(RARE_EMOTE_LIST).concat(GOD_LIST);

const STAND_PP1 = "Iron Maiden";
const STAND_PP2 = "The Boreal Flame";
const STAND_PP3 = "Shadow Gallery";
const STAND_PP4 = "Above the Light";
const STAND_PP5 = "The Perfect Machine";
const STAND_PP6 = "The Sham Mirrors";
const STAND_PP7 = "Parallel Minds";
const STAND_PP8 = "Black Clouds & Silver Linings"; const STAND_PP8_1 = "Black Clouds"; const STAND_PP8_2 = "Silver Linings";
const STAND_PP9 = "Cybion";
const STAND_PP10 = "Illud Divinum Insanus";
const STAND_PP11 = "Refuge Denied";
const STAND_PP12 = "Space Metal";
const STAND_PP13 = "The Scythe of Cosmic Chaos";
const STAND_PP14 = "Concepts of Maths";
const STAND_PP15 = "The House of Atreus";
const STAND_PP16 = "Virus";

var STAND_SUMMONS = {};
// THE LISTS MUST BE REVERSED
STAND_SUMMONS[STAND_PP1] = [EMOTE_PP11, EMOTE_PP22, EMOTE_PP23]; // LaughSoul, MeatBro, Steel
STAND_SUMMONS[STAND_PP2] = [EMOTE_PP36, EMOTE_PP21, EMOTE_PP29]; // Barrel, Acid, Explosion
STAND_SUMMONS[STAND_PP3] = [EMOTE_PP47, EMOTE_PP16, EMOTE_PP8]; // Trap, Satan, RootOfNuisance
STAND_SUMMONS[STAND_PP4] = [EMOTE_PP26, EMOTE_PP16, EMOTE_PP49]; // LivingGod, Satan, BigSatan
STAND_SUMMONS[STAND_PP5] = [EMOTE_PP49, EMOTE_PP11]; // Steel, LivingGod
STAND_SUMMONS[STAND_PP6] = [EMOTE_PP11, EMOTE_PP30, EMOTE_PP16]; // Satan, Alert, Steel
STAND_SUMMONS[STAND_PP7] = [EMOTE_PP50, EMOTE_PP50]; // Perhaps, Perhaps
STAND_SUMMONS[STAND_PP8] = [EMOTE_PP45, EMOTE_PP20, EMOTE_PP8]; // Trap, MookGrenade, Boomerang
STAND_SUMMONS[STAND_PP9] = [EMOTE_PP49, EMOTE_PP50, EMOTE_PP11]; // Steel, Perhaps, LivingGod
STAND_SUMMONS[STAND_PP10] = [EMOTE_PP46, EMOTE_PP49, EMOTE_PP4]; // Flex, LivingGod, YES
STAND_SUMMONS[STAND_PP11] = [EMOTE_PP27, EMOTE_PP5, EMOTE_PP23]; // LaughSoul, HighFiveBro, Bullet
STAND_SUMMONS[STAND_PP12] = [EMOTE_PP11, EMOTE_PP34]; // Facehugger, Steel
STAND_SUMMONS[STAND_PP13] = [EMOTE_PP16, EMOTE_PP46, EMOTE_PP14]; // SawBlade, YES, Satan
STAND_SUMMONS[STAND_PP14] = [EMOTE_PP50, EMOTE_PP41, EMOTE_PP18]; // RedPill, CheersBro, Perhaps
STAND_SUMMONS[STAND_PP15] = [EMOTE_PP30, EMOTE_PP51]; // God Regular Move, Alert
STAND_SUMMONS[STAND_PP16] = [EMOTE_PP46, EMOTE_PP18, EMOTE_PP22]; // MeatBro, RedPill, YES

const REQUIEM_PP1 = "Etrange";
const REQUIEM_PP2 = "Iamthemorning";
const REQUIEM_PP3 = "Majestic";
const REQUIEM_PP4 = "DayDream XI";
const REQUIEM_PP5 = "Flying Colors";
const REQUIEM_PP6 = "Witherfall";
const REQUIEM_PP7 = "All Traps on Earth";
const REQUIEM_PP8 = "Hawkwind";
const REQUIEM_PP9 = "Porcupine Tree";
const REQUIEM_LIST = [REQUIEM_PP1, REQUIEM_PP2, REQUIEM_PP3, REQUIEM_PP4, REQUIEM_PP5, REQUIEM_PP6, REQUIEM_PP7,
		     REQUIEM_PP8, REQUIEM_PP9];

// BOSSES
const BOSS_PP1 = "Cthulhu";
const BOSS_PP2 = "Free Lives HQ";
const BOSS_PP3 = "The Moon Lord";
const BOSS_PP4 = "The PP Robot Police";
const BOSS_PP5 = "The PP Harvester";
const BOSS_PP6 = "The PP-Net Hive-Mind";
const BOSS_PP7 = "PP Terminator";
const BOSS_PP8 = "Satan";
const BOSS_PP9 = "Satan True Form";
const BOSS_PP10 = "Espinoza Raid Boss";

// MUSICS
const MUSIC_PP1 = "none";
const MUSIC_PP2 = "ascend.mp3";
const MUSIC_PP3 = "psychodios.mp3";
const MUSIC_PP4 = "huge_gay_night.mp3";
const MUSIC_PP5 = "lovecraftian_strain_991.mp3";
const MUSIC_PP6 = "gaseous_punk.mp3";
const MUSIC_PP7 = "anomaly_b.mp3";
const MUSIC_PP8 = "brennijov_intro.mp3";
const MUSIC_PP9 = "brennijov.mp3";
const MUSIC_PP10 = "brennijov_outro.mp3";

// IMAGES
const IMAGE_PP1 = "https://cdn.discordapp.com/attachments/616225633286094852/623080353807990784/image0.gif";
const IMAGE_PP2 = "https://cdn.discordapp.com/attachments/616228498075549756/668824699551219722/bigboom.gif";
const IMAGE_PP3 = "https://cdn.discordapp.com/attachments/667337519477817363/668846565284118598/ezgif.com-gif-maker.gif";
const IMAGE_PP4 = "https://cdn.discordapp.com/attachments/523411977725411373/669513268464975892/image0.jpg";

// IDs
const ID_BRENNFEU = "234439428372824075";
const ID_COUNTRYMUSICBRENN = "536293359342583820";
const ADMIN_LIST = [ID_BRENNFEU, ID_COUNTRYMUSICBRENN];

// Variables
var DUEL_LIST = [];

// CLASSES
class Fighter {
	constructor(_idUser, _idDuel, _stand = null) {
		if (_idUser == undefined) { // default constructor
			return;
		}
		
		// set variables
		this.idUser = _idUser;
		this.guildUser = getDuel(_idDuel).GUILD.members.get(_idUser);
		this.user = this.guildUser.user;
		
		this.duel = getDuel(_idDuel);
		
		this.attack = "";
		this.oldAttack = EMOTE_PP30;
		this.attackedThisTurn = true;
		this.damageTaken = 0;
		this.pushedDamages = 0;
		
		// set roles
		this.isBigPP = false;
		this.isFastPP = false;
		this.isDrunkPP = false;
		this.isHockeyPuckPP = false;
		this.isAlienPP = false;
		
		this.godList = [];
		this.standPower = _stand;
		this.requiemPower = null;
		
		this.currentStand = null;
		this.usedMoves = [];
		
		// Priest Charges
		this.regularCharges = 0;
		this.specialCharges = 0;

		// Battle variables
		this.resetBattleVariables();
		this.dexMalus = 0;
		this.turkeyCountdown = -1;
		this.isPossessed = 0;
		this.isCircumcised = false;
		this.isOverCircumcised = false;
		this.acidArmor = 0;
		this.missedMoves = 0;
		this.bonusDamage = 0;
		this.isTerrorist = false;
		this.hasBurst = 0;
		this.chimera = false;
		this.tearDrinker = 0;
		this.summonTankCountdown = 0;
		this.turnSkip = 0;
		this.eldritchFriend = false;
		this.isCowBoy = false;
		this.trueBarbarian = false;
		this.pigHeal = 0;
		this.isLucky = 0;
		this.doomReverse = 0;
		this.hasExamined = 0;
		this.extraLife = 0;
		this.legAimer = false;
		this.livingGod = false;
		this.liberatedPP = false;
		this.mikasaBuff = 0;
		this.dualWield = false;
		this.bossKiller = 0;
		this.fullOfAmmo = false;
		this.ragingSpirit = 0;
		this.xenoMask = false;
		this.satanMask = false;
		this.helldogMask = false;
		this.ironProtection = 0;
		this.quickeningCharges = 0;
		this.kungFu = false;
		this.borealSummon = 0;
		this.tentacles = 0;
		this.randomizedStand = false;
		this.requiemCooldown = 0;
		this.extraLifeDuplication = null;
		this.impendingDoom = 0;
		this.redPillAddiction = 0;
		this.satanicMoveMultiplier = false;

		// Check Bad Values
		if (this.STR <= 0) {
			this.STRValue += (0 - this.STR) + 1
		}
		
		if (_stand != null) {
			// Create a stand
			this.user = {};
			this.user["username"] = _stand;
			this.user["id"] = this.guildUser.user.id;
			
			// Natural values
			this.STRValue = 150;
			this.DEXValue = 40;
			
			if (this.standPower == STAND_PP1) { // Iron Maiden
				this.ironProtection = 4;
			}
			if (this.standPower == STAND_PP2) { // Boreal Flame
				this.borealSummon = 11;
			}
			if (this.standPower == STAND_PP5) { // Perfect Machine
				this.randomizedStand = true;
			}
			if (this.standPower == STAND_PP8) { // Black Clouds & Silver Linings
				this.extraLife = 1;
				this.standPower = STAND_PP8_1;
				if (getRandomPercent() <= 50) {
					this.standPower = STAND_PP8_2;
				}
				this.user["username"] = this.standPower;
			}
			if (this.standPower == STAND_PP8_1 || this.standPower == STAND_PP8_2) { // Black Clouds / Silver Linings
				this.STRValue = 80;
			}
			if (this.standPower == STAND_PP12) { // Space Metal
				this.quickeningCharges = 5;
			}
		}
		else {
			// Create a fighter
			if (this.guildUser.roles.find(r => r.name == BIG_PP_ROLE)) {
				this.isBigPP = true;
			}
			if (this.guildUser.roles.find(r => r.name == FAST_PP_ROLE)) {
				this.isFastPP = true;
			}
			if (this.guildUser.roles.find(r => r.name == DRUNK_PP_ROLE)) {
				this.isDrunkPP = true;
			}
			if (this.guildUser.roles.find(r => r.name == HOCKEY_PUCK_PP_ROLE)) {
				this.isHockeyPuckPP = true;
			}
			if (this.guildUser.roles.find(r => r.name == ALIEN_PP_ROLE)) {
				this.isAlienPP = true;
			}

			for (var i in PRIEST_ROLES) {
				if (this.guildUser.roles.find(r => r.name == PRIEST_ROLES[i])) {
					this.godList.push(PRIEST_ROLES[i])
				}
			}
			while (this.godList.length < 3) {
				var r = PRIEST_ROLES[Math.floor(Math.random()*PRIEST_ROLES.length)];
				if (this.godList.indexOf(r) <= -1) {
					this.godList.push(r);
				}
			}
			for (var i in ELDRITCH_PRIEST_ROLES) {
				if (this.guildUser.roles.find(r => r.name == ELDRITCH_PRIEST_ROLES[i])) {
					this.godList.push(ELDRITCH_PRIEST_ROLES[i])
				}
			}
			
			if (this.godList.indexOf(GOD_PP21_PRIEST) > -1) { // D.I.C.K. Special Effect
				var currentSize = this.godList.length;
				while (this.godList.length < currentSize+1) {
					r = PRIEST_ROLES[Math.floor(Math.random()*PRIEST_ROLES.length)];
					if (this.godList.indexOf(r) < 0) {
						this.godList.push(r);
					}
				}
			}
			if (this.godList.indexOf(GOD_PP24_PRIEST) > -1) { // Time Cube Special Effect
				this.redPillAddiction = 5;
			}
			
			// Natural values
			this.STRValue = 70;
			this.DEXValue = 20;
			
			
			if (this.godList.indexOf(GOD_PP25_PRIEST) > -1) { // Cthulhu Special Effect
				this.STRValue = 100;
			}
		}
	}
	
	getName() {
		var name = this.user.username;
		if (this.duel.SEXY_TEXT > 0) {
			if (getRandomPercent() <= 33) {
				name = "Sexy " + name;
			}
			else if (getRandomPercent() <= 66) {
				name = "Hot " + name;
			}
			else {
				name = "Retarded " + name;
			}
		}
		if (this.duel.RUSSIAN_TEXT > 0) {
			name += "ijov";
		}
		return name;
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
			str += 50;
		}
		if (this.mikasaBuff > 0) {
			str += 30;
		}
		if (this.satanMask) {
			str += 50;
		}
		if (this.standPower == STAND_PP8_1) {
			str += 50;
		}
		if (this.BOREAL_WORLD && this.standPower == STAND_PP2) {
			str += 200;
		}
		if (this.requiemPower != null && this.duel.STAND_BATTLE) {
			str += 200;
		}
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			str += 50;
		}
		if (this.duel.PP_ARMAGEDDON) {
			str += 1000000;
		}

		if (this.duel.EVENT_BOSS && str <= 0) {
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
		
		dex -= this.dexMalus;
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
		if (this.liberatedPP) {
			dex += 200;
		}
		if (this.mikasaBuff > 0) {
			dex += 30;
		}
		if (this.duel.getOppOf(this).helldogMask) {
			dex -= 20;
		}
		if (this.xenoMask) {
			dex += 10;
		}
		if (this.kungFu) {
			dex += 10;
		}
		if (this.quickeningCharges > 0) {
			dex += this.quickeningCharges;
		}
		if (this.standPower == STAND_PP8_2) {
			dex += 10;
		}
		if (this.BOREAL_WORLD && this.standPower == STAND_PP2) {
			dex += 50;
		}
		if (this.requiemPower != null && this.duel.STAND_BATTLE) {
			dex += 30;
		}
		if (this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
			dex += 10;
		}
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			dex += 50;
		}
		if (this.duel.PP_ARMAGEDDON) {
			dex += 200;
		}
		
		if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1 && dex <= 0) {
			return 0;
		}
		return dex;
	}

	// fighter.toString
	toString() {
		if (this.duel.MOVE_COUNT >= 10000) {
			return "**" + this.getName() + "**\n - Wiped out";
		}
		
		if (this.STR <= 0 && this.duel.EVENT_BOSS) {
			return "**" + this.getName() + "**\n -> **Dead** :(";
		}

		var txt = "**" + this.getName();
		if (this.duel.STAND_BATTLE) {
			if (this.requiemPower != null) {
				txt += " Requiem";
			}
			txt += "\n(" + this.guildUser.user.username + ")";
		}
		
		txt += "\nSTR :** " + this.STR;
		if (this.STR == 69) {
			txt += " (lmao)";
		}
		txt += "  //  **DEX :** " + this.DEX;
		if (this.DEX == 69) {
			txt += " (lmao)";
		}
		if (this.dexMalus > 0) {
			txt += "\n - DEX Malus : **" + this.dexMalus + "**";
		}

		if (!this.duel.STAND_BATTLE) {
			if (this.regularCharges > 0 || this.specialCharges > 0) {
				txt += "\n\n**Faith :**"
				var allGods = true;
				for (var i in PRIEST_ROLES) {
					if (this.godList.indexOf(PRIEST_ROLES[i]) <= -1) {
						allGods = false;
					}
				}
				if (allGods) {
					txt += "\n - *All Gods*";
					for (var i in this.godList) {
						if (PRIEST_ROLES.indexOf(this.godList[i]) < 0) {
							txt += "\n - " + this.godList[i];
						}
					}
				}
				else {
					for (var i in this.godList) {
						txt += "\n - " + this.godList[i];
					}
				}
				if (this.requiemPower != null) {
					txt += "\n - **Requiem**";
				}
			}
			if (this.regularCharges > 0) {
				txt += "\nRegular Charges : " + this.regularCharges;
			}
			if (this.specialCharges > 0) {
				txt += "\nSpecial Charges : " + this.specialCharges;
			}
		
			txt += "\n\n**Fighting Styles :**\n";
			if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
				txt += " - *Ultimate PP*\n";
			}
			else {
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
			}
		}
		else {
			txt += "\n";
		}
		
		// Status
		txt += "\n**Status :**\n"
		if (this.randomizedStand) {
			txt += " - **Perfect Stånd Power**\n";
		}
		if (this.hasBoomerang > 0) {
			txt += " - With a Boomerang (for " + this.hasBoomerang + " turns)\n";
		}
		if (this.acidArmor > 0) {
			txt += " - Armored in acid (for " + this.acidArmor + " turns)\n";
		}
		if (this.doomReverse > 0) {
			txt += " - DOOM-REVERSE(tm) (for " + this.doomReverse + " turns)\n";
		}
		if (this.ironProtection > 0) {
			txt += " - Iron Protection (for " + this.ironProtection + " turns)\n";
		}
		if (this.isLucky > 0) {
			txt += " - Lucky (for " + this.isLucky + " turns)\n";
		}
		if (this.mikasaBuff > 0) {
			txt += " - Blessed by Mikasa (for " + this.mikasaBuff + " turns)\n";
		}
		if (this.bossKiller > 0) {
			txt += " - Boss Killer Blessing (for " + this.bossKiller + " turns)\n";
		}
		if (this.turkeyCountdown > 0) {
			txt += " - Turkey Countdown : " + this.turkeyCountdown + " turns\n";
		}
		if (this.borealSummon > 0) {
			txt += " - Boreal Fog Countdown : " + this.borealSummon + " turns\n";
		}
		if (this.requiemCooldown > 0) {
			txt += " - Requiem Cooldown : " + this.requiemCooldown + " turns\n";
		}
		if (this.tentacles > 0) {
			txt += " - Tentacles : " + this.tentacles + "\n";
		}
		if (this.quickeningCharges > 0) {
			txt += " - Quickening Charges : " + this.quickeningCharges + "\n";
		}
		if (this.madnessStacks > 0) {
			txt += " - Madness Stacks : " + this.madnessStacks + "\n";
		}
		if (this.redPillAddiction > 0) {
			txt += " - RedPill Addiction : " + this.redPillAddiction + "\n";
		}
		if (this.ragingSpirit > 0) {
			txt += " - Lost Soul Streak : " + this.ragingSpirit + "\n";
		}
		if (this.tearDrinker > 0) {
			txt += " - Tear Drinker : " + this.tearDrinker + "\n";
		}
		if (this.pigHeal > 0) {
			txt += " - Hog Squeezer : " + this.pigHeal + "\n";
		}
		if (this.bonusDamage > 0) {
			txt += " - Build up damages : " + this.bonusDamage + "\n";
		}
		if (this.bleedDamage > 0) {
			txt += " - Haemorrhage : " + this.bleedDamage;
			if (this.isSalty) {
				txt += " (**Salty Wounds**)";
			}
			txt += "\n";
		}
		if (this.meltingDamage > 0) {
			txt += " - Acid : " + this.meltingDamage + "\n";
		}
		if (this.xenoMask) {
			txt += " - Mask : Xeno\n";
		}
		if (this.satanMask) {
			txt += " - Mask : Satan\n";
		}
		if (this.helldogMask) {
			txt += " - Mask : Intimidation\n";
		}
		if (this.satanicMoveMultiplier) {
			txt += " - Satanic Move Multiplier\n"
		}
		if (this.isOverCircumcised) {
			txt += " - Overcircumcised\n";
		}
		else if (this.isCircumcised) {
			txt += " - Circumcised\n";
		}
		if (this.isTerrorist) {
			txt += " - Planning a Terrorist Move\n";
		}
		if (this.eldritchFriend) {
			txt += " - Eldritch Friendly\n";
		}
		if (this.isCowBoy) {
			txt += " - Cowboy\n";
		}
		if (this.legAimer) {
			txt += " - Leg Aimer\n";
		}
		if (this.dualWield) {
			txt += " - Dual Wielding\n";
		}
		if (this.badLuck) {
			txt += " - Unlucky\n";
		}
		if (this.fullOfAmmo) {
			txt += " - Full of Ammos\n";
		}
		if (this.kungFu) {
			txt += " - Trained Fighter\n";
		}
		if (this.chimera) {
			txt += " - Furry PP\n";
		}
		if (this.liberatedPP) {
			txt += " - Liberated PP\n";
		}
		if (this.hasBoner) {
			txt += " - Big Boner Mmmmmmh...\n";
		}
		if (this.trueBarbarian) {
			txt += " - Great Barbarian from the North Seeking New Lands for his Kingdom\n";
		}
		if (this.isPossessed > 0) {
			txt += " - **Possessed by " + this.duel.getOppOf(this).getName() + "**\n";
		}
		if (this.turnSkip > 0) {
			txt += " - **To the Ranch**\n";
		}
		if (this.grabbedPP > 0) {
			txt += " - **Grabbed PP**\n";
		}
		if (this.summonTankCountdown > 0) {
			txt += " - **Summoning the Monster (" + (4-this.summonTankCountdown) + "/3)**\n";
		}
		if (this.standPower != null && !this.duel.STAND_BATTLE && !this.randomizedStand) {
			txt += " - **Stånd Power : " + this.standPower + "**\n";
		}
		if (this.extraLife > 0) {
			txt += " - **Extra lives : " + this.extraLife;
			if (this.extraLifeDuplication != null) {
				txt += " (Temporal Duplication)";
			}
			txt += "**\n";
		}
		if (this.impendingDoom > 0) {
			txt += " - **Impending Doom : " + this.impendingDoom + " turns**\n";
		}
		
		if (this.standPower == null) {
			txt += "\n**Synergies :**\n"
			if (this.godList.length >= PRIEST_ROLES.length) {
				txt += " - *All of them*";
			}
			else {
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP11_PRIEST) > -1 && this.godList.indexOf(GOD_PP19_PRIEST) > -1) {
					txt += " - Holy Brenn Trinity\n";
				}
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
					txt += " - Therapy Time\n";
				}
				if (this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
					txt += " - Too Smart and Too Powerful\n";
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1 && this.godList.indexOf(GOD_PP13_PRIEST) > -1) {
					txt += " - Super Predator\n";
				}
				if (this.godList.indexOf(GOD_PP10_PRIEST) > -1 && this.godList.indexOf(GOD_PP8_PRIEST) > -1) {
					txt += " - Yaoi fan\n";
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
					txt += " - Salt Master\n";
				}
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
					txt += " - Debilus Team Member\n";
				}
				if (this.godList.indexOf(GOD_PP19_PRIEST) > -1 && this.godList.indexOf(GOD_PP20_PRIEST) > -1) {
					txt += " - Waifu Body Pillow\n";
				}
			}
		}

		return txt;
	}

	playMove(_newMove = this.attack) {
		this.duel.INFINITE_DAMAGE = 0;
		var attack = _newMove;
		var numberAttacks = 1;
		
		// Cybion
		if (this.standPower == STAND_PP9 && getRandomPercent() <= 25) {
			this.duel.addMessage(this.getName() + " can perform his move twice !");
			numberAttacks += numberAttacks;
		}
		if (this.duel.getOppOf(this).standPower == STAND_PP9 && getRandomPercent() <= 25) {
			this.duel.addMessage(this.duel.getOppOf(this).getName() + " interrupts the move !");
			numberAttacks = 0;
		}
		
		// Boomerang
		if (this.hasBoomerang >= 1) {
			numberAttacks += numberAttacks;
		}
		// Mikasa Special
		if (this.dualWield) {
			numberAttacks += numberAttacks;
		}
		// Ammo Crate
		if (this.fullOfAmmo) {
			numberAttacks = numberAttacks*3;
			this.fullOfAmmo = false;
		}
		// Satan Special Move
		if (this.satanicMoveMultiplier) {
			numberAttacks = numberAttacks*10;
			this.satanicMoveMultiplier = false;
		}

		if (this.duel.EVENT_BOSS && this.STR <= 0) {
			this.attack = EMOTE_DEAD;
		}

		for (var sdsds = 0; sdsds < numberAttacks; sdsds++) {
			this.duel.MOVE_COUNT_TURN += 1;
			this.duel.MOVE_COUNT += 1;
			if (this.duel.MOVE_COUNT_TURN >= 500) {
				if (this.duel.MOVE_COUNT_TURN == 500) {
					this.duel.addMessage("**Move cap achieved !**");
					this.duel.sendMessages(1);
				}
				return;
			}
			
			if (_newMove == this.attack && sdsds == 0) {
				this.attackedThisTurn = true;
				if (attack != EMOTE_PP69) {
					this.ragingSpirit = 0;
				}
			}
			
			if (attack == EMOTE_PP1) {
				// Punching PP
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP !");
				this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
			}
			else if (attack == EMOTE_PP2) {
				// Punching PP Really Hard
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP really hard !");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP3) {
				// Hologram
				this.duel.addMessage(this.getName() + " touches " + this.getOppName() + "'s PP vital point !");
				this.duel.getOppOf(this).damage(500);
			}
			else if (attack == EMOTE_PP4) {
				// Flex
				this.duel.addMessage(this.getName() + " flexes !");
				this.heal(Math.floor(Math.random() * 170 + 30));
			}
			else if (attack == EMOTE_PP5) {
				// High Five
				this.duel.addMessage(this.getName() + " is feeling lonely... :(");
			}
			else if (attack == EMOTE_PP6) {
				// Kick
				this.duel.addMessage(this.getName() + " kicks " + this.getOppName() + "'s PP !");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 10)*3);
			}
			else if (attack == EMOTE_PP7) {
				// Turkey
				this.duel.addMessage(this.getName() + " and " + this.duel.getOppOf(this).getName() + " start a feast !");
				if (this.duel.UWU_TEXT) {
					this.duel.SEXY_TEXT = 11;
				}
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.heal(100);
					_fighter.turkeyCountdown = 6;
					if (_fighter.isOverCircumcised) {
						_fighter.duel.addMessage(_fighter.getName() + "'s circumcision gets a bit healed !");
						_fighter.isOverCircumcised = false;
						_fighter.isCircumcised = true;
					}
					else if (_fighter.isCircumcised) {
						_fighter.duel.addMessage(_fighter.getName() + " is no longer circumcised !");
						_fighter.isCircumcised = false;
					}
				});
			}
			else if (attack == EMOTE_PP8) {
				// Trap Sign
				this.duel.addMessage(this.getName() + " is ready to burst !");
				this.duel.addMessage("...");
				this.duel.addMessage("Well...");
			}
			else if (attack == EMOTE_PP9) {
				// Time Kick
				this.duel.addMessage(this.getName() + " wants a hockey puck PP...");
				if (this.isHockeyPuckPP) {
					this.duel.addMessage("...but he already had one !");
				}
				else {
					this.isHockeyPuckPP = true;
					this.duel.addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP10) {
				// Tank
				if (this.summonTankCountdown == 1) {
					this.duel.addMessage(this.getName() + " summons **The Monster** !");
				}
				else {
					this.duel.addMessage(this.getName() + " brings a tank !");
				}
				this.duel.addMessage("FIRE !");
				this.duel.getOppOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP11) {
				// Steel
				if (!this.STEEL_PROTECTION) {
					this.STEEL_PROTECTION = true;
					this.duel.addMessage(this.getName() + " sets up a protection !");
				}
				else {
					this.duel.addMessage(this.getName() + " sets up a protection for nothing...");
				}
			}
			else if (attack == EMOTE_PP12) {
				// Overcircumscise
				this.duel.addMessage(this.getName() + " over-circumcises himself !");
				if (this.isOverCircumcised) {
					this.duel.addMessage("Wait he already was !");
				}
				else {
					this.isCircumcised = true;
					this.isOverCircumcised = true;
					this.STRValue = Math.floor(this.STR/2);
				}
			}
			else if (attack == EMOTE_PP13) {
				// Scout
				this.duel.addMessage(this.getName() + " examines the qualities of " + this.duel.getOppOf(this).getName() + "'s PP !");
				this.duel.addMessage("And he learns a lot !");
				this.hasExamined = 2;
			}
			else if (attack == EMOTE_PP14) {
				// SawBlade
				this.duel.addMessage(this.getName() + " cuts " + this.duel.getOppOf(this).getName() + "'s PP !");
				this.duel.getOppOf(this).bleedDamage += 5;
			}
			else if (attack == EMOTE_PP15) {
				// Save
				this.duel.addMessage(this.getName() + " reverses the damages and heals !");
				if (this.duel.REVERSE_DAMAGE < 0) {
					this.duel.REVERSE_DAMAGE = 1;
				}
				else {
					this.duel.REVERSE_DAMAGE = -1;
				}
			}
			else if (attack == EMOTE_PP16) {
				// Satan Boss
				if (this.duel.BOSS_FIGHT && (this.CURRENT_BOSS == BOSS_PP8 || this.CURRENT_BOSS == BOSS_PP9)) {
					this.duel.addMessage("Nothing happens...");
				}
				// Satan God
				else if (this.duel.getOppOf(this).godList.indexOf(GOD_PP22_PRIEST) > -1) {
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " resists the possession !");
				}
				else {
					this.duel.addMessage(this.getName() + " possesses " + this.duel.getOppOf(this).getName() + "'s PP !");
					this.duel.getOppOf(this).isPossessed = 2;
				}
			}
			else if (attack == EMOTE_PP17) {
				// RiotShield
				this.duel.addMessage(this.getName() + " gets a shield !");
				this.isProtected = true;
			}
			else if (attack == EMOTE_PP18) {
				// Red Pill
				this.duel.addMessage(this.getName() + " gets a pill !");
				this.redPillAddiction += 1;
				this.STRValue += 5*this.redPillAddiction;
				this.DEXValue += 3*this.redPillAddiction;
			}
			else if (attack == EMOTE_PP19) {
				// Pig
				this.duel.addMessage(this.getName() + " squeezes hog yeah yeah !");
				this.pigHeal += 4;
				if (this.hasBoner) {
					this.duel.addMessage(this.getName() + " loses his boner !");
				}
				this.hasBoner = false;
			}
			else if (attack == EMOTE_PP20) {
				// DoomReverse (MookGrenade)
				this.duel.addMessage(this.getName() + " sets up a DOOM-REVERSE(tm) !");
				this.doomReverse = 4;
				if (this.STR <= 0) {
					this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm) !");
					this.STRValue += (0 - this.STR) + 10;
					this.doomReverse = 0;
				}
			}
			else if (attack == EMOTE_PP21) {
				// Acid
				this.duel.addMessage(this.getName() + " gets an acid armor !");
				this.acidArmor = 5;
			}
			else if (attack == EMOTE_PP22) {
				// Circumscise
				this.duel.addMessage(this.getName() + " circumcises himself !");
				if (this.isCircumcised) {
					this.duel.addMessage("Wait he already was !");
				}
				else {
					this.isCircumcised = true;
					this.resetBattleVariables();
				}
			}
			else if (attack == EMOTE_PP23) {
				// LaughSoul
				this.duel.addMessage(this.getName() + " laughs at " + this.duel.getOppOf(this).getName() + " !");
				this.duel.addMessage("He gets " + this.duel.getOppOf(this).missedMoves*50 + " STR !");
				this.STRValue += this.duel.getOppOf(this).missedMoves*50;
			}
			else if (attack == EMOTE_PP24) {
				// KnockBack
				this.duel.addMessage(this.getName() + " swaps the natural STR values !");
				this.STRValue += this.duel.getOppOf(this).STRValue;
				this.duel.getOppOf(this).STRValue = this.STRValue - this.duel.getOppOf(this).STRValue;
				this.STRValue -= this.duel.getOppOf(this).STRValue;
			}
			else if (attack == EMOTE_PP25) {
				// Bombardment
				this.duel.addMessage(this.getName() + " calls for a bombardment !!!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.damage(1000)
				});
			}
			else if (attack == EMOTE_PP26) {
				// Big Satan
				this.duel.addMessage(this.getName() + " summons Satan chaotic powers !!!");
				this.duel.DISABLE_ABANDON = true;
				if (this.duel.BOSS_FIGHT && (this.CURRENT_BOSS == BOSS_PP8 || this.CURRENT_BOSS == BOSS_PP9)) {
					// Satan Boss
					this.duel.addMessage("But nothing happens...");
				}
				else if (this.godList.indexOf(GOD_PP22_PRIEST) > -1) {
					// Satan God
					this.duel.sendMessages(1);
					for (var i = 0; i < 10; i++) {
						this.duel.addMessage("-----------------");
						this.playMove(this.duel.getRandomEmote());
					}
				}
				else if (this.duel.getOppOf(this).godList.indexOf(GOD_PP22_PRIEST) > -1) {
					// Satan God
					this.duel.sendMessages(1);
					for (var i = 0; i < 10; i++) {
						this.duel.addMessage("-----------------");
						this.duel.getOppOf(this).playMove(this.duel.getRandomEmote());
					}
				}
				else {
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.duel.addMessage("-----------------");
						_fighter.playMove(_fighter.duel.getRandomEmote(false));
						_fighter.duel.addMessage("-----------------");
						_fighter.playMove(_fighter.duel.getRandomEmote(false));
						_fighter.duel.addMessage("-----------------");
						_fighter.playMove(_fighter.duel.getRandomEmote(false));
						_fighter.duel.addMessage("-----------------");
						_fighter.playMove(_fighter.duel.getRandomEmote());
						_fighter.duel.addMessage("-----------------");
						_fighter.playMove(_fighter.duel.getRandomEmote());
					});
					this.duel.sendMessages(1);
				}
			}
			else if (attack == EMOTE_PP27) {
				// BigGuyBullet
				this.duel.addMessage(this.getName() + " uses his PP as a gun !");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 5));
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.DEXValue -= 20;
				});

			}
			else if (attack == EMOTE_PP28) {
				// BigGuy
				this.duel.addMessage(this.getName() + " intimidates " + this.duel.getOppOf(this).getName() + " !");
				this.duel.getOppOf(this).hasBurst = 2;

			}
			else if (attack == EMOTE_PP29) {
				// Barrel
				if (!this.BARREL_DAMAGE) {
					this.BARREL_DAMAGE = true;
					this.duel.addMessage(this.getName() + " sets up a barrel !");
				}
				else {
					this.duel.addMessage(this.getName() + " sets up a barrel for nothing...");
				}
			}
			else if (attack == EMOTE_PP30) {
				// ExclamationPoint
				this.duel.addMessage(this.getName() + " tries to go back too far in time !");
				this.duel.addMessage("This create a space-time distortion !");
				this.playMove(this.duel.getRandomEmote());
			}
			else if (attack == EMOTE_PP31) {
				// Save Me Sign
				this.duel.addMessage(this.getName() + " wants to be saved !");
			}
			else if (attack == EMOTE_PP32) {
				// High Five Emote
				this.duel.STOPPED_MOVE_LIST = this.duel.LIST_AVAILABLE_ATTACKS;
				this.duel.addMessage(this.getName() + " high fives the arbitrator !");
				if (this.duel.BLIND_COUNTDOWN > 0) {
					this.duel.addMessage("He is no longer blind !");
					this.duel.addMessage(this.getName() + " gets 20 DEX as a reward !");
					this.duel.BLIND_COUNTDOWN = 0;
					this.DEXValue += 20;
				}
				else {
					this.duel.addMessage("He appreciates it !");
				}
			}
			else if (attack == EMOTE_PP33) {
				// Headless - Big Kidney Stone
				this.duel.addMessage(this.getName() + " shoots a big kidney stone !");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.damage(50);
				});
			}
			else if (attack == EMOTE_PP34) {
				// Facehugger
				this.duel.addMessage(this.getName() + " impregnates " + this.getOppName() + " !");
				if (!this.duel.EVENT_BOSS) {
					this.duel.getOppOf(this).damage(Math.floor(this.duel.getOppOf(this).STR/2));
					if (!this.duel.getOppOf(this).isAlienPP) {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets an alien PP !");
					}
					this.duel.getOppOf(this).isAlienPP = true;
				}
				else {
					this.duel.getOppOf(this).damage(Math.floor(this.duel.BOSS_HEALTH/2));
				}
			}
			else if (attack == EMOTE_PP35) {
				// Facehugged
				this.duel.addMessage(this.getName() + " impregnates the arbitratory !");
				if (this.duel.BLIND_COUNTDOWN < 0) {
					this.duel.BLIND_COUNTDOWN = 0;
				}
				this.duel.BLIND_COUNTDOWN += 3;
				if (getRandomPercent() < 33) {
					this.duel.BLIND_COUNTDOWN = 9999999;
					this.duel.addMessage("It looks like permanent damage !");
				}
				if (this.duel.UWU_TEXT) {
					this.duel.SPOIL_TEXT = 1;
				}
			}
			else if (attack == EMOTE_PP36) {
				// Explosion
				this.duel.addMessage(this.getName() + " plays the terrorist move !");
				if (this.isTerrorist) {
					this.duel.getOppOf(this).damage(5000);
				}
				else {
					this.duel.addMessage("But no terrorist move was planned !");
				}
			}
			else if (attack == EMOTE_PP37) {
				// Disembowled - Kidney Stone
				this.duel.addMessage(this.getName() + " shoots a kidney stone !");
				this.duel.bothFightersAction(
				function(_fighter) {
					_fighter.damage(25);
				});
			}
			else if (attack == EMOTE_PP38) {
				// DeadBro
				this.duel.addMessage(this.getName() + " wants a fast PP...");
				if (this.isFastPP) {
					this.duel.addMessage("...but he already had one !");
				}
				else {
					this.isFastPP = true;
					this.duel.addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP39) {
				// Interrogation Point
				this.duel.addMessage(this.getName() + " summons a random move !");
				var emote = this.duel.getRandomEmote();
				if (emote == EMOTE_PP26 || emote == EMOTE_PP46) {
					this.duel.sendMessages(1);
				}
				this.playMove(emote);
			}
			else if (attack == EMOTE_PP40) {
				// ChestBurst
				this.duel.addMessage(this.getName() + " wants a big PP...");
				if (this.isBigPP) {
					this.duel.addMessage("...but he already had one !");
				}
				else {
					this.isBigPP = true;
					this.duel.addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP41) {
				// 007 Drunk
				this.duel.addMessage(this.getName() + " wants a drunk PP...");
				if (this.isDrunkPP) {
					this.duel.addMessage("...but he already had one !");
				}
				else {
					this.isDrunkPP = true;
					this.duel.addMessage("...and now he got it !");
				}
			}
			else if (attack == EMOTE_PP42) {
				// Bronan Slam
				this.duel.addMessage(this.getName() + " builds up for his next attack...");
				this.bonusDamage += 20;
			}
			else if (attack == EMOTE_PP43) {
				// BrocketeerDive
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP with his head !");
				this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
				this.duel.getOppOf(this).hasBurst = 2;
			}
			else if (attack == EMOTE_PP44) {
				// Kamikaze
				this.duel.addMessage(this.getName() + " plans a suicide move !");
				this.duel.ILLEGAL_BOMBING = true;
				this.isTerrorist = true;
			}
			else if (attack == EMOTE_PP45) {
				// Boomerang
				this.duel.addMessage(this.getName() + " gets a boomerang.");
				this.hasBoomerang = 4;
			}
			else if (attack == EMOTE_PP46) {
				// TruffleHistorian
				this.duel.DISABLE_ABANDON = true;
				this.duel.addMessage(this.getName() + " calls the Ancient Fongus !");
				if (this.duel.UWU_TEXT) {
					this.duel.YES_TEXT = 1;
				}
				var chaosNumber = getRandomPercent();
				var winner = this.duel.getRandomFighter();
				this.duel.bothFightersAction(function(_fighter) {
					if (_fighter.eldritchFriend && !_fighter.duel.getOppOf(_fighter).eldritchFriend) {
						chaosNumber = 100;
						winner = _fighter;
					}
				}, this.duel.getOppOf(this));
				this.duel.addMessage("He will use " + chaosNumber + "% of his power in " + winner.getName() + " !");
				this.duel.sendMessages(1);
				chaosNumber = Math.floor(chaosNumber/4);
				var i;
				for (i = 0; i < chaosNumber; i++) {
					this.duel.addMessage("-----------------");
					winner.playMove(this.duel.getRandomEmote());
				}
			}
			else if (attack == EMOTE_PP47) {
				// Pudding
				this.duel.addMessage(this.getName() + " abandons the battle !");
				this.STRValue = -999999999;
				if (getRandomPercent() < 10) {
					this.duel.addMessage("Bruh.");
				}
				return;
			}
			else if (attack == EMOTE_PP48) {
				// Brennfeu
				this.duel.addMessage(this.getName() + " messes everything !");
				this.duel.addMessage("As always !");
				if (this.duel.UWU_TEXT) {
					this.duel.RUSSIAN_TEXT = 6;
				}
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.STRValue += Math.floor((getRandomPercent() - 50)/2);
					_fighter.DEXValue += Math.floor((getRandomPercent() - 50)/2);
				});
			}
			else if (attack == EMOTE_PP49) {
				// Soup
				this.duel.addMessage(this.getName() + " ascends !");
				if (this.duel.UWU_TEXT) {
					this.duel.GOD_TEXT = 3;
				}
				this.duel.addMessage("Behold " + this.getName() + " the living God !");
				this.STRValue += 10000;
				this.DEXValue += 10000;
				this.livingGod = true;
			}
			else if (attack == EMOTE_PP50) {
				// Perhaps
				this.duel.addMessage(this.getName() + " thinks about life and the universe...");
				if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
					var randomEvent = getRandomPercent();
					// Events, chance at becoming god, making everything proc twice, both players getting 0 dex.
					if (randomEvent <= 25) {
						if (!this.duel.FORCE_EVENT) {
							this.duel.addMessage("Events will now occur every turn !");
						}
						else {
							this.duel.addMessage("Events will stop occurring every turn !");
						}
						this.duel.FORCE_EVENT = !this.duel.FORCE_EVENT;
					}
					else if (randomEvent <= 50) {
						if (getRandomPercent() <= 34) {
							this.duel.addMessage("His body and mind have now ascended !");
							this.playMove(EMOTE_PP49);
						}
						else {
							this.duel.addMessage("But he isn't ready to become a Living God...");
						}
					}
					else if (randomEvent <= 75) {
						this.duel.addMessage("Natural values have been doubled !");
						this.duel.bothFightersAction(function(_fighter) {
							_fighter.STRvalue = _fighter.STRValue*2;
							_fighter.DEXvalue = _fighter.DEXValue*2;
						});
					}
					else {
						this.duel.addMessage("Both fighters DEX has been changed to 0 !");
						this.DEXValue = 0 - (this.DEX - this.DEXValue);
						this.duel.getOppOf(this).DEXValue = 0 - (this.duel.getOppOf(this).DEX - this.duel.getOppOf(this).DEXValue);
					}
				}
				else {
					this.duel.addMessage("Wait he forgot about the battle...");
				}
			}
			else if (attack == EMOTE_PP51) {
				// Priest Regular Move
				this.duel.addMessage(this.getName() + " calls for superior powers !");
				if (this.regularCharges > 0 && sdsds == 0) {
					this.regularCharges -= 1;
				}
				if (this.godList.indexOf(STAND_PP15) > -1) { // House of Atreus
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Atreus answers his calls !");
					this.duel.getOppOf(this).damage(10);
					this.heal(10);
				}
				if (this.godList.indexOf(GOD_PP8_PRIEST) > -1) { // Fabulous Toast Man
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Fabulous Toast Man answers his calls !");
					var randomGod = Math.floor(Math.random()*PRIEST_ROLES.length)
					var nbTries = 0;
					while (this.godList.indexOf(PRIEST_ROLES[randomGod]) > -1 && nbTries < 100) {
						randomGod = Math.floor(Math.random()*PRIEST_ROLES.length)
						nbTries += 1;
					}
					if (nbTries < 100) {
						this.godList.push(PRIEST_ROLES[randomGod]);
						this.duel.addMessage(this.getName() + " becomes a " + PRIEST_ROLES[randomGod] + " thanks to his charisma !");
					}
					else {
						this.duel.addMessage(this.getName() + " has no more god to worship !");
						this.playMove(EMOTE_PP49)
					}
				}
				if (this.godList.indexOf(GOD_PP1_PRIEST) > -1) { // Mongo
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Mongo answers his calls !");
					this.duel.addMessage(this.getName() + " gains some barbarian strength");
					this.heal(50);
				}
				if (this.godList.indexOf(GOD_PP2_PRIEST) > -1) { // Dr Phil
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Dr. Phil answers his calls !");
					this.duel.addMessage("You suddenly all wonder about life...");
					this.duel.FORCE_PERHAPS = true;
				}
				if (this.godList.indexOf(GOD_PP3_PRIEST) > -1) { // LeprePuds
					this.duel.addMessage("-----------------");
					this.duel.addMessage("LeprePuds answers his calls !");
					this.duel.addMessage(this.getName() + " feels lucky !");
					this.isLucky = 4;
					this.badLuck = false;
				}
				if (this.godList.indexOf(GOD_PP4_PRIEST) > -1) { // DickHead Pudding
					this.duel.addMessage("-----------------");
					this.duel.addMessage("DickHead Pudding answers his calls !");
					if (getRandomPercent() < 10) {
						this.duel.addMessage(this.getName() + " wins !");
						this.duel.getOppOf(this).playMove(EMOTE_PP47);
						return;
					} 
					else {
						this.duel.addMessage(this.getName() + " fails to be a complete dickhead !");
					}
				}
				if (this.godList.indexOf(GOD_PP5_PRIEST) > -1) { // Hello There Puds
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Hello There Puds answers his calls !");
					this.duel.addMessage(this.getName() + " tries to scare " + this.getOppName() + " !");
					if (getRandomPercent() <= 50+this.STR-this.duel.getOppOf(this).STR) {
						this.duel.getOppOf(this).damage(100);
					}
					else {
						this.duel.addMessage("But it fails !");
					}
				}
				if (this.godList.indexOf(GOD_PP6_PRIEST) > -1) { // Dickdickson666
					this.duel.addMessage("-----------------");
					this.duel.addMessage("DickDickSon666 answers his calls !");
					if (this.eldritchFriend) {
						this.duel.addMessage("But "+ this.getName() + " already has an eldritch friend !");
					}
					else {
						this.duel.addMessage(this.getName() + " gets an eldritch friend !");
						this.eldritchFriend = true;
					}
					if (this.duel.getOppOf(this).eldritchFriend) {
						this.duel.addMessage("This place is getting too much eldritch energy...");
						this.duel.FORCE_EVENT_ID = 5; // Cthulhu / Moon Lord
					}
				}
				if (this.godList.indexOf(GOD_PP7_PRIEST) > -1) { // Jew
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Jew Lord answers his calls !");
					this.duel.addMessage(this.getName() + " takes " + this.duel.MOVE_COUNT*2 + " DEX from " + this.duel.getOppOf(this).getName() + " as the emerald tax !");
					this.DEXValue += this.duel.MOVE_COUNT*2;
					this.duel.getOppOf(this).DEXValue -= this.duel.MOVE_COUNT*2;
				}
				// GOD 8 IS FIRST
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1) { // Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Brenn answers his calls !");
					this.duel.addMessage(this.getName() + " plays a guitar solo that makes " + this.duel.getOppOf(this).getName() + "'s PP bleed !");
					this.duel.getOppOf(this).bleedDamage += 5;
				}
				if (this.godList.indexOf(GOD_PP10_PRIEST) > -1) { // Fabio
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Fabio answers his calls !");
					this.duel.addMessage(this.getName() + " let his hair flow in the wind !");
					this.heal(50*this.duel.MOVE_COUNT);
				}
				if (this.godList.indexOf(GOD_PP11_PRIEST) > -1) { // Country Music Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Country Music Brenn answers his calls !");
					this.duel.addMessage(this.getName() + " plays some country !");
					if (this.duel.getOppOf(this).isHockeyPuckPP) {
						this.duel.addMessage("But his opponent doesn't care.");
					}
					else {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets an Hockey Puck PP !");
						this.duel.getOppOf(this).isHockeyPuckPP = true;
					}
				}
				if (this.godList.indexOf(GOD_PP12_PRIEST) > -1) { // Espinoza
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Espinoza answers his calls !");
					this.duel.addMessage(this.getName() + " sniffs " + this.duel.getOppOf(this).getName() + "'s PP and becomes faster !");
					this.DEXValue += 10;
				}
				if (this.godList.indexOf(GOD_PP13_PRIEST) > -1) { // 700IQ
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Mutantoid Lycanthrope answers his calls !");
					this.duel.addMessage(this.getName() + " licks his wounds !");
					this.heal(Math.floor(this.damageTaken/2));
				}
				if (this.godList.indexOf(GOD_PP14_PRIEST) > -1) { // UREGonnaGETRaped
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Rapist Pudding answers his calls !");
					this.duel.addMessage(this.getName() + " gives a boner punch to " + this.getOppName() + " !");
					this.hasBoner = true;
					this.duel.getOppOf(this).damage(Math.floor((this.STR - (this.DEX/2))/5));
				}
				if (this.godList.indexOf(GOD_PP15_PRIEST) > -1) { // STFU Isaac
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Isaac answers his calls !");
					this.duel.addMessage(this.getName() + " starts to cry !");
					this.duel.addMessage(this.duel.BATTLE_CHANNEL.guild.members.random().user.username + " helps the fighters !");
					this.duel.FIGHTER1.heal(50);
					this.duel.FIGHTER2.heal(50);
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1) { // The Man Who Made a Monster
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Man who Made a Monster answers his calls !");
					this.duel.addMessage(this.getName() + " drinks " + this.duel.getOppOf(this).getName() + "'s salty tears !");
					this.tearDrinker += 3;
				}
				if (this.godList.indexOf(GOD_PP17_PRIEST) > -1) { // Hitler
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Literally Hitler answers his calls !");
					if (this.duel.ILLEGAL_JEWS) {
						this.duel.addMessage(this.getName() + " makes jew priests illegal again, just to be sure.");
					}
					else {
						this.duel.addMessage(this.getName() + " makes jew priests illegal !");
						this.duel.ILLEGAL_JEWS = true;
					}
				}
				if (this.godList.indexOf(GOD_PP18_PRIEST) > -1) { // Salt King
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Salt King answers his calls !");
					if (this.duel.getOppOf(this).isSalty) {
						this.duel.addMessage("But " + this.duel.getOppOf(this).getName() + " is already salty...");
					}
					else {
						this.duel.addMessage(this.getName() + " makes his opponent's wounds salty !");
						this.duel.getOppOf(this).bleedDamage += 3;
						this.duel.getOppOf(this).isSalty = true;
					}
				}
				if (this.godList.indexOf(GOD_PP19_PRIEST) > -1) { // Chad Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Chad Brenn answers his calls !");
					if (this.legAimer) {
						this.duel.addMessage("But " + this.getName() + " already aims for legs !");
					}
					else {
						this.duel.addMessage(this.getName() + " now aims for legs !");
						this.legAimer = true;
					}
				}
				if (this.godList.indexOf(GOD_PP20_PRIEST) > -1) { // Mikasa
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Mikasa answers his calls !");
					this.duel.addMessage(this.getName() + " gets her blessing for 3 turns !");
					this.mikasaBuff = 4;
					this.bonusDamage += 50;
				}
				if (this.godList.indexOf(GOD_PP21_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // D.I.C.K.
					this.duel.addMessage("-----------------");
					this.duel.addMessage("D.I.C.K. answers his calls !");
					this.duel.addMessage(this.getName() + " gets a special charge, overcircumcised and more DEX !");
					this.specialCharges += 1;
					this.isOverCircumcised = true;
					this.DEXValue += 10;
				}
				if (this.godList.indexOf(GOD_PP22_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Satan
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Satan answers his calls !");
					this.duel.addMessage(this.getName() + " gets a special charge and removes his bad status !");
					this.specialCharges += 1;
					this.resetBattleVariables();
					this.duel.addMessage(this.getName() + " possesses " + this.duel.getOppOf(this).getName() + "'s PP for 2 turns !");
					this.duel.getOppOf(this).isPossessed = 3;
				}
				if (this.godList.indexOf(GOD_PP23_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Ancient Fongus
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Ancient Fongus answers his calls !");
					this.duel.addMessage(this.getName() + " gets a special charge !");
					this.specialCharges += 1;
					if (this.duel.getOppOf(this).regularCharges > 0) {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses his regular charge !");
						this.duel.getOppOf(this).regularCharges = 0;
					}
					if (this.duel.getOppOf(this).specialCharges > 0) {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses his special charge !");
						this.duel.getOppOf(this).specialCharges = 0;
					}
				}
				if (this.godList.indexOf(GOD_PP24_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Time Cube
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Time Cube answers his calls !");
					this.duel.addMessage(this.getName() + " stops time and gets a special charge !");
					this.duel.TIME_STOP = 4;
					this.specialCharges += 1;
					this.duel.addMessage("*You are taught Boring, You act Boring, You are the Evil on Earth. If a Man cannot tear a page from the marshmallow and burn it - then he cannot be a scientist. Seek Wisdom of Cubic Life Intelligence - or you die boring. MY WISDOM DEBUNKS GODS OF ALL RELIGIONS AND ACADEMIA.*");
					this.duel.addMessage("***I do not promote or suggest anyone kissing you, but you are unfit to live on Earth.***")
				}
				if (this.godList.indexOf(GOD_PP25_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Cthulhu
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Cthulhu answers his calls !");
					this.duel.addMessage(this.getName() + " gets a special charge !");
					this.specialCharges += 1;
					if (getRandomPercent() <= 10) {
						this.duel.addMessage(this.getName() + " gets 100 tentacles !");
						this.tentacles += 100;
					}
					else {
						this.duel.addMessage(this.getName() + " gets a new tentacle !");
						this.tentacles += 1;
					}
				}
			}
			else if (attack == EMOTE_PP52) {
				// Priest Special Move
				this.duel.addMessage(this.getName() + " calls for superior powers !");
				if (this.specialCharges > 0 && sdsds == 0) {
					this.specialCharges -= 1;
				}
				if (this.godList.indexOf(GOD_PP1_PRIEST) > -1) { // Mongo
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Mongo answers his calls !");
					if (this.trueBarbarian) {
						this.duel.addMessage(this.getName() + " is already barbarian enough !");
					}
					else {
						this.duel.addMessage(this.getName() + " becomes a true barbarian from the north !");
						this.trueBarbarian = true;
					}
				}
				if (this.godList.indexOf(GOD_PP2_PRIEST) > -1) { // Dr Phil
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Dr. Phil answers his calls !");
					this.duel.addMessage("Dr Phil sends " + this.duel.getOppOf(this).getName() + "'s will to fight to the ranch for 1 turn...");
					this.duel.getOppOf(this).turnSkip = 2;
				}
				if (this.godList.indexOf(GOD_PP3_PRIEST) > -1) { // LeprePuds
					this.duel.addMessage("-----------------");
					this.duel.addMessage("LeprePuds answers his calls !");
					this.duel.addMessage(this.getName() + " is faster than ever !");
					if (this.DEX < 0) {
						this.DEXValue -= this.DEX;
					}
					this.DEXValue += 20;
				}
				if (this.godList.indexOf(GOD_PP4_PRIEST) > -1) { // DickHead Pudding
					this.duel.addMessage("-----------------");
					this.duel.addMessage("DickHead Pudding answers his calls !");
					if (getRandomPercent() <= 33) {
						this.duel.addMessage(this.getName() + " wins !");
						this.duel.getOppOf(this).playMove(EMOTE_PP47);
						return;
					} 
					else {
						this.duel.addMessage(this.getName() + " fails to be a complete dickhead !");
					}
				}
				if (this.godList.indexOf(GOD_PP5_PRIEST) > -1) { // Hello There Puds
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Hello There Puds answers his calls !");
					this.duel.addMessage(this.getName() + " gets a sudden body change !");
					this.DEXValue = this.STRValue;
				}
				if (this.godList.indexOf(GOD_PP6_PRIEST) > -1) { // Dickdickson666
					this.duel.addMessage("-----------------");
					this.duel.addMessage("DickDickSon666 answers his calls !");
					this.duel.addMessage(this.getName() + " releases Hell on earth !");
					this.duel.FORCE_SATAN = true;
				}
				if (this.godList.indexOf(GOD_PP7_PRIEST) > -1) { // Jew
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Jew Lord answers his calls !");
					this.duel.addMessage(this.getName() + " uses his long nose to get a new special charge !");
					this.specialCharges += 1;
				}
				if (this.godList.indexOf(GOD_PP8_PRIEST) > -1) { // Fabulous Toast Man
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Fabulous Toast Man answers his calls !");
					this.duel.addMessage(this.getName() + " calls for a bit of power from all his gods !");
					this.duel.getOppOf(this).damage(Math.floor(this.godList.length*this.STR/10));
				}
				if (this.godList.indexOf(GOD_PP9_PRIEST) > -1) { // Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Brenn answers his calls !");
					this.duel.addMessage(this.getName() + " feels like Jesus !");
					this.extraLife += 1;
				}
				if (this.godList.indexOf(GOD_PP10_PRIEST) > -1) { // Fabio
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Fabio answers his calls !");
					this.duel.addMessage(this.getName() + " makes you all turn gay !");
					this.duel.GAY_TURNS = 5;
				}
				if (this.godList.indexOf(GOD_PP11_PRIEST) > -1) { // Country Music Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Country Music Brenn answers his calls !");
					if (this.isCowboy) {
						this.duel.addMessage("But " + this.getName() + " already is Cow-Boy !");
					}
					else {
						this.duel.addMessage(this.getName() + " becomes a Cow-Boy !");
						this.isCowBoy = true;
					}
				}
				if (this.godList.indexOf(GOD_PP12_PRIEST) > -1) { // Espinoza
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Espinoza answers his calls !");
					this.duel.addMessage(this.getName() + " grabs " + this.duel.getOppOf(this).getName() + "'s PP !");
					this.duel.getOppOf(this).grabbedPP = 2;
				}
				if (this.godList.indexOf(GOD_PP13_PRIEST) > -1) { // 700IQ
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Mutantoid Lycanthrope answers his calls !");
					if (!this.chimera) {
						this.duel.addMessage(this.getName() + " shares his furry genes with " + this.duel.getOppOf(this).getName() + " UwU");
						this.duel.getOppOf(this).chimera = true;
						for (var i in this.duel.getOppOf(this).godList) {
							if (this.duel.getOppOf(this).godList[i] != GOD_PP13_PRIEST) {
								this.duel.getOppOf(this).godList[i] = GOD_PP13_PRIEST;
								break;
							}
						}
						var fullChimera = true;
						for (var i in this.duel.getOppOf(this).godList) {
							if (this.duel.getOppOf(this).godList[i] != GOD_PP13_PRIEST) {
								fullChimera = false
							}
						}
						if (fullChimera) {
							this.duel.addMessage(this.duel.getOppOf(this).getName() + " is now fully a furry !");
							this.duel.getOppOf(this).playMove(EMOTE_PP47);
						}
					}
					else {
						this.duel.addMessage(this.getName() + " barks like the retarded furry he is !");
					}
				}
				if (this.godList.indexOf(GOD_PP14_PRIEST) > -1) { // UREGonnaGETRaped
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Rapist Pudding answers his calls !");
					this.duel.addMessage(this.getName() + " sensually touches " + this.getOppName() + "'s PP...");
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.hasBoner = true;
					});
					this.duel.getOppOf(this).damage(Math.floor(this.STR/2));
				}
				if (this.godList.indexOf(GOD_PP15_PRIEST) > -1) { // STFU Isaac
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Isaac answers his calls !");
					this.duel.addMessage(this.getName() + " curses " + this.duel.getOppOf(this).getName() + " with bad luck !");
					this.duel.getOppOf(this).badLuck = true;
				}
				if (this.godList.indexOf(GOD_PP16_PRIEST) > -1) { // The Man Who Made a Monster
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Man who Made a Monster answers his calls !");
					this.duel.addMessage(this.getName() + " starts summoning the Monster !");
					this.summonTankCountdown = 4;
				}
				if (this.godList.indexOf(GOD_PP17_PRIEST) > -1) { // Hitler
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Literally Hitler answers his calls !");
					this.duel.addMessage(this.getName() + " starts a new genocide !");
					if (this.duel.getOppOf(this).godList.indexOf(GOD_PP7_PRIEST) > -1) {
						this.duel.getOppOf(this).playMove(EMOTE_PP47);
					}
					else {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " is unaffected...");
					}
				}
				if (this.godList.indexOf(GOD_PP18_PRIEST) > -1) { // Salt King
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Salt King answers his calls !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " is Salt King's best friend");
					this.duel.addMessage(this.getName() + " takes " + Math.floor(this.duel.getOppOf(this).DEX/2) + " DEX from him.");
					this.DEXValue += Math.floor(this.duel.getOppOf(this).DEX/2);
					this.duel.getOppOf(this).DEXValue -= Math.floor(this.duel.getOppOf(this).DEX/2);
				}
				if (this.godList.indexOf(GOD_PP19_PRIEST) > -1) { // Chad Brenn
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Chad Brenn answers his calls !");
					this.duel.addMessage(this.getName() + " dabs on the haters");
					if (this.STR < this.duel.getOppOf(this).STR) {
						this.duel.addMessage(this.getName() + " gets as much STR as " + this.duel.getOppOf(this).getName());
						this.STRValue -= this.STR-this.duel.getOppOf(this).STR; 
					}
					else {
						this.duel.addMessage(this.getName() + " is already the strongest !");
					}
					if (this.DEX < this.duel.getOppOf(this).DEX) {
						this.duel.addMessage(this.getName() + " gets as much DEX as " + this.duel.getOppOf(this).getName());
						this.DEXValue -= this.DEX-this.duel.getOppOf(this).DEX; 
					}
					else {
						this.duel.addMessage(this.getName() + " is already the fastest !");
					}
				}
				if (this.godList.indexOf(GOD_PP20_PRIEST) > -1) { // Mikasa
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Mikasa answers his calls !");
					this.duel.addMessage(this.getName() + " learns how to dual wield !");
					this.dualWield = true;
				}
				if (this.godList.indexOf(GOD_PP21_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					// D.I.C.K.
					this.duel.addMessage("-----------------");
					this.duel.addMessage("D.I.C.K. answers his calls !");
					if (this.STR < 10) {
						this.STRValue -= this.STR-10;
					}
					this.STRValue = this.STR*1000-this.STRValue;
					this.duel.addMessage(this.getName() + " gets the strength of a thousand punchers !");
					this.playMove(EMOTE_PP2);
				}
				if (this.godList.indexOf(GOD_PP22_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					// Satan
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Satan answers his calls !");
					this.satanicMoveMultiplier = true
					this.duel.addMessage(this.getName() + " gets a Satanic Move Multiplier !");
				}
				if (this.godList.indexOf(GOD_PP23_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					// Ancient Fongus
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Ancient Fongus answers his calls !");
					this.duel.addMessage(this.getName() + " will summon 500 moves !");
					this.duel.sendMessages();
					for (var i = 0; i < 500; i++) {
						this.playMove(this.duel.getRandomEmote());
					}
				}
				if (this.godList.indexOf(GOD_PP24_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Time Cube
					this.duel.addMessage("-----------------");
					this.duel.addMessage("The Time Cube answers his calls !");
					this.duel.addMessage(this.getName() + " becomes a godlike being with superior intelligence who has absolute evidence and proof");
					if (this.STR < 10) {
						this.STRValue -= this.STR-10;
					}
					this.STRValue = this.STR*50-this.STRValue;
					if (this.DEX < 10) {
						this.DEXValue -= this.DEX-10;
					}
					this.DEXValue = this.DEX*50-this.DEXValue;
					this.duel.addMessage(this.getName() + "'s stats were greatly improved !");
					this.duel.addMessage("*When the Sun shines upon Earth, 2 – major Time points are created on opposite sides of Earth – known as Midday and Midnight. Where the 2 major Time forces join, synergy creates 2 new minor Time points we recognize as Sunup and Sundown. The 4-equidistant Time points can be considered as Time Square imprinted upon the circle of Earth. In a single rotation of the Earth sphere, each Time corner point rotates through the other 3-corner Time points, thus creating 16 corners, 96 hours and 4-simultaneous 24-hour Days within a single rotation of Earth – equated to a Higher Order of Life Time Cube. ONE - DOES NOT EXIST, EXCEPT IN DEATH STATE.*");
					this.duel.addMessage("***For as long as you dumbass, educated brilliant and boring bastards IGNORE Cubic Creation, your sons and daughters deserve to die and be maimed in foreign lands - while kissing innocent women and children.***");
				}
				if (this.godList.indexOf(GOD_PP25_PRIEST) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Cthulhu
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Cthulhu answers his calls !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " falls into madness !");
					this.duel.getOppOf(this).madnessStacks += 15;
				}
				if (this.requiemPower != null && this.requiemCooldown <= 0) {
					this.MOVE_COUNT += 999
					this.duel.addMessage("-----------------");
					this.duel.addMessage(this.requiemPower + " Requiem Ability is triggered !");
					this.requiemCooldown = 6;
					this.duel.addMessage("**Time stops !**\n" + IMAGE_PP3);
					this.duel.TIME_STOP = 2;
					
					if (this.requiemPower == REQUIEM_PP1 || this.requiemPower == REQUIEM_PP7) { // Etrange
						this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s past injuries are inflicted to him again !");
						this.duel.getOppOf(this).damage(this.duel.getOppOf(this).damageTaken, false);
					}
					if (this.requiemPower == REQUIEM_PP2) { // Iamthemorning
						this.duel.TIME_STOP = 4;
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets possessed !");
						this.duel.getOppOf(this).isPossessed = 1;
					}
					if (this.requiemPower == REQUIEM_PP3 || this.requiemPower == REQUIEM_PP7) { // Majestic
						this.duel.addMessage(this.getName() + " makes a temporal duplication of himself !");
						this.extraLife += 1;
						
						var duel = this.duel;
						this.duel = null;
						this.extraLifeDuplication = cloneObject(this);
						this.extraLifeDuplication.duel = duel;
						this.duel = duel;
					}
					if (this.requiemPower == REQUIEM_PP4 || this.requiemPower == REQUIEM_PP7) { // DayDream XI
						this.duel.TIME_STOP = 4;
						this.duel.addMessage(this.getName() + " will compress time when it'll go back to normal !");
						this.duel.TIME_COMPRESSION = 4;
					}
					if (this.requiemPower == REQUIEM_PP5 || this.requiemPower == REQUIEM_PP7) { // Flying Colors
						this.duel.addMessage(this.getName() + "'s past injuries are reverted back in time !");
						this.heal(this.damageTaken);
						this.resetBattleVariables();
					}
					if (this.requiemPower == REQUIEM_PP6 || this.requiemPower == REQUIEM_PP7) { // Witherfall
						this.duel.addMessage(this.getName() + " damages time itself !");
						if (this.duel.getOppOf(this).requiemPower != null && this.duel.getOppOf(this).requiemPower != REQUIEM_PP6) {
							this.duel.getOppOf(this).requiemPower = null;
							this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s requiem ability is destroyed !");
						}
						this.duel.TIME_BREAK += 10;
					}
					if (this.requiemPower == REQUIEM_PP8 || this.requiemPower == REQUIEM_PP7) { // Hawkwind
						this.duel.addMessage(this.getName() + " defines the fate of " + this.duel.getOppOf(this).getName() + " !");
						this.duel.getOppOf(this).impendingDoom = 11;
					}
					
					if (this.requiemPower == REQUIEM_PP9) { // Porcupine Tree
						this.duel.TIME_STOP = 11;
						this.duel.addMessage(this.getName() + " deletes the arbitrator's speaking time !");
						this.sendMessages();
						this.duel.NO_MESSAGE = 4;
					}
					
					if (this.requiemPower == REQUIEM_PP7) { // All Traps on Earth
						this.duel.TIME_STOP = 6;
					}
				}
			}
			else if (attack == EMOTE_PP53) {
				// Singular Explosion
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Singular Explosion");
				if (this.duel.NUCLEAR_BOMB <= 0) {
					this.duel.addMessage("A new Nuclear Bomb is launched !");
				}
				else {
					this.duel.addMessage("The Nuclear Bomb timer has been reset !");
				}
				this.duel.addMessage("The Nuclear Bomb will explode in 5 turns !");
				this.duel.NUCLEAR_BOMB = 6;
			}
			else if (attack == EMOTE_PP54) {
				// Explosion Loop
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Explosion Loop");
				this.duel.addMessage("All damages are doubled for 7 turns");
				this.duel.ATTACK_MISS_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP55) {
				// Dual Explosion Loop
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Dual Explosion Loop");
				this.duel.addMessage("All moves will be used, no matter the DEX, for 7 turns");
				this.duel.AUTO_MOVES_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP56) {
				// SignPost
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons every moves !");
				for (var i = 0; i < 50; i++) {
					this.duel.addMessage("-----------------");
					if (EMOTE_LIST[i] != EMOTE_PP47) {
						this.playMove(EMOTE_LIST[i]);
					}
				}
			}
			else if (attack == EMOTE_PP57) {
				// Cage / Sacrifice
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " changes his gods for a bit !");
				var godListMemory = this.godList.slice();
				this.godList = [];
				for (var i = 0; i < 5; i++) {
					var randomGod = PRIEST_ROLES[Math.floor(Math.random()*PRIEST_ROLES.length)];
					var nbTries = 0;
					while (this.godList.indexOf(PRIEST_ROLES[randomGod]) > -1 && nbTries < 100) {
						randomGod = PRIEST_ROLES[Math.floor(Math.random()*PRIEST_ROLES.length)];
						nbTries += 1;
					}
					this.godList.push(randomGod);
				}
				this.playMove(EMOTE_PP51);
				this.duel.addMessage("-----------------");
				this.playMove(EMOTE_PP52);
				this.godList = godListMemory.slice();
			}
			else if (attack == EMOTE_PP58) {
				// Cageless
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " gets a new life !");
				this.extraLife += 1;
			}
			else if (attack == EMOTE_PP59) {
				// Triggered Pépin2Pom
				this.duel.MOVE_COUNT += 33;
				for (var i in this.godList) {
					if (this.godList[i] != GOD_PP18_PRIEST) {
						this.duel.addMessage(this.getName() + " gets closer to the Salt King !");
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
					this.duel.addMessage(this.getName() + " is now touched by Saltus Maximus Retardus !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " sucks !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " has the big gay !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " has a smoll pp !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " is a loser !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " is a big nerd !");
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " better abandons now !");
					this.duel.addMessage("-----------------");
					this.duel.getOppOf(this).playMove(EMOTE_PP47);
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Haha just kidding !");
					this.duel.addMessage("Unless I wasn't ?");
					this.duel.addMessage("Nah it was a joke !");
					this.duel.addMessage("Unless...?");
					this.duel.addMessage("What are you gonna do ?");
					this.duel.addMessage("Pee and poop maybe ?");
					this.duel.addMessage("Maybe fart and cum ?");
					this.duel.addMessage("hehe");
					this.duel.sendMessages();
				}
				else {
					this.duel.addMessage(this.getName() + " needs to get even closer !");
				}
			}
			else if (attack == EMOTE_PP60) {
				// PP Duel
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " asks for a PP Duel !");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.STRValue -= _fighter.STR-10;
					_fighter.DEXValue -= _fighter.DEX-10;
					_fighter.bleedDamage = 0;
				});
			}
			else if (attack == EMOTE_PP61) {
				// Liberate PP
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " liberates his opponent's PP !");
				if (!this.duel.getOppOf(this).liberatedPP) {
					this.resetBattleVariables();
					this.duel.addMessage(this.getName() + " takes " + this.duel.getOppOf(this).DEXValue + " DEX from " + this.duel.getOppOf(this).getName() + " !");
					this.DEXValue += this.duel.getOppOf(this).DEX;
					this.duel.getOppOf(this).DEXValue = 0;
					this.duel.getOppOf(this).liberatedPP = true;
				}
				else {
					this.duel.addMessage("But " + this.duel.getOppOf(this).getName() + " has already been liberated !");
				}
			}
			else if (attack == EMOTE_PP62) {
				// Duel Checkpoint
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " saves the battle !");
				if (this.duel.CHECKPOINT_DUEL != null) {
					this.duel.CHECKPOINT_DUEL = null;
					this.duel.addMessage("The old save has been removed !");
				}
				
				var duel = this.duel;
				duel.FIGHTER1.duel = null;
				duel.FIGHTER2.duel = null;
				try {
					duel.FIGHTER1_SAVE.duel = null;
					duel.FIGHTER2_SAVE.duel = null;
				}
				catch(e) {
					// saves are null
				}
				duel.CHECKPOINT_DUEL = cloneObject(duel);
				duel.FIGHTER1.duel = duel;
				duel.FIGHTER2.duel = duel;
				duel.CHECKPOINT_DUEL.FIGHTER1.duel = duel.CHECKPOINT_DUEL;
				duel.CHECKPOINT_DUEL.FIGHTER2.duel = duel.CHECKPOINT_DUEL;
				try {
					duel.FIGHTER1_SAVE.duel = duel;
					duel.FIGHTER2_SAVE.duel = duel;
					duel.CHECKPOINT_DUEL.FIGHTER1_SAVE.duel = duel.CHECKPOINT_DUEL;
					duel.CHECKPOINT_DUEL.FIGHTER2_SAVE.duel = duel.CHECKPOINT_DUEL;
				}
				catch(e) {
					// saves are null
				}
			}
			else if (attack == EMOTE_PP63) {
				// Xenomorph
				this.duel.addMessage(this.getName() + " slashes " + this.getOppName() + " !");
				this.duel.getOppOf(this).damage(Math.floor(this.DEX / 2));
			}
			else if (attack == EMOTE_PP64) {
				// XenoHead
				this.xenoMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask : Xeno !");
				this.satanMask = false;
				this.helldogMask = false;
			}
			else if (attack == EMOTE_PP65) {
				// Signpost
				this.duel.addMessage(this.getName() + " summons the knowledge signpost !");
				if (this.kungFu) {
					this.duel.addMessage("But he has nothing to learn !");
				}
				else {
					this.duel.addMessage(this.getName() + " now has battle knowledge !");
					this.kungFu = true;
				}
			}
			else if (attack == EMOTE_PP66) {
				// SatanHead
				this.satanMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask : Satan !");
				this.xenoMask = false;
				this.helldogMask = false;
			}
			else if (attack == EMOTE_PP67) {
				// RageSatan
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + " !");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP68) {
				// Mech
				this.duel.addMessage(this.getName() + " hides in his Mech !");
			}
			else if (attack == EMOTE_PP69) {
				// Lost Soul
				if (this.ragingSpirit <= 0) {
					this.duel.addMessage(this.getName() + " starts casting !");
				}
				else {
					this.duel.addMessage(this.getName() + " continues his spell !");
				}
				this.ragingSpirit += 1;
				this.duel.addMessage(this.getName() + " summons " + this.ragingSpirit + " Lost Souls !");
				for (var j = 0; j < this.ragingSpirit; j++) {
					this.duel.getOppOf(this).damage(1 + Math.floor(this.STR / 10));
				}
			}
			else if (attack == EMOTE_PP70) {
				// HellDogHead
				this.helldogMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask : Intimidation !");
				this.xenoMask = false;
				this.satanMask = false;
			}
			else if (attack == EMOTE_PP71) {
				// Freedom
				this.duel.addMessage(this.getName() + " removes " + this.duel.getOppOf(this).getName() + "'s mask !");
				this.duel.getOppOf(this).helldogMask = false;
				this.duel.getOppOf(this).xenoMask = false;
				this.duel.getOppOf(this).satanMask = false;
			}
			else if (attack == EMOTE_PP72) {
				// Ammo Crate
				this.duel.addMessage(this.getName() + " gets an ammo crate !");
				if (this.fullOfAmmo) {
					this.duel.addMessage("...but he already had one !");
				}
				this.fullOfAmmo = true;
			}
			else if (attack == EMOTE_PP73) {
				// Quickening
				this.duel.addMessage(this.getName() + " gets a Quickening Charge !");
				this.quickeningCharges += 1;
			}
			else if (attack == EMOTE_PP74) {
				// Sword
				this.duel.addMessage(this.getName() + " attacks " + this.getOppName() + " with a sword !");
				if (this.STR > this.duel.getOppOf(this).STR) {
					this.duel.getOppOf(this).damage(this.STR - this.duel.getOppOf(this).STR);
				}
				else {
					this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
				}
			}
			else if (attack == EMOTE_PP75) {
				// AcidShot
				this.duel.addMessage(this.getName() + " shoots acid at " + this.duel.getOppOf(this).getName() + " !");
				this.duel.getOppOf(this).meltingDamage += Math.floor(Math.random() * 5 + 5);
				this.duel.getOppOf(this).acidArmor = 6;
			}
			else if (attack == EMOTE_PP76) {
				// EldritchPudding
				this.duel.addMessage(this.getName() + " eats some Eldritch Pudding !");
				this.damage(50, false);
				if (getRandomPercent() <= 10) {
					this.duel.addMessage(this.getName() + " gets 100 tentacles !");
					this.tentacles += 100;
				}
				else {
					this.duel.addMessage(this.getName() + " gets a new tentacle !");
					this.tentacles += 1;
				}
			}
			else if (attack == EMOTE_PP77) {
				// SatanHand
				this.duel.addMessage(this.getName() + " summons the Hand of Satan !");
				if (this.quickeningCharges >= 10) {
					this.duel.addMessage("The Hand brings him a gift against 10 quickening charges !");
					this.quickeningCharges -= 10;
					this.duel.addMessage("-----------------");
					this.duel.addMessage(this.getName() + " evolves to Requiem !");
					this.requiemPower = REQUIEM_LIST[Math.floor(Math.random()*REQUIEM_LIST.length)];
					try {
						this.guildUser.send("**Requiem Acquired : " + this.requiemPower + "**");
					}
					catch(e) {
						// User = Bot
					}
				}
				else {
					this.duel.addMessage(this.getName() + " needs more quickening charges to deal with it !");
				}
			}
			else if (attack == EMOTE_PP78) {
				// SatanSkull
				this.duel.addMessage(this.getName() + " summons the Satan Horns !");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP79) {
				// Eye of Truth
				this.duel.addMessage(this.getName() + " summons the Eye of Truth !");
				this.duel.addMessage("The Eye of Truth will reveal the moves of " + this.getName() + "'s soul !");
				var moveId = parseInt(this.guildUser.user.id.slice(9, this.guildUser.user.id.length));
				var effectId = moveId%6;
				var subEffectId = moveId + effectId;
				var value = 0;
				var debuffList = ["bleedDamage", "meltingDamage", "madnessStack"];
				var buffList = ["bonusDamage", "tearDrinker", "pigHeal", "quickeningCharges", "tentacles"];
				
				for (var i = 0; i < 3; i++) {
					effectId = moveId + moveId%(567+i);
					subEffectId = moveId + moveId%(234+i);
					this.duel.addMessage("-----------------");
					this.duel.addMessage("**" + this.getName() + " Move : " + (i+1) + "/3**");
					
					if (subEffectId%12 == 0) {
						value = Math.floor(this.STR/10);
						this.duel.addMessage("**Value :** based on " + this.getName() + "'s STR.");
					}
					else if (subEffectId%12 == 1) {
						value = Math.floor(this.DEX/5);
						this.duel.addMessage("**Value :** based on " + this.getName() + "'s DEX.");
					}
					else if (subEffectId%12 == 2) {
						value = EMOTE_LIST.indexOf(this.oldAttack)*2;
						this.duel.addMessage("**Value :** based on " + this.getName() + "'s last move ID.");
					}
					else if (subEffectId%12 == 3) {
						value = Math.floor(this.damageTaken/10);
						this.duel.addMessage("**Value :** based on " + this.getName() + "'s total taken damages.");
					}
					else if (subEffectId%12 == 4) {
						value = Math.floor(this.usedMoves.length/2);
						this.duel.addMessage("**Value :** based on " + this.getName() + "'s moves count.");
					}
					else if (subEffectId%12 == 5) {
						value = Math.floor(this.duel.getOppOf(this).STR/10);
						this.duel.addMessage("**Value :** based on " + this.duel.getOppOf(this).getName() + "'s STR.");
					}
					else if (subEffectId%12 == 6) {
						value = Math.floor(this.duel.getOppOf(this).DEX/5);
						this.duel.addMessage("**Value :** based on " + this.duel.getOppOf(this).getName() + "'s DEX.");
					}
					else if (subEffectId%12 == 7) {
						value = EMOTE_LIST.indexOf(this.duel.getOppOf(this).oldAttack)*2;
						this.duel.addMessage("**Value :** based on " + this.duel.getOppOf(this).getName() + "'s last move ID.");
					}
					else if (subEffectId%12 == 8) {
						value = Math.floor(this.duel.getOppOf(this).damageTaken/10);
						this.duel.addMessage("**Value :** based on " + this.duel.getOppOf(this).getName() + "'s total taken damages.");
					}
					else if (subEffectId%12 == 9) {
						value = Math.floor(this.duel.getOppOf(this).usedMoves.length/2);
						this.duel.addMessage("**Value :** based on " + this.duel.getOppOf(this).getName() + "'s moves count.");
					}
					else if (subEffectId%12 == 10) {
						value = Math.floor(this.duel.MOVE_COUNT/3);
						this.duel.addMessage("**Value :** based on total moves count.");
					}
					else {
						value = Math.floor(this.duel.DAMAGE_COUNT/15);
						this.duel.addMessage("**Value :** based on total damages count.");
					}
					value += 10;
					
					if (effectId%6 == 0) { // Inflict damage
						this.duel.addMessage("**Effect :** Damage");
						this.duel.addMessage("-----------------");
						this.duel.getOppOf(this).damage(20 + value, subEffectId%3 == 0);
					}
					else if (effectId%6 == 1) { // Inflict DEX damage
						this.duel.getOppOf(this).DEXValue -= Math.floor(value/10);
						this.duel.addMessage("**Effect :** DEX Damage");
						this.duel.addMessage("-----------------");
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses " + Math.floor(value/10) + " DEX !");
					}
					else if (effectId%6 == 2) { // Heal
						this.duel.addMessage("**Effect :** Heal");
						this.duel.addMessage("-----------------");
						this.heal(20 + value);
					}
					else if (effectId%6 == 3) { // Heal DEX
						this.DEXValue += Math.floor(value/10);
						this.duel.addMessage("**Effect :** DEX Gain");
						this.duel.addMessage("-----------------");
						this.duel.addMessage(this.getName() + " gets " + Math.floor(value/10) + " DEX !");
					}
					else if (effectId%6 == 4) { // Inflict debuff
						this.duel.addMessage("**Effect :** Debuff");
						this.duel.addMessage("-----------------");
						this.duel.getOppOf(this)[debuffList[subEffectId % debuffList.length]] += Math.floor(value/10);
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets " + Math.floor(value/10) + " " + debuffList[subEffectId%debuffList.length] + " !");
					}
					else { // Gets buff
						this.duel.addMessage("**Effect :** Buff");
						this.duel.addMessage("-----------------");
						this[buffList[subEffectId%buffList.length]] += Math.floor(value/10);
						this.duel.addMessage(this.getName() + " gets " + Math.floor(value/10) + " " + buffList[subEffectId%buffList.length] + " !");
					}
				}
			}
			else if (attack == EMOTE_PP80) {
				// Fherla
				this.duel.addMessage(this.getName() + " summons Fherla - Strawberry Girl !");
				if (this.duel.CHRISTIAN_TEXT) {
					this.duel.addMessage("PP Punching is so good. Please continue !");
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.heal(Math.floor(Math.random() * 10000000000000));
					});
				}
				else {
					this.duel.addMessage("PP Punching is so filthy. May the chat be purged of this nonsense.");
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.damage(Math.floor(Math.random() * 10000000000000), false);
					});
				}
			}
			else if (attack == EMOTE_PP81) {
				// Melodia
				this.duel.addMessage(this.getName() + " summons Melodia !");
				this.duel.UWU_TEXT = !this.duel.UWU_TEXT;
				if (this.duel.UWU_TEXT) {
					this.duel.addMessage("UwU Mode Activated !");
				}
				else {
					this.duel.addMessage("UwU Mode Deactivated !");
				}
			}
			else if (attack == GOD_PP1) {
				this.godList.push(GOD_PP1_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP1_PRIEST + " !");
			}
			else if (attack == GOD_PP2) {
				this.godList.push(GOD_PP2_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP2_PRIEST + " !");
			}
			else if (attack == GOD_PP3) {
				this.godList.push(GOD_PP3_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP3_PRIEST + " !");
			}
			else if (attack == GOD_PP4) {
				this.godList.push(GOD_PP4_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP4_PRIEST + " !");
			}
			else if (attack == GOD_PP5) {
				this.godList.push(GOD_PP5_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP5_PRIEST + " !");
			}
			else if (attack == GOD_PP6) {
				this.godList.push(GOD_PP6_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP6_PRIEST + " !");
			}
			else if (attack == GOD_PP7) {
				this.godList.push(GOD_PP7_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP7_PRIEST + " !");
			}
			else if (attack == GOD_PP8) {
				this.godList.push(GOD_PP8_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP8_PRIEST + " !");
			}
			else if (attack == GOD_PP9) {
				this.godList.push(GOD_PP9_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP9_PRIEST + " !");
			}
			else if (attack == GOD_PP10) {
				this.godList.push(GOD_PP10_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP10_PRIEST + " !");
			}
			else if (attack == GOD_PP11) {
				this.godList.push(GOD_PP11_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP11_PRIEST + " !");
			}
			else if (attack == GOD_PP12) {
				this.godList.push(GOD_PP12_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP12_PRIEST + " !");
			}
			else if (attack == GOD_PP13) {
				this.godList.push(GOD_PP13_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP13_PRIEST + " !");
			}
			else if (attack == GOD_PP14) {
				this.godList.push(GOD_PP14_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP14_PRIEST + " !");
			}
			else if (attack == GOD_PP15) {
				this.godList.push(GOD_PP15_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP15_PRIEST + " !");
			}
			else if (attack == GOD_PP16) {
				this.godList.push(GOD_PP16_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP16_PRIEST + " !");
			}
			else if (attack == GOD_PP17) {
				this.godList.push(GOD_PP17_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP17_PRIEST + " !");
			}
			else if (attack == GOD_PP18) {
				this.godList.push(GOD_PP18_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP18_PRIEST + " !");
			}
			else if (attack == GOD_PP19) {
				this.godList.push(GOD_PP19_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP19_PRIEST + " !");
			}
			else if (attack == GOD_PP20) {
				this.godList.push(GOD_PP20_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP20_PRIEST + " !");
			}
			else if (attack == GOD_PP21) {
				this.godList.push(GOD_PP21_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP21_PRIEST + " !");
			}
			else if (attack == GOD_PP22) {
				this.godList.push(GOD_PP22_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP22_PRIEST + " !");
			}
			else if (attack == GOD_PP23) {
				this.godList.push(GOD_PP23_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP23_PRIEST + " !");
			}
			else if (attack == GOD_PP24) {
				this.godList.push(GOD_PP24_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP24_PRIEST + " !");
			}
			else if (attack == GOD_PP25) {
				this.godList.push(GOD_PP25_PRIEST);
				this.duel.addMessage(this.getName() + " becomes a " + GOD_PP25_PRIEST + " !");
			}
			else if (attack == EMOTE_DEAD) {
				// Dead (Cthulhu battle)
				if (this.STRValue < 70) {
					this.duel.addMessage(this.getName() + "'s PP corpse does not move.");
				}
				else {
					this.duel.addMessage(this.getName() + "'s PP corpse is slightly twitching...");
				}
			}
			else if (attack == EMOTE_SKIP) {
				// Skip
				this.duel.addMessage(this.getName() + " does nothing...");
				return;
			}
			else {
				this.duel.addMessage(this.getName() + " makes an unknown move ?");
				this.playMove(EMOTE_SKIP);
				console.log("UNKNOWN MOVE : " + attack)
			}
			
			if (sdsds+1 < numberAttacks) {
				this.duel.addMessage("-----------------");
			}
		}
	}

	heal(_amount) {
		_amount += this.quickeningCharges*3;
		if (this.duel.REVERSE_DAMAGE <= 0) {
			this.STRValue += _amount;
			return this.duel.addMessage(this.getName() + " gets healed by " + _amount + " HP");
			if (_amount == 69) {
				this.duel.addMessage("nice !");
			}
		}
		else {
			this.STRValue -= _amount;
			return this.duel.addMessage(this.getName() + " takes " + _amount + " damages !");
			if (_amount == 69) {
				this.duel.addMessage("lmao !");
			}
			this.damageTaken += _amount;
		}
	}

	damage(_amount, _punch = true) {
		if (_punch) {
			_amount += this.duel.getOppOf(this).quickeningCharges*3;
			
			_amount += this.duel.getOppOf(this).bonusDamage;
			this.duel.getOppOf(this).bonusDamage = 0;
		}
		if (this.kungFu && _punch) {
			// Signpost
			_amount += 10;
		}
		if (this.duel.STEEL_PROTECTION) {
			// Steel
			_amount -= Math.floor(_amount/10);
		}
		if (this.duel.BARREL_DAMAGE) {
			// Barrel
			_amount = _amount*2;
		}
		if (this.godList.indexOf(GOD_PP19_PRIEST) > -1 && this.godList.indexOf(GOD_PP20_PRIEST) > -1 && _punch) {
			// Waifu Body Pillow
			_amount -= 10;
		}
		if (this.duel.ATTACK_MISS_COUNTDOWN > 0 && getRandomPercent() < 90) {
			// Boom Loop
			_amount += _amount;
		}
		if (this.duel.getOppOf(this).standPower == STAND_PP16 && _punch && this.duel.getOppOf(this).STR <= 15 && _punch) {
			// Virus
			this.duel.addMessage("Virus effect starts !");
			_amount = _amount*100;
		}
		if (this.standPower == STAND_PP1 && _punch) {
			// Iron Maiden
			_amount -= 10;
		}
		
		if (this.duel.INFINITE_DAMAGE >= 10) {
			if (this.duel.INFINITE_DAMAGE == 10) {
			    this.duel.addMessage("**Damage cap achieved !**");
			}
			return this.duel.addMessage(_amount + " damages were canceled");
		}
		this.duel.INFINITE_DAMAGE += 1;
		
		if (getRandomPercent() < 10  && _punch) {
			_amount += _amount;
			this.duel.addMessage("**Critical Hit !**");
		}

		if (this.duel.REVERSE_DAMAGE > 0) {
			this.STRValue += _amount;
			return this.duel.addMessage(this.getName() + " gets healed by " + _amount + " HP");
			if (_amount == 69) {
				this.duel.addMessage("nice !");
			}
		}

		if (getRandomPercent() <= this.madnessStacks*3 && _punch) { // Scythe of Cosmic Chaos
			// The Scythe of Cosmic Chaos
			this.duel.addMessage(this.duel.getOppOf(this).getName() + " hits himself in his madness !");
			this.duel.getOppOf(this).damage(_amount, false)
			return;
		}
		
		if (this.duel.EVENT_BOSS && _punch) {
			if (_amount <= 0) {
				return this.duel.addMessage(this.duel.CURRENT_BOSS + " takes no damages !");
			}
			
			this.duel.BOSS_HEALTH -= _amount;
			this.duel.addMessage(this.duel.CURRENT_BOSS + " takes " + _amount + " damages !");
			this.duel.DAMAGE_COUNT += _amount;
			if (_amount == 69) {
				this.duel.addMessage("lmao !");
			}
			if (this.duel.BOSS_HEALTH + _amount > 0 && this.duel.BOSS_HEALTH <= 0) {
				this.duel.getOppOf(this).bossKiller = 11;
			}
			this.damageTaken += _amount;
			
			if (this.duel.getOppOf(this).standPower == STAND_PP4) {
				this.duel.getOppOf(this).heal(Math.floor(_amount / 3));
			}
			
			return;
		}
		else if (this.duel.TIME_STOP > 0 && _punch) {
			if (_amount > 0) { 
				this.pushedDamages += _amount;
			}
			return;
		} 
		else if (this.isDrunkPP && getRandomPercent() < 50) {
			// Drunk PP
			this.duel.addMessage(this.getName() + " felt nothing because too drunk !");
		}
		else if (this.attack == EMOTE_PP10 && _punch) {
			// Tank
			this.duel.addMessage(this.getName() + " felt nothing !");
		}
		else if (this.ironProtection > 0 && _punch) {
			// Iron Maiden
			this.duel.addMessage(this.getName() + " felt nothing !");
		}
		else if (this.isProtected && _punch) {
			// RiotShield
			this.duel.addMessage(this.getName() + " reflects the damages !");
			this.isProtected = false;
			this.duel.getOppOf(this).damage(_amount);
		}
		else if (this.standPower == STAND_PP6 && getRandomPercent() <= 25 && _punch) {
			// Sham Mirrors
			this.duel.addMessage(this.getName() + " reflects the damages !");
			this.duel.getOppOf(this).damage(_amount);
		}
		else {
			
			if (_amount <= 0) {
				return this.duel.addMessage(this.getName() + " takes no damages !");
			}
			
			this.duel.addMessage(this.getName() + " takes " + _amount + " damages !");
			if (_amount == 69) {
				this.duel.addMessage("lmao !");
			}
			
			this.damageTaken += _amount;
			this.duel.DAMAGE_COUNT += _amount;
			if (this.duel.getOppOf(this).standPower == STAND_PP10 && _punch) {
				// Illud Divinum Insanus
				this.DEXValue += _amount;
			}
			else {
				// Damage
				this.STRValue -= _amount;
			}
			
			if (this.duel.getOppOf(this).standPower == STAND_PP4 && _punch) { // Above the Light
				this.duel.getOppOf(this).heal(Math.floor(_amount / 3));
			}
			if (this.duel.getOppOf(this).standPower == STAND_PP11 && _amount >= 30 && _punch) { // Refuge Denied
				this.duel.getOppOf(this).heal(30);
				this.duel.getOppOf(this).DEXValue += 10;
				this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets 10 DEX !");
			}
			if (this.duel.getOppOf(this).standPower == STAND_PP12 && _punch) { // Space Metal
				this.meltingDamage += 2;
			}
			if (this.duel.getOppOf(this).standPower == STAND_PP13 && _punch) { // The Scythe of Cosmic Chaos
				this.madnessStacks += 1;
			}
			if (this.madnessStacks > 0 && getRandomPercent() <= 10+this.madnessStacks) {
				this.duel.addMessage(this.getName() + " flinched !");
				this.DEXValue = 0;
			}
		}
		
		// Acid
		if (this.acidArmor >= 1 && _punch) {
			this.duel.addMessage(this.getName() + " has an acid armor !");
			if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
				this.duel.addMessage(this.duel.getOppOf(this).getName() + " therapy helps !");
				this.duel.getOppOf(this).heal(10);
			}
			else {
				this.duel.getOppOf(this).damage(10, false);
			}
		}

		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm) !");
			this.STRValue += (0 - this.STR) + 10;
			this.doomReverse = 0;
		}
		// Alien PP
		if (this.isAlienPP && _punch) {
			this.duel.getOppOf(this).bleedDamage += 3;
		}
	}

	turnChange() {
		// Clear attaque
		this.attack = "";
		if (!this.attackedThisTurn) {
			this.missedMoves += 1;
			this.duel.getOppOf(this).dexMalus += 5;
		}
		else {
			this.duel.getOppOf(this).dexMalus = 0;
		}
		this.attackedThisTurn = false;

		// Overcircumcised / Perfect Machine / Cybion = immune to status effects
		if (this.isOverCircumcised || this.randomizedStand || this.standPower == STAND_PP12) {
			this.resetBattleVariables()
		}

		// Turkey
		if (this.turkeyCountdown != -1) {
			this.turkeyCountdown -= 1;
			if (this.turkeyCountdown <= 0) {
				this.duel.addMessage(this.getName() + " explodes !");
				this.damage(1000, false);
			}
			else {
				this.duel.addMessage(this.getName() + " has " + this.turkeyCountdown + " turn(s) left !");
			}
			this.duel.addMessage("-----------------");
		}

		// Trap Sign, Examine, SatanPossess etc..
		this.hasBurst -= 1;
		this.hasExamined -= 1;
		this.isPossessed -= 1;
		this.doomReverse -= 1;
		this.acidArmor -= 1;
		this.hasBoomerang -= 1;
		this.turnSkip -= 1;
		this.grabbedPP -= 1;
		this.isLucky -= 1;
		this.summonTankCountdown -= 1;
		this.mikasaBuff -= 1;
		this.bossKiller -= 1;
		this.ironProtection -= 1;
		this.borealSummon -= 1;
		this.requiemCooldown -= 1;
		this.impendingDoom -= 1;

		// Bleed (SawBlade)
		if (this.bleedDamage > 0) {
			this.duel.addMessage(this.getName() + " bleeds !");
			if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
				this.duel.addMessage(this.getName() + " therapy helps !");
				this.heal(this.bleedDamage);
			}
			else {
				if (this.isSalty) {
					this.damage(this.bleedDamage*5, false);
				}
				else {
					this.damage(this.bleedDamage, false);
				}
			}
			this.duel.addMessage("-----------------");
		}
		// Melt
		if (this.meltingDamage > 0) {
			this.duel.addMessage(this.getName() + " melts !");
			if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP2_PRIEST) > -1) {
				this.duel.addMessage(this.getName() + " therapy helps !");
				this.heal(this.meltingDamage);
			}
			else {
				this.damage(this.meltingDamage, false);
			}
			this.duel.addMessage("-----------------");
		}

		// Pig
		if (this.pigHeal > 0) {
			if (this.isCowBoy) {
				this.duel.addMessage(this.getName() + " squeezes hog YEEHAAAAAW !");
				this.heal(this.pigHeal*50);
			}
			else {
				this.duel.addMessage(this.getName() + " squeezes hog !");
				this.heal(this.pigHeal);
			}
			this.duel.addMessage("-----------------");
		}
		
		// Boss Killer
		if (this.bossKiller > 0) {
			this.duel.addMessage(this.getName() + " gets +1 DEX thanks to the Boss Killer Blessing !");
			this.DEXValue += 1;
			this.heal(30);
			this.duel.addMessage("-----------------");
		}
		
		// The Man Who Made a Monster regular move
		if (this.tearDrinker > 0) {
			this.duel.addMessage(this.getName() + " drinks salty tears !");
			this.heal(this.tearDrinker);
			if (this.godList.indexOf(GOD_PP16_PRIEST) > -1 && this.godList.indexOf(GOD_PP18_PRIEST) > -1) {
				this.duel.getOppOf(this).damage(this.tearDrinker);
			}
			this.duel.addMessage("-----------------");
		}
		
		// Boreal Summon
		if (this.borealSummon == 0) {
			this.duel.addMessage(this.getName() + " summons the Boreal World !");
			this.duel.BOREAL_WORLD = true;
			this.duel.addMessage("-----------------");
		}
		// Perfect Machine + Boreal Flame
		if (this.standPower == STAND_PP2 && this.borealSummon < 0 && !this.duel.BOREAL_WORLD) {
			this.borealSummon = 10;
			this.duel.addMessage(this.getName() + " starts summoning the Boreal World !");
		}
		
		// Concepts of Maths
		if (this.standPower == STAND_PP14) {
			this.playMove(EMOTE_PP73);
			this.duel.addMessage("-----------------");
		}
		
		// House of Atreus
		if (this.standPower == STAND_PP15 && this.godList.indexOf(STAND_PP15) < 0) {
			this.godList.push(STAND_PP15);
			if (this.duel.STAND_BATTLE) {
				this.regularCharges = 1;
			}
		}
		
		// Eldritch Pudding
		if (this.tentacles > 0) {
			this.duel.addMessage(this.getName() + " attacks with tentacles !");
			this.duel.getOppOf(this).damage(this.tentacles*10);
			this.duel.addMessage("-----------------");
		}
		
		// Ancient Fongus
		if (this.godList.indexOf(GOD_PP23_PRIEST) > -1) {
			this.eldritchFriend = true;
		}
		
		// Espinoza Waifu Stealer
		if (this.duel.MOVE_COUNT > 10 && this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.duel.getOppOf(this).godList.indexOf(GOD_PP20_PRIEST) > -1) {
			this.duel.addMessage("Espinoza just sniffed Mikasa !");
			this.duel.addMessage("He truly is a waifu stealer !");
			this.duel.getOppOf(this).godList.splice(this.duel.getOppOf(this).godList.indexOf(GOD_PP20_PRIEST), 1);
			this.godList.push(GOD_PP20_PRIEST);
			this.duel.addMessage("-----------------");
		}
		
		// Synergies
		if (this.godList.indexOf(GOD_PP9_PRIEST) > -1 && this.godList.indexOf(GOD_PP11_PRIEST) > -1 && this.godList.indexOf(GOD_PP19_PRIEST) > -1) {
			this.duel.addMessage(this.getName() + " gets healed by the Holy Brenn Trinity !");
			this.heal(10);
			this.duel.addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP5_PRIEST) > -1 && this.godList.indexOf(GOD_PP6_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			this.duel.addMessage(this.getOppName() + " gets hurt by the Unholy Pudding Trinity !");
			this.duel.getOppOf(this).damage(10);
			this.duel.addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP15_PRIEST) > -1 && this.godList.indexOf(GOD_PP12_PRIEST) > -1 && this.godList.indexOf(GOD_PP14_PRIEST) > -1) {
			this.duel.addMessage(this.getName() + " remembers haunting memories...");
			this.playMove(EMOTE_PP42);
			this.duel.addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP11_PRIEST) > -1 && this.godList.indexOf(GOD_PP9_PRIEST) > -1) {
			this.duel.addMessage(this.getName() + " plays garbage music");
			this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s ears starts bleeding");
			this.duel.getOppOf(this).bleedDamage++;
			this.duel.addMessage("-----------------");
		}
		if (this.godList.indexOf(GOD_PP10_PRIEST) > -1 && this.godList.indexOf(GOD_PP8_PRIEST) > -1 && getRandomPercent() <= 10) {
			this.duel.addMessage(this.getName() + "'s Yaoi starts !");
			if (this.duel.GAY_TURNS < 2) {
				this.duel.GAY_TURNS = 0;
			}
			this.duel.GAY_TURNS += 2;
			this.duel.addMessage("-----------------");
		}
		
		if (this.randomizedStand) {
			this.duel.addMessage(this.getName() + " randomizes his ability !");
			this.duel.addMessage("-----------------");
			
			var keys = Object.keys(STAND_SUMMONS);
			this.standPower = keys[ keys.length * Math.random() << 0];
			
			this.guildUser.send("Current Stånd Ability : " + this.standPower);
		}
		
		// PP Armageddon
		if (this.duel.PP_ARMAGEDDON) {
			this.STRValue -= 5000;
		}
		
		// ImpendingDoom
		if (this.impendingDoom == 0) {
			this.duel.addMessage("**" + this.getName() + " cannot escape fate and dies !**");
			if (this.doomReverse > 0) {
				this.duel.addMessage("**" + this.getName() + " uses DOOM-REVERSE(tm) !**");
				this.STRValue += (0 - this.STR) + 10;
				this.doomReverse = 0;
				this.duel.getOppOf(this).impendingDoom = 2;
			}
			else {
				this.extraLife = 0;
				this.STRValue -= this.STR;
			}
			this.duel.addMessage("-----------------");
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
	
	getOppName() {
		if (this.duel.EVENT_BOSS) {
			return this.duel.CURRENT_BOSS;
		}
		return this.duel.getOppOf(this).getName();
	}

	resetBattleVariables() {
		this.bleedDamage = 0;
		this.turnSkip = 0;
		this.grabbedPP = 0;
		this.hasBoner = false;
		this.badLuck = false;
		this.isSalty = false;
		this.meltingDamage = 0;
		this.madnessStacks = 0;
		// TODO keep up to date --> negative effects only
	}
}

class Duel {
	constructor(_easyDuel = false) {
		this.DEAD_DUEL = false;
		this.LIST_MESSAGES = [];
		this.INFINITE_DAMAGE = 0;
		this.TIMESTAMP = +new Date();
		this.LIST_AVAILABLE_ATTACKS = [];
		
		this.FIGHTER1_SAVE = null;
		this.FIGHTER2_SAVE = null;
		
		this.FORCE_EVENT_ID = 0;
		this.EASY_DUEL = _easyDuel;
		this.STAND_BATTLE = false;
		this.TIME_STOP = 0;
		this.TIME_COMPRESSION = 0;
		this.TIME_BREAK = 0;
		
		this.NO_MESSAGE = 0;
		this.MESSAGE_SKIP = 0;
		
		this.UWU_TEXT = false;
		this.GOD_TEXT = 0;
		this.YES_TEXT = 0;
		this.SEXY_TEXT = 0;
		this.RUSSIAN_TEXT = 0;
		this.SPOIL_TEXT = 0;
		this.CHRISTIAN_TEXT = false;
		
		this.MOVE_COUNT = 0;
		this.DAMAGE_COUNT = 0;
		this.MOVE_COUNT_TURN = 0;

		this.ILLEGAL_BOMBING = false;
		this.BOREAL_WORLD = false;
		this.BLIND_COUNTDOWN = 0;
		this.STEEL_PROTECTION = false;
		this.BARREL_DAMAGE = false;
		this.SAVE_LIST = [];
		this.STOPPED_MOVE_LIST = [];
		this.FORCE_EVENT = false;
		this.REVERSE_DAMAGE = -1;
		this.GAY_TURNS = 0;
		this.ILLEGAL_JEWS = false;
		this.ATTACK_MISS_COUNTDOWN = 0;
		this.AUTO_MOVES_COUNTDOWN = 0;
		this.NUCLEAR_BOMB = 0;
		this.PP_NET = 0;
		this.CHECKPOINT_DUEL = null;

		this.PP_ARMAGEDDON = false;
		this.EVENT_PP_ENLIGHTENMENT = false;
		this.EVENT_PP_PURGE = false;
		this.EVENT_CONFUSION = false;
		this.EVENT_BOSS = false;
		this.EVENT_BLOOD_MOON = false;
		this.EVENT_PP_EQUALITY = false;
		this.EVENT_MEGA_POOL = false;

		this.FORCE_PERHAPS = false;
		this.FORCE_SATAN = false;
	}
	startDuel(_message, _alone = false) {
		this.BATTLE_CHANNEL = _message.channel;
		this.GUILD = this.BATTLE_CHANNEL.guild;
		this.TUTORIAL = false;
		
		this.AUDIO_CHANNEL = null;
		this.CURRENT_THEME = null;
		
		this.FIGHTER1 = new Fighter(_message.author.id, this.BATTLE_CHANNEL.id);
		if (!_alone) {
			this.FIGHTER2 = new Fighter(_message.mentions.users.last().id, this.BATTLE_CHANNEL.id);
		}
		else {
			this.FIGHTER2 = new Fighter(CLIENT.user.id, this.BATTLE_CHANNEL.id);
			this.FIGHTER2.STRValue = 100;
		}
		if (this.EASY_DUEL) {
			this.bothFightersAction(function(_fighter) {
				_fighter.godList = [];
			});
		}
		
		if (this.FIGHTER1.guildUser.roles.find(r => r.name == PP_SKIPPER_ROLE) && this.FIGHTER2.guildUser.roles.find(r => r.name == PP_SKIPPER_ROLE)) {
			this.MESSAGE_SKIP = true;
		}

		if (getRandomPercent() < 10) {
			this.addMessage("**TIME FOR A D-D-D-D-D-D-DUEL**");
		}
		else {
			this.addMessage("**TIME FOR A DUEL**");
		}
		
		// Wild Start
		if (getRandomPercent() <= 5) {
			this.addMessage("**===== WILD START =====**");
			this.addMessage("Let's make things a bit more interesting !");
			this.REVERSE_DAMAGE = 1;
			this.NUCLEAR_BOMB = 1;
		}
		// Christian
		if (getRandomPercent() <= 10 && !this.CHRISTIAN_TEXT) {
			this.addMessage("**===== CHRISTIAN GAME =====**");
			this.addMessage("Let's be a bit more friendly for Timmy :)");
			this.CHRISTIAN_TEXT = true;
		}
		
		this.newTurnDuel();
	}
	stopDuel() {
		this.EVENT_BOSS = false;
		this.DEAD_DUEL = true;
		
		this.sendMessages();
		if (this.CHECKPOINT_DUEL != null) return;
		
		this.addMessage("**===== RECAP =====**");
		this.addMessage("**===== CURRENT STATE =====**");
		this.addMessage(this.FIGHTER1.toString());
		this.addMessage("-----------------");
		this.addMessage(this.FIGHTER2.toString());
		this.addMessage("**===== SOME STATS =====**");
		var txt = " - Number of moves : " + this.MOVE_COUNT;
		if (this.MOVE_COUNT == 69) {
			txt += " (lmao)";
		}
		txt += "\n - Number of damages inflicted : " + this.DAMAGE_COUNT;
		if (this.DAMAGE_COUNT == 69) {
			txt += " (lmao)";
		}
		this.addMessage(txt);
		this.sendMessages();
		
		if (this.AUDIO_CHANNEL != null) {
			// TODO play an end theme before leaving ?
			this.AUDIO_CHANNEL.leave();
		}
	}
	startTutorial(_message) {
		this.BATTLE_CHANNEL = _message.channel;
		this.GUILD = this.BATTLE_CHANNEL.guild;
		this.TUTORIAL = true;
		this.NB_TURNS = 0;
		
		this.FIGHTER1 = new Fighter(_message.author.id, this.BATTLE_CHANNEL.id);
		this.FIGHTER1.godList = [];
		this.FIGHTER1.isBigPP = false;
		this.FIGHTER1.isFastPP = true;
		this.FIGHTER1.isDrunkPP = false;
		this.FIGHTER1.isHockeyPuckPP = false;
		this.FIGHTER1.isAlienPP = true;
		

		this.addMessage("**TIME FOR A TUTORIAL**");
		this.addMessage("Welcome to the PP Punch Arena !");
		this.addMessage("First, let me teach you about the fighters !");
		this.addMessage("-----------------");
		this.addMessage(this.FIGHTER1.toString());
		this.addMessage("-----------------");
		this.addMessage("As you can see, there are only 2 stats in the game : **STR** and **DEX**.");
		this.addMessage("**STR** is about how strong you can punch PP. The more you have, the more damages your punches will deal. It's also your **HP**, so don't get it below 0 !");
		this.addMessage("-----------------");
		this.addMessage("**DEX** is about the probability you have to punch. Each turn, each fighter selects a move. Then, there is **DEX** roll : **DEX+[0-50]**. If the results are the same +-10, both fighters use their move. Else, only the one with the higher result do.");
		this.addMessage("When you perform a move, you get -5 DEX stackable effect. It gets back to normal when the opponent plays a move.");
		this.addMessage("-----------------");
		this.addMessage("Each move has specific actions, and only 5 are allowed for 1 turn.");
		this.addMessage("It looks like this :");
		this.sendMessages();
		
		this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction !").then(function (_message2) {
			_message2.react(EMOTE_PP1);
			_message2.react(EMOTE_PP2);
			_message2.react(EMOTE_PP3);
			_message2.react(EMOTE_PP4);
			_message2.react(EMOTE_PP5);
		}).catch(function(e) {console.log(e);});
	}
	tutorialNextTurn() {
		this.NB_TURNS += 1;
		
		if (this.NB_TURNS == 1) {
			this.addMessage("-----------------");
			if ([EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Cheating already ? If this were a real duel, you could have been caught !");
				this.addMessage("Anyway, now you know how to choose a move.");
			}
			else {
				this.addMessage("Now you know how to choose a move. You can also try to cheat by reacting with another emote, but you can get caught cheating.");
			}
			this.addMessage("Let's get back to the fighters.");
			this.addMessage("-----------------");
			this.addMessage(this.FIGHTER1.toString());
			this.addMessage("-----------------");
			this.addMessage("**Fighting styles** are permanent effects you starts with, depending on your choice. Using the '*@PP_Arbitrator custom*' command allows you to choose your fighting styles, using discord roles.");
			this.addMessage("**Status** are effects you get during the battle. Some are good to get, some aren't. Some are permanent, some aren't.");
			this.addMessage("We'll get to **Synergies** later.");
			this.addMessage("-----------------");
			this.addMessage("Here are some moves that grants effects to you and/or the opponent :");
			this.sendMessages();
			
			this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction !").then(function (_message2) {
				_message2.react(EMOTE_PP7);
				_message2.react(EMOTE_PP17);
				_message2.react(EMOTE_PP19);
				_message2.react(EMOTE_PP21);
				_message2.react(EMOTE_PP22);
			}).catch(function(e) {console.log(e);});
		}
		else if (this.NB_TURNS == 2) {
			this.addMessage("-----------------");
			if ([EMOTE_PP7, EMOTE_PP17, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Come on, there's no point cheating, it's the tutorial !");
				this.addMessage("-----------------");
			}
			this.addMessage("Another things you have to learn about are **Gods** !");
			this.addMessage("You can have up to 3 gods when starting a duel. It works the same way as fighting styles, except their use is different.");
			this.addMessage("You can call your **gods** powers using a charge you get with events. There are 2 kind of charges : **regular** and **special**, each calling all your gods **regular** or **special** moves.");
			this.addMessage("There are some **Gods Synergies** that grants permanent effects.");
			this.addMessage("-----------------");
			this.addMessage("Let's say you are a Priest of **700IQ**, **Salt King** and **Brenn**.");
			this.addMessage("I'm gonna give you a charge of each kind. Your gods only appear if you have at least one charge.");
			this.FIGHTER1.godList = [GOD_PP13_PRIEST, GOD_PP18_PRIEST, GOD_PP9_PRIEST];
			this.FIGHTER1.regularCharges = 1;
			this.FIGHTER1.specialCharges = 1;
			this.addMessage("-----------------");
			this.addMessage(this.FIGHTER1.toString());
			this.addMessage("-----------------");
			this.addMessage("It gave you a synergy ! This one makes sure that you can't get below 0 **DEX**.");
			this.addMessage("Here are the moves that allows you to unleash your **Gods** :");
			this.sendMessages();
			
			this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction !").then(function (_message2) {
				_message2.react(EMOTE_PP51);
				_message2.react(EMOTE_PP52);
			}).catch(function(e) {console.log(e);});
		}
		else if (this.NB_TURNS == 3) {
			this.addMessage("-----------------");
			if ([EMOTE_PP51, EMOTE_PP52].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Come on, there's no point cheating, it's the tutorial !");
				this.addMessage("-----------------");
			}
			this.addMessage("One last game mechanic to learn : **Stånds** !");
			this.addMessage("When performing specific move combos, you summon a stånd. This will trigger the **Stånds Battle Mode** and the opponent will get a random stånd.");
			this.addMessage("Your respective **stånds** will replace you in the battle, and the winner of the battle will keep his stånd's powers and get stat buffs. Both fighter are then able to continue the fight.");
			this.addMessage("-----------------");
			this.addMessage("If a stånd uses the **Satan Hand** move while having **10 Quickening Charges**, it will get better stats and a random **Requiem**.");
			this.addMessage("A Requiem is an ability performed using the **god special move**. They are also given to a fighter if he wins the Stånd Battle.");
			this.addMessage("-----------------");
			this.addMessage("Here are some moves specific to stånd battles :");
			this.sendMessages();
			
			this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction !").then(function (_message2) {
				_message2.react(EMOTE_PP67);
				_message2.react(EMOTE_PP68);
				_message2.react(EMOTE_PP69);
				_message2.react(EMOTE_PP73);
				_message2.react(EMOTE_PP74);
			}).catch(function(e) {console.log(e);});
			
		}
		else if (this.NB_TURNS == 4) {
			this.addMessage("-----------------");
			if ([EMOTE_PP67, EMOTE_PP68, EMOTE_PP69, EMOTE_PP73, EMOTE_PP74].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Come on, there's no point cheating, it's the tutorial !");
				this.addMessage("-----------------");
			}
			this.addMessage("Now you know the theory ! The only remaining things to learn are what the moves do in practice.");
			this.addMessage("The **PP Bible** is great for that : https://github.com/brennfeu/pp-bot/wiki/PP-Bible. You can also get a link using the '*@PP_Arbitrator help*' command.");
			this.addMessage("It's way easier and more fun to learn by playing with a friend. Keep the **PP Bible** on one tab to learn about what happens !");
			this.addMessage("-----------------");
			this.addMessage("That's it, the tutorial is over ! Have fun :)");
			this.sendMessages();
			
			this.DEAD_DUEL = true;
		}
		
		this.FIGHTER1.attack = "";
	}
	
	addMessage(_texte, _forceAppear = false) {
		if (this.UWU_TEXT) {
			_texte = changeTextUwu(_texte);
			
			if (this.RUSSIAN_TEXT > 0) {
				_texte = changeTextRussian(_texte);
			}
			if (this.GOD_TEXT > 0) {
				_texte = changeTextRandomCap(_texte);
			}
			if (this.YES_TEXT > 0) {
				_texte = changeTextLeet(_texte);
			}
			if (this.SPOIL_TEXT > 0) {
				_texte = changeTextRandomSpoil(_texte);
			}
		}
		if (this.CHRISTIAN_TEXT) {
			_texte = changeTextChristian(_texte);
		}
		if (this.MESSAGE_SKIP && !_forceAppear) {
			return;
		}
		if (this.LIST_MESSAGES.length > 0 && _texte.length + this.LIST_MESSAGES[this.LIST_MESSAGES.length-1].length + "\n".length < 100) {
			this.LIST_MESSAGES[this.LIST_MESSAGES.length-1] = this.LIST_MESSAGES[this.LIST_MESSAGES.length-1] + "\n" + _texte;
		}
		else {
			this.LIST_MESSAGES.push(_texte);
		}
	}
	sendMessages(_max = 20) {
		var counter = 0;
		this.TIMESTAMP = + new Date();
		
		if (this.NO_MESSAGE <= 0 || this.TIME_STOP > 0) {
			if (this.LIST_MESSAGES.length + 2 > _max) {
				while (this.LIST_MESSAGES.length > _max) {
					this.LIST_MESSAGES.splice(0, 1);
					counter += 1;
				}
			}

			if (counter > 0) {
				this.LIST_MESSAGES = ["**-----------------\n" + counter + " messages were cancelled !\n-----------------**"].concat(this.LIST_MESSAGES);
			}
			for (var i in this.LIST_MESSAGES) {
				this.BATTLE_CHANNEL.send(this.LIST_MESSAGES[i]);
			}	
		}
		this.LIST_MESSAGES = [];
	}
	
	newTurnDuel() {
		this.sendMessages();
		this.TIME_STOP -= 1;
		
		if (this.TIME_STOP <= 0  && getRandomPercent() <= this.TIME_BREAK) {
			this.addMessage("**Time breaks !**");
			this.TIME_STOP = 1;
		}
		
		if (this.TIME_STOP > 0) {
			this.STOPPED_MOVE_LIST = this.LIST_AVAILABLE_ATTACKS;
			this.FIGHTER1.attack = "";
			this.FIGHTER2.attack = "";
		}
		else {
			var nbTurnChanges = 1;
			if (this.TIME_COMPRESSION > 0) {
				nbTurnChanges = 3;
			}
			
			this.TIME_COMPRESSION -= 1;
			
			for (var nbTurn = 0; nbTurn < nbTurnChanges; nbTurn++) {
				this.addMessage("**===== TURN CHANGE =====**");
				
				this.NO_MESSAGE -= 1;
				this.GOD_TEXT -= 1;
				this.YES_TEXT -= 1;
				this.SEXY_TEXT -= 1;
				this.RUSSIAN_TEXT -= 1;
				this.SPOIL_TEXT -= 1;
				
				this.bothFightersAction(function(_fighter) {
					if (_fighter.pushedDamages > 0) {
						_fighter.damage(_fighter.pushedDamages, false);
						_fighter.pushedDamages = 0;
						_fighter.duel.addMessage("-----------------");
					}
				});
				
				this.NUCLEAR_BOMB -= 1;
				if (this.NUCLEAR_BOMB == 0) {
					this.addMessage("The Nuclear Bomb explodes now !\n" + IMAGE_PP1);
					this.bothFightersAction(function(_fighter) {
						_fighter.damage(1000000000);
					});
					this.sendMessages();
				}

				// Blood Moon Save
				if (this.EVENT_BLOOD_MOON) {
					this.bothFightersAction(function(_fighter) {
						if (_fighter.STR <= 0) {
							_fighter.DEXValue += (0 - _fighter.STR) + 10;
							_fighter.STRValue += (0 - _fighter.STR) + 10;
							_fighter.duel.addMessage(_fighter.getName() + " got saved thanks to the Blood Moon");
						}
					});
				}

				// Cthulhu
				if (this.EVENT_BOSS) {
					var espinozaBoss = false;
					if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP1) {
						this.addMessage(this.CURRENT_BOSS + " goes back to sleep to heal his poor PP !");
						this.addMessage("You both win !");
						this.bothFightersAction(function(_fighter) {
							addWinCounter(_fighter, 1);
						});
						this.EVENT_BOSS = false;
						return this.stopDuel();
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP2) {
						this.addMessage(this.CURRENT_BOSS + " will now stop making updates for some time !");
						this.addMessage("-----------------");
						this.EVENT_BOSS = false;
						espinozaBoss = getRandomPercent() <= 20;
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP3) {
						this.addMessage(this.CURRENT_BOSS + " goes back hiding behind the moon !");
						this.addMessage("You both win !");
						this.bothFightersAction(function(_fighter) {
							addWinCounter(_fighter, 1);
						});
						this.EVENT_BOSS = false;

						var role = this.GUILD.roles.find(r => r.name == PP_EXPERT_ROLE);
						try {
							this.bothFightersAction(function(_fighter) {
								_fighter.guildUser.addRole(role).catch(console.error);
							});
							this.addMessage("**You are now PP Experts.**");
							this.addMessage("**You have gained access to the eldritch gods.**");
						}
						catch(e) {
							this.addMessage("This server doesn't have the 'PP Expert' roles, sorry :/");
						}

						return this.stopDuel();
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP4) {
						this.addMessage(this.CURRENT_BOSS + " will leave you alone for a bit !");
						this.addMessage("-----------------");
						this.EVENT_BOSS = false;
						if (this.PP_NET == 3 || this.PP_NET == 4) {
							this.FORCE_EVENT_ID = 29;
						} 
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP5) {
						this.addMessage(this.CURRENT_BOSS + " is destroyed !");
						this.addMessage("-----------------");
						this.EVENT_BOSS = false;
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP6) {
						this.addMessage(this.CURRENT_BOSS + " is destroyed !");
						this.addMessage("PP-Net is shut down ! Long live the human PPs !");
						this.addMessage("-----------------");
						this.addMessage("As you read the changelog, you see that a PP Terminator has been sent to the past to kill the past you !");
						this.addMessage("-----------------");
						this.addMessage("**ANOTHER TIME, ANOTHER PLACE**");
						this.addMessage("-----------------");
						this.addMessage(this.FIGHTER1.getName() + " : *'I challenge you to a PP Punch duel !'*");
						this.addMessage(this.FIGHTER2.getName() + " : *'Alright, let's do this !'*");
						this.addMessage(this.FIGHTER1.getName() + " : *'Wait what is this thing ?'*");
						this.addMessage("-----------------");
						this.sendMessages();

						this.FIGHTER1_SAVE = this.FIGHTER1;
						this.FIGHTER2_SAVE = this.FIGHTER2;
						this.FIGHTER1 = new Fighter(this.FIGHTER1.idUser, this.BATTLE_CHANNEL.id);
						this.FIGHTER2 = new Fighter(this.FIGHTER2.idUser, this.BATTLE_CHANNEL.id);

						this.CURRENT_BOSS = BOSS_PP7;
						this.BOSS_HEALTH = 1500;
						this.BOSS_DAMAGE = 25;
						this.EVENT_BOSS = true;
						this.PP_NET = -99999;
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP7) {
						this.addMessage(this.CURRENT_BOSS + " is destroyed !");
						this.addMessage("-----------------");
						this.addMessage("**ANOTHER TIME, ANOTHER PLACE**");
						this.addMessage("-----------------");
						this.sendMessages();

						this.FIGHTER1 = this.FIGHTER1_SAVE;
						this.FIGHTER2 = this.FIGHTER2_SAVE;

						this.PP_NET = 200;
						this.EVENT_BOSS = false;
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP8) {
						this.addMessage("**" + this.CURRENT_BOSS + " summons his true form !**");
						this.addMessage("-----------------");
						this.CURRENT_BOSS = BOSS_PP9;
						this.BOSS_HEALTH = 100000000;
						this.BOSS_DAMAGE = 100000;
						this.EVENT_BOSS = true;
						
						espinozaBoss = getRandomPercent() <= 20;
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP9) {
						this.addMessage(this.CURRENT_BOSS + " is sent back to his Eldritch Realm !");
						this.addMessage("You both win !");
						this.bothFightersAction(function(_fighter) {
							addWinCounter(_fighter, 1);
						});
						this.EVENT_BOSS = false;
						return this.stopDuel();
					}
					else if (this.BOSS_HEALTH <= 0 && this.CURRENT_BOSS == BOSS_PP10) {
						this.addMessage(this.CURRENT_BOSS + " abandons !");
						this.EVENT_BOSS = false;
						
						espinozaBoss = getRandomPercent() <= 20;
					}
					if (espinozaBoss) {
						this.addMessage(this.CURRENT_BOSS + " was only a mimic !");
						this.addMessage(this.CURRENT_BOSS + " is in fact " + BOSS_PP10 + "\n" + IMAGE_PP4);
						this.addMessage("-----------------");
						this.CURRENT_BOSS = BOSS_PP10;
						this.BOSS_HEALTH = 1000000;
						this.BOSS_DAMAGE = 1000;
						this.EVENT_BOSS = true;
					}
					if (this.EVENT_BOSS) {
						var fighter = this.getRandomFighter();
						this.addMessage(fighter.getName() + " gets attacked by " + this.CURRENT_BOSS + " !");
						if (this.EVENT_BLOOD_MOON && this.CURRENT_BOSS == BOSS_PP3) { // Blood Moon / Moon Lord
							var amount = this.BOSS_DAMAGE*3;
						}
						else {
							var amount = this.BOSS_DAMAGE;
						}
						fighter.damage(amount, false);
						
						if (this.CURRENT_BOSS == BOSS_PP8 || this.CURRENT_BOSS == BOSS_PP9) {
							this.addMessage("The satanic energy from the attack makes him possess " + this.getOppOf(fighter).getName() + " !");
							this.getOppOf(fighter).isPossessed = 2;
						}
						
						this.addMessage("-----------------");
					}
				}

				this.bothFightersAction(function(_fighter) {
					_fighter.turnChange();
				});
				this.bothFightersAction(function(_fighter) {
					// Overcircumcised = immune to status effects
					if (_fighter.isOverCircumcised) {
						_fighter.resetBattleVariables()
					}
				});
				
				this.checkDeath();
				if (this.DEAD_DUEL) return;

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
				this.MOVE_COUNT_TURN = 0;

				// Reset events
				this.EVENT_PP_ENLIGHTENMENT = false;
				this.EVENT_PP_PURGE = false;
				this.EVENT_CONFUSION = false;
				this.EVENT_BLOOD_MOON = false;
				this.EVENT_PP_EQUALITY = false;
				
				if (nbTurn+1 < nbTurnChanges) {
					this.sendMessages();
				}

				if (!this.EASY_DUEL) {
					this.addMessage("**===== EVENTS =====**");
					this.startRandomEvent();
				}
			}
			this.sendMessages();
		}
		
		this.checkDeath();
		if (this.DEAD_DUEL) return;
		
		this.addMessage("\n\n**===== NEW TURN =====**", true);
		this.sendMessages();

		this.addMessage("**=== FIGHTERS ===**", true);
		if (!this.EVENT_BOSS) {
			this.addMessage(this.FIGHTER1.toString(), true);
			this.addMessage("**===== /VS/ =====**", true);
			this.addMessage(this.FIGHTER2.toString(), true);
		}
		else {
			this.addMessage(this.FIGHTER1.toString(), true);
			this.addMessage("-----------------", true);
			this.addMessage(this.FIGHTER2.toString(), true);
			this.addMessage("**===== /VS/ =====**", true);
			this.addMessage("**" + this.CURRENT_BOSS + "**\n**STR :** " + this.BOSS_HEALTH, true);
		}

		var txt = "**=== GLOBAL STATUS ===**\n";
		if (this.CHECKPOINT_DUEL != null) {
			txt += " - **Saved State**\n";
		}
		if (this.BLIND_COUNTDOWN > 0) {
			txt += " - WTF I'M FUCKING BLIND !";
			if (this.BLIND_COUNTDOWN < 100) {
				txt += " (for " + this.BLIND_COUNTDOWN + " turns)";
			}
			txt += "\n"
		}
		if (this.REVERSE_DAMAGE > 0) {
			txt += " - Damages and heals are reversed for " + this.REVERSE_DAMAGE + " turns !\n";
		}
		if (this.GAY_TURNS > 0) {
			txt += " - You are both gay for " + this.GAY_TURNS + " turns !\n";
		}
		if (this.ATTACK_MISS_COUNTDOWN > 0) {
			txt += " - Attacks are twice as powerful for " + this.ATTACK_MISS_COUNTDOWN + " turns !\n";
		}
		if (this.AUTO_MOVES_COUNTDOWN > 0) {
			txt += " - Both fighters always play for " + this.AUTO_MOVES_COUNTDOWN + " turns !\n";
		}
		if (this.NUCLEAR_BOMB > 0) {
			txt += " - The Nuclear Bomb will explode in " + this.NUCLEAR_BOMB + " turns !\n";
		}
		if (this.FORCE_EVENT) {
			txt += " - Events will occur every turns !\n";
		}
		if (this.ILLEGAL_JEWS) {
			txt += " - Jew Priests are illegal !\n";
		}
		if (this.EVENT_BLOOD_MOON) {
			txt += " - The Blood Moon is up in the sky !\n";
		}
		if (this.EVENT_PP_ENLIGHTENMENT) {
			txt += " - You can use moves that aren't in this turn's movepool !\n";
		}
		if (this.EVENT_PP_PURGE) {
			txt += " - Illegal moves are legal for this turn !\n";
		}
		if (this.EVENT_PP_EQUALITY) {
			txt += " - Moves have no DEX modifier for this turn !\n";
		}
		if (this.BOREAL_WORLD) {
			txt += " - Boreal Fog is everywhere !\n";
		}
		if (this.PP_NET > 0 && this.PP_NET < 200) {
			txt += " - PP-Net Rising : Step " + this.PP_NET + "\n";
		}
		if (this.PP_ARMAGEDDON) {
			txt += " - **PP ARMAGEDDON**\n";
		}
		if (this.TIME_STOP > 0) {
			txt += " - **TIME STOPPED FOR " + this.TIME_STOP + " TURNS**\n";
		}
		else if (this.TIME_COMPRESSION > 0) {
			txt += " - **TIME COMPRESSED FOR " + this.TIME_COMPRESSION + " TURNS**\n";
		}
		if (this.TIME_BREAK > 0) {
			txt += " - **TIME BREAKING PROBABILITY : " + this.TIME_BREAK + "%**\n";
		}
		txt = txt.slice(0, -1);
		this.addMessage(txt);

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

		this.addMessage("**=== MOVE SELECT ===**", true);
		this.sendMessages();
		this.BATTLE_CHANNEL.send("\n\nChoose your " + gay + "attack with a reaction !").then(function (_message2) {
			var duel = getDuel(_message2.channel.id);
			for (var i in duel.LIST_AVAILABLE_ATTACKS) {
				if (duel.LIST_AVAILABLE_ATTACKS[i] != EMOTE_DEAD && duel.LIST_AVAILABLE_ATTACKS[i] != EMOTE_SKIP) {
					_message2.react(duel.LIST_AVAILABLE_ATTACKS[i]);
				}
			}
		}).catch(function(e) {
			// LEVEL ALREADY DEAD
		});

		this.bothFightersAction(function(_fighter) {
			if (_fighter.STR <= 0) { // Stop if dead (cthulhu battle)
				_fighter.attack = EMOTE_DEAD;
				_fighter.STRValue = -10;
			}
			if (_fighter.duel.TIME_STOP > 0 && _fighter.requiemPower == null && _fighter.godList.indexOf(GOD_PP24_PRIEST) < 0) { // if weak --> skip time skip
				_fighter.attack = EMOTE_SKIP;
			}
		});
		
		// SET MUSIC
		if (this.GAY_TURNS > 0) {
			this.setMusic(MUSIC_PP4); // Huge Gay Night
		}
		else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP1) {
			this.setMusic(MUSIC_PP5); // Lovecraftian Strain 911
		}
		else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP2) {
			this.setMusic(MUSIC_PP6); // Gaseous Punk
		}
		else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP3) {
			this.setMusic(MUSIC_PP7); // Anomaly-B
		}
		else if (this.EVENT_BOSS && (this.CURRENT_BOSS == BOSS_PP4 || this.CURRENT_BOSS == BOSS_PP5)) {
			this.setMusic(MUSIC_PP8); // Brennijov Von Truffle Intro
		}
		else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP6) {
			this.setMusic(MUSIC_PP9); // Brennijov Von Truffle
		}
		else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP7) {
			this.setMusic(MUSIC_PP10); // Brennijov Von Truffle Outro
		}
		else if (this.PP_ARMAGEDDON) {
			this.setMusic(MUSIC_PP3); // Psychodios
		}
		else if (this.FIGHTER1.livingGod || this.FIGHTER2.livingGod) {
			this.setMusic(MUSIC_PP2); // Ascend
		}
		else {
			this.setMusic(MUSIC_PP1); // Silence
		}
		
		if ((this.FIGHTER1.turnSkip > 0 || this.FIGHTER1.grabbedPP > 0 || this.FIGHTER1.summonTankCountdown == 1 || this.FIGHTER1.isPossessed > 0) && 
		    (this.FIGHTER2.turnSkip > 0 || this.FIGHTER2.grabbedPP > 0 || this.FIGHTER2.summonTankCountdown == 1 || this.FIGHTER2.isPossessed > 0)) {
			this.bothFightersAction(function(_fighter) {
				if (_fighter.summonTankCountdown == 1) {
					_fighter.playMove(EMOTE_PP10);
				}
				if (_fighter.grabbedPP == 1) {
					_fighter.playMove(EMOTE_PP39);
				}
			});
			this.newTurnDuel();
		}
		
		if (this.FIGHTER2.user.id == CLIENT.user.id) {
			this.botReacts();
		}
		
		// Stop FORCE_SATAN
		if (getRandomPercent() <= 25) {
			this.FORCE_SATAN = false;
		}
	}
	
	checkDeath() {
		this.bothFightersAction(function(_fighter) {
			if (_fighter.duel.getOppOf(_fighter).standPower == STAND_PP10 && _fighter.STR <= _fighter.DEX) {
				_fighter.duel.addMessage(_fighter.getName() + " is cursed by Illud Divinum Insanus !");
				_fighter.duel.addMessage(_fighter.getName() + " dies !");
				_fighter.STRValue -= _fighter.STR+100;
			}
		});
		this.bothFightersAction(function(_fighter) {
			if (_fighter.STR <= 0 && _fighter.extraLife > 0) {
				_fighter.duel.addMessage(_fighter.getName() + " uses an extra life !");
				var extra = _fighter.extraLife - 1;
				var stand = null;

				if (_fighter.standPower == STAND_PP8_1) {
					stand = STAND_PP8_2;
				}
				if (_fighter.standPower == STAND_PP8_2) {
					stand = STAND_PP8_1;
				}

				if (_fighter.idUser == _fighter.duel.FIGHTER1.idUser) {
					if (_fighter.extraLifeDuplication != null) {
						_fighter.duel.FIGHTER1 = _fighter.extraLifeDuplication;
						_fighter.duel.addMessage(_fighter.getName() + "'s temporal duplication replaces him !");
					}
					else {
						_fighter.duel.FIGHTER1 = new Fighter(_fighter.duel.FIGHTER1.idUser, _fighter.duel.BATTLE_CHANNEL.id, stand);
					}
					_fighter.duel.FIGHTER1.extraLife = extra;
					_fighter.duel.FIGHTER1.attack = "";
				}
				else {
					if (_fighter.extraLifeDuplication != null) {
						_fighter.duel.FIGHTER2 = _fighter.extraLifeDuplication;
						_fighter.duel.addMessage(_fighter.getName() + "'s temporal duplication replaces him !");
					}
					else {
						_fighter.duel.FIGHTER2 = new Fighter(_fighter.duel.FIGHTER2.idUser, _fighter.duel.BATTLE_CHANNEL.id, stand);
					}
					_fighter.duel.FIGHTER2.extraLife = extra;
					_fighter.duel.FIGHTER1.attack = "";
				}
			}
		});
		if (this.STAND_BATTLE && !(this.FIGHTER1.STR > 0 && this.FIGHTER2.STR > 0)) {
			if (this.FIGHTER1.STR <= 0) {
				this.FIGHTER2_SAVE.quickeningCharges += 10;
				this.addMessage("**" + this.FIGHTER1.getName() + " has been defeated !**");

				if (this.FIGHTER1.standPower == STAND_PP3) {
					this.playMove(EMOTE_PP47);
				}
				if (this.FIGHTER2.standPower == STAND_PP3) {
					this.playMove(EMOTE_PP58);
				}
			}
			if (this.FIGHTER2.STR <= 0) {
				this.FIGHTER1_SAVE.quickeningCharges += 10;
				this.addMessage("**" + this.FIGHTER2.getName() + " has been defeated !**");

				if (this.FIGHTER2.standPower == STAND_PP3) {
					this.playMove(EMOTE_PP47);
				}
				if (this.FIGHTER1.standPower == STAND_PP3) {
					this.playMove(EMOTE_PP58);
				}
			}
			if (this.FIGHTER1.STR > 0) {
				this.FIGHTER1_SAVE.standPower = this.FIGHTER1.standPower;
				this.FIGHTER1_SAVE.requiemPower = this.FIGHTER1.requiemPower;
				this.FIGHTER1_SAVE.randomizedStand = this.FIGHTER1.randomizedStand;
			}
			if (this.FIGHTER2.STR > 0) {
				this.FIGHTER2_SAVE.standPower = this.FIGHTER2.standPower;
				this.FIGHTER2_SAVE.requiemPower = this.FIGHTER2.requiemPower;
				this.FIGHTER2_SAVE.randomizedStand = this.FIGHTER2.randomizedStand;
			}

			this.STAND_BATTLE = false;
			this.FIGHTER1 = this.FIGHTER1_SAVE;
			this.FIGHTER2 = this.FIGHTER2_SAVE;

			this.bothFightersAction(function(_fighter) {
				_fighter.attack = "";
				_fighter.currentStand = null;
			});
		}

		if (this.FIGHTER1.STR <= 0 && this.FIGHTER2.STR <= 0) {
			this.addMessage("Both of you lost. No one won this time. You losers.");
			this.stopDuel();
			return;
		}
		this.bothFightersAction(function(_fighter) {
			if (_fighter.STR <= 0 && !_fighter.duel.EVENT_BOSS) {
				_fighter.duel.addMessage(_fighter.duel.getOppOf(_fighter).getName() + " won ! Congrats !");
				_fighter.duel.getOppOf(_fighter).win();
				_fighter.duel.stopDuel();
			};
		});
	}
	
	startRandomEvent() {
		var randomVar = getRandomPercent();
		var forcedEvent = this.FORCE_EVENT;

		if (this.FORCE_EVENT) {
			while (!(randomVar <= 36 && randomVar >= 2)) {
				randomVar = getRandomPercent();
			}
		}
		
		if (this.MOVE_COUNT >= 10000) {
			// Heat death of the universe
			this.addMessage(" -- HEAT DEATH OF THE UNIVERSE --");
			this.addMessage("*You punched PP so much, the world collapses. Good job ! You don’t get to go to work tomorrow. Or school. Or anything else. You wanna know why ? Well... you see... YOU FUCKED IT ALL UP !!!*\n" + IMAGE_PP2);
			this.stopDuel();
			for (var i in DUEL_LIST) {
				if (DUEL_LIST[i].BATTLE_CHANNEL.id != this.BATTLE_CHANNEL.id) {
					DUEL_LIST[i].addMessage(" -- HEAT DEATH OF THE UNIVERSE --");
					DUEL_LIST[i].addMessage("*The Universe suddenly collapses.*\n" + IMAGE_PP2);
					DUEL_LIST[i].MOVE_COUNT = 1000000;
					DUEL_LIST[i].stopDuel();
				}
			}
			return;
		}
		if (!this.PP_ARMAGEDDON && this.MOVE_COUNT >= 100) {
			// PP ARMAGEDDON
			this.PP_ARMAGEDDON = true;
			this.addMessage(" -- PP ARMAGEDDON --");
			this.addMessage("PPs have ascended, the end is near !");
			
			if (this.FORCE_EVENT_ID == 0) {
				this.sendMessages();
				return;
			}
		}
		
		if (this.FORCE_EVENT_ID != 0) {
			randomVar = this.FORCE_EVENT_ID;
			this.FORCE_EVENT_ID = 0;
			forcedEvent = true;
		}

		if (randomVar == 2) {
			// PP Enlightenment
			this.EVENT_PP_ENLIGHTENMENT = true;
			this.addMessage(" -- PP ENLIGHTENMENT --");
			this.addMessage("Your PP temporarily become enlightened. All moves can now be used for this turn. \nIllegal moves are still illegal.");
		}
		else if (randomVar == 3) {
			// PP Purge
			this.EVENT_PP_PURGE = true;
			this.addMessage(" -- PP PURGE --");
			this.addMessage("All PPs grow a mohawk and start to roam the streets. \nIllegal moves can now be used freely but the judge can still see you if you use unavailable moves");
		}
		else if (randomVar == 4) {
			// Sexually Confused
			this.EVENT_CONFUSION = true;
			this.addMessage(" -- SEXUAL CONFUSION --");
			this.addMessage("Your PPs are confused for this turn.");
		}
		else if (randomVar == 5 && (this.MOVE_COUNT >= 30 || forcedEvent)) {
			// Cthulhu
			if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP1) {
				this.addMessage(" -- MOON LORD AWAKENS --");
				this.addMessage("Cthulhu is blessed by the moonlight !");
				this.addMessage("The Moon Lord has been summoned and takes control over Cthulhu's body !");
				this.CURRENT_BOSS = BOSS_PP3;
				this.BOSS_HEALTH = 500000;
				this.BOSS_DAMAGE = 200;
			}
			else if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP3) {
				this.addMessage(" -- MOON LORD REGENERATION --");
				this.addMessage("The Moon Lord gets 500 000 more health !");
				this.BOSS_HEALTH += 500000;
			}
			else if (this.EVENT_BOSS) {
				this.addMessage(" -- CTHULHU SLEEPS --");
				this.addMessage("And nothing happens at all...");
			}
			else {
				this.addMessage(" -- CTHULHU AWAKENS --");
				this.EVENT_BOSS = true;
				this.addMessage("You have to beat Cthulhu by punching his huge PP in order to save the world !");
				this.BOSS_HEALTH = 10000;
				this.BOSS_DAMAGE = 50;
				this.CURRENT_BOSS = BOSS_PP1;
			}
		}
		else if (randomVar == 6 && (this.MOVE_COUNT >= 30 || forcedEvent)) {
			// Accidental Summoning
			this.addMessage(" -- ACCIDENTAL SUMMONING --");
			var winner = this.getRandomFighter();
			this.addMessage(winner.getName() + " accidentaly plays Psychodiös on his phone and it summons Satan and the Ancient Fongus !");
			this.sendMessages();
			winner.playMove(EMOTE_PP26);
			winner.playMove(EMOTE_PP46);
		}
		else if (randomVar == 7) {
			// Blood Moon
			this.EVENT_BLOOD_MOON = true;
			this.addMessage(" -- BLOOD MOON --");
			this.addMessage("If someone dies this turn, STR automatically stays at 10 but the remaining damages goes positive in the DEX.");
			this.bothFightersAction(function(_fighter) {
				if (_fighter.STR <= 0) {
					_fighter.DEXValue += (0 - _fighter.STR) + 10;
					_fighter.STRValue += (0 - _fighter.STR) + 10;
					_fighter.duel.addMessage(_fighter.getName() + " got saved thanks to the Blood Moon");
				}
			});
			if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP3) {
				this.addMessage("The Moon Lord is blessed by the Blood Moon.");
			}
		}
		else if (randomVar == 8) {
			// Ascension
			this.addMessage(" -- ASCENSION --");
			var winner = this.getRandomFighter();
			this.addMessage(winner.getName() + " accidentaly plays Ascend on his phone !");
			this.bothFightersAction(function(_fighter) {
				_fighter.playMove(EMOTE_PP49);
			});
		}
		else if ([9, 10, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(randomVar) > -1) {
			// Charge
			this.addMessage(" -- GODS BIRTHDAY GIFTS --");
			if (this.STAND_BATTLE) {
				this.addMessage("Stånds are unaffected.");
			}
			else {
				this.addMessage("Gods decide to give you a regular charge each");
				this.bothFightersAction(function(_fighter) {
					_fighter.regularCharges++;
				});
			}
		}
		else if ([19, 20, 21].indexOf(randomVar) > -1) {
			// Charge
			this.addMessage(" -- GODS CHRISTMAS GIFTS --");
			if (this.STAND_BATTLE) {
				this.addMessage("Stånds are unaffected.");
			}
			else {
				this.addMessage("Gods decide to give you a special charge each");
				this.bothFightersAction(function(_fighter) {
					_fighter.specialCharges++;
				});
			}
		}
		else if (randomVar == 22) {
			// Huge Gay Night
			this.addMessage(" -- HUGE GAY NIGHT --");
			if (this.GAY_TURNS > 0) {
				this.GAY_TURNS += 10;
				this.addMessage("Your gayness increase by 10 turns !");
			}
			else {
				this.GAY_TURNS = 1;
				this.addMessage("You suddenly become gay for this turn !");
			}

		}
		else if (randomVar == 23 && (this.MOVE_COUNT >= 30 || forcedEvent)) {
			// PP Blessing
			this.addMessage(" -- PP BLESSING --");
			if (this.STAND_BATTLE) {
				this.addMessage("Stånds are unaffected.");
			}
			else {
				this.addMessage("You suddenly feel new powers in your PP !");
				this.bothFightersAction(function(_fighter) {
					_fighter.godList = PRIEST_ROLES.concat(ELDRITCH_PRIEST_ROLES);

					_fighter.isBigPP = true;
					_fighter.isFastPP = true;
					_fighter.isDrunkPP = true;
					_fighter.isHockeyPuckPP = true;
					_fighter.isAlienPP = true;
				});
			}
		}
		else if ([24, 25].indexOf(randomVar) > -1) {
			// Free Lives
			if (this.EVENT_BOSS) {
				this.addMessage(" -- FREE LIVES GOOD UPDATES --");
				this.addMessage("Let's NOT riot Free Lives HQ.");
				if (this.CURRENT_BOSS == BOSS_PP2) {
					this.EVENT_BOSS = false;
					this.BOSS_HEALTH = 0;
					this.BOSS_DAMAGE = 0;
				}
			}
			else {
				this.EVENT_BOSS = true;
				this.addMessage(" -- FREE LIVES RIOT --");
				this.addMessage("Let's riot Free Lives HQ just for fun !");
				this.BOSS_HEALTH = 500;
				this.BOSS_DAMAGE = 20;
				this.CURRENT_BOSS = BOSS_PP2;
			}
		}
		else if (randomVar == 26) {
			// Tragedy
			this.addMessage(" -- TRAGEDY --");
			if (getRandomPercent() <= 50) {
				var winner = this.getRandomFighter();

				this.addMessage("apolgy for bad english");
				this.addMessage("where were u wen club pp die");
				this.addMessage(winner.getName() + " was at house eating dorito when phone ring");
				this.addMessage(this.getOppOf(winner).getName() + ' : "Club pp is kil"');
				this.addMessage(winner.getName() + ' : *"no"*');
			}
			else {
				var brennUwu = CLIENT.emojis.get("655449555873038337");
				var mikasa = CLIENT.emojis.get("655523518812913664");
				var espinoza = CLIENT.emojis.get("615887132157804564");
				var rageBrenn = CLIENT.emojis.get("668946953681502248");
				
				this.addMessage("*Dispair in IV acts.*");
				this.sendMessages();
				this.BATTLE_CHANNEL.send(`${brennUwu} ${mikasa}`);
				this.BATTLE_CHANNEL.send(`${brennUwu} ${mikasa} ${espinoza}`);
				this.BATTLE_CHANNEL.send(`${brennUwu}`);
				this.BATTLE_CHANNEL.send(`${rageBrenn}`);
			}
			this.addMessage("-----------------");
			this.addMessage("You both take your turn to recover from this tragedy !");
			
			this.bothFightersAction(function(_fighter) {
				_fighter.attack = EMOTE_SKIP;
			});
		}
		else if ([27, 28, 29, 30, 31].indexOf(randomVar) > -1) {
			// PP-Net
			this.PP_NET += 1;
			if (this.PP_NET == 1) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("A new military AI has been created.");
				this.addMessage("Its name : PP-Net.");
			}
			else if (this.PP_NET == 2) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("Rumors are saying PP-Net is growing sentient... and is doing more than it should be doing.");
				this.addMessage("The PP Police has been replaced with robots.");
			}
			else if (this.PP_NET == 3) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("PP Punching is now considered 'illegal' because 'it is too dangerous'. This is dumb.");
				this.addMessage("Let's continue the duel, but no weird move. I don't wanna go in prison.");
			}
			else if (this.PP_NET == 4) {
				this.addMessage(" -- FBI OPEN UP --");
				this.addMessage("An illegal PP Punch duel has been spotted !");
				this.addMessage("Surrender or die !");
				if (this.EVENT_BOSS && this.BOSS_HEALTH > 0) {
					this.addMessage(this.CURRENT_BOSS + " surrenders !");
				}
				this.EVENT_BOSS = true;
				this.BOSS_HEALTH = 750;
				this.BOSS_DAMAGE = 30;
				this.CURRENT_BOSS = BOSS_PP4;
			}
			else if (this.PP_NET == 5) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("Humans are getting hunted down by the PP Police !");
				this.addMessage("The PP Rebellion will get its revenge !");
				this.EVENT_BOSS = true;
				this.BOSS_HEALTH = 2000;
				this.BOSS_DAMAGE = 30;
				this.CURRENT_BOSS = BOSS_PP4;
			}
			else if (this.PP_NET == 6) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("New robots have been created to hunt us down, and suck our precious PP !");
				this.addMessage("We have to hunt them down !");
				if (this.EVENT_BOSS && this.BOSS_HEALTH > 0) {
					this.addMessage(this.CURRENT_BOSS + "'s PP gets harvested !");
					this.addMessage(this.CURRENT_BOSS + " dies !");
				}
				this.EVENT_BOSS = true;
				this.BOSS_HEALTH = 1500;
				this.BOSS_DAMAGE = 50;
				this.CURRENT_BOSS = BOSS_PP5;
			}
			else if (this.PP_NET == 7) {
				this.addMessage(" -- PP REBELLION RISING --");
				this.addMessage("The rebellion has prepared a serum that makes your PP faster and stronger !");
				this.addMessage("You both get 200 STR and 200 DEX !");
				this.bothFightersAction(function(_fighter) {
					_fighter.STRValue += 200;
					_fighter.DEXValue += 200;
				});
			}
			else if (this.PP_NET == 8) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("The PP-Net Hive-Mind is challenging you !");
				if (this.EVENT_BOSS && this.BOSS_HEALTH > 0) {
					this.addMessage(this.CURRENT_BOSS + "'s PP gets harvested !");
					this.addMessage(this.CURRENT_BOSS + " dies !");
				}
				this.EVENT_BOSS = true;
				this.BOSS_HEALTH = 20000;
				this.BOSS_DAMAGE = 100;
				this.CURRENT_BOSS = BOSS_PP6;
			}
			else if (this.PP_NET < 0) {
				this.addMessage(" -- PP-NET RISING --");
				this.addMessage("You better destroy the PP Terminator if you don't want the PP Rebellion to be without you !");
			}
			else {
				this.addMessage(" -- PP REBELLION RISING --");
				this.addMessage("The rebellion gives you another shot of the serum !");
				this.addMessage("You both get 200 STR and 200 DEX !");
				this.bothFightersAction(function(_fighter) {
					_fighter.STRValue += 200;
					_fighter.DEXValue += 200;
				});
				this.PP_NET -= 1;
			}
		}
		else if (randomVar == 32) {
			// Day of the PP Equality
			this.addMessage(" -- DAY OF THE PP EQUALITY --");
			this.addMessage("Today is Day of the PP Equality ! There is no DEX modifier for moves for this turn !");
			this.EVENT_PP_EQUALITY = true;
		}
		else if (randomVar == 33 && (this.MOVE_COUNT >= 1000 || forcedEvent)) {
			// Eldritch Gate
			this.addMessage(" -- ELDRITCH GATE --");
			if (this.EVENT_BOSS && this.CURRENT_BOSS == BOSS_PP8) {
				this.addMessage("The Eldritch Gate grows bigger ! " + BOSS_PP8 + " gets more power !");
				this.BOSS_HEALTH += 500000;
				this.BOSS_DAMAGE += 1000;
			}
			else {
				this.addMessage("The Eldritch Gate has been opened ! " + BOSS_PP8 + " faces you !");
				if (this.EVENT_BOSS) {
					this.addMessage("He destroys " + this.CURRENT_BOSS + " just to show off");
				}
				this.EVENT_BOSS = true;
				this.BOSS_HEALTH = 500000;
				this.BOSS_DAMAGE = 1000;
				this.CURRENT_BOSS = BOSS_PP8;
			}
		}
		else if (randomVar == 34 && (this.MOVE_COUNT >= 100 || forcedEvent)) {
			// Ascension Requiem
			this.addMessage(" -- ASCENSION REQUIEM --");
			var winner = this.getRandomFighter();
			this.addMessage(winner.getName() + " accidentaly plays Ascend [EarRape Version] 20k Subscribers Special on his phone !");
			this.bothFightersAction(function(_fighter) {
				_fighter.quickeningCharges += 10;
				_fighter.playMove(EMOTE_PP77);
			});
			this.STAND_BATTLE = true;
			
		}
		else if (randomVar == 35 && !this.STAND_BATTLE) {
			// BIZARRE PP
			this.addMessage(" -- BIZARRE PP BATTLE --");
			this.bothFightersAction(function(_fighter) {
				var liste = Object.keys(STAND_SUMMONS);
				_fighter.currentStand = liste[Math.floor(Math.random()*liste.length)];
				_fighter.duel.addMessage(_fighter.getName() + " summons the Stånd : " + _fighter.currentStand);
			});
		}
		else if (randomVar == 36) {
			// Mega Movepool
			this.addMessage(" -- MEGA MOVEPOOL --");
			this.addMessage("You get blessed by the gods and get an extended movepool for this turn !");
			this.EVENT_MEGA_POOL = true;
		}
		else if (randomVar == 90 && (this.MOVE_COUNT >= 50 || forcedEvent)) {
			// Brenn Ejaculates
			this.addMessage(" -- BRENN EJACULATES --");
			this.addMessage("For some reasons, this summons every event !");
			var idList = shuffleArray([2, 3, 4, 6, 7, 8, 9, 19, 22, 23, 26, 32, 34, 35, 36]);
			for (var i = 0; i < idList.length; i++) {
				this.FORCE_EVENT_ID = idList[i];
				this.startRandomEvent();
			}
		}
		else {
			this.addMessage("No event this turn...");
		}
	}
	triggerReaction(_emote, _user) {
		if (this.EASY_DUEL && this.LIST_AVAILABLE_ATTACKS.indexOf(this.getAttackFromEmote(_emote)) < 0) {
			return;
		}
		
		// Save Me Move
		if (this.getAttackFromEmote(_emote) == EMOTE_PP31 && this.SAVE_LIST.indexOf(_user.id) < 0 && !_user.bot) {
			this.SAVE_LIST.push(_user.id);
			this.addMessage(_user.username + " helps the fighters !");
			this.sendMessages();
			this.bothFightersAction(function(_fighter) {
				_fighter.heal(50);
			});
		}

		// Assigne attaque
		this.bothFightersAction(function(_fighter) {
			var duel = _fighter.duel
			
			if (_fighter.duel.TIME_STOP > 0 && _fighter.requiemPower == null && _fighter.godList.indexOf(GOD_PP24_PRIEST) < 0) { // if weak --> skip time skip
				return;
			}
			if (_fighter.attack == EMOTE_DEAD || _fighter.attack == EMOTE_SKIP) { // no choice
				return;
			}
			
			// GAY_TURNS
			if (duel.GAY_TURNS > 0 && duel.TIME_STOP <= 0) {
				if (_user.id == _fighter.user.id) {
					if (duel.LIST_AVAILABLE_ATTACKS.indexOf(duel.getAttackFromEmote(_emote)) < 0) {
						duel.addMessage("Gay people can't cheat...");
						return duel.sendMessages();
					}
					else {
						duel.getOppOf(_fighter).attack = duel.getAttackFromEmote(_emote);
						duel.addMessage(duel.getOppOf(_fighter).getName() + " : " + _emote, true);
						duel.sendMessages();
					}
				}
			}
			else if (_user.id == _fighter.user.id && _fighter.isPossessed <= 0 && _fighter.turnSkip <= 0 && _fighter.grabbedPP <= 0 && _fighter.summonTankCountdown != 1) {
				_fighter.attack = duel.getAttackFromEmote(_emote);
				duel.addMessage(_fighter.getName() + " : " + _emote, true);
				duel.sendMessages();

				// Possession
				if (duel.getOppOf(_fighter).isPossessed >= 1) {
					duel.getOppOf(_fighter).attack = duel.getAttackFromEmote(_emote);
					duel.addMessage(duel.getOppOf(_fighter).getName() + " : " + _emote, true);
					duel.sendMessages();
				}
			}
		});
		
		if (this.FIGHTER1.attack != "" && this.TUTORIAL) {
			return this.tutorialNextTurn();
		}

		// Deux attaques sont faites
		if (this.FIGHTER1.attack != "" && this.FIGHTER2.attack != "") {
			this.launchAttacks();
		}
		
		this.sendMessages();
	}
	botReacts() {
		if (this.FIGHTER2.user.id != CLIENT.user.id) return;
		var i = 0;
		var fighter = this.FIGHTER2;
		
		if (this.AUTO_MOVES_COUNTDOWN <= 0 && !fighter.legAimer && (this.GAY_TURNS > 0 || (this.getOppOf(fighter).isPossessed > 0 && this.getOppOf(fighter).DEX > this.DEX))) {
			var dumbMoves = [EMOTE_PP47, EMOTE_PP9, EMOTE_PP41, EMOTE_PP50];
			for (i = 0; i < dumbMoves.length; i++) { // opponent plays garbage moves
				if (this.LIST_AVAILABLE_ATTACKS.indexOf(dumbMoves[i]) > -1) {
					return this.triggerReaction(CLIENT.emojis.get(dumbMoves[i]).name, fighter.user);
				}
			}
			return this.triggerReaction(CLIENT.emojis.get(this.LIST_AVAILABLE_ATTACKS[Math.floor(Math.random()*this.LIST_AVAILABLE_ATTACKS.length)]).name, this.FIGHTER2.user);
		}
		
		if (fighter.STR < this.getOppOf(fighter).STR && fighter.DEX < this.getOppOf(fighter).DEX && this.getOppOf(fighter).isPossessed > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP5) > -1) {
			// High Five
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP5).name, fighter.user);
		}
		for (i in STAND_SUMMONS) {
			var check = true;
			for (var j in STAND_SUMMONS[i]) {
				if (STAND_SUMMONS[i][j] != fighter.usedMoves[fighter.usedMoves.length-j-1] && j != STAND_SUMMONS[i].length-1) {
					check = false;
				}
			}
			if (check && this.LIST_AVAILABLE_ATTACKS.indexOf(STAND_SUMMONS[i][STAND_SUMMONS[i].length-1]) > -1) {
				// Summon Stand
				return this.triggerReaction(CLIENT.emojis.get(STAND_SUMMONS[i][STAND_SUMMONS[i].length-1]).name, fighter.user);
			}
		}
		if (fighter.DEX + 30 < this.getOppOf(fighter).DEX && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP8) > -1) {
			// Trap
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP8).name, fighter.user);
		}
		
		for (i = 0; i < RARE_EMOTE_LIST.length; i++) { // Rare Moves
			if (this.LIST_AVAILABLE_ATTACKS.indexOf(RARE_EMOTE_LIST[i]) > -1) {
				return this.triggerReaction(CLIENT.emojis.get(RARE_EMOTE_LIST[i]).name, fighter.user);
			}
		}
		for (i = 0; i < GOD_LIST.length; i++) { // God
			if (this.LIST_AVAILABLE_ATTACKS.indexOf(GOD_LIST[i]) > -1) {
				return this.triggerReaction(CLIENT.emojis.get(GOD_LIST[i]).name, fighter.user);
			}
		}
		for (i = 0; i < SPECIAL_EMOTE_LIST.length; i++) { // Animated Moves
			if (this.LIST_AVAILABLE_ATTACKS.indexOf(SPECIAL_EMOTE_LIST[i]) > -1) {
				return this.triggerReaction(CLIENT.emojis.get(SPECIAL_EMOTE_LIST[i]).name, fighter.user);
			}
		}
		if (fighter.specialCharges > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP52) > -1) {
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP52).name, fighter.user); // God Special Moves
		}
		if (fighter.regularCharges > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP51) > -1) {
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP51).name, fighter.user); // God Regular Moves
		}
		for (i = 0; i < EMOTE_LIST.length; i++) { // If blind --> Illegal
			if ((this.BLIND_COUNTDOWN > 0 || this.TIME_STOP > 0 || fighter.trueBarbarian) && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_LIST[i]) > -1 &&
			    this.getRisk(EMOTE_LIST[i]) > 0) {
				return this.triggerReaction(CLIENT.emojis.get(EMOTE_LIST[i]).name, fighter.user);
			}
		}
		
		if (fighter.DEX + 30 < this.getOppOf(fighter).DEX && this.BLIND_COUNTDOWN > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP32) > -1) {
			// High Five Emote
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP32).name, fighter.user);
		}
		if (!(fighter.godList.indexOf(GOD_PP15_PRIEST) > -1 && fighter.godList.indexOf(GOD_PP2_PRIEST) > -1) && fighter.bleedDamage * 5 > fighter.STR && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP12) > -1) {
			// Overcircumcise
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP12).name, fighter.user);
		}
		if (!(fighter.godList.indexOf(GOD_PP15_PRIEST) > -1 && fighter.godList.indexOf(GOD_PP2_PRIEST) > -1) && fighter.bleedDamage * 5 > fighter.STR && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP22) > -1) {
			// Circumcise
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP22).name, fighter.user);
		}
		if (fighter.STR < this.getOppOf(fighter).STR && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP24) > -1) {
			// Knockback
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP24).name, fighter.user);
		}
		if (this.getRisk(fighter.oldAttack) > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP30) > -1) {
			// Alert
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP30).name, fighter.user);
		}
		if (fighter.DEX + this.getDexChange(EMOTE_PP3) > this.getOppOf(fighter).DEX && this.getOppOf(fighter).STR < 1500 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP3) > -1) {
			// Hologram
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP3).name, fighter.user);
		}
		if (fighter.DEX + this.getDexChange(EMOTE_PP4) > this.getOppOf(fighter).DEX && fighter.STR < 500 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP4) > -1) {
			// Flex
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP4).name, fighter.user);
		}
		if (fighter.STR < 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP7) > -1) {
			// Turkey
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP7).name, fighter.user);
		}
		if (fighter.STR < 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP31) > -1) {
			// Save Me Sign
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP31).name, fighter.user);
		}
		
		if (fighter.DEX + 30 < this.getOppOf(fighter).DEX && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP68) > -1) {
			// Mech
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP68).name, fighter.user);
		}
		if (fighter.STR > this.getOppOf(fighter).STR * 2 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP74) > -1) {
			// Sword
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP74).name, fighter.user);
		}
		if (this.getRisk(fighter.oldAttack) == EMOTE_PP69 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP69) > -1) {
			// LostSoul
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP69).name, fighter.user);
		}
		if (fighter.STR > this.getOppOf(fighter).STR + 30 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP74) > -1) {
			// Sword
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP74).name, fighter.user);
		}
		
		if (this.MOVE_COUNT > 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP46) > -1) {
			// YES
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP46).name, fighter.user);
		}
		if (this.MOVE_COUNT > 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP26) > -1) {
			// BigSatan
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP26).name, fighter.user);
		}
		
		if (this.quickeningCharges >= 10 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP77) > -1) {
			// Satan Hand
			return this.triggerReaction(CLIENT.emojis.get(EMOTE_PP77).name, fighter.user);
		}
		
		var emote = this.LIST_AVAILABLE_ATTACKS[Math.floor(Math.random()*this.LIST_AVAILABLE_ATTACKS.length)];
		var dont = [EMOTE_PP9, EMOTE_PP10, EMOTE_PP25, EMOTE_PP38, EMOTE_PP40, EMOTE_PP41, EMOTE_PP47, EMOTE_PP50,
			    EMOTE_PP51, EMOTE_PP52];
		
		if (fighter.STR > 1000) {
			// Turkey
			dont.push(EMOTE_PP7);
		}
		if (this.BLIND_COUNTDOWN <= 0) {
			// High Five Emote
			dont.push(EMOTE_PP32);
		}
		if (fighter.STR < 50) {
			// Headless
			dont.push(EMOTE_PP33);
		}
		if (fighter.STR < 25) {
			// Disembowled
			dont.push(EMOTE_PP37);
		}
		if (fighter.godList.indexOf(GOD_PP15_PRIEST) > -1 && fighter.godList.indexOf(GOD_PP2_PRIEST) > -1) {
			// Therapy --> (Over)Curcumcise
			dont.push(EMOTE_PP22);
			dont.push(EMOTE_PP12);
		}
		if (fighter.STR/10 > this.getOppOf(fighter).missedMoves*50) {
			// LaughSoul
			dont.push(EMOTE_PP23);
		}
		if (fighter.isOverCurcumcised) {
			// Overcircumcised
			dont.push(EMOTE_PP12);
		}
		if (fighter.isCurcumcised) {
			// Circumcised
			dont.push(EMOTE_PP22);
		}
		if (fighter.STR > this.getOppOf(fighter).STR) {
			// Knockback
			dont.push(EMOTE_PP24);
		}
		if (this.BLIND_COUNTDOWN > 100) {
			// Facehugged
			dont.push(EMOTE_PP35);
		}
		if (!fighter.isTerrorist) {
			// Explosion
			dont.push(EMOTE_PP36);
		}
		else {
			// Kamikaze
			dont.push(EMOTE_PP44);
		}
		if (fighter.riotShield) {
			// RiotShield
			dont.push(EMOTE_PP17);
		}
		if (fighter.isBigPP && fighter.isFastPP && fighter.isAlienPP && fighter.isDrunkPP && fighter.isHockeyPuckPP) {
			// Perhaps
			dont.slice(dont.indexOf(EMOTE_PP50), 1);
		}
		if (this.quickeningCharges < 10) {
			// Satan Hand
			dont.push(EMOTE_PP77);
		}
		
		if (dont.indexOf(fighter.oldAttack) > -1) {
			// Alert
			dont.push(EMOTE_PP30);
		}
		for (i = 0; i < EMOTE_LIST.length; i++) {
			if (fighter.DEX + this.getDexChange(EMOTE_LIST[i]) + 20 < this.getOppOf(fighter).DEX) {
				// No move with shitty DEX
				dont.push(EMOTE_LIST[i]);
			}
			else if (this.getRisk(EMOTE_LIST[i]) > 0) {
				// No illegal move
				dont.push(EMOTE_LIST[i]);
			}
		}
		
		var nbTries = 0;
		while (dont.indexOf(emote) > -1 && nbTries < 100) {
			emote = this.LIST_AVAILABLE_ATTACKS[Math.floor(Math.random()*this.LIST_AVAILABLE_ATTACKS.length)];
			nbTries += 1;
		}
		
		this.triggerReaction(CLIENT.emojis.get(emote).name, this.FIGHTER2.user);
	}
	launchAttacks() {
		this.addMessage("\n\n**===== ATTACKS =====**");

		this.bothFightersAction(function(_fighter) {
			_fighter.usedMoves.push(_fighter.attack);
			
			if (_fighter.turnSkip > 0) {
				_fighter.attack = EMOTE_PP50;
			}
			if (_fighter.grabbedPP > 0) {
				_fighter.attack = EMOTE_PP39;
			}
			if (_fighter.summonTankCountdown == 1) {
				_fighter.attack = EMOTE_PP10;
			}
			// Si ajout, ne pas oublier d'autoriser dans tests illegaux
		});

		// test illegal
		this.bothFightersAction(function(_fighter) {
			var duel = _fighter.duel;
			if (duel.DEAD_DUEL) return;
			
			var caught1 = false;
			
			// Illegalité
			if (duel.illegalGetCaught(duel.getRisk(_fighter.attack)) || (_fighter.badLuck && duel.getRisk(_fighter.attack) > 0)) {
				caught1 = true;
			}

			// Move non autorisé (movepool)
			if (duel.LIST_AVAILABLE_ATTACKS.indexOf(_fighter.attack) < 0 && 
			    !(_fighter.attack == EMOTE_DEAD) &&
			    !(_fighter.attack == EMOTE_SKIP) &&
			    !(_fighter.attack == EMOTE_PP50 && _fighter.turnSkip) && 
			    !(_fighter.attack == EMOTE_PP39 && _fighter.grabbedPP) && 
			    !(_fighter.attack == EMOTE_PP10 && _fighter.summonTankCountdown == 1)) {
				caught1 = caught1 || (duel.illegalGetCaught(50) && !duel.EVENT_PP_ENLIGHTENMENT) && !_fighter.badLuck;
			}

			// Tricher les charges
			if (_fighter.attack == EMOTE_PP51 && _fighter.regularCharges <= 0 && duel.illegalGetCaught(80) && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = true;
			}
			if (_fighter.attack == EMOTE_PP52 && _fighter.specialCharges <= 0 && duel.illegalGetCaught(95) && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = true;
			}

			// Triche des emotes animés
			if (SPECIAL_EMOTE_LIST.indexOf(_fighter.attack) > -1 && duel.LIST_AVAILABLE_ATTACKS.indexOf(_fighter.attack) < 0 && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = duel.illegalGetCaught(100);
			}

			// Illegal Jews (Hitler regular move)
			if (duel.ILLEGAL_JEWS && _fighter.godList.indexOf(GOD_PP7_PRIEST) > -1 && duel.illegalGetCaught(20)) {
				duel.addMessage("Wait, I think " + _fighter.getName() + " is a jew !");
				duel.sendMessages();
				caught1 = true;
			}

			// Lucky (Leprepuds regular move)
			if (_fighter.isLucky && getRandomPercent() <= 50) {
				caught1 = false;
			}

			// True Barbarian from the North (Mongo special move)
			if (_fighter.trueBarbarian && _fighter.STR >= 100 && caught1) {
				caught1 = false;
				duel.addMessage(_fighter.getName() + " strong. " + _fighter.getName() + " punch arbitratory if arbitratory bad.");
				duel.sendMessages();
			}

			// Caught cheating --> test si malus dex
			if (caught1 && (getRandomPercent() >= 33 || _fighter.godList.indexOf(GOD_PP16_PRIEST) > -1 && _fighter.godList.indexOf(GOD_PP13_PRIEST) > -1)) {
				duel.addMessage(_fighter.getName() + " is doing illegal stuff ! He loses 20 DEX and 10 STR.");
				duel.sendMessages();
				_fighter.STRValue -= 10;
				_fighter.DEXValue -= 20;
				_fighter.attack = EMOTE_SKIP;
				caught1 = false;
			}
			else if (caught1) {
				duel.addMessage("WAIT " + _fighter.getName().toUpperCase() + " IS DOING ILLEGAL STUFF RIGHT NOW !");
				duel.addMessage(_fighter.getName() + " is disqualified for being a dumb shit.");
				_fighter.playMove(EMOTE_PP47);
				duel.sendMessages();

				addWinCounter(_fighter, -1);
				duel.stopDuel();
			}
		});
		if (this.DEAD_DUEL) return;

		this.bothFightersAction(function(_fighter) {
			// Jew Hitler Paradox
			if (_fighter.godList.indexOf(GOD_PP7_PRIEST) > -1 && _fighter.godList.indexOf(GOD_PP17_PRIEST) > -1 && getRandomPercent() <= 10) {
				_fighter.duel.addMessage(_fighter.getName() + " gets the Jew-Hitler Paradox Effect !");
				_fighter.duel.sendMessages();
				_fighter.attack = _fighter.duel.getRandomEmote(false);
			}

			// Change attack if dead (boss battle)
			if (_fighter.STR <= 0) {
				_fighter.attack = EMOTE_DEAD;
			}
		});

		// ATTAQUES
		var dexAttack1 = this.FIGHTER1.DEX + this.getDexChange(this.FIGHTER1.attack) + Math.floor(Math.random() * 50 + 1);
		var dexAttack2 = this.FIGHTER2.DEX + this.getDexChange(this.FIGHTER2.attack) + Math.floor(Math.random() * 50 + 1);
		this.addMessage(this.FIGHTER1.getName() + " : " + dexAttack1 + " /VS/ " + this.FIGHTER2.getName() + " : " + dexAttack2);
		this.sendMessages();

		if (this.FIGHTER1.attack == EMOTE_PP5 && this.FIGHTER2.attack == EMOTE_PP5) {
			// HIGH FIVES :D
			this.addMessage("Wow, look at those bros !");
			this.addMessage("That was some good high five.");
			this.addMessage("Okay, the fight ends now !");
			this.addMessage("I'm literally shaking and crying right now.");
			this.addMessage("This is so beautiful...");
			this.addMessage("I love you all.");
			this.sendMessages();
			this.stopDuel();
			return;
		}

		// ExclamationPoint
		this.bothFightersAction(function(_fighter) {
			if (_fighter.attack == EMOTE_PP30) {
				_fighter.attack = _fighter.oldAttack;
			}
			else {
				_fighter.oldAttack = _fighter.attack;
			}
		});
		
		// Steel
		if (this.FIGHTER1.attack == EMOTE_PP11 || this.FIGHTER2.attack == EMOTE_PP11) {
			this.STEEL_PROTECTION = true;
		}
		// Barrel
		if (this.FIGHTER1.attack == EMOTE_PP29 || this.FIGHTER2.attack == EMOTE_PP29) {
			this.BARREL_DAMAGE = true;
		}

		var winner = this.FIGHTER2;
		if (dexAttack1 > dexAttack2) {
			winner = this.FIGHTER1;
		}
		
		var priorityMoves = [EMOTE_PP15, EMOTE_PP29, EMOTE_PP11]; // Hobro / Steel / Barrel
		
		if ((dexAttack1 - dexAttack2 <= 10 && dexAttack1 - dexAttack2 >= -10) || 
		    this.AUTO_MOVES_COUNTDOWN > 0 || this.EVENT_BOSS || this.getOppOf(winner).legAimer ||
		    this.TIME_STOP > 0) {
			this.addMessage("Both opponents attack this turn !");
			this.sendMessages();
			
			if (priorityMoves.indexOf(this.getOppOf(winner)) > -1) {
				winner = this.getOppOf(winner);
			}
			if (priorityMoves.indexOf(this.getOppOf(winner)) > -1) {
				winner = this.getOppOf(winner);
			}

			this.bothFightersAction(function(_fighter) {
				_fighter.duel.addMessage("-----------------");
				_fighter.playMove();
				_fighter.duel.sendMessages();
				
				if (_fighter.duel.getOppOf(_fighter).attack == EMOTE_PP8) { // Burst
					_fighter.duel.addMessage(_fighter.duel.getOppOf(_fighter).getName() + " burst !");
					_fighter.duel.sendMessages();
					_fighter.hasBurst = 2;
				}
				if (_fighter.standPower == STAND_PP7 && _fighter.attack == _fighter.duel.getOppOf(_fighter).attack) { // Parallel Minds
					_fighter.duel.addMessage("-----------------");
					_fighter.heal(15);
					_fighter.duel.addMessage(_fighter.getName() + " gets 5 DEX !");
					_fighter.DEXValue += 5;
				}
			}, winner);
		}
		else {
			// Priority automatic moves
			if (priorityMoves.indexOf(this.getOppOf(winner).attack) > -1) {
				this.getOppOf(winner).playMove();
			}

			this.addMessage(winner.getName() + " uses his move !");
			this.sendMessages();
			winner.playMove();

			// Burst
			if (this.getOppOf(winner).attack == EMOTE_PP8) {
				this.addMessage(this.getOppOf(winner).getName() + " burst !");
				winner.hasBurst = 2;
			}

			// Scout
			if (this.getOppOf(winner).attack == EMOTE_PP13) {
				this.getOppOf(winner).playMove();
			}
			// Intimidates
			if (this.getOppOf(winner).attack == EMOTE_PP28 && getRandomPercent() <= 25) {
				this.getOppOf(winner).playMove();
			}
			// High Five Emote
			if (this.getOppOf(winner).attack == EMOTE_PP32 && this.BLIND_COUNTDOWN > 0) {
				this.getOppOf(winner).playMove();
			}
			// Mech
			if (this.getOppOf(winner).attack == EMOTE_PP68) {
				this.addMessage(winner.getName() + " triggers " + this.getOppOf(winner).getName() + "'s Mech !");
				this.addMessage(this.getOppOf(winner).getName() + " shoots !");
				winner.damage(30);
			}
			// Requiem
			if (this.getOppOf(winner).attack == EMOTE_PP52 && this.getOppOf(winner).requiemPower != null) {
				this.getOppOf(winner).playMove();
			}
			
			// Dual Loop
			if (this.getOppOf(winner).attack == EMOTE_PP55) {
				this.getOppOf(winner).playMove();
			}
		}
		if (this.MOVE_COUNT_TURN >= 500) {
			this.sendMessages(1);
		}
		this.sendMessages();
		if (!this.EASY_DUEL) {
			this.checkStandSummon();
		}
		this.newTurnDuel();
	}
	
	checkStandSummon() {
		if (!this.STAND_BATTLE) {
			this.bothFightersAction(function(_fighter) {
				var check = false;
				for (var i in STAND_SUMMONS) {
					check = true;
					for (var j in STAND_SUMMONS[i]) {
						if (STAND_SUMMONS[i][j] != _fighter.usedMoves[_fighter.usedMoves.length-j-1]) {
							check = false;
						}
					}
					if (check) {
						_fighter.duel.addMessage("-----------------");
						_fighter.duel.addMessage(_fighter.getName() + " summons the Stånd : " + i);
						_fighter.currentStand = i;
						return;
					}
				}
			});
			this.sendMessages();

			if (this.FIGHTER1.currentStand != null && this.FIGHTER2.currentStand != null) {
				this.addMessage("**===== STAND BATTLE MODE =====**");
				this.addMessage("Both fighters already have summoned their Stånd.");
			}
			else if (this.FIGHTER1.currentStand != null || this.FIGHTER2.currentStand != null) {
				this.addMessage("**===== STAND BATTLE MODE =====**");
				this.bothFightersAction(function(_fighter) {
					if (_fighter.currentStand == null) {
						var liste = Object.keys(STAND_SUMMONS);
						_fighter.currentStand = liste[Math.floor(Math.random()*liste.length)];
						_fighter.duel.addMessage(_fighter.getName() + " summons the Stånd : " + _fighter.currentStand);
					}
					else {
						_fighter.duel.addMessage(_fighter.getName() + " already have summoned the Stånd : " + _fighter.currentStand);
					}
				});
			}
			else {
				return;
			}
			
			this.STAND_BATTLE = true;
			this.FIGHTER1_SAVE = this.FIGHTER1;
			this.FIGHTER2_SAVE = this.FIGHTER2;
			this.FIGHTER1 = new Fighter(this.FIGHTER1.idUser, this.BATTLE_CHANNEL.id, this.FIGHTER1.currentStand);
			this.FIGHTER2 = new Fighter(this.FIGHTER2.idUser, this.BATTLE_CHANNEL.id, this.FIGHTER2.currentStand);
		}
		this.sendMessages();
	}
	
	setRandomAttackList() {
		var listeAttaques = [];
		var emote;

		if (this.EVENT_CONFUSION) {
			return this.LIST_AVAILABLE_ATTACKS = [EMOTE_PP39];
		}
		if (this.EVENT_MEGA_POOL) {
			while (listeAttaques.length < 20) {
				emote = EMOTE_LIST[Math.floor(Math.random()*EMOTE_LIST.length)];
				if (listeAttaques.indexOf(emote) < 0) {
					listeAttaques.push(emote);
				}
			}
			this.LIST_AVAILABLE_ATTACKS = listeAttaques;
			return this.EVENT_MEGA_POOL = false
		}
		if (this.FORCE_PERHAPS) {
			this.LIST_AVAILABLE_ATTACKS = [EMOTE_PP50];
			return this.FORCE_PERHAPS = false;
		}
		if (this.FORCE_SATAN) {
			return this.LIST_AVAILABLE_ATTACKS = [EMOTE_PP26];
		}
		if (this.STAND_BATTLE) {
			while (listeAttaques.length < 5) {
				emote = this.getRandomEmote();
				if (listeAttaques.indexOf(emote) < 0) {
					listeAttaques.push(emote);
				}
			}
		}
		else {
			// Attaque 1
			if (this.MOVE_COUNT == 0 && getRandomPercent() <= 33) {
				listeAttaques.push(EMOTE_PP81); // Melodia
			}
			else if (getRandomPercent() > 20) {
				emote = this.getRandomEmote();
				listeAttaques.push(emote);
			}
			else {
				listeAttaques.push(EMOTE_PP1);
			}
			
			// Attaque 2
			emote = this.getRandomEmote();
			if (getRandomPercent() > 20 && listeAttaques.indexOf(emote) < 0) {
				listeAttaques.push(emote);
			}
			else {
				emote = EMOTE_PP2;
				while (listeAttaques.length < 2) {
					if (listeAttaques.indexOf(emote) < 0) {
						listeAttaques.push(emote);
					}
					emote = this.getRandomEmote();
				}
			}
			// Attaque 3
			emote = this.getRandomEmote();
			if (getRandomPercent() > 20 && listeAttaques.indexOf(emote) < 0) {
				listeAttaques.push(emote);
			}
			else {
				emote = EMOTE_PP3;
				while (listeAttaques.length < 3) {
					if (listeAttaques.indexOf(emote) < 0) {
						listeAttaques.push(emote);
					}
					emote = this.getRandomEmote();
				}
			}
			// Attaque 4
			emote = this.getRandomEmote();
			if (getRandomPercent() > 20 && listeAttaques.indexOf(emote) < 0) {
				listeAttaques.push(emote);
			}
			else {
				emote = EMOTE_PP4;
				while (listeAttaques.length < 4) {
					if (listeAttaques.indexOf(emote) < 0) {
						listeAttaques.push(emote);
					}
					emote = this.getRandomEmote();
				}
			}
			// Attaque 5
			emote = this.getRandomEmote();
			if (getRandomPercent() > 20 && listeAttaques.indexOf(emote) < 0) {
				listeAttaques.push(emote);
			}
			else {
				emote = EMOTE_PP5;
				while (listeAttaques.length < 5) {
					if (listeAttaques.indexOf(emote) < 0) {
						listeAttaques.push(emote);
					}
					emote = this.getRandomEmote();
				}
			}
		}
		
		if (this.FIGHTER1.regularCharges > 0 || this.FIGHTER2.regularCharges > 0) {
			listeAttaques.push(EMOTE_PP51);
		}
		if (this.FIGHTER1.specialCharges > 0 || this.FIGHTER2.specialCharges > 0 || 
		    (this.FIGHTER1.requiemPower != null && this.FIGHTER1.requiemCountdown <= 0) ||
		    (this.FIGHTER2.requiemPower != null && this.FIGHTER2.requiemCountdown <= 0)) {
			listeAttaques.push(EMOTE_PP52);
		}

		this.LIST_AVAILABLE_ATTACKS = listeAttaques;
	}
	getRandomEmote(_canBeIllegal = true) {
		var legalList = [];
		var illegalList = [];
		var goodList = [];
		
		for (var i in NORMAL_EMOTE_LIST) {
			if ([EMOTE_PP36, EMOTE_PP47].indexOf(NORMAL_EMOTE_LIST[i]) < 0) {
				if (this.getRisk(NORMAL_EMOTE_LIST[i]) == 0) {
					legalList.push(NORMAL_EMOTE_LIST[i]);
				}
				illegalList.push(NORMAL_EMOTE_LIST[i]);
			}
		}
		
		if (_canBeIllegal) {
			goodList = illegalList;
		}
		else {
			goodList = legalList;
		}

		if (this.ILLEGAL_BOMBING) {
			goodList.push(EMOTE_PP36);
		}
		if (!this.DISABLE_ABANDON) {
			goodList.push(EMOTE_PP47);
		}
		if (this.PP_ARMAGEDDON || getRandomPercent() <= 3) {
			goodList = goodList.concat(SPECIAL_EMOTE_LIST);
		}
		if (this.PP_NET == 3 || this.EASY_DUEL) {
			goodList = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP4, EMOTE_PP5, EMOTE_PP8, EMOTE_PP12, EMOTE_PP13,
				EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22, EMOTE_PP30, EMOTE_PP31,
				EMOTE_PP39, EMOTE_PP42, EMOTE_PP45];
		}
		if (this.STAND_BATTLE) {
			goodList = STAND_EMOTE_LIST;
		}
		if (getRandomPercent() <= 3) {
			goodList = goodList.concat(RARE_EMOTE_LIST);
		}
		if (goodList.indexOf(EMOTE_PP77) > -1 && (this.FIGHTER1.quickeningCharges < 10 || this.FIGHTER2.quickeningCharges < 10)) {
			// Satan Hand
			goodList = goodList.splice(goodList.indexOf(EMOTE_PP77), 1);
		}

		return goodList[Math.floor(Math.random()*goodList.length)];
	}
	getAttackFromEmote(_emote) {
		for (var i in EMOTE_LIST) {
			if (_emote == CLIENT.emojis.get(EMOTE_LIST[i]).name) {
				return EMOTE_LIST[i];
			}
		}
		for (var i in GOD_LIST) {
			if (_emote.name == CLIENT.emojis.get(GOD_LIST[i]).name) {
				return GOD_LIST[i];
			}
		}
		return EMOTE_SKIP;
	}
	
	illegalGetCaught(_percentage) {
		if (this.BLIND_COUNTDOWN > 0 || this.TIME_STOP > 0) {
			return false;
		}
		return (getRandomPercent() < _percentage);
	}
	getRisk(_move) {
		if (this.EVENT_PP_PURGE) {
			return 0;
		}
		switch(_move) {
			case EMOTE_PP6:
				return 30;
			case EMOTE_PP10:
				return 80;
			case EMOTE_PP23:
				return 20;
			case EMOTE_PP25:
				return 60;
			case EMOTE_PP43:
				return 15;
			case EMOTE_PP44:
				return 40;
			case EMOTE_PP46:
				return 10;
			case EMOTE_PP49:
				return 98;
		}
		return 0;
	}
	getDexChange(_move) {
		if (this.EVENT_PP_EQUALITY) {
			return 0;
		}
		switch(_move) {
			case EMOTE_PP3:
				return -40;
			case EMOTE_PP26:
			case EMOTE_PP17:
			case EMOTE_PP4:
			case EMOTE_PP46:
			case EMOTE_PP78:
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
	
	bothFightersAction(_function, _firstFighter = this.getRandomFighter()) {
		if (this.TUTORIAL) {
			return _function(_firstFighter);
		}
		
		_function(_firstFighter);
		_function(this.getOppOf(_firstFighter));
	}
	getRandomFighter() {
		if (this.TUTORIAL) {
			return this.FIGHTER1;
		}
		
		if (getRandomPercent() <= 50) {
			return this.FIGHTER1;
		}
		return this.FIGHTER2;
	}
	
	getOpponentOf(_fighter) {
		if (this.TUTORIAL) {
			return this.FIGHTER1;
		}
		
		if (this.FIGHTER1.user.id == _fighter.user.id) {
			return this.FIGHTER2;
		}
		return this.FIGHTER1;
	}
	getOppOf(_fighter) {
		return this.getOpponentOf(_fighter);
	}
	
	setMusic(_music) {
		if (this.FIGHTER1.guildUser.voiceChannel) {
  			this.AUDIO_CHANNEL = this.FIGHTER1.guildUser.voiceChannel;
		}
		else if (this.FIGHTER2.guildUser.voiceChannel) {
  			this.AUDIO_CHANNEL = this.FIGHTER2.guildUser.voiceChannel;
		}
		else {
			if (this.AUDIO_CHANNEL != null) {
				this.AUDIO_CHANNEL.leave();
			}
			this.AUDIO_CHANNEL = null;
		}
		
		if (this.AUDIO_CHANNEL == null) return;
		if (_music == this.CURRENT_THEME) return;
		
		this.CURRENT_THEME = _music;
		this.AUDIO_CHANNEL.leave();
		
		if (this.CURRENT_THEME = MUSIC_PP1) return;
		this.AUDIO_CHANNEL.join().then(function(_connection) {
			const dispatcher = _connection.playFile("./music/" + _music);
			dispatcher.resume();
		}).catch(err => console.log(err));
	}
}


// FONCTIONS
function getRandomPercent() {
	var i = Math.floor(Math.random() * 100 + 1);
	return i;
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
				var duel = DUEL_LIST[i].CHECKPOINT_DUEL;
				DUEL_LIST[i] = duel;
				duel.CHECKPOINT_DUEL = null;
				duel.addMessage("-----------------");
				duel.addMessage("**DUEL SAVE STATE USED**");
				duel.addMessage("-----------------");
				duel.sendMessages();
				duel.newTurnDuel();
			}
			else {
				DUEL_LIST.splice(i, 1);
			}
		}
	}
}
function skipWaitingDuels() {
	for (var i = DUEL_LIST.length - 1; i >= 0; i--) {
		if (DUEL_LIST[i].TIMESTAMP + (5 * 60*1000) < +new Date()) {
			if (DUEL_LIST[i].TUTORIAL) {
				DUEL_LIST[i].addMessage("Tutoriel cancelled :(")
				DUEL_LIST[i].sendMessages();
				DUEL_LIST[i].DEAD_DUEL = true;
			}
			else if (DUEL_LIST[i].FIGHTER1.attack == "" && DUEL_LIST[i].FIGHTER2.attack == "") {
				DUEL_LIST[i].FIGHTER1.attack = EMOTE_PP47;
				DUEL_LIST[i].FIGHTER2.attack = EMOTE_PP47;
				DUEL_LIST[i].AUTO_MOVES_COUNTDOWN = 1;
			}
			else if (DUEL_LIST[i].FIGHTER1.attack == "") {
				DUEL_LIST[i].FIGHTER1.attack = EMOTE_SKIP;
			}
			else if (DUEL_LIST[i].FIGHTER2.attack == "") {
				DUEL_LIST[i].FIGHTER2.attack = EMOTE_SKIP;
			}
			DUEL_LIST[i].BATTLE_CHANNEL.send("...");
			DUEL_LIST[i].launchAttacks();
		}
	}
}

function setBotActivity() {
	var texte = "Lonely PP :(";
	if (DUEL_LIST.length > 0) {
		if (DUEL_LIST.length == 1) {
			texte = DUEL_LIST.length + " duel of PP Punching :)";
		}
		else {
			texte = DUEL_LIST.length + " duels of PP Punching :)";
		}
	}
	CLIENT.user.setPresence({ game: { name: texte } })
}

function addWinCounter(_fighter, _number) {
	// TODO
	// negative number of wins for cheaters
	console.log(_fighter.getName() + " wins : " + _number);
}

function changeRoleToStyler(_nomRole, _styler, _guild) {
	var role = _guild.roles.find(r => r.name == _nomRole);
	var user = _guild.members.get(_styler);

	try {
		if (user.roles.has(role.id)) {
			user.removeRole(role);
		}
		else {
			if (getNumberOfGods(user) >= 3 && PRIEST_ROLES.indexOf(_nomRole) > -1) {
				return user.send("You can't have more than 3 Gods.");
			}
			if (getNumberOfGods(user, ELDRITCH_PRIEST_ROLES) >= 1 && ELDRITCH_PRIEST_ROLES.indexOf(_nomRole) > -1) {
				return user.send("You can't have more than 1 Eldritch God.");
			}
			user.addRole(role);
		}
	}
	catch(e) {
		user.send("I'm sorry I can't do that :(");
		user.send("Looks like there is no " + _nomRole + " role there...");
	}
}
function getNumberOfGods(_guildUser, _godList = PRIEST_ROLES) {
	var counter = 0;
	for (var i in _godList) {
		if (_guildUser.roles.find(r => r.name == _godList[i])) {
			counter++;
		}
	}
	return counter;
}

function sendCheatPanel(_channel) {
	_channel.send("Cheat Panel : Normal Moves I").then(function (_message2) {
		_message2.react(EMOTE_PP1); _message2.react(EMOTE_PP2);
		_message2.react(EMOTE_PP3); _message2.react(EMOTE_PP4);
		_message2.react(EMOTE_PP5); _message2.react(EMOTE_PP6);
		_message2.react(EMOTE_PP7); _message2.react(EMOTE_PP8);
		_message2.react(EMOTE_PP9); _message2.react(EMOTE_PP10);
		_message2.react(EMOTE_PP11); _message2.react(EMOTE_PP12);
		_message2.react(EMOTE_PP13); _message2.react(EMOTE_PP14);
		_message2.react(EMOTE_PP15); _message2.react(EMOTE_PP16);
		_message2.react(EMOTE_PP17); _message2.react(EMOTE_PP18);
		_message2.react(EMOTE_PP19); _message2.react(EMOTE_PP20);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Normal Moves II").then(function (_message2) {
		_message2.react(EMOTE_PP21); _message2.react(EMOTE_PP22);
		_message2.react(EMOTE_PP23); _message2.react(EMOTE_PP24);
		_message2.react(EMOTE_PP25); _message2.react(EMOTE_PP26);
		_message2.react(EMOTE_PP27); _message2.react(EMOTE_PP28);
		_message2.react(EMOTE_PP29); _message2.react(EMOTE_PP30);
		_message2.react(EMOTE_PP31); _message2.react(EMOTE_PP32);
		_message2.react(EMOTE_PP33); _message2.react(EMOTE_PP34);
		_message2.react(EMOTE_PP35); _message2.react(EMOTE_PP36);
		_message2.react(EMOTE_PP37); _message2.react(EMOTE_PP38);
		_message2.react(EMOTE_PP39); _message2.react(EMOTE_PP40);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Normal Moves III").then(function (_message2) {
		_message2.react(EMOTE_PP41); _message2.react(EMOTE_PP42);
		_message2.react(EMOTE_PP43); _message2.react(EMOTE_PP44);
		_message2.react(EMOTE_PP45); _message2.react(EMOTE_PP46);
		_message2.react(EMOTE_PP47); _message2.react(EMOTE_PP48);
		_message2.react(EMOTE_PP49); _message2.react(EMOTE_PP50);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Priest Moves").then(function (_message2) {
		_message2.react(EMOTE_PP51); _message2.react(EMOTE_PP52);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Animated Moves").then(function (_message2) {
		_message2.react(EMOTE_PP53); _message2.react(EMOTE_PP54);
		_message2.react(EMOTE_PP55); _message2.react(EMOTE_PP56);
		_message2.react(EMOTE_PP57); _message2.react(EMOTE_PP58);
		_message2.react(EMOTE_PP59); _message2.react(EMOTE_PP60);
		_message2.react(EMOTE_PP61); _message2.react(EMOTE_PP62);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Stånds Moves").then(function (_message2) {
		_message2.react(EMOTE_PP63); _message2.react(EMOTE_PP64);
		_message2.react(EMOTE_PP65); _message2.react(EMOTE_PP66);
		_message2.react(EMOTE_PP67); _message2.react(EMOTE_PP68);
		_message2.react(EMOTE_PP69); _message2.react(EMOTE_PP70);
		_message2.react(EMOTE_PP71); _message2.react(EMOTE_PP72);
		_message2.react(EMOTE_PP73); _message2.react(EMOTE_PP74);
		_message2.react(EMOTE_PP75); _message2.react(EMOTE_PP76);
		_message2.react(EMOTE_PP77); // _message2.react(EMOTE_PP78);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Rare Moves").then(function (_message2) {
		_message2.react(EMOTE_PP79); _message2.react(EMOTE_PP80);
		_message2.react(EMOTE_PP81);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Gods I").then(function (_message2) {
		_message2.react(GOD_PP1); _message2.react(GOD_PP2);
		_message2.react(GOD_PP3); _message2.react(GOD_PP4);
		_message2.react(GOD_PP5); _message2.react(GOD_PP6);
		_message2.react(GOD_PP7); _message2.react(GOD_PP8);
		_message2.react(GOD_PP9); _message2.react(GOD_PP10);
		_message2.react(GOD_PP11); _message2.react(GOD_PP12);
		_message2.react(GOD_PP13); _message2.react(GOD_PP14);
		_message2.react(GOD_PP15); _message2.react(GOD_PP16);
		_message2.react(GOD_PP17); _message2.react(GOD_PP18);
		_message2.react(GOD_PP19); _message2.react(GOD_PP20);
	}).catch(function(e) {
		console.log(e);
	});
	_channel.send("Cheat Panel : Gods II").then(function (_message2) {
		_message2.react(GOD_PP21); _message2.react(GOD_PP22); 
		_message2.react(GOD_PP23); _message2.react(GOD_PP24); 
		_message2.react(GOD_PP25); 
	}).catch(function(e) {
		console.log(e);
	});
}

function changeTextUwu(_texte) {
	var lettres = [];
			
	_texte = _texte.split("r").join("w");
	_texte = _texte.split("R").join("W");
	if (getRandomPercent() <= 5) {
		_texte = _texte.split("e").join("fuck");
		_texte = _texte.split("E").join("FUCK");
	}
	else if (getRandomPercent() <= 15) {
		_texte += " uwu";
	}
	else if (getRandomPercent() <= 25) {
		_texte += " owo";
	}
	else if (getRandomPercent() <= 35) {
		_texte += " TwT";
	}
	
	return _texte;
}
function changeTextLeet(_texte) {
	_texte = _texte.split("o").join("0");
	_texte = _texte.split("O").join("0");
	_texte = _texte.split("i").join("1");
	_texte = _texte.split("I").join("1");
	_texte = _texte.split("e").join("3");
	_texte = _texte.split("E").join("3");
	_texte = _texte.split("a").join("4");
	_texte = _texte.split("A").join("4");
	_texte = _texte.split("s").join("5");
	_texte = _texte.split("S").join("5");
	_texte = _texte.split("b").join("8");
	_texte = _texte.split("B").join("8");
	
	return _texte;
}
function changeTextRandomCap(_texte) {
	var lettres = _texte.split("");
	
	for (var i = 0; i < lettres.length; i++) { 
		if (getRandomPercent() <= 33) {
			lettres[i] = lettres[i].toUpperCase();
		}
	}
	_texte = lettres.join("");
	
	return _texte;
}
function changeTextRussian(_texte) {
	var lettres = _texte.split(" ");
	
	for (var i = 0; i < lettres.length; i++) { 
		if (getRandomPercent() <= 33) {
			lettres[i] += "ovo";
		}
	}
	_texte = lettres.join(" ");
	
	return _texte;
}
function changeTextRandomSpoil(_texte) {
	var lettres = _texte.split(" ");
	
	for (var i = 0; i < lettres.length; i++) { 
		if (getRandomPercent() <= 33) {
			lettres[i] = "||" + lettres[i] + "||";
		}
	}
	_texte = lettres.join(" ");
	
	return _texte;
}
function changeTextChristian(_texte) {
	_texte = _texte.replace("PP", "Power Puff Girl");
	_texte = _texte.replace("Pp", "Power Puff Girl");
	_texte = _texte.replace(/hitler/gi, "Angry German");
	_texte = _texte.replace(/jew/gi, "infidel");
	_texte = _texte.replace(/dick/gi, "Richard");
	_texte = _texte.replace(/raped/gi, "raked");
	_texte = _texte.replace(/satan/gi, "Stanley");
	_texte = _texte.replace(/hell/gi, "Hottube");
	_texte = _texte.replace(/gay/gi, "Brenn");
	_texte = _texte.replace(/kidney stone/gi, "volleyball");
	_texte = _texte.replace(/circumcised/gi, "trims");
	_texte = _texte.replace(/punches/gi, "hugs");
	_texte = _texte.replace(/punching/gi, "hugging");
	_texte = _texte.replace(/punch/gi, "hug");
	_texte = _texte.replace(/dong/gi, "dog");
	_texte = _texte.replace(/espinoza/gi, "Uncle");
	_texte = _texte.replace(/hog/gi, "Teddy Bear");
	_texte = _texte.replace(/ancient fongus/gi, "Papa Stalin");
	_texte = _texte.replace(/furry/gi, "Hairy Man");
	_texte = _texte.replace(/fuck/gi, "duck");
	_texte = _texte.replace(/cum/gi, "milky white substance");
	_texte = _texte.replace(/terrorist/gi, "Muslim"); // That's racist :o
	_texte = _texte.replace("SEXUAL CONFUSION", "ROMANTIC TENSION");
	return _texte;
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function cloneObject(obj) {
	obj = obj && obj instanceof Object ? obj : '';

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
	console.log(`Logged in as ${CLIENT.user.tag} !`);
	setBotActivity();
});

// This event will run on every single message received, from any channel or DM.
CLIENT.on("message", async _message => {
	killDeadDuels();
	setBotActivity();
	skipWaitingDuels();
	
	// Recuperation commande
	var argsUser = _message.content.trim().split(" ");
	
	// Ignore si bot
	if(_message.author.bot) return;
	
	// PM
	if(_message.channel.type == "dm") {
		_message.channel.send("**PP Cancer Translation :**\n\n" + changeTextRandomSpoil(changeTextLeet(changeTextRandomCap(changeTextRussian(changeTextUwu(_message.content.trim()))))));
		return;
	}
	
	// Ignore si pas appelé
	if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.first().id != CLIENT.user.id) return;
	console.log(argsUser);
	
	killDeadDuels();
	
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
	if (argsUser[1] == "cheatpanel") {
		sendCheatPanel(_message.channel);
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
	if (argsUser[1] == "duel" || argsUser[1] == "simpleduel" || argsUser[1] == "hug") {
		if (getDuel(_message.channel.id) != null) {
			return _message.reply("there's a battle going on here...");
		}
		
		if (_message.mentions.users.array().length <= 1) {
			return _message.reply("you need to tag the person you want to duel in the command !\nSee the help command for more help !");
		}
		
		if (_message.author.id == _message.mentions.users.last().id) {
			return _message.reply("you can't battle yourself !");
		}

		var duel = new Duel(argsUser[1] == "simpleduel");
		duel.CHRISTIAN_TEXT = argsUser[1] == "hug";
		DUEL_LIST.push(duel);
		
		duel.startDuel(_message);

		return;
	}
	if (argsUser[1] == "quit") {
		if (getDuel(_message.channel.id) != null) {
			var duel = getDuel(_message.channel.id);
			if (_message.author.id == duel.FIGHTER1.user.id) {
				duel.FIGHTER1.playMove(EMOTE_PP47);
				duel.stopDuel();
				return;
			}
			else if (_message.author.id == duel.FIGHTER2.user.id) {
				duel.FIGHTER2.playMove(EMOTE_PP47);
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
	if (argsUser[1] == "custom") {
		if (getDuel(_message.channel.id) != null) return _message.reply("let's try somewhere else...");
		// STYLE
		var guild = _message.channel.guild;
		var user = guild.members.get(_message.author.id);
		var role = guild.roles.find(r => r.name == GOD_PP21_PRIEST);
		
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
			_message2.react(GOD_PP19); // Chad Brenn
			_message2.react(GOD_PP20); // Waifu
		}).catch(function(e) {
			console.log(e);
		});
		if (user.roles.find(r => r.name == PP_EXPERT_ROLE)) {
			_message.reply("here are your PP expert choices.").then(function (_message2) {
				_message2.react(GOD_PP21); // D.I.C.K.
				_message2.react(GOD_PP22); // Satan
				_message2.react(GOD_PP23); // Ancient Fongus
				_message2.react(GOD_PP24); // Time Cube
				_message2.react(GOD_PP25); // Cthulhu
				_message2.react(EMOTE_SKIPPER); // Skipper
			}).catch(function(e) {
				console.log(e);
			});
		}
		return;

	}
	if (argsUser[1] == "help") {
		// HELP
		return _message.reply("you should read the PP Bible here : https://github.com/brennfeu/pp-bot/wiki/PP-Bible");
	}
	if (argsUser[1] == "admin") {
		if (ADMIN_LIST.indexOf(_message.author.id) < 0) {
			return _message.reply("you aren't an admin, sorry.");
		}
		if (argsUser.length <= 2) {
			return _message.reply("I need more arguments.");
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
			return _message.reply("next event id will be : " + duel.FORCE_EVENT_ID);
		}
		if (argsUser[2] == "requiem1" && argsUser.length >= 4) {
			duel.FIGHTER1.requiemPower = REQUIEM_LIST[parseInt(argsUser[3])-1];
			return _message.reply(duel.FIGHTER1.getName() + " gets : " + REQUIEM_LIST[parseInt(argsUser[3])-1]);
		}
		if (argsUser[2] == "requiem2" && argsUser.length >= 4) {
			duel.FIGHTER2.requiemPower = REQUIEM_LIST[parseInt(argsUser[3])-1];
			return _message.reply(duel.FIGHTER2.getName() + " gets : " + REQUIEM_LIST[parseInt(argsUser[3])-1]);
		}
		if (argsUser[2] == "moveCount" && argsUser.length >= 4) {
			duel.MOVE_COUNT = parseInt(argsUser[3]);
			return _message.reply("duel move count : " + duel.MOVE_COUNT);
		}
		if (argsUser[2] == "megaKill") {
			for (var i in DUEL_LIST) {
				DUEL_LIST[i].addMessage(" -- HEAT DEATH OF THE UNIVERSE --");
				DUEL_LIST[i].addMessage("*The Universe suddenly collapses.*\n" + IMAGE_PP2);
				DUEL_LIST[i].MOVE_COUNT = 1000000;
				DUEL_LIST[i].stopDuel();
			}
		}
	}

	return _message.reply("I don't know this command, try using the help command !");
});

CLIENT.on('messageReactionAdd', (_reaction, _user) => {
	killDeadDuels();
	setBotActivity();
	skipWaitingDuels();

	// DUEL
	if (getDuel(_reaction.message.channel.id) != null && _user.id != CLIENT.user.id) {
		var duel = getDuel(_reaction.message.channel.id);
		
		duel.triggerReaction(_reaction.emoji.name, _user);
		return;
	}

	// CHANGE ROLE
	if (_user.bot) return;
	if (_reaction.emoji.id == EMOTE_PP38) {
		// Fast PP
		changeRoleToStyler(FAST_PP_ROLE, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == EMOTE_PP40) {
		// Big PP
		changeRoleToStyler(BIG_PP_ROLE, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == EMOTE_PP41) {
		// Drunk PP
		changeRoleToStyler(DRUNK_PP_ROLE, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == EMOTE_PP34) {
		// Alien PP
		changeRoleToStyler(ALIEN_PP_ROLE, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == EMOTE_PP9) {
		// Hockey Puck PP
		changeRoleToStyler(HOCKEY_PUCK_PP_ROLE, _user.id, _reaction.message.channel.guild);
	}
	
	else if (_reaction.emoji.id == GOD_PP1) {
		changeRoleToStyler(GOD_PP1_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP2) {
		changeRoleToStyler(GOD_PP2_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP3) {
		changeRoleToStyler(GOD_PP3_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP4) {
		changeRoleToStyler(GOD_PP4_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP5) {
		changeRoleToStyler(GOD_PP5_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP6) {
		changeRoleToStyler(GOD_PP6_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP7) {
		changeRoleToStyler(GOD_PP7_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP8) {
		changeRoleToStyler(GOD_PP8_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP9) {
		changeRoleToStyler(GOD_PP9_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP10) {
		changeRoleToStyler(GOD_PP10_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP11) {
		changeRoleToStyler(GOD_PP11_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP12) {
		changeRoleToStyler(GOD_PP12_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP13) {
		changeRoleToStyler(GOD_PP13_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP14) {
		changeRoleToStyler(GOD_PP14_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP15) {
		changeRoleToStyler(GOD_PP15_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP16) {
		changeRoleToStyler(GOD_PP16_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP17) {
		changeRoleToStyler(GOD_PP17_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP18) {
		changeRoleToStyler(GOD_PP18_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP19) {
		changeRoleToStyler(GOD_PP19_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.emoji.id == GOD_PP20) {
		changeRoleToStyler(GOD_PP20_PRIEST, _user.id, _reaction.message.channel.guild);
	}
	else if (_reaction.message.channel.guild.members.get(_user.id).roles.find(r => r.name == PP_EXPERT_ROLE)) {
		if (_reaction.emoji.id == GOD_PP21) {
			changeRoleToStyler(GOD_PP21_PRIEST, _user.id, _reaction.message.channel.guild);
		}
		else if (_reaction.emoji.id == GOD_PP22) {
			changeRoleToStyler(GOD_PP22_PRIEST, _user.id, _reaction.message.channel.guild);
		}
		else if (_reaction.emoji.id == GOD_PP23) {
			changeRoleToStyler(GOD_PP23_PRIEST, _user.id, _reaction.message.channel.guild);
		}
		else if (_reaction.emoji.id == GOD_PP24) {
			changeRoleToStyler(GOD_PP24_PRIEST, _user.id, _reaction.message.channel.guild);
		}
		else if (_reaction.emoji.id == GOD_PP25) {
			changeRoleToStyler(GOD_PP25_PRIEST, _user.id, _reaction.message.channel.guild);
		}
		else if (_reaction.emoji.id == EMOTE_SKIPPER) {
			var role = _reaction.message.channel.guild.roles.find(r => r.name == PP_SKIPPER_ROLE);
			var user = _reaction.message.channel.guild.members.get(_user.id);
			try {
				if (user.roles.has(role.id)) {
					user.removeRole(role);
					user.send("Role removed : " + PP_SKIPPER_ROLE);
				}
				else {
					user.addRole(role);
					user.send("Role added : " + PP_SKIPPER_ROLE);
				}
			}
			catch(e) {
				user.send("I'm sorry I can't do that :(");
				user.send("Looks like there is no " + PP_SKIPPER_ROLE + " role there...");
			}
		}
	}
	return;
});

CLIENT.login(process.env.BOT_TOKEN);
