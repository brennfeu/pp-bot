var Fighter = class {
	constructor(_idUser, _idDuel, _stand = null) {
		if (_idUser == undefined) { // default constructor
			return;
		}

		// set variables
		this.idUser = _idUser;
		this.guildUser = getDuel(_idDuel).GUILD.members.cache.get(_idUser);
		this.user = this.guildUser.user;
		this.userBuild = getPlayerBuild(this.idUser);
		updatePlayer(this.user.id, this.user.username.secureXSS());
		this.destroyerOfWorlds = isPlayerDestroyer(this.idUser);

		this.duel = getDuel(_idDuel);

		this.attack = "";
		this.oldAttack = EMOTE_PP30;
		this.attackedThisTurn = true;
		this.damageTaken = 0;
		this.pushedDamages = 0;
		this.grantsKillerBlessings = 30;
		this.lastPuncher = null;

		// set roles
		for (var i in FIGHTING_STYLE_LIST) this[FIGHTING_STYLE_LIST[i].fighterStatus] = false;

		this.godList = [];
		this.standPower = _stand;
		this.requiemPower = null;
		this.relics = [];

		this.currentStand = null;
		this.usedMoves = [];

		// Priest Charges
		this.regularCharges = 0;
		this.specialCharges = 0;

		// Battle variables
		this.resetBattleVariables();
		this.dexMalus = 0;
		this.hasBoomerang = 0;
		this.turkeyCountdown = -1;
		this.isPossessed = 0;
		this.isCircumcised = false;
		this.isOverCircumcised = false;
		this.isProtected = false;
		this.acidArmor = 0;
		this.missedMoves = 0;
		this.bonusDamage = 0;
		this.isTerrorist = false;
		this.hasBurst = 0;
		this.chimera = false;
		this.tearDrinker = 0;
		this.summonTankCountdown = 0;
		this.turnSkip = 0;
		this.eldritchFriend = false;
		this.isCowBoy = false;
		this.trueBarbarian = false;
		this.pigHeal = 0;
		this.isLucky = 0;
		this.doomReverse = 0;
		this.hasExamined = 0;
		this.extraLife = 0;
		this.grabbedPP = 0;
		this.legAimer = false;
		this.livingGod = false;
		this.liberatedPP = 0;
		this.mikasaBuff = 0;
		this.dualWield = false;
		this.bossKiller = 0;
		this.fullOfAmmo = false;
		this.ragingSpirit = 0;
		this.xenoMask = false;
		this.satanMask = false;
		this.helldogMask = false;
		this.ironProtection = 0;
		this.quickeningCharges = 0;
		this.kungFu = false;
		this.borealSummon = 0;
		this.tentacles = 0;
		this.randomizedStand = false;
		this.requiemCooldown = 0;
		this.extraLifeDuplication = null;
		this.impendingDoom = 0;
		this.redPillAddiction = 0;
		this.satanicMoveMultiplier = false;
		this.ultimatePPBuff = 0;
		this.goldenSpoons = 0;
		this.megaBuildUp = 0;
		this.futureMemories = -1;
		this.dodgableDamages = [];
		this.gettingRegularCharge = 0;
		this.gettingSpecialCharge = 0;
		this.hasKamui = false;
		this.lifeFibers = 0;
		this.hasSupplyDrops = false;
		this.satanicReverse = 0;
		this.infernalInstrument = 0;
		this.selfReverseDamage = 0;
		this.forceCritical = false;
		this.hivePack = 0;
		this.cthulhuShield = 0;
		this.sporeSac = false;
		this.boneGlove = false;
		this.shinyStone = false;
		this.cuteFishron = false;
		this.flugelBlood = false;
		this.explosionMagic = 0;
		this.aviatorBuff = false;
		this.silenced = false;
		this.empressLightBuff = false;
		this.forcedSynergies = [];
		this.infernalMagic = false;
		this.armageddonMagic = false;
		this.streliziaBuff = 0;
		this.klaxoTails = false;
		this.iceWeapon = false;
		this.akameDex = 0;
		this.akameKill = 0;
		this.murasameCurse = false;
		this.tempestBuff = false;
		this.ppBribe = 0;
		this.inLove = 0;
		this.huTaoBuff = 0;
		this.bloodBlossom = 0;
		this.ppColossus = 0;
		this.ppColossusCountdown = 0;
		this.kingsPower = 0;
		this.knightmareBuff = false;
        this.ppKnightmare = 0;
		this.boneHelm = false;
        this.hal = false;

		// Check Bad Values
		if (this.STR <= 0) {
			this.STRValue += (0 - this.STR) + 1
		}

		if (_stand != null) { // Create a stand
			this.user = {};
			this.user["username"] = _stand;
			this.user["id"] = this.guildUser.user.id;
			this.destroyerOfWorlds = false;

			// Natural values
			this.STRValue = 150;
			this.DEXValue = 40;
            this.AETValue = 0;

			if (this.standPower == STAND_PP2) { // Boreal Flame
				this.borealSummon = 10;
			}
			if (this.standPower == STAND_PP5) { // Perfect Machine
				this.randomizedStand = true;
			}
			if (this.standPower == STAND_PP8) { // Black Clouds & Silver Linings
				this.extraLife = 1;
				this.standPower = STAND_PP8_1;
				if (getRandomPercent() <= 50) {
					this.standPower = STAND_PP8_2;
				}
				this.user["username"] = this.standPower;
			}
			if (this.standPower == STAND_PP8_1 || this.standPower == STAND_PP8_2) { // Black Clouds / Silver Linings
				this.STRValue = 80;
			}
			if (this.standPower == STAND_PP12) { // Space Metal
				this.quickeningCharges = 5;
			}
			if (this.standPower == STAND_PP17) { // Titans of Creation
				this.selfReverseDamage = 2;
			}
		}
		else { // Create a fighter
            for (var i in FIGHTING_STYLE_LIST) {
                if (this.userBuild.fightingstyles.indexOf(FIGHTING_STYLE_LIST[i].name) > -1) {
    				this[FIGHTING_STYLE_LIST[i].fighterStatus] = true;
    				this.ultimatePPBuff += 1;
    			}
            }

			for (var i in GOD_LIST) {
				if (this.userBuild.gods.indexOf(GOD_LIST[i].name) > -1) {
					this.godList.push(GOD_LIST[i].name)
				}
			}
			while (this.godList.length < 3) {
				var r = randomFromList(GOD_LIST);
				if (this.godList.indexOf(r.name) <= -1 && r.type == "normal") {
					this.godList.push(r.name);
				}
			}

			if (this.godList.indexOf(GOD_PP21.name) > -1) { // D.I.C.K. Special Effect
				var currentSize = this.godList.length;
				while (this.godList.length < currentSize+1) {
					r = randomFromList(GOD_LIST).name;
					if (this.godList.indexOf(r) < 0) {
						this.godList.push(r);
						this.duel.addMessage(r + " joins " + this.getName() + "!");
					}
				}
			}
			if (this.godList.indexOf(GOD_PP24.name) > -1) { // Time Cube Special Effect
				this.redPillAddiction = 3;
			}

			// Natural values
			this.STRValue = 70;
			this.DEXValue = 20;
            this.AETValue = 0;

			if (this.godList.indexOf(GOD_PP25.name) > -1) { // Cthulhu Special Effect
				this.STRValue += 30;
				this.cthulhuShield = 1;
			}
            if (this.destroyerOfWorlds) { // slight buff
                this.STRValue += 30;
                this.DEXValue += 5;
            }
		}

        for (var i in this.duel.MERGED_WORLDS) if (this.duel.MERGED_WORLDS[i].fighterInitFunction != undefined) this.duel.MERGED_WORLDS[i].fighterInitFunction(this);
	}

	getName() {
		var name = this.getBaseName();
		if (this.duel.RUSSIAN_TEXT > 0) {
			name += "ijov";
		}
		if (this.duel.UWU_TEXT > 0) {
			if (getRandomPercent() <= 25) {
				name += "-Chan";
			}
			else if (getRandomPercent() <= 50) {
				name += "-Kun";
			}
			else if (getRandomPercent() <= 75) {
				name += "-Senpai";
			}
			else {
				name += "-Sama";
			}
		}
		if (this.streliziaBuff == 1) {
			name += " XX";
		}
		else if (this.streliziaBuff == 2) {
			name = "Golden " + name;
		}
		else if (this.streliziaBuff == 3) {
			name += " 001";
		}
		else if (this.streliziaBuff >= 4) {
			name += " True Apus";
		}
		if (this.duel.SEXY_TEXT > 0) {
			var random = getRandomPercent()
			if (random <= 33) {
				name = "Sexy " + name;
			}
			else if (random <= 66) {
				name = "Hot " + name;
			}
			else {
				name = "Retarded " + name;
			}
		}
		if (this.duel.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE && this.requiemPower != null) {
			name += " Requiem";
		}
		return name;
	}
	getBaseName() {
		return this.user.username.secureXSS();
	}
	getImageURL() {
		try { return this.guildUser.user.displayAvatarURL(); }
		catch(e) { return null; }
	}

	// fighter.STR
	get STR() {
		var str = this.STRValue;
		if (this.isBigPP) {
			str += 10;
		}
		if (this.isFastPP) {
			str -= 5;
		}
		if (this.isHockeyPuckPP) {
			str -= 45;
		}
		if (this.isAlienPP) {
			str -= 10;
		}
		if (this.hasBoner) {
			str += 50;
		}
		if (this.mikasaBuff > 0) {
			str += 50;
		}
		if (this.satanMask) {
			str += 50;
		}
		if (this.livingGod) {
			str += 10000;
		}
		if (this.hasKamui) {
			str += 200;
		}
		if (this.streliziaBuff > 0) {
			str += 20*this.streliziaBuff;
		}
		if (this.standPower == STAND_PP8_1) {
			str += 50;
		}
		if (this.duel.BOREAL_WORLD && this.standPower == STAND_PP2) {
			str += 200;
		}
		if (this.requiemPower != null && this.duel.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) {
			str += 200;
		}
		if (this.hasSynergy(SYNERGY_PP17)) {
			str += 50;
		}
		if (this.hasSynergy(SYNERGY_PP24)) {
			str += 15;
		}
		if (this.hasRelic(RELIC_PP6)) {
			str += 20;
		}
		if (this.hasAllStyles()) {
			str += 50 + ((5-this.ultimatePPBuff)*10);
		}
		if (this.duel.INFERNAL_FIRELAND) {
			str += 1000;
		}
		if (this.duel.PP_ARMAGEDDON) {
			str += 1000000;
		}

		if (this.hasSynergy(SYNERGY_PP0)) { // PP Harem
			str += str;
		}
		if (this.guShrine == EMOTE_GU5) str = Math.floor(str*0.65);
		if (this.ppColossus > 0) {
			str = str*10;
		}
		else if (this.ppKnightmare > 0) {
			str = str*5;
		}

		if (this.duel.EVENT_BOSS != null && str <= 0) {
			return 0;
		}
		return str;
	}

	// fighter.DEX
	get DEX() {
		var dex = this.DEXValue;
		// Burst
		if (this.hasBurst >= 1) {
			return 0;
		}
		// BronanSlam
		if (this.megaBuildUp > 0) {
			dex = this.bonusDamage;
		}

		dex += this.dexMalus;
		if (this.hasExamined == 1) {
			dex += 30;
		}
		if (this.isBigPP) {
			dex -= 5;
		}
		if (this.isFastPP) {
			dex += 5;
		}
		if (this.isDrunkPP) {
			dex -= 15;
		}
		if (this.isHockeyPuckPP) {
			dex -= 45;
		}
		if (this.hasBoner) {
			dex -= 20;
		}
		if (this.mikasaBuff > 0) {
			dex += 10;
		}
		if (this.duel.getOppOf(this).helldogMask) {
			dex -= 20;
		}
		if (this.xenoMask) {
			dex += 10;
		}
		if (this.kungFu) {
			dex += 10;
		}
		if (this.livingGod) {
			dex += 10000;
		}
		if (this.futureMemories > 0) {
			dex += 15;
		}
		if (this.hasKamui) {
			dex += 20;
		}
		if (this.streliziaBuff > 0) {
			dex += 5*this.streliziaBuff;
		}
		if (this.quickeningCharges > 0) {
			dex += this.quickeningCharges;
		}
        if (this.encheesed > 0) dex -= this.encheesed*5;
		if (this.standPower == STAND_PP1) {
			dex += 5;
		}
		if (this.standPower == STAND_PP8_2) {
			dex += 10;
		}
		if (this.duel.BOREAL_WORLD && this.standPower == STAND_PP2) {
			dex += 50;
		}
		if (this.requiemPower != null && this.duel.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) {
			dex += 30;
		}
        if (this.godList.indexOf(GOD_PP4.name) > -1) {
            dex += this.duel.THERESA_INFLUENCE*5;
        }
		if (this.hasRelic(RELIC_PP6)) {
			dex += 5;
		}
		if (this.hasSynergy(SYNERGY_PP8)) {
			dex += 10;
		}
		if (this.hasSynergy(SYNERGY_PP24)) {
			dex += 5;
		}
		if (this.hasAllStyles()) {
			dex += 50 + ((5-this.ultimatePPBuff)*10);
		}
		if (this.duel.PP_ARMAGEDDON) {
			dex += 200;
		}

		if (this.hasSynergy(SYNERGY_PP11) && dex <= 0) {
			return 0;
		}
		if (this.ppColossus > 0) {
			dex = dex*10;
		}
		else if (this.ppKnightmare > 0) {
			dex = dex*5;
		}
		if (this.akameDex > 0) {
			 dex += dex;
		}

		if (this.hasSynergy(SYNERGY_PP0) && dex > 0) { // PP Harem
			dex += dex;
		}
		return dex;
	}

    // fighter.INT
    get AET() {
        var aet = this.AETValue;
        aet += this.duel.MERGED_WORLDS.length*25;

		if (this.hasAllStyles()) {
			aet += 50 + ((5-this.ultimatePPBuff)*10);
		}

		if (this.duel.PP_ARMAGEDDON) {
			aet = aet*10000;
		}
        else if (this.duel.INFERNAL_FIRELAND) {
			aet = aet*10;
		}

		if (this.livingGod) {
			aet += 10000;
		}

        return aet;
    }

	// fighter.toString
	toString() {
		var embedMessage = new DISCORD.MessageEmbed();
		embedMessage.setColor("RANDOM");
		embedMessage.setThumbnail(this.getImageURL());

		// TITLE
		var nameTxt = "";
		if (this.duel.MERGED_WORLDS.indexOf(DLC_GENSHIN) > -1) {
			for (var i in GENSHIN_ELEMENT_LIST) {
				if (this.giElementManager.isAffectedBy(GENSHIN_ELEMENT_LIST[i])) nameTxt += displayEmote(getEmoteFromGenshinElement(GENSHIN_ELEMENT_LIST[i]));
			}
		}
		nameTxt += "**" + this.getName() + "**";
		if (this.destroyerOfWorlds) nameTxt += " - Destroyer of Worlds"
		embedMessage.setTitle(nameTxt + "\n");

		// SPECIAL CASES
		if (this.duel.MOVE_COUNT >= 10000) {
			return embedMessage.setDescription(" - Wiped out").toJSON();
		}
		if (this.STR <= 0 && this.duel.EVENT_BOSS != null) {
			return embedMessage.setDescription("**Dead** :(").toJSON();
		}

		// STATS
		var statsTxt = "**STR:** " + sciText(this.STR);
		statsTxt += "   //   **DEX:** " + sciText(this.DEX);
        if (this.duel.WORLD_MERGE) {
            statsTxt += "   //   **AET:** " + sciText(this.AET);
        }
		if (this.dexMalus > 0) {
			statsTxt += "\n - DEX Bonus: **" + sciText(this.dexMalus) + "**";
		}
		embedMessage.setDescription(statsTxt);

		// GODS
		var godsText = "";
		if (this.regularCharges > 0 || this.specialCharges > 0 || this.chimera) {
			var types = ["normal", "eldritch", "waifu"];
			var typesNames = ["Gods", "Eldritch Gods", "Waifus"];
			for (var t in types) {
				var testAll = true;
				for (var i in GOD_LIST) {
					if (GOD_LIST[i].type == types[t] && GOD_LIST.find(r => r.name == this.godList[i]) == undefined) {
						testAll = false;
					}
				}

				if (testAll) {
					godsText += "\n - *All " + typesNames[t] + "*";
				}
				else {
					for (var i in this.godList) {
						if (GOD_LIST[i].type == types[t] && GOD_LIST.find(r => r.name == this.godList[i]) != undefined) {
							godsText += "\n" + displayEmote(GOD_LIST.find(r => r.name == this.godList[i]).emote) + " " + this.godList[i] + " Priest";
						}
					}
				}
			}

			for (var i in this.godList) {
				if (GOD_LIST.find(r => r.name == this.godList[i]) == undefined) {
					godsText += "\n - " + this.godList[i] + " Priest";
				}
			}
		}
		if (this.regularCharges > 0) {
			godsText += "\n" + displayEmote(EMOTE_PP51) + " Regular Charges: " + this.regularCharges;
		}
		if (this.specialCharges > 0) {
			godsText += "\n" + displayEmote(EMOTE_PP52) + " Special Charges: " + this.specialCharges;
		}
        if (godsText.length > 1000) godsText = godsText.substring(0, 1000) + "...";
		if (godsText != "") embedMessage.addField("Faith", sciText(godsText), true);

		// RELICS
		var relicsTxt = "";
		for (var i in RELIC_LIST) if (this.hasRelic(RELIC_LIST[i])) relicsTxt += "- " + RELIC_LIST[i] + "\n";
		if (relicsTxt != "") embedMessage.addField("Relics", sciText(relicsTxt), true);

		// FIGHTING STYLES
		var fightingStylesTxt = "";
		if (this.hasAllStyles()) {
			fightingStylesTxt += displayEmote(EMOTE_PP4) + " *Ultimate PP" + romanizeNumber(5-this.ultimatePPBuff) + "*";
		}
		else {
            for (var i in FIGHTING_STYLE_LIST) {
                if (this[FIGHTING_STYLE_LIST[i].fighterStatus]) {
    				fightingStylesTxt += displayEmote(FIGHTING_STYLE_LIST[i].emote) + " " + FIGHTING_STYLE_LIST[i].name + "\n";
    			}
            }
		}
		if (fightingStylesTxt != "") embedMessage.addField("Fighting Styles", sciText(fightingStylesTxt), true);

		// STATUS
		var statusTxt = this.getStatusTxt();
        if (statusTxt.length > 1020) statusTxt = statusTxt.substring(0, 1020) + "...";
		if (statusTxt != "") embedMessage.addField("Status", sciText(statusTxt), true);

        // MERGED WORLDS
        for (var i in this.duel.MERGED_WORLDS) {
            var _function = this.duel.MERGED_WORLDS[i].statusFunction;
            if (_function != undefined) {
                var worldTxt = sciText(this[_function]());
                if (worldTxt.length > 1020) worldTxt = worldTxt.substring(0, 1020) + "...";
        		if (worldTxt != "") embedMessage.addField(this.duel.MERGED_WORLDS[i].name, sciText(worldTxt), true);
            }
        }

		// SYNERGIES
		var synergyTxt = "";
		if (this.godList.length >= GOD_LIST.length) synergyTxt += "- *PP Harem*\n";
		else {
			if (this.hasSynergy(SYNERGY_PP1)) {
				synergyTxt += "- A Sad Witness\n";
			}
			if (this.hasSynergy(SYNERGY_PP24)) {
				synergyTxt += "- Cosmopolitan\n";
			}
			if (this.hasSynergy(SYNERGY_PP2)) {
				synergyTxt += "- Holy Brenn Trinity\n";
			}
			if (this.hasSynergy(SYNERGY_PP4)) {
				synergyTxt += "- Roleplay Group\n";
			}
			if (this.hasSynergy(SYNERGY_PP3)) {
				synergyTxt += "- Unholy Pudding Trinity\n";
			}

            if (this.hasSynergy(SYNERGY_PP17)) {
                synergyTxt += "- Avatar of Tz'arkan\n";
            }
            if (this.hasSynergy(SYNERGY_PP21)) {
				synergyTxt += "- Big Nose\n";
			}
			if (this.hasSynergy(SYNERGY_PP11)) {
				synergyTxt += "- Debilus Team Member\n";
			}
            if (this.hasSynergy(SYNERGY_PP19)) {
				synergyTxt += "- Eldritch Gang\n";
			}
            if (this.hasSynergy(SYNERGY_PP22)) {
				synergyTxt += "- Extreme Karma\n";
			}
			if (this.hasSynergy(SYNERGY_PP6)) {
				synergyTxt += "- Garbage Music Maker\n";
			}
            if (this.hasSynergy(SYNERGY_PP15)) {
				synergyTxt += "- Guerrier de l'Enfer\n";
			}
			if (this.hasSynergy(SYNERGY_PP13)) {
				synergyTxt += "- Infinite Intellect\n";
			}
            if (this.hasSynergy(SYNERGY_PP20)) {
				synergyTxt += "- Master of Time\n";
			}
            if (this.hasSynergy(SYNERGY_PP18)) {
                synergyTxt += "- Obvious Tentacle Joke\n";
            }
            if (this.hasSynergy(SYNERGY_PP23)) {
				synergyTxt += "- Ram Ranch\n";
			}
			if (this.hasSynergy(SYNERGY_PP10)) {
				synergyTxt += "- Salt Master\n";
			}
			if (this.hasSynergy(SYNERGY_PP8)) {
				synergyTxt += "- Super Predator\n";
			}
            if (this.hasSynergy(SYNERGY_PP16)) {
				synergyTxt += "- Too Much Dicks\n";
			}
			if (this.hasSynergy(SYNERGY_PP9)) {
				synergyTxt += "- Too Smart and Too Powerful\n";
			}
			if (this.hasSynergy(SYNERGY_PP7)) {
				synergyTxt += "- Yaoi Fan\n";
			}
			if (this.hasSynergy(SYNERGY_PP12)) {
				synergyTxt += "- Waifu Body Pillow\n";
			}
            if (this.hasSynergy(SYNERGY_PP14)) {
				synergyTxt += "- Wild Mage\n";
			}
		}
		if (synergyTxt != "") embedMessage.addField("Synergies", sciText(synergyTxt), true);

		return embedMessage.toJSON();
	}
	getStatusTxt() {
		var statusTxt = "";
		// special status
		if (this.randomizedStand) {
			statusTxt += displayEmote(EMOTE_PP62) + " **Perfect Stånd Power**\n";
		}
		if (this.hasSupplyDrops) {
			statusTxt += displayEmote(EMOTE_PP72) + " **Supply Drops Receiver**\n";
		}
		if (this.infernalInstrument == 1) {
			statusTxt += displayEmote(EMOTE_ABILITY) + " **";
			if (this.aviatorBuff) {
				statusTxt += "Super Cool ";
			}
			statusTxt += "Guitar Player**\n";
		}
		else if (this.infernalInstrument == 2) {
			statusTxt += displayEmote(EMOTE_ABILITY) + " **";
			if (this.aviatorBuff) {
				statusTxt += "Super Cool ";
			}
			statusTxt += "Synth Player**\n";
		}
		else if (this.aviatorBuff) {
			statusTxt += displayEmote(EMOTE_ABILITY) + " **Super Cool**\n";
		}
		if (this.livingGod) {
			statusTxt += displayEmote(EMOTE_PP49) + " **Living God**\n";
		}
		if (this.requiemPower != null) {
			statusTxt += displayEmote(EMOTE_ABILITY) + " **Requiem Ability**";
			if (this.requiemCooldown > 0) {
				statusTxt += " (Cooldown: " + this.requiemCooldown + " turns)";
			}
			statusTxt += "\n"
		}
		// temporary status
		if (this.hasBoomerang > 0) {
			statusTxt += displayEmote(EMOTE_PP45) + " With a Boomerang (for " + this.hasBoomerang + " turns)\n";
		}
		if (this.acidArmor > 0) {
			statusTxt += displayEmote(EMOTE_PP21) + " Armored in acid (for " + this.acidArmor + " turns)";
			if (this.sporeSac) {
				statusTxt += " (**Spore Sac**)";
			}
			statusTxt += "\n";
		}
		if (this.doomReverse > 0) {
			statusTxt += displayEmote(EMOTE_PP20) + " DOOM-REVERSE(tm) (for " + this.doomReverse + " turns)\n";
		}
		if (this.satanicReverse > 0) {
			statusTxt += displayEmote(EMOTE_PP26) + " Satanic Protection (for " + this.satanicReverse + " turns)\n";
		}
		if (this.ironProtection > 0) {
			statusTxt += displayEmote(EMOTE_PP135) + " Worm Scarf Protection (for " + this.ironProtection + " turns)\n";
		}
		if (this.isLucky > 0) {
			statusTxt += displayEmote(GOD_PP3.emote) + " Lucky (for " + this.isLucky + " turns)\n";
		}
		if (this.akameDex > 0){
			statusTxt += displayEmote(GOD_PP38.emote) + " Blessed by Akame (for " + this.akameDex + " turns)\n";
		}
		if (this.mikasaBuff > 0) {
			statusTxt += displayEmote(GOD_PP20.emote) + " Blessed by Mikasa (for " + this.mikasaBuff + " turns)\n";
		}
		if (this.akameKill > 0) {
			statusTxt += displayEmote(GOD_PP38.emote) + " Cursed Blade Murasame (for " + this.akameKill + " turns)\n";
		}
		if (this.inLove > 0) {
			statusTxt += displayEmote(GOD_PP40.emote) + " In Love (for " + this.inLove + " turns)\n";
		}
		if (this.huTaoBuff > 0) {
			statusTxt += displayEmote(GOD_PP41.emote) + " Paramita Papilio (for " + this.huTaoBuff + " turns)\n";
		}
		if (this.liberatedPP > 0) {
			statusTxt += displayEmote(EMOTE_PP61) + " Liberated PP (for " + this.liberatedPP + " turns)\n";
		}
		if (this.bossKiller > 0) {
			statusTxt += displayEmote(EMOTE_GU18) + " Killer Adrenaline (for " + this.bossKiller + " turns)\n";
		}
		if (this.selfReverseDamage > 0) {
			statusTxt += displayEmote(EMOTE_PP15) + " Damage Reversed (for " + this.selfReverseDamage + " turns)\n";
		}
		if (this.encheesed > 0) {
			statusTxt += displayEmote(EMOTE_GU44) + " Encheesed (for " + this.encheesed + " turns)\n"
		}
		if (this.futureMemories > 0) {
			statusTxt += displayEmote(GOD_PP27.emote) + " Has Knowledge of the Future (of the next " + this.futureMemories + " turns)\n"
		}
		// countdowns
		if (this.gettingRegularCharge > 0) {
			statusTxt += displayEmote(GOD_PP7.emote) + " Getting a regular charge in " + this.gettingRegularCharge + " turns\n"
		}
		if (this.gettingSpecialCharge > 0) {
			statusTxt += displayEmote(GOD_PP7.emote) + " Getting a special charge in " + this.gettingSpecialCharge + " turns\n"
		}
		if (this.turkeyCountdown > 0) {
			statusTxt += displayEmote(EMOTE_PP7) + " ";
			if (this.turkeyCountdown == 1) statusTxt += "**";
			statusTxt += "Turkey Countdown: " + this.turkeyCountdown + " turns\n";
			if (this.turkeyCountdown == 1) statusTxt += "**";
		}
		if (this.borealSummon > 0) {
			statusTxt += displayEmote(EMOTE_PP77) + " Boreal Fog Countdown: " + this.borealSummon + " turns\n";
		}
		// value status
		if (this.tentacles > 0) {
			statusTxt += displayEmote(EMOTE_PP137) + " Tentacles: " + this.tentacles + "\n";
		}
		if (this.quickeningCharges > 0) {
			statusTxt += displayEmote(EMOTE_PP73) + " Quickening Charges: " + this.quickeningCharges + "\n";
		}
		if (this.madnessStacks > 0) {
			statusTxt += displayEmote(EMOTE_PP76) + " Madness Stacks: " + this.madnessStacks + "\n";
		}
		if (this.cthulhuShield > 0) {
			statusTxt += displayEmote(EMOTE_PP141) + " Shield of Cthulhu Charges: " + this.cthulhuShield + "\n";
		}
		if (this.redPillAddiction > 0) {
			statusTxt += displayEmote(EMOTE_PP18) + " RedPill Addiction: " + this.redPillAddiction + "\n";
		}
		if (this.explosionMagic > 0) {
			statusTxt += displayEmote(GOD_PP30.emote) + " Explosion Magic Points: " + this.explosionMagic + "\n";
		}
		if (this.ragingSpirit > 0) {
			statusTxt += displayEmote(EMOTE_PP69) + " Lost Soul Streak: " + this.ragingSpirit + "\n";
		}
		if (this.tearDrinker > 0) {
			statusTxt += displayEmote(GOD_PP16.emote) + " Tear Drinker: " + this.tearDrinker + "\n";
		}
		if (this.pigHeal > 0 || this.isCowBoy) {
			statusTxt += displayEmote(EMOTE_PP19) + " Hog Squeezer: " + this.pigHeal;
			if (this.isCowBoy) {
				statusTxt += " (**Cowboy**)";
			}
			statusTxt += "\n";
		}
		if (this.megaBuildUp > 0) {
			statusTxt += displayEmote(EMOTE_PP42) + " Build-Up multiplier: " + this.megaBuildUp + "\n";
		}
		if (this.bonusDamage > 0) {
			statusTxt += displayEmote(EMOTE_PP42) + " Build-Up damage: " + this.bonusDamage + "\n";
		}
		if (this.bleedDamage > 0 || this.isSalty) {
			statusTxt += displayEmote(EMOTE_PP14) + " Haemorrhage: " + this.bleedDamage;
			if (this.isSalty) {
				statusTxt += " (**Salty Wounds**)";
			}
			statusTxt += "\n";
		}
		if (this.meltingDamage > 0) {
			statusTxt += displayEmote(EMOTE_PP75) + " Acid: " + this.meltingDamage + "\n";
		}
        if (this.burningStacks > 0) {
			statusTxt += displayEmote(EMOTE_PP75) + " Burning Damage: " + this.burningStacks + "\n";
		}
		if (this.bloodBlossom > 0) {
			statusTxt += displayEmote(GOD_PP41.emote) + " Blood Blossoms: " + this.bloodBlossom + "\n";
		}
		if (this.goldenSpoons > 0) {
			statusTxt += displayEmote(GOD_PP2.emote) + " Golden Spoons: " + this.goldenSpoons + "\n";
		}
		// % values
		if (this.lifeFibers > 0) {
			statusTxt += displayEmote(GOD_PP31.emote) + " Life Fiber: " + (this.lifeFibers*5) + "%\n";
		}
		if (this.ppBribe > 0) {
			statusTxt += displayEmote(GOD_PP40.emote) + " Arbitrator Bribe: " + this.ppBribe + "%\n";
		}
		if (this.hivePack > 0) {
			statusTxt += displayEmote(EMOTE_PP136) + " Hive Pack: " + this.hivePack + "%\n";
		}
		if (this.kingsPower > 0) {
			statusTxt += displayEmote(GOD_PP42.emote) + " Power of the Kings: " + this.kingsPower + "%\n";
		}
		// permanent status
		if (this.xenoMask) {
			statusTxt += displayEmote(EMOTE_PP64) + " Mask: Xeno\n";
		}
		if (this.satanMask) {
			statusTxt += displayEmote(EMOTE_PP66) + " Mask: Satan\n";
		}
		if (this.helldogMask) {
			statusTxt += displayEmote(EMOTE_PP70) + " Mask: Intimidation\n";
		}
		if (this.iceWeapon) {
			statusTxt += displayEmote(GOD_PP36.emote) + " Intellect of Greed\n";
		}
		if (this.acidArmor <= 0 && this.sporeSac) {
			statusTxt += displayEmote(EMOTE_PP143) + " Spore Sac\n"; // shows spore sac here if no acid armor
		}
		if (this.empressLightBuff) {
			statusTxt += displayEmote(EMOTE_PP150) + " Blessing of the Empress of Light\n";
		}
		if (this.boneGlove) {
			statusTxt += displayEmote(EMOTE_PP144) + " Bone Glove\n";
		}
		if (this.cuteFishron) {
			statusTxt += displayEmote(EMOTE_PP147) + " Cute Fishron\n";
		}
		if (this.shinyStone) {
			statusTxt += displayEmote(EMOTE_PP145) + " Shiny Stone\n";
		}
		if (this.boneHelm) {
			statusTxt += displayEmote(EMOTE_PP151) + " Bone Helm\n";
		}
		if (this.satanicMoveMultiplier) {
			statusTxt += displayEmote(GOD_PP22.emote) + " Satanic Move Multiplier\n";
		}
		if (this.hasKamui) {
			statusTxt += displayEmote(GOD_PP31.emote) + " Wearing a Kamui\n";
		}
		if (this.forceCritical) {
			statusTxt += displayEmote(EMOTE_PP42) + " Ready to Inflict a Critical Hit\n";
		}
		if (this.flugelBlood) {
			statusTxt += displayEmote(GOD_PP32.emote) + " Flugel Blood\n";
		}
		if (this.klaxoTails) {
			statusTxt += displayEmote(GOD_PP35.emote) + " Klaxosaurs Tails\n";
		}
		if (this.tempestBuff) {
			statusTxt += displayEmote(GOD_PP39.emote) + " Tempest\n";
		}
		if (this.isOverCircumcised) {
			statusTxt += displayEmote(EMOTE_PP12) + " Overcircumcised\n";
		}
		else if (this.isCircumcised) {
			statusTxt += displayEmote(EMOTE_PP22) + " Circumcised\n";
		}
		if (this.isProtected) {
			statusTxt += displayEmote(EMOTE_PP17) + " Shield Protection\n";
		}
		if (this.isTerrorist) {
			if (!this.duel.ALTERNATE_MOVES) {
				statusTxt += displayEmote(EMOTE_PP44) + " Planning a Terrorist Move\n";
			}
			else {
				statusTxt += displayEmote(EMOTE_OBOMBA) + " N-Word Pass\n";
			}
		}
		if (this.eldritchFriend) {
			statusTxt += displayEmote(GOD_PP23.emote) + " Eldritch Friendly\n";
		}
		if (this.legAimer) {
			statusTxt += displayEmote(GOD_PP19.emote) + " Leg Aimer\n";
		}
		if (this.dualWield) {
			statusTxt += displayEmote(GOD_PP20.emote) + " Dual Wielding\n";
		}
		if (this.knightmareBuff) {
			statusTxt += displayEmote(GOD_PP42.emote) + " Knightmare Knowledge\n";
		}
        if (this.godList.indexOf(GOD_PP4.name) > -1 && this.duel.THERESA_INFLUENCE > 0) {
            statusTxt += displayEmote(GOD_PP4.emote) + " Friend of Theresa\n";
        }
        if (this.hal) {
            statusTxt += displayEmote(GOD_PP4.emote) + " HAL\n";
        }
		if (this.badLuck) {
			statusTxt += displayEmote(GOD_PP15.emote) + " Unlucky\n";
		}
		if (this.fullOfAmmo) {
			statusTxt += displayEmote(EMOTE_PP72) + " Full of Ammos\n";
		}
		if (this.kungFu) {
			statusTxt += displayEmote(EMOTE_PP65) + " Trained Fighter\n";
		}
		if (this.chimera) {
			statusTxt += displayEmote(GOD_PP13.emote) + " Furry PP\n";
		}
		if (this.silenced) {
			statusTxt += displayEmote(GOD_PP33.emote) + " Silenced\n";
		}
		if (this.hasBoner) {
			statusTxt += displayEmote(GOD_PP14.emote) + " Big Boner Mmmmmmh...\n";
		}
		if (this.trueBarbarian) {
			statusTxt += displayEmote(GOD_PP1.emote) + " Great Barbarian from the North Seeking New Lands for his Kingdom\n";
		}
		// special one turn status
		if (this.infernalMagic) {
			statusTxt += displayEmote(GOD_PP34.emote) + " **Infernal Magic**\n";
		}
		if (this.armageddonMagic) {
			statusTxt += displayEmote(GOD_PP34.emote) + " **Armageddon Magic**\n";
		}
		if (this.ppColossus > 0) {
			statusTxt += displayEmote(EMOTE_MECHA) + " **PP Colossus**\n";
		}
		else if (this.ppKnightmare > 0) {
			statusTxt += displayEmote(GOD_PP42.emote) + " **Knightmare**\n";
		}
		else if (this.ppColossusCountdown > 0) {
			statusTxt += displayEmote(EMOTE_MECHA) + " **PP Colossus Countdown: " + this.ppColossusCountdown + "**\n";
		}
		if (this.isPossessed > 0) {
			statusTxt += displayEmote(EMOTE_PP16) + " **Possessed by " + this.duel.otherFighter(this).getName() + "**\n";
		}
		if (this.turnSkip > 0) {
			statusTxt += "**To the Ranch**\n";
		}
		if (this.grabbedPP > 0) {
			statusTxt += displayEmote(GOD_PP24.emote) + " **Very Confused**\n";
		}
		if (this.summonTankCountdown > 0) {
			statusTxt += displayEmote(GOD_PP16.emote) + " **Summoning the Monster (" + (4-this.summonTankCountdown) + "/3)**\n";
		}
		if (this.standPower != null && !this.duel.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE && !this.randomizedStand) {
			statusTxt += displayEmote(EMOTE_PP77) + " **Stånd Power: " + this.standPower + "**\n";
		}
		if (this.extraLife > 0) {
			statusTxt += displayEmote(EMOTE_PP58) + " **Extra lives: " + this.extraLife;
			if (this.extraLifeDuplication != null) {
				statusTxt += " (Temporal Duplication)";
			}
			statusTxt += "**\n";
		}
		if (this.murasameCurse) {
			statusTxt += displayEmote(GOD_PP38.emote) + " **Murasame's Poisonous Curse**\n";
		}
		if (this.impendingDoom > 0) {
			statusTxt += displayEmote(EMOTE_PP20) + " **Impending Doom: " + this.impendingDoom + " turns**\n";
		}

		return statusTxt;
	}
	getNbStatus() {
		return this.getStatusTxt().split("\n").length-1;
	}

    hasAllStyles() {
        for (var i in FIGHTING_STYLE_LIST) if (!this[FIGHTING_STYLE_LIST[i].fighterStatus]) return false;
        return true;
    }
	isReadyForColossus() {
		if (this.ppColossusCountdown > 0 || this.ppColossus > 0) return false;

		var minStatus = 5;
		if (this.knightmareBuff) minStatus = 3;
		return this.getNbStatus() >= minStatus;
	}

	heal(_amount) {
		_amount = Math.floor(_amount);
		_amount += this.quickeningCharges*3;

		if (this.duel.AREA == AREA_PP10) {
			_amount += Math.floor(_amount/2);
		}

		if (this.duel.REVERSE_DAMAGE <= 0 && this.selfReverseDamage <= 0 && !this.duel.POOPOO_UNIVERSE) {
			this.STRValue += _amount;
			this.duel.addMessage(this.getName() + " heals " + _amount + " HP!");
			if (_amount == 69) {
				this.duel.addMessage("nice!");
			}
			return;
		}
		else {
			this.STRValue -= _amount;
			this.duel.addMessage(this.getName() + " takes " + _amount + " damage!");
			if (_amount == 69) {
				this.duel.addMessage("lmao!");
			}
			this.damageTaken += _amount;
			return;
		}
	}

	attackFighter(_fighter, _amount, _options = {}) {
		// madness
		if (_fighter != this && getRandomPercent() <= this.madnessStacks*3) {
			this.duel.addMessage(this.getName() + " hits himself in his madness!");
			return this.damage(_amount);
		}

		var ogAmount = _amount;

		// damage divisions
		// NONE

		// damage additions
		_amount += this.quickeningCharges*3;
		_amount += this.bonusDamage; this.bonusDamage = 0;
		if (this.boneHelm) { var boneHelmBleed = _amount*0.1; _amount -= boneHelmBleed; }
		if (this.kungFu) _amount += 10; // signpost
		if (this.huTaoBuff > 0) _amount += _fighter.STR/20;
		if (this.flugelBlood && this.DEX > _fighter.DEX) _amount += this.DEX - _fighter.DEX; // jibril
		if (this.hasSynergy(SYNERGY_PP16)) _amount += 10; // Too Much Dick

		// damage multiplications
		if (this.megaBuildUp > 0) { // Bronan Slam
			_amount = _amount*this.megaBuildUp;
			this.megaBuildUp = 0;
		}
		if (this.iceWeapon) { // unused?
			_amount += _amount;
			this.duel.addMessage(this.getName() + "'s Magic Ice Weapon breaks on " + _fighter.getName() + "!");
			this.iceWeapon = false;
		}
		if (this.standPower == STAND_PP16 && this.STR <= 15) { // Virus
			this.duel.addMessage("Virus effect triggers!");
			_amount = _amount*100;
		}
		if (this.hasRelic(RELIC_PP8) && getRandomPercent() <= 25) { // door bro
			this.duel.addMessage("Door Bro guides " + this.getName() + "'s attack!");
			_amount += _amount/2;
		}

		// damage reduction
		if (_fighter.hasRelic(RELIC_PP10)) _amount -= _amount*0.15; // Senjougahara Figure
		if (_fighter.standPower == STAND_PP1) _amount -= 10; // Iron Maiden
		if (_fighter.hasSynergy(SYNERGY_PP12)) _amount -= 10; // Waifu Body Pillows

		// crit
		var critMin = 5;
		critMin += this.lifeFibers*5;
		if (this.kungFu) critMin += 15;
		if (this.hasRelic(RELIC_PP6)) critMin += 10;
		if (getRandomPercent() < critMin || this.forceCritical) {
			_amount += _amount;
			this.duel.addMessage("**Critical Hit!**");

			if (_fighter.hasSynergy(SYNERGY_PP22)) _fighter.forceCritical = true;
			this.forceCritical = false;
		}

		if (this.duel.TIME_STOP > 0) {
			if (_amount > 0) _fighter.pushedDamages += _amount;
			return true;
		}
		else if (_fighter.attack == EMOTE_PP10) { // Tank
			this.duel.addMessage(_fighter.getName() + " felt nothing!");
			return false;
		}
        else if (_fighter.attack == EMOTE_GU44) { // Partially Eaten Cheese
			this.duel.addMessage(_fighter.getName() + " felt nothing!");
			return false;
		}
		else if (_fighter.standPower == STAND_PP6 && getRandomPercent() <= 25) { // Sham Mirrors
			this.duel.addMessage(_fighter.getName() + " reflects the damage!");
			_fighter.attackFighter(this, _amount, _options);
			return false;
		}
		else if (_fighter.satanicReverse > 0) { // BigSatan Alternative Move
			this.duel.addMessage(_fighter.getName() + "'s satanic rite protects him!");
			_fighter.attackFighter(this, _amount, _options);
			return false;
		}
		else if (this.tempestBuff && _amount > 0 && getRandomPercent() >= 33) { // Tempest (Ais buff)
			this.duel.addMessage(_fighter.getName() + "'s Tempest protects him!");
			_fighter.attackFighter(this, _fighter.STR/10, { damageType: "wind" });
			return false;
		}
		else if (this.isProtected) { // RiotShield
			this.duel.addMessage(_fighter.getName() + " reflects the damage!");
			_fighter.isProtected = false;
			_fighter.attackFighter(this, _amount, _options);
			return false;
		}
		else if (_fighter.cuteFishron && _fighter.STR <= _amount) {
			this.duel.addMessage("Cute Fishron takes the attacks for " + _fighter.getName() + "!");
			this.duel.addMessage("He dies in an horrible and painful death...");
			_fighter.cuteFishron = false;
			return false;
		}

		// options
		_options["puncher"] = this;
		if (this.boneGlove) _options["boneGlove"] = true;

		var success = _fighter.damage(_amount, _options);
		if (!success) return false;

		// attacker effects
		if (this.standPower == STAND_PP12) _fighter.meltingDamage += 2; // Space Metal
		if (this.standPower == STAND_PP13) _fighter.madnessStacks += 1; // The Scythe of Cosmic Chaos
		if (this.standPower == STAND_PP17) this.heal(10); // Titans of Creation
		if (this.akameKill > 0) {
			this.duel.addMessage(_fighter.getName() + " recieves Murasame's poisonous curse!");
			_fighter.murasameCurse = true;
		}
		if (this.boneHelm) {
			this.duel.addMessage(_fighter.getName() + " takes " + Math.floor(boneHelmBleed) + " bleed stacks!");
			_fighter.bleedDamage += Math.floor(boneHelmBleed);
		}
		if (this.standPower == STAND_PP4) this.heal(_amount/3); // Above the Light
		if (this.standPower == STAND_PP11 && _amount >= 30) { // Refuge Denied
			this.heal(30);
			this.DEXValue += 10;
			this.duel.addMessage(this.getName() + " gets 10 DEX!");
		}
		if (this.hasRelic(RELIC_PP11)) _fighter.DEXValue -= 1; // demon core
		if (this.hasRelic(RELIC_PP3) && getRandomPercent() <= 10) { // ultimate bleach
			this.duel.addMessage(_fighter.getName() + " gets confused!");
			_fighter.grabbedPP = 2;
		}
		if (this.huTaoBuff > 0) { // blood blossom
			this.duel.addMessage(_fighter.getName() + " gets a blood blossom stack!");
			_fighter.bloodBlossom += 1;
		}
		if (this.hasSynergy(SYNERGY_PP19) && getRandomPercent() <= 10) { // Eldritch Gang
			this.duel.addMessage(this.getName() + "'s attack happens again!");
			this.attackFighter(_fighter, ogAmount, _options);
		}

		// victim effects
		if ((_fighter.madnessStacks > 0 && getRandomPercent() <= 10+_fighter.madnessStacks) ||
		(this.isScarredPP && getRandomPercent() <= 10)) { // flinch
			this.duel.addMessage(_fighter.getName() + " flinched!");
			_fighter.hasBurst = 2;
		}
		if (_fighter.isAlienPP) this.bleedDamage += 3; // Alien PP
		if (_fighter.hasRelic(RELIC_PP5)) this.madnessStacks += 1; // amogus plush
		if (this.duel.GAY_TURNS > 0) _fighter.DEXValue += Math.floor(_amount/10); // gay turns
		if (_fighter.standPower == STAND_PP20 && getRandomPercent() <= 25) { // Metal Resistance
			var godListMemory = _fighter.godList.slice();
			_fighter.godList = []

			var randomGod = randomFromList(GOD_LIST);
			while (randomGod.type != "waifu") {
				randomGod = randomFromList(GOD_LIST);
			}
			_fighter.godList.push(randomGod.name);
			_fighter.playMove(EMOTE_PP51);

			_fighter.godList = godListMemory.slice();
		}
		if (_fighter.guGrail && getRandomPercent() <= 50) _fighter.playMove(randomFromList(GUNGEON_RAID_EMOTE_LIST)); // Holey Grail
		if (_fighter.acidArmor >= 1) { // Acid
			this.duel.addMessage(_fighter.getName() + "'s acid armor hurts " + this.getName() + "!");
			if (_fighter.sporeSac) _fighter.attackFighter(this, _amount/4, { damageType: "acid" });
			else _fighter.attackFighter(this, _amount/10, { damageType: "acid" });
		}
		if (_fighter.klaxoTails) { // 02
			for (var i = 0; i < 8; i++) {
				if (getRandomPercent() <= 10) {
					this.duel.addMessage(_fighter.getName() + "'s tail #" + (i+1) + " attacks back!");
					_fighter.attackFighter(this, this.STR/10, { damageType: "punch" });
				}
			}
		}

		return true;
	}
	damage(_amount, _options = {}) {
		// prevent infinite damage
		this.duel.INFINITE_DAMAGE += 1;
		if (this.duel.INFINITE_DAMAGE >= 100) {
			if (this.duel.INFINITE_DAMAGE == 100) this.duel.addMessage("**Damage cap achieved!**");
			return;
		}

		// genshin elements
		if (this.duel.MERGED_WORLDS.indexOf(DLC_GENSHIN) > -1) {
			var giEM = new GenshinElementManager();
			switch(_options["damageType"]) {
				case "fire": giEM.applyElement("Pyro"); break;
				case "electric": giEM.applyElement("Electro"); break;
				case "fire": giEM.applyElement("Pyro"); break;
				case "ice": giEM.applyElement("Cryo"); break;
				case "water": giEM.applyElement("Hydro"); break;
				case "earth": giEM.applyElement("Geo"); break;
				case "nature": giEM.applyElement("Dendro"); break;
			}

			// reactions
			if (giEM.isAffectedBy("Pyro")) {
				if (this.isAffectedBy("Electro")) {
					this.duel.addMessage("*Electro-Charged*");

					var em = this.duel.getOppOf(this).getGenshinEM();
					if (_options["puncher"] != undefined) em = _options["puncher"].getGenshinEM();
					this.damage(em);
				}
				else if (this.isAffectedBy("Cryo")) {
					this.duel.addMessage("*Melt*");
					_amount = _amount*2;
				}
				else if (this.isAffectedBy("Hydro")) {
					this.duel.addMessage("*Reverse Vaporize*");
					_amount = _amount*1.5;
				}
			}
			if (giEM.isAffectedBy("Hydro")) {
				if (this.isAffectedBy("Pyro")) {
					this.duel.addMessage("*Vaporize*");
					_amount = _amount*2;
				}
			}
			if (giEM.isAffectedBy("Cryo")) {
				if (this.isAffectedBy("Pyro")) {
					this.duel.addMessage("*Reverse Melt*");
					_amount = _amount*1.5;
				}
			}
			if (giEM.isAffectedBy("Electro")) {
				if (this.isAffectedBy("Pyro")) {
					this.duel.addMessage("*Electro-Charged*");

					var em = this.duel.getOppOf(this).getGenshinEM();
					if (_options["puncher"] != undefined) em = _options["puncher"].getGenshinEM();
					this.damage(em);
				}
			}

			// affect element
			this.applyElementManager(giEM);
		}

		// damage divisions
		if (this.duel.STEEL_PROTECTION) _amount -= _amount/10*9;
		if (this.duel.AREA == AREA_PP10) _amount += _amount/2;

		// damage additions
		// NONE

		// damage multiplications
		if (this.duel.ATTACK_MISS_COUNTDOWN > 0 && getRandomPercent() < 90) _amount += _amount;
		if (this.duel.BARREL_DAMAGE) _amount = _amount*2;

		// damage reduction
		// NONE

		if (this.duel.REVERSE_DAMAGE > 0 || this.selfReverseDamage > 0) {
			_amount = Math.floor(_amount);
			this.STRValue += _amount;
			this.duel.addMessage(this.getName() + " heals " + _amount + " HP");
			return true;
		}
		else if (this.isDrunkPP && getRandomPercent() < 50) { // Drunk PP
			this.duel.addMessage(this.getName() + " felt nothing because too drunk!");
			return false;
		}
		else if (this.ironProtection > 0) { // Iron Maiden
			this.duel.addMessage(this.getName() + " felt nothing!");
			return false;
		}
		else if (this.cthulhuShield > 0) {
			this.duel.addMessage(this.getName() + "'s Cthulhu Shield cancels the damage!");
			this.cthulhuShield -= 1;
			return false;
		}
		else {
			_amount = Math.floor(_amount);
			if (_options["puncher"] != undefined) this.lastPuncher = _options["puncher"];

			if (_amount <= 0) {
				this.duel.addMessage(this.getName() + " takes no damage!");
				return true;
			}
			else if (_options["boneGlove"]) {
				this.duel.addMessage(this.getName() + " takes " + _amount + " bleed stacks!");
				this.bleedDamage += _amount;
				return true;
			}
			else {
				this.duel.addMessage(this.getName() + " takes " + _amount + " damage!");

				this.damageTaken += _amount;
				this.dodgableDamages.push(_amount);
				if (this.dodgableDamages.length > 5) {
					this.dodgableDamages.pop();
				}

				// Damage
				this.STRValue -= _amount;

				// killer blessing and relics
				if (this.STR <= 0 && this.lastPuncher != null) {
					this.lastPuncher.bossKiller += this.grantsKillerBlessings;
					this.grantsKillerBlessings = 0;

					this.lastPuncher.relics = this.lastPuncher.relics.concat(this.relics);
					this.relics = [];

					if (this.liberatedPP > 0) {
						this.duel.addMessage(this.getName() + "'s PP shall stay liberated!");
						this.playMove(EMOTE_PP24);
					}
				}
			}

			this.duel.DAMAGE_COUNT += _amount;
            if (_options["puncher"] != undefined && _options["puncher"].isKicking && _amount >= 10000) grantPlayerAchievement(_options["puncher"], 4); // Kick
		}

		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm)!");
			this.STRValue += (0 - this.STR) + 10;
			this.doomReverse = 0;
		}

		return true;
	}

	canSelectMove() {
		if (this.duel.TIME_STOP > 0 && this.duel.TIME_STOP_ID != this.idUser) { // if weak --> skip time skip
			return false;
		}
		else if (this.attack == EMOTE_DEAD || this.attack == EMOTE_SKIP) { // no choice
			return false;
		}
		else if (this.isPossessed > 0 || this.turnSkip > 0 && this.grabbedPP > 0 && this.summonTankCountdown == 1) {
			return false;
		}
		return true;
	}
	turnChange() {
		// Clear attaque
		this.attack = "";
		if (!this.attackedThisTurn) {
			this.missedMoves += 1;
			this.dexMalus += 5;

			if (this.shinyStone) {
                this.duel.addMessage("-----------------");
				this.duel.addMessage(this.getName() + "'s Shiny Stone heals him!");
				this.heal(Math.floor(this.STR/10));
			}
		}
		else {
			this.dexMalus = 0;
		}
		this.attackedThisTurn = false;

		// Overcircumcised / Perfect Machine / Cybion = immune to status effects
		if (this.isOverCircumcised || this.randomizedStand || this.standPower == STAND_PP9) {
			this.resetBattleVariables()
		}

		// Trap Sign, Examine, SatanPossess etc..
		this.hasBurst -= 1;
		this.hasExamined -= 1;
		this.isPossessed -= 1;
		this.turnSkip -= 1;
		this.grabbedPP -= 1;
		this.summonTankCountdown -= 1;
		this.borealSummon -= 1;
		this.requiemCooldown -= 1;
		this.impendingDoom -= 1;
		this.gettingRegularCharge -= 1;
		this.gettingSpecialCharge -= 1;
		this.satanicReverse -= 1;
		this.turkeyCountdown -= 1;
		this.inLove -= 1;
        if (this.encheesed > 0) this.encheesed -= 1;

		if (this.empressLightBuff && getRandomPercent() <= 50) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " feels the blessing by the Empress of Light!");
		}
		else { // timed effects -= 1
			this.doomReverse -= 1;
			this.hasBoomerang -= 1;
			this.isLucky -= 1;
			this.mikasaBuff -= 1;
			this.ironProtection -= 1;
			this.futureMemories -= 1;
			this.selfReverseDamage -= 1;
			this.akameDex -= 1;
			this.akameKill -= 1;
			this.huTaoBuff -= 1;
			this.ppColossus -= 1;
			this.ppColossusCountdown -= 1;
			this.liberatedPP -= 1;

			if (this.sporeSac && getRandomPercent() <= 90 && this.acidArmor > 0) {
				this.duel.addMessage(this.getName() + "'s acid armor stays for longer.");
				this.duel.addMessage("-----------------");
			}
			else {
				this.acidArmor -= 1;
			}
		}

		// masks
		if (this.hasRelic(RELIC_PP1)) this.STRValue += Math.floor(this.STR/10);
		if (this.hasRelic(RELIC_PP7)) this.DEXValue += 1;

		// Kiwi
		if (this.hasRelic(RELIC_PP4) && getRandomPercent() <= 10) {
			var randomGod = randomFromList(GOD_LIST);
			var nbTries = 0;
			while ((this.godList.indexOf(randomGod.name) > -1 || randomGod.type != "waifu") && nbTries < 100) {
				randomGod = randomFromList(GOD_LIST);
				nbTries += 1;
			}
			if (nbTries < 100) {
				this.duel.addMessage("-----------------");
				this.godList.push(randomGod.name);
				this.duel.addMessage(this.getName() + " becomes a " + randomGod.name + " Priest!");
			}
		}

		if (this.hasRelic(RELIC_PP10) && this.godList.indexOf(GOD_PP37.name) < 0) this.godList.push(GOD_PP37.name);

		// Turkey
		if (this.turkeyCountdown >= 0) {
			this.duel.addMessage("-----------------");
			if (this.turkeyCountdown == 0) {
				this.duel.addMessage(this.getName() + " explodes!");
				this.damage(1000, { damageType: "explosion" });
			}
			else {
				this.duel.addMessage(this.getName() + " has " + this.turkeyCountdown + " turn(s) left!");
			}
		}

		// Bleed (SawBlade)
		if (this.bleedDamage > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " bleeds!");
			var bleedDamage = this.bleedDamage;
			if (this.isSalty) {
				bleedDamage = bleedDamage*5;
			}
			if (this.hasSynergy(SYNERGY_PP4)) {
				this.heal(bleedDamage);
			}
			else {
				this.damage(bleedDamage);
			}
		}
		// Melt
		if (this.meltingDamage > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " melts!");
			if (this.hasSynergy(SYNERGY_PP4)) {
				this.heal(this.meltingDamage);
			}
			else {
				this.damage(this.meltingDamage, { damageType: "acid" });
			}
		}
        // Burn
        if (this.burningStacks > 0) {
            this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " burns!");
			if (this.hasSynergy(SYNERGY_PP4)) {
				this.heal(this.burningStacks);
			}
			else {
				this.damage(this.burningStacks, { damageType: "fire" });
			}
            this.burningStacks -= 1+Math.floor(this.burningStacks*0.2);
        }

		// blood blossom
		if (this.bloodBlossom > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " burns!");
			this.damage(this.STR/10, { damageType: "fire" });
			this.bloodBlossom -= 1;
		}

		// Pig
		if (this.pigHeal > 0) {
			this.duel.addMessage("-----------------");
            var pigHeal;
			if (this.isCowBoy) {
				this.duel.addMessage(this.getName() + " squeezes hog YEEHAAAAAW!");
				pigHeal = this.pigHeal*3;
			}
			else {
				this.duel.addMessage(this.getName() + " squeezes hog!");
				pigHeal = this.pigHeal;
			}

            var isDead = this.STR <= 0;
            this.heal(pigHeal);
            if (isDead && this.STR > 0) grantPlayerAchievement(this, 6);
		}
		// holy prepuce
		if (this.hasRelic(RELIC_PP2) && getRandomPercent() <= 25) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " feels holy!");
			this.heal(Math.max(this.DEX, 10));
		}
        // flask
        if (this.guFlask != undefined && this.guFlask > -1) {
            this.guFlask -= 1;
            if (this.guFlask <= 0) {
    			this.duel.addMessage("-----------------");
    			this.duel.addMessage(this.getName() + "'s Flask refills!");
                this.heal(Math.floor(this.STR*0.35));
                this.guFlask = 2;
            }
        }

		// Charges
		if (this.gettingRegularCharge == 0) {
			this.duel.addMessage("-----------------");
			this.regularCharges += 1;
			this.duel.addMessage(this.getName() + " uses his long nose to get a regular charge!");
		}
		if (this.gettingSpecialCharge == 0) {
			this.duel.addMessage("-----------------");
			this.specialCharges += 1;
			this.duel.addMessage(this.getName() + " uses his long nose to get a special charge!");
		}

		// Hive Pack
		if (this.hivePack > 0 && getRandomPercent() <= this.hivePack) {
			this.duel.addMessage("-----------------");
			this.duel.getOppOf(this).hasBurst = 2;
			this.duel.addMessage(this.getName() + "'s bees attack " + this.duel.getOppOf(this).getName() + "!");
		}

		// Geass
		if (this.duel.EVENT_BOSS == null && this.kingsPower > 0 && getRandomPercent() <= this.hivePack) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " uses his geass!");
			this.duel.otherFighter(this).isPossessed = 2;
		}

        // HAL
        if (this.hal) {
            this.duel.addMessage("-----------------");
			this.DEXValue += 1;
			this.duel.addMessage("HAL grants " + this.getName() + " +1 DEX!");
        }

		// Boss Killer
		if (this.bossKiller > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " gets +1 DEX thanks to the Killer Adrenaline!");
			this.DEXValue += 1;
			this.heal(30);
			this.bossKiller -= 1;
		}

		// The Man Who Made a Monster regular move
		if (this.tearDrinker > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " drinks salty tears!");
			this.heal(this.tearDrinker);
			if (this.hasSynergy(SYNERGY_PP10)) {
				this.duel.getOppOf(this).damage(this.tearDrinker);
			}
		}

		// Boreal Summon
		if (this.borealSummon == 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " summons the Boreal World!");
			this.duel.BOREAL_WORLD = true;
		}
		// Perfect Machine + Boreal Flame
		if (this.standPower == STAND_PP2 && this.borealSummon < 0 && !this.duel.BOREAL_WORLD) {
			this.duel.addMessage("-----------------");
			this.borealSummon = 10;
			this.duel.addMessage(this.getName() + " starts summoning the Boreal World!");
		}

		// Concepts of Maths
		if (this.standPower == STAND_PP14) {
			this.duel.addMessage("-----------------");
			this.playMove(EMOTE_PP73);
		}

		// Beyond the Space, Beyond the Time
		if (this.standPower == STAND_PP19) {
			var l = shuffleArray(SYNERGY_LIST);
			for (var i in l) {
				if (!this.hasSynergy(l[i])) {
					this.forcedSynergies.push(l[i]);
					break;
				}
			}
		}

		// Eldritch Pudding
		if (this.tentacles > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " attacks with tentacles!");
			for (var i = 0; i < this.tentacles; i++) {
				this.attackFighter(this.duel.getOppOf(this), 10, { damageType: "punch" });
				if (this.hasSynergy(SYNERGY_PP18)) {
					this.meltingDamage += 1;
				}
			}
		}

		// Ancient Fungus
		if (this.godList.indexOf(GOD_PP23.name) > -1) {
			this.eldritchFriend = true;
		}

		// Espinoza Waifu Stealer
		if (this.duel.MOVE_COUNT > 30 && this.godList.indexOf(GOD_PP12.name) > -1) {
			var opp = this.duel.getOppOf(this);
			for (var i in opp.godList) {
				if (opp.godList[i].type == "waifu") {
					this.duel.addMessage("-----------------");
					this.duel.addMessage(this.getName() + " uses Espinoza sniffes " + opp.getName() + "!");
					this.duel.addMessage(opp.godList[i].name + " leaves " + opp.getName() + " for " + this.getName() + "!");
					this.duel.addMessage("Espinoza truly is a waifu stealer!");

					this.godList.push(opp.godList[i].name);
					opp.godList.splice(opp.godList.indexOf(opp.godList[i].name), 1);
				}
			}
		}

		// Synergies
		if (this.hasSynergy(SYNERGY_PP1)) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " remembers haunting memories...");
			this.duel.addMessage("Rage makes him build up 10 damage!");
			this.bonusDamage += 10;
		}
		if (this.hasSynergy(SYNERGY_PP2)) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " gets healed by the Holy Brenn Trinity!");
			this.heal(5);
		}
		if (this.hasSynergy(SYNERGY_PP3)) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getOppName() + " gets hurt by the Unholy Pudding Trinity!");
			this.duel.getOppOf(this).damage(5);
		}
		if (this.hasSynergy(SYNERGY_PP6)) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " plays garbage music");
			this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s ears starts bleeding");
			this.duel.getOppOf(this).bleedDamage++;
		}
		if (this.hasSynergy(SYNERGY_PP7) && getRandomPercent() <= 10) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + "'s Yaoi starts!");
			if (this.duel.GAY_TURNS < 2) {
				this.duel.GAY_TURNS = 0;
			}
			this.duel.GAY_TURNS += 2;
		}
        if (this.hasSynergy(SYNERGY_GU1)) {
			this.duel.addMessage("-----------------");
			this.playMove(randomFromList(this.guBeholsterList));
        }

		if (this.randomizedStand) {
			this.duel.addMessage("-----------------");
			var keys = Object.keys(STAND_SUMMONS);
			this.standPower = keys[ keys.length * Math.random() << 0];
			this.duel.addMessage(this.getName() + " randomizes his ability!");
			this.duel.addMessage(STAND_HELP[this.standPower]);
		}
		if (this.hasSupplyDrops) {
			var r = getRandomPercent();
			if (r <= 50) {
				this.duel.addMessage("-----------------");
				this.duel.addMessage(this.getName() + " recieves supplies!");

				if (r <= 10) { // Pill
					this.playMove(EMOTE_PP18);
				}
				else if (r <= 20) { // RiotShield
					this.playMove(EMOTE_PP17);
				}
				else if (r <= 30) { // Boomerang
					this.playMove(EMOTE_PP45);
				}
				else if (r <= 40) { // AmmoCrate
					this.playMove(EMOTE_PP72);
				}
				else { // Scout
					this.duel.addMessage(this.getName() + " gets binoculars!");
					this.playMove(EMOTE_PP13);
				}
			}
		}

        // Gun Soul
        if (this.guGunSoulSTR != undefined && this.guGunSoulSTR > -1 && this.STR >= this.guGunSoulSTR) {
            this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " takes back his Gun Soul!");
            this.guGunSoulSTR = -1;
            this.guGunSoul = true;
        }

		// PP Armageddon
		if (this.duel.PP_ARMAGEDDON) {
			this.STRValue -= 5000;
		}

		// Ryuko Special
		if (this.hasKamui) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + "'s Kamui drains his blood!");
			this.damage(20);
			if (this.STR <= 40) {
				this.hasKamui = false;
				this.duel.addMessage(this.getName() + "'s Kamui leaves him to prevent his death!");
			}
		}

		// ImpendingDoom
		if (this.impendingDoom == 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage("**" + this.getName() + " cannot escape fate and dies!**");
			if (this.doomReverse > 0) {
				this.duel.addMessage("**" + this.getName() + " uses DOOM-REVERSE(tm)!**");
				this.STRValue += (0 - this.STR) + 10;
				this.doomReverse = 0;
				this.duel.getOppOf(this).impendingDoom = 2;
			}
			else {
				this.extraLife = 0;
				this.STRValue -= this.STR;
			}
		}

		// Akame's Murasame
		if (this.murasameCurse) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage("**" + this.getName() + "'s heart stops beating!**");
			if (this.doomReverse > 0) {
				this.duel.addMessage("**" + this.getName() + " uses DOOM-REVERSE(tm)!**");
				this.STRValue += (0 - this.STR) + 10;
				this.doomReverse = 0;
				this.murasameCurse = false;
			}
			else {
				this.STRValue -= this.STR;
			}
		}

        // Genshin Summons
        if (this.duel.MERGED_WORLDS.indexOf(DLC_GENSHIN) > -1) {
            for (var i in this.giSummons) {
                this.giSummons[i].turnChange();
            }
            this.giSummons = this.giSummons.filter(function(_obj) { return _obj.genshinSummonCountdown > 0; });

			for (var i in this.giSkillTrees) {
				if (this.giSkillTrees[i].skillCD > 0) this.giSkillTrees[i].skillCD -= 1;
				if (this.giSkillTrees[i].burstCD > 0) this.giSkillTrees[i].burstCD -= 1;
			}

			this.giElementManager.turnChange();
        }

		if (this.futureMemories == 0 ||
		   (this.inLove > 0 && getRandomPercent() < 75)) {
			this.attack = EMOTE_SKIP;
		}
		if (this.turnSkip > 0) {
			this.attack = EMOTE_PP50;
		}
		if (this.grabbedPP > 0) {
			this.attack = EMOTE_PP39;
		}
		if (this.summonTankCountdown == 1) {
			this.attack = EMOTE_PP10;
		}
	}

	stopTime(_duration) {
		this.duel.addMessage("**Time stops !**\n" + IMAGE_PP3);
		this.duel.TIME_STOP_ID = this.idUser;

		if (this.duel.TIME_STOP < 1) {
			this.duel.TIME_STOP = 1
		}
		this.duel.TIME_STOP += _duration;
		if (this.hasSynergy(SYNERGY_PP20)) { // Master of Time
			this.duel.TIME_STOP += _duration;
		}
	}

	win(_param) {
		var nb = 1;
		if (this.duel.TRIGGERED_CHAOS) {
			nb += Math.floor(this.duel.MOVE_COUNT/50)
		}
		else {
			nb += Math.floor(this.duel.MOVE_COUNT/10)
		}
		if (this.isHockeyPuckPP) {
			nb += 5;
		}
		if (_param == "half") {
			nb = Math.floor(nb/2);
		}
		if (_param == "quarter") {
			nb = Math.floor(nb/4)+1;
		}
		if (this.duel.DOUBLE_POINTS) {
			nb += nb;
		}

		if (this.duel.POOPOO_UNIVERSE) {
			nb = 0;
		}

		this.duel.addMessage(this.getName() + " wins " + nb + " PP Points!");
        if (nb > 0) grantPlayerAchievement(this, 0); // Punch PP
		addWinCounter(this, nb);
	}

	getOppName() {
		return this.duel.getOppOf(this).getName();
	}

	hasSynergy(_synergy) {
        if (_synergy == SYNERGY_GU1) {
            if (this.guShrine == EMOTE_GU11 && this.guBeholsterList.length >= 6) return true;
            return false;
        }
        else if (_synergy == SYNERGY_GU2) {
            if (this.guGunSoul && this.guFlask > -1) return true;
            return false;
        }

		if (this.forcedSynergies.indexOf(_synergy) > -1) return true;
		if (this.godList.length >= GOD_LIST.length) return true;

        var hasUsedEyeBullets = false;
		for (var i in _synergy) {
			// _synergy[i] is a god
			if (_synergy[i].name != undefined && this.godList.indexOf(_synergy[i].name) < 0) {
                if (this.guEyeBullets && !hasUsedEyeBullets) {
                    hasUsedEyeBullets = true;
                }
                else {
                    return false;
                }
            }

			// _synergy[i] is a god type
			else {
				var hasType = false;
				for (var j in GOD_LIST) {
					if (this.godList.indexOf(GOD_LIST[j].name) > -1 && GOD_LIST[j].type == _synergy[i]) { hasType = true; }
				}
				if (!hasType) {
                    if (this.guEyeBullets && !hasUsedEyeBullets) {
                        hasUsedEyeBullets = true;
                    }
                    else {
                        return false;
                    }
                }
			}
		}
		return true;
	}
	hasRelic(_relic) {
		return this.relics.indexOf(_relic) > -1;
	}
	getRandomRelic() {
		if (this.duel.RELIC_TREASURE.length == 0) return;

		var randomRelic = randomFromList(this.duel.RELIC_TREASURE);
		this.relics.push(randomRelic);
		this.duel.RELIC_TREASURE.splice(this.duel.RELIC_TREASURE.indexOf(randomRelic), 1);

		this.duel.addMessage(this.getName() + " gets: " + randomRelic);
		this.duel.addMessage(RELIC_HELP[randomRelic]);

		if (this.hasRelic(RELIC_PP10) && this.godList.indexOf(GOD_PP37.name) < 0) this.godList.push(GOD_PP37.name);
	}

	resetBattleVariables() {
		this.bleedDamage = 0;
		this.turnSkip = 0;
		this.hasBoner = false;
		this.badLuck = false;
		this.isSalty = false;
		this.meltingDamage = 0;
		this.madnessStacks = 0;
		this.bloodBlossom = 0;
        this.encheesed = 0;
        this.burningStacks = 0;
		// TODO keep up to date --> negative effects only
	}
}
