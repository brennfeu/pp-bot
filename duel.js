var Duel = class {
	constructor(_easyDuel = false) {
		this.DEAD_DUEL = false;
		this.LIST_MESSAGES = [];
		this.LIST_MESSAGES_OTHER = [];
		this.INFINITE_DAMAGE = 0;
		this.TIMESTAMP = +new Date();
		this.LIST_AVAILABLE_ATTACKS = [];
		this.LAST_EMOTE_MESSAGE = null;

		this.FIGHTER1_SAVE = null;
		this.FIGHTER2_SAVE = null;
		this.CURRENT_FIGHTER = null;
		this.LAST_FIGHTER_TO_USE_A_MOVE = null;

		this.FORCE_EVENT_ID = 0;
		this.EASY_DUEL = _easyDuel;
		this.CURRENT_BATTLE_MODE = NORMAL_BATTLE_MODE;

		this.TIME_STOP_ID = 0;
		this.TIME_STOP = 0;
		this.TIME_COMPRESSION = 0;
		this.TIME_BREAK = 0;

		this.NO_MESSAGE = 0;
		this.MESSAGE_SKIP = 0;

		this.UWU_TEXT = false;
		this.GOD_TEXT = 0;
		this.YES_TEXT = 0;
		this.SEXY_TEXT = 0;
		this.RUSSIAN_TEXT = 0;
		this.SPOIL_TEXT = 0;
		this.CHRISTIAN_TEXT = false;

		this.MOVE_COUNT = 0;
		this.DAMAGE_COUNT = 0;
		this.MOVE_COUNT_TURN = 0;

		this.AREA = null;
		this.RELIC_TREASURE = RELIC_LIST.slice();

		this.ILLEGAL_BOMBING = false;
		this.BOREAL_WORLD = false;
		this.BLIND_COUNTDOWN = 0;
		this.STEEL_PROTECTION = false;
		this.BARREL_DAMAGE = false;
		this.SAVE_LIST = [];
		this.STOPPED_MOVE_LIST = [];
		this.FORCE_EVENT = false;
		this.REVERSE_DAMAGE = -1;
		this.GAY_TURNS = 0;
		this.ILLEGAL_JEWS = false;
		this.ATTACK_MISS_COUNTDOWN = 0;
		this.AUTO_MOVES_COUNTDOWN = 0;
		this.NUCLEAR_BOMB = 0;
		this.PP_NET = 0;
		this.CHECKPOINT_DUEL = null;
		this.KIDNEY_CURSE = 0;
		this.ALTERNATE_MOVES = false;
		this.OBAMIUM_DONE = false;
		this.TRIGGERED_CHAOS = false;
		this.DOUBLE_POINTS = false;
		this.MONGO_HOTNESS = 0;
		this.PUDDING_NUISANCE = -1;
		this.STORM_COUNTDOWN = 0;
		this.DARKNESS_COUNTDOWN = 0;
		this.REVERSED_GRAVITY = false;
		this.POOPOO_UNIVERSE = false;
		this.ADDITIONAL_FIGHT = 0;

		this.PP_ARMAGEDDON = false;
		this.INFERNAL_FIRELAND = false;
		this.EVENT_PP_ENLIGHTENMENT = false;
		this.EVENT_PP_PURGE = false;
		this.EVENT_CONFUSION = false;
		this.EVENT_BLOOD_MOON = false;
		this.EVENT_PP_EQUALITY = false;
		this.EVENT_MEGA_POOL = false;
		this.EVENT_DEPRESSION = false;
		this.EVENT_BOMB = false;
		this.ESPINOZA_CHOICE = "";
		this.OBAMIUM = false;

		this.EVENT_BOSS = null;

		this.FORCE_PERHAPS = false;
		this.FORCE_SATAN = false;
	}
	startDuel(_message, _alone = false) {
		this.BATTLE_CHANNEL = _message.channel;
		this.GUILD = this.BATTLE_CHANNEL.guild;
		this.TUTORIAL = false;

		this.AUDIO_CHANNEL = null;
		this.CURRENT_THEME = null;

		if (getRandomPercent() < 10) {
			this.addMessage("**TIME FOR A D-D-D-D-D-D-DUEL**");
		}
		else {
			this.addMessage("**TIME FOR A DUEL**");
		}

		this.FIGHTER1 = new Fighter(_message.author.id, this.BATTLE_CHANNEL.id);
		if (!_alone) {
			this.FIGHTER2 = new Fighter(_message.mentions.users.last().id, this.BATTLE_CHANNEL.id);
		}
		else {
			this.FIGHTER2 = new Fighter(CLIENT.user.id, this.BATTLE_CHANNEL.id);
			this.FIGHTER2.STRValue = 100;
		}

		this.PPLEVEL = Math.min(getWinCounter(this.FIGHTER1.idUser), getWinCounter(this.FIGHTER2.idUser));
		this.addMessage("PP Level: " + this.PPLEVEL);

		while (this.AREA == null) {
			var randomArea = randomFromList(AREA_LIST);
			if (this.PPLEVEL >= randomArea.minLevel) this.AREA = randomArea;
		}
		this.addMessage("", undefined, { embed:
			{
				"title": "Terrain: " + this.AREA.name,
				"description": this.AREA.description,
				"image": { "url": this.AREA.imageLink }
			}
		})

		if (this.PPLEVEL <= 50 || this.EASY_DUEL) {
			this.bothFightersAction(function(_fighter) {
				_fighter.godList = [];
			});
		}
		if (this.AREA == AREA_PP6) this.FORCE_EVENT_ID = 35;
		if (this.AREA == AREA_PP8 || this.AREA == AREA_PP11) this.INFERNAL_FIRELAND = true;
		if (this.AREA == AREA_PP9 || this.AREA == AREA_PP10 || this.AREA == AREA_PP11) this.PP_ARMAGEDDON = true;

		if (this.FIGHTER1.guildUser.roles.cache.find(r => r.name == PP_SKIPPER_ROLE) && this.FIGHTER2.guildUser.roles.cache.find(r => r.name == PP_SKIPPER_ROLE)) {
			this.MESSAGE_SKIP = true;
		}

		// Wild Start
		if (this.PPLEVEL > 50 && getRandomPercent() <= 5) {
			this.addMessage("", undefined, {embed:
				{
					"title": "**WILD START**",
					"description": "Let's make things a bit more interesting!"
				}
			});
			this.REVERSE_DAMAGE = 1;
			this.NUCLEAR_BOMB = 1;
		}
		// Christian
		if (this.AREA == AREA_PP5) this.CHRISTIAN_TEXT = true;
		if (this.PPLEVEL > 50 && getRandomPercent() <= 10 && !this.CHRISTIAN_TEXT) {
			this.addMessage("", undefined, {embed:
				{
					"title": "**CHRISTIAN GAME**",
					"description": "Let's be a bit more friendly for Timmy!"
				}
			});
			this.CHRISTIAN_TEXT = true;
		}
		// Weeb
		var weebPercent = 10;
		if (this.AREA == AREA_PP1) weebPercent = 80;
		if (this.PPLEVEL > 50 && getRandomPercent() <= weebPercent) {
			var bossWeeb = new WeebBoss(this);
			this.addMessage("", undefined, {embed:
				{
					"title": "**WEEB**",
					"description": bossWeeb.getName() + " challenges you!",
					"image": { "url": IMAGE_PP7	}
				}
			});
			this.triggerBossFight(bossWeeb)
		}
		// Nuisance
		if (this.PPLEVEL > 50 && getRandomPercent() <= 5) {
			this.addMessage("", undefined, {embed:
				{
					"title": "**ROOT OF NUISANCE**",
					"description": "Pudding just wants to harass you during the battle!",
					"image": { "url": IMAGE_PP8	}
				}
			});
			this.PUDDING_NUISANCE = Math.floor(getRandomPercent()/10) + 1;
		}

		// Ram Ranch
		if (this.AREA == AREA_PP7 || this.FIGHTER1.hasSynergy(SYNERGY_PP23) || this.FIGHTER2.hasSynergy(SYNERGY_PP23)) {
			this.addMessage("", undefined, {embed:
				{
					"title": "**RAM RANCH**",
					"description": "*Eighteen naked cowboys in the showers at Ram Ranch.\nBig hard throbbing cocks wanting to be sucked.\nEighteen naked cowboys wanting to be fucked.\nCowboys in the showers at Ram Ranch.\nOn their knees wanting to suck cowboy cocks.\nRam Ranch really rocks.*"
				}
			});
			this.allFightersAction(function(_fighter) {
				_fighter.hasBoner = true;
			});
		}

		this.newTurnDuel();
	}
	stopDuel() {
		this.EVENT_BOSS = null;
		this.DEAD_DUEL = true;

		this.sendMessages();
		if (this.CHECKPOINT_DUEL != null) return;

		this.addMessage("**===== RECAP =====**");
		this.addMessage("**===== CURRENT STATE =====**");
		this.addMessage("", true, {embed: this.FIGHTER1.toString()});
		this.addMessage("", true, {embed: this.FIGHTER2.toString()});
		this.addMessage("**===== SOME STATS =====**");
		var txt = "- Total Move Count: " + this.MOVE_COUNT;
		if (this.MOVE_COUNT == 69) {
			txt += " (hahaha)";
		}
		txt += "\n- Total Inflicted Damage: " + this.DAMAGE_COUNT;
		if (this.DAMAGE_COUNT == 69) {
			txt += " (hahaha)";
		}
		this.addMessage(txt);
		this.sendMessages();

		if (this.AUDIO_CHANNEL != null) {
			// TODO play an end theme before leaving ?
			this.AUDIO_CHANNEL.leave();
		}
	}
	startTutorial(_message) {
		this.BATTLE_CHANNEL = _message.channel;
		this.GUILD = this.BATTLE_CHANNEL.guild;
		this.TUTORIAL = true;
		this.NB_TURNS = 0;

		this.FIGHTER1 = new Fighter(_message.author.id, this.BATTLE_CHANNEL.id);
		this.FIGHTER1.godList = [];
		this.FIGHTER1.isBigPP = false;
		this.FIGHTER1.isFastPP = true;
		this.FIGHTER1.isDrunkPP = false;
		this.FIGHTER1.isHockeyPuckPP = false;
		this.FIGHTER1.isAlienPP = true;
		this.FIGHTER1.riotShield = true;
		this.FIGHTER2 = new Fighter(CLIENT.user.id, this.BATTLE_CHANNEL.id);

		this.PPLEVEL = getWinCounter(this.FIGHTER1.idUser);

		this.addMessage("**TIME FOR A TUTORIAL**");
		this.addMessage("Welcome to the PP Punch Arena!\nThis bot allows you to play PP Punch Duels in discord. It's actually an rpg strategy fighting game!");
		this.addMessage("First, let me teach you about the fighters.");
		this.addMessage("", true, {embed: this.FIGHTER1.toString()});
		this.addMessage("As you can see, there are only 2 stats in the game: **STR** and **DEX**.");
		this.addMessage("**STR** is about how strong you can punch PP. The more you have, the more damage your punches will deal. It's also your **HP**, which means that getting it below 0 has the side effect of making you not being alive anymore (and thus, losing the duel).");
		this.addMessage("-----------------");
		this.addMessage("**DEX** is about the likeliness to land your hits. Each turn, each fighter selects a move. Then, there is **DEX random roll** based on their current DEX. If both fighters' results are close enough, both fighters use their move. Else, only the one with the higher DEX roll result do.");
		this.addMessage("When you miss a move, you get +5 DEX stackable effect. The effects gets discarded when you finally manage to land a move.");
		this.addMessage("-----------------");
		this.addMessage("Each move has specific actions, and only 5 are allowed for 1 turn.");
		this.addMessage("It looks like this:");
		this.sendMessages();

		this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction!").then(function (_message2) {
			var _list = [ EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5 ];
			for (var i in _list) {
				_message2.react(_list[i]);

				var txt = `${getEmote(_list[i])} `;
				txt += MOVE_HELP[_list[i]];
				_message2.channel.send(txt);
			}
		}).catch(function(e) {console.log(e);});
	}
	tutorialNextTurn() {
		this.NB_TURNS += 1;

		if (this.NB_TURNS == 1) {
			this.addMessage("-----------------");
			if ([EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Cheating already? If this were a real duel, you could have been caught and suffered the consequences!");
				this.addMessage("Anyway, now you know how to choose a move.");
			}
			else {
				this.addMessage("Now you know how to choose a move. You can also try to cheat by reacting with another emote, but you can get caught cheating.");
			}
			this.addMessage("Let's get back to the fighters.");
			this.addMessage("", true, {embed: this.FIGHTER1.toString()});
			this.addMessage("**Fighting styles** are permanent effects you starts with, depending on your choice. Using the '*@PP_Arbitrator custom*' command allows you to choose your fighting styles.");
			this.addMessage("**Status** are effects you get during the battle. Some are good to get, some aren't. Some are permanent, some aren't.");
			this.addMessage("-----------------");
			this.addMessage("Here are some moves that grants effects to you and/or the opponent:");
			this.sendMessages();

			this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction!").then(function (_message2) {
				var _list = [ EMOTE_PP7, EMOTE_PP17, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22 ];
				for (var i in _list) {
					_message2.react(_list[i]);

					var txt = `${getEmote(_list[i])} `;
					txt += MOVE_HELP[_list[i]];
					_message2.channel.send(txt);
				}
			}).catch(function(e) {console.log(e);});
		}
		else if (this.NB_TURNS == 2) {
			this.addMessage("-----------------");
			if ([EMOTE_PP7, EMOTE_PP17, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22].indexOf(this.FIGHTER1.attack) < 0) {
				this.addMessage("Come on, there's no point cheating, it's the tutorial!");
				this.addMessage("-----------------");
			}
			this.addMessage("Winning a fight grants a certain amount of **PP Points**. When a duel starts, its **PP Level** is determined by the lowest PP Points count of both fighters.");
			this.addMessage("When the **PP Level** reaches certain values, additional game mechanics are unlocked, starting at level 50.");
			this.addMessage("-----------------");

			if (this.PPLEVEL < 50) {
				this.addMessage("You may come back to the tutorial once you reach 50 PP Points to learn about **Gods**!");
				return this.tutorialNextTurn();
			}

			this.addMessage("One of those new mechanics are **Gods**!");
			this.addMessage("You can have up to 3 gods when starting a duel. It works the same way as fighting styles, except their use is different.");
			this.addMessage("You can call your **gods** powers using a charge you get with events. There are 2 kind of charges: **regular** and **special**, each calling all your gods' **regular** or **special** moves.");
			this.addMessage("There are some **Gods Synergies** that grants permanent effects.");
			this.addMessage("-----------------");
			this.addMessage("Let's say you are a Priest of **700IQ**, **Salt King** and **Brenn**.");
			this.addMessage("I'm gonna give you a charge of each kind. Your gods only appear if you have at least one charge.");
			this.FIGHTER1.godList = [GOD_PP13.name, GOD_PP18.name, GOD_PP9.name];
			this.FIGHTER1.regularCharges = 1;
			this.FIGHTER1.specialCharges = 1;
			this.addMessage("", true, {embed: this.FIGHTER1.toString()});
			this.addMessage("This god combination gave you a synergy. This one makes sure that you can't get below 0 **DEX**.");
			this.addMessage("Here are the moves that allows you to unleash your **Gods**:");
			this.sendMessages();

			this.BATTLE_CHANNEL.send("\n\nChoose your attack with a reaction!").then(function (_message2) {
				var _list = [ EMOTE_PP51, EMOTE_PP52 ];
				for (var i in _list) {
					_message2.react(_list[i]);

					var txt = `${getEmote(_list[i])} `;
					txt += MOVE_HELP[_list[i]];
					_message2.channel.send(txt);
				}
			}).catch(function(e) {console.log(e);});
		}
		else if (this.NB_TURNS == 3) {
			this.addMessage("-----------------");
			this.addMessage("Now you know part of the theory!\nThe **PP Bible** can help you if you feel lost about something: https://github.com/brennfeu/pp-bot/wiki/PP-Bible");
			this.addMessage("The PP Puncher discord server also features the bible, and enhances it by displaying the emojis used by the bot.\nYou can join it here: https://discord.gg/BsYfmjG");
			this.addMessage("Regarding actual practice, it's way easier and more fun to learn through playing with a friend, but you can also challenge the 'AI' using the training command!");
			this.addMessage("-----------------");
			this.addMessage("That's it, the tutorial is over! I hope you have fun with this bot! :)");
			this.sendMessages();

			this.DEAD_DUEL = true;
		}

		this.FIGHTER1.attack = "";
	}

	addMessage(_texte, _forceAppear = false, _other = undefined) {
		if (_texte == undefined && _other == undefined) {
			console.log("Empty message at:");
			console.trace();
			return;
		}

		// numbers scientific notation
		_texte = sciText(_texte);

		// UwU mode
		var uwu = this.UWU_TEXT || this.POOPOO_UNIVERSE;
		for (var i in IMAGE_LIST) {
			if (_texte.includes(IMAGE_LIST[i])) {
				uwu = false;
			}
		}

		if (uwu) {
			_texte = changeTextUwu(_texte);

			if (this.POOPOO_UNIVERSE) {
				_texte = changeTextPoopoo(_texte);
			}

			if (this.RUSSIAN_TEXT > 0 || this.POOPOO_UNIVERSE) {
				_texte = changeTextRussian(_texte);
			}
			if (this.GOD_TEXT > 0 || this.POOPOO_UNIVERSE) {
				_texte = changeTextRandomCap(_texte);
			}
			if (this.YES_TEXT > 0 || this.POOPOO_UNIVERSE) {
				_texte = changeTextLeet(_texte);
			}
			if (this.SPOIL_TEXT > 0 || this.POOPOO_UNIVERSE) {
				_texte = changeTextRandomSpoil(_texte);
			}
		}
		if (this.CHRISTIAN_TEXT) {
			_texte = changeTextChristian(_texte);
		}
		if (this.INFERNAL_FIRELAND && getRandomPercent() <= 5) {
			_texte += "\n**IT'S AN INFERNAL FIRELAND**"
		}
		if (this.MESSAGE_SKIP && !_forceAppear) {
			return;
		}
		if (this.LIST_MESSAGES.length > 0 && this.LIST_MESSAGES_OTHER[this.LIST_MESSAGES.length-1] == undefined &&
          _texte.length + this.LIST_MESSAGES[this.LIST_MESSAGES.length-1].length + "\n".length < 20*this.LIST_MESSAGES.length &&
          _texte.length + this.LIST_MESSAGES[this.LIST_MESSAGES.length-1].length + "\n".length < 2000) {
			this.LIST_MESSAGES[this.LIST_MESSAGES.length-1] = this.LIST_MESSAGES[this.LIST_MESSAGES.length-1] + "\n" + _texte;
			this.LIST_MESSAGES_OTHER[this.LIST_MESSAGES.length-1] = _other;
		}
		else {
			this.LIST_MESSAGES.push(_texte);
			this.LIST_MESSAGES_OTHER.push(_other);
		}
	}
	sendMessages(_max = 20) {
		if (this.NO_MESSAGE <= 0 || this.TIME_STOP > 0) {
			for (var i in this.LIST_MESSAGES) {
				this.BATTLE_CHANNEL.send(this.LIST_MESSAGES[i], this.LIST_MESSAGES_OTHER[i]).then(async function (_message2) {
					getDuel(_message2.channel.id).TIMESTAMP = + new Date();
				}).catch(function(e) {});
			}
		}
		this.LIST_MESSAGES = [];
		this.LIST_MESSAGES_OTHER = [];
	}

	newTurnDuel() {
		this.sendMessages();
		this.TIME_STOP -= 1;

		if (this.TIME_STOP <= 0  && getRandomPercent() <= this.TIME_BREAK) {
			this.addMessage("**Time breaks!**");
			this.TIME_STOP = 1;
		}

		if (this.TIME_STOP > 0) {
			this.STOPPED_MOVE_LIST = this.LIST_AVAILABLE_ATTACKS;
			this.FIGHTER1.attack = "";
			this.FIGHTER2.attack = "";
		}
		else {
			var nbTurnChanges = 1;
			if (this.TIME_COMPRESSION > 0) {
				nbTurnChanges = 3;
			}

			this.TIME_COMPRESSION -= 1;

			for (var nbTurn = 0; nbTurn < nbTurnChanges; nbTurn++) {
				if (nbTurn == 0) {
					this.sendMessages();
				}

				this.NO_MESSAGE -= 1;
				this.GOD_TEXT -= 1;
				this.YES_TEXT -= 1;
				this.SEXY_TEXT -= 1;
				this.RUSSIAN_TEXT -= 1;
				this.SPOIL_TEXT -= 1;

				this.allFightersAction(function(_fighter) {
					if (_fighter.pushedDamages > 0) {
						_fighter.duel.addMessage("-----------------");
						_fighter.damage(_fighter.pushedDamages, false);
						_fighter.pushedDamages = 0;
					}
				});

				this.NUCLEAR_BOMB -= 1;
				this.PUDDING_NUISANCE -= 1;

				if (this.NUCLEAR_BOMB == 0) {
					this.addMessage("-----------------");
					this.addMessage("The Nuclear Bomb explodes now!\n" + IMAGE_PP1);
					this.allFightersAction(function(_fighter) {
						_fighter.damage(1000000000, false);
					});
				}
				if (this.EVENT_BOMB) {
					this.addMessage("-----------------");
					this.addMessage("The bomb hits the ground!");
					this.allFightersAction(function(_fighter) {
						_fighter.damage(1000, true, new FakeBoss(_fighter.duel, "Bombardier"));
					});
				}
				if (this.STORM_COUNTDOWN > 0) {
					this.addMessage("-----------------");
					var fighter = this.getRandomFighter();
					if (fighter.infernalInstrument == 1) {
						this.addMessage(fighter.getName() + " gets striked by lightning!");
						if (getRandomPercent() <= 5) {
							this.addMessage("*insert epic highlander high scream*");
						}
						this.addMessage(fighter.getName() + " gets " + (this.STORM_COUNTDOWN*2) + " quickening charges!");
						fighter.quickeningCharges += this.STORM_COUNTDOWN*2;
					}
					else {
						this.addMessage(this.getOppOf(fighter).getOppName() + " gets striked by lightning!");
						fighter.damage(40*this.STORM_COUNTDOWN);
					}
				}
				if (this.DARKNESS_COUNTDOWN > 0) {
					this.addMessage("-----------------");
					var fighter = this.getRandomFighter();
					this.addMessage(fighter.getName() + " gets touched by the darkness!");
					if (fighter.infernalInstrument == 2) {
						this.addMessage(fighter.getName() + " gets " + (this.DARKNESS_COUNTDOWN*2) + " DEX!");
						fighter.DEXValue += this.DARKNESS_COUNTDOWN*2;
					}
					else {
						fighter.madnessStacks += this.DARKNESS_COUNTDOWN*2;
						this.addMessage(fighter.getName() + " gets " + (this.DARKNESS_COUNTDOWN*2) + " madness stacks!");
					}
				}
				if (this.PUDDING_NUISANCE == 0) {
					if (this.EVENT_BOSS != null) {
						this.addMessage(this.EVENT_BOSS.getName() + "'s boss fight is canceled by Pudding.");
					}
					this.triggerBossFight(new PuddingBlobBoss(this));
					this.addMessage("-----------------");
					this.addMessage("A Pudding Blob has been created!");
				}
				if (this.POOPOO_UNIVERSE) {
					this.allFightersAction(function(_fighter) {
						if (!_fighter.eldritchFriend) _fighter.madnessStacks += 1;
					});
					if (getRandomPercent() <= 13) {
						this.FORCE_EVENT_ID = 37; // PP Depression
					}
					else if (getRandomPercent() <= 25) {
						this.FORCE_EVENT_ID = 26; // Tragedy
					}
				}
				for (var i = 0; i++; i < this.ADDITIONAL_FIGHT) this.MOVE_COUNT += 1+Math.floor(this.MOVE_COUNT*getRandomPercent()/10000);

				// Blood Moon Save
				if (this.EVENT_BLOOD_MOON) {
					this.allFightersAction(function(_fighter) {
						if (_fighter.STR <= 0) {
							this.addMessage("-----------------");
							_fighter.DEXValue += (0 - _fighter.STR) + 10;
							_fighter.STRValue += (0 - _fighter.STR) + 10;
							_fighter.duel.addMessage(_fighter.getName() + " got saved thanks to the Blood Moon");
						}
					});
				}

				// Bosses
				if (this.EVENT_BOSS != null) {
					if (this.EVENT_BOSS.STR > 0) { // boss attacks
						this.addMessage("-----------------");
						this.EVENT_BOSS.triggerBossAttack();
					}

					if (this.EVENT_BOSS.STR <= 0) { // boss dies
						this.addMessage("-----------------");
						this.EVENT_BOSS.triggerDeath();
					}
					else { // boss turn change
						this.EVENT_BOSS.turnChange();
					}
				}

				this.bothFightersAction(function(_fighter) {
					_fighter.turnChange();
				});
				this.allFightersAction(function(_fighter) {
					// Overcircumcised = immune to status effects
					if (_fighter.isOverCircumcised) _fighter.resetBattleVariables()
				});

				this.STEEL_PROTECTION = false;
				this.BARREL_DAMAGE = false;
				this.SAVE_LIST = [this.FIGHTER1.user.id, this.FIGHTER2.user.id];
				this.BLIND_COUNTDOWN -= 1;
				this.INFINITE_DAMAGE = 0;
				this.DISABLE_ABANDON = false;
				this.REVERSE_DAMAGE -= 1;
				this.GAY_TURNS -= 1;
				this.ATTACK_MISS_COUNTDOWN -= 1;
				this.AUTO_MOVES_COUNTDOWN -= 1;
				this.MOVE_COUNT_TURN = 0;

				// Reset events
				this.EVENT_PP_ENLIGHTENMENT = false;
				this.EVENT_PP_PURGE = false;
				this.EVENT_CONFUSION = false;
				this.EVENT_BLOOD_MOON = false;
				this.EVENT_PP_EQUALITY = false;
				this.EVENT_MEGA_POOL = false;
				this.EVENT_DEPRESSION = false;
				this.EVENT_BOMB = false;
				this.ESPINOZA_CHOICE = "";

				if (nbTurn+1 < nbTurnChanges) {
					this.sendMessages();
				}

				// events
				if (!this.EASY_DUEL) this.startRandomEvent();
			}
			this.sendMessages();
		}

		this.checkDeath();
		if (this.DEAD_DUEL) return;

		if (this.INFERNAL_FIRELAND) { // Give back instrument if needed (new life, stand battle etc...)
			this.bothFightersAction(function(_fighter) {
				if (_fighter.infernalInstrument <= 0) {
					if (_fighter.duel.otherFighter(_fighter).infernalInstrument != 1) {
						_fighter.infernalInstrument = 1; // Guitar
					}
					else {
						_fighter.infernalInstrument = 2; // Synth
					}
				}
			});
		}

		this.addMessage("**=== NEW TURN ===**", true);
		this.sendMessages();
		if (this.EVENT_BOSS == null) {
			this.addMessage("", true, {embed: this.FIGHTER1.toString()});
			this.addMessage("**===== /VS/ =====**", true);
			this.addMessage("", true, {embed: this.FIGHTER2.toString()});
		}
		else {
			this.addMessage("", true, {embed: this.FIGHTER1.toString()});
			this.addMessage("", true, {embed: this.FIGHTER2.toString()});
			this.addMessage("**===== /VS/ =====**", true);
			this.addMessage("", true, {embed: this.EVENT_BOSS.toString()});
		}

		var txt = "**=== GLOBAL STATUS ===**\n";
		if (this.CHECKPOINT_DUEL != null) {
			txt += " - **Saved State**\n";
		}
		if (this.BLIND_COUNTDOWN > 0) {
			txt += " - WTF I'M FUCKING BLIND!";
			if (this.BLIND_COUNTDOWN < 100) {
				txt += " (for " + this.BLIND_COUNTDOWN + " turns)";
			}
			txt += "\n"
		}
		if (this.ADDITIONAL_FIGHT > 0) {
			txt += " - Additional Neighbourhood Battles";
			for (var i = 0; i < this.ADDITIONAL_FIGHT; i++) txt += "!";
			txt += "\n";
		}
		if (this.KIDNEY_CURSE > 0) {
			txt += " - Kidney Curse: " + this.KIDNEY_CURSE + "\n";
		}
		if (this.REVERSE_DAMAGE > 0) {
			txt += " - Damages and heals are reversed for " + this.REVERSE_DAMAGE + " turns!\n";
		}
		if (this.GAY_TURNS > 0) {
			txt += " - You are both gay for " + this.GAY_TURNS + " turns!\n";
		}
		if (this.ATTACK_MISS_COUNTDOWN > 0) {
			txt += " - Attacks are twice as powerful for " + this.ATTACK_MISS_COUNTDOWN + " turns!\n";
		}
		if (this.AUTO_MOVES_COUNTDOWN > 0) {
			txt += " - Both fighters always play for " + this.AUTO_MOVES_COUNTDOWN + " turns!\n";
		}
		if (this.NUCLEAR_BOMB > 0) {
			txt += " - The Nuclear Bomb will explode in " + this.NUCLEAR_BOMB + " turns!\n";
		}
		if (this.FORCE_EVENT) {
			txt += " - Events will occur every turns!\n";
		}
		if (this.ILLEGAL_JEWS) {
			txt += " - Minecraft Villager are illegal!\n";
		}
		if (this.EVENT_BLOOD_MOON) {
			txt += " - The Blood Moon is up in the sky!\n";
		}
		if (this.EVENT_PP_ENLIGHTENMENT) {
			txt += " - You can use moves that aren't in this turn's movepool!\n";
		}
		if (this.EVENT_PP_PURGE) {
			txt += " - Illegal moves are legal for this turn!\n";
		}
		if (this.EVENT_PP_EQUALITY) {
			txt += " - Moves have no DEX modifier for this turn!\n";
		}
		if (this.EVENT_BOMB) {
			txt += " - A bomb will explode next turn!\n";
		}
		if (this.REVERSED_GRAVITY) {
			txt += " - Gravity is reversed!\n";
		}
		if (this.BOREAL_WORLD) {
			txt += " - Boreal Fog is everywhere!\n";
		}
		if (this.STORM_COUNTDOWN > 0) {
			txt += " - Storm Power: " + this.STORM_COUNTDOWN + "\n";
		}
		if (this.DARKNESS_COUNTDOWN > 0) {
			txt += " - Eldritch Darkness Power: " + this.DARKNESS_COUNTDOWN + "\n";
		}
		if (this.PP_NET > 0 && this.PP_NET < 200) {
			txt += " - PP-Net Rising: Step " + this.PP_NET + "\n";
		}
		if (this.POOPOO_UNIVERSE) {
			txt += " - **ALTERNATE POOPOO UNIVERSE**\n";
		}
		else if (this.ALTERNATE_MOVES) {
			txt += " - **ALTERNATE PP UNIVERSE**\n";
		}
		if (this.INFERNAL_FIRELAND) {
			txt += " - **INFERNAL FIRELAND**\n";
		}
		if (this.PP_ARMAGEDDON) {
			txt += " - **PP ARMAGEDDON**\n";
		}
		if (this.TIME_STOP > 0) {
			txt += " - **TIME STOPPED FOR " + this.TIME_STOP + " TURNS**\n";
		}
		else if (this.TIME_COMPRESSION > 0) {
			txt += " - **TIME COMPRESSED FOR " + this.TIME_COMPRESSION + " TURNS**\n";
		}
		if (this.TIME_BREAK > 0) {
			txt += " - **TIME BREAKING PROBABILITY: " + this.TIME_BREAK + "%**\n";
		}
		txt += "Move Count: " + this.MOVE_COUNT;
		this.addMessage(txt);

		this.bothFightersAction(function(_fighter) {
			if (_fighter.STR <= 0) { // Stop if dead (cthulhu battle)
				_fighter.attack = EMOTE_DEAD;
				_fighter.STRValue = -10;
			}
			if (_fighter.duel.TIME_STOP > 0 && _fighter.duel.TIME_STOP_ID != _fighter.idUser) { // if weak --> skip time skip
				_fighter.attack = EMOTE_SKIP;
			}
		});

		if ((this.FIGHTER1.turnSkip > 0 || this.FIGHTER1.grabbedPP > 0 || this.FIGHTER1.summonTankCountdown == 1 || this.FIGHTER1.isPossessed > 0 || this.FIGHTER1.STR <= 0 || this.FIGHTER1.attack == EMOTE_SKIP) &&
		    (this.FIGHTER2.turnSkip > 0 || this.FIGHTER2.grabbedPP > 0 || this.FIGHTER2.summonTankCountdown == 1 || this.FIGHTER2.isPossessed > 0 || this.FIGHTER2.STR <= 0 || this.FIGHTER2.attack == EMOTE_SKIP)) {
			this.bothFightersAction(function(_fighter) {
				if (_fighter.summonTankCountdown == 1) {
					_fighter.playMove(EMOTE_PP10);
				}
				else if (_fighter.grabbedPP == 1) {
					_fighter.playMove(EMOTE_PP39);
				}
				else {
					_fighter.attack = EMOTE_SKIP;
				}
			});
			this.launchAttacks();
		}
		else {
			this.addMessage("**=== MOVE SELECT ===**", true);
			this.sendMessages();

			if (this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) {
				// HighFiveEmote - Stop move_list
				if (this.STOPPED_MOVE_LIST.length >= 1) {
					this.LIST_AVAILABLE_ATTACKS = this.STOPPED_MOVE_LIST;
					this.STOPPED_MOVE_LIST = [];
				}
				else {
					this.setRandomAttackList();
				}

				this.showMovepool();

				if (this.FIGHTER2.user.id == CLIENT.user.id) {
					this.botReacts();
				}
			}
			else {
				this.CURRENT_FIGHTER = this.getRandomFighter();
				this.setRandomAttackList();

				this.addMessage("**=== " + this.CURRENT_FIGHTER.getName() + " ===**", true);
				this.sendMessages();

				this.showMovepool();

				if (this.CURRENT_FIGHTER.user.id == CLIENT.user.id) {
					this.botReacts();
				}
			}
		}

		// Stop FORCE_SATAN
		if (getRandomPercent() <= 25) {
			this.FORCE_SATAN = false;
		}
	}
	showMovepool() {
		var gay = "";
		if (this.GAY_TURNS > 0) {
			gay = "opponent's ";
		}

		var sendEmotesFunction = function(_message2) {
			var duel = getDuel(_message2.channel.id);
			if (duel.MOVE_COUNT != this.moveCount) return;

			for (var i in duel.LIST_AVAILABLE_ATTACKS) {
				if (duel.LIST_AVAILABLE_ATTACKS[i] != EMOTE_DEAD && duel.LIST_AVAILABLE_ATTACKS[i] != EMOTE_SKIP) {
					_message2.react(duel.LIST_AVAILABLE_ATTACKS[i]);

					var txt = `${getEmote(duel.LIST_AVAILABLE_ATTACKS[i])} `;
					txt += MOVE_HELP[duel.LIST_AVAILABLE_ATTACKS[i]];

					_message2.channel.send(txt);
				}
			}
		}
		this.BATTLE_CHANNEL.send("Choose your " + gay + "attack with a reaction!")
			.then(sendEmotesFunction.bind({ moveCount: this.MOVE_COUNT }))
			.catch(function(e) { });
	}

	checkDeath() {
		this.bothFightersAction(function(_fighter) {
			if (_fighter.duel.otherFighter(_fighter).standPower == STAND_PP10 && _fighter.STR <= _fighter.DEX) {
				_fighter.duel.addMessage(_fighter.getName() + " is cursed by Illud Divinum Insanus!");
				_fighter.STRValue -= _fighter.STR+100;
			}
		});
		this.allFightersAction(function(_fighter) {
			if (_fighter.STR <= 0 && _fighter.extraLife > 0) {
				_fighter.duel.addMessage(_fighter.getName() + " uses an extra life!");
				var extra = _fighter.extraLife - 1;
				var stand = null;

				if (_fighter.standPower == STAND_PP8_1) {
					stand = STAND_PP8_2;
				}
				if (_fighter.standPower == STAND_PP8_2) {
					stand = STAND_PP8_1;
				}

				if (_fighter.idUser == _fighter.duel.FIGHTER1.idUser) {
					if (_fighter.extraLifeDuplication != null) {
						_fighter.duel.FIGHTER1 = _fighter.extraLifeDuplication;
						_fighter.duel.addMessage(_fighter.getName() + "'s temporal duplication replaces him!");
					}
					else {
						_fighter.duel.FIGHTER1 = new Fighter(_fighter.duel.FIGHTER1.idUser, _fighter.duel.BATTLE_CHANNEL.id, stand);
					}
					_fighter.duel.FIGHTER1.extraLife = extra;
					_fighter.duel.FIGHTER1.attack = "";
				}
                else if (_fighter.idUser == _fighter.duel.FIGHTER2.idUser) {
					if (_fighter.extraLifeDuplication != null) {
						_fighter.duel.FIGHTER2 = _fighter.extraLifeDuplication;
						_fighter.duel.addMessage(_fighter.getName() + "'s temporal duplication replaces him!");
					}
					else {
						_fighter.duel.FIGHTER2 = new Fighter(_fighter.duel.FIGHTER2.idUser, _fighter.duel.BATTLE_CHANNEL.id, stand);
					}
					_fighter.duel.FIGHTER2.extraLife = extra;
					_fighter.duel.FIGHTER2.attack = "";
				}
                else if (_fighter.idUser == _fighter.duel.EVENT_BOSS.idUser) {
					if (_fighter.extraLifeDuplication != null) {
						_fighter.duel.EVENT_BOSS = _fighter.extraLifeDuplication;
						_fighter.duel.addMessage(_fighter.getName() + "'s temporal duplication replaces him!");
					}
					else {
						_fighter.duel.EVENT_BOSS = new Fighter(_fighter.duel.EVENT_BOSS.idUser, _fighter.duel.BATTLE_CHANNEL.id, stand);
					}
					_fighter.duel.EVENT_BOSS.extraLife = extra;
					_fighter.duel.EVENT_BOSS.attack = "";
				}
			}
		});
		if (this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE && !(this.FIGHTER1.STR > 0 && this.FIGHTER2.STR > 0)) {
			if (this.FIGHTER1.STR <= 0) {
				this.FIGHTER2.mayor.hasSupplyDrops = true;
				this.addMessage("**" + this.FIGHTER1.getName() + " has been destroyed!**");
			}
			if (this.FIGHTER2.STR <= 0) {
				this.FIGHTER1.mayor.hasSupplyDrops = true;
				this.addMessage("**" + this.FIGHTER2.getName() + " has been destroyed!**");
			}

			var f1 = this.FIGHTER1.mayor;
			var f2 = this.FIGHTER2.mayor
			this.FIGHTER1 = f1;
			this.FIGHTER2 = f2;

			this.CURRENT_BATTLE_MODE = NORMAL_BATTLE_MODE;

			this.allFightersAction(function(_fighter) {
				_fighter.attack = "";
			});
		}
		else if (this.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE && !(this.FIGHTER1.STR > 0 && this.FIGHTER2.STR > 0)) {
			if (this.FIGHTER1.STR <= 0) {
				this.FIGHTER2_SAVE.quickeningCharges += 10;
				this.addMessage("**" + this.FIGHTER1.getName() + " has been defeated!**");

				if (this.FIGHTER1.standPower == STAND_PP3 || this.FIGHTER2.standPower == STAND_PP3) {
					this.FIGHTER2_SAVE.playMove(EMOTE_PP58);
				}
			}
			if (this.FIGHTER2.STR <= 0) {
				this.FIGHTER1_SAVE.quickeningCharges += 10;
				this.addMessage("**" + this.FIGHTER2.getName() + " has been defeated!**");

				if (this.FIGHTER1.standPower == STAND_PP3 || this.FIGHTER2.standPower == STAND_PP3) {
					this.FIGHTER1_SAVE.playMove(EMOTE_PP58);
				}
			}
			this.bothFightersAction(function(_fighter) {
				var _fighterSave = _fighter.duel.FIGHTER1_SAVE;
				if (_fighter.duel.FIGHTER2_SAVE.user.id == _fighter.user.id) _fighterSave = _fighter.duel.FIGHTER2_SAVE;

				if (_fighter.STR > 0) { // if won stand battle
					_fighterSave.standPower = _fighter.standPower;
					_fighterSave.requiemPower = _fighter.requiemPower;
					_fighterSave.randomizedStand = _fighter.randomizedStand; // Perfect Machine
					if (_fighter.standPower == STAND_PP8) { // Black Clouds & Silver Linings
						_fighterSave.extraLife = 1;
					}
					if (_fighter.standPower == STAND_PP12) { // Space Metal
						_fighterSave.quickeningCharges += 5;
					}
					if (_fighter.standPower == STAND_PP17) { // Titans of Creation
						_fighterSave.selfReverseDamage = 2;
					}
				}

				_fighterSave.relics = _fighterSave.relics.concat(_fighter.relics);
				if (_fighter.infernalInstrument > 0) {
					_fighterSave.infernalInstrument = _fighter.infernalInstrument;
				}
			});

			this.CURRENT_BATTLE_MODE = NORMAL_BATTLE_MODE;
			this.FIGHTER1 = this.FIGHTER1_SAVE;
			this.FIGHTER2 = this.FIGHTER2_SAVE;

			this.bothFightersAction(function(_fighter) {
				_fighter.attack = "";
				_fighter.currentStand = null;
			});

			return this.checkDeath();
		}

		if (this.FIGHTER1.STR <= 0 && this.FIGHTER2.STR <= 0) {
			this.addMessage("-----------------");
			this.addMessage("Both of you lost. No one won this time. You losers.");
			this.stopDuel();
			return;
		}
		this.bothFightersAction(function(_fighter) {
			if (_fighter.STR <= 0 && _fighter.duel.EVENT_BOSS == null) {
				_fighter.duel.addMessage("-----------------");
				if (_fighter.grabbedPP > 0) {
					_fighter.duel.addMessage("*Confusion* was " + _fighter.getName() + "'s epitaph.");
				}
				_fighter.duel.addMessage(_fighter.duel.otherFighter(_fighter).getName() + " won! Congrats!");
				_fighter.duel.otherFighter(_fighter).win();
				if (_fighter.futureMemories > 0 || _fighter.duel.otherFighter(_fighter).futureMemories > 0 ) {
					_fighter.duel.addMessage(_fighter.duel.otherFighter(_fighter).getName() + " sends a D-Mail to the past!");
				}
				_fighter.duel.stopDuel();
			};
		});
	}

	startRandomEvent() {
		var randomVar = getRandomPercent();
		var forcedEvent = this.FORCE_EVENT;
		var eventHappened = false;

		if (this.AREA == AREA_PP4 && getRandomPercent() <= 25) {
			forcedEvent = true;
			if (getRandomPercent() <= 10) randomVar = 9;
			else randomVar = 19;
		}
		else if (this.AREA == AREA_PP10 && this.EVENT_BOSS == null && getRandomPercent() <= 10) {
			forcedEvent = true;
			randomVar = 50;
		}
		else if (this.AREA == AREA_PP8 && getRandomPercent() <= 20) {
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
			this.addMessage("", undefined, {embed:
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
				this.addMessage(this.EVENT_BOSS.getName() + " is defeated!");
				this.bothFightersAction(function(_fighter) {
					_fighter.win();
                    grantPlayerAchievement(_fighter, 1); // Punch PP Really Hard
					grantPlayerDestroyer(_fighter);
				});
				this.addMessage("**Congratulations! You beat the PP Puncher final boss!**");
			}
			this.stopDuel();
			for (var i in DUEL_LIST) {
				if (DUEL_LIST[i].BATTLE_CHANNEL.id != this.BATTLE_CHANNEL.id) {
					this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**INFERNAL FIRELAND**",
					"description": "Plenty of forest fires have been set off as a result of your PP punching, making the nearby 100 square km into an Infernal Fireland!\nThe victory will be determined by your proficiency in your instrument. You two dueling souls have to come up with a solo each... the best one crowning the victory!"
				}
			});
			var winner = this.getRandomFighter();
			winner.infernalInstrument = 1; // Guitar
			this.otherFighter(winner).infernalInstrument = 2; // Synth
			this.INFERNAL_FIRELAND = true;
			eventHappened = true;
		}
		if (this.PPLEVEL > 50 && !this.PP_ARMAGEDDON && this.MOVE_COUNT >= 1000) {
			// PP ARMAGEDDON
			this.PP_ARMAGEDDON = true;
			this.addMessage("", undefined, {embed:
				{
					"title": "**PP ARMAGEDDON**",
					"description": "PP Punching has ascended, the end is near!"
				}
			});
			eventHappened = true;
		}

		if (this.FORCE_EVENT_ID != 0) {
			randomVar = this.FORCE_EVENT_ID;
			this.FORCE_EVENT_ID = 0;
			forcedEvent = true;
		}

		if (randomVar == 2) { // PP Enlightenment
			this.addMessage("", undefined, {embed:
				{
					"title": "**PP ENLIGHTENMENT**",
					"description": "Your PP temporarily become enlightened! All moves can now be used for this turn but illegal moves are still illegal!"
				}
			});
			this.EVENT_PP_ENLIGHTENMENT = true;
		}
		else if (randomVar == 3) { // PP Purge
			this.addMessage("", undefined, {embed:
				{
					"title": "**PP PURGE**",
					"description": "All PPs grow a mohawk and start to roam the streets! Illegal moves can now be used freely but the judge can still see you if you use unavailable moves!"
				}
			});
			this.EVENT_PP_PURGE = true;
		}
		else if (randomVar == 4) { // Sexually Confused
			this.addMessage("", undefined, {embed:
				{
					"title": "**SEXUAL CONFUSION**",
					"description": "Your PPs are confused for this turn!"
				}
			});
			this.EVENT_CONFUSION = true;
		}
		else if (this.PPLEVEL > 100 && randomVar == 5 && (this.MOVE_COUNT >= 30 || forcedEvent)) { // Cthulhu
			if (this.EVENT_BOSS != null && this.EVENT_BOSS.evolveToMoonLord) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**MOON LORD AWAKENS**",
						"description": "Cthulhu is blessed by the moonlight!\nThe Moon Lord has been summoned and takes control over Cthulhu's body!"
					}
				});
				this.triggerBossFight(new MoonLordBoss(this));
			}
			else if (this.EVENT_BOSS != null && this.EVENT_BOSS.isMoonLord) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**MOON LORD REGENERATION**",
						"description": "The Moon Lord is blessed by the moonlight!"
					}
				});
				this.EVENT_BOSS.heal(50000);
			}
			else if (this.EVENT_BOSS != null) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**CTHULHU SLEEPS**",
						"description": "And nothing happens at all..."
					}
				});
			}
			else {
				this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**ACCIDENTAL SUMMONING**",
					"description": winner.getName() + " accidentaly plays Psychodiös on his phone and it summons Satan and the Ancient Fungus!"
				}
			});
			this.sendMessages();

			winner.playMove(EMOTE_PP26);
			winner.playMove(EMOTE_PP46);
		}
		else if (this.PPLEVEL > 50 && randomVar == 7 && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Blood Moon
			this.addMessage("", undefined, {embed:
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
		else if (this.PPLEVEL > 50 && randomVar == 8 && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Ascension
			var winner = this.getRandomFighter();
			this.addMessage("", undefined, {embed:
				{
					"title": "**ASCENSION**",
					"description": winner.getName() + " accidentaly plays Ascend on his phone!"
				}
			});
			this.allFightersAction(function(_fighter) {
				_fighter.playMove(EMOTE_PP49);
			});
		}
		else if (this.PPLEVEL > 50 && [9, 10, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(randomVar) > -1 && (this.MOVE_COUNT >= 10 || forcedEvent) && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Charge
			if (this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) {
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
		else if (this.PPLEVEL > 50 && [19, 20, 21].indexOf(randomVar) > -1 && (this.MOVE_COUNT >= 25 || forcedEvent) && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Charge
			if (this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) {
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
					{
						"title": "**HUGE GAY NIGHT**",
						"description": "Your gayness now lasts for 10 more turns!"
					}
				});
			}
			else {
				this.GAY_TURNS = 1;
				this.addMessage("", undefined, {embed:
					{
						"title": "**HUGE GAY NIGHT**",
						"description": "You suddenly become gay for this turn!"
					}
				});
			}

		}
		else if (this.PPLEVEL > 50 && randomVar == 23 && (this.MOVE_COUNT >= 30 || forcedEvent) && this.CURRENT_BATTLE_MODE == NORMAL_BATTLE_MODE) { // PP Blessing
			this.addMessage("", undefined, {embed:
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

				_fighter.isBigPP = true;
				_fighter.isFastPP = true;
				_fighter.isDrunkPP = true;
				_fighter.isHockeyPuckPP = true;
				_fighter.isAlienPP = true;
			});
		}
		else if (this.PPLEVEL > 50 && [24, 25].indexOf(randomVar) > -1 && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Free Lives
			if (this.EVENT_BOSS != null) {
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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

				this.addMessage("", undefined, {embed:
					{
						"title": "**TRAGEDY**",
						"description": "apolgy for bad english\nwhere were u wen club pp die\n" + winner.getName() + " was at house eating dorito when phone ring\n" + this.otherFighter(winner).getName() + ': "Club pp is kil"\n' + winner.getName() + ': *"no"*'
					}
				});
			}
			else {
				var brennUwu = CLIENT.emojis.cache.get("655449555873038337");
				var espinoza = CLIENT.emojis.cache.get("615887132157804564");
				var rageBrenn = CLIENT.emojis.cache.get("668946953681502248");
				var waifu = null;
				while (waifu == null) {
					var g = randomFromList(GOD_LIST);
					if (g.type == "waifu") {
						waifu = CLIENT.emojis.cache.get(g.emote);
					}
				}

				this.addMessage("", undefined, {embed:
					{
						"title": "**TRAGEDY**",
						"description": "*Dispair in IV acts.*"
					}
				});
				this.addMessage(`${brennUwu} ${waifu}` + "\n" + `${brennUwu} ${waifu} ${espinoza}` + "\n" + `${brennUwu}` + "\n" + `${rageBrenn}`);
			}
			this.addMessage("You both take your turn to recover from this tragedy!");

			this.allFightersAction(function(_fighter) {
				_fighter.attack = EMOTE_SKIP;
			});
		}
		else if (this.PPLEVEL > 50 && [27, 28, 29, 30, 31].indexOf(randomVar) > -1) { // PP-Net
			this.PP_NET += 1;
			if (this.PP_NET == 1) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**PP-NET RISING**",
						"description": "A new military AI has been created.\nIts name: PP-Net."
					}
				});
			}
			else if (this.PP_NET == 2) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**PP-NET RISING**",
						"description": "Rumors are saying PP-Net is growing sentient... and is doing more calculations than what was planned.\nA PP Robot Police now roams the streets."
					}
				});
			}
			else if (this.PP_NET == 3) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**PP-NET RISING**",
						"description": "PP Punching is now considered 'illegal' because 'it is too dangerous'. This is dumb.\nWe better hide somewhere where the PP Police can't find us."
					}
				});
			}
			else if (this.PP_NET == 4) {
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
					{
						"title": "**PP-NET RISING**",
						"description": "You better destroy the PP Terminator if you don't want the PP Rebellion to be without you!"
					}
				});
			}
			else {
				this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**DAY OF THE PP EQUALITY**",
					"description": "Today is Day of the PP Equality! There is no DEX modifier for moves for this turn!"
				}
			});
			this.EVENT_PP_EQUALITY = true;
		}
		else if (this.PPLEVEL > 100 && randomVar == 33 && (this.MOVE_COUNT >= 1000 || forcedEvent)) { // Eldritch Gate
			if (this.EVENT_BOSS != null && this.EVENT_BOSS.eldritchGateBuff) {
				this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
		else if (this.PPLEVEL > 50 && randomVar == 34 && (this.MOVE_COUNT >= 100 || forcedEvent)) { // Ascension Requiem
			var winner = this.getRandomFighter();
			this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**MEGA MOVEPOOL**",
					"description": "You get blessed by the gods and get an extended movepool for this turn!"
				}
			});
			this.EVENT_MEGA_POOL = true;
		}
		else if (this.PPLEVEL > 50 && randomVar == 37) { // PP Depression
			this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**IMPENDING BOMBARDMENT**",
					"description": "A missile has been spotted above the battleground! You have one turn before it hits the ground and explodes!"
				}
			});
			this.EVENT_BOMB = true;
		}
		else if (randomVar == 39 && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // Judgement
			this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
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
			winner.damage(Math.floor(winner.STR/10));
		}
		else if (this.PPLEVEL > 50 && randomVar == 41 && (this.MOVE_COUNT >= 30 || forcedEvent) && this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) { // Kaiju Attack
			var winner = this.getRandomFighter();
			if (winner.kaijuHP > 0) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**KAIJU ATTACK**",
						"description": winner.getName() + "'s kaiju gets stronger!"
					}
				});
				winner.kaijuHP += 1000;
			}
			else {
				this.addMessage("", undefined, {embed:
					{
						"title": "**KAIJU ATTACK**",
						"description": winner.getName() + " gets attacked by a kaiju!"
					}
				});
				winner.kaijuHP = 1000 - winner.getTotalDefBonus() - winner.militaryPower;
				winner.resetArmy();
			}
		}
		else if (randomVar == 42) { // Nudist Beach
			this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
					{
						"title": "**ALTERNATE PP UNIVERSE**",
						"description": "For some unknown reason, the duel gets teleported into an alternate universe!\nYou finally get out of the filthy poopoo punching world!"
					}
				});
			}
			else if (this.ALTERNATE_MOVES) {
				this.addMessage("", undefined, {embed:
					{
						"title": "**ALTERNATE PP UNIVERSE**",
						"description": "For some unknown reason, the duel gets teleported into an alternate universe!\nYou get back to your original world!"
					}
				});
				this.ALTERNATE_MOVES = false;
			}
			else {
				this.addMessage("", undefined, {embed:
					{
						"title": "**ALTERNATE PP UNIVERSE**",
						"description": "For some unknown reason, the duel gets teleported into an alternate universe!\nEach moves has the same DEX modifier, illegal chances et ability to always pass, but their effect may have slightly changed!"
					}
				});
				this.ALTERNATE_MOVES = true;
				this.ALTERNATE_MOVE_COUNT = this.MOVE_COUNT;
			}
		}
		else if (this.PPLEVEL > 100 && randomVar == 44 && (this.MOVE_COUNT >= 1000 || forcedEvent)) { // Obama
			this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
				{
					"title": "**WYNDOELLA KILLS PUDDING**",
					"description": "The Universe itself challenges you!",
					"image": { "url": IMAGE_PP9 }
				}
			});
			this.triggerBossFight(new WyndoeallaBoss(this));
		}
		else if (this.PPLEVEL > 50 && randomVar == 51 && this.CURRENT_BATTLE_MODE != CITY_BATTLE_MODE) { // IKEA
			if (this.EVENT_BOSS != null) {
				if (this.EVENT_BOSS.isIkea) {
					this.addMessage("", undefined, {embed:
						{
							"title": "**IKEA EXTENSION**",
							"description": "The swedish pilgrims added a new extension to the Ikea.",
						}
					});
					this.EVENT_BOSS.heal(500);
					this.EVENT_BOSS.baseDamage += 40;
				}
				else {
					this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
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
			this.addMessage("", undefined, {embed:
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
				this.addMessage("", undefined, {embed:
					{
						"title": "**KING OF HEROES**",
						"description": "Gilgamesh helps " + this.EVENT_BOSS.getName() + "!"
					}
				});
				this.EVENT_BOSS.getRandomRelic();
			}
			else {
				this.addMessage("", undefined, {embed:
					{
						"title": "**KING OF HEROES**",
						"description": "Gilgamesh challenges you!"
					}
				});
				this.triggerBossFight(new GilgameshBoss(this));
			}

			this.sendMessages();
		}
		// DON'T FORGET TO UPDATE FORCE EVENT IF NEW EVENTS ARE ADDED
		else if (this.PPLEVEL > 200 && randomVar == 90 && (this.MOVE_COUNT >= 50 || forcedEvent)) { // Brenn Ejaculates
			this.addMessage("", undefined, {embed:
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
			var idList = shuffleArray([2, 3, 4, 6, 7, 8, 9, 19, 22, 23, 32, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 52, 55]);
			for (var i = 0; i < idList.length; i++) {
				this.FORCE_EVENT_ID = idList[i];
				this.startRandomEvent();
				this.sendMessages();
			}
		}
		else if (randomVar == 200) {
			// TEST
			this.addMessage(" -- DEV TEST EVENT --");
			this.addMessage("I use this fake event to test things. Don't worry it cannot appear in normal games.");

			this.startCityMode();
		}
		else if (randomVar == 300) {
			// CIVILISATION (civilisation command)
			this.startCityMode()
		}
	}
	triggerBossFight(_boss) {
		this.EVENT_BOSS = _boss;
	}

	triggerReaction(_emote, _user) {
		if (this.EASY_DUEL && this.LIST_AVAILABLE_ATTACKS.indexOf(this.getAttackFromEmote(_emote)) < 0) {
			return;
		}

		// Save Me Move
		if (this.getAttackFromEmote(_emote) == EMOTE_PP31 && this.SAVE_LIST.indexOf(_user.id) < 0 && !_user.bot) {
			this.SAVE_LIST.push(_user.id);
			this.addMessage(_user.username + " helps the fighters!");
			this.sendMessages();
			this.bothFightersAction(function(_fighter) {
				_fighter.heal(50);
			});
		}

		// Laughing Skull Move
		if (this.getAttackFromEmote(_emote) == EMOTE_PP23 && this.SAVE_LIST.indexOf(_user.id) < 0 && !_user.bot) {
			this.SAVE_LIST.push(_user.id);
			this.addMessage(_user.username + " prays for the fighters!");
			this.sendMessages();
			this.bothFightersAction(function(_fighter) {
				var godListMemory = this.godList.slice();
				this.godList = [];
				this.godList.push(shuffleArray(GOD_LIST)[0].name);

				this.addMessage("-----------------");
				this.playMove(EMOTE_PP51);
				this.addMessage("-----------------");
				this.playMove(EMOTE_PP52);
				this.godList = godListMemory.slice();
			});
		}

		if (this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) {
			if (this.CURRENT_FIGHTER.user.id == _user.id) {
				this.CURRENT_FIGHTER.attack = this.getAttackFromEmote(_emote);
				this.addMessage(this.CURRENT_FIGHTER.getName() + ": " + _emote, true);
				this.sendMessages();

				this.CURRENT_FIGHTER.playMove();

				if (!this.otherFighter(this.CURRENT_FIGHTER).attackedThisTurn) {
					this.CURRENT_FIGHTER = this.otherFighter(this.CURRENT_FIGHTER);
					this.setRandomAttackList();

					this.addMessage("**=== " + this.CURRENT_FIGHTER.getName() + " ===**", true);
					this.sendMessages();

					this.showMovepool();

					if (this.CURRENT_FIGHTER.grabbedPP > 0) {
						this.CURRENT_FIGHTER.attack = EMOTE_SKIP;
						this.launchAttacks();
					}
					else if (this.CURRENT_FIGHTER.user.id == CLIENT.user.id) {
						this.botReacts();
					}
				}
				else {
					this.newTurnDuel();
				}
			}

			this.sendMessages();
			return;
		}

		// Assigne attaque
		this.bothFightersAction(function(_fighter) {
			var duel = _fighter.duel

			if (duel.GAY_TURNS > 0 && duel.TIME_STOP <= 0) {
				if (_user.id == _fighter.user.id) {
					if (duel.LIST_AVAILABLE_ATTACKS.indexOf(duel.getAttackFromEmote(_emote)) < 0) {
						duel.addMessage("Gay people can't cheat...");
						return duel.sendMessages();
					}
					else if (duel.otherFighter(_fighter).STR <= 0) {
						// opponent dead (boss battle)
						return;
					}
					else {
						duel.otherFighter(_fighter).attack = duel.getAttackFromEmote(_emote);
						duel.addMessage(duel.otherFighter(_fighter).getName() + ": " + _emote, true);
						duel.sendMessages();
					}
				}
			}
			else if (_fighter.duel.TIME_STOP > 0 && _fighter.duel.TIME_STOP_ID != _fighter.idUser) { // if weak --> skip time skip
				return;
			}
			else if (_fighter.attack == EMOTE_DEAD || _fighter.attack == EMOTE_SKIP) { // no choice
				return;
			}
			else if (_user.id == _fighter.user.id && _fighter.isPossessed <= 0 && _fighter.turnSkip <= 0 && _fighter.grabbedPP <= 0 && _fighter.summonTankCountdown != 1) {
				_fighter.attack = duel.getAttackFromEmote(_emote);
				duel.addMessage(_fighter.getName() + ": " + _emote, true);
				duel.sendMessages();

				// Possession
				if (duel.otherFighter(_fighter).isPossessed >= 1) {
					duel.otherFighter(_fighter).attack = duel.getAttackFromEmote(_emote);
					duel.addMessage(duel.otherFighter(_fighter).getName() + ": " + _emote, true);
					duel.sendMessages();
				}
			}
		});

		if (this.FIGHTER1.attack != "" && this.TUTORIAL) {
			return this.tutorialNextTurn();
		}

		// Deux attaques sont faites
		if (this.FIGHTER1.attack != "" && this.FIGHTER2.attack != "") {
			this.launchAttacks();
		}

		this.sendMessages();
	}
	launchAttacks() {
		this.addMessage("\n\n**===== ATTACKS =====**");

		this.bothFightersAction(function(_fighter) {
			_fighter.usedMoves.push(_fighter.attack);

			if (_fighter.turnSkip > 0) {
				_fighter.attack = EMOTE_PP50;
			}
			if (_fighter.grabbedPP > 0) {
				_fighter.attack = EMOTE_PP39;
			}
			if (_fighter.summonTankCountdown == 1) {
				_fighter.attack = EMOTE_PP10;
			}
			// Si ajout, ne pas oublier d'autoriser dans tests illegaux
		});

		// test illegal
		this.bothFightersAction(function(_fighter) {
			var duel = _fighter.duel;
			if (duel.DEAD_DUEL) return;

			var caught1 = false;

			// Illegalité
			if (duel.illegalGetCaught(duel.getRisk(_fighter.attack)) || (_fighter.badLuck && duel.getRisk(_fighter.attack) > 0)) {
				caught1 = true;
			}

			// Move non autorisé (movepool)
			if (duel.LIST_AVAILABLE_ATTACKS.indexOf(_fighter.attack) < 0 &&
			    _fighter.attack != EMOTE_DEAD &&
			    _fighter.attack != EMOTE_SKIP &&
			    !(_fighter.attack == EMOTE_PP50 && _fighter.turnSkip) &&
			    !(_fighter.attack == EMOTE_PP39 && _fighter.grabbedPP) &&
			    !(_fighter.attack == EMOTE_PP10 && _fighter.summonTankCountdown == 1)) {
				caught1 = caught1 || (duel.illegalGetCaught(50) && !duel.EVENT_PP_ENLIGHTENMENT) && !_fighter.badLuck;
			}

			// Tricher les charges
			if (_fighter.attack == EMOTE_PP51 && _fighter.regularCharges <= 0 && duel.illegalGetCaught(80) && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = true;
			}
			if (_fighter.attack == EMOTE_PP52 && _fighter.specialCharges <= 0 && duel.illegalGetCaught(95) && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = true;
			}

			// Triche des emotes animés
			if (SPECIAL_EMOTE_LIST.indexOf(_fighter.attack) > -1 && duel.LIST_AVAILABLE_ATTACKS.indexOf(_fighter.attack) < 0 && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = duel.illegalGetCaught(100);
			}
			// Triche des emotes infernal fireland
			if (INFERNAL_EMOTE_LIST.indexOf(_fighter.attack) > -1 && duel.LIST_AVAILABLE_ATTACKS.indexOf(_fighter.attack) < 0 && !duel.EVENT_PP_ENLIGHTENMENT) {
				caught1 = duel.illegalGetCaught(100);
			}

			// Guerrier de l'Enfer
			if (_fighter.attack == EMOTE_PP74 && _fighter.hasSynergy(SYNERGY_PP15)) {
				caught1 = false;
			}

			if (duel.BLIND_COUNTDOWN > 0) {
				caught1 = false;
			}
			else if (duel.ILLEGAL_JEWS && _fighter.godList.indexOf(GOD_PP7.name) > -1 && duel.illegalGetCaught(20)) {
				// Illegal Jews (Hitler regular move)
				duel.addMessage("Wait, I think " + _fighter.getName() + " is a villager!");
				duel.sendMessages();
				caught1 = true;
			}

			// Lucky (Leprepuds regular move)
			if (_fighter.isLucky > 0 && getRandomPercent() <= 50) {
				caught1 = false;
			}

			// True Barbarian from the North (Mongo special move)
			if (_fighter.trueBarbarian && _fighter.STR >= 1000 && caught1) {
				caught1 = false;
				duel.addMessage(_fighter.getName() + " strong. " + _fighter.getName() + " punch arbitratory if arbitratory bad.");
				duel.sendMessages();
			}

			if (caught1 && getRandomPercent() <= 2 && duel.POOPOO_UNIVERSE) {
				duel.addMessage("**YOUR CHEATING HAS MADE THE GODS VERY ANGRY. IF YOU DON'T WANT TO RESPECT THE RULES OF THE MIGHTY PP PUNCH, THEN YOU DON'T DESERVE TO PUNCH PP.**");
				duel.addMessage("**ESPINOZA USES HIS FINAL ABILITY, DOUBLE ARM SNIFF!**");
				duel.addMessage("**YOU ARE BANISHED INTO THE POOPOO PUNCH UNIVERSE!**");
				duel.POOPOO_UNIVERSE = true;
				duel.ALTERNATE_MOVES = true;
				_fighter.attack = EMOTE_SKIP;
				caught1 = false;
			}

			// Caught cheating --> test si malus dex
			if (caught1 && (getRandomPercent() >= 10 || _fighter.hasSynergy(SYNERGY_PP9) || _fighter.duel.EVENT_DEPRESSION)) {
				duel.addMessage(_fighter.getName() + " is doing illegal stuff ! He loses 20 DEX and 10 STR.");
				duel.sendMessages();
				_fighter.STRValue -= 10;
				_fighter.DEXValue -= 20;
				_fighter.attack = EMOTE_SKIP;
				caught1 = false;
			}
			else if (caught1) {
				duel.addMessage("WAIT " + _fighter.getName().toUpperCase() + " IS DOING ILLEGAL STUFF RIGHT NOW!");
				duel.addMessage(_fighter.getName() + " is disqualified for being a dumb shit.");
				_fighter.playMove(EMOTE_PP47);
				duel.sendMessages();

				addWinCounter(_fighter, -1);
				duel.checkDeath();
			}
		});
		if (this.DEAD_DUEL) return;

		this.bothFightersAction(function(_fighter) {
			// Wild Mage
			if (_fighter.hasSynergy(SYNERGY_PP14) && getRandomPercent() <= 10) {
				_fighter.duel.addMessage(_fighter.getName() + " feels the wild magic kicking in!");
				_fighter.duel.sendMessages();
				_fighter.attack = EMOTE_LIST[Math.floor(Math.random()*EMOTE_LIST.length)];
			}

			// Change attack if dead (boss battle)
			if (_fighter.STR <= 0) {
				_fighter.attack = EMOTE_DEAD;
			}
		});

		// ATTAQUES
		var dexAttack1 = this.FIGHTER1.DEX + this.getDexChange(this.FIGHTER1.attack) + Math.floor(Math.random() * 50 + 1);
		var dexAttack2 = this.FIGHTER2.DEX + this.getDexChange(this.FIGHTER2.attack) + Math.floor(Math.random() * 50 + 1);
		this.addMessage(this.FIGHTER1.getName() + ": " + dexAttack1 + " /VS/ " + this.FIGHTER2.getName() + ": " + dexAttack2);
		this.sendMessages();

		if (this.FIGHTER1.attack == EMOTE_PP5 && this.FIGHTER2.attack == EMOTE_PP5) {
			// HIGH FIVES:D
			this.addMessage("Wow, look at those bros!");
			this.addMessage("That was some good high five.");
			this.addMessage("Okay, the fight ends now!");
			this.addMessage("I'm literally shaking and crying right now.");
			this.addMessage("This is so beautiful...");
			this.addMessage("I love you all.");
			this.sendMessages();

            if (this.FIGHTER1.isPossessed > 0) grantPlayerAchievement(this.FIGHTER2, 2);
            if (this.FIGHTER2.isPossessed > 0) grantPlayerAchievement(this.FIGHTER1, 2);

			if (this.AREA == AREA_PP12) this.DOUBLE_POINTS = true;
			this.bothFightersAction(function(_fighter) {
				_fighter.win("half")
			});
			this.stopDuel();
			return;
		}

		// ExclamationPoint
		this.bothFightersAction(function(_fighter) {
			if (_fighter.attack == EMOTE_PP30) {
				_fighter.attack = _fighter.oldAttack;
			}
			else {
				_fighter.oldAttack = _fighter.attack;
			}
		});

		var winner = this.FIGHTER2;
		if (dexAttack1 > dexAttack2) {
			winner = this.FIGHTER1;
		}
		if (this.REVERSED_GRAVITY) {
			winner = winner.duel.otherFighter(winner);
		}

		var priorityMoves = [EMOTE_PP15, EMOTE_PP29, EMOTE_PP11]; // Hobro / Steel / Barrel

		if ((dexAttack1 - dexAttack2 <= 10 && dexAttack1 - dexAttack2 >= -10) ||
		    this.AUTO_MOVES_COUNTDOWN > 0 || this.EVENT_BOSS != null || this.otherFighter(winner).legAimer ||
		    this.TIME_STOP > 0 || this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) {
			this.addMessage("Both opponents attack this turn!");
			this.sendMessages();

			if (priorityMoves.indexOf(this.otherFighter(winner).attack) > -1) {
				winner = this.otherFighter(winner);
			}
			if (priorityMoves.indexOf(this.otherFighter(winner).attack) > -1) {
				winner = this.otherFighter(winner);
			}

			this.bothFightersAction(function(_fighter) {
				_fighter.duel.addMessage("-----------------");
				_fighter.playMove();
				_fighter.duel.sendMessages();

				if (_fighter.duel.otherFighter(_fighter).attack == EMOTE_PP8) { // Burst
					_fighter.duel.addMessage(_fighter.duel.otherFighter(_fighter).getName() + " burst!");
					_fighter.duel.sendMessages();
					_fighter.hasBurst = 2;
				}
				if (_fighter.standPower == STAND_PP7 && _fighter.attack == _fighter.duel.otherFighter(_fighter).attack) { // Parallel Minds
					_fighter.duel.addMessage("-----------------");
					_fighter.heal(15);
					_fighter.duel.addMessage(_fighter.getName() + " gets 5 DEX!");
					_fighter.DEXValue += 5;
				}
			}, winner);
		}
		else {
			// Priority automatic moves
			if (priorityMoves.indexOf(this.otherFighter(winner).attack) > -1) {
				this.otherFighter(winner).playMove();
			}

			this.addMessage(winner.getName() + " uses his move!");
			this.sendMessages();
			winner.playMove();

			// Burst
			if (this.otherFighter(winner).attack == EMOTE_PP8) {
				this.addMessage(this.otherFighter(winner).getName() + " burst!");
				winner.hasBurst = 2;
			}
			// Mech
			if (this.otherFighter(winner).attack == EMOTE_PP68) {
				this.addMessage("-----------------");
				this.addMessage(winner.getName() + " triggers " + this.otherFighter(winner).getName() + "'s Mech!");
				this.addMessage(this.otherFighter(winner).getName() + " shoots!");
				winner.damage(50);
			}

			// Fighting Styles Move
			if ([ EMOTE_PP38, EMOTE_PP40, EMOTE_PP41 ].indexOf(this.otherFighter(winner).attack) > -1) {
				this.otherFighter(winner).playMove();
			}
			// Scout
			if (this.otherFighter(winner).attack == EMOTE_PP13) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// BronanSlam
			if (this.otherFighter(winner).attack == EMOTE_PP42 && (this.otherFighter(winner).megaBuildUp > 0 || this.otherFighter(winner).bonusDamage > 0)) {
					this.addMessage("-----------------");
					this.otherFighter(winner).playMove();
			}
			// Intimidates
			if (this.otherFighter(winner).attack == EMOTE_PP28) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// LivingGod
			if (this.otherFighter(winner).attack == EMOTE_PP49) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// High Five Emote
			if (this.otherFighter(winner).attack == EMOTE_PP32 && this.BLIND_COUNTDOWN > 0) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// Requiem
			if (this.otherFighter(winner).attack == EMOTE_ABILITY && this.otherFighter(winner).requiemPower != null) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// Dual Loop
			if (this.otherFighter(winner).attack == EMOTE_PP55) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// D-Mail
			if (this.otherFighter(winner).attack == EMOTE_SKIP && this.otherFighter(winner).futureMemories == 0) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// Shiny Stone
			if (this.otherFighter(winner).attack == EMOTE_PP145) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// Gravity Globe
			if (this.otherFighter(winner).attack == EMOTE_PP146) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
			// PP Colossus
			if (this.otherFighter(winner).attack == EMOTE_MECHA) {
				this.addMessage("-----------------");
				this.otherFighter(winner).playMove();
			}
		}
		if (this.MOVE_COUNT_TURN >= 500) {
			this.sendMessages(1);
		}
		this.sendMessages();
		if (!this.EASY_DUEL) {
			this.checkStandSummon();
		}
		this.newTurnDuel();
	}

	checkStandSummon() {
		if (this.PPLEVEL <= 50) return;

		if (!this.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) {
			this.bothFightersAction(function(_fighter) {
				var check = false;
				for (var i in STAND_SUMMONS) {
					check = true;
					for (var j in STAND_SUMMONS[i]) {
						if (STAND_SUMMONS[i][j] != _fighter.usedMoves[_fighter.usedMoves.length-j-1]) {
							check = false;
						}
					}
					if (check) {
						_fighter.duel.addMessage("-----------------");
						_fighter.duel.addMessage(_fighter.getName() + " summons the Stånd: " + i);
						_fighter.currentStand = i;
						return;
					}
				}
			});
			this.sendMessages();

			if (this.FIGHTER1.currentStand != null && this.FIGHTER2.currentStand != null) {
				this.addMessage("**===== STÅND BATTLE MODE =====**");
				this.addMessage("Both fighters already have summoned their Stånd.");
			}
			else if (this.FIGHTER1.currentStand != null || this.FIGHTER2.currentStand != null) {
				this.addMessage("**===== STÅND BATTLE MODE =====**");
				this.bothFightersAction(function(_fighter) {
					if (_fighter.currentStand == null) {
						var liste = Object.keys(STAND_SUMMONS);
						_fighter.currentStand = liste[Math.floor(Math.random()*liste.length)];
						_fighter.duel.addMessage(_fighter.getName() + " summons the Stånd: " + _fighter.currentStand);
					}
					else {
						_fighter.duel.addMessage(_fighter.getName() + " already have summoned the Stånd: " + _fighter.currentStand);
					}
				});
			}
			else {
				return;
			}

			this.addMessage("**" + this.FIGHTER1.currentStand + "**");
			this.addMessage(STAND_HELP[this.FIGHTER1.currentStand]);
			this.addMessage("**" + this.FIGHTER2.currentStand + "**");
			this.addMessage(STAND_HELP[this.FIGHTER2.currentStand]);

			this.CURRENT_BATTLE_MODE = STAND_BATTLE_MODE;
			this.FIGHTER1_SAVE = this.FIGHTER1;
			this.FIGHTER2_SAVE = this.FIGHTER2;
			this.FIGHTER1 = new Fighter(this.FIGHTER1.idUser, this.BATTLE_CHANNEL.id, this.FIGHTER1.currentStand);
			this.FIGHTER2 = new Fighter(this.FIGHTER2.idUser, this.BATTLE_CHANNEL.id, this.FIGHTER2.currentStand);
		}
		this.sendMessages();
	}
	startCityMode() {
		if (this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) return;

		this.addMessage("**===== CIVILISATION BATTLE MODE =====**");
		this.addMessage("Both fighters starts a new civilisation as their leader. Your next message will be the name of your city!");

		this.bothFightersAction(function(_fighter) {
			_fighter.resetBattleVariables();
		});

		this.FIGHTER1 = new City(this.FIGHTER1, this.BATTLE_CHANNEL.id);
		this.FIGHTER2 = new City(this.FIGHTER2, this.BATTLE_CHANNEL.id);

		this.CURRENT_BATTLE_MODE = CITY_BATTLE_MODE;
		this.KIDNEY_CURSE = 0;
	}

	setRandomAttackList() {
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
			while (listeAttaques.length < 20) {
				emote = EMOTE_LIST[Math.floor(Math.random()*EMOTE_LIST.length)];
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
		else if (this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) {
			var max = 5;
			if (this.CURRENT_FIGHTER.diceShrine) {
				max = 10;
			}
			for (var i = 0; i < max; i++) {
				var currentLength = listeAttaques.length;
				var nbTries = 0;

				while (listeAttaques.length <= currentLength && nbTries < 100) {
					nbTries += 1;
					emote = this.getRandomCivEmote(this.CURRENT_FIGHTER);

					if (listeAttaques.indexOf(emote) < 0) {
						listeAttaques.push(emote);
					}
				}
			}

		}
		else {
			var commonMoves = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP3, EMOTE_PP4, EMOTE_PP5];

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

		this.LIST_AVAILABLE_ATTACKS = listeAttaques;
	}
	getRandomEmote(_canBeIllegal = true) {
		var legalList = [];
		var illegalList = [];
		var goodList = [];

		for (var i in NORMAL_EMOTE_LIST) {
			if ([EMOTE_PP36, EMOTE_PP47].indexOf(NORMAL_EMOTE_LIST[i]) < 0) {
				if (this.getRisk(NORMAL_EMOTE_LIST[i]) == 0) {
					legalList.push(NORMAL_EMOTE_LIST[i]);
				}
				illegalList.push(NORMAL_EMOTE_LIST[i]);
			}
		}

		if (_canBeIllegal) {
			goodList = illegalList;
		}
		else {
			goodList = legalList;
		}

		if (this.ILLEGAL_BOMBING) {
			goodList.push(EMOTE_PP36);
		}
		if (!this.DISABLE_ABANDON) {
			goodList.push(EMOTE_PP47);
		}
		if (this.INFERNAL_FIRELAND || getRandomPercent() <= 5) {
			goodList = goodList.concat(INFERNAL_EMOTE_LIST);
		}
		if (this.PP_ARMAGEDDON || getRandomPercent() <= 3) {
			goodList = goodList.concat(SPECIAL_EMOTE_LIST);
		}
		if (this.PP_NET == 3 || this.EASY_DUEL) {
			goodList = [EMOTE_PP1, EMOTE_PP2, EMOTE_PP4, EMOTE_PP5, EMOTE_PP8, EMOTE_PP12, EMOTE_PP13,
				EMOTE_PP17, EMOTE_PP18, EMOTE_PP19, EMOTE_PP21, EMOTE_PP22, EMOTE_PP30, EMOTE_PP31,
				EMOTE_PP39, EMOTE_PP42, EMOTE_PP45];
		}
		if (this.CURRENT_BATTLE_MODE == STAND_BATTLE_MODE) {
			goodList = STAND_EMOTE_LIST;
		}
		if (getRandomPercent() <= 3 && !this.EASY_DUEL) {
			goodList = goodList.concat(RARE_EMOTE_LIST);
		}
		if (goodList.indexOf(EMOTE_PP77) > -1 && (this.FIGHTER1.quickeningCharges < 10 || this.FIGHTER2.quickeningCharges < 10)) {
			// Satan Hand
			goodList = goodList.splice(goodList.indexOf(EMOTE_PP77), 1);
		}

		if (this.CURRENT_BATTLE_MODE == CITY_BATTLE_MODE) {
			goodList = CIV_EMOTE_LIST;
		}

		return randomFromList(goodList);
	}
	getRandomCivEmote(_city) {
		var listeEmote = [EMOTE_PP82, EMOTE_PP83, EMOTE_PP84, EMOTE_PP85, EMOTE_PP87, EMOTE_PP88, EMOTE_PP90,
				  EMOTE_PP124, EMOTE_PP129];

		if (_city.familiarShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP94, EMOTE_PP95,
							EMOTE_PP93, EMOTE_PP122, EMOTE_PP92]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP82), 1);
		}
		if (_city.junkShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP113,
						       EMOTE_PP132]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP83), 1);
			if (getRandomPercent() <= 5) {
				listeEmote = listeEmote.concat([EMOTE_PP114, EMOTE_PP115, EMOTE_PP116]);
			}
		}
		if (_city.diceShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP101,
						       EMOTE_PP133]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP85), 1);
		}
		if (_city.peaceShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP86]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP87), 1);
		}
		if (_city.cleanseShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP110, EMOTE_PP111,
						       EMOTE_PP134]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP90), 1);
		}
		if (_city.ammoShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP96, EMOTE_PP97, EMOTE_PP98, EMOTE_PP99,
							EMOTE_PP117, EMOTE_PP91]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP93), 1);
		}
		if (_city.challengeShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP102,
						       EMOTE_PP130]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP117), 1);
		}
		if (_city.blankShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP118, EMOTE_PP119, EMOTE_PP120, EMOTE_PP121, EMOTE_PP123]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP122), 1);
		}
		if (_city.angelShrine) {
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP86), 1);
		}
		if (_city.bloodShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP100, EMOTE_PP105, EMOTE_PP112,
						       EMOTE_PP128]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP91), 1);
		}
		if (_city.beholsterShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP106, EMOTE_PP109,
						       EMOTE_PP131]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP92), 1);
		}
		if (_city.glassShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP103, EMOTE_PP104, EMOTE_PP107, EMOTE_PP108,
						       EMOTE_PP125, EMOTE_PP126, EMOTE_PP127]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP84), 1);
		}
		if (_city.yvShrine) {
			listeEmote = listeEmote.concat([EMOTE_PP129]);
			listeEmote.splice(listeEmote.indexOf(EMOTE_PP88), 1);
		}

		return randomFromList(listeEmote);
	}
	getAttackFromEmote(_emote) {
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

	launchRaid(_city, _special = "") {
		var _target = this.otherFighter(_city);
		var attackPower = _city.militaryPower;
		var defencePower = _target.militaryPower + _target.getTotalDefBonus();

		var phaseLevel = 0;

		if (_city.omegaBullets) {
			attackPower += _city.lastSummonValue;
			this.addMessage("Omega Bullets doubles the last unit's military power!");
		}
		if (_city.silverBullets && _target.armyJammed && !_city.duel.BOSS_FIGHT != null) {
			attackPower += attackPower;
		}
		if (_city.armyMindControl && !_city.duel.BOSS_FIGHT != null) {
			attackPower += Math.min(200, _target.militaryPower);
			defencePower -= Math.min(200, _target.militaryPower);
		}
		if (_city.armyBlessing && getRandomPercent() <= 50) {
			this.addMessage("The army has been blessed by the eldritch gods!");
			attackPower += attackPower;
		}
		if (_city.armyUnstable && getRandomPercent() <= 25) {
			this.addMessage("The army explodes!");
			attackPower = 0;
		}
		if (_target.armyDefence && !_city.duel.BOSS_FIGHT != null) {
			defencePower += Math.floor(_target.militaryPower/2);
		}

		if (_city.duel.BOSS_FIGHT != null) {
			return _target.damage(attackPower);
		}

		if (_city.armyPiercing) {
			phaseLevel += 0.25;
		}
		if (_city.ghostBullets) {
			phaseLevel += 0.25;
		}
		if (_special == "blast") {
			phaseLevel += 0.5;
		}
		if (phaseLevel > 0) {
			this.addMessage("A part of " + _city.getName() + "'s army is in the city and attacks it!");
			_target.damage(Math.floor(attackPower*phaseLevel));
			attackPower -= Math.floor(attackPower*phaseLevel);
		}

		if (attackPower <= defencePower) {
			this.addMessage("The raid fails!");
			_city.resetArmy();
			if (attackPower > defencePower - _target.militaryPower) {
				_target.militaryPower -= attackPower - defencePower + _target.militaryPower;
			}
		}
		else {
			this.addMessage("The raid is a success!");

			if (_special == "light") {
				attackPower += Math.floor(defencePower/2);
			}
			_target.damage(attackPower - defencePower);

			if (_city.hotLead) {
				_target.debuffFire = 4;
			}
			if (getRandomPercent() <= _target.redGuonStones*10) {
				_city.debuffFire = _target.redGuonStones + 1;
			}
			if (getRandomPercent() <= _target.greenGuonStones*10) {
				_target.heal(Math.floor((attackPower - defencePower)/2));
			}
			if (_special == "raid") {
				_target.grabbedPP = 1;
			}
			if (_special == "destroy") {
				var list = shuffleArray(["familiar", "junk", "glass", "dice", "angel", "peace", "yv", "hero",
							"cleanse", "blood", "beholster", "ammo", "challenge", "blank"]);
				for (var i in list) {
					if (_target[list[i] + "Shrine"]) {
						this.addMessage(_target.getName() + "'s " + list[i] + " shrine has been destroyed!");
						_target[list[i] + "Shrine"] = false;
						break;
					}
				}
			}

			if (_city.armyBouncing) {
				_city.armyBouncing = false;
				this.launchRaid(_city);
			}

			_target.resetArmy();
			_city.resetArmy();
		}
	}

	illegalGetCaught(_percentage) {
		if (this.BLIND_COUNTDOWN > 0 || this.TIME_STOP > 0) {
			return false;
		}
		return (getRandomPercent() < _percentage);
	}
	getRisk(_move) {
		if (this.EVENT_PP_PURGE) {
			return 0;
		}
		switch(_move) {
			case EMOTE_PP6:
				return 30;
			case EMOTE_PP10:
				return 80;
			case EMOTE_PP23:
				return 20;
			case EMOTE_PP25:
				return 60;
			case EMOTE_PP35:
				return 60;
			case EMOTE_PP36:
				return 40;
			case EMOTE_PP43:
				return 25;
			case EMOTE_PP44:
				return 40;
			case EMOTE_PP49:
				return 98;
			case EMOTE_PP57:
				return 20;
			case EMOTE_PP135:
				return 20;
			case EMOTE_PP139:
				return 50;
			case EMOTE_PP144:
				return 60;
		}
		return 0;
	}
	getDexChange(_move) {
		if (this.EVENT_PP_EQUALITY) {
			return 0;
		}
		switch(_move) {
			case EMOTE_SKIP:
				return -99999999999;
			case EMOTE_PP3:
				return -40;
			case EMOTE_PP26:
			case EMOTE_PP17:
			case EMOTE_PP4:
			case EMOTE_PP46:
			case EMOTE_PP6:
			case EMOTE_PP78:
			case EMOTE_PP34:
			case EMOTE_PP27:
				return -20;
			case EMOTE_PP2:
			case EMOTE_PP16:
			case EMOTE_PP24:
				return -10;
			case EMOTE_PP12:
			case EMOTE_PP22:
				return 20;
		}
		return 0;
	}

	bothFightersAction(_function, _firstFighter = this.getRandomFighter()) {
		if (this.TUTORIAL) {
			return _function(_firstFighter);
		}

		_function(_firstFighter);
		_function(this.otherFighter(_firstFighter));
	}
    allFightersAction(_function, _firstFighter = this.getRandomFighter()) {
        this.bothFightersAction(_function, _firstFighter);

        if (this.EVENT_BOSS != null) {
            _function(this.EVENT_BOSS);
        }
    }
    getRandomFighter() {
		if (this.TUTORIAL) {
			return this.FIGHTER1;
		}

		if (getRandomPercent() <= 50) {
			return this.FIGHTER1;
		}
		return this.FIGHTER2;
	}

	getOpponentOf(_fighter, _ignoreBoss = false) {
		if (this.TUTORIAL) {
			return this.FIGHTER1;
		}

		if (this.EVENT_BOSS != null) {
			if (_fighter == this.EVENT_BOSS) {
				if (this.EVENT_BOSS.bossTriggeredAt != null) return this.EVENT_BOSS.bossTriggeredAt;
				return this.getRandomFighter();
			}
			if (!_ignoreBoss) return this.EVENT_BOSS;
		}


		if (this.FIGHTER1.user.id == _fighter.user.id) {
			return this.FIGHTER2;
		}
		return this.FIGHTER1;
	}
	getOppOf(_fighter, _ignoreBoss = false) {
		return this.getOpponentOf(_fighter);
	}
	otherFighter(_fighter) {
		return this.getOpponentOf(_fighter, true);
	}

	setMusic(_music) {
		if (this.FIGHTER1.guildUser.voiceChannel) {
  			this.AUDIO_CHANNEL = this.FIGHTER1.guildUser.voiceChannel;
		}
		else if (this.FIGHTER2.guildUser.voiceChannel) {
  			this.AUDIO_CHANNEL = this.FIGHTER2.guildUser.voiceChannel;
		}
		else {
			if (this.AUDIO_CHANNEL != null) {
				this.AUDIO_CHANNEL.leave();
			}
			this.AUDIO_CHANNEL = null;
		}


		if (this.AUDIO_CHANNEL == null) return;

		var isSpeaking = true;
		var connection = CLIENT.voiceConnections.get(this.AUDIO_CHANNEL.guild.id);
		if (connection != undefined) {
			isSpeaking = connection.speaking;
		}
		if (_music == this.CURRENT_THEME && isSpeaking) return;
		if (this.TIMESTAMP + 3000 > +new Date()) return;

		this.CURRENT_THEME = _music;
		this.AUDIO_CHANNEL.leave();
		this.TIMESTAMP = +new Date();

		this.AUDIO_CHANNEL.join().then(function(_connection) {
			var dispatcher = _connection.playFile("./music/" + _music);
			dispatcher.resume();
		}).catch(err => console.log(err));
	}
	getBattleTheme() {
		if (this.FIGHTER1 == undefined) return MUSIC_PP1; // PP Puncher

		if (this.TIME_STOP > 0) {
			return MUSIC_PP12; // Searing Peaks 13 Solo
		}
		else if (this.EVENT_BOSS != null && this.EVENT_BOSS.themeSong != null) {
			return this.EVENT_BOSS.themeSong;
		}
		else if (this.GAY_TURNS > 0) {
			return MUSIC_PP4; // Huge Gay Night
		}
		else if (this.PP_ARMAGEDDON) {
			return MUSIC_PP3; // Psychodios
		}
		else if (this.FIGHTER1.livingGod || this.FIGHTER2.livingGod) {
			return MUSIC_PP2; // Ascend
		}

		return MUSIC_PP1; // PP Puncher
	}
}
