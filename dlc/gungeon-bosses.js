var GungeonDragun = class extends Boss {
    constructor(_duel) {
        super(_duel, "High Dragun", 3200);
        this.baseDamage = 80;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/989822241359421450/unknown.png";
    }

    triggerDeath() {
        this.duel.addMessage("The " + this.getName() + " roars and explodes, as his skull falls on the ground!");
        super.triggerDeath();
        this.duel.addMessage("-----------------");
        this.duel.addMessage("**You both enter the Gungeon's final chamber.**");
        this.duel.GU_CURRENT_FLOOR = FLOOR_GU6;
    }
}

var GungeonRat1 = class extends Boss {
    constructor(_duel) {
        super(_duel, "Resourceful Rat", 1480);
        this.baseDamage = 70;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/991073951855808552/unknown.png";
    }

    triggerDeath() {
        this.duel.addMessage("**The " + this.getName() + " calls upon his ultimate weaponry!**");
        this.duel.addMessage("-----------------");
        this.duel.triggerBossFight(new GungeonRat2(this.duel));
    }
}
var GungeonRat2 = class extends Boss {
    constructor(_duel) {
        super(_duel, "Mechanical RAT", 3515);
        this.baseDamage = 100;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/991076754984665088/unknown.png";
    }

    triggerDeath() {
        this.duel.addMessage("The " + this.getName() + " is exploding, and the Rat challenges you to a punching duel!");
        this.duel.addMessage("-----------------");
        this.duel.triggerBossFight(new GungeonRat3(this.duel));
    }
}
var GungeonRat3 = class extends Boss {
    constructor(_duel) {
        super(_duel, "Punch-Out Rat", 5000);
        this.baseDamage = 0;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/991076754984665088/unknown.png";
    }

    selectMove() {
        super.selectMove();
        if (this.attack != EMOTE_BOSS_ATTACK) return;

        this.attack = EMOTE_PP1;
    }

    triggerDeath() {
        this.duel.addMessage("**The " + this.getName() + " has been defeated!**");
        this.duel.addMessage("You both gather some loot, and stumble upon a floating gun serpent that follows you.");
        this.duel.bothFightersAction(function(_fighter) {
            _fighter.fullOfAmmo = true;
            _fighter.guBattalionPower += _fighter.AET*3;
        });
        this.duel.GU_BABY_SERPENT = true;
        this.duel.addMessage("-----------------");
        this.GU_NEXT_FLOOR_COUNTDOWN = 3+Math.floor(getRandomPercent()/25);
        this.GU_CURRENT_FLOOR = FLOOR_GU4;
        this.addMessage("**You both enter the Gungeon's next chamber.**");
    }
}
