var GungeonDragun = class extends Boss {
    constructor(_duel) {
        super(_duel, "High Dragun", 3200);
        this.baseDamage = 80;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/989822241359421450/unknown.png";
    }

    triggerDeath() {
        if (this.duel.GU_BABY_SERPENT) {
            this.duel.addMessage("The " + this.getName() + " roars and explodes, as his skull falls on the ground!");
            super.triggerDeath();
            this.duel.addMessage("-----------------");
            this.duel.addMessage("**You both enter the Gungeon's final chamber.**");
            this.duel.GU_CURRENT_FLOOR = FLOOR_GU6;
        }
        else {
            this.duel.addMessage("The " + this.getName() + " eats the gun serpent, regenerating a new advanced body!");
            this.duel.GU_BABY_SERPENT = false;
            this.duel.addMessage("-----------------");
            this.duel.triggerBossFight(new GungeonAdvancedDragun(this.duel));
        }
    }
}
var GungeonAdvancedDragun = class extends Boss {
    constructor(_duel) {
        super(_duel, "Advanced Dragun", 5200);
        this.baseDamage = 200;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/991240296950140979/unknown.png";
    }

    triggerDeath() {
        this.duel.addMessage("The " + this.getName() + " roars and explodes!");
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
        this.duel.addMessage("```Pity me, for my story is a tragedy. I was born in the hold of a tradesman's ship, where my mischief made our nest among the refuse. When the tradesman changed routes, the food they previously hauled was replaced with weaponry. I watched my brothers and sisters starve, though I vowed to protect them. So I learned to steal, from the captain's personal stores. It was sadly... not enough. My efforts to feed them only prolonged their suffering. I couldn't steal enough; it became an obsession. I knew that the end was coming. Eventually, driven mad with hunger, my mischief turned on each other. The weakest went first, but soon, the last of my kin were gone, eaten by their brethren. When the trader finally docked, I escaped his ship... and found myself here, trapped in time. I have clawed a home here from nothing. My own kingdom. But here I lie, cut down by a usurper with the pettiest of intent. Revenge? You do not know pain.. I have one last thing to ask... Take off your mask, so that I may see your face with my own eyes. ... Oh. That's... actually your face. Ha! I realize now... It seems... I never knew... True tragedy.```");
        this.duel.addMessage("You both gather some loot, and stumble upon a floating gun serpent that follows you.");
        this.duel.bothFightersAction(function(_fighter) {
            _fighter.fullOfAmmo = true;
            _fighter.guBattalionPower += _fighter.AET*3;
        });
        this.duel.GU_BOSS_DROP_MOVES = this.duel.GU_BOSS_DROP_MOVES.concat([ EMOTE_GU43, EMOTE_GU44, EMOTE_GU45 ]);
        this.duel.GU_BABY_SERPENT = true;
        this.duel.addMessage("-----------------");
        this.duel.GU_NEXT_FLOOR_COUNTDOWN = 3+Math.floor(getRandomPercent()/25);
        this.duel.GU_CURRENT_FLOOR = FLOOR_GU4;
        this.addMessage("**You both enter the Gungeon's next chamber.**");
    }
}
