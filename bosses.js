var Boss = class extends Fighter {
    constructor(_duel, _name, _baseHP) {
        super(CLIENT.user.id ,_duel.BATTLE_CHANNEL.id);
        this.bossName = _name;
        this.destroyerOfWorlds = false;

        this.STRValue = _baseHP;
        this.bossTriggeredAt = null;

        this.imageURL = null;
        this.baseDamage = 0;
        this.mimicPercentage = 0;
        this.grantsKillerBlessings = 10;

        this.themeSong = null;

        this.puddingLaughIfMimic = false;
        this.deathEndsDuel = false;
        this.winsIfHeatDeath = false;
        this.evolveToMoonLord = false;
        this.isMoonLord = false;
        this.canceledByGoodUpdates = false;
        this.eldritchGateBuff = false;
        this.isIkea = false;
    }
    getBaseName() {
        return this.bossName;
    }
    getImageURL() {
        return this.imageURL;
    }

    get DEX() {
        return 0;
    }

    turnChange() {
        super.turnChange();
        this.dexMalus = 0;

        if (this.STR <= 0) return triggerDeath();
    }

    triggerDeath() {
        this.duel.EVENT_BOSS = null;

        if (this.deathEndsDuel) {
            this.duel.bothFightersAction(function(_fighter) {
                _fighter.win(1);
            });
            return this.duel.stopDuel();
        }

        this.rollEspinozaMimic();
    }
    rollEspinozaMimic() {
        if (getRandomPercent() <= this.mimicPercentage) {
            if (this.puddingLaughIfMimic) {
                this.duel.addMessage("You hear Pudding laughing in the distance.");
                this.duel.addMessage("-----------------");
            }
            this.duel.addMessage(this.getName() + " was only a mimic!");

            if (this.duel.OBAMIUM_DONE && getRandomPercent() <= 75) {
                this.duel.addMessage(this.getName() + " is in fact Obamium Espinoza!\n" + IMAGE_PP6);
                this.duel.addMessage("-----------------");
                this.duel.triggerBossFight(new ObamiumEspinozaBoss(this.duel));
                return true;
            }
            else {
                this.duel.addMessage(this.getName() + " is in fact Raid Boss Espinoza!\n" + IMAGE_PP4);
                this.duel.addMessage("-----------------");
                this.duel.triggerBossFight(new RaidBossEspinozaBoss(this.duel));
                return true;
            }
            return false;
        }
    }

    triggerBossAttack() {
        var randomFighter = this.duel.getRandomFighter();
        if (this.bossTriggeredAt != null) randomFighter = this.bossTriggeredAt;

        this.duel.addMessage(this.getName() + " attacks " + randomFighter.getName() + "!");

        var damage = this.baseDamage;
        if (this.isMoonLord && this.duel.EVENT_BLOOD_MOON) damage += damage;

        if (randomFighter.cthulhuShield > 0) {
            this.duel.addMessage(randomFighter.getName() + " reflects the damages!");
            randomFighter.cthulhuShield -= 1;
            this.damage(damage);

            return false;
        }
        return randomFighter.damage(damage, false);
    }
}

var CthulhuBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Cthulhu", 10000);
        this.baseDamage = 50;
        this.deathEndsDuel = true;

        this.imageURL = "https://cdn.discordapp.com/emojis/715323505104650268.webp";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "eldritch") this.godList.push(GOD_LIST[i].name);
        }

        this.evolveToMoonLord = true;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " goes back to sleep to heal his poor PP!");
        super.triggerDeath();
    }
}
var MoonLordBoss = class extends CthulhuBoss {
    constructor(_duel) {
        super(_duel, "Moon Lord", 500000);
        this.baseDamage = 2000;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942778125211828264/unknown.png";

        this.isMoonLord = true;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " goes back into hiding behind the moon!");

        this.bothFightersAction(function(_fighter) {
            grantPlayerExpertPP(_fighter);
        });
        this.addMessage("**You are now PP Experts.**");
        this.addMessage("**You have gained access to the eldritch gods.**");

        super.super.triggerDeath();
    }
}

var FreeLivesBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Free Lives", 500);
        this.baseDamage = 20;
        this.mimicPercentage = 20;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942778509292621844/unknown.png";

        this.canceledByGoodUpdates = true;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " will now stop making updates for some time!");
        super.triggerDeath();
    }
}
var IKEABoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "IKEA", 500);
        this.baseDamage = 40;
        this.mimicPercentage = 20;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942778851841441812/unknown.png";

        this.godList = [];
        this.godList.push(GOD_PP3.name);
        this.godList.push(GOD_PP5.name);
        this.godList.push(GOD_PP6.name);
        this.godList.push(GOD_PP14.name);

        this.isIkea = true;
    }

    hasSynergy(_synergy) { return false; }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is destroyed!");
        super.triggerDeath();
    }
}

var WeebBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Weeb", 1);
        this.baseDamage = 30;
        this.mimicPercentage = 2;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942779136047468564/unknown.png";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "waifu") this.godList.push(GOD_LIST[i].name);
        }
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " runs away!");
        super.triggerDeath();
    }
}
var PuddingBlobBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Pudding Blob", 10);
        this.STRValue = 10*this.duel.MOVE_COUNT;
        this.baseDamage = 2*this.duel.MOVE_COUNT;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942781193039003688/unknown.png";

        this.godList = [];
        this.godList.push(GOD_PP3.name);
        this.godList.push(GOD_PP5.name);
        this.godList.push(GOD_PP6.name);
        this.godList.push(GOD_PP14.name);

        this.mimicPercentage = 5;
        this.this.grantsKillerBlessings = 3;
        this.puddingLaughIfMimic = true;
    }

    hasSynergy(_synergy) { return false; }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is destroyed!");
        super.triggerDeath();

        if (getRandomPercent() <= 75) {
            this.duel.PUDDING_NUISANCE = Math.floor(getRandomPercent()/10) + 1;
        }
        else {
            this.duel.addMessage("Pudding is bored of this, he will stop sending you blobs...");
        }
    }
}

var PPRobotPoliceBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "PP Robot Police", 750);
        this.baseDamage = 30;

        this.godList = [];
        this.godList.push(GOD_PP16.name);
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " will leave you alone for a bit!");
        if (this.PP_NET == 3 || this.PP_NET == 4) {
            this.FORCE_EVENT_ID = 29;
        }

        super.triggerDeath();
    }
}
var PPHarvesterBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "PP Harvester", 1500);
        this.baseDamage = 50;

        this.godList.push(GOD_PP16.name);
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is destroyed!");

        super.triggerDeath();
    }
}
var PPNetHiveMindBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "PP-Net Hive Mind", 20000);
        this.baseDamage = 100;

        this.godList.push(GOD_PP16.name);
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is destroyed!");
        super.triggerDeath();

        this.duel.addMessage("PP-Net is shut down ! Long live the human PPs!");
        this.duel.addMessage("-----------------");
        this.duel.addMessage("As you read the changelog, you see that a PP Terminator has been sent to the past to kill the past you!");
        this.duel.addMessage("-----------------");
        this.duel.addMessage("**ANOTHER TIME, ANOTHER PLACE**");
        this.duel.addMessage("-----------------");
        this.duel.addMessage(this.duel.FIGHTER1.getName() + ": *'I challenge you to a PP Punch duel !'*");
        this.duel.addMessage(this.duel.FIGHTER2.getName() + ": *'Alright, let's do this !'*");
        this.duel.addMessage(this.duel.FIGHTER1.getName() + ": *'Wait what is this thing ?'*");
        this.duel.addMessage("-----------------");
        this.duel.sendMessages();

        this.duel.FIGHTER1_SAVE = this.duel.FIGHTER1;
        this.duel.FIGHTER2_SAVE = this.duel.FIGHTER2;
        this.duel.FIGHTER1 = new Fighter(this.duel.FIGHTER1.idUser, this.duel.BATTLE_CHANNEL.id);
        this.duel.FIGHTER2 = new Fighter(this.duel.FIGHTER2.idUser, this.duel.BATTLE_CHANNEL.id);

        this.duel.triggerBossFight(new PPTerminatorBoss(this));
    }
}
var PPTerminatorBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "PP Terminator", 1500);
        this.baseDamage = 25;

        this.godList.push(GOD_PP16.name);
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is destroyed!");
        super.triggerDeath();

        this.duel.addMessage("-----------------");
        this.duel.addMessage("**ANOTHER TIME, ANOTHER PLACE**");
        this.duel.addMessage("-----------------");
        this.duel.sendMessages();

        this.duel.FIGHTER1 = this.duel.FIGHTER1_SAVE;
        this.duel.FIGHTER2 = this.duel.FIGHTER2_SAVE;

        this.duel.PP_NET = 200;
    }
}

var SatanBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Satan", 500000);
        this.baseDamage = 1000;
        this.mimicPercentage = 20;

        this.imageURL = "https://cdn.discordapp.com/emojis/358018763058053120.webp";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "eldritch") this.godList.push(GOD_LIST[i].name);
        }

        this.eldritchGateBuff = true;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " summons his true form!");
        this.duel.addMessage("-----------------");

        if (!rollEspinozaMimic()) this.duel.triggerBossFight(new SatanTrueFormBoss(this.duel));
    }
}
var SatanTrueFormBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Satan True Form", 100000000);
        this.baseDamage = 100000;
        this.deathEndsDuel = true;

        this.imageURL = "https://cdn.discordapp.com/emojis/715323505448714240.webp";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "eldritch") this.godList.push(GOD_LIST[i].name);
        }

        this.eldritchGateBuff = true;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is sent back to his Eldritch Realm!");
        super.triggerDeath();
    }
}

var SexStarvedMongoBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Sex Starved Mongo", 10);
        this.STRValue = (this.duel.FIGHTER1.STR + this.duel.FIGHTER2.STR)*10000;

        this.imageURL = "https://cdn.discordapp.com/emojis/755852607175524373.webp";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "eldritch" || GOD_LIST[i].type == "waifu") this.godList.push(GOD_LIST[i].name);
        }

        this.baseDamage = 0;
        this.mimicPercentage = 2;
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " is defeated!");
        this.duel.DOUBLE_POINTS = true;
        super.triggerDeath();
    }

    triggerBossAttack() {
        this.playMove(this.duel.getRandomEmote());
    }
}

var RaidBossEspinozaBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Raid Boss Espinoza", 1000000);
        this.baseDamage = 1000;
        this.mimicPercentage = 20;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942782354181750795/unknown.png";

        this.godList = [];
        for (var i in GOD_LIST) {
            if (GOD_LIST[i].type == "eldritch") this.godList.push(GOD_LIST[i].name);
        }
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " abandons!");
        this.bothFightersAction(function(_fighter) {
            grantPlayerWeebPP(_fighter);
        });
        this.addMessage("**You now have a Weeb PP.**");

        super.triggerDeath();
    }
}
var ObamiumEspinozaBoss = class extends RaidBossEspinozaBoss {
    constructor(_duel) {
        super(_duel, "Obamium Espinoza", Math.pow(10, 10));
        this.baseDamage = 1000000;
        this.mimicPercentage = 20;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942782715810414612/unknown.png";
    }
}

var WyndoeallaBoss = class extends Boss {
    constructor(_duel) {
        super(_duel, "Wyndoella", Math.pow(10, 99));
        this.baseDamage = Math.pow(10, 99);
        this.winsIfHeatDeath = true;

        this.imageURL = "https://cdn.discordapp.com/attachments/715322091804819486/942783201494044742/unknown.png";

        this.godList = [];
        for (var i in GOD_LIST) {
            this.godList.push(GOD_LIST[i].name);
        }
    }

    triggerDeath() {
        this.duel.addMessage(this.getName() + " somehow is... defeated...");
        this.MOVE_COUNT = 1000000;
        super.triggerDeath();
    }
}
