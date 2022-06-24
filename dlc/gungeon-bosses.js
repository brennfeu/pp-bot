var GungeonDragun = class extends Boss {
    constructor(_duel) {
        super(_duel, "High Dragun", 2000);
        this.baseDamage = 50;

        this.imageURL = "https://cdn.discordapp.com/attachments/667337519477817363/989822241359421450/unknown.png";
    }

    triggerDeath() {
        this.duel.addMessage("The " + this.getName() + " roars and explodes, as his skull falls on the ground!");
        super.triggerDeath();
        this.duel.addMessage("-----------------");
        this.duel.addMessage("**You both enter the Gungeon's final chamber.**");
        this.duel.GU_CURRENT_FLOOR = FLOOR_GU6;
    }
}
