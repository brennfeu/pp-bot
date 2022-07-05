eval(fs.readFileSync("dlc/genshin-data.js").toString());
eval(fs.readFileSync("dlc/genshin-wish.js").toString());

var DLC_GENSHIN = {
    "name": "Teyvat Skills",
    "description": "You arrive in Teyvat, still ready to take down your opponent. Roll for characters and obtain their abilities!",
    "imageURL": "https://cdn.discordapp.com/attachments/667337519477817363/991992955940388904/genshin.jpg",
    "emotes": GENSHIN_AVAILABLE_EMOTE_LIST
}
//MERGABLE_WORLDS.push(DLC_GENSHIN);
