function kusanaliBotMessage(_message) {
    if(_message.author.bot) return;

    if (getRandomPercent() < 10) updatePlayer(_message.author.id, _message.author.username.secureXSS());
    k_resetUserDailyProgress(_message.author.id);
    var points_before = k_getUserPoints(_message.author.id);
    var points_after = k_addMessageCount(_message.author.id, _message.author.username.secureXSS());
    for (var i in K_AR_LIST) { // check if AR up
        if (points_before >= K_AR_LIST[i].xp || K_AR_LIST[i].xp > points_after) continue;

        var _current_ar = parseInt(i)+1;
        var _mora = _current_ar*10000;
        k_sendMessage(K_PROFIL_PAIMON_CHAD,
            "Nouveau Rang d'Ascension Atteint !",
            "**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **" + _current_ar + "** !\n\nTu gagnes " + sciText(_mora) + " Moras !",
            _message.channel);
        k_checkRoles(_message);

        executeQuery('UPDATE Player SET k_mora=(k_mora+' + _mora + ') WHERE id = ' + _message.author.id);
    }

    // dailies
    var dailies = k_getUserDailyProgress(_message.author.id);
    k_increaseMissionProgress(_message.author.id, "send_messages", _message.channel, dailies);
    if (_message.mentions.users.array().length > 0) for (var i in _message.mentions.users.array()) k_increaseMissionProgress(_message.author.id, "tag_people", _message.channel, dailies);
    if (Array.from(_message.attachments).length > 0) for (var i in Array.from(_message.attachments)) k_increaseMissionProgress(_message.author.id, "send_pictures", _message.channel, dailies);
    for (var i in dailies) { // use_word / send_links
        if (dailies[i].type != "use_word" && dailies[i].type != "send_links") continue;

        var word = "";
        if (dailies[i].type == "send_links") word = "http";
        else word = dailies[i].word;

        var nb = ("aaa-" + _message.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "-aaa").split(word).length-1;
        for (var j in Array.from(Array(nb).keys())) k_increaseMissionProgress(_message.author.id, dailies[i].type, _message.channel, dailies);
    }

    // thumbs up nahida
    if (_message.content.trim() == GIF_NAHIDA) return _message.react(EMOTE_KUSANALI);
    else if (_message.content.trim().toLowerCase().includes("hentai")) return _message.react(EMOTE_SUS);
    else if (_message.content.trim().includes("BONNE JOURNEE") || _message.content.trim().includes("BONNE JOURNÉE")) {
        if (_message.author.id == "903277873601863682") setTimeout(function() { _message.channel.send("🎉🎉 BONNE JOURNÉE 🎉🎉"); }, 15000);
        return _message.react("🎉");
    }

    if (_message.channel.guild.id == K_SERVER_ID) { // check role voyageur
        _message.guild.roles.fetch(ROLE_VOYAGEUR)
        .then(function(_role) {
            // check doesn't already have role
            if (_message.member.roles.cache.get(_role.id) != undefined) return;

            _message.member.roles.add(_role);
            k_sendMessage(K_PROFIL_PAIMON_CHAD,
                "Bienvenue Voyageur !",
                "Vous avez maintenant le rôle " + _message.author.username.secureXSS() + " !",
                _message.channel);
        })
        .catch(console.error);
    }

    var commande = _message.content.trim().toLowerCase();
    if (!commande.startsWith('%')) return;
    commande = commande.substring(1).split(" ")[0];


    if (commande == "fleurs") return _message.channel.send(GIF_NAHIDA);
    if (commande == "gun") return _message.channel.send(GIF_GUN);
    if (commande == "kuru") return _message.channel.send(GIF_KURU);
    if (commande == "cryo") return _message.channel.send(GIF_CRYO);
    if (commande == "tada") return _message.channel.send(GIF_BESTGRILS);
    if (commande == "kafkval") return _message.channel.send(GIF_KAFKYA);

    if (commande == "rank") {
        var command_user = _message.author;
        if (_message.mentions.users.array().length >= 1) command_user = _message.mentions.users.last();

        var p = k_getUserPoints(command_user.id);
        var ar = k_getARFromPoints(p);
        var next_ar = K_AR_LIST[ar].xp;
        var n = k_getUserPlacement(command_user.id);

        var txt = "Points d'Experience : **" + sciText(p) +
            "**\nRang d'Aventurier : **" + ar +
            "**\nPlacement du serveur : **" + n +
            "e**\n\n**AR" + (1+ar) + "** à **" + sciText(next_ar) +
            "** xp (**" + sciText(next_ar-p) + "** restants)";

        return k_sendMessage(K_PROFIL_PAIMON_STATUE,
            command_user.username.secureXSS(),
            txt,
            _message.channel,
            command_user.avatarURL());
    }
    if (commande == "status") {
        var command_user = _message.author;
        if (_message.mentions.users.array().length >= 1) command_user = _message.mentions.users.last();

        var p = k_getUserPoints(command_user.id);
        var ar = k_getARFromPoints(p);
        var m = k_getUserMora(command_user.id);
        var n = k_getUserPlacement(command_user.id);
        var v = k_getUserWishes(command_user.id);
        var pi = k_getUserPity(command_user.id);
        var inventory = executeQuery("SELECT * FROM K_Inventory WHERE id_player = " + command_user.id);

        var txt = "Points d'Experience : **" + sciText(p) +
            "**\nRang d'Aventurier : **" + ar +
            "**\nPlacement du serveur : **" + n +
            "e**\n\nVœux : **" + sciText(v) +
            "**\nPity : **" + sciText(pi) +
            "/70**\nPersos : **" + inventory.length + "/" + K_GACHA_CHARACTERS.length +
            "**\n\nMora : **" + sciText(m) +
            "**";

        var xp_date = k_getUserDoubleXpDate(command_user.id);
        if (k_getToday() < xp_date)
            txt += "\nDouble XP jusqu'au **" + formatDate(new Date(xp_date)) + "**";

        return k_sendMessage(K_PROFIL_PAIMON_STATUE,
            command_user.username.secureXSS(),
            txt,
            _message.channel,
            command_user.avatarURL());
    }
    if (commande == "leaderboard") {
        var l = k_getLeaderboard();
        var txt = "";
        for (var i in l) {
            txt += "**" + (parseInt(i)+1) + " - " + l[i].username + "** (AR" + k_getARFromPoints(l[i].k_points) + "): " + sciText(l[i].k_points) + " xp\n";
        }
        return k_sendMessage(K_PROFIL_PAIMON_STATUE, "Leaderboard Actuel", txt, _message.channel);
    }
    if (commande == "legacy") {
        k_sendMessage(K_PROFIL_KUSANALI, "Ajout des rôles manquants", "Les rôles manquants devraient arriver. Si ça marche.", _message.channel);
        return k_checkRoles(_message);
    }
    if (commande == "links") {
        return k_sendMessage(K_PROFIL_LIBEN, "Liens",
            "**Twitter**: https://twitter.com/LibenWhen \n" +
            "**Discord**: https://discord.com/invite/stftBnMhRE \n" +
            "**Tiktok**: https://www.tiktok.com/@libenwhen \n" +
            "**Paypal**: https://www.paypal.me/Libenwhen",
        _message.channel);
    }
    if (commande == "paypal") {
        return _message.channel.send("Non.\n(paypal de liben dispo avec la commande '%links')");
    }
    if (commande == "dailies") {
        var dailies = k_getUserDailyProgress(_message.author.id);
        var txt = "";
        for (var i in dailies) {
            txt += K_MISSION_TITLES[dailies[i].type];
            txt = txt.replace("[x]", '**' + dailies[i].target + '**');
            if (dailies[i].type  == "use_word") txt = txt.replace("[y]", '**' + dailies[i].word + '**');
            txt += " - ("  + dailies[i].progress + '/' + dailies[i].target + ")\n";
        }

        return k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes",
            txt, _message.channel);
    }
    if (commande == "shop") {
        var args = _message.content.trim().toLowerCase().split(" ");
        if (args.length == 1) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
            "**Double XP pendant 24h** ( _doublexp_ ) - 200 000 Moras\n" +
            "**Changement de couleur** ( _color_ [ _mondstadt_ / _liyue_ / _inazuma_ / _sumeru_ / _fontaine_ / _natlan_ / _snezhnaya_ / _khaenri'ah_ / _celestia_ ] ) - 500 000 Moras\n" +
            "**Lot de 10 vœux** ( _wishes_ ) - 500 000 Moras\n" +
            "\nExemple de commande d'achat : ```%shop color inazuma```", _message.channel);

        var mora = k_getUserMora(_message.author.id);
        if (args[1] == "doublexp") {
            if (mora <= 200000) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Vous n'avez pas assez de moras.", _message.channel);

            var date = Math.max(k_getUserDoubleXpDate(_message.author.id), k_getToday());
            date += 86400000; // +1 day

            var date_message = formatDate(new Date(date));
            executeQuery('UPDATE Player SET k_doublexp = ' + date + ', k_mora = (k_mora-200000) WHERE id = ' + _message.author.id);

            return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Double XP jusqu'au " + date_message + ", très bien !", _message.channel);
        }
        if (args[1] == "color") {
            if (mora <= 500000) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Vous n'avez pas assez de moras.", _message.channel);
            if (args.length == 2) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Très bien, mais il faut me préciser la couleur.", _message.channel);
            if (K_COLOR_ROLES[args[2]] == undefined) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Je n'ai pas cette couleur en stock.", _message.channel);

            for (var i in K_COLOR_ROLES) {
                _message.guild.roles.fetch(K_COLOR_ROLES[i])
                .then(function(_role) {
                    if (_message.member.roles.cache.get(_role.id) == undefined) return;
                    _message.member.roles.remove(_role);

                })
                .catch(console.error);
            }
            _message.guild.roles.fetch(K_COLOR_ROLES[args[2]])
            .then(function(_role) { _message.member.roles.add(_role); })
            .catch(console.error);
            executeQuery('UPDATE Player SET k_mora = (k_mora-500000) WHERE id = ' + _message.author.id);

            return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Un changement de couleur, très bien !", _message.channel);
        }
        if (args[1] == "wishes") {
            if (mora <= 500000) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Vous n'avez pas assez de moras.", _message.channel);

            executeQuery('UPDATE Player SET k_wishes = (k_wishes+1), k_mora = (k_mora-500000) WHERE id = ' + _message.author.id);

            return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Un lot de 10 vœux, très bien !", _message.channel);
        }

        return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
            "Je n'ai pas ça en stock, désolé.", _message.channel);
    }
    if (commande == "banner") {
        var banner = k_getTodaysBanner();
        _message.channel.send(banner.image_link);
        if (banner.element != "cryo") return;

        var banner_omni = K_GACHA_BANNERS.find(o => o.element == "omni");
        return _message.channel.send(banner_omni.image_link);
    }
    if (commande == "pull") {
        var voeux = k_getUserWishes(_message.author.id);
        if (voeux < 10) return _message.channel.send("Pas assez de vœux.");

        var todaysElement = k_getTodaysBanner().element;
        var pity = k_getUserPity(_message.author.id);
        var loot = [];
        var animation = GIF_ANIMATION_VOEU_4S;

        // check omni
        var args = _message.content.toLowerCase().split(" ");
        if (args.length > 1 && args[1] == "omni" && todaysElement != "cryo") return _message.channel.send("Bannière Omni indisponible.");
        else if (args.length > 1 && [ "omni", "cryo" ].indexOf(args[1]) > -1 && todaysElement == "cryo") todaysElement = args[1];
        else if (todaysElement == "cryo" && args.length <= 1) return _message.channel.send("Veuillez spécifier la bannière.\n```%pull cryo // OU // %pull omni```");

        randomCharacters = shuffleArray(K_GACHA_CHARACTERS);
        loot.push(randomCharacters.find(o => o.stars == 4));
        var attempts = 9; // 10 - obligatory 4 stars

        pity += 10;
        if (pity >= 70) { // 5* !!
            pity = 0; attempts -= 1;

            randomCharacters = shuffleArray(K_GACHA_CHARACTERS);
            loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
            animation = GIF_ANIMATION_VOEU_5S;
        }

        for (var i in Array.from(Array(attempts).keys())) { // regular rolls
            if (getRandomPercent() <= 2) { // 5* !!
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS);
                loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
                animation = GIF_ANIMATION_VOEU_5S;
            }
            else if (getRandomPercent() <= 5) { // 4* !
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS);
                loot.push(randomCharacters.find(o => o.stars == 4));
            }
        }

        executeQuery('UPDATE Player SET k_wishes=(k_wishes-1), k_pity='+pity+' WHERE id = ' + _message.author.id);
        var message_files = [];
        loot.sort(function(a, b) {
            return b.stars - a.stars;
        });
        for (var i in loot) {
            try { executeQuery("INSERT INTO K_Inventory(id_character, id_player) VALUES("+
                loot[i].id + ", " + _message.author.id + ");"); } catch(e) {}
            executeQuery("UPDATE K_Inventory SET amount=(amount+1) " +
                "WHERE id_character='" + loot[i].id + "' AND id_player='" + _message.author.id + "';");

            var message_image = {};
            message_image["attachment"] = loot[i].art_link;
            message_image["name"] = 'SPOILER_gacha'+i+'.png';
            message_files.push(message_image);
        }

        return _message.channel.send(animation).then(function (_message2) {
			setTimeout(function(_message3, message_files) {
                _message3.channel.send({ files: message_files });
                _message3.delete();
            }, GIF_ANIMATION_TIMING, _message2, message_files);
		});
    }
    if (commande == "characters") {
        var command_user = _message.author;
        if (_message.mentions.users.array().length >= 1) command_user = _message.mentions.users.last();

        var inventory = executeQuery("SELECT * FROM K_Inventory WHERE id_player = " + command_user.id);
        var characters = [];
        var txt = "";
        var last_region = 0;

        for (var i in inventory) characters.push(K_GACHA_CHARACTERS.find(o => o.id == inventory[i].id_character));
        characters.sort(function(a, b) {
            if (a.id_region != b.id_region) return a.id_region - b.id_region;
            if (a.stars != b.stars) return b.stars - a.stars;

            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        });

        for (var i in characters) {
            var amount = parseInt(inventory.find(o => o.id_character == characters[i].id).amount);
            if (characters[i].id_region != last_region) {
                var region = K_GACHA_REGIONS.find(o => o.id == characters[i].id_region);
                txt += "### **" + region.name.toUpperCase() + "**\n";
                last_region = characters[i].id_region;
            }

            txt += "- ";
            if (characters[i].stars == 5) txt += "_";
            txt += characters[i].name;
            if (amount > 1) txt += " **C" + (amount-1) + "**";
            if (characters[i].stars == 5) txt += "_";
            txt += "\n"
        }
        if (txt == "") txt = "...";

        return k_sendMessage(K_PROFIL_PAIMON_STATUE, "Inventaire de Personnages", txt, _message.channel);
    }
    if (commande == "reset_cache") {
        k_loadGachaData();
        return _message.reply("fait !");
    }
    if (commande == "help") {
        k_sendMessage(K_PROFIL_KUSANALI, "Commandes",
            "**banner**: Affiche la bannière actuelle.\n" +
            "**characters _(@someone)_**: Affiche la liste des personnages obtenus.\n" +
            "**dailies**: Affiche la listes des missions quotidiennes.\n" +
            "**help**: Euh...\n" +
            "**leaderboard**: Affiche le top 10 du serveur.\n" +
            "**legacy**: Affecte les rôles manquants.\n" +
            "**links**: Envoie les liens vers les résaux sociaux du serveur.\n" +
            "**paypal**: Non.\n" +
            "**pull**: Fais une multi.\n" +
            "**rank _(@someone)_**: Affiche ton statut actuel sur le leaderboard.\n" +
            "**shop**: Pour dépenser les moras.\n" +
            "**status _(@someone)_**: Affiche ton statut actuel sur le serveur.\n" +

            "\n" +
            "**cryo**: " + displayEmote("1133393876548321342") + "\n" +
            "**fleurs**: FC Loli des Fleurs\n" +
            "**gun**: Bam !\n" +
            "**kafkval**: HSR c'est joli des fois quand même...\n" +
            "**kuru**: Kuru kuru !\n" +
            "**tada**: HU TAO ET FISCHL WOOOOOOO !!\n" +

            "",
        _message.channel);
        return k_checkRoles(_message);
    }

    return _message.reply("je ne connais pas cette commande :/");
}

function k_getUserAR(_userId) {
    return k_getARFromPoints(k_getUserPoints(_userId));
}
function k_getARFromPoints(_p) {
    for (var i in K_AR_LIST) {
        if (K_AR_LIST[i].xp > _p) return parseInt(i);
    }
    return 60;
}

function k_sendMessage(_profil, _title, _message, _channel, _avatar = undefined) {
    _channel.fetchWebhooks()
    .then(function(_hooks) {
        for (const [ _key, _value ] of _hooks) {
            if (_value.owner.id == CLIENT.user.id) return k_sendWebhookMessage(_value, _profil, _title, _message, _channel, _avatar);
        }

        _channel.createWebhook('Kusana-Leaks', {
            name: 'Kusana-Leaks',
            avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png'
        })
        .then(function(_webhook) {
            k_sendWebhookMessage(_webhook, _profil, _title, _message, _channel, _avatar);
        })
        .catch(function(_e) { console.log(_e) });
    })
    .catch(function(_e) { console.log(_e) });
}
function k_sendWebhookMessage(_webhook, _profil, _title, _message, _channel, _avatar = undefined) {
    webhookClient = new DISCORD.WebhookClient(_webhook.id, _webhook.token);

    var embedMessage = new DISCORD.MessageEmbed();
    embedMessage.setTitle("**" + _title + "**");
    embedMessage.setDescription(sciText(_message));
    embedMessage.setColor([ 125, 171, 73 ]);
    embedMessage.setFooter('Perdu ? Tapez \'%help\' pour plus de détails.', 'https://cdn.discordapp.com/attachments/721498678925328434/721511440598696056/arbitrator.png');
    if (_avatar != undefined) embedMessage.setThumbnail(_avatar);

    webhookClient.send('', {
        username: _profil.nom,
        avatarURL: _profil.pfp,
        embeds: [ embedMessage ]
    })
    .catch(function(_e) {
        console.log(_e);
        webhookClient.send(_message)
        .catch(function(_e) {
            console.log(_e);
            _message.channel.send(_message);
        })
    });
}

function k_generateDailyMissions() {
    var json = {};

    while (Object.keys(json).length < 4) {
        var currentId = Object.keys(json).length;
        var randomMission = randomFromList([ "send_messages", "send_pictures", "use_reactions", "send_links", "tag_people", "use_word" ]);

        var check = true;
        for (var i in json) if (json[i].type == randomMission) check = false;
        if (!check) continue;

        json[currentId] = {};
        json[currentId].type = randomMission;
        json[currentId].progress = 0;
        json[currentId].completed = false;

        switch(randomMission) {
            case "send_messages":
                json[currentId].target = randomFromList([10, 15, 20, 25, 30]);
                break;
            case "send_pictures":
                json[currentId].target = randomFromList([1, 1, 1, 2]);
                break;
            case "use_reactions":
                json[currentId].target = randomFromList([3, 4, 5]);
                break;
            case "send_links":
                json[currentId].target = randomFromList([2, 3, 4]);
                break;
            case "tag_people":
                json[currentId].target = randomFromList([2, 3, 4]);
                break;
            case "use_word":
                json[currentId].target = randomFromList([2, 3, 4]);
                json[currentId].word = randomFromList(["leak", "nahida", "loli", "genshin", "liben", "paypal", "lilas", "bio", "paimon", "dainsleif", "primo", "mora", "hentai", "abyss", "discord", "twitter", "kaleidoscope", "atiss", "novel", "sdf", "fischl", "meta", "design", "lore", "archon"]);
                break;
        }
    }

    return json;
}
function k_increaseMissionProgress(_userId, _missionType, _channel, _dailies = "") {
    if (_dailies == "") _dailies = k_getUserDailyProgress(_userId);
    var dailies = _dailies;
    var mission_accomplie = false;

    for (var i in dailies) {
        if (dailies[i].type != _missionType) continue;
        if (dailies[i].progress >= dailies[i].target) return;

        dailies[i].progress += 1;
        executeQuery('UPDATE Player SET k_dailies_progress=\'' + JSON.stringify(dailies) +
    		'\' WHERE id = ' + _userId);
        if (dailies[i].progress < dailies[i].target) return;

        var mora = k_getUserAR(_userId)*500;
        executeQuery('UPDATE Player SET k_mora=' + (k_getUserMora(_userId)+mora) + ' WHERE id = ' + _userId);

        var txt = K_MISSION_TITLES[dailies[i].type];
        txt = txt.replace("[x]", '**' + dailies[i].target + '**');
        if (dailies[i].type  == "use_word") txt = txt.replace("[y]", '**' + dailies[i].word + '**');
        txt += " - **Mission Accomplie !**\nVous avez gagné **" + sciText(mora) + "** Moras !";
        k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes",
            txt, _channel);
        mission_accomplie = true;
    }

    // all dailies done ?
    if (!mission_accomplie) return;
    for (var i in dailies) if (dailies[i].progress < dailies[i].target) return;
    executeQuery('UPDATE Player SET k_wishes=(k_wishes+1) WHERE id = ' + _userId);
    k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes",
        "Vous avez fait toutes vos missions quotidiennes.\nVoici un lot de **10 vœux** pour vos efforts.", _channel);
}

function k_checkRoles(_message) {
    var ar = k_getUserAR(_message.author.id);

    for (var i in K_AR_LIST) {
        if (parseInt(i) >= ar) return;

        if (K_AR_LIST[i].role != undefined) {
            _message.guild.roles.fetch(K_AR_LIST[i].role)
            .then(function(_role) {
                // check doesn't already have role
                if (_message.member.roles.cache.get(_role.id) != undefined) return;

                _message.member.roles.add(_role);
                k_sendMessage(K_PROFIL_PAIMON_CHAD,
                    "Nouveau Role obtenu !",
                    "**Bravo " + _message.author.username.secureXSS() + "**, tu as obtenu le rôle **" + _role.name + "** !",
                    _message.channel);
            })
            .catch(console.error);
        }
    }
}

function k_getToday() {
    return Date.now();
}
function k_getTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
}

function k_getTodaysBanner() {
    var currentDay = new Date().getDay();
    var elementsDays = [ "cryo", "anemo", "geo", "electro", "dendro", "hydro", "pyro" ]
    return K_GACHA_BANNERS.find(o => o.element == elementsDays[currentDay]);
}
function k_loadGachaData() {
    K_GACHA_CHARACTERS = executeQuery("SELECT * FROM K_Character;");
    K_GACHA_BANNERS = executeQuery("SELECT * FROM K_Banner;");
    K_GACHA_REGIONS = executeQuery("SELECT * FROM K_Region;");
}

var GIF_NAHIDA = "https://tenor.com/view/nahida-kusanali-genshin-genshin-impact-sumeru-gif-26819159";
var GIF_GUN = "https://cdn.discordapp.com/attachments/715322091804819486/1128822171649708132/gun.gif";
var GIF_KURU = "https://tenor.com/view/kururin-kuru-kuru-herta-herta-sippining-honkai-star-rail-gif-6255874111095877274";
var GIF_CRYO = "https://media.discordapp.net/attachments/852660792428068874/1132449083756396615/Nouveau_projet_206_9B1F20B.gif";
var GIF_BESTGRILS = "https://media.discordapp.net/attachments/852660792428068874/1132440942796886147/Nouveau_projet_205_60D7D23.gif";
var GIF_KAFKYA = "https://media.discordapp.net/attachments/852660792428068874/1132453402077581322/Nouveau_projet_207_6EBC14F.gif";

var EMOTE_KUSANALI = "1011319146186813480";
var EMOTE_SUS = "976147692214452224";

var ROLE_VOYAGEUR = "836619851869978714";

var K_PROFIL_PAIMON_CHAD = {
    "nom": "Paimon",
    "pfp": "https://cdn.discordapp.com/attachments/667337519477817363/1010869852635934740/unknown.png"
}
var K_PROFIL_PAIMON_STATUE = {
    "nom": "Paimon",
    "pfp": "https://cdn.discordapp.com/attachments/667337519477817363/1010869748898222140/unknown.png"
}
var K_PROFIL_KUSANALI = {
    "nom": "Loli des Fleurs",
    "pfp": "https://cdn.discordapp.com/attachments/715322091804819486/1010649092805890089/unknown.png"
}
var K_PROFIL_LIBEN = {
    "nom": "Liben",
    "pfp": "https://cdn.discordapp.com/attachments/667337519477817363/1011341126080405534/unknown.png"
}
var K_PROFIL_KATHERYNE = {
    "nom": "Catherine",
    "pfp": "https://cdn.discordapp.com/attachments/715322091804819486/1145450432399945738/image.png"
}

var K_MISSION_TITLES = {
    "send_messages": "Envoyer [x] messages",
    "send_pictures": "Envoyer [x] images",
    "use_reactions": "Utiliser [x] réactions",
    "send_links": "Envoyer [x] liens",
    "tag_people": "Tagger quelqu'un [x] fois",
    "use_word": "Utiliser le mot '[y]' [x] fois"
};

var K_COLOR_ROLES = {
    "mondstadt": "1123437351180455976",
    "liyue": "1123437365361397870",
    "inazuma": "1123437370381963314",
    "sumeru": "1123437408793403523",
    "fontaine": "1123437413314871397",
    "natlan": "1123437417840521307",
    "snezhnaya": "1123437421858668604",
    "khaenri'ah": "1123437426283651274",
    "celestia": "1123437430775746681",
}

var K_GACHA_CHARACTERS = [];
var K_GACHA_BANNERS = [];
var K_GACHA_REGIONS = [];

var GIF_ANIMATION_VOEU_4S = "https://cdn.discordapp.com/attachments/715322091804819486/1122928890696966164/wish4.gif";
var GIF_ANIMATION_VOEU_5S = "https://cdn.discordapp.com/attachments/715322091804819486/1122796824609169448/wish.gif";
var GIF_ANIMATION_TIMING = 9000;

var K_SERVER_ID = "835951523325542400";
var K_TEST_SERVER_ID = "715322089904537731";

var K_AR_LIST = [
    { // 1
        "xp": 0
    },
    { // 2
        "xp": 38
    },
    { // 3
        "xp": 88
    },
    { // 4
        "xp": 150
    },
    { // 5
        "xp": 223,
        "role": "1010685482499325992"
    },
    { // 6
        "xp": 308
    },
    { // 7
        "xp": 403
    },
    { // 8
        "xp": 510
    },
    { // 9
        "xp": 630
    },
    { // 10
        "xp": 760,
        "role": "1010685477629734932"
    },
    { // 11
        "xp": 903
    },
    { // 12
        "xp": 1055
    },
    { // 13
        "xp": 1220
    },
    { // 14
        "xp": 1397
    },
    { // 15
        "xp": 1585
    },
    { // 16
        "xp": 1785
    },
    { // 17
        "xp": 2023
    },
    { // 18
        "xp": 2273
    },
    { // 19
        "xp": 2535
    },
    { // 20
        "xp": 2813,
        "role": "1010685472579784734"
    },
    { // 21
        "xp": 3095
    },
    { // 22
        "xp": 3437
    },
    { // 23
        "xp": 3810
    },
    { // 24
        "xp": 4210
    },
    { // 25
        "xp": 4640
    },
    { // 26
        "xp": 5098
    },
    { // 27
        "xp": 5585
    },
    { // 28
        "xp": 6100
    },
    { // 29
        "xp": 6645
    },
    { // 30
        "xp": 7218,
        "role": "1010685467060093020"
    },
    { // 31
        "xp": 7820
    },
    { // 32
        "xp": 8450
    },
    { // 33
        "xp": 9110
    },
    { // 34
        "xp": 9800
    },
    { // 35
        "xp": 10518
    },
    { // 36
        "xp": 11265
    },
    { // 37
        "xp": 12040
    },
    { // 38
        "xp": 12845
    },
    { // 39
        "xp": 12845
    },
    { // 40
        "xp": 14540,
        "role": "1010685457266385028"
    },
    { // 41
        "xp": 15595
    },
    { // 42
        "xp": 16748
    },
    { // 43
        "xp": 17995
    },
    { // 44
        "xp": 19349
    },
    { // 45
        "xp": 20780,
        "role": "1010685452782669844"
    },
    { // 46
        "xp": 22315
    },
    { // 47
        "xp": 23948
    },
    { // 48
        "xp": 25675
    },
    { // 49
        "xp": 27500
    },
    { // 50
        "xp": 29420,
        "role": "1010685448110211123"
    },
    { // 51
        "xp": 32060
    },
    { // 52
        "xp": 34940
    },
    { // 53
        "xp": 38060
    },
    { // 54
        "xp": 41420
    },
    { // 55
        "xp": 45020,
        "role": "1010685442724724756"
    },
    { // 56
        "xp": 68255
    },
    { // 57
        "xp": 94150
    },
    { // 58
        "xp": 122725
    },
    { // 59
        "xp": 154008
    },
    { // 60
        "xp": 188020,
        "role": "1010685437616083114"
    }
]
