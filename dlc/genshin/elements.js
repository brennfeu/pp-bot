var GenshinElementManager = class {
    constructor(_element = null, _units = null) {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical") {
                this[GENSHIN_ELEMENT_LIST[i] + "Units"] = 0;
            }
        }

        if (_element != null) this.applyElement(_element, _units)

        this.giElementManagerOrigin = null;
    }

    applyElement(_element, _units = 4) {
        var value = _units;
        if (_units < 0) return this[_element + "Units"] = Math.max(0, this[_element + "Units"]+value);

        var reactionDict = {
            "Pyro": {
                "Hydro": 1,
                "Cryo": 1,
                "Electro": 1,
                "Geo": 0.5,
                "Anemo": 0.5
            },
            "Hydro": {
                "Pyro": 1,
                "Electro": 1,
                "Geo": 0.5,
                "Anemo": 0.5
            },
            "Electro": {
                "Pyro": 1,
                "Cryo": 1,
                "Geo": 0.5,
                "Anemo": 0.5
            },
            "Cryo": {
                "Pyro": 1,
                "Electro": 1,
                "Geo": 0.5,
                "Anemo": 0.5
            },
            "Geo": {
                "Hydro": 0.5,
                "Cryo": 0.5,
                "Electro": 0.5,
                "Pyro": 0.5
            },
            "Anemo": {
                "Hydro": 0.5,
                "Cryo": 0.5,
                "Electro": 0.5,
                "Pyro": 0.5
            }
        }
        for (var i in reactionDict[_element]) {
            var _units2 = this[i + "Units"];
            var _units2toRemove = reactionDict[_element][i]*_units;

            console.log("before " + i + ": " + _units);
            console.log(i);
            console.log(_units2);
            console.log(this[reactionDict[_element][i] + "Units"]);
            if (_units2toRemove >= _units2) {
                this[i + "Units"] = 0;
                _units -= _units2*this[reactionDict[_element][i] + "Units"];
            }
            else {
                this[i + "Units"] -= _units2toRemove;
                _units = 0;
            }
            console.log("after: " + _units);
        }

        this[_element + "Units"] = Math.max(this[_element + "Units"], _units);
    }
    applyElementManager(_em) {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical" && _em[GENSHIN_ELEMENT_LIST[i] + "Units"] > 0) {
                this.applyElement(GENSHIN_ELEMENT_LIST[i], _em[GENSHIN_ELEMENT_LIST[i] + "Units"]);
            }
        }
    }

    isAffectedBy(_element) {
        return this[_element + "Units"] > 0;
    }
    isFrozen() {
        return (this.isAffectedBy("Cryo") && this.isAffectedBy("Hydro"));
    }
    isElectroCharged() {
        return (this.isAffectedBy("Electro") && this.isAffectedBy("Hydro"));
    }

    turnChange() {
        for (var i in GENSHIN_ELEMENT_LIST) {
            if (GENSHIN_ELEMENT_LIST[i] != "Physical") {
                var v = 1;
                if (this.giElementManagerOrigin != null) {
                    if (GENSHIN_ELEMENT_LIST[i] == "Cryo" && this.giElementManagerOrigin.hasSynergy(SYNERGY_GI1)) v += 0.4;
                    if (GENSHIN_ELEMENT_LIST[i] == "Pyro" && this.giElementManagerOrigin.hasSynergy(SYNERGY_GI2)) v += 0.4;
                    if (GENSHIN_ELEMENT_LIST[i] == "Hydro" && this.giElementManagerOrigin.hasSynergy(SYNERGY_GI3)) v += 0.4;
                }

                this[GENSHIN_ELEMENT_LIST[i] + "Units"] = Math.max(0, this[GENSHIN_ELEMENT_LIST[i] + "Units"]-v);
            }
        }
    }
}

Fighter.prototype.triggerGenshinOverload = function(_origin = this.duel.getOppOf(this)) {
    this.duel.addMessage("*Overload*");
    this.damage(_origin.getGenshinEM());

    if (_origin.hasSynergy(SYNERGY_GI3)) _origin.recieveGenshinParticle(1, "Electro");
}
Fighter.prototype.triggerGenshinElectroCharged = function(_origin = this.duel.getOppOf(this)) {
    this.duel.addMessage("*Electro-Charged*");
    this.damage(_origin.getGenshinEM()/2);

    if (_origin.hasSynergy(SYNERGY_GI3)) _origin.recieveGenshinParticle(1, "Electro");
}
Fighter.prototype.triggerGenshinSuperconduct = function(_origin = this.duel.getOppOf(this)) {
    this.duel.addMessage("*Superconduct*");
    this.damage(_origin.getGenshinEM()/5);
    this.giSuperconductCD = 4;

    if (_origin.hasSynergy(SYNERGY_GI3)) _origin.recieveGenshinParticle(1, "Electro");
}

Fighter.prototype.recieveGenshinParticle = function(_amount, _element = "Physical") {
    var hasElement = false;
    for (var i in this.giSkillTrees) {
        if (GENSHIN_CHARACTER_LIST[i].element == _element) hasElement = true;
    }
    if (hasElement) _amount = _amount*3;
    if (_element == "Physical") _amount = _amount*2;

    this.giEnergy += _amount*this.getGenshinER();
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
