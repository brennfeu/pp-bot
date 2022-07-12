Fighter.prototype.getGenshinStatsToDisplay = function() {
    var l = [];
    for (var i in this.giSkillTrees) {
        l = l.concat(GENSHIN_CHARACTER_LIST[i].statsToDisplay);
        l.push(GENSHIN_CHARACTER_LIST[i].ascensionStat);
    }
    return l;
}
Fighter.prototype.getGenshinStatsStatus = function() {
    var stats = this.getGenshinStatsToDisplay();
    var txt = "";

    if (stats.indexOf("HP") >= 0) {
        txt += "**HP:** " + this.getGenshinHP();
    }
    if (stats.indexOf("BaseATK") >= 0) {
        txt += "**Base ATK:** " + this.getGenshinBaseATK();
    }
    if (stats.indexOf("ATK") >= 0) {
        txt += "**ATK:** " + this.getGenshinATK();
    }
    if (stats.indexOf("DEF") >= 0) {
        txt += "**DEF:** " + this.getGenshinDEF();
    }
    if (stats.indexOf("EM") >= 0) {
        txt += "**Elemental Mastery:** " + this.getGenshinEM();
    }
    if (stats.indexOf("ER") >= 0) {
        txt += "**Energy Recharge:** " + this.getGenshinER();
    }
    if (stats.indexOf("CritRate") >= 0) {
        txt += "**Critical Rate:** " + this.getGenshinCritRate();
    }
    if (stats.indexOf("CritDamage") >= 0) {
        txt += "**Critical Damage:** " + this.getGenshinCritDamage();
    }

    for (var i in GENSHIN_ELEMENT_LIST) {
        if (stats.indexOf(GENSHIN_ELEMENT_LIST[i] + "Damage") >= 0) {
            txt += "**" + GENSHIN_ELEMENT_LIST[i] + " Damage Bonus:** " + this.getGenshinElementalDamageBonus(GENSHIN_ELEMENT_LIST[i]);
        }
        if (stats.indexOf(GENSHIN_ELEMENT_LIST[i] + "RES") >= 0) {
            txt += "**" + GENSHIN_ELEMENT_LIST[i] + " Resistance:** " + this.getGenshinElementalResistance(GENSHIN_ELEMENT_LIST[i]);
        }
    }

    return txt;
}

Fighter.prototype.getGenshinHP = function() {
    var hp = this.STR;

    return hp;
}

Fighter.prototype.getGenshinBaseATK = function() {
    var atk = Math.floor(this.STR/10);

    return atk;
}
Fighter.prototype.getGenshinATK = function() {
    var atk = this.getGenshinBaseATK();

    return atk;
}

Fighter.prototype.getGenshinDEF = function() {
    var def = this.AET;

    return def;
}

Fighter.prototype.getGenshinEM = function() {
    var em = this.AET;

    return em;
}

Fighter.prototype.getGenshinER = function() {
    var er = 100+this.AET;

    return er;
}

Fighter.prototype.getGenshinCritRate = function() {
    var crit = 5;

    return crit;
}
Fighter.prototype.getGenshinCritDamage = function() {
    var crit = 50;

    return crit;
}

Fighter.prototype.getGenshinElementalDamageBonus = function(_element) {
    var bonus = 0;

    return bonus;
}
Fighter.prototype.getGenshinElementalResistance = function(_element) {
    var res = 0;

    return res;
}
