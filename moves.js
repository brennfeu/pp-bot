Fighter.prototype.playMove = function(_newMove = this.attack) {
    this.duel.INFINITE_DAMAGE = 0;
    this.duel.LAST_FIGHTER_TO_USE_A_MOVE = this;

    var attack = _newMove;
    var numberAttacks = 1;

    // Cybion
    if (this.standPower == STAND_PP9 && getRandomPercent() <= 25) {
        this.duel.addMessage(this.getName() + " performs his move twice!");
        numberAttacks += numberAttacks;
    }
    if (this.duel.getOppOf(this).standPower == STAND_PP9 && getRandomPercent() <= 25) {
        this.duel.addMessage(this.duel.getOppOf(this).getName() + " interrupts the move!");
        numberAttacks = 0;
    }

    // Boomerang
    if (this.hasBoomerang >= 1) {
        numberAttacks += numberAttacks;
    }
    // Mikasa Special
    if (this.dualWield) {
        numberAttacks += numberAttacks;
    }
    // Ammo Crate
    if (this.fullOfAmmo) {
        numberAttacks = numberAttacks*3;
        this.fullOfAmmo = false;
    }
    // Satan Special Move
    if (this.satanicMoveMultiplier) {
        numberAttacks = numberAttacks*10;
        this.satanicMoveMultiplier = false;
    }

    if (this.duel.EVENT_BOSS != null && this.STR <= 0) {
        this.attack = EMOTE_DEAD;
    }

    for (var sdsds = 0; sdsds < numberAttacks; sdsds++) {
        this.duel.MOVE_COUNT_TURN += 1;
        this.duel.MOVE_COUNT += 1;
        if (this.duel.MOVE_COUNT_TURN >= 500) {
            if (this.duel.MOVE_COUNT_TURN == 500) {
                this.duel.addMessage("**Move cap achieved!**");
            }
            return;
        }

        if (_newMove == this.attack && sdsds == 0) {
            this.attackedThisTurn = true;
            if (attack != EMOTE_PP69) {
                this.ragingSpirit = 0;
            }
            if (attack != EMOTE_PP33 && attack != EMOTE_PP37 && this.duel.KIDNEY_CURSE > 0) {
                this.duel.KIDNEY_CURSE -= 1;
                this.duel.addMessage("The Kidney Curse diminishes...");
            }
        }

        switch(attack) {
            case(EMOTE_PP1): // Punching PP
                this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP!");
                this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
                if (getRandomPercent() <= 2) {
                    this.duel.addMessage(IMAGE_PP5);
                }
                break;
            case(EMOTE_PP2): // Punching PP Really Hard
                this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP really hard!");
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
                break;
            case(EMOTE_PP3): // Hologram
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " touches " + this.getOppName() + "'s PP vital point!");
                }
                else {
                    this.duel.addMessage(this.getName() + " insults " + this.getOppName() + " with all his power!");
                }

                this.duel.getOppOf(this).damage(500);
                if (this.duel.getOppOf(this).STR > 0) grantPlayerAchievement(this.duel.getOppOf(this), 3)
                break;
            case(EMOTE_PP4): // Flex
                this.duel.addMessage(this.getName() + " flexes!");
                this.heal(Math.floor(Math.random() * 170 + 30));
                break;
            case(EMOTE_PP5): // High Five
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " is feeling lonely...:(");
                }
                else {
                    this.duel.addMessage(this.getName() + " slaps " + this.getOppName());
                    this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
                }
                break;
            case(EMOTE_PP6): // Kick
                this.duel.addMessage(this.getName() + " kicks " + this.getOppName() + "'s PP!");
                this.isKicking = true;
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR/5)*3);
                this.isKicking = false;
                break;
            case(EMOTE_PP7): // Turkey
                this.duel.addMessage(this.getName() + " and " + this.duel.otherFighter(this).getName() + " start a feast!");
                if (this.duel.UWU_TEXT) {
                    this.duel.SEXY_TEXT = 11;
                }
                this.duel.allFightersAction(function(_fighter) {
                    _fighter.heal(300);
                    _fighter.turkeyCountdown = 6;
                    if (_fighter.isOverCircumcised) {
                        _fighter.duel.addMessage(_fighter.getName() + "'s circumcision gets a bit healed!");
                        _fighter.isOverCircumcised = false;
                        _fighter.isCircumcised = true;
                    }
                    else if (_fighter.isCircumcised) {
                        _fighter.duel.addMessage(_fighter.getName() + " is no longer circumcised!");
                        _fighter.isCircumcised = false;
                    }
                });
                break;
            case(EMOTE_PP8): // Trap Sign
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " is ready to burst!");
                    this.duel.addMessage("...");
                    this.duel.addMessage("Well...");
                }
                else {
                    this.duel.addMessage(this.getName() + " sets up a DOOM-REVERSE(tm)!");
                    this.doomReverse = 4;
                    if (this.STR <= 0) {
                        this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm)!");
                        this.STRValue += (0 - this.STR) + 10;
                        this.doomReverse = 0;
                    }
                }
                break;
            case(EMOTE_PP9): // Time Kick
                this.duel.addMessage(this.getName() + " wants a hockey puck PP...");
                if (this.isHockeyPuckPP) {
                    this.duel.addMessage("...but he already had one!");
                }
                else {
                    this.isHockeyPuckPP = true;
                    this.duel.addMessage("...and now he got it!");
                    this.DEXValue += 10;
                }
                break;
            case(EMOTE_PP10): // Tank
                if (this.summonTankCountdown == 1) {
                    this.duel.addMessage(this.getName() + " summons **The Monster**!");
                }
                else {
                    this.duel.addMessage(this.getName() + " brings a tank!");
                }
                this.duel.addMessage("FIRE!");
                this.duel.getOppOf(this).damage(1000);
                break;
            case(EMOTE_PP11): // Steel
                if (!this.duel.STEEL_PROTECTION) {
                    this.duel.STEEL_PROTECTION = true;
                    this.duel.addMessage(this.getName() + " sets up a protection!");
                }
                else {
                    this.duel.addMessage(this.getName() + " sets up a protection for nothing...");
                }
                break;
            case(EMOTE_PP12): // Overcircumscise
                this.duel.addMessage(this.getName() + " over-circumcises himself!");
                if (this.isOverCircumcised) {
                    this.duel.addMessage("Wait he already was!");
                }
                else {
                    this.isCircumcised = true;
                    this.isOverCircumcised = true;
                    this.STRValue = Math.floor(this.STR/2);
                }
                break;
            case(EMOTE_PP13): // Scout
                this.duel.addMessage(this.getName() + " examines the qualities of " + this.duel.getOppOf(this).getName() + "'s PP!");
                this.duel.addMessage("And he learns a lot!");
                this.hasExamined = 2;
                break;
            case(EMOTE_PP14): // SawBlade
                this.duel.addMessage(this.getName() + " cuts " + this.duel.getOppOf(this).getName() + "'s PP!");
                this.duel.getOppOf(this).bleedDamage += Math.floor(this.STR/15);
                break;
            case(EMOTE_PP15): // Hobro
                this.duel.addMessage(this.getName() + " reverses the damages and heals!");
                if (this.duel.REVERSE_DAMAGE < 0) {
                    this.duel.REVERSE_DAMAGE = 1;
                }
                else {
                    this.duel.REVERSE_DAMAGE = -1;
                }
                break;
            case(EMOTE_PP16): // Satan Boss
                if (this.duel.EVENT_BOSS != null && this.duel.EVENT_BOSS.eldritchGateBuff) {
                    this.duel.addMessage("Nothing happens...");
                }
                // Satan God
                else if (this.duel.otherFighter(this).godList.indexOf(GOD_PP22.name) > -1) {
                    this.duel.addMessage(this.duel.otherFighter(this).getName() + " resists the possession!");
                }
                else {
                    this.duel.addMessage(this.getName() + " possesses " + this.duel.otherFighter(this).getName() + "'s PP!");
                    this.duel.otherFighter(this).isPossessed = 2;
                }
                break;
            case(EMOTE_PP17): // RiotShield
                this.duel.addMessage(this.getName() + " gets a shield!");
                this.isProtected = true;
                break;
            case(EMOTE_PP18): // Red Pill
                this.duel.addMessage(this.getName() + " gets a pill!");
                this.redPillAddiction += 1;
                this.STRValue += 5*this.redPillAddiction;
                this.DEXValue += 3*this.redPillAddiction;
                break;
            case(EMOTE_PP19): // Pig
                this.duel.addMessage(this.getName() + " squeezes hog yeah yeah!");
                if (this.pigHeal < 5) {
                    this.pigHeal = 5;
                }
                else {
                    var i = 0;
                    while (fibonacciNumber(i) < this.pigHeal) {
                        i += 1;
                    }
                    this.pigHeal = fibonacciNumber(i+3);
                }
                if (this.hasBoner) {
                    this.duel.addMessage(this.getName() + " loses his boner!");
                }
                this.hasBoner = false;
                break;
            case(EMOTE_PP20): // DoomReverse (MookGrenade)
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " sets up a DOOM-REVERSE(tm)!");
                    this.doomReverse = 4;
                    if (this.STR <= 0) {
                        this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm)!");
                        this.STRValue += (0 - this.STR) + 10;
                        this.doomReverse = 0;
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " throws a grenade at " + this.getOppName() + "'s PP!");
                    this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
                    if (this.duel.EVENT_BOSS == null) {
                        this.duel.getOppOf(this).hasBurst = 2;
                    }
                }
                break;
            case(EMOTE_PP21): // Acid
                this.duel.addMessage(this.getName() + " gets an acid armor!");
                this.acidArmor = 5;
                break;
            case(EMOTE_PP22): // Circumscise
                this.duel.addMessage(this.getName() + " circumcises himself!");
                if (this.isCircumcised) {
                    this.duel.addMessage("Wait he already was!");
                }
                else {
                    this.isCircumcised = true;
                    this.resetBattleVariables();
                }
                break;
            case(EMOTE_PP23): // LaughSoul
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " changes his gods for a bit!");
                    var godListMemory = this.godList.slice();
                    this.godList = []
                    this.godList.push(shuffleArray(GOD_LIST)[0].name);

                    this.playMove(EMOTE_PP51);
                    this.duel.addMessage("-----------------");
                    this.playMove(EMOTE_PP52);
                    this.godList = godListMemory.slice();
                }
                else {
                    this.duel.addMessage(this.getName() + " laughs at " + this.duel.getOppOf(this).getName() + "!");
                    this.duel.addMessage("He gets " + this.duel.getOppOf(this).missedMoves*50 + " STR!");
                    this.STRValue += this.duel.getOppOf(this).missedMoves*50;
                }
                break;
            case(EMOTE_PP24): // KnockBack
                this.duel.addMessage(this.getName() + " swaps the natural STR values!");
                this.STRValue += this.duel.getOppOf(this).STRValue;
                this.duel.getOppOf(this).STRValue = this.STRValue - this.duel.getOppOf(this).STRValue;
                this.STRValue -= this.duel.getOppOf(this).STRValue;
                break;
            case(EMOTE_PP25): // Bombardment
                this.duel.addMessage(this.getName() + " calls for a bombardment!!!");
                this.duel.allFightersAction(function(_fighter) {
                    _fighter.damage(1000, true, new FakeBoss(_fighter.duel, "Bombardier"));
                });
                break;
            case(EMOTE_PP26): // Big Satan
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " summons Satan chaotic powers !!!");
                    this.duel.DISABLE_ABANDON = true;
                    if (this.duel.EVENT_BOSS != null && this.duel.EVENT_BOSS.eldritchGateBuff) {
                        // Satan Boss
                        this.duel.addMessage("But nothing happens...");
                    }
                    else if (this.godList.indexOf(GOD_PP22.name) > -1) {
                        // Satan God
                        for (var i = 0; i < 10; i++) {
                            this.duel.addMessage("-----------------");
                            this.playMove(this.duel.getRandomEmote());
                        }
                        this.duel.TRIGGERED_CHAOS = true;
                    }
                    else if (this.duel.getOppOf(this).godList.indexOf(GOD_PP22.name) > -1) {
                        // Satan God
                        for (var i = 0; i < 10; i++) {
                            this.duel.addMessage("-----------------");
                            this.duel.otherFighter(this).playMove(this.duel.getRandomEmote());
                        }
                        this.duel.TRIGGERED_CHAOS = true;
                    }
                    else {
                        this.duel.allFightersAction(function(_fighter) {
                            _fighter.duel.addMessage("-----------------");
                            _fighter.playMove(_fighter.duel.getRandomEmote(false));
                            _fighter.duel.addMessage("-----------------");
                            _fighter.playMove(_fighter.duel.getRandomEmote(false));
                            _fighter.duel.addMessage("-----------------");
                            _fighter.playMove(_fighter.duel.getRandomEmote(false));
                            _fighter.duel.addMessage("-----------------");
                            _fighter.playMove(_fighter.duel.getRandomEmote());
                            _fighter.duel.addMessage("-----------------");
                            _fighter.playMove(_fighter.duel.getRandomEmote());
                        });
                        this.duel.TRIGGERED_CHAOS = true;
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " performs a Satanic Rite!");
                    this.satanicReverse = 4;
                }
                break;
            case(EMOTE_PP27): // BigGuyBullet
                this.duel.addMessage(this.getName() + " uses his PP as a gun!");
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR/5));
                this.duel.bothFightersAction(function(_fighter) {
                    _fighter.DEXValue -= 20;
                });
                break;
            case(EMOTE_PP28): // BigGuy
                this.duel.addMessage(this.getName() + " intimidates " + this.duel.getOppOf(this).getName() + "!");
                this.duel.getOppOf(this).hasBurst = 2;
                break;
            case(EMOTE_PP29): // Barrel
                if (!this.duel.ALTERNATE_MOVES) {
                    if (!this.duel.BARREL_DAMAGE) {
                        this.duel.BARREL_DAMAGE = true;
                        this.duel.addMessage(this.getName() + " sets up a barrel!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " sets up a barrel for nothing...");
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " sets up a barrel!");
                    this.duel.addMessage("It explodes!");
                    this.duel.allFightersAction(function(_fighter) {
                        _fighter.damage(200, false);
                    });
                }
                break;
            case(EMOTE_PP30): // ExclamationPoint
                this.duel.addMessage(this.getName() + " tries to go back too far in time!");
                this.duel.addMessage("This create a space-time distortion!");
                this.duel.DISABLE_ABANDON = true;
                this.playMove(this.duel.getRandomEmote());
                break;
            case(EMOTE_PP31): // Save Me Sign
                this.duel.addMessage(this.getName() + " wants to be saved!");
                this.heal(50);
                break;
            case(EMOTE_PP32): // High Five Emote
                this.duel.STOPPED_MOVE_LIST = this.duel.LIST_AVAILABLE_ATTACKS;
                this.duel.addMessage(this.getName() + " high fives the arbitrator!");
                if (this.duel.BLIND_COUNTDOWN > 0) {
                    this.duel.addMessage("He is no longer blind!");
                    this.duel.addMessage(this.getName() + " gets 20 DEX as a reward!");
                    this.duel.BLIND_COUNTDOWN = 0;
                    this.DEXValue += 20;
                }
                else {
                    this.duel.addMessage("He appreciates it!");
                }
                break;
            case(EMOTE_PP33): // Headless - Big Kidney Stone
                this.duel.addMessage(this.getName() + " shoots a big kidney stone!");
                this.damage(50, false);
                this.duel.getOppOf(this).damage(50);
                if (this.attack == attack) {
                    this.duel.KIDNEY_CURSE += 1;
                    this.duel.addMessage("The Kidney Curse grows bigger!");
                }
                break;
            case(EMOTE_PP34): // Facehugger
                this.duel.addMessage(this.getName() + " impregnates " + this.getOppName() + "!");
                this.duel.getOppOf(this).damage(Math.floor(this.duel.getOppOf(this).STR/2));
                if (!this.duel.getOppOf(this).isAlienPP) {
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets an alien PP!");
                }
                this.duel.getOppOf(this).isAlienPP = true;
                break;
            case(EMOTE_PP35): // Facehugged
                this.duel.addMessage(this.getName() + " impregnates the arbitratory!");
                if (this.duel.BLIND_COUNTDOWN < 1) {
                    this.duel.BLIND_COUNTDOWN = 1;
                }
                this.duel.BLIND_COUNTDOWN += 3;
                if (getRandomPercent() < 33) {
                    this.duel.BLIND_COUNTDOWN = 9999999;
                    this.duel.addMessage("It looks like permanent damage!");
                }
                if (this.duel.UWU_TEXT) {
                    this.duel.SPOIL_TEXT = 1;
                }
                break;
            case(EMOTE_PP36): // Explosion
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " plays the terrorist move!");
                    if (this.isTerrorist) {
                        this.duel.getOppOf(this).damage(5000);
                    }
                    else {
                        this.duel.addMessage("But no terrorist move was planned!");
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " is gonna say the N-Word!");
                    if (this.isTerrorist) {
                        this.duel.addMessage("MR " + this.getOppName().toUpperCase() + " GET DOWN!\n" + IMAGE_PP1);
                        this.duel.getOppOf(this).damage(5000);
                    }
                    else {
                        this.duel.addMessage("YOU CAN'T SAY THAT IT'S RACIST!");
                        this.damage(5000, false)
                    }
                }
                break;
            case(EMOTE_PP37): // Disembowled - Kidney Stone
                this.duel.addMessage(this.getName() + " shoots a kidney stone!");
                this.damage(25, false);
                this.duel.getOppOf(this).damage(25);
                if (this.attack == attack) {
                    this.duel.KIDNEY_CURSE += 1;
                    this.duel.addMessage("The Kidney Curse grows bigger!");
                }
                break;
            case(EMOTE_PP38): // DeadBro
                this.duel.addMessage(this.getName() + " wants a fast PP...");
                if (this.isFastPP) {
                    this.duel.addMessage("...but he already had one!");
                    this.DEXValue += 5;
                }
                else {
                    this.isFastPP = true;
                    this.duel.addMessage("...and now he got it!");
                    this.DEXValue += 5;
                }
                break;
            case(EMOTE_PP39): // Interrogation Point
                this.duel.addMessage(this.getName() + " summons a random move!");
                this.duel.DISABLE_ABANDON = true;
                var emote = this.duel.getRandomEmote();
                this.playMove(emote);
                break;
            case(EMOTE_PP40): // ChestBurst
                this.duel.addMessage(this.getName() + " wants a big PP...");
                if (this.isBigPP) {
                    this.duel.addMessage("...but he already had one!");
                    this.STRValue += 20;
                }
                else {
                    this.isBigPP = true;
                    this.duel.addMessage("...and now he got it!");
                    this.STRValue += 20;
                }
                break;
            case(EMOTE_PP41): // 007 Drunk
                this.duel.addMessage(this.getName() + " wants a drunk PP...");
                if (this.isDrunkPP) {
                    this.duel.addMessage("...but he already had one!");
                    this.DEXValue += 5;
                }
                else {
                    this.isDrunkPP = true;
                    this.duel.addMessage("...and now he got it!");
                    this.DEXValue += 10;
                }
                break;
            case(EMOTE_PP42): // Bronan Slam
                this.duel.addMessage(this.getName() + " builds up for his next attack...");
                this.megaBuildUp += 5;
                break;
            case(EMOTE_PP43): // BrocketeerDive
                this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP with his head!");
                this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
                if (this.duel.EVENT_BOSS == null) {
                    this.duel.getOppOf(this).hasBurst = 2;
                }
                break;
            case(EMOTE_PP44): // Kamikaze
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " plans a suicide move!");
                }
                else {
                    this.duel.addMessage(this.getName() + " gets a N-Word Pass!");
                }
                this.duel.ILLEGAL_BOMBING = true;
                this.isTerrorist = true;
                break;
            case(EMOTE_PP45): // Boomerang
                this.duel.addMessage(this.getName() + " gets a boomerang.");
                this.hasBoomerang = 4;
                break;
            case(EMOTE_PP46): // TruffleHistorian
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.DISABLE_ABANDON = true;
                    this.duel.addMessage(this.getName() + " calls the Ancient Fungus!");
                    if (this.duel.UWU_TEXT) {
                        this.duel.YES_TEXT = 1;
                    }

                    var chaosNumber = getRandomPercent();
                    if (chaosNumber >= 90) grantPlayerAchievement(this, 5);
                    var winner = this.duel.getRandomFighter();
                    if (winner.eldritchFriend) {
                        chaosNumber += 20;
                    }

                    this.duel.addMessage("He will use " + chaosNumber + "% of his power in " + winner.getName() + "!");
                    chaosNumber = Math.floor(chaosNumber/4);

                    var i;
                    for (i = 0; i < chaosNumber; i++) {
                        this.duel.addMessage("-----------------");
                        winner.playMove(this.duel.getRandomEmote());
                    }
                    this.duel.TRIGGERED_CHAOS = true;
                }
                else {
                    this.duel.addMessage(this.getName() + " calls the Big Fungus!");
                    var currentSize = this.godList.length;
                    while (this.godList.length < currentSize+1) {
                        var r = randomFromList(GOD_LIST).name;
                        if (this.godList.indexOf(r) < 0) {
                            this.godList.push(r);
                            this.duel.addMessage(this.getName() + " becomes a " + r + " Priest!");
                        }
                    }
                }
                break;
            case(EMOTE_PP47): // Pudding
                if (this.hasSynergy(SYNERGY_PP13) && _newMove == this.attack) {
                    // Infinite Intellect
                    this.duel.addMessage(this.getName() + " proves with his high intellectual abilities that he shouldn't play this move but " + this.duel.getOppOf(this).getName() + " should!");
                    if (this.duel.getOppOf(this).hasSynergy(SYNERGY_PP13)) {
                        this.duel.addMessage("-----------------");
                        this.duel.addMessage("*Both fighters then debated on the use of this move ! The intellectual intercourse between " + this.getName() + " and " + this.duel.getOppOf(this).getName() + " lasted for 11 years. They both killed themselves at the end, no one knows what happened...*");
                        this.STRValue = -999999999;
                        this.duel.getOppOf(this).STRValue = -999999999;
                    }
                    else {
                        this.duel.getOppOf(this).playMove(EMOTE_PP47);
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " abandons the battle!");
                    this.STRValue = -999999999;
                    if (getRandomPercent() < 10) {
                        this.duel.addMessage("Bruh.");
                    }
                    return;
                }
                break;
            case(EMOTE_PP48): // Brennfeu
                this.duel.addMessage(this.getName() + " messes everything up!");
                this.duel.addMessage("As always!");
                if (this.duel.UWU_TEXT) {
                    this.duel.RUSSIAN_TEXT = 4;
                }
                this.duel.allFightersAction(function(_fighter) {
                    _fighter.STRValue += Math.floor((getRandomPercent() - 50)/2);
                    _fighter.DEXValue += Math.floor((getRandomPercent() - 50)/2);
                });
                break;
            case(EMOTE_PP49): // Soup
                if (!this.duel.ALTERNATE_MOVES) {
                    this.duel.addMessage(this.getName() + " ascends!");
                    if (!this.livingGod) {
                        if (this.duel.UWU_TEXT) {
                            this.duel.GOD_TEXT = 3;
                        }
                        this.duel.addMessage("Behold " + this.getName() + " the living God!");
                        this.livingGod = true;
                    }
                    else {
                        this.duel.addMessage("But " + this.getName() + " already was a living god...");
                    }
                }
                else {
                    this.quickeningCharges += 10;
                    this.playMove(EMOTE_PP77);
                }
                break;
            case(EMOTE_PP50): // Perhaps
                this.duel.addMessage(this.getName() + " thinks about life and the universe...");
                if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
                    var randomEvent = getRandomPercent();
                    // Events, chance at becoming god, making everything proc twice, both players getting 0 dex.
                    if (randomEvent <= 25) {
                        if (!this.duel.FORCE_EVENT) {
                            this.duel.addMessage("Events will now occur every turn!");
                        }
                        else {
                            this.duel.addMessage("Events will stop occurring every turn!");
                        }
                        this.duel.FORCE_EVENT = !this.duel.FORCE_EVENT;
                    }
                    else if (randomEvent <= 50) {
                        if (getRandomPercent() <= 34) {
                            this.duel.addMessage("His body and mind have now ascended!");
                            this.playMove(EMOTE_PP49);
                        }
                        else {
                            this.duel.addMessage("But he isn't ready to become a Living God...");
                        }
                    }
                    else if (randomEvent <= 75) {
                        this.duel.addMessage("Natural values have been doubled!");
                        this.duel.allFightersAction(function(_fighter) {
                            _fighter.STRvalue = _fighter.STRValue*2;
                            _fighter.DEXvalue = _fighter.DEXValue*2;
                        });
                    }
                    else {
                        this.duel.addMessage("Both fighters DEX has been changed to 0!");
                        this.DEXValue = 0 - (this.DEX - this.DEXValue);
                        this.duel.otherFighter(this).DEXValue = 0 - (this.duel.otherFighter(this).DEX - this.duel.otherFighter(this).DEXValue);
                    }
                }
                else {
                    this.duel.addMessage("Wait he forgot about the battle...");
                }
                break;
            case(EMOTE_PP51): // Priest Regular Move
                if (this.silenced || this.duel.POOPOO_UNIVERSE) {
                    this.duel.addMessage(this.getName() + " cannot call for superior powers...");
                    return;
                }
                else {
                    this.duel.addMessage(this.getName() + " calls for superior powers!");
                }
                if (this.regularCharges > 0 && sdsds == 0 && this.attack == attack) {
                    this.regularCharges -= 1;
                }
                if (this.godList.indexOf(GOD_PP8.name) > -1) { // Fabulous Toast Man
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Fabulous Toast Man answers his calls!");
                    var randomGod = randomFromList(GOD_LIST);
                    var nbTries = 0;
                    while ((this.godList.indexOf(randomGod.name) > -1 || randomGod.type != "normal") && nbTries < 100) {
                        randomGod = randomFromList(GOD_LIST);
                        nbTries += 1;
                    }
                    if (nbTries < 100) {
                        this.godList.push(randomGod.name);
                        this.duel.addMessage(this.getName() + " becomes a " + randomGod.name + " Priest!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " has no more god to worship, so he shall become one!");
                        this.playMove(EMOTE_PP49)
                    }
                }
                if (this.godList.indexOf(GOD_PP1.name) > -1) { // Mongo
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Mongo answers his calls!");
                    this.duel.addMessage(this.getName() + " gains some barbarian strength");
                    this.heal(50);
                }
                if (this.godList.indexOf(GOD_PP2.name) > -1) { // Hermit
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Hermit answers his calls!");
                    this.duel.addMessage(this.getName() + " gets a golden spoon.");
                    this.goldenSpoons += 1;
                    if (this.goldenSpoons%2 == 0) {
                        var nbTries = 0;
                        var test = true;
                        while (test && nbTries < 100) {
                            var randomGod = randomFromList(GOD_LIST);
                            nbTries += 1;
                            if (nbTries < 100) {
                                if (this.godList.indexOf(randomGod.name) < 0 && randomGod.type == "eldritch") {
                                    test = false;
                                    this.godList.push(randomGod.name);
                                    this.duel.addMessage(this.getName() + " becomes a " + randomGod.name + " Priest!");
                                }
                            }
                            else {
                                this.duel.addMessage(this.getName() + " has all the eldritch gods on his side!");
                            }
                        }
                    }
                }
                if (this.godList.indexOf(GOD_PP3.name) > -1) { // LeprePuds
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("LeprePuds answers his calls!");
                    this.duel.addMessage(this.getName() + " feels lucky!");
                    this.isLucky = 4;
                    this.badLuck = false;
                }
                if (this.godList.indexOf(GOD_PP4.name) > -1) { // Empress Theresa
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Empress Theresa answers his calls!");
                    this.duel.addMessage(this.getName() + " recieves supply drops!");
                    this.hasSupplyDrops = true;
                    this.duel.increaseTheresaInfluence();
                }
                if (this.godList.indexOf(GOD_PP5.name) > -1) { // Hello There Puds
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Hello There Puds answers his calls!");
                    this.duel.addMessage(this.getName() + " tries to scare " + this.getOppName() + "!");
                    if (getRandomPercent() <= 50+this.STR-this.duel.getOppOf(this).STR) {
                        this.duel.getOppOf(this).damage(100);
                    }
                    else {
                        this.duel.addMessage("But it fails!");
                    }
                }
                if (this.godList.indexOf(GOD_PP6.name) > -1) { // Dickdickson666
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("DickDickSon666 answers his calls!");
                    if (this.eldritchFriend) {
                        this.duel.addMessage("But "+ this.getName() + " already has an eldritch friend!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " gets an eldritch friend!");
                        this.eldritchFriend = true;
                    }
                    if (this.duel.getOppOf(this).eldritchFriend) {
                        this.duel.addMessage("This place is getting too much eldritch energy...");
                        this.duel.FORCE_EVENT_ID = 5; // Cthulhu / Moon Lord
                    }
                }
                if (this.godList.indexOf(GOD_PP7.name) > -1) { // Jew
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Minecraft Villager answers his calls!");
                    this.duel.addMessage(this.getName() + " uses his long nose to get a new special charge!");
                    this.gettingSpecialCharge = 4;
                }
                // GOD 8 IS FIRST
                if (this.godList.indexOf(GOD_PP9.name) > -1) { // Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Brenn answers his calls!");
                    this.duel.addMessage(this.getName() + " plays a guitar solo that makes " + this.duel.getOppOf(this).getName() + "'s PP bleed!");
                    this.duel.getOppOf(this).bleedDamage += 5;
                }
                if (this.godList.indexOf(GOD_PP10.name) > -1) { // Fabio
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Fabio answers his calls!");
                    this.duel.addMessage(this.getName() + " makes you all turn gay!");
                    this.duel.GAY_TURNS = 5;
                }
                if (this.godList.indexOf(GOD_PP11.name) > -1) { // Country Music Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Country Music Brenn answers his calls!");
                    if (this.isCowboy) {
                        this.duel.addMessage("But " + this.getName() + " already is Cow-Boy!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " becomes a Cow-Boy!");
                        this.isCowBoy = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP12.name) > -1) { // Espinoza
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Espinoza answers his calls!");
                    this.duel.addMessage(this.getName() + " sniffs " + this.duel.getOppOf(this).getName() + "'s PP and becomes faster!");
                    if (this.hasSynergy(SYNERGY_PP21)) {
                        this.DEXValue += 20;
                        this.duel.getOppOf(this).DEXValue -= 20;
                    }
                    else {
                        this.DEXValue += 10;
                        this.duel.getOppOf(this).DEXValue -= 10;
                    }
                }
                if (this.godList.indexOf(GOD_PP13.name) > -1) { // 700IQ
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Mutantoid Lycanthrope answers his calls!");
                    this.duel.addMessage(this.getName() + " licks his wounds!");
                    this.heal(Math.floor(this.damageTaken/2));
                }
                if (this.godList.indexOf(GOD_PP14.name) > -1) { // UREGonnaGETWhat
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Rapper Pudding answers his calls!");
                    this.duel.addMessage(this.getName() + " gives a boner punch to " + this.getOppName() + "!");
                    this.hasBoner = true;
                    this.duel.getOppOf(this).damage(Math.floor((this.STR - (this.DEX/2))/5));
                }
                if (this.godList.indexOf(GOD_PP15.name) > -1) { // STFU Isaac
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Isaac answers his calls!");
                    this.duel.addMessage(this.getName() + " starts to cry!");
                    this.duel.addMessage("PP Arbitrator helps the fighters!");
                    this.duel.FIGHTER1.heal(50);
                    this.duel.FIGHTER2.heal(50);
                }
                if (this.godList.indexOf(GOD_PP16.name) > -1) { // The Man Who Made a Monster
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Man who Made a Monster answers his calls!");
                    this.duel.addMessage(this.getName() + " drinks " + this.duel.getOppOf(this).getName() + "'s salty tears!");
                    this.tearDrinker += 5;
                }
                if (this.godList.indexOf(GOD_PP17.name) > -1) { // Hitler
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Literally Hitler answers his calls!");
                    if (this.duel.ILLEGAL_JEWS) {
                        this.duel.addMessage(this.getName() + " makes Villager priests illegal again, just to be sure.");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " makes Villager priests illegal!");
                        this.duel.ILLEGAL_JEWS = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP18.name) > -1) { // Salt King
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Salt King answers his calls!");
                    if (this.duel.getOppOf(this).isSalty) {
                        this.duel.addMessage("But " + this.duel.getOppOf(this).getName() + " is already salty...");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " makes his opponent's wounds salty!");
                        this.duel.getOppOf(this).bleedDamage += 3;
                        this.duel.getOppOf(this).isSalty = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP19.name) > -1) { // Chad Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Chad Brenn answers his calls!");
                    var randomGod = randomFromList(GOD_LIST);
                    var nbTries = 0;
                    while ((this.godList.indexOf(randomGod.name) > -1 || randomGod.type != "waifu") && nbTries < 100) {
                        randomGod = randomFromList(GOD_LIST);
                        nbTries += 1;
                    }
                    if (nbTries < 100) {
                        this.godList.push(randomGod.name);
                        this.duel.addMessage(this.getName() + " becomes a " + randomGod.name + " Priest!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " already is a filthy weeb!");
                    }
                }
                if (this.godList.indexOf(GOD_PP20.name) > -1) { // Mikasa
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Mikasa answers his calls!");
                    this.duel.addMessage(this.getName() + " gets her blessing for 3 turns!");
                    this.mikasaBuff = 4;
                }
                if (this.godList.indexOf(GOD_PP21.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // D.I.C.K.
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("D.I.C.K. answers his calls!");
                    this.duel.addMessage(this.getName() + " gets overcircumcised and gains more DEX!");
                    this.isOverCircumcised = true;
                    this.DEXValue += 10;
                }
                if (this.godList.indexOf(GOD_PP22.name) > -1 && !this.duel.otherFighter(this).eldritchFriend) {
                     // Satan
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Satan answers his calls!");
                    this.duel.addMessage(this.getName() + " removes his bad status!");
                    this.resetBattleVariables();
                    this.duel.addMessage(this.getName() + " possesses " + this.duel.otherFighter(this).getName() + "'s PP for 2 turns!");
                    this.duel.otherFighter(this).isPossessed = 3;
                }
                if (this.godList.indexOf(GOD_PP23.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // Ancient Fungus
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Ancient Fungus answers his calls!");
                    if (this.duel.getOppOf(this).regularCharges <= 0 && this.duel.getOppOf(this).specialCharges > 0) {
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " has no charge to loose!");
                    }
                    if (this.duel.getOppOf(this).regularCharges > 0) {
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses his regular charge!");
                        this.duel.getOppOf(this).regularCharges = 0;
                    }
                    if (this.duel.getOppOf(this).specialCharges > 0) {
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses his special charge!");
                        this.duel.getOppOf(this).specialCharges = 0;
                    }
                }
                if (this.godList.indexOf(GOD_PP24.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // Time Cube
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Time Cube answers his calls!");
                    this.duel.addMessage(this.getName() + " shares his theory with " + this.duel.getOppOf(this).getName() + "!");
                    this.duel.addMessage("He is very confused!");
                    this.duel.getOppOf(this).grabbedPP = 2;
                    this.duel.addMessage("*You are taught Boring, You act Boring, You are the Evil on Earth. If a Man cannot tear a page from the marshmallow and burn it - then he cannot be a scientist. Seek Wisdom of Cubic Life Intelligence - or you die boring. MY WISDOM DEBUNKS GODS OF ALL RELIGIONS AND ACADEMIA.*");
                    this.duel.addMessage("***I do not promote or suggest anyone kissing you, but you are unfit to live on Earth.***")
                }
                if (this.godList.indexOf(GOD_PP25.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // Cthulhu
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Cthulhu answers his calls!");
                    this.duel.addMessage(this.getName() + " gets a new tentacle!");
                    this.tentacles += 1;
                }
                if (this.godList.indexOf(GOD_PP26.name) > -1) { // Ranger
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Ranger answers his calls!");
                    this.playMove(EMOTE_PP4);
                    this.playMove(EMOTE_PP28);
                }
                if (this.godList.indexOf(GOD_PP27.name) > -1) { // Kurisu
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Kurisu answers his calls!");
                    this.duel.addMessage(this.getName() + " recieves a mail from the future!");
                    this.duel.addMessage(this.getName() + " now knows the future of this battle!");
                    this.futureMemories = 6;
                }

                if (this.godList.indexOf(GOD_PP30.name) > -1) { // Megumin
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Megumin answers his calls!");
                    this.duel.addMessage(this.getName() + " adds 5 points to Explosion Magic!");
                    this.explosionMagic += 5;
                }
                if (this.godList.indexOf(GOD_PP31.name) > -1) { // Ryuko
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Ryuko answers his calls!");
                    this.lifeFibers += 1;
                    if (this.lifeFibers >= 20) {
                        this.duel.addMessage(this.getName() + " already is completely fused with life fiber!");
                        this.lifeFibers -= 1;
                    }
                    if (this.lifeFibers > 0) {
                        this.duel.addMessage(this.getName() + "'s body fuses with more life fibers!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + "'s body fuses with life fibers!");
                    }
                }
                if (this.godList.indexOf(GOD_PP32.name) > -1) { // Jibril
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Jibril answers his calls!");
                    if (!this.flugelBlood) {
                        this.flugelBlood = true;
                        this.duel.addMessage(this.getName() + " gets a bit of Flugel blood!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " cannot accept more Flugel blood!");
                    }
                }
                if (this.godList.indexOf(GOD_PP33.name) > -1) { // Priestess
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Priestess answers his calls!");
                    this.duel.addMessage("*O Earth Mother, abounding in mercy, lay your revered hand upon your child’s wounds.*");
                    this.heal(10);
                }
                if (this.godList.indexOf(GOD_PP34.name) > -1) { // Tohru
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Tohru answers his calls!");
                    this.duel.addMessage(this.getName() + " gets blessed with infernal magic.");
                    this.infernalMagic = true;
                    if (this.duel.MOVE_COUNT <= 100) {
                        this.duel.MOVE_COUNT = 100;
                    }
                }
                if (this.godList.indexOf(GOD_PP35.name) > -1) { // Zero Two
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Zero Two answers his calls!");
                    if (this.streliziaBuff < 1) {
                        this.duel.addMessage(this.getName() + " starts to grow horns...");
                    }
                    else {
                        this.duel.addMessage(this.getName() + "'s horns grows bigger!");
                    }
                    this.streliziaBuff += 1;
                }
                if (this.godList.indexOf(GOD_PP36.name) > -1) { // Echidna
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Echidna answers his calls!");
                    if (this.iceWeapon) {
                        this.duel.addMessage(this.getName() + " already has the Intellect of Greed...");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " gets the Intellect of Greed!");
                        this.iceWeapon = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP37.name) > -1) { // Senjouahara
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Senjouahara answers his calls!");
                    this.duel.addMessage(this.getName() + " staples " + this.getOppName() + "'s PP!")
                    this.duel.getOppOf(this).damage(Math.floor(this.STR/10));
                    this.duel.getOppOf(this).bleedDamage += Math.floor(this.STR/10);
                }
                if (this.godList.indexOf(GOD_PP38.name) > -1) { // Akame
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Akame answers his calls!");
                    this.duel.addMessage(this.getName() + " gets blessed by Akame, which increases his speed, agility and reflexes!");
                    if (this.akameDex < 1) {
                        this.akameDex = 1;
                    }
                    this.akameDex += 1;
                }
                if (this.godList.indexOf(GOD_PP39.name) > -1) { // Ais
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Ais answers his calls!");
                    if (this.tempestBuff) {
                        this.duel.addMessage(this.getName() + " already has Tempest casted...");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " casts Tempest!");
                        this.tempestBuff = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP40.name) > -1) { // Kaguya
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Kaguya answers his calls!");
                    this.duel.addMessage(this.getName() + " bribes PP Arbitrator.");
                    this.ppBribe += 10;
                    if (this.ppBribe > 100) {
                        this.ppBribe = 100;
                        this.quickeningCharges += 3;
                    }
                }
                if (this.godList.indexOf(GOD_PP41.name) > -1) { // Hu Tao
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Hu Tao answers his calls!");
                    this.duel.addMessage(this.getName() + " sacrifices 30% of his STR to enter the Paramita Papilio state.");
                    var hpValue = Math.floor(this.STR/30);
                    this.STRValue -= hpValue;
                    this.huTaoBuff = 6;
                }
                if (this.godList.indexOf(GOD_PP42.name) > -1) { // C.C.
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("C.C. answers his calls!");
                    if (this.knightmareBuff) {
                        this.duel.addMessage(this.getName() + " already knew about Knightmares mechas...");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " learns about Knightmares mechas!");
                        this.knightmareBuff = true;
                    }
                }
                break;
            case(EMOTE_PP52): // Priest Special Move
                if (this.silenced || this.duel.POOPOO_UNIVERSE) {
                    this.duel.addMessage(this.getName() + " cannot call for superior powers...");
                    return;
                }
                else {
                    this.duel.addMessage(this.getName() + " calls for superior powers!");
                }
                if (this.specialCharges > 0 && sdsds == 0 && this.attack == attack) {
                    this.specialCharges -= 1;
                }
                if (this.godList.indexOf(GOD_PP1.name) > -1) { // Mongo
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Mongo answers his calls!");
                    if (this.trueBarbarian) {
                        this.duel.addMessage(this.getName() + " is already barbaric enough!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " becomes a true barbarian from the north!");
                        this.trueBarbarian = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP2.name) > -1) { // Hermit
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Hermit answers his calls!");
                    if (this.standPower != null) {
                        this.duel.addMessage(this.getName() + " drinks a potion that was found in the Immaterial Plane!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " drinks a Lyrium potion!");
                    }
                    var liste = Object.keys(STAND_SUMMONS);
                    this.standPower = liste[Math.floor(Math.random()*liste.length)];
                    this.duel.addMessage(this.getName() + " gets " + this.standPower + "'s abilities.");
                    this.duel.addMessage(STAND_HELP[this.standPower]);
                }
                if (this.godList.indexOf(GOD_PP3.name) > -1) { // LeprePuds
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("LeprePuds answers his calls!");
                    this.duel.addMessage(this.getName() + " is faster than ever!");
                    if (this.DEX < 0) {
                        this.DEXValue -= this.DEX;
                    }
                    this.DEXValue += 20;
                }
                if (this.godList.indexOf(GOD_PP4.name) > -1) { // Empress Theresa
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Empress Theresa answers his calls!");
                    if (this.hal) {
                        this.duel.addMessage(this.getName() + " gains nothing.");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " recieves HAL!");
                        this.hal = true;
                    }
                    this.duel.increaseTheresaInfluence();
                }
                if (this.godList.indexOf(GOD_PP5.name) > -1) { // Hello There Puds
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Hello There Puds answers his calls!");
                    this.duel.addMessage(this.getName() + " gets a sudden body change!");
                    if (this.STR < this.duel.getOppOf(this).STR) {
                        this.duel.addMessage(this.getName() + " gets as much STR as " + this.duel.getOppOf(this).getName());
                        this.STRValue -= this.STR-this.duel.getOppOf(this).STR;
                    }
                    else {
                        this.duel.addMessage(this.getName() + " already is the strongest!");
                    }
                    if (this.DEX < this.duel.getOppOf(this).DEX) {
                        this.duel.addMessage(this.getName() + " gets as much DEX as " + this.duel.getOppOf(this).getName());
                        this.DEXValue -= this.DEX-this.duel.getOppOf(this).DEX;
                    }
                    else {
                        this.duel.addMessage(this.getName() + " already is the fastest!");
                    }
                }
                if (this.godList.indexOf(GOD_PP6.name) > -1) { // Dickdickson666
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("DickDickSon666 answers his calls!");
                    this.duel.addMessage(this.getName() + " releases Hell on earth!");
                    this.duel.FORCE_SATAN = true;
                }
                if (this.godList.indexOf(GOD_PP7.name) > -1) { // Jew
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Minecraft Villager answers his calls!");
                    this.duel.addMessage(this.getName() + " uses his long nose to get a new regular charge!");
                    this.gettingRegularCharge = 4;
                }
                if (this.godList.indexOf(GOD_PP8.name) > -1) { // Fabulous Toast Man
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Fabulous Toast Man answers his calls!");
                    this.duel.addMessage(this.getName() + " calls for a bit of power from all his gods!");
                    this.duel.getOppOf(this).damage(Math.floor(this.godList.length*this.STR/10));
                }
                if (this.godList.indexOf(GOD_PP9.name) > -1) { // Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Brenn answers his calls!");
                    this.duel.addMessage(this.getName() + " feels like Jesus!");
                    this.extraLife += 1;
                }
                if (this.godList.indexOf(GOD_PP10.name) > -1) { // Fabio
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Fabio answers his calls!");
                    this.duel.addMessage(this.getName() + " let his hair flow in the wind!");
                    this.heal(50*this.duel.MOVE_COUNT);
                }
                if (this.godList.indexOf(GOD_PP11.name) > -1) { // Country Music Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Country Music Brenn answers his calls!");
                    this.duel.addMessage(this.getName() + " plays some country!");
                    if (this.duel.getOppOf(this).isHockeyPuckPP) {
                        this.duel.addMessage("But his opponent doesn't care.");
                    }
                    else {
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets an Hockey Puck PP!");
                        this.duel.getOppOf(this).isHockeyPuckPP = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP12.name) > -1) { // Espinoza
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Espinoza answers his calls!");
                    this.duel.addMessage(this.getName() + " sniffs " + this.duel.getOppOf(this).getName() + "'s PP so hard it's entirely in " + this.getName() + "'s nose!");
                    this.duel.addMessage("1/3 of " + this.duel.getOppOf(this).getName() + "'s HP are drained!");
                    if (this.hasSynergy(SYNERGY_PP21)) {
                        this.STRValue += Math.floor(this.duel.getOppOf(this).STR*2/3);
                        this.duel.getOppOf(this).STRValue -= Math.floor(this.duel.getOppOf(this).STR*2/3);
                    }
                    else {
                        this.STRValue += Math.floor(this.duel.getOppOf(this).STR/3);
                        this.duel.getOppOf(this).STRValue -= Math.floor(this.duel.getOppOf(this).STR/3);
                    }
                }
                if (this.godList.indexOf(GOD_PP13.name) > -1) { // 700IQ
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Mutantoid Lycanthrope answers his calls!");
                    if (!this.chimera) {
                        this.duel.addMessage(this.getName() + " shares his furry genes with " + this.duel.getOppOf(this).getName() + " UwU");
                        this.duel.getOppOf(this).chimera = true;
                        for (var i in this.duel.getOppOf(this).godList) {
                            if (this.duel.getOppOf(this).godList[i] != GOD_PP13.name) {
                                this.duel.getOppOf(this).godList[i] = GOD_PP13.name;
                                break;
                            }
                        }
                        var fullChimera = true;
                        for (var i in this.duel.getOppOf(this).godList) {
                            if (this.duel.getOppOf(this).godList[i] != GOD_PP13.name) {
                                fullChimera = false
                            }
                        }
                        if (fullChimera) {
                            this.duel.addMessage(this.duel.getOppOf(this).getName() + " is now fully a furry!");
                            this.duel.getOppOf(this).playMove(EMOTE_PP47);
                        }
                    }
                    else {
                        this.duel.addMessage(this.getName() + " barks like the furry he is!");
                    }
                }
                if (this.godList.indexOf(GOD_PP14.name) > -1) { // UREGonnaGETWhat
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Rapper Pudding answers his calls!");
                    this.duel.addMessage(this.getName() + " sensually touches " + this.getOppName() + "'s PP...");
                    this.duel.bothFightersAction(function(_fighter) {
                        _fighter.hasBoner = true;
                    });
                    this.duel.getOppOf(this).damage(Math.floor(this.STR/2));
                }
                if (this.godList.indexOf(GOD_PP15.name) > -1) { // STFU Isaac
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Isaac answers his calls!");
                    this.duel.addMessage(this.getName() + " curses " + this.duel.getOppOf(this).getName() + " with bad luck!");
                    this.duel.getOppOf(this).badLuck = true;
                }
                if (this.godList.indexOf(GOD_PP16.name) > -1) { // The Man Who Made a Monster
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Man who Made a Monster answers his calls!");
                    this.duel.addMessage(this.getName() + " starts summoning the Monster!");
                    this.summonTankCountdown = 4;
                }
                if (this.godList.indexOf(GOD_PP17.name) > -1) { // Hitler
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Literally Hitler answers his calls!");
                    this.duel.addMessage(this.getName() + " starts a new genocide!");
                    if (this.duel.getOppOf(this).godList.indexOf(GOD_PP7.name) > -1) {
                        this.duel.getOppOf(this).playMove(EMOTE_PP47);
                    }
                    else {
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " is unaffected...");
                    }
                }
                if (this.godList.indexOf(GOD_PP18.name) > -1) { // Salt King
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Salt King answers his calls!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " is Salt King's best friend");
                    this.duel.addMessage(this.getName() + " takes " + Math.floor(this.duel.getOppOf(this).DEX/4) + " DEX from him.");
                    this.DEXValue += Math.floor(this.duel.getOppOf(this).DEX/4);
                    this.duel.getOppOf(this).DEXValue -= Math.floor(this.duel.getOppOf(this).DEX/4);
                }
                if (this.godList.indexOf(GOD_PP19.name) > -1) { // Chad Brenn
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Chad Brenn answers his calls!");
                    if (this.legAimer) {
                        this.duel.addMessage("But " + this.getName() + " already aims for legs!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " now aims for legs!");
                        this.legAimer = true;
                    }
                }
                if (this.godList.indexOf(GOD_PP20.name) > -1) { // Mikasa
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Mikasa answers his calls!");
                    this.duel.addMessage(this.getName() + " learns how to dual wield!");
                    this.dualWield = true;
                }
                if (this.godList.indexOf(GOD_PP21.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // D.I.C.K.
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("D.I.C.K. answers his calls!");
                    if (this.STR < 10) {
                        this.STRValue -= this.STR-10;
                    }
                    this.STRValue = this.STR*10-this.STRValue;
                    this.duel.addMessage(this.getName() + " gets the strength of a thousand punchers!");
                    this.playMove(EMOTE_PP2);
                }
                if (this.godList.indexOf(GOD_PP22.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // Satan
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Satan answers his calls!");
                    this.satanicMoveMultiplier = true
                    this.duel.addMessage(this.getName() + " gets a Satanic Move Multiplier!");
                }
                if (this.godList.indexOf(GOD_PP23.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                    // Ancient Fungus
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Ancient Fungus answers his calls!");
                    this.duel.DISABLE_ABANDON = true;
                    this.duel.addMessage(this.getName() + " will summon 50 moves!");
                    this.duel.addMessage("-----------------");
                    for (var i = 0; i < 50; i++) {
                        this.playMove(this.duel.getRandomEmote());
                        this.duel.addMessage("-----------------");
                    }
                }
                if (this.godList.indexOf(GOD_PP24.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                     // Time Cube
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Time Cube answers his calls!");
                    this.stopTime(1);
                    this.duel.addMessage("*When the Sun shines upon Earth, 2 – major Time points are created on opposite sides of Earth – known as Midday and Midnight. Where the 2 major Time forces join, synergy creates 2 new minor Time points we recognize as Sunup and Sundown. The 4-equidistant Time points can be considered as Time Square imprinted upon the circle of Earth. In a single rotation of the Earth sphere, each Time corner point rotates through the other 3-corner Time points, thus creating 16 corners, 96 hours and 4-simultaneous 24-hour Days within a single rotation of Earth – equated to a Higher Order of Life Time Cube. ONE - DOES NOT EXIST, EXCEPT IN DEATH STATE.*");
                    this.duel.addMessage("***For as long as you dumbass, educated brilliant and boring bastards IGNORE Cubic Creation, your sons and daughters deserve to die and be maimed in foreign lands - while kissing innocent women and children.***");
                }
                if (this.godList.indexOf(GOD_PP25.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
                     // Cthulhu
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Cthulhu answers his calls!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " falls into madness!");
                    this.duel.getOppOf(this).madnessStacks += 15;
                }
                if (this.godList.indexOf(GOD_PP26.name) > -1) { // Ranger
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The Ranger answers his calls!");
                    this.playMove(EMOTE_PP27);
                    this.playMove(EMOTE_PP27);
                    if (this.duel.getOppOf(this).chimera) {
                        this.duel.addMessage(this.getName() + " has more bullets when dealing with furries!");
                        this.playMove(EMOTE_PP27);
                        this.playMove(EMOTE_PP27);
                    }
                }
                if (this.godList.indexOf(GOD_PP27.name) > -1) { // Kurisu
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Kurisu answers his calls!");
                    this.duel.addMessage(this.getName() + " sends his current mind to his past self!");
                    this.duel.addMessage("The timeline shifts! " + this.getName() + " had in fact dodged the " + this.dodgableDamages.length + " previous attacks!");
                    for (var i in this.dodgableDamages) {
                        this.STRValue += this.dodgableDamages[i];
                    }
                    this.dodgableDamages = [];
                }

                if (this.godList.indexOf(GOD_PP30.name) > -1) { // Megumin
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Megumin answers his calls!");
                    this.explosionMagic += 3;
                    var randomMessages = [
                        "Darkness blacker than black and darker than dark, I beseech thee, combine with my deep crimson. The time of awakening cometh.\nJustice, fallen upon the infallible boundary, appear now as an intangible distortion!\nI desire for my torrent of power a destructive force: a destructive force without equal ! Return all creation to cinders, and come from the abyss!\nThis is the mightiest means of attack known to man, the ultimate attack magic!",
                        "Oh, blackness shrouded in light...\nFrenzied blaze clad in night...\nAll else aside, I don't want to be outdone by anyone else when it comes to explosion magic!\nHere I go ! My ultimate destructive magic...",
                        "Detonation... Detonation... Detonation...\nWielder of the most glorious, powerful, and grand explosion magic...\nMy name is Megumin!\nThe blow that I am given to strike turns a blind eye to the fate of my kindred, rendering all hope of rebirth and anguish, and the model by which all forces are judged!\nPitiful creature...\nSynchronize yourself with the red smoke, and atone in a surge of blood!\nBurst forth...",
                        "Crimson-black blaze, king of myriad worlds, though I promulgate the laws of nature, I am the alias of destruction incarnate in accordance with the principles of creation.\nLet the hammer of eternity descend unto me!\nBehold my power!"
                    ];
                    this.duel.addMessage("*" + randomFromList(randomMessages) + "*");
                    this.duel.addMessage("***EXPLOSION !***");
                    this.duel.getOppOf(this).damage(Math.floor(this.explosionMagic*this.STR/10), false);
                    this.hasBurst = 4;
                }
                if (this.godList.indexOf(GOD_PP31.name) > -1) { // Ryuko
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Ryuko answers his calls!");
                    if (!this.hasKamui) {
                        this.duel.addMessage(this.getName() + " gets a Kamui!");
                        this.hasKamui = true;
                    }
                    else {
                        this.duel.addMessage(this.getName() + " already has a Kamui!");
                    }
                }
                if (this.godList.indexOf(GOD_PP32.name) > -1) { // Jibril
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Jibril answers his calls!");
                    this.duel.addMessage("***HEAVEN'S STRIKE !***");
                    this.duel.getOppOf(this).damage(this.STR*5, false);
                    this.duel.addMessage(this.getName() + " is exhausted...");
                    this.STRValue -= Math.floor(this.STR/10*9);
                }
                if (this.godList.indexOf(GOD_PP33.name) > -1) { // Priestess
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Priestess answers his calls!");
                    this.duel.addMessage("*O Earth Mother, abounding in mercy, grant us peace to accept all things…*");
                    this.duel.getOppOf(this).silenced = true;
                }
                if (this.godList.indexOf(GOD_PP34.name) > -1) { // Tohru
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Tohru answers his calls!");
                    this.duel.addMessage(this.getName() + " gets blessed with armageddon magic.");
                    this.armageddonMagic = true;
                    if (this.duel.MOVE_COUNT <= 1000) {
                        this.duel.MOVE_COUNT = 1000;
                    }
                }
                if (this.godList.indexOf(GOD_PP35.name) > -1) { // Zero Two
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Zero Two answers his calls!");
                    if (!this.klaxoTails) {
                        this.duel.addMessage(this.getName() + " gets Code 001's Genetic Source. 8 spider-like appendages grows out of his back!");
                        this.klaxoTails = true;
                    }
                    else {
                        this.duel.addMessage(this.getName() + " cannot evolve towards Code 001's Genetic Source.");
                    }
                }
                if (this.godList.indexOf(GOD_PP36.name) > -1) { // Echidna
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Echidna answers his calls!");
                    this.duel.addMessage(this.getName() + " greeds on " + this.getOppName() + "'s STR'.");
                    this.heal(this.duel.getOppOf(this).STR);
                }
                if (this.godList.indexOf(GOD_PP37.name) > -1) { // Senjouahara
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Senjouahara answers his calls!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets cursed by a Crab Oddity.");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " loses 20 DEX!");
                    this.duel.getOppOf(this).DEXValue -= 20;
                }
                if (this.godList.indexOf(GOD_PP38.name) > -1) { // Akame
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Akame answers his calls!");
                    if (this.akameKill < 1) {
                        this.akameKill = 1;
                        this.duel.addMessage(this.getName() + " gets Murasame for a short period of time!");
                    }
                    else {
                        this.duel.addMessage(this.getName() + " gets Murasame for a longer period of time!");
                    }
                    this.akameKill += 1;
                }
                if (this.godList.indexOf(GOD_PP39.name) > -1) { // Ais
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Ais answers his calls!");
                    for (var i = 0; i < 5; i++) {
                        this.playMove(EMOTE_PP74);
                    }
                }
                if (this.godList.indexOf(GOD_PP40.name) > -1) { // Kaguya
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Kaguya answers his calls!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " just confessed his love!");
                    this.duel.addMessage("*O Kawaii Koto.*");
                    this.duel.getOppOf(this).inLove = 6;
                }
                if (this.godList.indexOf(GOD_PP41.name) > -1) { // Hu Tao
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Hu Tao answers his calls!");
                    this.duel.addMessage(this.getName() + " attacks " + this.getOppName() + " with Boo Tao!");
                    var value = 1+Math.floor(this.STR/5);
                    if (this.duel.getOppOf(this).STR >= this.STR) value += Math.floor(value/2);
                    this.duel.getOppOf(this).damage(value);
                    this.heal(value);
                }
                if (this.godList.indexOf(GOD_PP42.name) > -1) { // C.C.
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("C.C. answers his calls!");
                    this.duel.addMessage(this.getName() + " recieves the Power of the Kings!");
                    this.kingsPower += 5;
                }
                break;
            case(EMOTE_PP53): // Singular Explosion
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Singular Explosion");
                if (this.duel.NUCLEAR_BOMB <= 0) {
                    this.duel.addMessage("A new Nuclear Bomb is launched!");
                }
                else {
                    this.duel.addMessage("The Nuclear Bomb timer has been reset!");
                }
                this.duel.addMessage("The Nuclear Bomb will explode in 5 turns!");
                this.duel.NUCLEAR_BOMB = 6;
                break;
            case(EMOTE_PP54): // Explosion Loop
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Explosion Loop");
                this.duel.addMessage("All damages are doubled for 7 turns");
                this.duel.ATTACK_MISS_COUNTDOWN = 8;
                break;
            case(EMOTE_PP55): // Dual Explosion Loop
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Dual Explosion Loop");
                this.duel.addMessage("All moves will be used, no matter the DEX, for 7 turns");
                this.duel.AUTO_MOVES_COUNTDOWN = 8;
                break;
            case(EMOTE_PP56): // SignPost
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons every moves!");
                var moveList = shuffleArray(NORMAL_EMOTE_LIST);
                for (var i in moveList) {
                    this.duel.addMessage("-----------------");
                    if (moveList[i] != EMOTE_PP47) {
                        this.playMove(moveList[i]);
                    }
                }
                break;
            case(EMOTE_PP57): // Cage / Sacrifice
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " changes his gods for a bit!");
                var godListMemory = this.godList.slice();
                this.godList = [];

                var shuffleList = shuffleArray(GOD_LIST);
                for (var i = 0; i < 5; i++) {
                    this.godList.push(shuffleList[i].name);
                }

                this.playMove(EMOTE_PP51);
                this.duel.addMessage("-----------------");
                this.playMove(EMOTE_PP52);
                this.godList = godListMemory.slice();
                break;
            case(EMOTE_PP58): // Cageless
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " gets a new life!");
                this.extraLife += 1;
                break;
            case(EMOTE_PP59): // Triggered Pépin2Pom
                this.duel.MOVE_COUNT += 33;
                for (var i in this.godList) {
                    if (this.godList[i] != GOD_PP18.name) {
                        this.duel.addMessage(this.getName() + " gets closer to the Salt King!");
                        this.godList[i] = GOD_PP18.name;
                        break;
                    }
                }
                var nbSalt = 0;
                for (var i in this.godList) {
                    if (this.godList[i] == GOD_PP18.name) {
                        nbSalt += 1;
                    }
                }
                if (nbSalt >= 3) {
                    this.duel.addMessage(this.getName() + " is now touched by Saltus Maximus Retardus!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " sucks!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " has the big gay!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " has a smoll pp!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " is a loser!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " is a big nerd!");
                    this.duel.addMessage(this.duel.getOppOf(this).getName() + " better abandons now!");
                    this.duel.addMessage("-----------------");
                    this.duel.getOppOf(this).playMove(EMOTE_PP47);
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("Haha just kidding!");
                    this.duel.addMessage("Unless I wasn't?");
                    this.duel.addMessage("Nah it was a joke!");
                    this.duel.addMessage("Unless...?");
                    this.duel.addMessage("Gonna cry?");
                    this.duel.addMessage("Gonna piss your pants maybe?");
                    this.duel.addMessage("Maybe shit and cum?");
                }
                else {
                    this.duel.addMessage(this.getName() + " needs to get even closer!");
                }
                break;
            case(EMOTE_PP60): // PP Duel
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " turns the duel into a mutual sacrifice!");
                this.duel.allFightersAction(function(_fighter) {
                    _fighter.STRValue -= Math.floor(_fighter.STR*0.99);
                    _fighter.DEXValue -= Math.floor(_fighter.DEX*0.99);
                });
                break;
            case(EMOTE_PP61): // Liberate PP
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " liberates his PP!");
                this.resetBattleVariables();
                this.liberatedPP = 4;
                break;
            case(EMOTE_PP62): // Duel Checkpoint
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " saves the battle!");
                if (this.duel.CHECKPOINT_DUEL != null) {
                    this.duel.CHECKPOINT_DUEL = null;
                    this.duel.addMessage("The old save has been removed!");
                }

                var duel = this.duel;
                duel.FIGHTER1.duel = null;
                duel.FIGHTER2.duel = null;
                try {
                    duel.EVENT_BOSS.duel = null;
                    duel.FIGHTER1_SAVE.duel = null;
                    duel.FIGHTER2_SAVE.duel = null;
                }
                catch(e) {
                    // saves are null
                }
                duel.CHECKPOINT_DUEL = cloneObject(duel);
                duel.FIGHTER1.duel = duel;
                duel.FIGHTER2.duel = duel;
                duel.CHECKPOINT_DUEL.FIGHTER1.duel = duel.CHECKPOINT_DUEL;
                duel.CHECKPOINT_DUEL.FIGHTER2.duel = duel.CHECKPOINT_DUEL;
                try {
                    duel.FIGHTER1_SAVE.duel = duel;
                    duel.FIGHTER2_SAVE.duel = duel;
                    duel.EVENT_BOSS.duel = duel;
                    duel.CHECKPOINT_DUEL.FIGHTER1_SAVE.duel = duel.CHECKPOINT_DUEL;
                    duel.CHECKPOINT_DUEL.FIGHTER2_SAVE.duel = duel.CHECKPOINT_DUEL;
                    duel.CHECKPOINT_DUEL.EVENT_BOSS.duel = duel.CHECKPOINT_DUEL;
                }
                catch(e) {
                    // saves are null
                }
                break;
            case(EMOTE_PP63): // Xenomorph
                this.duel.addMessage(this.getName() + " slashes " + this.getOppName() + "!");
                this.duel.getOppOf(this).damage(Math.floor(this.DEX / 2));
                break;
            case(EMOTE_PP64): // XenoHead
                this.xenoMask = true;
                this.duel.addMessage(this.getName() + " puts on a Mask: Xeno!");
                this.satanMask = false;
                this.helldogMask = false;
                break;
            case(EMOTE_PP65): // Signpost
                this.duel.addMessage(this.getName() + " summons the knowledge signpost!");
                if (this.kungFu) {
                    this.duel.addMessage("But he has nothing to learn!");
                }
                else {
                    this.duel.addMessage(this.getName() + " now has battle knowledge!");
                    this.kungFu = true;
                }
                break;
            case(EMOTE_PP66): // SatanHead
                this.satanMask = true;
                this.duel.addMessage(this.getName() + " puts on a Mask: Satan!");
                this.xenoMask = false;
                this.helldogMask = false;
                break;
            case(EMOTE_PP67): // RageSatan
                this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "!");
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
                break;
            case(EMOTE_PP68): // Mech
                this.duel.addMessage(this.getName() + " hides in his Mech!");
                break;
            case(EMOTE_PP69): // Lost Soul
                if (this.ragingSpirit <= 0) {
                    this.duel.addMessage(this.getName() + " starts casting!");
                }
                else {
                    this.duel.addMessage(this.getName() + " continues his spell!");
                }
                this.ragingSpirit += 1;
                this.duel.addMessage(this.getName() + " summons " + this.ragingSpirit + " Lost Souls!");
                for (var j = 0; j < this.ragingSpirit; j++) {
                    this.duel.getOppOf(this).damage(5 + Math.floor(this.STR / 10));
                }
                break;
            case(EMOTE_PP70): // HellDogHead
                this.helldogMask = true;
                this.duel.addMessage(this.getName() + " puts on a Mask: Intimidation!");
                this.xenoMask = false;
                this.satanMask = false;
                break;
            case(EMOTE_PP71): // Freedom
                this.duel.addMessage(this.getName() + " removes " + this.duel.getOppOf(this).getName() + "'s mask!");
                this.duel.getOppOf(this).helldogMask = false;
                this.duel.getOppOf(this).xenoMask = false;
                this.duel.getOppOf(this).satanMask = false;
                break;
            case(EMOTE_PP72): // Ammo Crate
                this.duel.addMessage(this.getName() + " gets an ammo crate!");
                if (this.fullOfAmmo) {
                    this.duel.addMessage("...but he already had one!");
                }
                this.fullOfAmmo = true;
                break;
            case(EMOTE_PP73): // Quickening
                this.duel.addMessage(this.getName() + " gets a Quickening Charge!");
                this.quickeningCharges += 1;
                break;
            case(EMOTE_PP74): // Sword
                this.duel.addMessage(this.getName() + " attacks " + this.getOppName() + " with a sword!");
                if (this.STR > this.duel.getOppOf(this).STR) {
                    this.duel.getOppOf(this).damage(this.STR - this.duel.getOppOf(this).STR);
                }
                else if (this.standPower == STAND_PP18) { // Fantasien 1998
                    this.duel.getOppOf(this).damage(this.duel.getOppOf(this).STR - this.STR);
                }
                else {
                    this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
                }
                break;
            case(EMOTE_PP75): // AcidShot
                this.duel.addMessage(this.getName() + " shoots acid at " + this.duel.getOppOf(this).getName() + "!");
                this.duel.getOppOf(this).meltingDamage += Math.floor(Math.random() * 5 + 5);
                this.duel.getOppOf(this).acidArmor = 6;
                break;
            case(EMOTE_PP76): // EldritchPudding
                this.duel.addMessage(this.getName() + " eats some Eldritch Pudding!");
                if (getRandomPercent() < 90) {
                    this.damage(50, false);
                }
                this.duel.addMessage(this.getName() + " gets a new tentacle!");
                this.tentacles += 1;
                break;
            case(EMOTE_PP77): // SatanHand
                this.duel.addMessage(this.getName() + " summons the Hand of Satan!");
                if (this.quickeningCharges >= 10) {
                    this.duel.addMessage("The Hand brings him a gift against 10 quickening charges!");
                    this.quickeningCharges -= 10;
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage(this.getName() + " evolves to Requiem!");
                    this.requiemPower = randomFromList(REQUIEM_LIST);

                    if (this.idUser != CLIENT.user.id) this.guildUser.send("**Requiem Acquired!**\n" + REQUIEM_HELP[this.requiemPower]);
                }
                else {
                    this.duel.addMessage(this.getName() + " needs more quickening charges to deal with it!");
                }
                break;
            case(EMOTE_PP78): // SatanSkull
                this.duel.addMessage(this.getName() + " summons the Satan Horns!");
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
                this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
                break;
            case(EMOTE_PP79): // Eye of Truth
                this.duel.addMessage(this.getName() + " summons the Eye of Truth!");
                this.duel.addMessage("The Eye of Truth will reveal the moves of " + this.getName() + "'s soul!");
                var moveId = parseInt(this.guildUser.user.id.slice(9, this.guildUser.user.id.length));
                var effectId;
                var subEffectId;
                var value = 0;
                var debuffList = ["bleedDamage", "meltingDamage", "madnessStack"];
                var buffList = ["bonusDamage", "tearDrinker", "pigHeal", "quickeningCharges", "tentacles", "redPillAddiction", "lifeFibers"];

                for (var i = 0; i < 3; i++) {
                    effectId = moveId + moveId%(567+i);
                    subEffectId = moveId + moveId%(234+i);
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("**" + this.getName() + " Move: " + (i+1) + "/3**");

                    if (subEffectId%12 == 0) {
                        value = Math.floor(this.STR/10);
                        this.duel.addMessage("**Value:** based on " + this.getName() + "'s STR.");
                    }
                    else if (subEffectId%12 == 1) {
                        value = Math.floor(this.DEX/5);
                        this.duel.addMessage("**Value:** based on " + this.getName() + "'s DEX.");
                    }
                    else if (subEffectId%12 == 2) {
                        value = EMOTE_LIST.indexOf(this.oldAttack)*2;
                        this.duel.addMessage("**Value:** based on " + this.getName() + "'s last move ID.");
                    }
                    else if (subEffectId%12 == 3) {
                        value = Math.floor(this.damageTaken/10);
                        this.duel.addMessage("**Value:** based on " + this.getName() + "'s total taken damages.");
                    }
                    else if (subEffectId%12 == 4) {
                        value = Math.floor(this.usedMoves.length/2);
                        this.duel.addMessage("**Value:** based on " + this.getName() + "'s moves count.");
                    }
                    else if (subEffectId%12 == 5) {
                        value = Math.floor(this.duel.getOppOf(this).STR/10);
                        this.duel.addMessage("**Value:** based on " + this.duel.getOppOf(this).getName() + "'s STR.");
                    }
                    else if (subEffectId%12 == 6) {
                        value = Math.floor(this.duel.getOppOf(this).DEX/5);
                        this.duel.addMessage("**Value:** based on " + this.duel.getOppOf(this).getName() + "'s DEX.");
                    }
                    else if (subEffectId%12 == 7) {
                        value = EMOTE_LIST.indexOf(this.duel.getOppOf(this).oldAttack)*2;
                        this.duel.addMessage("**Value:** based on " + this.duel.getOppOf(this).getName() + "'s last move ID.");
                    }
                    else if (subEffectId%12 == 8) {
                        value = Math.floor(this.duel.getOppOf(this).damageTaken/10);
                        this.duel.addMessage("**Value:** based on " + this.duel.getOppOf(this).getName() + "'s total taken damages.");
                    }
                    else if (subEffectId%12 == 9) {
                        value = Math.floor(this.duel.getOppOf(this).usedMoves.length/2);
                        this.duel.addMessage("**Value:** based on " + this.duel.getOppOf(this).getName() + "'s moves count.");
                    }
                    else if (subEffectId%12 == 10) {
                        value = Math.floor(this.duel.MOVE_COUNT/3);
                        this.duel.addMessage("**Value:** based on total moves count.");
                    }
                    else {
                        value = Math.floor(this.duel.DAMAGE_COUNT/15);
                        this.duel.addMessage("**Value:** based on total damages count.");
                    }
                    value += 10;

                    if (effectId%6 == 0) { // Inflict damage
                        this.duel.addMessage("**Effect:** Damage");
                        this.duel.addMessage("-----------------");
                        this.duel.getOppOf(this).damage(20 + value, subEffectId%3 == 0);
                    }
                    else if (effectId%6 == 1) { // Inflict DEX damage
                        this.duel.getOppOf(this).DEXValue -= Math.floor(value/10);
                        this.duel.addMessage("**Effect:** DEX Damage");
                        this.duel.addMessage("-----------------");
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " looses " + Math.floor(value/10) + " DEX!");
                        this.duel.getOppOf(this).DEXValue -= Math.floor(value/10);
                    }
                    else if (effectId%6 == 2) { // Heal
                        this.duel.addMessage("**Effect:** Heal");
                        this.duel.addMessage("-----------------");
                        this.heal(20 + value);
                    }
                    else if (effectId%6 == 3) { // Heal DEX
                        this.DEXValue += Math.floor(value/10);
                        this.duel.addMessage("**Effect:** DEX Gain");
                        this.duel.addMessage("-----------------");
                        this.duel.addMessage(this.getName() + " gets " + Math.floor(value/10) + " DEX!");
                        this.DEXValue += Math.floor(value/10);
                    }
                    else if (effectId%6 == 4) { // Inflict debuff
                        this.duel.addMessage("**Effect:** Debuff");
                        this.duel.addMessage("-----------------");
                        this.duel.getOppOf(this)[debuffList[subEffectId % debuffList.length]] += Math.floor(value/10);
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets " + Math.floor(value/10) + " " + debuffList[subEffectId%debuffList.length] + "!");
                    }
                    else { // Gets buff
                        this.duel.addMessage("**Effect:** Buff");
                        this.duel.addMessage("-----------------");
                        this[buffList[subEffectId%buffList.length]] += Math.floor(value/10);
                        this.duel.addMessage(this.getName() + " gets " + Math.floor(value/10) + " " + buffList[subEffectId%buffList.length] + "!");
                    }
                }
                break;
            case(EMOTE_PP80): // Fherla
                this.duel.addMessage(this.getName() + " summons Fherla - Strawberry Girl!");
                if (this.duel.CHRISTIAN_TEXT) {
                    this.duel.addMessage("PP Punching is so good. Please continue!");
                    this.duel.allFightersAction(function(_fighter) {
                        _fighter.heal(Math.floor(Math.random() * 10000000000000));
                    });
                }
                else {
                    this.duel.addMessage("PP Punching is so filthy. May the chat be purged of this nonsense.");
                    this.duel.allFightersAction(function(_fighter) {
                        _fighter.damage(Math.floor(Math.random() * 10000000000000), false);
                    });
                }
                break;
            case(EMOTE_PP81): // Melodia
                this.duel.addMessage(this.getName() + " summons Melodia!");
                this.duel.UWU_TEXT = !this.duel.UWU_TEXT;
                if (this.duel.UWU_TEXT) {
                    this.duel.addMessage("UwU Mode Activated!");
                }
                else {
                    this.duel.addMessage("UwU Mode Deactivated!");
                }
                break;
            case(EMOTE_PP135): // Worm Scarf
                this.duel.addMessage(this.getName() + " wears a Worm Scarf!");
                this.ironProtection = 4;
                break;
            case(EMOTE_PP136): // Hive Pack
                this.duel.MOVE_COUNT += 33;
                if (this.hivePack <= 0) {
                    this.duel.addMessage(this.getName() + " gets a Hive Pack!");
                    this.hivePack = 20;
                }
                else if (this.hivePack >= 100) {
                    this.duel.addMessage(this.getName() + "'s Hive Pack already is full!");
                }
                else {
                    this.duel.addMessage(this.getName() + " adds more bees to his Hive Pack!");
                    this.hivePack += 10;
                }
                break;
            case(EMOTE_PP137): // Suspicious Looking Tentacle
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " gets a tentacle and attacks!");
                this.tentacles += 1;
                for (var i = 0; i < this.tentacles; i++) {
                    this.duel.getOppOf(this).damage(Math.floor(this.STR / 10));
                    if (this.hasSynergy(SYNERGY_PP18)) {
                        this.meltingDamage += 1;
                    }
                    this.duel.addMessage("-----------------");
                }
                break;
            case(EMOTE_PP138): // 0x33s Aviators
                this.duel.MOVE_COUNT += 33;
                if (!this.aviatorBuff) {
                    this.duel.addMessage(this.getName() + " gets the 0x33s Aviators!");
                    this.aviatorBuff = true;
                }
                else {
                    this.duel.addMessage(this.getName() + " already had the 0x33s Aviators!");
                }
                break;
            case(EMOTE_PP139): // Royal Gel
                this.duel.MOVE_COUNT += 33;
                if (this.duel.EVENT_BOSS != null) {
                    this.duel.addMessage(this.duel.EVENT_BOSS.getName() + " gets wrapped by royal gel.");
                    this.duel.addMessage(this.duel.EVENT_BOSS.getName() + " seems angry towards " + this.duel.otherFighter(this).getName() + "!");
                }
                else {
                    this.duel.addMessage(this.getName() + " summons the Royal Gel!");
                    this.duel.addMessage("A Pudding Blob has been created!");
                    this.duel.triggerBossFight(new PuddingBlobBoss(this.duel));
                }
                this.duel.EVENT_BOSS.bossTriggeredAt = this.duel.otherFighter(this);
                break;
            case(EMOTE_PP140): // Brain of Confusion
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Brain of Confusion!");
                this.duel.addMessage(this.duel.otherFighter(this).getName() + " is confused!");
                this.duel.otherFighter(this).grabbedPP = 3;
                break;
            case(EMOTE_PP141): // Shield of Cthulhu
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " gets a Shield of Cthulhu!");
                this.cthulhuShield += 3;
                break;
            case(EMOTE_PP142): // Demon Heart
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " eats a Demon Heart!");
                this.madnessStacks += 5;
                var nbTries = 0;
                var test = true;
                while (test && nbTries < 100) {
                    var randomGod = randomFromList(GOD_LIST);
                    nbTries += 1;
                    if (nbTries < 100) {
                        if (this.godList.indexOf(randomGod.name) < 0 && randomGod.type == "eldritch") {
                            test = false;
                            this.godList.push(randomGod.name);
                            this.duel.addMessage(this.getName() + " becomes a " + randomGod.name + " Priest!");
                        }
                    }
                    else {
                        this.duel.addMessage(this.getName() + " has all the eldritch gods on his side!");
                    }
                }
                break;
            case(EMOTE_PP143): // Spore Sac
                this.duel.MOVE_COUNT += 33;
                if (this.sporeSac) {
                    this.duel.addMessage(this.getName() + " already had a Spore Sac!");
                }
                else {
                    this.duel.addMessage(this.getName() + " gets a Spore Sac!");
                    this.sporeSac = true;
                }
                break;
            case(EMOTE_PP144): // Bone Glove
                this.duel.MOVE_COUNT += 33;
                if (this.boneGlove) {
                    this.duel.addMessage(this.getName() + " already had a Bone Glove!");
                }
                else {
                    this.duel.addMessage(this.getName() + " gets a Bone Glove!");
                    this.boneGlove = true;
                };
                break;
            case(EMOTE_PP145): // Shiny Stone
                this.duel.MOVE_COUNT += 33;
                if (this.shinyStone) {
                    this.duel.addMessage(this.getName() + " already had a Shiny Stone!");
                }
                else {
                    this.duel.addMessage(this.getName() + " gets a Shiny Stone!");
                    this.shinyStone = true;
                };
                break;
            case(EMOTE_PP146): // Gravity Globe
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " reverses gravity!");
                this.duel.REVERSED_GRAVITY = !this.duel.REVERSED_GRAVITY;
                break;
            case(EMOTE_PP147): // Shrimpy Truffle
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " eats a Shrimpy Truffle!");
                if (this.cuteFishron) {
                    this.duel.addMessage("But nothing happens...");
                }
                else {
                    this.duel.addMessage("A Cute Fishron joins " + this.getName() + "!");
                    this.cuteFishron = true;
                };
                break;
            case(EMOTE_PP148): // sex
                if (this.duel.EVENT_BOSS != null) {
                    this.duel.addMessage(this.duel.EVENT_BOSS.getName() + " suddenly runs away.");
                }
                this.duel.triggerBossFight(new SexStarvedMongoBoss(this.duel));
                this.duel.addMessage("Mongo has appeared, and he is sex-starved!");
                this.duel.addMessage("-----------------");
                break;
            case(EMOTE_PP149): // Volatile Gelatine
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Volatile Gelatine!");
                var chaosNumber = 1 + Math.floor(getRandomPercent()/20);
                for (var i = 0; i < chaosNumber; i++) {
                    var lastMove = EMOTE_PP39;
                    if (this.duel.otherFighter(this).usedMoves.length >= 2) {
                        lastMove = this.duel.otherFighter(this).usedMoves[this.duel.otherFighter(this).usedMoves.length-2];
                    }
                    this.playMove(lastMove);
                    this.duel.addMessage("-----------------");
                }
                break;
            case(EMOTE_PP150): // Soaring Insignia
                this.duel.MOVE_COUNT += 33;
                this.duel.addMessage(this.getName() + " summons the Soaring Insignia!");
                if (this.empressLightBuff) {
                    this.duel.addMessage("But nothing happens...");
                }
                else {
                    this.duel.addMessage(this.getName() + " gets the Blessing of the Empress of Light!");
                    this.empressLightBuff = true;
                };
                break;
            case(EMOTE_PP151): // Bone Helm
                this.duel.MOVE_COUNT += 33;
                if (this.boneHelm) {
                    this.duel.addMessage(this.getName() + " already wears a Bone Helm!");
                }
                else {
                    this.duel.addMessage(this.getName() + " starts wearing a Bone Helm!");
                    this.boneHelm = true;
                };
                break;

            case(EMOTE_GU1): // Shrines
            case(EMOTE_GU2):
            case(EMOTE_GU3):
            case(EMOTE_GU4):
            case(EMOTE_GU5):
            case(EMOTE_GU6):
            case(EMOTE_GU7):
            case(EMOTE_GU8):
            case(EMOTE_GU9):
            case(EMOTE_GU10):
            case(EMOTE_GU11):
            case(EMOTE_GU12):
            case(EMOTE_GU13):
            case(EMOTE_GU14):
                this.duel.addMessage(this.getName() + " prays to the " + getGungeonShrineName(attack) + " Shrine.");
                this.guShrine = attack;

                this.duel.GU_NEXT_FLOOR_COUNTDOWN -= 1;
                break;
            case(EMOTE_GU15): // Units
            case(EMOTE_GU16):
            case(EMOTE_GU17):
            case(EMOTE_GU18):
            case(EMOTE_GU19):
            case(EMOTE_GU20):
            case(EMOTE_GU21):
            case(EMOTE_GU22):
            case(EMOTE_GU23):
            case(EMOTE_GU24):
            case(EMOTE_GU25):
            case(EMOTE_GU26):
            case(EMOTE_GU27):
            case(EMOTE_GU28):
            case(EMOTE_GU29):
            case(EMOTE_GU30):
            case(EMOTE_GU31):
            case(EMOTE_GU32):
            case(EMOTE_GU33):
                var unit = getGungeonUnitData(attack);
                this.duel.addMessage(unit.name + " follows " + this.getName() + "!");
                this.guBattalionPower += (unit.power*GUNGEON_FLOORS_SCALING[this.duel.GU_CURRENT_FLOOR]) + this.AET;

                if (unit.explodes) this.guBattalionExplodes = true;
                if (unit.strengthInNumbers) this.guBattalionPower += Math.floor(this.guBattalionPower*0.2);
                if (unit.chance && getRandomPercent() <= 10) this.guBattalionPower += this.guBattalionPower;
                if (unit.cube) { this.guBattalionPower += this.guCube*(unit.power*GUNGEON_FLOORS_SCALING[this.duel.GU_CURRENT_FLOOR]); this.guCube += 1; }
                if (unit.doubleCubeChance && getRandomPercent() <= 50) this.guCube += 1;

                this.duel.GU_NEXT_FLOOR_COUNTDOWN -= 1;
                break;
            case(EMOTE_GU33): // Rusty Sidearm
                this.duel.addMessage(this.getName() + " shoots " + this.getOppName() + " with his Rusty Sidearm!");
                this.duel.getOppOf(this).damage(this.guBattalionPower);

                if (this.guBattalionExplodes) {
                    this.guBattalionPower -= 50;
                    this.duel.getOppOf(this).damage(Math.floor(this.guBattalionPower/2));
                }

                this.duel.GU_NEXT_FLOOR_COUNTDOWN -= 1;
                break;

            case(EMOTE_ABILITY): // Requiems
                if (this.requiemPower != null && this.requiemCooldown <= 0) {
                    this.MOVE_COUNT += 999
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage(this.requiemPower + " Requiem Ability is triggered!");
                    this.requiemCooldown = 6;

                    if (this.requiemPower == REQUIEM_PP1 || this.requiemPower == REQUIEM_PP7) { // Etrange
                        this.stopTime(1);
                        this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s past injuries are inflicted to him again!");
                        this.duel.getOppOf(this).damage(this.duel.getOppOf(this).damageTaken, false);
                    }
                    if (this.requiemPower == REQUIEM_PP2) { // Iamthemorning
                        this.stopTime(3);
                        this.duel.addMessage(this.duel.otherFighter(this).getName() + " gets possessed!");
                        this.duel.otherFighter(this).isPossessed = 1;
                    }
                    if (this.requiemPower == REQUIEM_PP3 || this.requiemPower == REQUIEM_PP7) { // Majestic
                        this.stopTime(1);
                        this.duel.addMessage(this.getName() + " makes a temporal duplication of himself!");
                        this.extraLife += 1;

                        var duel = this.duel;
                        this.duel = null;
                        this.extraLifeDuplication = null;
                        this.extraLifeDuplication = cloneObject(this);
                        this.extraLifeDuplication.duel = duel;
                        this.duel = duel;
                    }
                    if (this.requiemPower == REQUIEM_PP4 || this.requiemPower == REQUIEM_PP7) { // DayDream XI
                        this.stopTime(3);
                        this.duel.addMessage(this.getName() + " will compress time when it'll go back to normal!");
                        this.duel.TIME_COMPRESSION = 4;
                    }
                    if (this.requiemPower == REQUIEM_PP5 || this.requiemPower == REQUIEM_PP7) { // Flying Colors
                        this.stopTime(1);
                        this.duel.addMessage(this.getName() + "'s past injuries are reverted back in time!");
                        this.heal(this.damageTaken);
                        this.resetBattleVariables();
                    }
                    if (this.requiemPower == REQUIEM_PP6 || this.requiemPower == REQUIEM_PP7) { // Witherfall
                        this.stopTime(1);
                        this.duel.addMessage(this.getName() + " damages time itself!");
                        if (this.duel.getOppOf(this).requiemPower != null && this.duel.getOppOf(this).requiemPower != REQUIEM_PP6) {
                            this.duel.getOppOf(this).requiemPower = null;
                            this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s requiem ability is destroyed!");
                        }
                        this.duel.TIME_BREAK += 10;
                    }
                    if (this.requiemPower == REQUIEM_PP8 || this.requiemPower == REQUIEM_PP7) { // Hawkwind
                        this.stopTime(1);
                        this.duel.addMessage(this.getName() + " defines the fate of " + this.duel.getOppOf(this).getName() + "!");
                        this.duel.getOppOf(this).impendingDoom = 11;
                    }

                    if (this.requiemPower == REQUIEM_PP9) { // Porcupine Tree
                        this.stopTime(10);
                        this.duel.addMessage(this.getName() + " deletes the arbitrator's speaking time!");
                        this.duel.sendMessages();
                        this.duel.NO_MESSAGE = 4;
                    }

                    if (this.requiemPower == REQUIEM_PP7) { // All Traps on Earth
                        this.stopTime(5);
                    }
                }
                else if (this.infernalInstrument == 1) { // Guitar Solo
                    this.duel.addMessage(this.getName() + " plays a Guitar Solo!");
                    if (this.duel.STORM_COUNTDOWN > 0) {
                        this.duel.addMessage("The storm increases in power!");
                        this.duel.STORM_COUNTDOWN += 5;
                    }
                    else {
                        this.duel.addMessage("A new storm is starting!");
                        this.duel.STORM_COUNTDOWN = 5;
                    }
                    if (this.aviatorBuff) {
                        this.duel.STORM_COUNTDOWN += 5;
                    }
                }
                else if (this.infernalInstrument == 2) { // Synth Solo
                    this.duel.addMessage(this.getName() + " plays a Synth Solo!");
                    if (this.duel.DARKNESS_COUNTDOWN > 0) {
                        this.duel.addMessage("The eldritch darkness increases in power!");
                        this.duel.DARKNESS_COUNTDOWN += 5;
                    }
                    else {
                        this.duel.addMessage("The world is turning dark around you!");
                        this.duel.DARKNESS_COUNTDOWN = 5;
                    }
                    if (this.aviatorBuff) {
                        this.duel.DARKNESS_COUNTDOWN += 5;
                    }
                }
                else if (this.hasSynergy(SYNERGY_PP0)) { // PP Harem
                    this.duel.addMessage("-----------------");
                    this.playMove(EMOTE_PP79);
                }
                else if (this.standPower == STAND_PP15) { // House of Atreus
                    this.duel.addMessage("-----------------");
                    this.duel.addMessage("The House of Atreus answers his calls!");
                    this.heal(30);
                }
                else {
                    this.duel.addMessage(this.getName() + " has no ability to use!");
                }
                break;
            case(EMOTE_MECHA): // Skip
                if (this.isReadyForColossus()) {
                    this.duel.addMessage(this.getName() + " summons the PP Colossus!");
                    this.ppColossusCountdown = 12;

                    if (this.getNbStatus() < 5) this.ppKnightmare = 2
                    else this.ppColossus = 2;
                }
                else {
                    this.duel.addMessage(this.getName() + " is not ready to call the PP Colossus.");
                }
                return;
                break;
            case(EMOTE_FRIEDESPINOZA || attack == EMOTE_ESPINOZE): // Judgement Event
                if (this.duel.ESPINOZA_CHOICE == attack) {
                    this.duel.addMessage(this.getName() + " guessed right! :)");
                    if (this.godList.indexOf(GOD_PP12.name) > 0) {
                        this.duel.addMessage("He gets 10 DEX!");
                        this.DEXValue += 10;
                    }
                    else {
                        this.duel.addMessage("He gets Espinoza as a God!");
                        this.godList.push(GOD_PP12.name);
                    }
                }
                else {
                    this.duel.addMessage(this.getName() + " guessed wrong! :(");
                }
                break;
            case(EMOTE_OBOMBA): // Obama Event
                this.duel.addMessage(this.getName() + " summons the **Obomba**!");
                this.duel.allFightersAction(function(_fighter) {
                    _fighter.damage(_fighter.STR, false);
                });
                break;
            case(EMOTE_OBAMAHEDRON): // Obama Event
                this.duel.addMessage(this.getName() + " summons the **Obamahedron**!");
                this.duel.addMessage("Both fighters gets some random bonus STR!");
                this.duel.bothFightersAction(function(_fighter) {
                    _fighter.STRValue += Math.floor(Math.random() * Math.pow(10, getRandomPercent()));
                });
                break;
            case(EMOTE_OBAMASPHERE): // Obama Event
                this.duel.addMessage(this.getName() + " summons the **Obamasphere**!");
                this.duel.addMessage("Both fighters gets some random bonus DEX!");
                this.duel.bothFightersAction(function(_fighter) {
                    _fighter.DEXValue += Math.floor(Math.random() * Math.pow(10, getRandomPercent()));
                });
                break;
            case(EMOTE_BOSS_ATTACK):
                if (this instanceof Boss) {
                    var randomFighter = this.duel.getRandomFighter();
                    if (this.bossTriggeredAt != null) randomFighter = this.bossTriggeredAt;

                    this.duel.addMessage(this.getName() + " attacks " + randomFighter.getName() + "!");

                    var damage = this.baseDamage;
                    if (this.isMoonLord && this.duel.EVENT_BLOOD_MOON) damage += damage;
                    if (this.duel.PP_ARMAGEDDON) damage = damage*1000;
                    else if (this.duel.INFERNAL_FIRELAND) damage = damage*10;

                    if (randomFighter.cthulhuShield > 0) {
                        this.duel.addMessage(randomFighter.getName() + " reflects the damages!");
                        randomFighter.cthulhuShield -= 1;
                        this.damage(damage);
                    }
                    else {
                        randomFighter.damage(damage, false);
                    }
                }
                else {
                    this.playMove(EMOTE_PP1)
                }
                break;
            case(EMOTE_DEAD): // Dead (Cthulhu battle)
                if (this.STRValue < 70) {
                    this.duel.addMessage(this.getName() + "'s PP corpse does not move.");
                }
                else {
                    this.duel.addMessage(this.getName() + "'s PP corpse is slightly twitching...");
                }
                break;
            case(EMOTE_SKIP): // Skip
                if (this.futureMemories == 0) {
                    this.duel.addMessage(this.getName() + " sends a D-Mail to the past!");
                }
                else {
                    this.duel.addMessage(this.getName() + " does nothing...");
                }
                return;
            default:
                for (var i in GOD_LIST) {
                    if (GOD_LIST[i].emote == attack) {
                        this.godList.push(GOD_LIST[i].name);
                        this.duel.addMessage(this.getName() + " becomes a " + GOD_LIST[i].name + "Priest!");
                    }
                }
                break;
        }

        if (sdsds+1 < numberAttacks) {
            this.duel.addMessage("-----------------");
        }
    }
}
