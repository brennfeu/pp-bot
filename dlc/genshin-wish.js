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
    this.sendMessages();
    this.addGenshinSkillTree(char);
}
