Duel.prototype.newGenshinBanner = function(_char = randomFromList(GENSHIN_FIVESTARS_CHARACTER_LIST)) {
    this.addMessage("**===== TEYVAT BANNER =====**", true, {embed:
        {
            "title": _char.bannerName,
            "image": { "url": _char.imageURL }
        }
    });
    this.sendMessages();
    this.GI_BANNER_CHAR = _char;
}

Fighter.prototype.genshinRoll = function() {
    // 5*
    var char = this.duel.GI_BANNER_CHAR;
    // 4*
    if (getRandomPercent() > 6) {
        while (GENSHIN_FIVESTARS_CHARACTER_LIST.indexOf(char) >= 0) {
            char = randomFromList(GENSHIN_CHARACTER_LIST);
        }
    }

    this.duel.addMessage(this.getName() + " obtains " + char.name + "!");
    this.duel.addMessage(char.imageURL);
    this.duel.sendMessages();
    this.addGenshinSkillTree(char);

    // random chance to get more
    if (getRandomPercent() <= 5) this.genshinRoll();
}
Fighter.prototype.addGenshinSkillTree = function(_skillTree) {
    var index = GENSHIN_CHARACTER_LIST.indexOf(_skillTree);
    if (this.giSkillTrees[index] == undefined) {
        this.giSkillTrees[index] = {
            "constellation": 0,
            "skillCD": 0,
            "burstCD": 0
        };
        return;
    }

    if (this.giSkillTrees[index].constellation < 6) {
        this.giSkillTrees[index].constellation += 1;
        return;
    }

    // TODO new rolls
}
