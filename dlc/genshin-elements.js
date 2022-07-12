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
}
