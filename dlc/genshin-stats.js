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
    var er = this.AET;

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

Fighter.prototype.getGenshinHealingBonus = function() {
    var heal = 0;

    return heal;
}

Fighter.prototype.getGenshinElementalDamageBonus = function(_element) {
    var bonus = 0;

    return bonus;
}
Fighter.prototype.getGenshinElementalResistance = function(_element) {
    var res = 0;

    return res;
}
