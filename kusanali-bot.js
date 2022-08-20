function kusanaliBotMessage(_message) {
    k_addMessageCount(_message.author.id, _message.author.username.secureXSS());

    _message.channel.createWebhook('Some-username', {
        name: 'Kusana-Leaks',
    	avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png'
    })
	.then(function(_webhook) {
        webhookClient = new DISCORD.WebhookClient(_webhook.id, _webhook.token);

        var embedMessage = new DISCORD.MessageEmbed();
        embedMessage.setThumbnail(_message.author.avatarURL);
        embedMessage.setTitle("**Nouveau Rang d'Ascension Atteint!**");
        embedMessage.setDescription("**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **2**!");

        webhookClient.send('', {
        	username: 'Loli des Fleurs',
        	avatarURL: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png',
        	embeds: [ embedMessage ]
        });

        _webhook.delete();
    })
	.catch(console.error);
}
