Fighter.prototype.getGenshinStatsToDisplay = function() {
    var l = [];

    for (var i in this.giSkillTrees) {
        l = l.concat(GENSHIN_CHARACTER_LIST[i].statsToDisplay);
        l.push(GENSHIN_CHARACTER_LIST[i].ascensionStat);
    }

    if (this.giSuperconductCD > 0) l.push("PhysicalRES")

    if (this.hasSynergy(SYNERGY_GI1)) l.push("ATK");
    if (this.hasSynergy(SYNERGY_GI2)) l.push("HP");

    return l;
}
Fighter.prototype.getGenshinStatsStatus = function() {
    var stats = this.getGenshinStatsToDisplay();
    var txt = "";

    if (stats.indexOf("HP") >= 0) {
        txt += "**HP:** " + this.getGenshinHP() + "\n";
    }
    if (stats.indexOf("BaseATK") >= 0) {
        txt += "**Base ATK:** " + this.getGenshinBaseATK() + "\n";
    }
    if (stats.indexOf("ATK") >= 0) {
        txt += "**ATK:** " + this.getGenshinATK() + "\n";
    }
    if (stats.indexOf("DEF") >= 0) {
        txt += "**DEF:** " + this.getGenshinDEF() + "\n";
    }
    if (stats.indexOf("EM") >= 0) {
        txt += "**Elemental Mastery:** " + this.getGenshinEM() + "\n";
    }
    if (stats.indexOf("ER") >= 0) {
        txt += "**Energy Recharge:** " + (this.getGenshinER()*100) + "%\n";
    }
    if (stats.indexOf("CritRate") >= 0) {
        txt += "**Critical Rate:** " + (this.getGenshinCritRate()*100) + "%\n";
    }
    if (stats.indexOf("CritDamage") >= 0) {
        txt += "**Critical Damage:** " + (this.getGenshinCritDamage()*100) + "%\n";
    }

    for (var i in GENSHIN_ELEMENT_LIST) {
        if (stats.indexOf(GENSHIN_ELEMENT_LIST[i] + "Damage") >= 0) {
            txt += "**" + GENSHIN_ELEMENT_LIST[i] + " Damage Bonus:** " + (this.getGenshinElementalDamageBonus(GENSHIN_ELEMENT_LIST[i])*100) + "%\n";
        }
        if (stats.indexOf(GENSHIN_ELEMENT_LIST[i] + "RES") >= 0) {
            txt += "**" + GENSHIN_ELEMENT_LIST[i] + " Resistance:** " + (this.getGenshinElementalResistance(GENSHIN_ELEMENT_LIST[i])*100) + "%\n";
        }
    }

    return txt;
}

Fighter.prototype.getGenshinHP = function() {
    var hp = this.STR;

    var percentBonus = 100;
    if (this.hasSynergy(SYNERGY_GI2)) percentBonus += 25;

    return Math.floor(hp*percentBonus)/100;
}

Fighter.prototype.getGenshinBaseATK = function() {
    var atk = Math.floor(this.STR/10);

    return atk;
}
Fighter.prototype.getGenshinATK = function() {
    var atk = this.getGenshinBaseATK();

    var percentBonus = 100;
    if (this.hasSynergy(SYNERGY_GI1)) percentBonus += 25;

    return Math.floor(atk*percentBonus)/100;
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

    return er/100;
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

    return bonus/100;
}
Fighter.prototype.getGenshinElementalResistance = function(_element) {
    var res = 0;

    if (_element == "Physical") {
        if (this.giSuperconductCD > 0) res -= 40;
    }

    if (this.hasSynergy(SYNERGY_GI0)) res += 15;

    return res/100;
}
