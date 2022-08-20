function kusanaliBotMessage(_message) {
    var points = k_addMessageCount(_message.author.id, _message.author.username.secureXSS());
    for (var i in K_AR_LIST) { // check if AR up
        if (K_AR_LIST[i].xp == points) {
            var _current_ar = i+1;
            _message.channel.createWebhook('Some-username', {
                name: 'Kusana-Leaks',
            	avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png'
            })
        	.then(function(_webhook) {
                webhookClient = new DISCORD.WebhookClient(_webhook.id, _webhook.token);

                var embedMessage = new DISCORD.MessageEmbed();
                embedMessage.setThumbnail(_message.author.avatarURL);
                embedMessage.setTitle("**Nouveau Rang d'Ascension Atteint !**");
                embedMessage.setDescription("**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **" + _current_ar + "** !");

                webhookClient.send('', {
                	username: 'Loli des Fleurs',
                	avatarURL: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png',
                	embeds: [ embedMessage ]
                });

                _webhook.delete();
            })
        	.catch(console.error);
        }
    }

    // commands
    // TODO
}
function k_getUserAR(_userId) {
    var p = k_getUserPoints(_userId);

    for (var i in K_AR_LIST) {
        if (K_AR_LIST[i].xp > p) return i;
    }
    return 60;
}

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
