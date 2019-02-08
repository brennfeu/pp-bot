# PP Arbitrator

Discord bot for the Broforce server. Link : https://discord.gg/DJ8zYxc


## __BASE STATS :__

70 STR = HP  
30 DEX


## __FIGHTING STYLES :__

__@Big PP__ : +10 STR, -5 DEX  
__@Fast PP__ : +5 DEX, -10 STR  
__@Drunken PP__ : -15 DEX, 1/2 chance to be immune to pain and get no damage  
__@Hockey Puck PP__ : -45 STR, -45 DEX ah ah ah you asked for it  
__@Alien PP__ : -10 STR, +1 hemoragy on opponent when attacked  

## __RULES :__

Each turn, each figher selects an attack. There is DEX roll = D50+DEX. If the results are the same +-10, both people attack.  
Else, only the one with the higher result attack.  

Each attack has a specific action, and only 5 are allowed for 1 turn. You can try to cheat by using another move not allowed for this turn, but you have 50% chance to get disqualified !  
There are also events that may occur.  
When a STR value is at 0 or below, it means you lost !  


## __ATTACKS :__

"_this.STR_" means the STR value of the fighter using the move.  
"_opponent.STR_" means the STR value of the opponent of the fighter using the move.  
"_Illegal(X%)_" means that the move is illegal and the judge has X% chance to disqualify you.

### __COMMON MOVES :__

__Punching PP__ : Inflicts 10 + this.STR damages.  
__Punching PP Really Hard__ : Inflicts 20 + this.STR damages.  
__Hologram / Middle Finger__ : Inflicts 1000 damages.  
__Flex__ : Gives to the fighter between 1 and 30 STR.  
__High Five__ : If both fighters use this move, they both win.  

### __OTHER MOVES :__
__Kick__ :   Inflicts (20 + this.STR)*3 damages. Illegal(20%).  
__Brocketeer Dive__ : Inflicts 10 + this.STR damages. Opponent gets 0 DEX next turn. Illegal(15%).  
__Bullet__ : Inflicts 20 + this.STR / 10 damages, both fighters get -20 DEX.  
__Facehugger__ : Opponent gets STR/2, also gets Alien PP.  
__Time Kick / Hockey Puck__ : Gives you a Hockey Puck PP for the battle.  
__Dead Bro__ : Gives you a Fast PP for the battle.  
__Chest Burst__ : Gives you a Big PP for the battle.  
__Drinking 007__ : Gives you a Drunken PP for the battle.  
__Save / HoBro__ : Randomly changes one of your roles.  
__Trap Sign / Ready to burst__ : If the opponent uses his move this turn, he will have 0 DEX next turn.  
__Scout__ : Has 33% chance of getting +20DEX next turn (even if move failed).  
__Big Guy__ : Intimidates your opponent, he gets 0 DEX next turn. Has 33% chance of working even if the move failed.  
__Alert / Exclamation Point__ : Plays the same move you picked the turn before.  
__Confused / Interrogation Point__ : Plays a random move.  
__High Five Emote__ : Hold the attack selection for the next turn.  
__Steel__ : All damages inflicts 10% of the original damages (even if move failed).  
__Barrel__ : All damages inflicts 200% of the original damages (even if move failed).  
__Circumcised__ : Removes any status effect. Cannot be circumcised after that.  
__Overcircumcised__ : Gets immune to all status effect, gets STR/2. Cannot be overcircumcised or circumcised again after that.  
__Turkey__ : Both players gets 100 STR, but they also explode in 10 turns. Eating again reset the clock.  
__Save Me Sign__ : Both players get 50 STR, can be used by non-fighters.  
__Laughing Soul__ : Gives you 10 STR per moves your opponent missed. Illegal(75%)  
__Knockback / Swap__ : Reverse the natural STR values between you and your opponent.  
__Red Pill__ : Gets +5 STR and +3 DEX.  
__Bronan Slam__ : Builds up 20 damages bonus for the next attack.  
__Riot Shield__ : Gets a shield that will reflect the next damage on the opponent.  
__Boomerang__ : During the next 3 turns, your attacks will happen twice.  
__Pig__ : Gives you the Hog Squeezer tag, which gives you +2 STR per turn.  
__Doom Reverse / Mook Grenade__ : If you get below 0 STR in the next 3 turns, the opponent gets 50 damages.  
__SawBlade__ : +5 hemoragy on the opponent.  
__Acid__ : Gets an acid armor for 3 turns that damages the opponent (10 damages) every time you get damages.  
__Disembowled / Kidney Stone__ : Both players get 25 damages.  
__Headless / Big Kidney Stone__ : Both players get 50 damages.  
__Bombardment__ : Inflicts 1000 damages to both fighters. Illegal(60%).  
__Tank__ : Cannot get damaged this turn (even if move failed), inflicts 1000 damage. Illegal(90%).  
__Satan__ : Possess the enemy's PP, he will use the next attack as you in the next turn.  
__Big Satan__ : Each player makes 5 random moves. (3 legal moves and 2 moves that can be legal or not). Cannot abandon randomly.  
__Facehugged__ : Illegal moves can be used freely next turn. Has 33% chance to be permanent.  
__Suicide Mook__ : Plans a suicide bombing. Illegal(40%).  
__Explosion__ : If a suicide bombing has been planned, the opponent gets 1000 damages.  
__YES / Truffle Historian__ : A random fighter plays between 1 and 25 random moves.  
__Root of Nuisance / Pudding__ : Abandons the fight.  
__Brennijov / Brenn__ : Each stats of every players gets between +50 and -50.  
__Living God / Soup Calhoun__ : Gets 10 000 STR and 10 000 DEX. Illegal(98%).  
__Perhaps__ : Does nothing for this turn...


## __EVENTS :__

__PP Armageddon__ : Plays when 100 moves or more have been used. Each fighter gets 1 000 000 STR and 200 DEX. Each turn, they loose 5 000 STR.

Other moves have 1% chance to play each turn. Only one event can occur per turn.

__PP Enlightenment__ : Your PP temporarily become enlightened. All moves can now be used for this turn. Illegal moves are still illegal.  
__PP Purge__ : All PPs grow a mohawk and start to roam the streets. Illegal moves can now be used freely but the judge will still see you if you use unavailable moves.  
__Sexual Confusion__ : PPs are now only able to use the confused move for this turn.  
__Cthulhu Awakens__ : You have to beat Cthulhu by punching his huge PP in order to save the world. While cthulhu is alive, every damage goes to his PP and he attacks randomly one fighter per turn. You both win if you beat him.  
__Blood Moon__: If someone dies this turn, STR automatically stays at 1 but the remaining damages in the DEX.
__Accidental Summoning__ : Someone accidentaly plays Psychedeous on their phone and it summons Satan and the Ancient Fongus.

## __COMMANDS :__

To use a command, send a message following the template : "<tag the bot> <command> <optionnal argument>".  
Commands :  
__duel @someone__ : start a duel against the tagged person.  
__style__ : allows you to change your PP fighting style.  
__help__ : gets help.  
