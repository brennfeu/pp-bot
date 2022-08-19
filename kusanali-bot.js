function kusanaliBotMessage(_message) {
    channel.createWebhook('Some-username', {
    	avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png',
    })
	.then(function(_webhook) {
        webhookClient = new Discord.WebhookClient(_webhook.id, process.env.KUSANALI_TOKEN);

        var embedMessage = new DISCORD.MessageEmbed();
        embedMessage.setThumbnail(_message.author.getImageURL());
        embedMessage.setTitle("**Nouveau Rang d'Ascension Atteint!**");
        embedMessage.setDescription("**Bravo " + _message.author.username.secureXSS() + "**, tu es passé Rang d'Aventurier **2**!");

        webhookClient.send('Webhook test', {
        	username: 'Loli des Fleurs',
        	avatarURL: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png',
        	embeds: [ embedMessage ]
        });
    })
	.catch(console.error);
}
