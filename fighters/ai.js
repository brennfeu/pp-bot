Duel.prototype.botReacts = function() {
    if (this.FIGHTER2.user.id != CLIENT.user.id) return;
    var i = 0;
    var fighter = this.FIGHTER2;

    if (fighter.STR < this.otherFighter(fighter).STR && fighter.DEX < this.otherFighter(fighter).DEX && this.otherFighter(fighter).isPossessed > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP5) > -1) {
        // High Five
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP5).name, fighter.user);
    }
    for (i in STAND_SUMMONS) {
        var check = true;
        for (var j in STAND_SUMMONS[i]) {
            if (STAND_SUMMONS[i][j] != fighter.usedMoves[fighter.usedMoves.length-j-1] && j != STAND_SUMMONS[i].length-1) {
                check = false;
            }
        }
        if (check && this.LIST_AVAILABLE_ATTACKS.indexOf(STAND_SUMMONS[i][STAND_SUMMONS[i].length-1]) > -1) {
            // Summon Stand
            return this.triggerReaction(CLIENT.emojis.cache.get(STAND_SUMMONS[i][STAND_SUMMONS[i].length-1]).name, fighter.user);
        }
    }
    if (fighter.DEX + 30 < this.otherFighter(fighter).DEX && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP8) > -1) {
        // Trap
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP8).name, fighter.user);
    }

    if (this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_MECHA) > -1 && this.FIGHTER2.isReadyForColossus()) {
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_MECHA).name, fighter.user);
    }
    if (this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_ABILITY) > -1) {
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_ABILITY).name, fighter.user);
    }
    for (var i in GOD_LIST) { // God
        if (this.LIST_AVAILABLE_ATTACKS.indexOf(GOD_LIST[i].emote) > -1) {
            return this.triggerReaction(CLIENT.emojis.cache.get(GOD_LIST[i].emote).name, fighter.user);
        }
    }
    for (i = 0; i < SPECIAL_EMOTE_LIST.length; i++) { // Animated Moves
        if (this.LIST_AVAILABLE_ATTACKS.indexOf(SPECIAL_EMOTE_LIST[i]) > -1) {
            return this.triggerReaction(CLIENT.emojis.cache.get(SPECIAL_EMOTE_LIST[i]).name, fighter.user);
        }
    }
    for (i = 0; i < INFERNAL_EMOTE_LIST.length; i++) { // Infernal Moves
        if (this.LIST_AVAILABLE_ATTACKS.indexOf(INFERNAL_EMOTE_LIST[i]) > -1) {
            return this.triggerReaction(CLIENT.emojis.cache.get(INFERNAL_EMOTE_LIST[i]).name, fighter.user);
        }
    }
    if (fighter.specialCharges > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP52) > -1) {
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP52).name, fighter.user); // God Special Moves
    }
    if (fighter.regularCharges > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP51) > -1) {
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP51).name, fighter.user); // God Regular Moves
    }
    for (i = 0; i < EMOTE_LIST.length; i++) { // If blind --> Illegal
        if ((this.BLIND_COUNTDOWN > 0 || this.TIME_STOP > 0 || fighter.trueBarbarian) && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_LIST[i]) > -1 &&
            this.getRisk(EMOTE_LIST[i]) > 0) {
            return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_LIST[i]).name, fighter.user);
        }
    }

    if (fighter.DEX + 30 < this.otherFighter(fighter).DEX && this.BLIND_COUNTDOWN > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP32) > -1) {
        // High Five Emote
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP32).name, fighter.user);
    }
    if (fighter.STR < this.otherFighter(fighter).STR && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP24) > -1) {
        // Knockback
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP24).name, fighter.user);
    }
    if (this.getRisk(fighter.oldAttack) > 0 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP30) > -1) {
        // Alert
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP30).name, fighter.user);
    }
    if (fighter.DEX + this.getDexChange(EMOTE_PP3) > this.otherFighter(fighter).DEX && this.otherFighter(fighter).STR < 1500 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP3) > -1) {
        // Hologram
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP3).name, fighter.user);
    }
    if (fighter.DEX + this.getDexChange(EMOTE_PP4) > this.otherFighter(fighter).DEX && fighter.STR < 500 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP4) > -1) {
        // Flex
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP4).name, fighter.user);
    }
    if (fighter.STR < 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP7) > -1) {
        // Turkey
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP7).name, fighter.user);
    }
    if (fighter.STR < 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP31) > -1) {
        // Save Me Sign
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP31).name, fighter.user);
    }

    if (fighter.DEX + 30 < this.otherFighter(fighter).DEX && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP68) > -1) {
        // Mech
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP68).name, fighter.user);
    }
    if (fighter.STR > this.otherFighter(fighter).STR * 2 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP74) > -1) {
        // Sword
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP74).name, fighter.user);
    }
    if (this.getRisk(fighter.oldAttack) == EMOTE_PP69 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP69) > -1) {
        // LostSoul
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP69).name, fighter.user);
    }
    if (fighter.STR > this.otherFighter(fighter).STR + 30 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP74) > -1) {
        // Sword
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP74).name, fighter.user);
    }

    if (this.MOVE_COUNT > 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP46) > -1) {
        // YES
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP46).name, fighter.user);
    }
    if (this.MOVE_COUNT > 50 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP26) > -1) {
        // BigSatan
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP26).name, fighter.user);
    }

    if (this.quickeningCharges >= 10 && this.LIST_AVAILABLE_ATTACKS.indexOf(EMOTE_PP77) > -1) {
        // Satan Hand
        return this.triggerReaction(CLIENT.emojis.cache.get(EMOTE_PP77).name, fighter.user);
    }

    var emote = randomFromList(this.LIST_AVAILABLE_ATTACKS);
    var dont = [EMOTE_PP9, EMOTE_PP10, EMOTE_PP25, EMOTE_PP38, EMOTE_PP40, EMOTE_PP41, EMOTE_PP47, EMOTE_PP50,
            EMOTE_PP51, EMOTE_PP52];

    if (fighter.STR > 1000) {
        // Turkey
        dont.push(EMOTE_PP7);
    }
    if (this.BLIND_COUNTDOWN <= 0) {
        // High Five Emote
        dont.push(EMOTE_PP32);
    }
    if (fighter.STR < 50) {
        // Headless
        dont.push(EMOTE_PP33);
    }
    if (fighter.STR < 25) {
        // Disembowled
        dont.push(EMOTE_PP37);
    }
    if (fighter.STR/10 > this.otherFighter(fighter).missedMoves*50) {
        // LaughSoul
        dont.push(EMOTE_PP23);
    }
    if (fighter.isOverCurcumcised) {
        // Overcircumcised
        dont.push(EMOTE_PP12);
    }
    if (fighter.isCurcumcised) {
        // Circumcised
        dont.push(EMOTE_PP22);
    }
    if (fighter.STR > this.otherFighter(fighter).STR) {
        // Knockback
        dont.push(EMOTE_PP24);
    }
    if (this.BLIND_COUNTDOWN > 100) {
        // Facehugged
        dont.push(EMOTE_PP35);
    }
    if (!fighter.isTerrorist) {
        // Explosion
        dont.push(EMOTE_PP36);
    }
    else {
        // Kamikaze
        dont.push(EMOTE_PP44);
    }
    if (fighter.riotShield) {
        // RiotShield
        dont.push(EMOTE_PP17);
    }
    if (fighter.isBigPP && fighter.isFastPP && fighter.isAlienPP && fighter.isDrunkPP && fighter.isHockeyPuckPP) {
        // Perhaps
        dont = dont.slice(dont.indexOf(EMOTE_PP50), 1);
    }
    if (this.quickeningCharges < 10) {
        // Satan Hand
        dont.push(EMOTE_PP77);
    }
    if (!this.CHRISTIAN_TEXT) {
        dont.push(EMOTE_PP80);
    }

    if (dont.indexOf(fighter.oldAttack) > -1) {
        // Alert
        dont.push(EMOTE_PP30);
    }
    for (i = 0; i < EMOTE_LIST.length; i++) {
        if (fighter.DEX + this.getDexChange(EMOTE_LIST[i]) + 20 < this.otherFighter(fighter).DEX) {
            // No move with shitty DEX
            dont.push(EMOTE_LIST[i]);
        }
        else if (this.getRisk(EMOTE_LIST[i]) > 0) {
            // No illegal move
            dont.push(EMOTE_LIST[i]);
        }
    }

    var nbTries = 0;
    while (dont.indexOf(emote) > -1 && nbTries < 100) {
        emote = randomFromList(this.LIST_AVAILABLE_ATTACKS);
        nbTries += 1;
    }

    this.triggerReaction(CLIENT.emojis.cache.get(emote).name, this.FIGHTER2.user);
}
