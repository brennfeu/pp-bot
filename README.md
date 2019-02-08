
/!\  GO CHECK THE RELEASE TO GET A WORKING VERSION

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

### __COMMON MOVES :__

__Punching PP__ : Inflicts 10 + this.STR damages  
__Punching PP Really Hard__ : Inflicts 20 + this.STR damages  
__Hologram / Middle Finger__ : Inflicts 1000 damages  
__Flex__ : Gives to the fighter between 1 and 30 STR;  
__High Five__ : If both fighters use this move, they both win  

### __OTHER MOVES :__
__Kick__ : Does 3* the damages of "Punching PP Really Hard"  
__Turkey__ : Both players gets 100 STR, but they also explode in 10 turns. Eating again reset the clock.  
__Trap Sign / Ready to burst__ : If the opponent uses his move this turn, he will have 0 DEX next turn.  
__Time Kick / Hockey Puck__ : Gives you a Hockey Puck PP for the battle.  
__Tank__ : Cannot get damaged this turn (even if move failed), inflicts 1000 damage.  
__Steel__ : All damages inflicts 10% of the original damages (even if move failed).  
__Barrel__ : All damages inflicts 200% of the original damages (even if move failed).  
__Circumcised__ : Removes any status effect. Cannot be circumcised after that.  
__Overcircumcised__ : Gets immune to all status effect, gets STR/2. Cannot be overcircumcised or circumcised again after that.  
__Scout__ : Has 33% chance of getting +20DEX next turn (even if move failed).  
__SawBlade__ : +5 hemoragy on the opponent.  
__Save / HoBro__ : Randomly changee one of your roles.  
__Save Me Sign__ : Both players get 50 STR, can be used by non-fighters.  
__Satan__ : Possess the enemy's PP, he will use the next attack as you in the next turn.  
__Riot Shield__ : Gets a shield that will reflect the next damage on the opponent.  
__Red Pill__ : Gets +5 STR and +3 DEX.  
__Pig__ : Gives you the Hog Squeezer tag, which gives you +2 STR per turn.  
__Doom Reverse / Mook Grenade__ : If you get below 0 STR in the next 3 turns, the opponent gets 50 damages.  
__Acid__ : Gets an acid armor for 3 turns that damages the opponent (10 damages) every time you get damages.  
__Laughing Soul__ : Gives you 10 STR per moves your opponent missed.  
__Knockback / Swap__ : Reverse the natural STR values between you and your opponent.  
__Bombardment__ : Inflicts 1000 damages to both fighters.  
__Big Satan__ : Each player makes 5 random moves. (3 legal moves and 2 moves that can be legal or not). Cannot abandon randomly. 
__Bullet__ : Inflicts 20 + this.STR / 10 damages, both fighters get -20 DEX. 
__Big Guy__ : Intimidates your opponent, he gets 0 DEX next turn. Has 33% chance of working even if the move failed.  
__Alert / Exclamation Point__ : Plays the same move you picked the turn before.  
__High Five Emote__ : Hold the attack selection for the next turn.  
__Headless / Big Kidney Stone__ : Both players get 50 damages.  

