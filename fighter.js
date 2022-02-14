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
		updatePlayer(this.user.id, this.user.username.secureXSS())

		this.duel = getDuel(_idDuel);

		this.attack = "";
		this.oldAttack = EMOTE_PP30;
		this.attackedThisTurn = true;
		this.damageTaken = 0;
		this.pushedDamages = 0;

		// set roles
		this.isBigPP = false;
		this.isFastPP = false;
		this.isDrunkPP = false;
		this.isHockeyPuckPP = false;
		this.isAlienPP = false;

		this.godList = [];
		this.standPower = _stand;
		this.requiemPower = null;

		this.currentStand = null;
		this.usedMoves = [];

		// Priest Charges
		this.regularCharges = 0;
		this.specialCharges = 0;

		// Battle variables
		this.resetBattleVariables();
		this.dexMalus = 0;
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
		this.liberatedPP = false;
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
		this.ultimatePPBuff = true;
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

		// Check Bad Values
		if (this.STR <= 0) {
			this.STRValue += (0 - this.STR) + 1
		}

		if (_stand != null) {
			// Create a stand
			this.user = {};
			this.user["username"] = _stand;
			this.user["id"] = this.guildUser.user.id;

			// Natural values
			this.STRValue = 150;
			this.DEXValue = 40;

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
		else {
			// Create a fighter
			if (this.userBuild.fightingstyles.indexOf(BIG_PP_ROLE) > -1) {
				this.isBigPP = true;
			}
			if (this.userBuild.fightingstyles.indexOf(FAST_PP_ROLE) > -1) {
				this.isFastPP = true;
			}
			if (this.userBuild.fightingstyles.indexOf(DRUNK_PP_ROLE) > -1) {
				this.isDrunkPP = true;
			}
			if (this.userBuild.fightingstyles.indexOf(HOCKEY_PUCK_PP_ROLE) > -1) {
				this.isHockeyPuckPP = true;
			}
			if (this.userBuild.fightingstyles.indexOf(ALIEN_PP_ROLE) > -1) {
				this.isAlienPP = true;
			}
			if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
				this.ultimatePPBuff = false;
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
					}
				}
			}
			if (this.godList.indexOf(GOD_PP24.name) > -1) { // Time Cube Special Effect
				this.redPillAddiction = 3;
			}

			// Natural values
			this.STRValue = 70;
			this.DEXValue = 20;


			if (this.godList.indexOf(GOD_PP25.name) > -1) { // Cthulhu Special Effect
				this.STRValue += 30;
				this.cthulhuShield = 1;
			}
		}
	}

	getName() {
		var name = this.user.username;
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
		return name.secureXSS();
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
			str += 30;
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
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			str += 50;
			if (this.ultimatePPBuff) {
				str += 50;
			}
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

		if (this.duel.EVENT_BOSS && str <= 0) {
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
		if (this.liberatedPP) {
			dex += 200;
		}
		if (this.mikasaBuff > 0) {
			dex += 30;
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
		if (this.hasSynergy(SYNERGY_PP8)) {
			dex += 10;
		}
		if (this.hasSynergy(SYNERGY_PP24)) {
			dex += 5;
		}
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			dex += 50;
			if (this.ultimatePPBuff) {
				dex += 50;
			}
		}
		if (this.duel.PP_ARMAGEDDON) {
			dex += 200;
		}

		if (this.hasSynergy(SYNERGY_PP11) && dex <= 0) {
			return 0;
		}
		if (this.akameDex > 0) {
			 dex += dex;
		}

		if (this.hasSynergy(SYNERGY_PP0) && dex > 0) { // PP Harem
			dex += dex;
		}
		return dex;
	}

	// fighter.toString
	toString() {
		var embedMessage = new DISCORD.MessageEmbed();
		embedMessage.setColor("RANDOM");
		embedMessage.setTitle("**" + this.getName() + "**\n");
		embedMessage.setThumbnail(this.user.displayAvatarURL());

		// SPECIAL CASES
		if (this.duel.MOVE_COUNT >= 10000) {
			return embedMessage.setDescription(" - Wiped out").toJSON();
		}
		if (this.STR <= 0 && this.duel.EVENT_BOSS) {
			return embedMessage.setDescription("**Dead** :(").toJSON();
		}

		// STATS
		var statsTxt = "**STR:** " + this.STR;
		if (this.STR == 69) {
			statsTxt += " (lmao)";
		}
		statsTxt += "    //    **DEX:** " + this.DEX;
		if (this.DEX == 69) {
			statsTxt += " (lmao)";
		}
		if (this.dexMalus > 0) {
			statsTxt += "\n - DEX Bonus: **" + this.dexMalus + "**";
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
							godsText += "\n - " + this.godList[i] + " Priest";
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
			godsText += "\nRegular Charges: " + this.regularCharges;
		}
		if (this.specialCharges > 0) {
			godsText += "\nSpecial Charges: " + this.specialCharges;
		}
		if (godsText != "") embedMessage.addField("Faith", godsText, true);

		// FIGHTING STYLES
		var fightingStylesTxt = "";
		if (this.isBigPP && this.isFastPP && this.isAlienPP && this.isDrunkPP && this.isHockeyPuckPP) {
			fightingStylesTxt += " - *Ultimate PP";
			if (this.ultimatePPBuff) {
				fightingStylesTxt += " II";
			}
			fightingStylesTxt += "*";
		}
		else {
			if (this.isBigPP) {
				fightingStylesTxt += " - Big PP\n";
			}
			if (this.isFastPP) {
				fightingStylesTxt += " - Fast PP\n";
			}
			if (this.isDrunkPP) {
				fightingStylesTxt += " - Drunken PP\n";
			}
			if (this.isHockeyPuckPP) {
				fightingStylesTxt += " - Hockey Puck PP\n";
			}
			if (this.isAlienPP) {
				fightingStylesTxt += " - Alien PP\n";
			}
		}
		if (fightingStylesTxt != "") embedMessage.addField("Fighting Styles", fightingStylesTxt, true);

		// STATUS
		var statusTxt = "";
		if (this.randomizedStand) {
			statusTxt += " - **Perfect Stånd Power**\n";
		}
		if (this.hasSupplyDrops) {
			statusTxt += " - **Gets Supply Drops**\n";
		}
		if (this.infernalInstrument == 1) {
			statusTxt += " - **";
			if (this.aviatorBuff) {
				statusTxt += "Super Cool ";
			}
			statusTxt += "Guitar Player**\n";
		}
		else if (this.infernalInstrument == 2) {
			statusTxt += " - **";
			if (this.aviatorBuff) {
				statusTxt += "Super Cool ";
			}
			statusTxt += "Synth Player**\n";
		}
		else if (this.aviatorBuff) {
			statusTxt += " - **Super Cool**\n";
		}
		if (this.livingGod) {
			statusTxt += " - **Living God**\n";
		}
		if (this.requiemPower != null) {
			statusTxt += "\n - **Requiem Ability**";
			if (this.requiemCooldown > 0) {
				statusTxt += " (Cooldown: " + this.requiemCooldown + " turns)";
			}
			statusTxt += "\n"
		}
		if (this.hasBoomerang > 0) {
			statusTxt += " - With a Boomerang (for " + this.hasBoomerang + " turns)\n";
		}
		if (this.acidArmor > 0) {
			statusTxt += " - Armored in acid (for " + this.acidArmor + " turns)";
			if (this.sporeSac) {
				statusTxt += " (**Spore Sac**)";
			}
			statusTxt += "\n";
		}
		if (this.doomReverse > 0) {
			statusTxt += " - DOOM-REVERSE(tm) (for " + this.doomReverse + " turns)\n";
		}
		if (this.satanicReverse > 0) {
			statusTxt += " - Satanic Protection (for " + this.satanicReverse + " turns)\n";
		}
		if (this.ironProtection > 0) {
			statusTxt += " - Worm Scarf Protection (for " + this.ironProtection + " turns)\n";
		}
		if (this.isLucky > 0) {
			statusTxt += " - Lucky (for " + this.isLucky + " turns)\n";
		}
		if (this.akameDex > 0){
			statusTxt += " - Blessed by Akame (for " + this.akameDex + " turns)\n";
		}
		if (this.mikasaBuff > 0) {
			statusTxt += " - Blessed by Mikasa (for " + this.mikasaBuff + " turns)\n";
		}
		if (this.akameKill > 0) {
			statusTxt += " - Cursed Blade Murasame (for " + this.akameKill + " turns)\n";
		}
		if (this.inLove > 0) {
			statusTxt += " - In Love (for " + this.inLove + " turns)\n";
		}
		if (this.bossKiller > 0) {
			statusTxt += " - Boss Killer Blessing (for " + this.bossKiller + " turns)\n";
		}
		if (this.selfReverseDamage > 0) {
			statusTxt += " - Damage Reversed (for " + this.selfReverseDamage + " turns)\n";
		}
		if (this.futureMemories > 0) {
			statusTxt += " - Has Knowledge of the Future (of the next " + this.futureMemories + " turns)\n"
		}
		if (this.gettingRegularCharge > 0) {
			statusTxt += " - Getting a regular charge in " + this.gettingRegularCharge + " turns\n"
		}
		if (this.gettingSpecialCharge > 0) {
			statusTxt += " - Getting a special charge in " + this.gettingSpecialCharge + " turns\n"
		}
		if (this.turkeyCountdown > 0) {
			statusTxt += " - ";
			if (this.turkeyCountdown == 1) statusTxt += "**";
			statusTxt += "Turkey Countdown: " + this.turkeyCountdown + " turns\n";
			if (this.turkeyCountdown == 1) statusTxt += "**";
		}
		if (this.borealSummon > 0) {
			statusTxt += " - Boreal Fog Countdown: " + this.borealSummon + " turns\n";
		}
		if (this.tentacles > 0) {
			statusTxt += " - Tentacles: " + this.tentacles + "\n";
		}
		if (this.quickeningCharges > 0) {
			statusTxt += " - Quickening Charges: " + this.quickeningCharges + "\n";
		}
		if (this.madnessStacks > 0) {
			statusTxt += " - Madness Stacks: " + this.madnessStacks + "\n";
		}
		if (this.cthulhuShield > 0) {
			statusTxt += " - Shield of Cthulhu Charges: " + this.cthulhuShield + "\n";
		}
		if (this.redPillAddiction > 0) {
			statusTxt += " - RedPill Addiction: " + this.redPillAddiction + "\n";
		}
		if (this.explosionMagic > 0) {
			statusTxt += " - Explosion Magic Points: " + this.explosionMagic + "\n";
		}
		if (this.ragingSpirit > 0) {
			statusTxt += " - Lost Soul Streak: " + this.ragingSpirit + "\n";
		}
		if (this.tearDrinker > 0) {
			statusTxt += " - Tear Drinker: " + this.tearDrinker + "\n";
		}
		if (this.pigHeal > 0 || this.isCowBoy) {
			statusTxt += " - Hog Squeezer: " + this.pigHeal;
			if (this.isCowBoy) {
				statusTxt += " (**Cowboy**)";
			}
			statusTxt += "\n";
		}
		if (this.megaBuildUp > 0) {
			statusTxt += " - Build-Up multiplier: " + this.megaBuildUp + "\n";
		}
		if (this.bonusDamage > 0) {
			statusTxt += " - Build-Up damages: " + this.bonusDamage + "\n";
		}
		if (this.bleedDamage > 0 || this.isSalty) {
			statusTxt += " - Haemorrhage: " + this.bleedDamage;
			if (this.isSalty) {
				statusTxt += " (**Salty Wounds**)";
			}
			statusTxt += "\n";
		}
		if (this.meltingDamage > 0) {
			statusTxt += " - Acid: " + this.meltingDamage + "\n";
		}
		if (this.goldenSpoons > 0) {
			statusTxt += " - Golden Spoons: " + this.goldenSpoons + "\n";
		}
		if (this.lifeFibers > 0) {
			statusTxt += " - Life Fiber: " + (this.lifeFibers*5) + "%\n";
		}
		if (this.ppBribe > 0) {
			statusTxt += " - Arbitrator Bribe: " + this.ppBribe + "%\n";
		}
		if (this.hivePack > 0) {
			statusTxt += " - Hive Pack: " + this.hivePack + "%\n";
		}
		if (this.xenoMask) {
			statusTxt += " - Mask: Xeno\n";
		}
		if (this.satanMask) {
			statusTxt += " - Mask: Satan\n";
		}
		if (this.helldogMask) {
			statusTxt += " - Mask: Intimidation\n";
		}
		if (this.acidArmor <= 0 && this.sporeSac) {
			statusTxt += " - Spore Sac\n"; // shows spore sac here if no acid armor
		}
		if (this.empressLightBuff) {
			statusTxt += " - Blessing of the Empress of Light\n";
		}
		if (this.boneGlove) {
			statusTxt += " - Bone Glove\n";
		}
		if (this.cuteFishron) {
			statusTxt += " - Cute Fishron\n";
		}
		if (this.shinyStone) {
			statusTxt += " - Shiny Stone\n";
		}
		if (this.satanicMoveMultiplier) {
			statusTxt += " - Satanic Move Multiplier\n";
		}
		if (this.hasKamui) {
			statusTxt += " - Wearing a Kamui\n";
		}
		if (this.forceCritical) {
			statusTxt += " - Ready to Inflict Critical Damages\n";
		}
		if (this.flugelBlood) {
			statusTxt += " - Flugel Blood\n";
		}
		if (this.klaxoTails) {
			statusTxt += " - Klaxosaurs Tails\n";
		}
		if (this.iceWeapon) {
			statusTxt += " - Magic Ice Weapon\n";
		}
		if (this.tempestBuff) {
			statusTxt += " - Tempest\n";
		}
		if (this.isOverCircumcised) {
			statusTxt += " - Overcircumcised\n";
		}
		else if (this.isCircumcised) {
			statusTxt += " - Circumcised\n";
		}
		if (this.isProtected) {
			statusTxt += " - Shield Protection\n";
		}
		if (this.isTerrorist) {
			if (!this.duel.ALTERNATE_MOVES) {
				statusTxt += " - Planning a Terrorist Move\n";
			}
			else {
				statusTxt += " - N-Word Pass\n";
			}
		}
		if (this.eldritchFriend) {
			statusTxt += " - Eldritch Friendly\n";
		}
		if (this.legAimer) {
			statusTxt += " - Leg Aimer\n";
		}
		if (this.dualWield) {
			statusTxt += " - Dual Wielding\n";
		}
		if (this.badLuck) {
			statusTxt += " - Unlucky\n";
		}
		if (this.fullOfAmmo) {
			statusTxt += " - Full of Ammos\n";
		}
		if (this.kungFu) {
			statusTxt += " - Trained Fighter\n";
		}
		if (this.chimera) {
			statusTxt += " - Furry PP\n";
		}
		if (this.silenced) {
			statusTxt += " - Silenced\n";
		}
		if (this.liberatedPP) {
			statusTxt += " - Liberated PP\n";
		}
		if (this.hasBoner) {
			statusTxt += " - Big Boner Mmmmmmh...\n";
		}
		if (this.trueBarbarian) {
			statusTxt += " - Great Barbarian from the North Seeking New Lands for his Kingdom\n";
		}
		if (this.infernalMagic) {
			statusTxt += " - **Infernal Magic**\n";
		}
		if (this.armageddonMagic) {
			statusTxt += " - **Armageddon Magic**\n";
		}
		if (this.isPossessed > 0) {
			statusTxt += " - **Possessed by " + this.duel.getOppOf(this).getName() + "**\n";
		}
		if (this.turnSkip > 0) {
			statusTxt += " - **To the Ranch**\n";
		}
		if (this.grabbedPP > 0) {
			statusTxt += " - **Very Confused**\n";
		}
		if (this.summonTankCountdown > 0) {
			statusTxt += " - **Summoning the Monster (" + (4-this.summonTankCountdown) + "/3)**\n";
		}
		if (this.standPower != null && !this.duel.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE && !this.randomizedStand) {
			statusTxt += " - **Stånd Power: " + this.standPower + "**\n";
		}
		if (this.extraLife > 0) {
			statusTxt += " - **Extra lives: " + this.extraLife;
			if (this.extraLifeDuplication != null) {
				statusTxt += " (Temporal Duplication)";
			}
			statusTxt += "**\n";
		}
		if (this.murasameCurse) {
			statusTxt += " - **Murasame's Poisonous Curse**\n";
		}
		if (this.impendingDoom > 0) {
			statusTxt += " - **Impending Doom: " + this.impendingDoom + " turns**\n";
		}
		if (statusTxt != "") embedMessage.addField("Status", statusTxt, true);

		// SYNERGIES
		var synergyTxt = "";
		if (this.godList.length >= GOD_LIST.length) {
			synergyTxt += " - *PP Harem*\n";
		}
		else {
			if (this.hasSynergy(SYNERGY_PP0)) {
				synergyTxt += " - *PP Harem*\n";
			}
			if (this.hasSynergy(SYNERGY_PP1)) {
				synergyTxt += " - A Sad Witness\n";
			}
			if (this.hasSynergy(SYNERGY_PP2)) {
				synergyTxt += " - Holy Brenn Trinity\n";
			}
			if (this.hasSynergy(SYNERGY_PP3)) {
				synergyTxt += " - Unholy Pudding Trinity\n";
			}
			if (this.hasSynergy(SYNERGY_PP4)) {
				synergyTxt += " - Roleplay Group\n";
			}
			if (this.hasSynergy(SYNERGY_PP5)) {
				synergyTxt += " - Racial Paradox\n";
			}
			if (this.hasSynergy(SYNERGY_PP6)) {
				synergyTxt += " - Garbage Music Maker\n";
			}
			if (this.hasSynergy(SYNERGY_PP7)) {
				synergyTxt += " - Yaoi Fan\n";
			}
			if (this.hasSynergy(SYNERGY_PP8)) {
				synergyTxt += " - Super Predator\n";
			}
			if (this.hasSynergy(SYNERGY_PP9)) {
				synergyTxt += " - Too Smart and Too Powerful\n";
			}
			if (this.hasSynergy(SYNERGY_PP10)) {
				synergyTxt += " - Salt Master\n";
			}
			if (this.hasSynergy(SYNERGY_PP11)) {
				synergyTxt += " - Debilus Team Member\n";
			}
			if (this.hasSynergy(SYNERGY_PP12)) {
				synergyTxt += " - Waifu Body Pillow\n";
			}
			if (this.hasSynergy(SYNERGY_PP13)) {
				synergyTxt += " - Infinite Intellect\n";
			}
			if (this.hasSynergy(SYNERGY_PP14)) {
				synergyTxt += " - Wild Mage\n";
			}
			if (this.hasSynergy(SYNERGY_PP15)) {
				synergyTxt += " - Guerrier de l'Enfer\n";
			}
			if (this.hasSynergy(SYNERGY_PP16)) {
				synergyTxt += " - Too Much Dicks\n";
			}
			if (this.hasSynergy(SYNERGY_PP17)) {
				synergyTxt += " - Avatar of Tz'arkan\n";
			}
			if (this.hasSynergy(SYNERGY_PP18)) {
				synergyTxt += " - Obvious Tentacle Joke\n";
			}
			if (this.hasSynergy(SYNERGY_PP19)) {
				synergyTxt += " - Eldritch Gang\n";
			}
			if (this.hasSynergy(SYNERGY_PP20)) {
				synergyTxt += " - Master of Time\n";
			}
			if (this.hasSynergy(SYNERGY_PP21)) {
				synergyTxt += " - Big Nose\n";
			}
			if (this.hasSynergy(SYNERGY_PP22)) {
				synergyTxt += " - Extreme Karma\n";
			}
			if (this.hasSynergy(SYNERGY_PP23)) {
				synergyTxt += " - Ram Ranch\n";
			}
			if (this.hasSynergy(SYNERGY_PP24)) {
				synergyTxt += " - Cosmopolitan\n";
			}
		}
		if (synergyTxt != "") embedMessage.addField("Synergies", synergyTxt, true);

		return embedMessage.toJSON();
	}

	playMove(_newMove = this.attack) {
		this.duel.INFINITE_DAMAGE = 0;
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

		if (this.duel.EVENT_BOSS && this.STR <= 0) {
			this.attack = EMOTE_DEAD;
		}

		for (var sdsds = 0; sdsds < numberAttacks; sdsds++) {
			this.duel.MOVE_COUNT_TURN += 1;
			this.duel.MOVE_COUNT += 1;
			if (this.duel.MOVE_COUNT_TURN >= 500) {
				if (this.duel.MOVE_COUNT_TURN == 500) {
					this.duel.addMessage("**Move cap achieved !**");
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

			if (attack == EMOTE_PP1) {
				// Punching PP
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP!");
				this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
				if (getRandomPercent() <= 2) {
					this.duel.addMessage(IMAGE_PP5);
				}
			}
			else if (attack == EMOTE_PP2) {
				// Punching PP Really Hard
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP really hard!");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP3) {
				// Hologram
				if (!this.duel.ALTERNATE_MOVES) {
					this.duel.addMessage(this.getName() + " touches " + this.getOppName() + "'s PP vital point!");
				}
				else {
					this.duel.addMessage(this.getName() + " insults " + this.getOppName() + " with all his power!");
				}
				this.duel.getOppOf(this).damage(500);
			}
			else if (attack == EMOTE_PP4) {
				// Flex
				this.duel.addMessage(this.getName() + " flexes!");
				this.heal(Math.floor(Math.random() * 170 + 30));
			}
			else if (attack == EMOTE_PP5) {
				// High Five
				if (!this.duel.ALTERNATE_MOVES) {
					this.duel.addMessage(this.getName() + " is feeling lonely...:(");
				}
				else {
					this.duel.addMessage(this.getName() + " slaps " + this.getOppName());
					this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
				}
			}
			else if (attack == EMOTE_PP6) {
				// Kick
				this.duel.addMessage(this.getName() + " kicks " + this.getOppName() + "'s PP!");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR/5)*3);
			}
			else if (attack == EMOTE_PP7) {
				// Turkey
				this.duel.addMessage(this.getName() + " and " + this.duel.getOppOf(this).getName() + " start a feast!");
				if (this.duel.UWU_TEXT) {
					this.duel.SEXY_TEXT = 11;
				}
				this.duel.bothFightersAction(function(_fighter) {
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
			}
			else if (attack == EMOTE_PP8) {
				// Trap Sign
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
			}
			else if (attack == EMOTE_PP9) {
				// Time Kick
				this.duel.addMessage(this.getName() + " wants a hockey puck PP...");
				if (this.isHockeyPuckPP) {
					this.duel.addMessage("...but he already had one!");
				}
				else {
					this.isHockeyPuckPP = true;
					this.duel.addMessage("...and now he got it!");
					this.DEXValue += 10;
				}
			}
			else if (attack == EMOTE_PP10) {
				// Tank
				if (this.summonTankCountdown == 1) {
					this.duel.addMessage(this.getName() + " summons **The Monster**!");
				}
				else {
					this.duel.addMessage(this.getName() + " brings a tank!");
				}
				this.duel.addMessage("FIRE!");
				this.duel.getOppOf(this).damage(1000);
			}
			else if (attack == EMOTE_PP11) {
				// Steel
				if (!this.duel.STEEL_PROTECTION) {
					this.duel.STEEL_PROTECTION = true;
					this.duel.addMessage(this.getName() + " sets up a protection!");
				}
				else {
					this.duel.addMessage(this.getName() + " sets up a protection for nothing...");
				}
			}
			else if (attack == EMOTE_PP12) {
				// Overcircumscise
				this.duel.addMessage(this.getName() + " over-circumcises himself!");
				if (this.isOverCircumcised) {
					this.duel.addMessage("Wait he already was!");
				}
				else {
					this.isCircumcised = true;
					this.isOverCircumcised = true;
					this.STRValue = Math.floor(this.STR/2);
				}
			}
			else if (attack == EMOTE_PP13) {
				// Scout
				this.duel.addMessage(this.getName() + " examines the qualities of " + this.duel.getOppOf(this).getName() + "'s PP!");
				this.duel.addMessage("And he learns a lot!");
				this.hasExamined = 2;
			}
			else if (attack == EMOTE_PP14) {
				// SawBlade
				this.duel.addMessage(this.getName() + " cuts " + this.duel.getOppOf(this).getName() + "'s PP!");
				this.duel.getOppOf(this).bleedDamage += 5;
			}
			else if (attack == EMOTE_PP15) {
				// Hobro
				this.duel.addMessage(this.getName() + " reverses the damages and heals!");
				if (this.duel.REVERSE_DAMAGE < 0) {
					this.duel.REVERSE_DAMAGE = 1;
				}
				else {
					this.duel.REVERSE_DAMAGE = -1;
				}
			}
			else if (attack == EMOTE_PP16) {
				// Satan Boss
				if (this.duel.BOSS_FIGHT && (this.CURRENT_BOSS == BOSS_PP8 || this.CURRENT_BOSS == BOSS_PP9)) {
					this.duel.addMessage("Nothing happens...");
				}
				// Satan God
				else if (this.duel.getOppOf(this).godList.indexOf(GOD_PP22.name) > -1) {
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " resists the possession!");
				}
				else {
					this.duel.addMessage(this.getName() + " possesses " + this.duel.getOppOf(this).getName() + "'s PP!");
					this.duel.getOppOf(this).isPossessed = 2;
				}
			}
			else if (attack == EMOTE_PP17) {
				// RiotShield
				this.duel.addMessage(this.getName() + " gets a shield!");
				this.isProtected = true;
			}
			else if (attack == EMOTE_PP18) {
				// Red Pill
				this.duel.addMessage(this.getName() + " gets a pill!");
				this.redPillAddiction += 1;
				this.STRValue += 5*this.redPillAddiction;
				this.DEXValue += 3*this.redPillAddiction;
			}
			else if (attack == EMOTE_PP19) {
				// Pig
				this.duel.addMessage(this.getName() + " squeezes hog yeah yeah!");
				if (this.pigHeal < 5) {
					this.pigHeal = 5;
				}
				else {
					var i = 0;
					while (fibonacciNumber(i) < this.pigHeal) {
						i += 1;
					}
					this.pigHeal += fibonacciNumber(i-1);
				}
				if (this.hasBoner) {
					this.duel.addMessage(this.getName() + " loses his boner!");
				}
				this.hasBoner = false;
			}
			else if (attack == EMOTE_PP20) {
				// DoomReverse (MookGrenade)
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
					if (!this.duel.BOSS_FIGHT) {
						this.duel.getOppOf(this).hasBurst = 2;
					}
				}
			}
			else if (attack == EMOTE_PP21) {
				// Acid
				this.duel.addMessage(this.getName() + " gets an acid armor!");
				this.acidArmor = 5;
			}
			else if (attack == EMOTE_PP22) {
				// Circumscise
				this.duel.addMessage(this.getName() + " circumcises himself!");
				if (this.isCircumcised) {
					this.duel.addMessage("Wait he already was!");
				}
				else {
					this.isCircumcised = true;
					this.resetBattleVariables();
				}
			}
			else if (attack == EMOTE_PP23) {
				// LaughSoul
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
			}
			else if (attack == EMOTE_PP24) {
				// KnockBack
				this.duel.addMessage(this.getName() + " swaps the natural STR values!");
				this.STRValue += this.duel.getOppOf(this).STRValue;
				this.duel.getOppOf(this).STRValue = this.STRValue - this.duel.getOppOf(this).STRValue;
				this.STRValue -= this.duel.getOppOf(this).STRValue;
			}
			else if (attack == EMOTE_PP25) {
				// Bombardment
				this.duel.addMessage(this.getName() + " calls for a bombardment !!!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.damage(1000, _fighter.duel.BOSS_FIGHT)
				});
			}
			else if (attack == EMOTE_PP26) {
				// Big Satan
				if (!this.duel.ALTERNATE_MOVES) {
					this.duel.addMessage(this.getName() + " summons Satan chaotic powers !!!");
					this.duel.DISABLE_ABANDON = true;
					if (this.duel.BOSS_FIGHT && (this.CURRENT_BOSS == BOSS_PP8 || this.CURRENT_BOSS == BOSS_PP9)) {
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
							this.duel.getOppOf(this).playMove(this.duel.getRandomEmote());
						}
						this.duel.TRIGGERED_CHAOS = true;
					}
					else {
						this.duel.bothFightersAction(function(_fighter) {
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
			}
			else if (attack == EMOTE_PP27) {
				// BigGuyBullet
				this.duel.addMessage(this.getName() + " uses his PP as a gun!");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR/5));
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.DEXValue -= 20;
				});

			}
			else if (attack == EMOTE_PP28) {
				// BigGuy
				this.duel.addMessage(this.getName() + " intimidates " + this.duel.getOppOf(this).getName() + "!");
				this.duel.getOppOf(this).hasBurst = 2;

			}
			else if (attack == EMOTE_PP29) {
				// Barrel
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
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.damage(200, false);
					});
				}
			}
			else if (attack == EMOTE_PP30) {
				// ExclamationPoint
				this.duel.addMessage(this.getName() + " tries to go back too far in time!");
				this.duel.addMessage("This create a space-time distortion!");
				this.duel.DISABLE_ABANDON = true;
				this.playMove(this.duel.getRandomEmote());
			}
			else if (attack == EMOTE_PP31) {
				// Save Me Sign
				this.duel.addMessage(this.getName() + " wants to be saved!");
				this.heal(50);
			}
			else if (attack == EMOTE_PP32) {
				// High Five Emote
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
			}
			else if (attack == EMOTE_PP33) {
				// Headless - Big Kidney Stone
				this.duel.addMessage(this.getName() + " shoots a big kidney stone!");
				this.damage(50, false);
				this.duel.getOppOf(this).damage(50);
				if (this.attack == attack) {
					this.duel.KIDNEY_CURSE += 1;
					this.duel.addMessage("The Kidney Curse grows bigger!");
				}
			}
			else if (attack == EMOTE_PP34) {
				// Facehugger
				this.duel.addMessage(this.getName() + " impregnates " + this.getOppName() + "!");
				if (!this.duel.EVENT_BOSS) {
					this.duel.getOppOf(this).damage(Math.floor(this.duel.getOppOf(this).STR/2));
					if (!this.duel.getOppOf(this).isAlienPP) {
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets an alien PP!");
					}
					this.duel.getOppOf(this).isAlienPP = true;
				}
				else {
					this.duel.getOppOf(this).damage(Math.floor(this.duel.BOSS_HEALTH/2));
				}
			}
			else if (attack == EMOTE_PP35) {
				// Facehugged
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
			}
			else if (attack == EMOTE_PP36) {
				// Explosion
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
			}
			else if (attack == EMOTE_PP37) {
				// Disembowled - Kidney Stone
				this.duel.addMessage(this.getName() + " shoots a kidney stone!");
				this.damage(25, false);
				this.duel.getOppOf(this).damage(25);
				if (this.attack == attack) {
					this.duel.KIDNEY_CURSE += 1;
					this.duel.addMessage("The Kidney Curse grows bigger!");
				}
			}
			else if (attack == EMOTE_PP38) {
				// DeadBro
				this.duel.addMessage(this.getName() + " wants a fast PP...");
				if (this.isFastPP) {
					this.duel.addMessage("...but he already had one!");
				}
				else {
					this.isFastPP = true;
					this.duel.addMessage("...and now he got it!");
					this.DEXValue += 10;
				}
			}
			else if (attack == EMOTE_PP39) {
				// Interrogation Point
				this.duel.addMessage(this.getName() + " summons a random move!");
				this.duel.DISABLE_ABANDON = true;
				var emote = this.duel.getRandomEmote();
				this.playMove(emote);
			}
			else if (attack == EMOTE_PP40) {
				// ChestBurst
				this.duel.addMessage(this.getName() + " wants a big PP...");
				if (this.isBigPP) {
					this.duel.addMessage("...but he already had one!");
				}
				else {
					this.isBigPP = true;
					this.duel.addMessage("...and now he got it!");
					this.DEXValue += 10;
				}
			}
			else if (attack == EMOTE_PP41) {
				// 007 Drunk
				this.duel.addMessage(this.getName() + " wants a drunk PP...");
				if (this.isDrunkPP) {
					this.duel.addMessage("...but he already had one!");
				}
				else {
					this.isDrunkPP = true;
					this.duel.addMessage("...and now he got it!");
					this.DEXValue += 10;
				}
			}
			else if (attack == EMOTE_PP42) {
				// Bronan Slam
				this.duel.addMessage(this.getName() + " builds up for his next attack...");
				this.megaBuildUp += 5;
			}
			else if (attack == EMOTE_PP43) {
				// BrocketeerDive
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "'s PP with his head!");
				this.duel.getOppOf(this).damage(Math.floor(10 + this.STR / 10));
				if (!this.duel.BOSS_FIGHT) {
					this.duel.getOppOf(this).hasBurst = 2;
				}
			}
			else if (attack == EMOTE_PP44) {
				// Kamikaze
				if (!this.duel.ALTERNATE_MOVES) {
					this.duel.addMessage(this.getName() + " plans a suicide move!");
				}
				else {
					this.duel.addMessage(this.getName() + " gets a N-Word Pass!");
				}
				this.duel.ILLEGAL_BOMBING = true;
				this.isTerrorist = true;
			}
			else if (attack == EMOTE_PP45) {
				// Boomerang
				this.duel.addMessage(this.getName() + " gets a boomerang.");
				this.hasBoomerang = 4;
			}
			else if (attack == EMOTE_PP46) {
				// TruffleHistorian
				if (!this.duel.ALTERNATE_MOVES) {
					this.duel.DISABLE_ABANDON = true;
					this.duel.addMessage(this.getName() + " calls the Ancient Fungus!");
					if (this.duel.UWU_TEXT) {
						this.duel.YES_TEXT = 1;
					}
					var chaosNumber = getRandomPercent();
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
			}
			else if (attack == EMOTE_PP47) {
				// Pudding
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
			}
			else if (attack == EMOTE_PP48) {
				// Brennfeu
				this.duel.addMessage(this.getName() + " messes everything up!");
				this.duel.addMessage("As always!");
				if (this.duel.UWU_TEXT) {
					this.duel.RUSSIAN_TEXT = 4;
				}
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.STRValue += Math.floor((getRandomPercent() - 50)/2);
					_fighter.DEXValue += Math.floor((getRandomPercent() - 50)/2);
				});
			}
			else if (attack == EMOTE_PP49) {
				// Soup
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
			}
			else if (attack == EMOTE_PP50) {
				// Perhaps
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
						this.duel.bothFightersAction(function(_fighter) {
							_fighter.STRvalue = _fighter.STRValue*2;
							_fighter.DEXvalue = _fighter.DEXValue*2;
						});
					}
					else {
						this.duel.addMessage("Both fighters DEX has been changed to 0!");
						this.DEXValue = 0 - (this.DEX - this.DEXValue);
						this.duel.getOppOf(this).DEXValue = 0 - (this.duel.getOppOf(this).DEX - this.duel.getOppOf(this).DEXValue);
					}
				}
				else {
					this.duel.addMessage("Wait he forgot about the battle...");
				}
			}
			else if (attack == EMOTE_PP51) {
				// Priest Regular Move
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
				if (this.godList.indexOf(GOD_PP4.name) > -1) { //
					this.duel.addMessage("-----------------");
					this.duel.addMessage(" answers his calls!");
					// TODO
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
				if (this.godList.indexOf(GOD_PP14.name) > -1) { // UREGonnaGETRaped
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Rapist Pudding answers his calls!");
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
				if (this.godList.indexOf(GOD_PP22.name) > -1 && !this.duel.getOppOf(this).eldritchFriend) {
					 // Satan
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Satan answers his calls!");
					this.duel.addMessage(this.getName() + " removes his bad status!");
					this.resetBattleVariables();
					this.duel.addMessage(this.getName() + " possesses " + this.duel.getOppOf(this).getName() + "'s PP for 2 turns!");
					this.duel.getOppOf(this).isPossessed = 3;
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
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets cursed with confusion.");
					this.duel.getOppOf(this).grabbedPP = 2;
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
				if (this.godList.indexOf(GOD_PP36.name) > -1) { // Emilia
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Emilia answers his calls!");
					if (this.iceWeapon) {
						this.duel.addMessage(this.getName() + " already has a Magic Ice Weapon...");
					}
					else {
						this.duel.addMessage(this.getName() + " gets a Magic Ice Weapon!");
						this.iceWeapon = true;
					}
				}
				if (this.godList.indexOf(GOD_PP37.name) > -1) { // Senjouahara
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Senjouahara answers his calls!");
					this.duel.addMessage(this.getName() + " staples " + this.getOppName() + "'s PP!")
					this.duel.getOppOf(this).damage(Math.floor(this.STR/10));
					if (!this.duel.BOSS_FIGHT) {
						this.duel.getOppOf(this).bleedDamage += Math.floor(this.STR/10);
					}
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
			}
			else if (attack == EMOTE_PP52) {
				// Priest Special Move
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
						this.duel.addMessage(this.getName() + " is already barbarian enough!");
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
				if (this.godList.indexOf(GOD_PP4.name) > -1) { //
					this.duel.addMessage("-----------------");
					this.duel.addMessage(" answers his calls!");
					// TODO
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
						this.duel.addMessage(this.getName() + " barks like the retarded furry he is!");
					}
				}
				if (this.godList.indexOf(GOD_PP14.name) > -1) { // UREGonnaGETRaped
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Rapist Pudding answers his calls!");
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
					this.duel.addMessage("Timeline changes ! " + this.getName() + " had in fact dodged the " + this.dodgableDamages.length + " previous attacks!");
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
					this.duel.getOpponentOf(this).damage(Math.floor(this.explosionMagic*this.STR/10), false);
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
					this.duel.getOpponentOf(this).damage(this.STR*5, false);
					this.duel.addMessage(this.getName() + " is exhausted...");
					this.STRValue -= Math.floor(this.STR/10*9);
				}
				if (this.godList.indexOf(GOD_PP33.name) > -1) { // Priestess
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Priestess answers his calls!");
					this.duel.addMessage("*O Earth Mother, abounding in mercy, grant us peace to accept all things…*");
					this.duel.getOpponentOf(this).silenced = true;
				}
				if (this.godList.indexOf(GOD_PP34.name) > -1) { // Tohru
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Tohru answers his calls!");
					this.duel.addMessage(this.getName() + " gets blessed with armageddon magic.");
					this.armageddonMagic = true;
					if (this.duel.MOVE_COUNT <= 1000) {
						this.duel.MOVE_COUNT = 1000;
					}
					this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets cursed with confusion.");
					this.duel.getOppOf(this).grabbedPP = 2;
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
				if (this.godList.indexOf(GOD_PP36.name) > -1) { // Emilia
					this.duel.addMessage("-----------------");
					this.duel.addMessage("Emilia answers his calls!");
					this.duel.addMessage(this.getName() + " calls Quasi Spirits.");
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
					this.duel.addMessage(this.duel.getOpponentOf(this).getName() + " just confessed his love!");
					this.duel.addMessage("*O Kawaii Koto.*");
					this.duel.getOpponentOf(this).inLove = 6;
				}
			}
			else if (attack == EMOTE_PP53) {
				// Singular Explosion
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
			}
			else if (attack == EMOTE_PP54) {
				// Explosion Loop
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Explosion Loop");
				this.duel.addMessage("All damages are doubled for 7 turns");
				this.duel.ATTACK_MISS_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP55) {
				// Dual Explosion Loop
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Dual Explosion Loop");
				this.duel.addMessage("All moves will be used, no matter the DEX, for 7 turns");
				this.duel.AUTO_MOVES_COUNTDOWN = 8;
			}
			else if (attack == EMOTE_PP56) {
				// SignPost
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons every moves!");
				var moveList = shuffleArray(NORMAL_EMOTE_LIST);
				for (var i in moveList) {
					this.duel.addMessage("-----------------");
					if (moveList[i] != EMOTE_PP47) {
						this.playMove(moveList[i]);
					}
				}
			}
			else if (attack == EMOTE_PP57) {
				// Cage / Sacrifice
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
			}
			else if (attack == EMOTE_PP58) {
				// Cageless
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " gets a new life!");
				this.extraLife += 1;
			}
			else if (attack == EMOTE_PP59) {
				// Triggered Pépin2Pom
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
					this.duel.addMessage("Unless I wasn't ?");
					this.duel.addMessage("Nah it was a joke!");
					this.duel.addMessage("Unless...?");
					this.duel.addMessage("Gonna cry ?");
					this.duel.addMessage("Gonna piss your pant maybe ?");
					this.duel.addMessage("Maybe shit and cum ?");
				}
				else {
					this.duel.addMessage(this.getName() + " needs to get even closer!");
				}
			}
			else if (attack == EMOTE_PP60) {
				// PP Duel
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " asks for a PP Duel!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.STRValue -= _fighter.STR-10;
					_fighter.DEXValue -= _fighter.DEX-10;
					_fighter.bleedDamage = 0;
				});
			}
			else if (attack == EMOTE_PP61) {
				// Liberate PP
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " liberates his opponent's PP!");
				if (!this.duel.getOppOf(this).liberatedPP) {
					this.resetBattleVariables();
					this.duel.addMessage(this.getName() + " takes " + this.duel.getOppOf(this).DEXValue + " DEX from " + this.duel.getOppOf(this).getName() + "!");
					this.DEXValue += this.duel.getOppOf(this).DEX;
					this.duel.getOppOf(this).DEXValue = 0;
					this.duel.getOppOf(this).liberatedPP = true;
				}
				else {
					this.duel.addMessage("But " + this.duel.getOppOf(this).getName() + " has already been liberated!");
				}
			}
			else if (attack == EMOTE_PP62) {
				// Duel Checkpoint
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
					duel.CHECKPOINT_DUEL.FIGHTER1_SAVE.duel = duel.CHECKPOINT_DUEL;
					duel.CHECKPOINT_DUEL.FIGHTER2_SAVE.duel = duel.CHECKPOINT_DUEL;
				}
				catch(e) {
					// saves are null
				}
			}
			else if (attack == EMOTE_PP63) {
				// Xenomorph
				this.duel.addMessage(this.getName() + " slashes " + this.getOppName() + "!");
				this.duel.getOppOf(this).damage(Math.floor(this.DEX / 2));
			}
			else if (attack == EMOTE_PP64) {
				// XenoHead
				this.xenoMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask: Xeno!");
				this.satanMask = false;
				this.helldogMask = false;
			}
			else if (attack == EMOTE_PP65) {
				// Signpost
				this.duel.addMessage(this.getName() + " summons the knowledge signpost!");
				if (this.kungFu) {
					this.duel.addMessage("But he has nothing to learn!");
				}
				else {
					this.duel.addMessage(this.getName() + " now has battle knowledge!");
					this.kungFu = true;
				}
			}
			else if (attack == EMOTE_PP66) {
				// SatanHead
				this.satanMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask: Satan!");
				this.xenoMask = false;
				this.helldogMask = false;
			}
			else if (attack == EMOTE_PP67) {
				// RageSatan
				this.duel.addMessage(this.getName() + " punches " + this.getOppName() + "!");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP68) {
				// Mech
				this.duel.addMessage(this.getName() + " hides in his Mech!");
			}
			else if (attack == EMOTE_PP69) {
				// Lost Soul
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
			}
			else if (attack == EMOTE_PP70) {
				// HellDogHead
				this.helldogMask = true;
				this.duel.addMessage(this.getName() + " puts on a Mask: Intimidation!");
				this.xenoMask = false;
				this.satanMask = false;
			}
			else if (attack == EMOTE_PP71) {
				// Freedom
				this.duel.addMessage(this.getName() + " removes " + this.duel.getOppOf(this).getName() + "'s mask!");
				this.duel.getOppOf(this).helldogMask = false;
				this.duel.getOppOf(this).xenoMask = false;
				this.duel.getOppOf(this).satanMask = false;
			}
			else if (attack == EMOTE_PP72) {
				// Ammo Crate
				this.duel.addMessage(this.getName() + " gets an ammo crate!");
				if (this.fullOfAmmo) {
					this.duel.addMessage("...but he already had one!");
				}
				this.fullOfAmmo = true;
			}
			else if (attack == EMOTE_PP73) {
				// Quickening
				this.duel.addMessage(this.getName() + " gets a Quickening Charge!");
				this.quickeningCharges += 1;
			}
			else if (attack == EMOTE_PP74) {
				// Sword
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
			}
			else if (attack == EMOTE_PP75) {
				// AcidShot
				this.duel.addMessage(this.getName() + " shoots acid at " + this.duel.getOppOf(this).getName() + "!");
				this.duel.getOppOf(this).meltingDamage += Math.floor(Math.random() * 5 + 5);
				this.duel.getOppOf(this).acidArmor = 6;
			}
			else if (attack == EMOTE_PP76) {
				// EldritchPudding
				this.duel.addMessage(this.getName() + " eats some Eldritch Pudding!");
				if (getRandomPercent() < 90) {
					this.damage(50, false);
				}
				this.duel.addMessage(this.getName() + " gets a new tentacle!");
				this.tentacles += 1;
			}
			else if (attack == EMOTE_PP77) {
				// SatanHand
				this.duel.addMessage(this.getName() + " summons the Hand of Satan!");
				if (this.quickeningCharges >= 10) {
					this.duel.addMessage("The Hand brings him a gift against 10 quickening charges!");
					this.quickeningCharges -= 10;
					this.duel.addMessage("-----------------");
					this.duel.addMessage(this.getName() + " evolves to Requiem!");
					this.requiemPower = randomFromList(REQUIEM_LIST);
					try {
						this.guildUser.send("**Requiem Acquired: " + this.requiemPower + "**");
					}
					catch(e) {
						// User = Bot
					}
				}
				else {
					this.duel.addMessage(this.getName() + " needs more quickening charges to deal with it!");
				}
			}
			else if (attack == EMOTE_PP78) {
				// SatanSkull
				this.duel.addMessage(this.getName() + " summons the Satan Horns!");
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
				this.duel.getOppOf(this).damage(Math.floor(20 + this.STR / 8));
			}
			else if (attack == EMOTE_PP79) {
				// Eye of Truth
				this.duel.addMessage(this.getName() + " summons the Eye of Truth!");
				this.duel.addMessage("The Eye of Truth will reveal the moves of " + this.getName() + "'s soul!");
				var moveId = parseInt(this.guildUser.user.id.slice(9, this.guildUser.user.id.length));
				var effectId = moveId%6;
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
			}
			else if (attack == EMOTE_PP80) {
				// Fherla
				this.duel.addMessage(this.getName() + " summons Fherla - Strawberry Girl!");
				if (this.duel.CHRISTIAN_TEXT) {
					this.duel.addMessage("PP Punching is so good. Please continue!");
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.heal(Math.floor(Math.random() * 10000000000000));
					});
				}
				else {
					this.duel.addMessage("PP Punching is so filthy. May the chat be purged of this nonsense.");
					this.duel.bothFightersAction(function(_fighter) {
						_fighter.damage(Math.floor(Math.random() * 10000000000000), false);
					});
				}
			}
			else if (attack == EMOTE_PP81) {
				// Melodia
				this.duel.addMessage(this.getName() + " summons Melodia!");
				this.duel.UWU_TEXT = !this.duel.UWU_TEXT;
				if (this.duel.UWU_TEXT) {
					this.duel.addMessage("UwU Mode Activated!");
				}
				else {
					this.duel.addMessage("UwU Mode Deactivated!");
				}
			}
			else if (CIV_EMOTE_LIST.indexOf(attack) > -1 && this.duel.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) {
				this.duel.startCityMode();
			}
			else if ([EMOTE_PP82, EMOTE_PP83, EMOTE_PP84, EMOTE_PP85, EMOTE_PP86, EMOTE_PP87, EMOTE_PP88, EMOTE_PP89,
					EMOTE_PP90, EMOTE_PP91, EMOTE_PP92, EMOTE_PP93, EMOTE_PP117, EMOTE_PP122].indexOf(attack) > -1) {
				// Shrines
				var shrines = {};
				shrines[EMOTE_PP82] = "familiar";
				shrines[EMOTE_PP83] = "junk";
				shrines[EMOTE_PP84] = "glass";
				shrines[EMOTE_PP85] = "dice";
				shrines[EMOTE_PP86] = "angel";
				shrines[EMOTE_PP87] = "peace";
				shrines[EMOTE_PP88] = "yv";
				shrines[EMOTE_PP89] = "hero";
				shrines[EMOTE_PP90] = "cleanse";
				shrines[EMOTE_PP91] = "blood";
				shrines[EMOTE_PP92] = "beholster";
				shrines[EMOTE_PP93] = "ammo";
				shrines[EMOTE_PP117] = "challenge"
				shrines[EMOTE_PP122] = "blank"

				if (!this[shrines[attack] + "Shrine"]) {
					this.duel.addMessage(this.getName() + " now has a " + shrines[attack] + " Shrine!");
					this[shrines[attack] + "Shrine"] = true;
				}
				else {
					this.duel.addMessage(this.getName() + " already had a " + shrines[attack] + " Shrine!");
				}
			}
			else if ([EMOTE_PP94, EMOTE_PP95, EMOTE_PP96, EMOTE_PP97, EMOTE_PP98, EMOTE_PP99, EMOTE_PP100, EMOTE_PP101,
				 	EMOTE_PP102, EMOTE_PP103, EMOTE_PP104, EMOTE_PP105, EMOTE_PP106, EMOTE_PP107, EMOTE_PP108,
				  	EMOTE_PP109, EMOTE_PP110, EMOTE_PP111, EMOTE_PP112].indexOf(attack) > -1) {
				// Units
				var units = {};
				units[EMOTE_PP94] = ["Bullet Kin", 80, []];
				units[EMOTE_PP95] = ["Bandana Bullet Kin", 120, []];
				units[EMOTE_PP96] = ["Agonizer", 2000, ["armyAgony"]];
				units[EMOTE_PP97] = ["Gunreaper", 120, ["armyResurrects"]];
				units[EMOTE_PP98] = ["Lord of the Jammed", 200, ["armyResurrects", "armyJammed"]];
				units[EMOTE_PP99] = ["Shelleton", 200, ["armyDefence"]];
				units[EMOTE_PP100] = ["Chain Gunner", 400, []];
				units[EMOTE_PP101] = ["Chancebulon", Math.floor(Math.random() * 40 + 1)*40, ["armyBouncing"]];
				units[EMOTE_PP102] = ["Confirmed", 1000, ["armyBlessing"]];
				units[EMOTE_PP103] = ["Cubelead", 480, []];
				units[EMOTE_PP104] = ["Cubulon", 400, ["armyBouncing"]];
				units[EMOTE_PP105] = ["Gun Nut", 400, []];
				units[EMOTE_PP106] = ["Killithid", 0, ["armyMindControl"]];
				units[EMOTE_PP107] = ["Muzzle Flare", 400, []];
				units[EMOTE_PP108] = ["Muzzle Whisp", 2000, ["armyUnstable"]];
				units[EMOTE_PP109] = ["Phaser Spider", 80, ["armyPiercing"]];
				units[EMOTE_PP110] = ["Skullet", 80, ["armyDefence"]];
				units[EMOTE_PP111] = ["Skullmet", 200, []];
				units[EMOTE_PP112] = ["Spectral Gun Nut", 200, ["armyPiercing"]];

				this.duel.addMessage(this.getName() + " summons a " + units[attack][0] + " for his army!");
				this.lastSummonValue = units[attack][1];

				if (this.alphaBullets && this.militaryPower == 0) {
					this.militaryPower += units[attack][1];
					this.lastSummonValue += units[attack][1];
					this.duel.addMessage("Alpha Bullets doubles the military power gained!");
				}

				if (getRandomPercent() <= 5 && units[attack][2].indexOf("armyJammed") < 0) {
					this.duel.addMessage("This one looks jammed!");
					this.militaryPower += units[attack][1];
					this.armyJammed = true;
				}

				this.militaryPower += units[attack][1];
				for (var i in units[attack][2]) {
					this[units[attack][2][i]] = true;
					if (units[attack][2] == "armyAgony") {
						this[units[attack][2][i]] = 4;
					}
				}

				if (this.kaijuHP > 0) {
					this.kaijuHP -= this.militaryPower;
					this.duel.addMessage("It attacks the kaiju!");
					this.resetArmy();
					if (this.kaijuHP <= 0) {
						this.duel.addMessage("And The kaiju dies!");
						this.bossKiller = 11;
					}
				}
			}
			else if (attack == EMOTE_PP113) {
				// Junk
				this.duel.addMessage(this.getName() + " picks up some junk.");
				this.junkCount += 1;
			}
			else if (attack == EMOTE_PP114) {
				// Gold Junk
				this.playMove(EMOTE_PP113);
				this.duel.addMessage("This looks like gold junk ! This is worth 10 Junks!");
				this.junkCount += 9;
			}
			else if (attack == EMOTE_PP115) {
				// Ser Junkan
				this.playMove(EMOTE_PP113);
				this.duel.addMessage("It is Ser Junkan!");
				this.serJunkan = true;
			}
			else if (attack == EMOTE_PP116) {
				// Lies
				this.duel.addMessage(this.getName() + " picks up some junk!");
				this.junkCount += this.duel.getOppOf(this).junkCount;
				this.duel.getOppOf(this).junkCount = 0;
			}
			else if (attack == EMOTE_PP118) {
				// Alpha Bullets
				this.duel.addMessage(this.getName() + " gets Alpha Bullets!");
				this.alphaBullets = true;
			}
			else if (attack == EMOTE_PP119) {
				// Omega Bullets
				this.duel.addMessage(this.getName() + " gets Omega Bullets!");
				this.omegaBullets = true;
			}
			else if (attack == EMOTE_PP120) {
				// Hot Lead
				this.duel.addMessage(this.getName() + " gets Hot Lead!");
				this.hotLead = true;
			}
			else if (attack == EMOTE_PP121) {
				// Ghost Bullets
				this.duel.addMessage(this.getName() + " gets Ghost Bullets!");
				this.ghostBullets = true;
			}
			else if (attack == EMOTE_PP123) {
				// Silver Bullets
				this.duel.addMessage(this.getName() + " gets Silver Bullets!");
				this.silverBullets = true;
			}
			else if (attack == EMOTE_PP124) {
				// Rusty Sidearm
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				this.duel.launchRaid(this);
			}
			else if (attack == EMOTE_PP125) {
				// Glass Guon Stone
				this.duel.addMessage(this.getName() + " gets a Glass Guon Stone!");
				this.glassGuonStones += 1;
			}
			else if (attack == EMOTE_PP126) {
				// Red Guon Stone
				this.duel.addMessage(this.getName() + " gets a Red Guon Stone!");
				this.redGuonStones += 1;
			}
			else if (attack == EMOTE_PP127) {
				// Green Guon Stone
				this.duel.addMessage(this.getName() + " gets a Green Guon Stone!");
				this.greenGuonStones += 1;
			}
			else if (attack == EMOTE_PP128) {
				// Makeshift Cannon
				this.duel.addMessage(this.getName() + " shoots " + this.getOppName() + " with a Makeshift Cannon!");
				this.militaryPower = 750;
				this.duel.launchRaid(this);
			}
			else if (attack == EMOTE_PP129) {
				// Face Melter
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				this.duel.launchRaid(this, "stun");
			}
			else if (attack == EMOTE_PP130) {
				// Abyssal Tentacle
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				if (this.armyJammed) {
					this.militaryPower += Math.floor(this.militaryPower/2);
				}
				this.duel.launchRaid(this);
			}
			else if (attack == EMOTE_PP131) {
				// Yari Launcher
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				this.duel.launchRaid(this, "destroy");
			}
			else if (attack == EMOTE_PP132) {
				// Rad Gun
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				if (this.serJunkan) {
					this.duel.addMessage("Ser Junkan joins the raid!");
					this.militaryPower += 80*this.junkCount;
				}
				this.duel.launchRaid(this);
			}
			else if (attack == EMOTE_PP133) {
				// Vorpal Gun
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				if (getRandomPercent() <= 20) {
					this.duel.addMessage("**Critical raid !**");
					this.militaryPower += this.militaryPower;
				}
				this.duel.launchRaid(this);
			}
			else if (attack == EMOTE_PP134) {
				// Hyper Light Blaster
				this.duel.addMessage(this.getName() + " raids " + this.getOppName() + "!");
				this.duel.launchRaid(this, "blast");
			}
			else if (attack == EMOTE_PP135) {
				// Worm Scarf
				this.duel.addMessage(this.getName() + " wears a Worm Scarf!");
				this.ironProtection = 4;
			}
			else if (attack == EMOTE_PP136) {
				// Hive Pack
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
			}
			else if (attack == EMOTE_PP137) {
				// Suspicious Looking Tentacle
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
			}
			else if (attack == EMOTE_PP138) {
				// 0x33s Aviators
				this.duel.MOVE_COUNT += 33;
				if (!this.aviatorBuff) {
					this.duel.addMessage(this.getName() + " gets the 0x33s Aviators!");
					this.aviatorBuff = true;
				}
				else {
					this.duel.addMessage(this.getName() + " already had the 0x33s Aviators!");
				}
			}
			else if (attack == EMOTE_PP139) {
				// Royal Gel
				this.duel.MOVE_COUNT += 33;
				if (this.duel.EVENT_BOSS) {
					this.duel.addMessage(this.duel.CURRENT_BOSS + " gets wrapped by royal gel.");
					this.duel.addMessage(this.duel.CURRENT_BOSS + " seems angry towards " + this.duel.getOppOf(this).getName() + "!");
				}
				else {
					this.duel.addMessage(this.getName() + " summons the Royal Gel!");
					this.duel.CURRENT_BOSS = BOSS_PP13;
					this.duel.BOSS_HEALTH = 10*this.duel.MOVE_COUNT;
					this.duel.BOSS_DAMAGE = 2*this.duel.MOVE_COUNT;
					this.duel.EVENT_BOSS = true;
					this.duel.addMessage("A Pudding Blob has been created!");
				}
				this.duel.BOSS_TRIGGER = this.duel.getOppOf(this);
			}
			else if (attack == EMOTE_PP140) {
				// Brain of Confusion
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Brain of Confusion!");
				this.duel.addMessage(this.duel.getOppOf(this).getName() + " is confused!");
				this.duel.getOppOf(this).grabbedPP = 3;
			}
			else if (attack == EMOTE_PP141) {
				// Shield of Cthulhu
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " gets a Shield of Cthulhu!");
				this.cthulhuShield += 3;
			}
			else if (attack == EMOTE_PP142) {
				// Demon Heart
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
			}
			else if (attack == EMOTE_PP143) {
				// Spore Sac
				this.duel.MOVE_COUNT += 33;
				if (this.sporeSac) {
					this.duel.addMessage(this.getName() + " already had a Spore Sac!");
				}
				else {
					this.duel.addMessage(this.getName() + " gets a Spore Sac!");
					this.sporeSac = true;
				}
			}
			else if (attack == EMOTE_PP144) {
				// Bone Glove
				this.duel.MOVE_COUNT += 33;
				if (this.boneGlove) {
					this.duel.addMessage(this.getName() + " already had a Bone Glove!");
				}
				else {
					this.duel.addMessage(this.getName() + " gets a Bone Glove!");
					this.boneGlove = true;
				};
			}
			else if (attack == EMOTE_PP145) {
				// Shiny Stone
				this.duel.MOVE_COUNT += 33;
				if (this.shinyStone) {
					this.duel.addMessage(this.getName() + " already had a Shiny Stone!");
				}
				else {
					this.duel.addMessage(this.getName() + " gets a Shiny Stone!");
					this.shinyStone = true;
				};
			}
			else if (attack == EMOTE_PP146) {
				// Gravity Globe
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " reverses gravity!");
				this.duel.REVERSED_GRAVITY = !this.duel.REVERSED_GRAVITY;
			}
			else if (attack == EMOTE_PP147) {
				// Shrimpy Truffle
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " eats a Shrimpy Truffle!");
				if (this.cuteFishron) {
					this.duel.addMessage("But nothing happens...");
				}
				else {
					this.duel.addMessage("A Cute Fishron joins " + this.getName() + "!");
					this.cuteFishron = true;
				};
			}
			else if (attack == EMOTE_PP148) {
				// sex
				if (this.duel.EVENT_BOSS) {
					this.duel.addMessage(this.duel.CURRENT_BOSS + "'s suddenly runs away.");
				}
				this.duel.CURRENT_BOSS = BOSS_PP14;
				this.duel.BOSS_HEALTH = (this.STR+this.duel.getOppOf(this).STR)*10000;
				this.duel.BOSS_DAMAGE = 0;
				this.duel.EVENT_BOSS = true;
				this.duel.addMessage("Mongo has appeared, and he is sex-starved!");
				this.duel.addMessage("-----------------");
			}
			else if (attack == EMOTE_PP149) {
				// Volatile Gelatine
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Volatile Gelatine!");
				var chaosNumber = 1 + Math.floor(getRandomPercent()/20);
				for (var i = 0; i < chaosNumber; i++) {
					var lastMove = EMOTE_PP39;
					if (this.duel.getOppOf(this).usedMoves.length >= 2) {
					    lastMove = this.duel.getOppOf(this).usedMoves[this.duel.getOppOf(this).usedMoves.length-2];
					}
					this.playMove(lastMove);
					this.duel.addMessage("-----------------");
				}
			}
			else if (attack == EMOTE_PP150) {
				// Soaring Insignia
				this.duel.MOVE_COUNT += 33;
				this.duel.addMessage(this.getName() + " summons the Soaring Insignia!");
				if (this.empressLightBuff) {
					this.duel.addMessage("But nothing happens...");
				}
				else {
					this.duel.addMessage(this.getName() + " gets the Blessing of the Empress of Light!");
					this.empressLightBuff = true;
				};
			}
			else if (attack == EMOTE_ABILITY) {
				// Requiems
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
						this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets possessed!");
						this.duel.getOppOf(this).isPossessed = 1;
					}
					if (this.requiemPower == REQUIEM_PP3 || this.requiemPower == REQUIEM_PP7) { // Majestic
						this.stopTime(1);
						this.duel.addMessage(this.getName() + " makes a temporal duplication of himself!");
						this.extraLife += 1;

						var duel = this.duel;
						this.duel = null;
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
			}
			else if (attack == EMOTE_FRIEDESPINOZA || attack == EMOTE_ESPINOZE) {
				// Judgement Event
				if (this.duel.ESPINOZA_CHOICE == attack) {
					this.duel.addMessage(this.getName() + " guessed right !:)");
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
					this.duel.addMessage(this.getName() + " guessed wrong !:(");
				}
			}
			else if (attack == EMOTE_OBOMBA) {
				// Obama Event
				this.duel.addMessage(this.getName() + " summons the **Obomba**!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.damage(_fighter.STR, false);
				});
			}
			else if (attack == EMOTE_OBAMAHEDRON) {
				// Obama Event
				this.duel.addMessage(this.getName() + " summons the **Obamahedron**!");
				this.duel.addMessage("Both fighters gets some random bonus STR!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.STRValue += Math.floor(Math.random() * Math.pow(10, getRandomPercent()));
				});
			}
			else if (attack == EMOTE_OBAMASPHERE) {
				// Obama Event
				this.duel.addMessage(this.getName() + " summons the **Obamasphere**!");
				this.duel.addMessage("Both fighters gets some random bonus DEX!");
				this.duel.bothFightersAction(function(_fighter) {
					_fighter.DEXValue += Math.floor(Math.random() * Math.pow(10, getRandomPercent()));
				});
			}
			else if (attack == EMOTE_DEAD) {
				// Dead (Cthulhu battle)
				if (this.STRValue < 70) {
					this.duel.addMessage(this.getName() + "'s PP corpse does not move.");
				}
				else {
					this.duel.addMessage(this.getName() + "'s PP corpse is slightly twitching...");
				}
			}
			else if (attack == EMOTE_SKIP) {
				// Skip
				if (this.futureMemories == 0) {
					this.duel.addMessage(this.getName() + " sends a D-Mail to the past!");
				}
				else {
					this.duel.addMessage(this.getName() + " does nothing...");
				}
				return;
			}
			else {
				for (var i in GOD_LIST) {
					if (GOD_LIST[i].emote == attack) {
						this.godList.push(GOD_LIST[i].name);
						this.duel.addMessage(this.getName() + " becomes a " + GOD_LIST[i].name + "Priest!");
					}
				}
			}

			if (sdsds+1 < numberAttacks) {
				this.duel.addMessage("-----------------");
			}
		}
	}

	heal(_amount) {
		_amount += this.quickeningCharges*3;
		if (this.duel.REVERSE_DAMAGE <= 0 && this.selfReverseDamage <= 0 && !this.duel.POOPOO_UNIVERSE) {
			this.STRValue += _amount;
			this.duel.addMessage(this.getName() + " gets healed by " + _amount + " HP");
			if (_amount == 69) {
				this.duel.addMessage("nice!");
			}
			return;
		}
		else {
			this.STRValue -= _amount;
			this.duel.addMessage(this.getName() + " takes " + _amount + " damages!");
			if (_amount == 69) {
				this.duel.addMessage("lmao!");
			}
			this.damageTaken += _amount;
			return;
		}
	}

	damage(_amount, _punch = true) {
		var ogAmount = _amount;

		if (_punch) {
			_amount += this.duel.getOppOf(this).quickeningCharges*3;

			_amount += this.duel.getOppOf(this).bonusDamage;
			this.duel.getOppOf(this).bonusDamage = 0;
		}
		if (this.duel.getOppOf(this).kungFu && _punch) {
			// Signpost
			_amount += 10;
		}
		if (this.duel.STEEL_PROTECTION) {
			// Steel
			_amount -= Math.floor(_amount/10*9);
		}
		if (this.duel.getOppOf(this).hasSynergy(SYNERGY_PP16) && _punch) {
			// Too Much Dicks
			_amount += 10;
		}
		if (this.duel.ATTACK_MISS_COUNTDOWN > 0 && getRandomPercent() < 90) {
			// Boom Loop
			_amount += _amount;
		}
		if (this.duel.BARREL_DAMAGE) {
			// Barrel
			_amount = _amount*2;
		}
		if (this.duel.getOppOf(this).megaBuildUp > 0 && _punch) {
			// Bronan Slam
			_amount = _amount*this.duel.getOppOf(this).megaBuildUp;
			this.duel.getOppOf(this).megaBuildUp = 0;
		}
		if (this.duel.getOppOf(this).iceWeapon && _punch) {
			_amount += _amount;
			this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s Magic Ice Weapon breaks on " + this.getName() + "!");
			this.duel.getOppOf(this).iceWeapon = false;
		}
		if (this.duel.getOppOf(this).standPower == STAND_PP16 && this.duel.getOppOf(this).STR <= 15 && _punch) {
			// Virus
			this.duel.addMessage("Virus effect triggers!");
			_amount = _amount*100;
		}
		if (this.standPower == STAND_PP1 && _punch) {
			// Iron Maiden
			_amount -= 10;
		}
		if (this.hasSynergy(SYNERGY_PP12) && _punch) {
			// Waifu Body Pillow
			_amount -= 10;
		}
		if (this.duel.getOppOf(this).flugelBlood && this.duel.getOppOf(this).DEX > this.DEX && _punch) {
			// Jibril Special
			_amount += this.duel.getOppOf(this).DEX - this.DEX;
		}

		if (this.duel.INFINITE_DAMAGE >= 100) {
			if (this.duel.INFINITE_DAMAGE == 100) {
			    this.duel.addMessage("**Damage cap achieved !**");
			}
			return this.duel.addMessage(_amount + " damages were canceled");
		}
		this.duel.INFINITE_DAMAGE += 1;

		var critMin = 5;
		if (this.duel.getOppOf(this).kungFu) {
			critMin += 15;
		}
		critMin += this.lifeFibers*5;
		if ((getRandomPercent() < critMin || this.duel.getOppOf(this).forceCritical) && _punch) {
			_amount += _amount;
			this.duel.getOppOf(this).forceCritical = false;
			this.duel.addMessage("**Critical Hit !**");
			if (this.duel.getOppOf(this).hasSynergy(SYNERGY_PP22)) {
				this.duel.getOppOf(this).forceCritical = true;
			}
		}

		if (getRandomPercent() <= this.duel.getOppOf(this).madnessStacks*3 && _punch) { // Scythe of Cosmic Chaos
			// The Scythe of Cosmic Chaos
			this.duel.addMessage(this.duel.getOppOf(this).getName() + " hits himself in his madness!");
			this.duel.getOppOf(this).damage(_amount, false)
			return;
		}

		if (this.duel.EVENT_BOSS && _punch) {
			if (_amount <= 0) {
				return this.duel.addMessage(this.duel.CURRENT_BOSS + " takes no damages!");
			}

			this.duel.BOSS_HEALTH -= _amount;
			this.duel.addMessage(this.duel.CURRENT_BOSS + " takes " + _amount + " damages!");
			this.duel.DAMAGE_COUNT += _amount;
			if (_amount == 69) {
				this.duel.addMessage("lmao!");
			}
			if (this.duel.BOSS_HEALTH + _amount > 0 && this.duel.BOSS_HEALTH <= 0) {
				if (this.duel.CURRENT_BOSS == BOSS_PP13) {
					this.duel.getOppOf(this).bossKiller += 3;
				}
				else {
					this.duel.getOppOf(this).bossKiller += 11;
				}
			}
			this.damageTaken += _amount;

			if (this.duel.getOppOf(this).standPower == STAND_PP4) {
				this.duel.getOppOf(this).heal(Math.floor(_amount / 3));
			}

			return;
		}
		else if (this.duel.REVERSE_DAMAGE > 0 || this.selfReverseDamage > 0) {
			this.STRValue += _amount;
			this.duel.addMessage(this.getName() + " gets healed by " + _amount + " HP");
			if (_amount == 69) {
				this.duel.addMessage("nice!");
			}
			return;
		}
		else if (this.duel.TIME_STOP > 0 && _punch) {
			if (_amount > 0) {
				this.pushedDamages += _amount;
			}
			return;
		}
		else if (this.isDrunkPP && getRandomPercent() < 50) {
			// Drunk PP
			this.duel.addMessage(this.getName() + " felt nothing because too drunk!");
		}
		else if (this.attack == EMOTE_PP10 && _punch) {
			// Tank
			this.duel.addMessage(this.getName() + " felt nothing!");
		}
		else if (this.ironProtection > 0 && _punch) {
			// Iron Maiden
			this.duel.addMessage(this.getName() + " felt nothing!");
		}
		else if (this.satanicReverse > 0 && _punch) {
			// BigSatan Alternative Move
			this.duel.addMessage(this.getName() + "'s satanic rite protects him!");
			this.duel.getOppOf(this).damage(_amount);
		}
		else if (this.isProtected && _punch) {
			// RiotShield
			this.duel.addMessage(this.getName() + " reflects the damages!");
			this.isProtected = false;
			this.duel.getOppOf(this).damage(_amount);
		}
		else if (this.standPower == STAND_PP6 && getRandomPercent() <= 25 && _punch) {
			// Sham Mirrors
			this.duel.addMessage(this.getName() + " reflects the damages!");
			this.duel.getOppOf(this).damage(_amount);
		}
		else if (this.tempestBuff && _amount > 0 && getRandomPercent() >= 33 && _punch) {
			// Tempest (Ais buff)
			this.duel.addMessage(this.getName() + "'s Tempest protects him!");
			this.duel.getOppOf(this).damage(Math.floor(this.STR/10));
			_amount = Math.floor(_amount/2);
		}
		else {
			if (_amount <= 0) {
				return this.duel.addMessage(this.getName() + " takes no damages!");
			}
			else if (this.duel.getOppOf(this).boneGlove) {
				this.duel.addMessage(this.getName() + " takes " + _amount + " bleed stacks!");
				if (_amount == 69) {
					this.duel.addMessage("lmao!");
				}
				this.bleedDamage += _amount;
			}
			else if (this.cuteFishron && this.STR <= _amount) {
				this.duel.addMessage("Cute Fishron takes the attacks for " + this.getName() + "!");
				this.duel.addMessage("He dies in an horrible and painful death...");
				this.cuteFishron = false;
			}
			else {
				this.duel.addMessage(this.getName() + " takes " + _amount + " damages!");
				if (_amount == 69) {
					this.duel.addMessage("lmao!");
				}

				this.damageTaken += _amount;
				this.dodgableDamages.push(_amount);
				if (this.dodgableDamages.length > 5) {
					this.dodgableDamages.pop();
				}

				if (this.duel.getOppOf(this).standPower == STAND_PP10 && _punch) {
					// Illud Divinum Insanus
					this.DEXValue += _amount;
				}
				else {
					// Damage
					this.STRValue -= _amount;
				}

				if (this.duel.getOppOf(this).standPower == STAND_PP12 && _punch) { // Space Metal
					this.meltingDamage += 2;
				}
				if (this.duel.getOppOf(this).standPower == STAND_PP13 && _punch) { // The Scythe of Cosmic Chaos
					this.madnessStacks += 1;
				}
				if (this.duel.getOppOf(this).standPower == STAND_PP17 && _punch) { // Titans of Creation
					this.duel.getOppOf(this).heal(10);
				}
				if (this.duel.getOppOf(this).akameKill > 0 && _punch) {
					this.duel.addMessage(this.getName() + " gets Murasame's poisonous curse!");
					this.murasameCurse = true;
				}
				if (this.madnessStacks > 0 && getRandomPercent() <= 10+this.madnessStacks && _punch) {
					this.duel.addMessage(this.getName() + " flinched!");
					this.hasBurst = 2;
				}
			}

			this.duel.DAMAGE_COUNT += _amount;


			if (this.duel.getOppOf(this).standPower == STAND_PP4 && _punch) { // Above the Light
				this.duel.getOppOf(this).heal(Math.floor(_amount / 3));
			}
			if (this.duel.getOppOf(this).standPower == STAND_PP11 && _amount >= 30 && _punch) { // Refuge Denied
				this.duel.getOppOf(this).heal(30);
				this.duel.getOppOf(this).DEXValue += 10;
				this.duel.addMessage(this.duel.getOppOf(this).getName() + " gets 10 DEX!");
			}
			if (this.standPower == STAND_PP20 && getRandomPercent() <= 25) { // Metal Resistance
				this.duel.addMessage(this.getName() + " changes his gods for a bit!");
				var godListMemory = this.godList.slice();
				this.godList = []

				var randomGod = randomFromList(GOD_LIST);
				while (randomGod.type != "waifu") {
					randomGod = randomFromList(GOD_LIST);
				}
				this.godList.push(randomGod.name);

				this.playMove(EMOTE_PP51);
				this.godList = godListMemory.slice();
			}
		}

		// Acid
		if (this.acidArmor >= 1 && _punch) {
			this.duel.addMessage(this.getName() + " has an acid armor!");
			if (this.duel.getOppOf(this).hasSynergy(SYNERGY_PP4)) {
				this.duel.getOppOf(this).heal(10);
			}
			else {
				if (this.sporeSac) {
					this.duel.getOppOf(this).damage(10 + Math.floor(_amount/10), false);
				}
				else {
					this.duel.getOppOf(this).damage(10, false);
				}
			}
		}

		if (this.klaxoTails && _punch) {
			for (var i = 0; i < 8; i++) {
				if (getRandomPercent() <= 10) {
					this.duel.addMessage(this.getName() + "'s tail #" + (i+1) + " attacks back!");
					this.duel.getOppOf(this).damage(this.STR/10);
				}
			}
		}

		// DoomReverse
		if (this.STR <= 0 && this.doomReverse >= 1) {
			this.duel.addMessage(this.getName() + " uses DOOM-REVERSE(tm)!");
			this.STRValue += (0 - this.STR) + 10;
			this.doomReverse = 0;
		}
		// Alien PP
		if (this.isAlienPP && _punch) {
			this.duel.getOppOf(this).bleedDamage += 3;
		}

		// Eldritch Gang
		if (this.duel.getOppOf(this).hasSynergy(SYNERGY_PP19) && getRandomPercent() <= 10 && _punch) {
			this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s attack happens again!");
			this.damage(ogAmount, _punch);
		}
	}

	turnChange() {
		// Clear attaque
		this.attack = "";
		if (!this.attackedThisTurn) {
			this.missedMoves += 1;
			this.dexMalus += 5;

			if (this.shinyStone) {
				this.duel.addMessage(this.getName() + "'s Shiny Stone heals him!");
				this.heal(Math.floor(this.STR/10));
				this.duel.addMessage("-----------------");
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

		if (this.empressLightBuff && getRandomPercent() <= 50) {
			this.duel.addMessage(this.getName() + " feels the blessing by the Empress of Light!");
			this.duel.addMessage("-----------------");
		}
		else {
			this.doomReverse -= 1;
			this.hasBoomerang -= 1;
			this.isLucky -= 1;
			this.mikasaBuff -= 1;
			this.ironProtection -= 1;
			this.futureMemories -= 1;
			this.selfReverseDamage -= 1;
			this.akameDex -= 1;
			this.akameKill -= 1;

			if (this.sporeSac && getRandomPercent() <= 75 && this.acidArmor > 0) {
				this.duel.addMessage(this.getName() + "'s acid armor stays for longer.");
				this.duel.addMessage("-----------------");
			}
			else {
				this.acidArmor -= 1;
			}
		}

		// Turkey
		if (this.turkeyCountdown >= 0) {
			if (this.turkeyCountdown == 0) {
				this.duel.addMessage(this.getName() + " explodes!");
				this.damage(1000, false);
			}
			else {
				this.duel.addMessage(this.getName() + " has " + this.turkeyCountdown + " turn(s) left!");
			}
			this.duel.addMessage("-----------------");
		}

		// Bleed (SawBlade)
		if (this.bleedDamage > 0) {
			this.duel.addMessage(this.getName() + " bleeds!");
			var bleedDamage = this.bleedDamage;
			if (this.isSalty) {
				bleedDamage = bleedDamage*5;
			}
			if (this.hasSynergy(SYNERGY_PP4)) {
				this.heal(bleedDamage);
			}
			else {
				this.damage(bleedDamage, false);
			}
			this.duel.addMessage("-----------------");
		}
		// Melt
		if (this.meltingDamage > 0) {
			this.duel.addMessage(this.getName() + " melts!");
			if (this.hasSynergy(SYNERGY_PP4)) {
				this.heal(this.meltingDamage);
			}
			else {
				this.damage(this.meltingDamage, false);
			}
			this.duel.addMessage("-----------------");
		}

		// Pig
		if (this.pigHeal > 0) {
			if (this.isCowBoy) {
				this.duel.addMessage(this.getName() + " squeezes hog YEEHAAAAAW!");
				this.heal(this.pigHeal*3);
			}
			else {
				this.duel.addMessage(this.getName() + " squeezes hog!");
				this.heal(this.pigHeal);
			}
			this.duel.addMessage("-----------------");
		}

		// Charges
		if (this.gettingRegularCharge == 0) {
			this.regularCharges += 1;
			this.duel.addMessage(this.getName() + " uses his long nose to get a regular charge!");
			this.duel.addMessage("-----------------");
		}
		if (this.gettingSpecialCharge == 0) {
			this.specialCharges += 1;
			this.duel.addMessage(this.getName() + " uses his long nose to get a special charge!");
			this.duel.addMessage("-----------------");
		}

		// Hive Pack
		if (this.hivePack > 0 && getRandomPercent() <= this.hivePack) {
			this.duel.getOppOf(this).hasBurst = 2;
			this.duel.addMessage(this.getName() + "'s bees attack " + this.duel.getOppOf(this).getName() + "!");
			this.duel.addMessage("-----------------");
		}

		// Boss Killer
		if (this.bossKiller > 0) {
			this.duel.addMessage(this.getName() + " gets +1 DEX thanks to the Boss Killer Blessing!");
			this.DEXValue += 1;
			this.heal(30);
			this.duel.addMessage("-----------------");
			this.bossKiller -= 1;
		}

		// The Man Who Made a Monster regular move
		if (this.tearDrinker > 0) {
			this.duel.addMessage(this.getName() + " drinks salty tears!");
			this.heal(this.tearDrinker);
			if (this.hasSynergy(SYNERGY_PP10)) {
				this.duel.getOppOf(this).damage(this.tearDrinker);
			}
			this.duel.addMessage("-----------------");
		}

		// Boreal Summon
		if (this.borealSummon == 0) {
			this.duel.addMessage(this.getName() + " summons the Boreal World!");
			this.duel.BOREAL_WORLD = true;
			this.duel.addMessage("-----------------");
		}
		// Perfect Machine + Boreal Flame
		if (this.standPower == STAND_PP2 && this.borealSummon < 0 && !this.duel.BOREAL_WORLD) {
			this.borealSummon = 10;
			this.duel.addMessage(this.getName() + " starts summoning the Boreal World!");
		}

		// Concepts of Maths
		if (this.standPower == STAND_PP14) {
			this.playMove(EMOTE_PP73);
			this.duel.addMessage("-----------------");
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
			this.duel.addMessage(this.getName() + " attacks with tentacles!");
			for (var i = 0; i < this.tentacles; i++) {
				this.duel.getOppOf(this).damage(10);
				if (this.hasSynergy(SYNERGY_PP18)) {
					this.meltingDamage += 1;
				}
				this.duel.addMessage("-----------------");
			}
		}

		// Ancient Fungus
		if (this.godList.indexOf(GOD_PP23.name) > -1) {
			this.eldritchFriend = true;
		}

		// Espinoza Waifu Stealer
		if (this.duel.MOVE_COUNT > 30 && this.godList.indexOf(GOD_PP12.name) > -1) {
			for (var i in this.duel.getOppOf(this).godList) {
				if (this.duel.getOppOf(this).godList[i].type == "waifu") {
					this.duel.addMessage(this.getName() + " uses Espinoza sniffes " + this.duel.getOppOf(this).getName() + "!");
					this.duel.addMessage(this.duel.getOppOf(this).godList[i].name + " leaves " + this.duel.getOppOf(this).getName() + " for " + this.getName() + "!");
					this.duel.addMessage("Espinoza truly is a waifu stealer!");

					this.duel.getOppOf(this).godList.splice(this.duel.getOppOf(this).godList.indexOf(this.duel.getOppOf(this).godList[i].name), 1);
					this.godList.push(this.duel.getOppOf(this).godList[i].name);
					this.duel.addMessage("-----------------");
				}
			}
		}

		// Synergies
		if (this.hasSynergy(SYNERGY_PP1)) {
			this.duel.addMessage(this.getName() + " remembers haunting memories...");
			this.duel.addMessage("Rage makes him build up 10 damages");
			this.bonusDamage += 10;
			this.duel.addMessage("-----------------");
		}
		if (this.hasSynergy(SYNERGY_PP2)) {
			this.duel.addMessage(this.getName() + " gets healed by the Holy Brenn Trinity!");
			this.heal(5);
			this.duel.addMessage("-----------------");
		}
		if (this.hasSynergy(SYNERGY_PP3)) {
			this.duel.addMessage(this.getOppName() + " gets hurt by the Unholy Pudding Trinity!");
			this.duel.getOppOf(this).damage(5);
			this.duel.addMessage("-----------------");
		}
		if (this.hasSynergy(SYNERGY_PP6)) {
			this.duel.addMessage(this.getName() + " plays garbage music");
			this.duel.addMessage(this.duel.getOppOf(this).getName() + "'s ears starts bleeding");
			this.duel.getOppOf(this).bleedDamage++;
			this.duel.addMessage("-----------------");
		}
		if (this.hasSynergy(SYNERGY_PP7) && getRandomPercent() <= 10) {
			this.duel.addMessage(this.getName() + "'s Yaoi starts!");
			if (this.duel.GAY_TURNS < 2) {
				this.duel.GAY_TURNS = 0;
			}
			this.duel.GAY_TURNS += 2;
			this.duel.addMessage("-----------------");
		}

		if (this.randomizedStand) {
			this.duel.addMessage(this.getName() + " randomizes his ability!");
			this.duel.addMessage("-----------------");

			var keys = Object.keys(STAND_SUMMONS);
			this.standPower = keys[ keys.length * Math.random() << 0];

			this.guildUser.send("Current Stånd Ability: " + this.standPower);
		}
		if (this.hasSupplyDrops) {
			var r = getRandomPercent();
			if (r <= 50) {
				this.duel.addMessage(this.getName() + " gets a supply drop!");

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
				else if (r <= 50) { // Scout
					this.duel.addMessage(this.getName() + " gets binoculars!");
					this.playMove(EMOTE_PP13);
				}

				this.duel.addMessage("-----------------");
			}
		}

		// PP Armageddon
		if (this.duel.PP_ARMAGEDDON) {
			this.STRValue -= 5000;
		}

		// Ryuko Special
		if (this.hasKamui) {
			this.duel.addMessage(this.getName() + "'s Kamui drains his blood!");
			this.damage(20, false);
			if (this.STR <= 40) {
				this.hasKamui = false;
				this.duel.addMessage(this.getName() + "'s Kamui leaves him to prevent his death!");
			}
			this.duel.addMessage("-----------------");
		}

		// ImpendingDoom
		if (this.impendingDoom == 0) {
			this.duel.addMessage("**" + this.getName() + " cannot escape fate and dies !**");
			if (this.doomReverse > 0) {
				this.duel.addMessage("**" + this.getName() + " uses DOOM-REVERSE(tm) !**");
				this.STRValue += (0 - this.STR) + 10;
				this.doomReverse = 0;
				this.duel.getOppOf(this).impendingDoom = 2;
			}
			else {
				this.extraLife = 0;
				this.STRValue -= this.STR;
			}
			this.duel.addMessage("-----------------");
		}

		// Akame's Murasame
		if (this.murasameCurse) {
			this.duel.addMessage("**" + this.getName() + "'s heart stops beating !**");
			if (this.doomReverse > 0) {
				this.duel.addMessage("**" + this.getName() + " uses DOOM-REVERSE(tm) !**");
				this.STRValue += (0 - this.STR) + 10;
				this.doomReverse = 0;
				this.murasameCurse = false;
			}
			else {
				this.STRValue -= this.STR;
			}
			this.duel.addMessage("-----------------");
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
			nb += Math.floor(this.duel.MOVE_COUNT/100)
		}
		else {
			nb += Math.floor(this.duel.MOVE_COUNT/10)
		}
		if (this.isHockeyPuckPP) {
			nb += 3;
		}
		if (_param == "half") {
			nb = Math.floor(nb/2);
		}
		if (this.duel.DOUBLE_POINTS) {
			nb += nb;
		}

		if (this.duel.POOPOO_UNIVERSE) {
			nb = 0;
		}

		addWinCounter(this, nb);
	}

	getOppName() {
		if (this.duel.EVENT_BOSS && this.duel.REVERSE_DAMAGE <= 0) {
			return this.duel.CURRENT_BOSS;
		}
		return this.duel.getOppOf(this).getName();
	}

	hasSynergy(_synergy) {
		if (this.forcedSynergies.indexOf(_synergy) > -1) {
			return true;
		}
		if (this.godList.length >= GOD_LIST.length) { // PP Harem
			return true;
		}
		for (var i in _synergy) {
			for (var j in this.godList) {
				if (GOD_LIST.find(r => r.name == this.godList[j]) != undefined
				    && GOD_LIST.find(r => r.name == this.godList[j]).type == _synergy[i]) {
					continue;
				}
			}
			if (this.godList.indexOf(_synergy[i].name) < 0) {
				return false;
			}
		}
		return true;
	}

	resetBattleVariables() {
		this.bleedDamage = 0;
		this.turnSkip = 0;
		this.hasBoner = false;
		this.badLuck = false;
		this.isSalty = false;
		this.meltingDamage = 0;
		this.madnessStacks = 0;
		// TODO keep up to date --> negative effects only
	}
}

var City = class extends Fighter {
	constructor(_mayor, _idDuel) {
		if (_mayor == undefined) { // default constructor
			return;
		}
		super(_mayor.idUser, _idDuel);

		this.STRValue = 2000;
		this.DEXValue = 0;
		this.godList = [];

		this.mayor = _mayor; // Fighter class
		this.customName = null;
		this.attackedThisTurn = false;

		this.familiarShrine = false;
		this.junkShrine = false;
		this.glassShrine = false;
		this.diceShrine = false;
		this.angelShrine = false;
		this.peaceShrine = false;
		this.yvShrine = false;
		this.heroShrine = false;
		this.cleanseShrine = false;
		this.bloodShrine = false;
		this.beholsterShrine = false;
		this.ammoShrine = false;
		this.challengeShrine = false;
		this.blankShrine = false;

		this.junkCount = 0;
		this.alphaBullets = false;
		this.omegaBullets = false;
		this.hotLead = false;
		this.ghostBullets = false;
		this.silverBullets = false;

		this.lastSummonValue = 0;
		this.debuffFire = 0;
		this.armyResurectionCountdown = 0;
		this.serJunkan = false;
		this.kaijuHP = 0;

		this.militaryPower = 0;
		this.militaryPowerSave = 0;
		this.resetArmy();
	}

	get STR() {
		var str = super.STR + this.junkCount*200;

		if (this.peaceShrine) {
			str += 500;
		}
		if (this.angelShrine) {
			str += 500;
		}

		return str;
	}

	toString() {
		var embedMessage = new DISCORD.MessageEmbed();
		embedMessage.setColor("RANDOM");
		embedMessage.setTitle("**" + this.getName() + "**\n");
		embedMessage.setThumbnail(this.user.displayAvatarURL());

		// SPECIAL CASES
		if (this.duel.MOVE_COUNT >= 10000) {
			return embedMessage.setDescription(" - Wiped out").toJSON();
		}

		// STATS
		var statsTxt = "**STR:** " + this.STR;
		if (this.STR == 69) {
			statsTxt += " (lmao)";
		}
		embedMessage.setDescription(statsTxt);


		// BUILDINGS
		var buildingTxt = "";
		if (this.familiarShrine) {
			buildingTxt += " - Familiar Shrine\n";
		}
		if (this.junkShrine) {
			buildingTxt += " - Junk Shrine\n";
		}
		if (this.glassShrine) {
			buildingTxt += " - Glass Shrine\n";
		}
		if (this.diceShrine) {
			buildingTxt += " - Dice Shrine\n";
		}
		if (this.angelShrine) {
			buildingTxt += " - Angel Shrine\n";
		}
		if (this.peaceShrine) {
			buildingTxt += " - Peace Shrine\n";
		}
		if (this.yvShrine) {
			buildingTxt += " - YV Shrine\n";
		}
		if (this.heroShrine) {
			buildingTxt += " - Hero Shrine\n";
		}
		if (this.cleanseShrine) {
			buildingTxt += " - Cleanse Shrine\n";
		}
		if (this.bloodShrine) {
			buildingTxt += " - Blood Shrine\n";
		}
		if (this.beholsterShrine) {
			buildingTxt += " - Beholster Shrine\n";
		}
		if (this.ammoShrine) {
			buildingTxt += " - Ammo Shrine\n";
		}
		if (this.challengeShrine) {
			buildingTxt += " - Challenge Shrine\n";
		}
		if (this.blankShrine) {
			buildingTxt += " - Blank Shrine\n";
		}
		if (buildingTxt != "") embedMessage.addField("Buildings", buildingTxt, true);

		// STATUS
		statusTxt = ""
		if (this.kaijuHP > 0) {
			statusTxt += " - **Kaiju HP: " + this.kaijuHP + "**\n";
		}
		if (this.debuffFire > 0) {
			statusTxt += " - Burning (for " + this.debuffFire + " turns)\n";
		}
		if (this.armyResurectionCountdown > 0) {
			statusTxt += " - Army Resurection in " + this.armyResurectionCountdown + " turns\n";
		}
		if (this.junkCount > 0) {
			statusTxt += " - Junks: " + this.junkCount + "\n";
		}
		if (this.glassGuonStones > 0) {
			statusTxt += " - Glass Guon Stones: " + this.glassGuonStones + "\n";
		}
		if (this.redGuonStones > 0) {
			statusTxt += " - Red Guon Stones: " + this.redGuonStones + "\n";
		}
		if (this.greenGuonStones > 0) {
			statusTxt += " - Green Guon Stones: " + this.greenGuonStones + "\n";
		}
		if (this.serJunkan) {
			statusTxt += " - Ser Junkan\n";
		}
		if (this.alphaBullets) {
			statusTxt += " - Alpha Bullet\n";
		}
		if (this.omegaBullets) {
			statusTxt += " - Omega Bullets\n";
		}
		if (this.hotLead) {
			statusTxt += "\n - Hot Lead\n";
		}
		if (this.ghostBullets) {
			statusTxt += "\n - Ghost Bullets\n";
		}
		if (this.silverBullets) {
			statusTxt += "\n - Silver Bullets\n";
		}
		if (statusTxt != "") embedMessage.addField("Status", statusTxt, true);

		// Army
		if (this.militaryPower > 0) {
			var txt = "";
			if (this.armyJammed) {
				txt += "\n - **Jammed**";
			}
			if (this.armyAgony > 0) {
				txt += "\n - Army Agony Countdown: " + this.armyAgony;
			}
			if (this.armyResurrects) {
				txt += "\n - Undead Army";
			}
			if (this.armyPiercing) {
				txt += "\n - Phasing Damages";
			}
			if (this.armyMindControl) {
				txt += "\n - Mind Control";
			}
			if (this.armyBlessing) {
				txt += "\n - Eldritch Blessing";
			}
			if (this.armyBouncing) {
				txt += "\n - Bouncing Attacks";
			}
			if (this.armyDefence) {
				txt += "\n - Highly Defensive";
			}
			if (this.armyUnstable) {
				txt += "\n - Unstable";
			}
			embedMessage.addField("Military Power: " + this.militaryPower, txt, true);
		}

		return embedMessage;
	}
	getName() {
		if (this.customName == null) {
			return super.getName() + " City";
		}
		return this.customName;
	}

	turnChange() {
		super.turnChange();

		this.debuffFire -= 1;
		this.armyResurectionCountdown -= 1;
		this.armyAgony -= 1;

		if (this.kaijuHP > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " is damaged by the kaiju!");
			this.damage(150, false);
		}
		if (this.debuffFire > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " burns!");
			this.damage(100, false);
		}
		if (this.armyAgony == 1) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + "'s agony has ended!");
			this.resetArmy();
		}
		if (this.armyResurectionCountdown == 1) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " gets back his undead army!");
			this.militaryPower += this.militaryPowerSave;
			this.militaryPowerSave = 0;
		}
		if (this.yvShrine && getRandomPercent() <= 25) {
			this.duel.addMessage("-----------------");
			this.heal(100);
		}

		this.duel.addMessage("-----------------");
		this.mayor.turnChange();
	}

	resetArmy() {
		this.militaryPowerSave += this.militaryPower;
		this.militaryPower = 0;

		if (this.armyResurrects) {
			this.armyResurectionCountdown = 4;
		}

		this.armyResurrects = false;
		this.armyJammed = false;
		this.armyPiercing = false;
		this.armyMindControl = false;
		this.armyBlessing = false;
		this.armyAgony = 0;
		this.armyBouncing = false;
		this.armyDefence = false;
		this.armyUnstable = false;

		this.glassGuonStones = 0;
		this.redGuonStones = 0;
		this.greenGuonStones = 0;
	}

	getTotalDefBonus() {
		var def = this.glassGuonStones*40 + this.redGuonStones*20 + this.greenGuonStones*20;
		if (this.serJunkan) {
			def += 40*this.junkCount;
		}
		return def;
	}
}
