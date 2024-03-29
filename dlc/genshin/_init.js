eval(fs.readFileSync("dlc/genshin/data.js").toString());
eval(fs.readFileSync("dlc/genshin/stats.js").toString());
eval(fs.readFileSync("dlc/genshin/elements.js").toString());
eval(fs.readFileSync("dlc/genshin/summons.js").toString());
eval(fs.readFileSync("dlc/genshin/wish.js").toString());

var DLC_GENSHIN = {
    "name": "Teyvat Elements",
    "description": "You arrive in Teyvat, still ready to take down your opponent. Roll for characters and obtain their talents!",
    "imageURL": "https://cdn.discordapp.com/attachments/667337519477817363/991992955940388904/genshin.jpg",
    "emotes": GENSHIN_AVAILABLE_EMOTE_LIST,
    "synergies": GENSHIN_SYNERGIES,

    "duelInitFunction": function(_duel) {
        _duel.GI_BANNER_CHAR = null;
        _duel.newGenshinBanner();
    },

    "statusFunction": "getGenshinStatus",
    "fighterInitFunction": function(_fighter) {
        _fighter.giSkillTrees = {};
        _fighter.giSkillsQueue = [];
        _fighter.giEnergy = 0;
        _fighter.giSummons = [];

        _fighter.giElementManager = new GenshinElementManager();
        _fighter.giElementManager.giElementManagerOrigin = _fighter;

        _fighter.giSuperconductCD = 0;

        _fighter.giParamitaPapilio = null;
        _fighter.giBloodBlossom = null;
        _fighter.giFlutterBy = 0;
    }
}
MERGABLE_WORLDS.push(DLC_GENSHIN);

Fighter.prototype.getGenshinStatus = function() {
    var genshinTxt = "";

    for (var i in this.giSkillTrees) {
        var char = GENSHIN_CHARACTER_LIST[i];
        var constellationText = "";
        if (this.giSkillTrees[i].constellation > 0) constellationText = " C" + this.giSkillTrees[i].constellation;
        genshinTxt += displayEmote(char.skillEmote) + displayEmote(char.burstEmote) + constellationText + " " + char.name + " Talents\n";
        if (this.giSkillTrees[i].skillCD > 0) genshinTxt += displayEmote(char.skillEmote) + " Skill CD: " + this.giSkillTrees[i].skillCD + " turns\n";
        if (this.giSkillTrees[i].burstCD > 0) genshinTxt += displayEmote(char.burstEmote) + " Burst CD: " + this.giSkillTrees[i].burstCD + " turns\n";
    }
    if (Object.keys(this.giSkillTrees).length > 0 || this.giEnergy > 0) genshinTxt += "Energy: " + this.giEnergy + "\n";

    if (this.giElementManager.isElectroCharged()) genshinTxt += displayEmote(EMOTE_GI10) + displayEmote(EMOTE_GI12) + " **Electro-Charged**\n";
    if (this.giElementManager.isFrozen()) genshinTxt += displayEmote(EMOTE_GI10) + displayEmote(EMOTE_GI14) + " **Frozen**\n";
    if (this.giSuperconductCD > 0) genshinTxt += displayEmote(EMOTE_GI12) + displayEmote(EMOTE_GI14) + " **Superconduct**\n";

    if (this.giParamitaPapilio != null) genshinTxt += displayEmote(EMOTE_GI3) + " Paramita Papilio (for " + this.giParamitaPapilio.duration + " turns)\n";
    if (this.giBloodBlossom != null) genshinTxt += displayEmote(EMOTE_GI3) + " Blood Blossom (for " + this.giParamitaPapilio.duration + " turns)\n";

    for (var i in this.giSummons) {
        if (this.giSummons[i].genshinSummonStatusEmote != null) genshinTxt += displayEmote(this.giSummons[i].genshinSummonStatusEmote) + " ";
        genshinTxt += this.giSummons[i].getName() + " (for " + this.giSummons[i].genshinSummonCountdown + " turns";
        if (this.giSummons[i].genshinSummonDisplaySTR) genshinTxt += " // HP: " + this.giSummons[i].getGenshinHP();
        genshinTxt += ")\n";
    }

    genshinTxt += this.getGenshinStatsStatus();

    return genshinTxt;
}

Fighter.prototype.getGenshinAvailableFighterMoves = function() {
    var l = [];

    for (var i in this.giSkillTrees) {
        var char = GENSHIN_CHARACTER_LIST[i];
        if (this.giSkillTrees[i].skillCD <= 0) l.push(char.skillEmote);
        if (this.giSkillTrees[i].burstCD <= 0 && this.giEnergy >= char.burstEnergyCost) l.push(char.burstEmote);
    }

    return l;
}
Fighter.prototype.sendGenshinSkills = function() {
    if (this.duel.MERGED_WORLDS.indexOf(DLC_GENSHIN) < 0) return;
    if (this.idUser == CLIENT.user.id) return;
    if (this.STR <= 0) return;

    var l = this.getGenshinAvailableFighterMoves().slice(0, 20);
    if (l.length <= 0) return;

    this.duel.sendMessages();
    var sendEmotesFunction = function(_message2) {
        var duel = getDuel(_message2.channel.id);
        if (duel.MOVE_COUNT != this.moveCount) return;

        for (var i in this.emotes) {
            _message2.react(this.emotes[i]);
        }
    }
    this.duel.BATTLE_CHANNEL.send("Talents")
        .then(sendEmotesFunction.bind({ moveCount: this.duel.MOVE_COUNT, emotes: l }))
        .catch(function(e) { console.log(e); });
    for (var i in l) {
        this.duel.BATTLE_CHANNEL.send(sciText(displayEmote(l[i]) + " " + MOVE_HELP[l[i]]));
    }
}
