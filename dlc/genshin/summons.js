var GenshinSummon = class extends Boss {
    constructor(_fighter, _name, _countdown, _hp, _genshinSummonStatusEmote = null) {
        super(_fighter.duel, _name, Math.floor(_hp));

        this.genshinSummonMaster = _fighter;
        this.genshinSummonCountdown = _countdown;
        this.genshinSummonStatusEmote = _genshinSummonStatusEmote;
    }

    turnChange() {
        this.genshinSummonCountdown -= 1;
        super.turnChange();
    }
}

var GenshinBaronBunny = class extends GenshinSummon {
    constructor(_fighter) {
        super(_fighter, "Baron Bunny", 3, _fighter.getGenshinHP()*0.41, CHAR_GI3.skillEmote);
    }

    turnChange() {
        super.turnChange();
        if (this.genshinSummonCountdown <= 0) {
            this.duel.addMessage("-----------------");
            this.duel.addMessage("Baron Bunny explodes in flames!");
            this.attackFighter(this.duel.getOppOf(this.genshinSummonMaster), this.genshinSummonMaster.getGenshinATK()*1.232, { damageType: "fire" })
            this.genshinSummonMaster.recieveGenshinParticle(4, "Pyro");
        }
    }
}
