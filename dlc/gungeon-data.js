// SHRINES
var EMOTE_GU1 = "680064464883548279"; // Familiar Shrine
var EMOTE_GU2 = "680064464648798213"; // Junk Shrine
var EMOTE_GU3 = "680064464619569185"; // Glass Shrine
var EMOTE_GU4 = "680064464250208277"; // Dice Shrine
var EMOTE_GU5 = "680064464401465365"; // Angel Shrine
var EMOTE_GU6 = "680064464653123605"; // Peace Shrine
var EMOTE_GU7 = "680064464460054552"; // YV Shrine
var EMOTE_GU8 = "680064464670032050"; // Hero Shrine
var EMOTE_GU9 = "680064464686809094"; // Cleanse Shrine
var EMOTE_GU10 = "680064464728358920"; // Blood Shrine
var EMOTE_GU11 = "680064464691003400"; // Beholster Shrine
var EMOTE_GU12 = "680064464695066642"; // Ammo Shrine
var EMOTE_GU13 = "680064464657055747"; // Challenge Shrine
var EMOTE_GU14 = "680064464745267217"; // Blank Shrine
var GUNGEON_SHRINE_EMOTE_LIST = [ EMOTE_GU1, EMOTE_GU2, EMOTE_GU3, EMOTE_GU4, EMOTE_GU5, EMOTE_GU6, EMOTE_GU7, EMOTE_GU8,
    EMOTE_GU9, EMOTE_GU10, EMOTE_GU11, EMOTE_GU12, EMOTE_GU13, EMOTE_GU14 ];

// UNITS
var EMOTE_GU15 = "680155715838804002"; // Bullet Kin
var EMOTE_GU16 = "680155715700129804"; // Bandana Bullet Kin
var EMOTE_GU17 = "680155715494871045"; // Agonizer
var EMOTE_GU18 = "680155715788079224"; // Gunreaper
var EMOTE_GU19 = "680155715704586253"; // Lord of the Jammed
var EMOTE_GU20 = "680158074333429760"; // Shelleton
var EMOTE_GU21 = "680156340525728010"; // Chain Gunner
var EMOTE_GU22 = "680155715855581197"; // Chancebulon
var EMOTE_GU23 = "680155715796467712"; // Confirmed
var EMOTE_GU24 = "680155715792404506"; // Cubelead
var EMOTE_GU25 = "680155715507322942"; // Cubulon
var EMOTE_GU26 = "680156340722729097"; // Gun Nut
var EMOTE_GU27 = "680155715721101333"; // Killithid
var EMOTE_GU28 = "680155715540746241"; // Muzzle Flare
var EMOTE_GU29 = "680155715775889426"; // Muzzle Wisp
var EMOTE_GU30 = "680155715557785661"; // Phaser Spider
var EMOTE_GU31 = "680155715859513404"; // Skullet
var EMOTE_GU32 = "680155715524100164"; // Skullmet
var EMOTE_GU33 = "680156340055965822"; // Spectral Gun Nut
var GUNGEON_UNIT_EMOTE_LIST = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU17, EMOTE_GU18, EMOTE_GU19, EMOTE_GU20, EMOTE_GU21, EMOTE_GU22,
    EMOTE_GU23, EMOTE_GU24, EMOTE_GU25, EMOTE_GU26, EMOTE_GU27, EMOTE_GU28, EMOTE_GU29, EMOTE_GU30, EMOTE_GU31, EMOTE_GU32, EMOTE_GU33 ];

// RAIDS
var EMOTE_GU33 = "682612520992768088"; // Rusty Sidearm
var EMOTE_GU34 = "682896260105240628"; // Makeshift Cannon
var EMOTE_GU35 = "682898924096585728"; // Face Melter
var EMOTE_GU36 = "682917291591073876"; // Abyssal Tentacle
var EMOTE_GU37 = "682955927388946499"; // Yari Launcher
var EMOTE_GU38 = "682970802932809739"; // Rad Gun
var EMOTE_GU39 = "682971681182187524"; // Vorpal Gun
var EMOTE_GU40 = "682972042500505670"; // Hyper Light Blaster
var GUNGEON_RAID_EMOTE_LIST = [ EMOTE_GU33, EMOTE_GU34, EMOTE_GU35, EMOTE_GU36, EMOTE_GU37, EMOTE_GU38, EMOTE_GU39, EMOTE_GU40 ];

// OTHER
var EMOTE_GU41 = "990959237326843904"; // Junk
var EMOTE_GU42 = "990959589732253736"; // Gnawed Key
var GUNGEON_OTHER_EMOTE_LIST = [ EMOTE_GU41, EMOTE_GU42 ];

var GUNGEON_EMOTE_LIST = GUNGEON_SHRINE_EMOTE_LIST.concat(GUNGEON_UNIT_EMOTE_LIST).concat(GUNGEON_RAID_EMOTE_LIST);
EMOTE_LIST = EMOTE_LIST.concat(GUNGEON_EMOTE_LIST).concat(GUNGEON_OTHER_EMOTE_LIST);

// FLOORS
var FLOOR_GU1 = "Chamber 1: Keep of the Lead Lord";
var FLOOR_GU2 = "Chamber 2: Gungeon Proper";
var FLOOR_GU3 = "Chamber 3: Black Powder Mine";
var FLOOR_GU4 = "Chamber 4: Hollow";
var FLOOR_GU5 = "Chamber 5: Forge";
var FLOOR_GU6 = "Chamber 6: Bullet Hell";
var FLOOR_GUS3 = "Chamber ?: Resourceful Rat's Lair";

var GUNGEON_FLOORS_UNITS = {};
GUNGEON_FLOORS_UNITS[FLOOR_GU1] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU25, EMOTE_GU26 ];
GUNGEON_FLOORS_UNITS[FLOOR_GU2] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU25, EMOTE_GU26, EMOTE_GU29, EMOTE_GU30 ];
GUNGEON_FLOORS_UNITS[FLOOR_GU3] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU20, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU25, EMOTE_GU26, EMOTE_GU27, EMOTE_GU29, EMOTE_GU30 ];
GUNGEON_FLOORS_UNITS[FLOOR_GU4] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU17, EMOTE_GU18, EMOTE_GU20, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU25, EMOTE_GU26, EMOTE_GU27, EMOTE_GU30, EMOTE_GU31, EMOTE_GU32 ];
GUNGEON_FLOORS_UNITS[FLOOR_GU5] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU17, EMOTE_GU20, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU24, EMOTE_GU25, EMOTE_GU26, EMOTE_GU27, EMOTE_GU28, EMOTE_GU29, EMOTE_GU30, EMOTE_GU31, EMOTE_GU32, EMOTE_GU33 ];
GUNGEON_FLOORS_UNITS[FLOOR_GU6] = [ EMOTE_GU15, EMOTE_GU16, EMOTE_GU17, EMOTE_GU18, EMOTE_GU20, EMOTE_GU21, EMOTE_GU22, EMOTE_GU23, EMOTE_GU24, EMOTE_GU25, EMOTE_GU26, EMOTE_GU27, EMOTE_GU28, EMOTE_GU29, EMOTE_GU30, EMOTE_GU31, EMOTE_GU32, EMOTE_GU33 ];
GUNGEON_FLOORS_UNITS[FLOOR_GUS3] = [ EMOTE_GU18, EMOTE_GU20, EMOTE_GU22, EMOTE_GU25, EMOTE_GU27, EMOTE_GU31 ]

var GUNGEON_FLOORS_SCALING = {};
GUNGEON_FLOORS_SCALING[FLOOR_GU1] = 1;
GUNGEON_FLOORS_SCALING[FLOOR_GU2] = 1.3;
GUNGEON_FLOORS_SCALING[FLOOR_GU3] = 1.6;
GUNGEON_FLOORS_SCALING[FLOOR_GU4] = 1.85;
GUNGEON_FLOORS_SCALING[FLOOR_GU5] = 2.1;
GUNGEON_FLOORS_SCALING[FLOOR_GU6] = 2.1;
GUNGEON_FLOORS_SCALING[FLOOR_GUS3] = 1.85;
