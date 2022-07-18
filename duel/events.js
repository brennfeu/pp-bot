Duel.prototype.startRandomEvent = function() {
    var randomVar = getRandomPercent();
    var forcedEvent = this.FORCE_EVENT;

    if (this.AREA == AREA_PP4 && getRandomPercent() <= 25) {
        forcedEvent = true;
        if (getRandomPercent() <= 10) randomVar = 9;
        else randomVar = 19;
    }
    else if (this.AREA == AREA_PP10 && this.EVENT_BOSS == null && getRandomPercent() <= 10) {
        forcedEvent = true;
        randomVar = 50;
    }
    else if (this.AREA == AREA_PP13 && getRandomPercent() <= 20) {
        forcedEvent = true;
        randomVar = 43;
    }
    // update while condition when add new event
    else if (this.FORCE_EVENT || (this.AREA == AREA_PP3 && getRandomPercent() <= 25)) {
        while (!(randomVar <= 64 && randomVar >= 2)) {
            randomVar = getRandomPercent();
        }
    }

    if (this.MOVE_COUNT >= 10000) {
        // Heat death of the universe
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**HEAT DEATH OF THE UNIVERSE**",
                "description": "You punched PP so much, the world collapses. Good job! You don’t get to go to work tomorrow. Or school. Or anything else. You wanna know why? Well... you see... YOU FUCKED IT ALL UP!!!",
                "image": { "url": IMAGE_PP2 }
            }
        });
        if (this.ALTERNATE_MOVES) {
            this.addMessage("**You are sent back to your original reality!**");
            this.MOVE_COUNT = this.ALTERNATE_MOVE_COUNT;
            this.ALTERNATE_MOVES = false;
            return;
        }
        if (this.EVENT_BOSS != null && this.EVENT_BOSS.winsIfHeatDeath) {
            this.addMessage("**" + this.EVENT_BOSS.getName() + " is defeated!**");
            this.bothFightersAction(function(_fighter) {
                _fighter.win();
                grantPlayerAchievement(_fighter, 1); // Punch PP Really Hard
                grantPlayerDestroyer(_fighter);
            });
            this.addMessage("**Congratulations! You defeated God!**");
        }
        this.stopDuel();
        for (var i in DUEL_LIST) {
            if (DUEL_LIST[i].BATTLE_CHANNEL.id != this.BATTLE_CHANNEL.id) {
                this.addMessage("**===== EVENT =====**", undefined, {embed:
                    {
                        "title": "**HEAT DEATH OF THE UNIVERSE**",
                        "description": "The Universe suddenly collapses!",
                        "image": { "url": IMAGE_PP2 }
                    }
                });
                DUEL_LIST[i].MOVE_COUNT = 1000000;
                DUEL_LIST[i].stopDuel();
            }
        }
        return;
    }
    if (this.PPLEVEL > 50 && !this.INFERNAL_FIRELAND && this.MOVE_COUNT >= 100) {
        // INFERNAL FIRELAND
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**INFERNAL FIRELAND**",
                "description": "Plenty of forest fires have been set off as a result of your PP punching, making the nearby 100 square km into an Infernal Fireland!\nThe victory will be determined by your proficiency in your instrument. You two dueling souls have to come up with a solo each... the best one crowning the victory!"
            }
        });
        var winner = this.getRandomFighter();
        winner.infernalInstrument = 1; // Guitar
        this.otherFighter(winner).infernalInstrument = 2; // Synth
        this.INFERNAL_FIRELAND = true;
    }
    if (this.PPLEVEL > 50 && !this.PP_ARMAGEDDON && this.MOVE_COUNT >= 1000) {
        // PP ARMAGEDDON
        this.PP_ARMAGEDDON = true;
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PP ARMAGEDDON**",
                "description": "PP Punching has ascended, the end is near!"
            }
        });
    }

    // main progression events more likely to trigger
    if (this.FORCE_EVENT_ID == 0 && this.EVENT_BOSS != null) {
        // cthulhu
        if ((!isPlayerExpertPP(this.FIGHTER1.idUser) || !isPlayerExpertPP(this.FIGHTER2.idUser)) && this.INFERNAL_FIRELAND && getRandomPercent() <= 5) this.FORCE_EVENT_ID = 5;

        // wyndoella
        var prob = 5;
        if (this.AREA == AREA_PP11) prob = 25;
        if ((!this.FIGHTER1.destroyerOfWorlds || !this.FIGHTER2.destroyerOfWorlds) && this.PP_ARMAGEDDON && getRandomPercent() <= prob) this.FORCE_EVENT_ID = 50;
    }

    if (this.FORCE_EVENT_ID != 0) {
        randomVar = this.FORCE_EVENT_ID;
        this.FORCE_EVENT_ID = 0;
        forcedEvent = true;
    }

    if (randomVar == 2) { // PP Enlightenment
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PP ENLIGHTENMENT**",
                "description": "Your PP temporarily become enlightened! All moves can now be used for this turn but illegal moves are still illegal!"
            }
        });
        this.EVENT_PP_ENLIGHTENMENT = true;
    }
    else if (randomVar == 3) { // PP Purge
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PP PURGE**",
                "description": "All PPs grow a mohawk and start to roam the streets! Illegal moves can now be used freely but the judge can still see you if you use unavailable moves!"
            }
        });
        this.EVENT_PP_PURGE = true;
    }
    else if (randomVar == 4) { // Sexually Confused
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**SEXUAL CONFUSION**",
                "description": "Your PPs are confused for this turn!"
            }
        });
        this.EVENT_CONFUSION = true;
    }
    else if (this.PPLEVEL > 50 && randomVar == 5 && (this.MOVE_COUNT >= 30 || forcedEvent)) { // Cthulhu
        if (this.EVENT_BOSS != null && this.EVENT_BOSS.evolveToMoonLord) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**MOON LORD AWAKENS**",
                    "description": "Cthulhu is blessed by the moonlight!\nThe Moon Lord has been summoned and takes control over Cthulhu's body!"
                }
            });
            this.triggerBossFight(new MoonLordBoss(this));
        }
        else if (this.EVENT_BOSS != null && this.EVENT_BOSS.isMoonLord) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**MOON LORD REGENERATION**",
                    "description": "The Moon Lord is blessed by the moonlight!"
                }
            });
            this.EVENT_BOSS.heal(50000);
        }
        else if (this.EVENT_BOSS != null) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**CTHULHU SLEEPS**",
                    "description": "And nothing happens at all..."
                }
            });
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**CTHULHU AWAKENS**",
                    "description": "Your duel awakened the terrific elder one! Beat him before it's too late"
                }
            });
            this.triggerBossFight(new CthulhuBoss(this));
        }
    }
    else if (this.PPLEVEL > 100 && randomVar == 6 && (this.MOVE_COUNT >= 30 || forcedEvent)) { // Accidental Summoning
        var winner = this.getRandomFighter();
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**ACCIDENTAL SUMMONING**",
                "description": winner.getName() + " accidentaly plays Psychodiös on his phone and it summons Satan and the Ancient Fungus!"
            }
        });
        this.sendMessages();

        winner.playMove(EMOTE_PP26);
        winner.playMove(EMOTE_PP46);
    }
    else if (this.PPLEVEL > 50 && randomVar == 7) { // Blood Moon
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**BLOOD MOON**",
                "description": "If someone dies this turn, their STR automatically stays at 10 but the remaining damages goes positive in the DEX."
            }
        });
        this.EVENT_BLOOD_MOON = true;
        this.allFightersAction(function(_fighter) {
            if (_fighter.STR <= 0) {
                _fighter.DEXValue += (0 - _fighter.STR) + 10;
                _fighter.STRValue += (0 - _fighter.STR) + 10;
                _fighter.duel.addMessage(_fighter.getName() + " got saved thanks to the Blood Moon!");
            }
        });
        if (this.EVENT_BOSS != null && this.EVENT_BOSS.isMoonLord) {
            this.addMessage(this.EVENT_BOSS.getName() + " is blessed by the Blood Moon.");
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 8) { // Ascension
        var winner = this.getRandomFighter();
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**ASCENSION**",
                "description": winner.getName() + " accidentaly plays Ascend on his phone!"
            }
        });
        this.allFightersAction(function(_fighter) {
            _fighter.playMove(EMOTE_PP49);
        });
    }
    else if (this.PPLEVEL > 50 && [9, 10, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(randomVar) > -1 && (this.MOVE_COUNT >= 10 || forcedEvent)) { // Charge
        if (this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**GODS BIRTHDAY GIFTS**",
                    "description": "Gods decide to give you a regular charge each!"
                }
            });
            this.allFightersAction(function(_fighter) {
                _fighter.regularCharges++;
            });
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**GODS BIRTHDAY GIFTS**",
                    "description": "Gods decide to give you 3 quickening charges each!"
                }
            });
            this.allFightersAction(function(_fighter) {
                _fighter.quickeningCharges += 3;
            });
        }
    }
    else if (this.PPLEVEL > 50 && [19, 20, 21].indexOf(randomVar) > -1 && (this.MOVE_COUNT >= 25 || forcedEvent)) { // Charge
        if (this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**GODS CHRISTMAS GIFTS**",
                    "description": "Gods decide to give you a special charge each!"
                }
            });
            this.allFightersAction(function(_fighter) {
                _fighter.specialCharges++;
            });
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**GODS CHRISTMAS GIFTS**",
                    "description": "Gods decide to give you 10 quickening charges each!"
                }
            });
            this.allFightersAction(function(_fighter) {
                _fighter.quickeningCharges += 10;
            });
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 22) { // Huge Gay Night
        if (this.GAY_TURNS > 0) {
            this.GAY_TURNS += 10;
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**HUGE GAY NIGHT**",
                    "description": "Your gayness now lasts for 10 more turns!"
                }
            });
        }
        else {
            this.GAY_TURNS = 1;
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**HUGE GAY NIGHT**",
                    "description": "You suddenly become gay for this turn!"
                }
            });
        }

    }
    else if (this.PPLEVEL > 50 && randomVar == 23 && (this.MOVE_COUNT >= 30 || forcedEvent) && this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) { // PP Blessing
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PP BLESSING**",
                "description": "You suddenly feel new powers in your PP!"
            }
        });
        this.allFightersAction(function(_fighter) {
            _fighter.godList = [];
            for (var i in GOD_LIST) {
                if (GOD_LIST[i].name != "") _fighter.godList.push(GOD_LIST[i].name);
            }

            for (var i in FIGHTING_STYLE_LIST) {
                this[FIGHTING_STYLE_LIST[i].fighterStatus] = true;
            }
        });
    }
    else if (this.PPLEVEL > 50 && [24, 25].indexOf(randomVar) > -1) { // Free Lives
        if (this.EVENT_BOSS != null) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**FREE LIVES GOOD UPDATES**",
                    "description": "Let's NOT riot Free Lives HQ."
                }
            });
            if (this.EVENT_BOSS.canceledByGoodUpdates) {
                this.EVENT_BOSS = null;
            }
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**FREE LIVES RIOT**",
                    "description": "Let's riot Free Lives HQ just for fun!"
                }
            });
            this.triggerBossFight(new FreeLivesBoss(this));
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 26) { // Tragedy
        if (getRandomPercent() <= 20) {
            var winner = this.getRandomFighter();

            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**TRAGEDY**",
                    "description": "apolgy for bad english\nwhere were u wen club pp die\n" + winner.getName() + " was at house eating dorito when phone ring\n" + this.otherFighter(winner).getName() + ': "Club pp is kil"\n' + winner.getName() + ': *"no"*'
                }
            });
        }
        else {
            var brennUwu = CLIENT.emojis.cache.get(GOD_PP9.emote);
            var espinoza = CLIENT.emojis.cache.get(GOD_PP12.emote);
            var rageBrenn = CLIENT.emojis.cache.get("668946953681502248");
            var waifu = null;
            while (waifu == null) {
                var g = randomFromList(GOD_LIST);
                if (g.type == "waifu") {
                    waifu = CLIENT.emojis.cache.get(g.emote);
                }
            }

            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**TRAGEDY**",
                    "description": "*Dispair in IV acts.*"
                }
            });
            this.sendMessages();
            this.addMessage(`${brennUwu} ${waifu}` + "\n" + `${brennUwu} ${waifu} ${espinoza}` + "\n" + `${brennUwu}` + "\n" + `${rageBrenn}`);
            this.sendMessages();
        }
        this.addMessage("You both take your turn to recover from this tragedy!");

        this.allFightersAction(function(_fighter) {
            _fighter.attack = EMOTE_SKIP;
        });
    }
    else if (this.PPLEVEL > 50 && [27, 28, 29, 30, 31].indexOf(randomVar) > -1) { // PP-Net
        this.PP_NET += 1;
        if (this.PP_NET == 1) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "A new military AI has been created.\nIts name: PP-Net."
                }
            });
        }
        else if (this.PP_NET == 2) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "Rumors are saying PP-Net is growing sentient... and is doing more calculations than what was planned.\nA PP Robot Police now roams the streets."
                }
            });
        }
        else if (this.PP_NET == 3) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "PP Punching is now considered 'illegal' because 'it is too dangerous'. This is dumb.\nWe better hide somewhere where the PP Police can't find us."
                }
            });
        }
        else if (this.PP_NET == 4) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "An illegal PP Punch duel has been spotted! Surrender or die!"
                }
            });
            if (this.EVENT_BOSS != null) {
                this.addMessage(this.EVENT_BOSS.getName() + " surrenders!");
            }
            this.triggerBossFight(new PPRobotPoliceBoss(this));
        }
        else if (this.PP_NET == 5) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "Humans are getting hunted down by the PP Police!\nThe PP Rebellion will get its revenge!"
                }
            });
            var boss = new PPRobotPoliceBoss(this);
            boss.STRValue = 2000;
            this.triggerBossFight(boss);
        }
        else if (this.PP_NET == 6) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "New robots have been created to hunt us down, and suck our precious PP!\nWe have to hunt them down!"
                }
            });
            if (this.EVENT_BOSS != null) {
                this.addMessage(this.EVENT_BOSS.getName() + "'s PP gets harvested!");
                this.addMessage(this.EVENT_BOSS.getName() + " dies!");
            }
            this.triggerBossFight(new PPHarvesterBoss(this));
        }
        else if (this.PP_NET == 7) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP REBELLION RISING**",
                    "description": "The rebellion has prepared a serum that makes your PP faster and stronger! You both get 200 STR and 200 DEX!"
                }
            });
            this.bothFightersAction(function(_fighter) {
                _fighter.STRValue += 200;
                _fighter.DEXValue += 200;
            });
        }
        else if (this.PP_NET == 8) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "The PP-Net Hive-Mind itself challenges you!"
                }
            });
            if (this.EVENT_BOSS != null) {
                this.addMessage(this.EVENT_BOSS.getName() + "'s PP gets harvested!");
                this.addMessage(this.EVENT_BOSS.getName() + " dies!");
            }
            this.triggerBossFight(new PPNetHiveMindBoss(this));
        }
        else if (this.PP_NET < 0) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP-NET RISING**",
                    "description": "You better destroy the PP Terminator if you don't want the PP Rebellion to be without you!"
                }
            });
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**PP REBELLION RISING**",
                    "description": "The rebellion gives you another shot of the serum!\nYou both get 200 STR and 200 DEX!"
                }
            });
            this.bothFightersAction(function(_fighter) {
                _fighter.STRValue += 200;
                _fighter.DEXValue += 200;
            });
            this.PP_NET -= 1;
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 32) { // Day of the PP Equality
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**DAY OF THE PP EQUALITY**",
                "description": "Today is Day of the PP Equality! There is no DEX modifier for moves for this turn!"
            }
        });
        this.EVENT_PP_EQUALITY = true;
    }
    else if (this.PPLEVEL > 100 && randomVar == 33 && (this.PP_ARMAGEDDON || forcedEvent)) { // Eldritch Gate
        if (this.EVENT_BOSS != null && this.EVENT_BOSS.eldritchGateBuff) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**ELDRITCH GATE**",
                    "description": "The Eldritch Gate grows larger! " + this.EVENT_BOSS.getName() + " gets more power!"
                }
            });
            this.addMessage("The Eldritch Gate grows bigger! " + this.EVENT_BOSS.getName() + " gets more power!");
            this.EVENT_BOSS.heal(500000);
            this.EVENT_BOSS.baseDamage += 1000;
        }
        else {
            var boss = new SatanBoss(this);
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**ELDRITCH GATE**",
                    "description": "The Eldritch Gate has been opened! " + boss.getName() + " faces you!"
                }
            });
            if (this.EVENT_BOSS != null) {
                this.addMessage("He destroys " + this.EVENT_BOSS.getName() + " just to show off");
            }
            this.triggerBossFight(boss);
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 34 && (this.INFERNAL_FIRELAND || this.PP_ARMAGEDDON || forcedEvent)) { // Ascension Requiem
        var winner = this.getRandomFighter();
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**ASCENSION REQUIEM**",
                "description": winner.getName() + " accidentaly plays Ascended Depression on his phone!"
            }
        });
        this.bothFightersAction(function(_fighter) {
            _fighter.quickeningCharges += 10;
            _fighter.playMove(EMOTE_PP77);
        });
    }
    else if (this.PPLEVEL > 50 && randomVar == 35 && this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) { // BIZARRE PP
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**BIZARRE PP BATTLE**",
                "description": "Holy shit! Is that a reference to...?"
            }
        });
        this.bothFightersAction(function(_fighter) {
            var liste = Object.keys(STAND_SUMMONS);
            _fighter.currentStand = liste[Math.floor(Math.random()*liste.length)];
            _fighter.duel.addMessage(_fighter.getName() + " summons the Stånd: " + _fighter.currentStand);
        });
        this.checkStandSummon();
    }
    else if (this.PPLEVEL > 50 && randomVar == 36) { // Mega Movepool
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**MEGA MOVEPOOL**",
                "description": "You get blessed by the gods and get an extended movepool for this turn!"
            }
        });
        this.EVENT_MEGA_POOL = true;
    }
    else if (this.PPLEVEL > 50 && randomVar == 37) { // PP Depression
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PP DEPRESSION**",
                "description": "PP Punching is not fun... Maybe you should put an end to this...? It is utter nonsense to punch PP anyway, let's just end what you shouldn't have started..."
            }
        });
        this.EVENT_DEPRESSION = true;
        if (this.GAY_TURNS > 0) {
            this.GAY_TURNS = 0;
            this.addMessage("You're not even gay anymore...");
        }
    }
    else if (this.PPLEVEL > 50 && randomVar == 38 && (this.MOVE_COUNT >= 10 || forcedEvent)) { // Impending Bombardment
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**IMPENDING BOMBARDMENT**",
                "description": "A missile has been spotted above the battleground! You have one turn before it hits the ground and explodes!"
            }
        });
        this.EVENT_BOMB = true;
    }
    else if (randomVar == 39) { // Judgement
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**JUDGEMENT**",
                "description": "Who do you think is better? FriedEspinoza or espinoze? Make your bets!"
            }
        });
        this.ESPINOZA_CHOICE = EMOTE_FRIEDESPINOZA;
        if (getRandomPercent() <= 50) {
            this.ESPINOZA_CHOICE = EMOTE_ESPINOZE;
        }
    }
    else if (randomVar == 40) { // Spanish Inquisition
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PENIS INQUISITION**",
                "description": "Nobody expected them, but here they are!"
            }
        });
        var winner = this.getRandomFighter();
        if (this.otherFighter(winner).STR > winner.STR) {
            winner = this.otherFighter(winner);
        }
        if (this.EVENT_BOSS != null) winner = this.EVENT_BOSS;
        this.addMessage("They bite " + winner.getName() + "'s PP as he seems to have the toughest PP.");
        new FakeBoss(this, "Spanish Inquisition").attackFighter(winner, winner.STR/10, { damageType: "punch" });
    }
    else if (this.PPLEVEL > 50 && randomVar == 41) { // Jordan Dies
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**JORDAN DIES**",
                "description": "Jordan dies of PP Punch. You both are somewhat responsible for it, and feel the adrenaline of someone who killed in cold blood."
            }
        });
        this.allFightersAction(function(_fighter) {
            _fighter.bossKiller += 5;
        });
    }
    else if (randomVar == 42) { // Nudist Beach
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**NUDIST BEACH**",
                "description": "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!"
            }
        });
        this.allFightersAction(function(_fighter) {
            _fighter.resetBattleVariables();
        });
    }
    else if (this.PPLEVEL > 100 && randomVar == 43) { // Alternate Universe
        if (this.POOPOO_UNIVERSE) {
            this.POOPOO_UNIVERSE = false;
            this.ALTERNATE_MOVES = false;
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**ALTERNATE PP UNIVERSE**",
                    "description": "For some unknown reason, the duel gets teleported into an alternate universe!\nYou finally get out of the filthy poopoo punching world!"
                }
            });
        }
        else if (this.ALTERNATE_MOVES) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**ALTERNATE PP UNIVERSE**",
                    "description": "For some unknown reason, the duel gets teleported into an alternate universe!\nYou get back to your original world!"
                }
            });
            this.ALTERNATE_MOVES = false;
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**ALTERNATE PP UNIVERSE**",
                    "description": "For some unknown reason, the duel gets teleported into an alternate universe!\nEach moves has the same DEX modifier, illegal chances and ability to always pass, but their effect may have slightly changed!"
                }
            });
            this.ALTERNATE_MOVES = true;
            this.ALTERNATE_MOVE_COUNT = this.MOVE_COUNT;
        }

        if (this.WORLD_MERGE && getRandomPercent() <= 50) {
            this.FORCE_EVENT_ID = 65;
            this.startRandomEvent();
        }
    }
    else if (this.PPLEVEL > 100 && randomVar == 44 && (this.MOVE_COUNT >= 1000 || forcedEvent)) { // Obama
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**OBAMIUM**",
                "description": "Thanks to your PP Punching, a new Obamium source has been found! Scientists are giving you some!"
            }
        });
        this.OBAMIUM = true;
        this.OBAMIUM_DONE = true;
    }
    else if (this.PPLEVEL > 50 && [45, 46, 47, 48, 49].indexOf(randomVar) > -1) { // PP Net more likely to happen
        this.FORCE_EVENT_ID = 27;
        this.startRandomEvent();
    }
    else if (this.PPLEVEL > 200 && randomVar == 50 && (this.MOVE_COUNT >= 1000 || forcedEvent) &&
        ( (isPlayerExpertPP(this.FIGHTER1.idUser) && isPlayerWeebPP(this.FIGHTER1.idUser)) ||
        (isPlayerExpertPP(this.FIGHTER2.idUser) && isPlayerWeebPP(this.FIGHTER2.idUser) && this.FIGHTER2.idUser != CLIENT.user.id) )) { // Wyndoella
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**WYNDOELLA KILLS PUDDING**",
                "description": "The Universe itself challenges you!",
                "image": { "url": IMAGE_PP9 }
            }
        });
        this.triggerBossFight(new WyndoeallaBoss(this));
    }
    else if (this.PPLEVEL > 50 && randomVar == 51) { // IKEA
        if (this.EVENT_BOSS != null) {
            if (this.EVENT_BOSS.isIkea) {
                this.addMessage("**===== EVENT =====**", undefined, {embed:
                    {
                        "title": "**IKEA EXTENSION**",
                        "description": "The swedish pilgrims added a new extension to the Ikea.",
                    }
                });
                this.EVENT_BOSS.heal(500);
                this.EVENT_BOSS.baseDamage += 40;
            }
            else {
                this.addMessage("**===== EVENT =====**", undefined, {embed:
                    {
                        "title": "**PEACEFUL IKEA**",
                        "description": "Swedish pilgrims built a peaceful IKEA.\nThey offer you some ammos to help you in your battle.",
                        "image": { "url": IMAGE_PP10 }
                    }
                });
                this.bothFightersAction(function(_fighter) {
                    _fighter.fullOfAmmo = true;
                });
            }
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**IKEA RIOT**",
                    "description": "Swedish pilgrims invaded and built an IKEA!",
                    "image": { "url": IMAGE_PP10 }
                }
            });
            this.triggerBossFight(new IKEABoss(this));
        }
    }
    else if (this.PPLEVEL > 50 && [52, 53, 54].indexOf(randomVar) > -1) { // NEIGHBOUR CHAOS
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**PUNCHING NEIGHBOURHOOD**",
                "description": "Some random guys are punching PP next to your location. We might inherit from the chaos they create!"
            }
        });
        this.ADDITIONAL_FIGHT += 1;
        this.MOVE_COUNT += Math.floor(getRandomPercent()*this.MOVE_COUNT*2/100);
        this.sendMessages();

        // trigger movecount events if
        this.FORCE_EVENT_ID = -1;
        this.startRandomEvent();
        this.sendMessages();
    }
    else if (this.PPLEVEL > 50 && [55, 56, 57, 58, 59, 60, 61, 62, 63, 64].indexOf(randomVar) > -1 && (this.MOVE_COUNT >= 5 || forcedEvent)) { // GILGAMESH
        if (this.EVENT_BOSS != null) {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**KING OF HEROES**",
                    "description": "Gilgamesh helps " + this.EVENT_BOSS.getName() + "!"
                }
            });
            this.EVENT_BOSS.getRandomRelic();
        }
        else {
            this.addMessage("**===== EVENT =====**", undefined, {embed:
                {
                    "title": "**KING OF HEROES**",
                    "description": "Gilgamesh challenges you!"
                }
            });
            this.triggerBossFight(new GilgameshBoss(this));
        }

        this.sendMessages();
    }
    else if (this.WORLD_MERGE && [65, 66, 67].indexOf(randomVar) > -1 && this.MERGED_WORLDS.length < MERGABLE_WORLDS.length) { // WORLD MERGE
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**WORLD MERGE**",
                "description": "All shall be one and one shall be all. Let us all reach for the Singular Point of Truth."
            }
        });

        var worlds = shuffleArray(MERGABLE_WORLDS);
        for (var i in worlds) {
            if (this.MERGED_WORLDS.indexOf(worlds[i]) < 0) {
                this.triggerWorldMerge(worlds[i]);
                break;
            }
        }
    }
    // DON'T FORGET TO UPDATE FORCE EVENT IF NEW EVENTS ARE ADDED
    else if (this.PPLEVEL > 200 && randomVar == 90 && (this.MOVE_COUNT >= 50 || forcedEvent)) { // Brenn Ejaculates
        this.addMessage("**===== EVENT =====**", undefined, {embed:
            {
                "title": "**BRENN EJACULATES**",
                "description": "For some reasons, this summons every event!"
            }
        });
        if (getRandomPercent() <= 80) {
            this.addMessage("***splooch splooch***");
        }
        else {
            this.addMessage("**POV: You are Brenn.**\n```Infinite cum. You sit on the toilet to jack off, but you begin to cum uncontrollably. After ten spurts you start to worry. Your hand is sticky and it reeks of semen. You desperately shove your dick into a wad of toilet paper, but that only makes your balls hurt. The cum accelerates. It’s been three minutes. You can’t stop cumming. Your bathroom floor is covered in a thin layer of baby fluid. You try to cum into the shower drain but it builds up too fast. You try the toilet. The cum is too thick to be flushed. You lock the bathroom door to prevent the cum from escaping. The air grows hot and humid from the cum. The cum accelerates. You slip and fall in your own sperm. The cum is now six inches deep, almost as long as your still-erect semen hose. Sprawled on your back, you begin to cum all over the ceiling. Globs of the sticky white fluid begin to fall like raindrops, giving you a facial with your own cum. The cum accelerates. You struggle to stand as the force of the cum begins to propel you backwards as if you were on a bukkake themed slip-and-slide. Still on your knees, the cum is now at chin height. To avoid drowning you open the bathroom door. The deluge of man juice reminds you of the Great Molasses Flood of 1919, only with cum instead of molasses. The cum accelerates. It’s been two hours. Your children and wife scream in terror as their bodies are engulfed by the snow-white sludge. Your youngest child goes under, with viscous bubbles and muffled cries rising from the goop. You plead to God to end your suffering. The cum accelerates. You squeeze your dick to stop the cum, but it begins to leak out of your asshole instead. You let go. The force of the cum tears your urethra open, leaving only a gaping hole in your crotch that spews semen. Your body picks up speed as it slides backwards along the cum. You smash through the wall, hurtling into the sky at thirty miles an hour. From a bird’s eye view you see your house is completely white. Your neighbor calls the cops. The cum accelerates. As you continue to ascend, you spot police cars racing towards your house. The cops pull out their guns and take aim, but stray loads of cum hit them in the eyes, blinding them. The cum accelerates. You are now at an altitude of 1000 feet. The SWAT team arrives. Military helicopters circle you. Hundreds of bullets pierce your body at once, yet you stay conscious. Your testicles have now grown into a substitute brain. The cum accelerates. It has been two days. With your body now destroyed, the cum begins to spray in all directions. You break the sound barrier. The government deploys fighter jets to chase you down, but the impact of your cum sends one plane crashing to the ground. The government decides to let you leave the earth. You feel your gonads start to burn up as you reach the edges of the atmosphere. You narrowly miss the ISS, giving it a new white paint job as you fly past. Physicists struggle to calculate your erratic trajectory. The cum accelerates. The cum begins to gravitate towards itself, forming a comet trail of semen. Astronomers begin calling you the “Cummet.” You are stuck in space forever, stripped of your body and senses, forced to endure an eternity of cumshots. Eventually, you stop thinking.```");
        }
        this.sendMessages();
        var idList = shuffleArray([2, 3, 4, 6, 7, 8, 9, 19, 22, 23, 32, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 52, 65]);
        for (var i = 0; i < idList.length; i++) {
            this.FORCE_EVENT_ID = idList[i];
            this.startRandomEvent();
            this.sendMessages();
        }
    }
}
