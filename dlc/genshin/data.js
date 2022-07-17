var EMOTE_GI1 = "993807407933304844"; // Acquaint Fate
var EMOTE_GI2 = "993807462589280348"; // Intertwined Fate
var EMOTE_GI9 = "997194908035194970"; // Pyro
var EMOTE_GI10 = "997194906810466375"; // Hydro
var EMOTE_GI11 = "997194905514426548"; // Geo
var EMOTE_GI12 = "997194904117706823"; // Electro
var EMOTE_GI13 = "997194903077531718"; // Dendro
var EMOTE_GI14 = "997194901500469299"; // Cryo
var EMOTE_GI15 = "997194900036665485"; // Anemo
var GENSHIN_AVAILABLE_EMOTE_LIST = [ EMOTE_GI1, EMOTE_GI2, EMOTE_GI9, EMOTE_GI10, EMOTE_GI11, EMOTE_GI12,
    EMOTE_GI13, EMOTE_GI14, EMOTE_GI15 ];

var EMOTE_GI3 = "994142332213526569"; // Guide to Afterlife
var EMOTE_GI4 = "994142331169148988"; // Spirit Soother
var EMOTE_GI5 = "996320267980767262"; // Nightrider
var EMOTE_GI6 = "996320266055585873"; // Midnight Phantasmagoria
var EMOTE_GI7 = "996344695091372063"; // Explosive Puppet
var EMOTE_GI8 = "996344696001548350"; // Fiery Rain
var GENSHIN_SKILL_TREE_EMOTE_LIST = [ EMOTE_GI3, EMOTE_GI4, EMOTE_GI5, EMOTE_GI6, EMOTE_GI7, EMOTE_GI8 ];
EMOTE_LIST = EMOTE_LIST.concat(GENSHIN_AVAILABLE_EMOTE_LIST).concat(GENSHIN_SKILL_TREE_EMOTE_LIST);

// CD = og cd / 3
var CHAR_GI1 = { name: "Hu Tao",
    imageURL: "https://cdn.discordapp.com/attachments/682970589371170889/996321606815207434/Hu_Tao.webp",
    element: "Pyro",
    bannerName: "Moment of Bloom",

    skillEmote: EMOTE_GI3,
    skillCD: 5,

    burstEmote: EMOTE_GI4,
    burstCD: 5,
    burstEnergyCost: 60,

    statsToDisplay: [ "ATK", "HP" ],
    ascensionStat: "TODO",
}
var CHAR_GI2 = { name: "Fischl",
    imageURL: "https://cdn.discordapp.com/attachments/682970589371170889/996321627807678544/Fischl.webp",
    element: "Electro",

    skillEmote: EMOTE_GI5,
    skillCD: 8,

    burstEmote: EMOTE_GI6,
    burstCD: 5,
    burstEnergyCost: 60,

    statsToDisplay: [ "ATK" ],
    ascensionStat: "TODO",
}
var CHAR_GI3 = { name: "Amber",
    imageURL: "https://cdn.discordapp.com/attachments/667337519477817363/996343288007241829/Amber.webp",
    element: "Pyro",

    skillEmote: EMOTE_GI7,
    skillCD: 5,

    burstEmote: EMOTE_GI8,
    burstCD: 4,
    burstEnergyCost: 40,

    statsToDisplay: [ "ATK" ],
    ascensionStat: "TODO",
}
var GENSHIN_FIVESTARS_CHARACTER_LIST = [ CHAR_GI1 ];
var GENSHIN_CHARACTER_LIST = GENSHIN_FIVESTARS_CHARACTER_LIST.concat([ CHAR_GI3, CHAR_GI2 ]);

var GENSHIN_ELEMENT_LIST = [ "Physical", "Pyro", "Hydro", "Anemo", "Electro", "Dendro", "Cryo", "Geo" ];

var SYNERGY_GI0 = "TODO";
var SYNERGY_GI1 = "Pyro Resonance - TODO";
var SYNERGY_GI2 = "Hydro Resonance - TODO";
var SYNERGY_GI3 = "Anemo Resonance - TODO";
var SYNERGY_GI4 = "Electro Resonance - TODO";
var SYNERGY_GI5 = "Dendro Resonance - TODO";
var SYNERGY_GI6 = "Cryo Resonance - TODO";
var SYNERGY_GI7 = "Geo Resonance - TODO";
var GENSHIN_SYNERGIES = [ SYNERGY_GI1, SYNERGY_GI2, SYNERGY_GI3, SYNERGY_GI4, SYNERGY_GI5,
    SYNERGY_GI6, SYNERGY_GI7, SYNERGY_GI0 ];
