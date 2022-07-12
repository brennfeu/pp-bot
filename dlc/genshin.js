eval(fs.readFileSync("dlc/genshin-data.js").toString());
eval(fs.readFileSync("dlc/genshin-stats.js").toString());
eval(fs.readFileSync("dlc/genshin-maths.js").toString());
eval(fs.readFileSync("dlc/genshin-wish.js").toString());

var DLC_GENSHIN = {
    "name": "Teyvat Skills",
    "description": "You arrive in Teyvat, still ready to take down your opponent. Roll for characters and obtain their abilities!",
    "imageURL": "https://cdn.discordapp.com/attachments/667337519477817363/991992955940388904/genshin.jpg",
    "emotes": GENSHIN_AVAILABLE_EMOTE_LIST,

    "duelInitFunction": function(_duel) {
        _duel.GI_BANNER_CHAR = null;
        _duel.newGenshinBanner();
    },

    "statusFunction": "getGenshinStatus",
    "fighterInitFunction": function(_fighter) {
        _fighter.giSkillTrees = {};
    }
}
MERGABLE_WORLDS.push(DLC_GENSHIN);

Fighter.prototype.getGenshinStatus = function() {
    var genshinTxt = "";

    for (var i in this.giSkillTrees) {
        var char = GENSHIN_CHARACTER_LIST[i];
        genshinTxt += displayEmote(i.skillEmote) + displayEmote(i.burstEmote) + " " + i.name + " Skills\n";
        if (this.giSkillTrees[i].skillCD > 0) genshinTxt += "- " + displayEmote(i.skillEmote) + " Skill CD: " + this.giSkillTrees[i].skillCD + "\n";
        if (this.giSkillTrees[i].burstCD > 0) genshinTxt += "- " + displayEmote(i.burstEmote) + " Burst CD: " + this.giSkillTrees[i].burstCD + "\n";
    }

    return genshinTxt;
}

Fighter.prototype.addGenshinSkillTree = function(_skillTree) {
    var index = GENSHIN_CHARACTER_LIST.indexOf(_skillTree);
    if (this.giSkillTrees[index] == undefined) {
        this.giSkillTrees[index] = {
            "constellation": 0,
            "skillCD": 0,
            "burstCD": 0
        };
        return;
    }

    if (this.giSkillTrees[index].constellation < 6) {
        this.giSkillTrees[index].constellation += 1;
        return;
    }

    // TODO new rolls
}
Fighter.prototype.getGenshinAvailableFighterMoves = function() {
    var l = [];

    for (var i in this.giSkillTrees) {
        if (this.giSkillTrees[i].skillCD <= 0) l.push(i.skillEmote);
        if (this.giSkillTrees[i].burstCD <= 0) l.push(i.burstCD);
    }

    return l;
}
