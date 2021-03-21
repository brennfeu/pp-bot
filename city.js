require("./fighter.js");

class City extends Fighter {
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
		if (this.duel.MOVE_COUNT >= 10000) {
			return "**" + this.getName() + "**\n - Wiped out";
		}

		var txt = "**" + this.getName();
		txt += "\n(" + this.guildUser.user.username + ")";

		txt += "\nSTR :** " + this.STR;
		if (this.STR == 69) {
			txt += " (lmao)";
		}

		// powers
		txt += "\n\n**Buildings :**";
		if (this.familiarShrine) {
			txt += "\n - Familiar Shrine";
		}
		if (this.junkShrine) {
			txt += "\n - Junk Shrine";
		}
		if (this.glassShrine) {
			txt += "\n - Glass Shrine";
		}
		if (this.diceShrine) {
			txt += "\n - Dice Shrine";
		}
		if (this.angelShrine) {
			txt += "\n - Angel Shrine";
		}
		if (this.peaceShrine) {
			txt += "\n - Peace Shrine";
		}
		if (this.yvShrine) {
			txt += "\n - YV Shrine";
		}
		if (this.heroShrine) {
			txt += "\n - Hero Shrine";
		}
		if (this.cleanseShrine) {
			txt += "\n - Cleanse Shrine";
		}
		if (this.bloodShrine) {
			txt += "\n - Blood Shrine";
		}
		if (this.beholsterShrine) {
			txt += "\n - Beholster Shrine";
		}
		if (this.ammoShrine) {
			txt += "\n - Ammo Shrine";
		}
		if (this.challengeShrine) {
			txt += "\n - Challenge Shrine";
		}
		if (this.blankShrine) {
			txt += "\n - Blank Shrine";
		}

		// status
		txt += "\n\n**Status :**"
		if (this.kaijuHP > 0) {
			txt += "\n - **Kaiju HP : " + this.kaijuHP + "**";
		}
		if (this.debuffFire > 0) {
			txt += "\n - Burning (for " + this.debuffFire + " turns)";
		}
		if (this.armyResurectionCountdown > 0) {
			txt += "\n - Army Resurection in " + this.armyResurectionCountdown + " turns";
		}
		if (this.junkCount > 0) {
			txt += "\n - Junks : " + this.junkCount;
		}
		if (this.glassGuonStones > 0) {
			txt += "\n - Glass Guon Stones : " + this.glassGuonStones;
		}
		if (this.redGuonStones > 0) {
			txt += "\n - Red Guon Stones : " + this.redGuonStones;
		}
		if (this.greenGuonStones > 0) {
			txt += "\n - Green Guon Stones : " + this.greenGuonStones;
		}
		if (this.serJunkan) {
			txt += "\n - Ser Junkan";
		}
		if (this.alphaBullets) {
			txt += "\n - Alpha Bullet";
		}
		if (this.omegaBullets) {
			txt += "\n - Omega Bullets";
		}
		if (this.hotLead) {
			txt += "\n - Hot Lead";
		}
		if (this.ghostBullets) {
			txt += "\n - Ghost Bullets";
		}
		if (this.silverBullets) {
			txt += "\n - Silver Bullets";
		}

		// Army
		if (this.militaryPower > 0) {
			txt += "\n\n**Military Power : **" + this.militaryPower;
			if (this.armyJammed) {
				txt += "\n - **Jammed**";
			}
			if (this.armyAgony > 0) {
				txt += "\n - Army Agony Countdown : " + this.armyAgony;
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
		}

		return txt;
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
			this.duel.addMessage(this.getName() + " is damaged by the kaiju !");
			this.damage(150, false);
		}
		if (this.debuffFire > 0) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " burns !");
			this.damage(100, false);
		}
		if (this.armyAgony == 1) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + "'s agony has ended !");
			this.resetArmy();
		}
		if (this.armyResurectionCountdown == 1) {
			this.duel.addMessage("-----------------");
			this.duel.addMessage(this.getName() + " gets back his undead army !");
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
