function kusanaliBotMessage(_message) {
    if(_message.author.bot) return;

    if (getRandomPercent() < 10) updatePlayer(_message.author.id, _message.author.username.secureXSS());
    var points = k_addMessageCount(_message.author.id, _message.author.username.secureXSS());
    for (var i in K_AR_LIST) { // check if AR up
        if (K_AR_LIST[i].xp == points) {
            var _current_ar = parseInt(i)+1;
            k_sendMessage("Nouveau Rang d'Ascension Atteint !",
                "**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **" + _current_ar + "** !",
                _message.channel);
        }
    }

    // commands
    if (_message.mentions.users.array().length < 1) return;
	if (_message.mentions.users.first().id != CLIENT.user.id) return;

    var argsUser = _message.content.trim().split(" ").filter(a => a != "");
	console.log(argsUser);

    if (argsUser[1] == "rank") {
        var p = k_getUserPoints(_message.author.id);
        var ar = k_getUserAR(_message.author.id);
        var n = k_getUserPlacement(_message.author.id);

        k_sendMessage(_message.author.username.secureXSS() + " Rank",
            "Messages : " + p + "\nRang d'Aventurier : " + ar + "\nPlacement du serveur : " + n,
            _message.channel);
    }
    if (argsUser[1] == "leaderboard") {
        var l = k_getLeaderboard();
        var txt = "";
        for (var i in l) {
            txt += "**" + (parseInt(i)+1) + " - " + l[i].username + "**: " + l[i].k_points + " messages\n";
        }
        k_sendMessage("Current Leaderboard", txt, _message.channel);
    }
}

function k_getUserAR(_userId) {
    var p = k_getUserPoints(_userId);

    for (var i in K_AR_LIST) {
        if (K_AR_LIST[i].xp > p) return i;
    }
    return 60;
}
function k_sendMessage(_title, _message, _channel, _avatar = undefined) {
    _channel.createWebhook('Some-username', {
        name: 'Kusana-Leaks',
        avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png'
    })
    .then(function(_webhook) {
        webhookClient = new DISCORD.WebhookClient(_webhook.id, _webhook.token);

        var embedMessage = new DISCORD.MessageEmbed();
        embedMessage.setTitle("**" + _title + "**");
        embedMessage.setDescription(_message);
        if (_avatar != undefined) embedMessage.setThumbnail(_avatar);

        webhookClient.send('', {
            username: 'Loli des Fleurs',
            avatarURL: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png',
            embeds: [ embedMessage ]
        });

        _webhook.delete();
    })
    .catch(console.error);
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
        "xp": 223
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
        "xp": 760
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
        "xp": 2813
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
        "xp": 558
    },
    { // 28
        "xp": 6100
    },
    { // 29
        "xp": 6645
    },
    { // 30
        "xp": 7218
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
        "xp": 14540
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
        "xp": 20780
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
        "xp": 29420
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
        "xp": 45020
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
        "xp": 188020
    }
]
