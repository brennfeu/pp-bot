var DLC_GUNGEON = {
    "name": "Gungeon Battalion",
    "description": "On the planet Gunymede lies a terrible fortress in which you fell into. Gather forces and weapons to take down your opponent!",
    "imageURL": "https://cdn.discordapp.com/attachments/667337519477817363/988351065936265246/unknown.png",
    "duelInitFunction": function(_duel) { _duel.GU_CURRENT_FLOOR = FLOOR_GU1; _duel.GU_NEXT_FLOOR_COUNTDOWN = 2+Math.floor(getRandomPercent()/25); },
    "statusFunction": "getGungeonStatus",
    "emotes": GUNGEON_RAID_EMOTE_LIST.concat(GUNGEON_SHRINE_EMOTE_LIST),
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
        case EMOTE_GU7: return "YV";
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

Fighter.prototype.getGungeonStatus = function() {
    var gungeonTxt = "";

    // shrine
    if (this.guShrine != undefined) {
        gungeonTxt += displayEmote(this.guShrine) + " " + getGungeonShrineName(this.guShrine) + " Shrine";
    }
    // units
    // TODO

    return gungeonTxt;
}
