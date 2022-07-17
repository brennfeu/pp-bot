var GenshinElementManager = class {
    constructor(_element = null, _units = null) {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical") {
                this[GENSHIN_ELEMENT_LIST[i] + "Units"] = 0;
            }
        }

        if (_element != null) this.applyElement(_element, _units)
    }

    applyElement(_element, _units = 4) {
        var value = _units;

        // TODO

        if (_units > 0 && this[_element + "Units"] < value) this[_element + "Units"] = value;
        else if (_units < 0) this[_element + "Units"] = Math.max(0, this[_element + "Units"]+value);
    }
    applyElementManager(_em) {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical" && _em[GENSHIN_ELEMENT_LIST[i] + "Units"] > 0) {
                switch (GENSHIN_ELEMENT_LIST[i]) {
                    case "Pyro":
                        this.applyElement("Hydro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Cryo", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Electro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Geo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Anemo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        break;
                    case "Hydro":
                        this.applyElement("Pyro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Electro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Geo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Anemo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        break;
                    case "Electro":
                        this.applyElement("Pyro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Cryo", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Geo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Anemo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        break;
                    case "Cryo":
                        this.applyElement("Pyro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Electro", -1*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Geo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Anemo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        break;
                    case "Anemo":
                    case "Geo":
                        this.applyElement("Pyro", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Hydro", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Electro", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        this.applyElement("Cryo", -0.5*_em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
                        break;
                }
                this.applyElement(GENSHIN_ELEMENT_LIST[i], _em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
            }
        }
    }

    isAffectedBy(_element) {
        return this[_element + "Units"] > 0;
    }
    isFrozen() {
        if (this.isAffectedBy("Cryo") && this.isAffectedBy("Hydro")) return true;
        return false;
    }

    turnChange() {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical") {
                this[GENSHIN_ELEMENT_LIST[i] + "Units"] = Math.max(0, this[GENSHIN_ELEMENT_LIST[i] + "Units"]-1);
            }
        }
    }
}

Fighter.prototype.triggerGenshinElectroCharged = function(_origin = this.duel.getOppOf(this).getGenshinEM()) {
    this.duel.addMessage("*Electro-Charged*");
    this.damage(_origin.getGenshinEM());
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

Fighter.prototype.hasGenshinSynergy = function(_synergy) {
    if (_synergy == SYNERGY_GI0) { // 4 different elements
        var list = [];
        for (var i in this.giSkillTrees) {
            if (list.indexOf(GENSHIN_CHARACTER_LIST[i].element) < 0) list.push(GENSHIN_CHARACTER_LIST[i].element);
        }

        return list.length >= 4;
    }

    var id = GENSHIN_SYNERGIES.indexOf(_synergy);
    var nb = 0;
    for (var i in this.giSkillTrees) {
        if (GENSHIN_CHARACTER_LIST[i].element == GENSHIN_ELEMENT_LIST[id+1]) nb += 1;
    }
    return nb >= 2;
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
