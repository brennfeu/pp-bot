Duel.prototype.setRandomAttackList = function() {
    var listeAttaques = [];
    var emote;

    if (this.ESPINOZA_CHOICE != "") {
        listeAttaques = [EMOTE_FRIEDESPINOZA, EMOTE_ESPINOZE];
    }
    else if (this.EVENT_DEPRESSION) {
        listeAttaques = [EMOTE_PP47];
    }
    else if (this.EVENT_CONFUSION) {
        listeAttaques = [EMOTE_PP39];
    }
    else if (this.EVENT_MEGA_POOL) {
        var fullList = NORMAL_EMOTE_LIST.concat(GOD_EMOTE_LIST).concat(SPECIAL_EMOTE_LIST).concat(STAND_EMOTE_LIST)
            .concat(RARE_EMOTE_LIST).concat(INFERNAL_EMOTE_LIST).concat(OTHER_EMOTE_LIST);
        while (listeAttaques.length < 20) {
            emote = randomFromList(fullList);
            if (listeAttaques.indexOf(emote) < 0) {
                listeAttaques.push(emote);
            }
        }
    }
    else if (this.FIGHTER1.infernalMagic || this.FIGHTER2.infernalMagic) {
        listeAttaques = INFERNAL_EMOTE_LIST;
        this.FIGHTER1.infernalMagic = false;
        this.FIGHTER2.infernalMagic = false;
    }
    else if (this.FIGHTER1.armageddonMagic || this.FIGHTER2.armageddonMagic) {
        listeAttaques = SPECIAL_EMOTE_LIST;
        this.FIGHTER1.armageddonMagic = false;
        this.FIGHTER2.armageddonMagic = false;
    }
    else if (this.FORCE_PERHAPS) {
        listeAttaques = [EMOTE_PP50];
        this.FORCE_PERHAPS = false;
    }
    else if (this.FORCE_SATAN) {
        listeAttaques = [EMOTE_PP26];
    }
    else if (this.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) {
        var nbTries = 0
        while (listeAttaques.length < 5 && nbTries < 100) {
            emote = this.getRandomEmote();
            if (listeAttaques.indexOf(emote) < 0) {
                listeAttaques.push(emote);
            }
            nbTries += 1;
        }
    }
    else {
        var commonMoves = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5];
        for (var i in this.MERGED_WORLDS) commonMoves.push(this.getRandomEmote());

        for (var i in commonMoves) {
            if (this.KIDNEY_CURSE <= i || this.KIDNEY_CURSE <= 0) {
                var currentLength = listeAttaques.length;
                while (listeAttaques.length <= currentLength) {
                    if (this.PPLEVEL > 200 && this.MOVE_COUNT == 0 && getRandomPercent() <= 10 && i == 0) {
                        emote = EMOTE_PP81; // Melodia
                    }
                    else if (getRandomPercent() > 20) {
                        emote = this.getRandomEmote();
                    }
                    else {
                        emote = commonMoves[i];
                    }

                    if (listeAttaques.indexOf(emote) < 0) {
                        listeAttaques.push(emote);
                    }
                }
            }
            else if (listeAttaques.indexOf(EMOTE_PP33) < 0) {
                listeAttaques.push(EMOTE_PP33);
                listeAttaques.push(EMOTE_PP37);
            }
        }
    }

    if (this.FIGHTER1.regularCharges > 0 || this.FIGHTER2.regularCharges > 0) {
        listeAttaques.push(EMOTE_PP51);
    }
    if (this.FIGHTER1.specialCharges > 0 || this.FIGHTER2.specialCharges > 0) {
        listeAttaques.push(EMOTE_PP52);
    }

    if (this.PPLEVEL >= 50) {
        if (this.FIGHTER1.isReadyForColossus() || this.FIGHTER2.isReadyForColossus()) {
            listeAttaques.push(EMOTE_MECHA);
        }
        if ((((this.FIGHTER1.requiemPower != null && this.FIGHTER1.requiemCooldown <= 0) ||
              (this.FIGHTER2.requiemPower != null && this.FIGHTER2.requiemCooldown <= 0) ||
              this.FIGHTER1.standPower == STAND_PP15 || this.FIGHTER2.standPower == STAND_PP15 ||
              this.FIGHTER1.hasSynergy(SYNERGY_PP0) || this.FIGHTER1.hasSynergy(SYNERGY_PP0)) &&
             getRandomPercent() <= 34) ||
            (this.INFERNAL_FIRELAND && getRandomPercent() <= 10)) {
            listeAttaques.push(EMOTE_ABILITY);
        }

        if (this.OBAMIUM && !this.EVENT_MEGA_POOL) {
            listeAttaques.push(EMOTE_OBAMAHEDRON);
            listeAttaques.push(EMOTE_OBAMASPHERE);
            listeAttaques.push(EMOTE_OBOMBA);
            this.OBAMIUM = false
        }
    }

    this.LIST_AVAILABLE_ATTACKS = listeAttaques.slice(0, 20);
}

Duel.prototype.getRandomEmote = function(_canBeIllegal = true) {
    var legalList = [];
    var illegalList = [];
    var goodList = [];

    for (var i in NORMAL_EMOTE_LIST) {
        if ([EMOTE_PP36, EMOTE_PP47].indexOf(NORMAL_EMOTE_LIST[i]) < 0) {
            if (this.getRisk(NORMAL_EMOTE_LIST[i]) == 0) legalList.push(NORMAL_EMOTE_LIST[i]);
            illegalList.push(NORMAL_EMOTE_LIST[i]);
        }
    }

    if (_canBeIllegal) goodList = illegalList;
    else goodList = legalList;

    if (this.ILLEGAL_BOMBING) goodList.push(EMOTE_PP36);
    if (!this.DISABLE_ABANDON) goodList.push(EMOTE_PP47);
    if (this.INFERNAL_FIRELAND || getRandomPercent() <= 5) goodList = goodList.concat(INFERNAL_EMOTE_LIST);
    if (this.PP_ARMAGEDDON || getRandomPercent() <= 3) goodList = goodList.concat(SPECIAL_EMOTE_LIST);

    for (var i in this.MERGED_WORLDS) {
        if (this.MERGED_WORLDS[i] == DLC_GUNGEON &&
            this.EVENT_BOSS != null &&
            this.EVENT_BOSS instanceof GungeonRat3) continue; // no gungeon emotes against his punchout

        if (this.MERGED_WORLDS[i].emotes != undefined) goodList = goodList.concat(this.MERGED_WORLDS[i].emotes);

        if (this.MERGED_WORLDS[i] == DLC_GUNGEON) {
            if (this.GU_CURRENT_FLOOR == FLOOR_GUS3) goodList = this.MERGED_WORLDS[i].emotes; // only gungeon emotes in rat's lair

            goodList = goodList.concat(GUNGEON_FLOORS_UNITS[this.GU_CURRENT_FLOOR]).concat([ EMOTE_GU23 ]).concat(this.GU_BOSS_DROP_MOVES);
            if ((this.FIGHTER1.STR > 0 && this.FIGHTER1.guJammedBattalion) || (this.FIGHTER2.STR > 0 && this.FIGHTER2.guJammedBattalion)) goodList.push(EMOTE_GU19);

            if (getRandomPercent() <= 5) goodList.push(GUNGEON_OTHER_EMOTE_LIST);

            if (this.GU_CURRENT_FLOOR != FLOOR_GU1) goodList.splice(goodList.indexOf(EMOTE_GU8), 1);
            if ((this.FIGHTER1.guShrine == EMOTE_GU2 || this.FIGHTER2.guShrine == EMOTE_GU2) && getRandomPercent() <= 10) goodList = [ EMOTE_GU41 ]; // Junk
            if (this.GU_CURRENT_FLOOR == FLOOR_GU3 && getRandomPercent() <= 5) goodList = [ EMOTE_GU42 ]; // Gnawed Key
        }
    }

    if (this.PP_NET == 3 || this.EASY_DUEL) goodList = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP4, EMOTE_PP5, EMOTE_PP8, EMOTE_PP12, EMOTE_PP13,
            EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22, EMOTE_PP30, EMOTE_PP31,
            EMOTE_PP39, EMOTE_PP42, EMOTE_PP45];
    if (this.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) goodList = STAND_EMOTE_LIST;
    if (getRandomPercent() <= 3 && !this.EASY_DUEL) goodList = goodList.concat(RARE_EMOTE_LIST);
    if (goodList.indexOf(EMOTE_PP77) > -1 && (this.FIGHTER1.quickeningCharges < 10 || this.FIGHTER2.quickeningCharges < 10)) goodList = goodList.splice(goodList.indexOf(EMOTE_PP77), 1);

    return randomFromList(goodList);
}

Duel.prototype.getAttackFromEmote = function(_emote) {
    for (var i in EMOTE_LIST) {
        if (_emote == CLIENT.emojis.cache.get(EMOTE_LIST[i]).name) {
            return EMOTE_LIST[i];
        }
    }
    for (var i in GOD_LIST) {
        if (_emote.name == CLIENT.emojis.cache.get(GOD_LIST[i].emote).name) {
            return GOD_LIST[i].emote;
        }
    }
    return EMOTE_SKIP;
}
