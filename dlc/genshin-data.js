var EMOTE_GI1 = "993807407933304844"; // Acquaint Fate
var EMOTE_GI2 = "993807462589280348"; // Intertwined Fate
var GENSHIN_AVAILABLE_EMOTE_LIST = [ EMOTE_GI1, EMOTE_GI2 ];

var EMOTE_GI3 = "994142332213526569"; // Guide to Afterlife
var EMOTE_GI4 = "994142331169148988"; // Spirit Soother
var EMOTE_GI5 = "996320267980767262"; // Nightrider
var EMOTE_GI6 = "996320266055585873"; // Midnight Phantasmagoria
var GENSHIN_SKILL_TREE_EMOTE_LIST = [ EMOTE_GI3, EMOTE_GI4 ];

// CD = og cd / 3
var CHAR_GI1 = { name: "Hu Tao",
    imageURL: "https://cdn.discordapp.com/attachments/682970589371170889/996321606815207434/Hu_Tao.webp",
    bannerName: "Moment of Bloom",

    skillEmote: EMOTE_GI3,
    skillCD: 5,

    burstEmote: EMOTE_GI4,
    burstCD: 5
}
var CHAR_GI2 = { name: "Fischl",
    imageURL: "https://cdn.discordapp.com/attachments/682970589371170889/996321627807678544/Fischl.webp",

    skillEmote: EMOTE_GI5,
    skillCD: 8,

    burstEmote: EMOTE_GI6,
    burstCD: 5
}
var GENSHIN_FIVESTARS_CHARACTER_LIST = [ CHAR_GI1 ];
var GENSHIN_CHARACTER_LIST = GENSHIN_FIVESTARS_CHARACTER_LIST.concat([ CHAR_GI2 ]);
