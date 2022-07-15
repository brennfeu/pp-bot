var GenshinElementManager = class {
    constructor(_element = null, _units = null) {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical") {
                this[GENSHIN_ELEMENT_LIST[i] + "Units"] = 0;
            }
        }

        if (_element != null) this.affectElement(_element, _units)
    }

    affectElement(_element, _units) {
        var value = _units;

        // TODO

        this[_element + "Units"] += value;
    }

    isAffectedBy(_element) {
        return this[GENSHIN_ELEMENT_LIST[i] + "Units"] > 0;
    }

    turnChange() {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical" && this[GENSHIN_ELEMENT_LIST[i] + "Units"] > 0) {
                this[GENSHIN_ELEMENT_LIST[i] + "Units"] -= 1;
            }
        }
    }
}

Fighter.prototype.recieveGenshinParticle = function(_amount, _element = "Physical") {
    var hasElement = false;
    for (var i in this.giSkillTrees) {
        if (GENSHIN_CHARACTER_LIST[i].element == _element) hasElement = true;
    }
    if (hasElement) _amount = _amount*3;
    if (_element == "Physical") _amount = _amount*2;

    // TODO energy recharge

    this.giEnergy += _amount;
}

function getEmoteFromGenshinElement(_element) {
    switch(_element) {
        case "Pyro": return EMOTE_GI9;
        case "Hydro": return EMOTE_GI10;
        case "Geo": return EMOTE_GI11;
        case "Electro": return EMOTE_GI12;
        case "Dendro": return EMOTE_GI13;
        case "Cryo": return EMOTE_GI14;
        case "Anemo": return EMOTE_GI15;
    }
    return EMOTE_BOSS_ATTACK;
}
