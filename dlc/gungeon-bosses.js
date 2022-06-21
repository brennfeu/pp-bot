var GungeonDragun = class extends Boss {
    constructor(_duel) {
        super(_duel, "High Dragun", 500);
        this.baseDamage = 20;
        this.mimicPercentage = 20;

        this.imageURL = "";
    }

    triggerDeath() {
        this.duel.addMessage("The " + this.getName() + " roars and explodes, as his skull falls on the ground!");
        super.triggerDeath();
    }
}
