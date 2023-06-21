function kusanaliBotMessage(_message) {
    if(_message.author.bot) return;

    if (getRandomPercent() < 10) updatePlayer(_message.author.id, _message.author.username.secureXSS());
    var points = k_addMessageCount(_message.author.id, _message.author.username.secureXSS());
    for (var i in K_AR_LIST) { // check if AR up
        if (K_AR_LIST[i].xp == points) {
            var _current_ar = parseInt(i)+1;
            k_sendMessage(K_PROFIL_PAIMON_CHAD,
                "Nouveau Rang d'Ascension Atteint !",
                "**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **" + _current_ar + "** !",
                _message.channel);

            k_checkRoles(_message);
            return;
        }
    }

    // thumbs up nahida
    if (_message.content.trim() == GIF_NAHIDA) return _message.react(EMOTE_KUSANALI);

    // commands
    if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.first().id != CLIENT.user.id) return;

    var argsUser = _message.content.trim().split(" ").filter(a => a != "");
	console.log(argsUser);

    if (argsUser[1] == "rank" || argsUser[1] == "status") {
        var p = k_getUserPoints(_message.author.id);
        var ar = k_getARFromPoints(p);
        var m = k_getUserMora(_message.author.id);
        var n = k_getUserPlacement(_message.author.id);

        return k_sendMessage(K_PROFIL_PAIMON_STATUE,
            _message.author.username.secureXSS(),
            "Points d'Experience : **" + p +
                "**\nRang d'Aventurier : **" + ar +
                "**\n\nMora : **" + m +
                "**\n\nPlacement du serveur : **" + n +
                "e**",
            _message.channel,
            _message.author.avatarURL());
    }
    if (argsUser[1] == "leaderboard") {
        var l = k_getLeaderboard();
        var txt = "";
        for (var i in l) {
            txt += "**" + (parseInt(i)+1) + " - " + l[i].username + "** (AR" + k_getARFromPoints(l[i].k_points) + "): " + l[i].k_points + " xp\n";
        }
        return k_sendMessage(K_PROFIL_PAIMON_STATUE, "Leaderboard Actuel", txt, _message.channel);
    }
    if (argsUser[1] == "legacy") {
        k_sendMessage(K_PROFIL_KUSANALI, "Ajout des rôles manquants", "Les rôles manquants devraient arriver. Si ça marche.", _message.channel);
        return k_checkRoles(_message);
    }
    if (argsUser[1] == "links") {
        return k_sendMessage(K_PROFIL_LIBEN, "Liens",
            "**Twitter**: https://twitter.com/LibenWhen \n" +
            "**Discord**: https://discord.com/invite/stftBnMhRE \n" +
            "**Tiktok**: https://www.tiktok.com/@libenwhen \n" +
            "**Paypal**: https://www.paypal.me/Libenwhen",
        _message.channel);
    }
    if (argsUser[1] == "fleurs") {
        return _message.channel.send(GIF_NAHIDA);
    }
    if (argsUser[1] == "paypal") {
        return _message.channel.send("Non.\n(paypal de liben dispo avec la commande _links_)");
    }
    if (argsUser[1] == "help") {
        k_sendMessage(K_PROFIL_KUSANALI, "Commandes",
            "**fleurs**: FC Loli des Fleurs !\n" +
            "**help**: Aucune idée de ce que ça fait.\n" +
            "**leaderboard**: Affiche le top 10 du serveur.\n" +
            "**legacy**: Affecte les rôles manquants.\n" +
            "**links**: Envoie les liens vers les résaux sociaux du serveur.\n" +
            "**paypal**: Non.\n" +
            "**rank**: Affiche ton statut actuel sur le serveur.",
        _message.channel);
        return k_checkRoles(_message);
    }

    return _message.reply(randomFromList([ "quoi ?", "hein ?", "j'ai pas compris :/", "haha", "pardon ?", "j'ai pas écouté, tu peux répéter stp ?" ]));
}

function k_getUserAR(_userId) {
    return k_getARFromPoints(k_getUserPoints(_userId));
}
function k_getARFromPoints(_p) {
    for (var i in K_AR_LIST) {
        if (K_AR_LIST[i].xp > _p) return i;
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

var GIF_NAHIDA = "https://tenor.com/view/nahida-kusanali-genshin-genshin-impact-sumeru-gif-26819159";
var EMOTE_KUSANALI = "1011319146186813480";

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
