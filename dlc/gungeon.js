eval(fs.readFileSync("dlc/gungeon-data.js").toString());
eval(fs.readFileSync("dlc/gungeon-bosses.js").toString());

var DLC_GUNGEON = {
    "name": "Gungeon Battalion",
    "description": "On the planet Gunymede lies a terrible fortress in which you fell into. Gather forces and weapons to take down your opponent!",
    "imageURL": "https://cdn.discordapp.com/attachments/667337519477817363/988351065936265246/unknown.png",
    "statusFunction": "getGungeonStatus",
    "emotes": GUNGEON_RAID_EMOTE_LIST.concat(GUNGEON_SHRINE_EMOTE_LIST),
    "synergies": GUNGEON_SYNERGIES,

    "duelInitFunction": function(_duel) {
        _duel.GU_CURRENT_FLOOR = FLOOR_GU1;
        _duel.GU_NEXT_FLOOR_COUNTDOWN = 3+Math.floor(getRandomPercent()/25);
        _duel.GU_BABY_SERPENT = false;
        _duel.GU_BOSS_DROP_MOVES = [];
    },

    "fighterInitFunction": function(_fighter) {
        _fighter.guShrine = "";
        _fighter.guBattalionPower = 0;
        _fighter.guBattalionExplodes = false;
        _fighter.guCube = 0;
        _fighter.guBattalionReaper = false;
        _fighter.guBattalionJammed = false;
        _fighter.guBattalionFast = false;
        _fighter.guBeholsterList = [];
        _fighter.guResourcefulSack = false;
        _fighter.guResourcefulSackDamage = 0;
        _fighter.guGunSoul = false;
        _fighter.guGunSoulSTR = -1;
        _fighter.guFlask = -1;
        _fighter.guGrail = false;
        _fighter.guEyeBullets = false;
    }
}
MERGABLE_WORLDS.push(DLC_GUNGEON);

function getGungeonShrineName(_emote) {
    switch(_emote) {
        case EMOTE_GU1: return "Familiar";
        case EMOTE_GU2: return "Junk";
        case EMOTE_GU3: return "Glass";
        case EMOTE_GU4: return "Dice";
        case EMOTE_GU5: return "Angel";
        case EMOTE_GU6: return "Peace";
        case EMOTE_GU7: return "Y.V.";
        case EMOTE_GU8: return "Hero";
        case EMOTE_GU9: return "Cleanse";
        case EMOTE_GU10: return "Blood";
        case EMOTE_GU11: return "Beholster";
        case EMOTE_GU12: return "Ammo";
        case EMOTE_GU13: return "Challenge";
        case EMOTE_GU14: return "Blank";
        default: return "???"
    }
}
function getGungeonUnitData(_emote) {
    switch(_emote) {
        case EMOTE_GU15: return {
            "name": "Bullet Kin",
            "power": 15,
            "strengthInNumbers": true
        }; // Bullet Kin
        case EMOTE_GU16: return {
            "name": "Bandana Bullet Kin",
            "power": 15,
            "strengthInNumbers": true
        }; // Bandana Bullet Kin
        case EMOTE_GU17: return {
            "name": "Agonizer",
            "power": 50,
            "explodes": true
        }; // Agonizer
        case EMOTE_GU18: return {
            "name": "Gunreaper",
            "power": 0,
            "reaper": true
        }; // Gunreaper
        case EMOTE_GU19: return {
            "name": "Lord of the Jammed",
            "power": 0,
            "jammed": true,
            "reaper": true
        }; // Lord of the Jammed
        case EMOTE_GU20: return {
            "name": "Shelleton",
            "power": 78
        }; // Shelleton
        case EMOTE_GU21: return {
            "name": "Chain Gunner",
            "power": 90
        }; // Chain Gunner
        case EMOTE_GU22: return {
            "name": "Chancebulon",
            "power": 50,
            "chance": true
        }; // Chancebulon
        case EMOTE_GU23: return {
            "name": "Confirmed",
            "power": 45
        }; // Confirmed
        case EMOTE_GU24: return {
            "name": "Cubelead",
            "power": 19,
            "cube": true,
            "doubleCubeChance": true
        }; // Cubelead
        case EMOTE_GU25: return {
            "name": "Cubulon",
            "power": 30,
            "cube": true
        }; // Cubulon
        case EMOTE_GU26: return {
            "name": "Gun Nut",
            "power": 100
        }; // Gun Nut
        case EMOTE_GU27: return {
            "name": "Killithid",
            "power": 45,
            "steal": true
        }; // Killithid
        case EMOTE_GU28: return {
            "name": "Muzzle Flare",
            "power": 16,
            "fast": true
        }; // Muzzle Flare
        case EMOTE_GU29: return {
            "name": "Muzzle Wisp",
            "power": 19,
            "fast": true
        }; // Muzzle Wisp
        case EMOTE_GU30: return {
            "name": "Phaser Spider",
            "power": 60
        }; // Phaser Spider
        case EMOTE_GU31: return {
            "name": "Skullet",
            "power": 16,
            "strengthInNumbers": true
        }; // Skullet
        case EMOTE_GU32: return {
            "name": "Skullmet",
            "power": 22,
            "strengthInNumbers": true
        }; // Skullmet
        case EMOTE_GU33: return {
            "name": "Spectral Gun Nut",
            "power": 54,
            "jammed": true
        }; // Spectral Gun Nut
        default: return {}
    }
}

Fighter.prototype.getGungeonStatus = function() {
    var gungeonTxt = "";

    // shrine
    if (this.guShrine != "") gungeonTxt += displayEmote(this.guShrine) + " " + getGungeonShrineName(this.guShrine) + " Shrine Blessing\n";
    // battalion
    if (this.guBattalionPower > 0) gungeonTxt += displayEmote(EMOTE_GU15) + " Battalion Power: " + this.guBattalionPower + "\n";
    if (this.guCube > 0) gungeonTxt += displayEmote(EMOTE_GU25) + " Cubes: " + this.guCube + "\n";
    if (this.guBattalionExplodes) gungeonTxt += displayEmote(EMOTE_GU17) + " Explosive Battalion\n";
    if (this.guBattalionFast) gungeonTxt += displayEmote(EMOTE_GU28) + " Fast Battalion\n";
    if (this.guBattalionJammed) gungeonTxt += displayEmote(EMOTE_GU19) + " Jammed Battalion\n";
    if (this.guBattalionReaper) gungeonTxt += displayEmote(EMOTE_GU18) + " Reaper Battalion\n";
    // other
    if (this.guFlask > -1) gungeonTxt += (displayEmote(EMOTE_GU48)) + " Old Knight's Flask Refill in " + this.guFlask + " turns\n";
    if (this.guResourcefulSack) gungeonTxt += (displayEmote(EMOTE_GU43)) + " Resourceful Sack Damage: " + this.guResourcefulSackDamage + "\n";
    if (this.guEyeBullets) gungeonTxt += (displayEmote(EMOTE_GU51)) + " Lich's Eye Bullets\n";
    if (this.guGrail) gungeonTxt += (displayEmote(EMOTE_GU49)) + " Holey Grail\n";
    if (this.guGunSoul) gungeonTxt += (displayEmote(EMOTE_GU46)) + " **Gun Soul**\n";
    else if (this.guGunSoulSTR > -1) gungeonTxt += (displayEmote(EMOTE_GU46)) + " Gun Soul STR Requirement: " + this.guGunSoulSTR + "\n";

    return gungeonTxt;
}
