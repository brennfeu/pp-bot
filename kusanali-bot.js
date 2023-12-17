var K_MEMBERS_CACHE = {};
async function kusanaliBotMessage(_message) {
    if (_message.author.bot) return;
    if (_message.channel.id == "1006622544008319007") return; // zonz
    K_MEMBERS_CACHE[_message.author.id] = _message.author;

    updatePlayer(_message.author.id, _message.author.username.secureXSS());
    k_resetUserDailyProgress(_message.author.id);

    if (_message.channel.id == CHANNEL_NO_MIC) k_increaseVcXp();
    else k_addMessageCount(_message.author.id, _message.author.username.secureXSS(), _message.channel, _message);

    // check role voyageur
    if (_message.channel.guild.id == K_SERVER_ID) {
        _message.guild.roles.fetch(ROLE_VOYAGEUR)
        .then(function(_role) {
            // check doesn't already have role
            if (_message.member.roles.cache.get(_role.id) != undefined) return;

            _message.member.roles.add(_role);
            k_sendMessage(K_PROFIL_PAIMON_CHAD,
                "Bienvenue " + _message.author.username.secureXSS() + " !",
                "Vous avez maintenant le rôle **Voyageur** !",
                _message.channel);
        })
        .catch(console.error);
    }

    // dailies
    var dailies = k_getUserDailyProgress(_message.author.id);
    k_increaseMissionProgress(_message.author.id, "send_messages", _message.channel, dailies);
    if (_message.mentions.users.array().length > 0) for (var i in _message.mentions.users.array()) k_increaseMissionProgress(_message.author.id, "tag_people", _message.channel, dailies);
    if (Array.from(_message.attachments).length > 0) for (var i in Array.from(_message.attachments)) k_increaseMissionProgress(_message.author.id, "send_pictures", _message.channel, dailies);
    for (var i in dailies) { // "use_word", "send_links", "send_messages", "use_reactions", "send_pictures"
        if ([ "use_word", "send_links", "send_messages", "use_reactions", "send_pictures" ].indexOf(dailies[i].type) <= -1) continue;

        var word = "";
        if (dailies[i].type == "send_links") word = "http";
        else if (dailies[i].type == "send_messages") word = "message";
        else if (dailies[i].type == "use_reactions") word = "react";
        else if (dailies[i].type == "send_pictures") word = "image";
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

    var commande = _message.content.trim().toLowerCase();
    if (!commande.startsWith('%')) return;
    commande = commande.substring(1).split(" ")[0];

    if (commande == "fleurs") return _message.channel.send(GIF_NAHIDA);
    if (commande == "gun") return _message.channel.send(GIF_GUN);
    if (commande == "kuru") return _message.channel.send(GIF_KURU);
    if (commande == "cryo") return _message.channel.send(GIF_CRYO);
    if (commande == "tada") return _message.channel.send(GIF_BESTGRILS);
    if (commande == "kafkval") return _message.channel.send(GIF_KAFKYA);
    if (commande == "cancelsdf") return _message.channel.send(GIF_CANCELSDF);
    if (commande == "cancelnatytou") return _message.channel.send(GIF_CANCELNATYTOU);
    if (commande == "hornynovel") return _message.channel.send(GIF_NOVEL);

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
        var t = k_getUserTickets(command_user.id);
        var pi = k_getUserPity(command_user.id);
        var inventory = executeQuery("SELECT * FROM K_Inventory WHERE id_player = " + command_user.id);
        var artwork_column = k_getArtworkColumn(command_user.id);

        var txt = "Points d'Experience : **" + sciText(p) +
            "**\nRang d'Aventurier : **" + ar +
            "**\nPlacement du serveur : **" + n +
            "e**\n\nVœux : **" + sciText(v) +
            "**\nTickets : **" + sciText(t) +
            "**\nPity : **" + sciText(pi) +
            "/70**\nPersos : **" + inventory.length + "/" + K_GACHA_CHARACTERS_GI.length +
            "**\n\nMora : **" + sciText(m) +
            "**";

        var xp_date = k_getUserDoubleXpDate(command_user.id);
        if (k_getToday() < xp_date)
            txt += "\nDouble XP jusqu'au **" + formatDate(new Date(xp_date)) + "**";

        if (artwork_column == "art_link_alt1")
            txt += "\n\n**Mode NSFW** activé";

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

        return k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes - "+_message.author.username.secureXSS(),
            txt, _message.channel);
    }
    if (commande == "shop") {
        var args = _message.content.trim().toLowerCase().split(" ");
        if (args.length == 1) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
            "**Double XP pendant 24h** ( _doublexp_ ) - 200 000 Moras\n" +
            "**Changement de couleur** ( _color_ [ _mondstadt_ / _liyue_ / _inazuma_ / _sumeru_ / _fontaine_ / _natlan_ / _snezhnaya_ / _khaenri'ah_ / _celestia_ ] ) - 500 000 Moras / Gratuit après 1er achat\n\n" +

            "**Lot de 10 vœux** ( _wishes_ ) - 500 000 Moras\n" +
            "**Lot de 10 vœux** ( _refund_ ) - Toute constellation au dessus de C6\n\n" +

            "**Mode '_alternatif_'** ( _nsfw_ ) - 5 000 000 Moras\n" +
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
            if (args.length == 2) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Très bien, mais il faut me préciser la couleur.", _message.channel);
            if (K_COLOR_ROLES[args[2]] == undefined) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Je n'ai pas cette couleur en stock.", _message.channel);

            var CHECK_HAD_ROLE = false;
            for (var i in K_COLOR_ROLES) {
                await _message.guild.roles.fetch(K_COLOR_ROLES[i])
                .then(async function(_role) {
                    if (_message.member.roles.cache.get(_role.id) == undefined) return;

                    _message.member.roles.remove(_role);
                    if (!CHECK_HAD_ROLE) {
                        await _message.guild.roles.fetch(K_COLOR_ROLES[args[2]])
                            .then(function(_role) { _message.member.roles.add(_role); })
                            .catch(console.error);
                    }
                    CHECK_HAD_ROLE = true;
                })
                .catch(console.error);
            }

            if (!CHECK_HAD_ROLE) {
                if (mora <= 500000) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                    "Vous n'avez pas assez de moras.", _message.channel);

                _message.guild.roles.fetch(K_COLOR_ROLES[args[2]])
                    .then(function(_role) { _message.member.roles.add(_role); })
                    .catch(console.error);
                executeQuery('UPDATE Player SET k_mora = (k_mora-500000) WHERE id = ' + _message.author.id);
            }

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
        if (args[1] == "refund") {
            return k_checkRefund(_message);
        }
        if (args[1] == "nsfw") {
            if (mora <= 5000000) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Vous n'avez pas assez de moras.", _message.channel);

            executeQuery('UPDATE Player SET k_alternate_artworks=1, k_mora=(k_mora-5000000) WHERE id='+_message.author.id);

            _message.guild.roles.fetch(ROLE_NSFW)
            .then(function(_role) {
                if (_message.member.roles.cache.get(_role.id) != undefined) return;
                _message.member.roles.add(_role);
            })
            .catch(console.error);

            return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
                "Mode '_alternatif_', je vois, très bien !\nN'oubliez pas de faire vos pulls dans le channel dédié !", _message.channel);
        }

        return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
            "Je n'ai pas ça en stock, désolé.", _message.channel);
    }
    if (commande == "banner" || commande == "banners") {
        var banners = k_getTodaysBanners();
        for (var i in banners) _message.channel.send(banners[i].image_link);
        return;
    }
    if (commande == "wish") {
        var voeux = k_getUserWishes(_message.author.id);
        if (voeux < 10) return _message.channel.send("Pas assez de vœux.");

        var todaysElement = k_getTodaysGenshinBanners()[0].element;
        var pity = k_getUserPity(_message.author.id);
        var loot = [];
        var animation = GIF_ANIMATION_VOEU_4S;

        // check omni
        var args = _message.content.toLowerCase().split(" ");
        if (args.length > 1 && args[1] == "omni" && todaysElement != "cryo") return _message.channel.send("Bannière Omni indisponible.");
        else if (args.length > 1 && [ "omni", "cryo" ].indexOf(args[1]) > -1 && todaysElement == "cryo") todaysElement = args[1];
        else if (todaysElement == "cryo" && args.length <= 1) return _message.channel.send("Veuillez spécifier la bannière.\n```%wish cryo // OU // %wish omni```");

        randomCharacters = shuffleArray(K_GACHA_CHARACTERS_GI);
        loot.push(randomCharacters.find(o => o.stars == 4));
        var attempts = 9; // 10 - obligatory 4 stars

        pity += 10;
        if (pity >= 70) { // 5* !!
            pity = 0; attempts -= 1;

            randomCharacters = shuffleArray(K_GACHA_CHARACTERS_GI);
            loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
            animation = GIF_ANIMATION_VOEU_5S;
        }

        for (var i in Array.from(Array(attempts).keys())) { // regular rolls
            if (getRandomPercent() <= 2) { // 5* !!
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS_GI);
                loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
                animation = GIF_ANIMATION_VOEU_5S;
            }
            else if (getRandomPercent() <= 5) { // 4* !
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS_GI);
                loot.push(randomCharacters.find(o => o.stars == 4));
            }
        }

        executeQuery('UPDATE Player SET k_wishes=(k_wishes-1), k_pity='+pity+' WHERE id = ' + _message.author.id);
        var message_files = [];
        var artwork_column = k_getArtworkColumn(_message.author.id);
        loot.sort(function(a, b) {
            return b.stars - a.stars;
        });
        for (var i in loot) {
            try { executeQuery("INSERT INTO K_Inventory(id_character, id_player) VALUES("+
                loot[i].id + ", " + _message.author.id + ");"); } catch(e) {}
            executeQuery("UPDATE K_Inventory SET amount=(amount+1) " +
                "WHERE id_character='" + loot[i].id + "' AND id_player='" + _message.author.id + "';");

            var message_image = {};
            message_image["attachment"] = loot[i][artwork_column];
            message_image["name"] = 'SPOILER_gacha'+i+'.png';
            message_files.push(message_image);
        }

        // skip animation
        if (k_getUserOptions(_message.author.id)["skipanimations"] == 1) {
            _message.channel.send({ files: message_files }).then(function (_message4) {
                if (k_getUserOptions(_message.author.id)["autorefund"] == 1) k_checkRefund(_message);
            });
            return;
        }
        // play animation
        return _message.channel.send(animation).then(function (_message2) {
			setTimeout(function(_message3, message_files) {
                _message3.channel.send({ files: message_files }).then(function (_message4) {
                    if (k_getUserOptions(_message.author.id)["autorefund"] == 1) k_checkRefund(_message);
                });
                _message3.delete();
            }, GIF_ANIMATION_TIMING, _message2, message_files);
		});
    }
    if (commande == "warp") {
        var voeux = k_getUserTickets(_message.author.id);
        if (voeux < 10) return _message.channel.send("Pas assez de tickets.");

        var todaysElement = k_getTodaysHsrBanners()[0].element;
        var pity = k_getUserPity(_message.author.id);
        var loot = [];
        var animation = GIF_ANIMATION_VOEU_4S;

        // check omni
        var args = _message.content.toLowerCase().split(" ");
        if (args.length > 1 && [ "physical", "quantum", "lightning", "imaginary", "wind", "ice", "fire" ].indexOf(args[1]) > -1 && todaysElement == "physical") todaysElement = args[1];
        else if (todaysElement == "physical" && args.length <= 1) return _message.channel.send("Veuillez spécifier la bannière.\n```%warp physical // OU // %warp quantum // OU // %warp lightning // OU // %warp imaginary // OU // %warp wind // OU // %warp ice // OU // %warp fire```");

        randomCharacters = shuffleArray(K_GACHA_CHARACTERS_HSR);
        loot.push(randomCharacters.find(o => o.stars == 4));
        var attempts = 9; // 10 - obligatory 4 stars

        pity += 10;
        if (pity >= 70) { // 5* !!
            pity = 0; attempts -= 1;

            randomCharacters = shuffleArray(K_GACHA_CHARACTERS_HSR);
            loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
            animation = GIF_ANIMATION_VOEU_5S;
        }

        for (var i in Array.from(Array(attempts).keys())) { // regular rolls
            if (getRandomPercent() <= 2) { // 5* !!
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS_HSR);
                loot.push(randomCharacters.find(o => o.stars == 5 && (o.element == todaysElement || todaysElement == "omni")));
                animation = GIF_ANIMATION_VOEU_5S;
            }
            else if (getRandomPercent() <= 5) { // 4* !
                randomCharacters = shuffleArray(K_GACHA_CHARACTERS_HSR);
                loot.push(randomCharacters.find(o => o.stars == 4));
            }
        }

        executeQuery('UPDATE Player SET k_tickets=(k_tickets-1), k_pity='+pity+' WHERE id = ' + _message.author.id);
        var message_files = [];
        var artwork_column = k_getArtworkColumn(_message.author.id);
        loot.sort(function(a, b) {
            return b.stars - a.stars;
        });
        for (var i in loot) {
            try { executeQuery("INSERT INTO K_Inventory(id_character, id_player) VALUES("+
                loot[i].id + ", " + _message.author.id + ");"); } catch(e) {}
            executeQuery("UPDATE K_Inventory SET amount=(amount+1) " +
                "WHERE id_character='" + loot[i].id + "' AND id_player='" + _message.author.id + "';");

            var message_image = {};
            message_image["attachment"] = loot[i][artwork_column];
            message_image["name"] = 'SPOILER_gacha'+i+'.png';
            message_files.push(message_image);
        }

        // skip animation
        if (k_getUserOptions(_message.author.id)["skipanimations"] == 1) {
            _message.channel.send({ files: message_files }).then(function (_message4) {
                if (k_getUserOptions(_message.author.id)["autorefund"] == 1) k_checkRefund(_message);
            });
            return;
        }
        // play animation
        return _message.channel.send(animation).then(function (_message2) {
			setTimeout(function(_message3, message_files) {
                _message3.channel.send({ files: message_files }).then(function (_message4) {
                    if (k_getUserOptions(_message.author.id)["autorefund"] == 1) k_checkRefund(_message);
                });
                _message3.delete();
            }, GIF_ANIMATION_TIMING, _message2, message_files);
		});
    }
    if (commande == "characters") {
        var command_user = _message.author;
        if (_message.mentions.users.array().length >= 1) command_user = _message.mentions.users.last();

        var smallinventory = k_getUserOptions(_message.author.id)["smallinventory"] == "1";
        var inventory = executeQuery("SELECT * FROM K_Inventory WHERE id_player = " + command_user.id);
        var characters = [];

        // smallinventory memory
        var character_memory = {};
        var region_memory = null;

        for (var i in inventory) characters.push(K_GACHA_CHARACTERS_ALL.find(o => o.id == inventory[i].id_character));
        if (k_getUserOptions(_message.author.id)["fullinventory"] == 1) characters = K_GACHA_CHARACTERS_ALL.slice();
        characters.sort(function(a, b) {
            if (a.id_region != b.id_region) return a.id_region - b.id_region;
            if (a.stars != b.stars) return b.stars - a.stars;

            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        });

        var embedMessage = new DISCORD.MessageEmbed();
        embedMessage.setTitle("**Inventaire de Personnages**");

        var txt = "";
        var last_region = 0;
        for (var i in characters) {
            // check new region
            if (characters[i].id_region != last_region) {
                if (txt != "") { // add field to embed
                    var region = K_GACHA_REGIONS.find(o => o.id == last_region);
                    character_memory[last_region] = txt;

                    if (!smallinventory || embedMessage.fields.length == 0) // if smallinventory, only the 1st one
                        embedMessage.addField(region.name.toUpperCase(), txt, true);
                    else
                        region_memory = last_region;
                }

                var region = K_GACHA_REGIONS.find(o => o.id == characters[i].id_region);
                last_region = characters[i].id_region;
                txt = "";
            }

            // get amount
            var amount = 0;
            var char = inventory.find(o => o.id_character == characters[i].id);
            if (char != undefined) amount = char.amount;

            // 1 character = 1 line
            txt += "- ";
            if (amount <= 0) txt += "~~";
            if (characters[i].stars == 5) txt += "_";
            txt += characters[i].name;
            if (amount > 1) txt += " **C" + (amount-1) + "**";
            if (characters[i].stars == 5) txt += "_";
            if (amount <= 0) txt += "~~";
            txt += "\n"
        }
        if (txt == "") embedMessage.setDescription("...");
        else { // add field to embed
            var region = K_GACHA_REGIONS.find(o => o.id == last_region);
            character_memory[last_region] = txt;

            if (!smallinventory || embedMessage.fields.length == 0) // if smallinventory, only the 1st one
                embedMessage.addField(region.name.toUpperCase(), txt, true);
            else
                region_memory = last_region;
        }

        if (smallinventory && txt != "") { // send regular message
            SMALL_INVENTORY_MESSAGE = true;
            SMALL_INVENTORY_MEMORY[_message.author.id] = {
                "inventory": character_memory,
                "current_region": characters[0].id_region
            }

            var region = K_GACHA_REGIONS.find(o => o.id == characters[0].id_region);
            return _message.channel.send("**" + region.name.toUpperCase() + "**\n" + character_memory[region.id])
            .then(function (_message2) {
                _message2.react("⬅️");
                _message2.react("➡️");
            });
        }
        return k_sendEmbedMessage(K_PROFIL_PAIMON_STATUE, embedMessage, _message.channel);
    }
    if (commande == "gallery") {
        var command_user = _message.author;
        if (_message.mentions.users.array().length >= 1) command_user = _message.mentions.users.last();

        var inventory = executeQuery("SELECT * FROM K_Inventory WHERE id_player = " + command_user.id);
        var characters = [];

        for (var i in inventory) characters.push(K_GACHA_CHARACTERS_ALL.find(o => o.id == inventory[i].id_character));
        if (characters.length == 0) return _message.channel.send("...");
        characters.sort(function(a, b) {
            if (a.id_region != b.id_region) return a.id_region - b.id_region;
            if (a.stars != b.stars) return b.stars - a.stars;

            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        });

        var artwork_column = k_getArtworkColumn(_message.author.id);
        var last_region = characters[0].id_region;
        var artworks = [];
        for (var i in characters) {
            if (artworks.length >= 9 || last_region != characters[i].id_region) { // send all messages
                await k_sendFilesAndWait(_message.channel, artworks);
                last_region = characters[i].id_region;
                artworks = [];
            }

            var message_image = {};
            message_image["attachment"] = characters[i][artwork_column];
            message_image["name"] = 'gallery_'+i+'.png';
            artworks.push(message_image);
        }
        return;
    }
    if (commande == "option" || commande == "options") {
        var args = _message.content.trim().toLowerCase().split(" ");
        var current_options = k_getUserOptions(_message.author.id);
        if (args.length == 1) return k_sendMessage(K_PROFIL_KUSANALI, "Les Options des Fleurs",
            "_fullinventory_ ("+["❌", "✅"][current_options["fullinventory"]]+") : Affiche tous les personnages avec la commande %characters\n" +
            "_smallinventory_ ("+["❌", "✅"][current_options["smallinventory"]]+") : Tri régional avec la commande %characters\n" +
            "_autorefund_ ("+["❌", "✅"][current_options["autorefund"]]+") : Rembourse automatiquement les constellations au dessus de 6\n" +
            "_skipanimations_ ("+["❌", "✅"][current_options["skipanimations"]]+") : Affiche directement le résultat des pulls\n" +
            "\nExemple de commande de changement d'option : ```%option autorefund```", _message.channel);
        if (K_OPTIONS_DEFAULT[args[1]] == undefined) return k_sendMessage(K_PROFIL_KUSANALI, "Les Options des Fleurs",
            "Je n'ai pas cette option, je suis désolée.", _message.channel);

        current_options[args[1]] = Math.abs(current_options[args[1]]-1);
        k_setUserOptions(_message.author.id, current_options);
        return k_sendMessage(K_PROFIL_KUSANALI, "Les Options des Fleurs",
            "L'option _" + args[1] + "_ a été mise à jour ! "+displayEmote(EMOTE_KUSANALI), _message.channel);
    }
    if (commande == "tutorial") {
        _message.channel.send("Voici une petite liste des fonctionnalités du bot :");
        k_sendMessage(K_PROFIL_PAIMON_STATUE, "Tutoriel",
            "Chaque compte ici-présent peut gagner de l'xp d'aventurier en discutant dans un channel textuel, à un taux de 1 message = 1 xp.\n"+
            "Les paliers de rang d'aventurier (AR) sont calqués sur ceux de genshin, à un taux de 1/10. Atteindre certains paliers confère automatiquement un nouveau rôle.\n"+
            "Vous pouvez utiliser la commande '%rank' à tout moment pour savoir ou vous en êtes, et quelle est la prochaine étape.\n\n"+
            "**AR 5 :** Mondstadtois\n"+
            "**AR 10 :** Liyuéen\n"+
            "**AR 20 :** Inazumien\n"+
            "**AR 30 :** Sumérien\n"+
            "**AR 40 :** Fontainois\n"+
            "**AR 45 :** Natlanais\n"+
            "**AR 50 :** Snezhnayen\n"+
            "**AR 55 :** Habitant du Royaume Déchu\n"+
            "**AR 60 :** Divinité Céleste",
            _message.channel
        );
        k_sendMessage(K_PROFIL_KATHERYNE, "Tutoriel",
            "Chaque jour, vous pouvez faire vos quêtes quotidiennes, vous faisant ainsi gagner moras, vœux, et tickets. Les vœux et les tickets permettent d'invoquer des personnages de Genshin Impact et Honkai Star Rail respectivement.\n"+
            "Afin de rendre l'experience plus agréable, la pity est à 70, et ne se réinitialise pas si un personnage 5* arrive plus tôt que prévu. La pity est la même pour les bannières Genshin et HSR.\n"+
            "Les bannières tournent chaque jour. Vous pouvez utiliser la commande '%banners' pour savoir quelles sont les bannières en cours.\n\n"+
            "Taux de drop :\n"+
            "**4* :** 5% par vœu. 100% pour le premier d'une multi.\n"+
            "**5* :** 2% par vœu. 100% quand la pity est atteinte.",
            _message.channel
        );
        k_sendMessage(K_PROFIL_LIBEN, "Tutoriel",
            "Vous pouvez dépenser vos moras dans le shop.\n"+
            "Vous pourrez notamment y acheter un changement de couleur, un doubleur d'xp, ou de quoi participer encore plus au gacha.\n"+
            "Le shop est accessible par la commande '%shop'",
            _message.channel
        );
        k_sendMessage(K_PROFIL_KUSANALI, "Tutoriel",
            "Vous pouvez aussi customiser votre experience avec les options, disponibles par la commande '%options'.\n"+
            "Si vous avez des demandes pour le bot, ou souhaitez signaler un problème, n'hésitez pas à passer dans le channel #autres-jeux, dans la catégorie 'Paimon When?' propre au bot.\n\n"+
            "Merci pour votre attention ! " + displayEmote(EMOTE_KUSANALI),
            _message.channel
        );
        return;
    }
    if (commande == "reset_cache") {
        k_loadGachaData();
        return _message.reply("fait !");
    }
    if (commande == "help") {
        k_sendMessage(K_PROFIL_KUSANALI, "Commandes",
            "**banners**: Affiche les bannières actuelles.\n" +
            "**characters _(@someone)_**: Affiche la liste des personnages obtenus (texte).\n" +
            "**dailies**: Affiche la listes des missions quotidiennes.\n" +
            "**gallery _(@someone)_**: Affiche la liste des personnages obtenus (images).\n" +
            "**help**: Euh...\n" +
            "**leaderboard**: Affiche le top 10 du serveur.\n" +
            "**legacy**: Affecte les rôles manquants.\n" +
            "**links**: Envoie les liens vers les résaux sociaux du serveur.\n" +
            "**option**: Permet de customiser votre experience.\n" +
            "**paypal**: Non.\n" +
            "**rank _(@someone)_**: Affiche ton statut actuel sur le leaderboard.\n" +
            "**shop**: Pour dépenser les moras.\n" +
            "**status _(@someone)_**: Affiche ton statut actuel sur le serveur.\n" +
            "**tutorial**: Explique les différentes mécaniques du bot.\n" +
            "**warp**: Fais une multi hsr.\n" +
            "**wish**: Fais une multi genshin.\n" +

            "\n" +
            "**cancelnatytou**: #cancelNatytou\n" +
            "**cancelsdf**: #cancelsdf\n" +
            "**cryo**: " + displayEmote("1133393876548321342") + "\n" +
            "**fleurs**: FC Loli des Fleurs\n" +
            "**gun**: Bam !\n" +
            "**hornynovel**: Bah c'est Novel quoi\n" +
            "**kafkval**: HSR c'est joli des fois quand même...\n" +
            "**kuru**: Kuru kuru !\n" +
            "**tada**: HU TAO ET FISCHL WOOOOOOO !!\n" +
            "",
        _message.channel);
        return k_checkRoles(_message);
    }

    return _message.reply("je ne connais pas cette commande :/");
}
function k_checkCharactersReaction(_reaction, _user) {
    if (SMALL_INVENTORY_MEMORY[_user.id] == undefined) return;
    var data = SMALL_INVENTORY_MEMORY[_user.id];

    var region_list = [];
    for (var i in data["inventory"]) region_list.push(parseInt(i));

    var currentRegionIndex = region_list.indexOf(data["current_region"]);
    if (_reaction.emoji.name == "➡️") {
        var newRegionIndex = currentRegionIndex+1;
        if (newRegionIndex >= region_list.length) newRegionIndex = 0;
    }
    else if (_reaction.emoji.name == "⬅️") {
        var newRegionIndex = currentRegionIndex-1;
        if (newRegionIndex < 0) newRegionIndex = region_list.length-1;
    }
    else return;

    var region = K_GACHA_REGIONS.find(o => o.id == region_list[newRegionIndex]);
    SMALL_INVENTORY_MEMORY[_user.id]["current_region"] = region.id;
    _reaction.message.edit("**" + region.name.toUpperCase() + "**\n" + data["inventory"][region.id]);
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

function k_checkRefund(_message) {
    var total = executeQuery('SELECT SUM(amount-7) AS total FROM K_Inventory WHERE id_player=' + _message.author.id + ' AND amount > 7;')[0]["total"];
    if (total <= 0) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
        "Vous n'avez aucune constellation à rembourser.", _message.channel);

    executeQuery('UPDATE Player SET k_wishes = (k_wishes+' + total + ') WHERE id = ' + _message.author.id);
    executeQuery('UPDATE K_Inventory SET amount=7 WHERE id_player=' + _message.author.id + " AND amount > 7;");

    if (total == 1) return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
        "Votre constellation a bien été remboursée.", _message.channel);
    return k_sendMessage(K_PROFIL_LIBEN, "Le Shop de Liben",
        "Vos " + total + " constellations ont bien été remboursées.", _message.channel);
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
    embedMessage.setFooter('Perdu ? Tapez \'%help\' ou \'%tutorial\' pour plus de détails.', 'https://cdn.discordapp.com/attachments/721498678925328434/721511440598696056/arbitrator.png');
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
function k_sendEmbedMessage(_profil, _embed, _channel) {
    _channel.fetchWebhooks()
    .then(function(_hooks) {
        for (const [ _key, _value ] of _hooks) {
            if (_value.owner.id == CLIENT.user.id) return k_sendWebhookEmbedMessage(_value, _profil, _embed, _channel);
        }

        _channel.createWebhook('Kusana-Leaks', {
            name: 'Kusana-Leaks',
            avatar: 'https://cdn.discordapp.com/attachments/667337519477817363/996062528973058100/unknown.png'
        })
        .then(function(_webhook) {
            k_sendWebhookEmbedMessage(_webhook, _profil, _embed, _channel);
        })
        .catch(function(_e) { console.log(_e) });
    })
    .catch(function(_e) { console.log(_e) });
}
function k_sendWebhookEmbedMessage(_webhook, _profil, _embed, _channel) {
    webhookClient = new DISCORD.WebhookClient(_webhook.id, _webhook.token);

    var embedMessage = _embed;
    embedMessage.setColor([ 125, 171, 73 ]);
    embedMessage.setFooter('Perdu ? Tapez \'%help\' ou \'%tutorial\' pour plus de détails.', 'https://cdn.discordapp.com/attachments/721498678925328434/721511440598696056/arbitrator.png');

    webhookClient.send('', {
        username: _profil.nom,
        avatarURL: _profil.pfp,
        embeds: [ embedMessage ]
    })
    .catch(function(_e) { console.log(_e); });
}
var SMALL_INVENTORY_MESSAGE = false;
var SMALL_INVENTORY_MEMORY = {};

var SENDING = false;
async function k_sendFilesAndWait(_channel, _files) {
    SENDING = true;
    await _channel.send({ files: _files }).then(async function (_message2) {
        SENDING = false;
    }).catch(function(e) {
        console.log(e);
    });
    while (SENDING) {}
    return true;
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
                json[currentId].word = randomFromList([
                    "hoyo", "leak", "discord", "twitter", "ban",
                    "genshin", "liben", "primo", "mora", "abyss", "design", "lore", "archon",
                    "meta", "rotation", "hyperbloom", "support", "carry",
                    "mondstadt", "liyue", "inazuma", "sumeru", "fontaine", "natlan",
                    "anemo", "geo", "electro", "dendro", "hydro", "pyro", "cryo",
                    "paimon", "dainsleif", "nahida", "fischl", "neuvillette", "qiqi",
                    "loli", "paypal", "hentai", "kaleidoscope",
                    "lilas", "bio", "atiss", "novel", "sdf"
                ]);
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
        k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes - "+K_MEMBERS_CACHE[_userId].username.secureXSS(),
            txt, _channel);
        mission_accomplie = true;
    }

    // all dailies done ?
    if (!mission_accomplie) return;
    for (var i in dailies) if (dailies[i].progress < dailies[i].target) return;
    executeQuery('UPDATE Player SET k_wishes=(k_wishes+1), k_tickets=(k_tickets+1) WHERE id = ' + _userId);
    k_sendMessage(K_PROFIL_KATHERYNE, "Missions Quotidiennes - "+K_MEMBERS_CACHE[_userId].username.secureXSS(),
        "Merci d'avoir fait toutes vos missions quotidiennes.\nVoici un lot de **10 vœux** et de **10 tickets** pour vos efforts.", _channel);
}

function k_checkRoles(_message) {
    return k_checkRoles2(_message.guild, _message.author, _message.member, _message.channel)
}
function k_checkRoles2(_guild, _author, _member, _channel) {
    if (_guild.id != K_SERVER_ID) return;
    var ar = k_getUserAR(_author.id);

    for (var i in K_AR_LIST) {
        if (parseInt(i) >= ar) return;

        if (K_AR_LIST[i].role != undefined) {
            _guild.roles.fetch(K_AR_LIST[i].role)
            .then(function(_role) {
                // check doesn't already have role
                if (_member.roles.cache.get(_role.id) != undefined) return;

                _member.roles.add(_role);
                k_sendMessage(K_PROFIL_PAIMON_CHAD,
                    "Nouveau Role obtenu !",
                    "**Bravo " + _author.username.secureXSS() + "**, tu as obtenu le rôle **" + _role.name + "** !",
                    _channel);
            })
            .catch(console.error);
        }
    }
}

var K_OPTIONS_DEFAULT = {
    "fullinventory": 0,
    "smallinventory": 0,
    "skipanimations": 0,
    "autorefund": 0
}
function k_getUserOptions(_id) {
    var opt = executeQuery("SELECt k_options FROM Player WHERE id=" + _id)[0]["k_options"];
    opt = JSON.parse(opt);

    // default values
    for (var i in K_OPTIONS_DEFAULT) if (opt[i] == undefined) opt[i] = K_OPTIONS_DEFAULT[i];

    return opt;
}
function k_setUserOptions(_id, _options) {
    executeQuery('UPDATE Player SET k_options=\'' + JSON.stringify(_options) + '\' WHERE id = ' + _id);
}

function k_getToday() {
    return Date.now();
}
function k_getTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
}

function k_getTodaysBanners() {
    return k_getTodaysGenshinBanners().concat(k_getTodaysHsrBanners());
}
function k_getTodaysGenshinBanners() {
    var currentDay = new Date().getDay();
    var elementsDays = [
        [ "cryo", "omni" ], // dimanche
        [ "anemo" ], // lundi
        [ "geo" ], // mardi
        [ "electro" ], // mercredi
        [ "dendro" ], // jeudi
        [ "hydro" ], // vendredi
        [ "pyro" ] // samedi
    ];
    var l = [];

    for (var i in elementsDays[currentDay])
        l.push(K_GACHA_BANNERS.find(o => o.element == elementsDays[currentDay][i]));
    return l;
}
function k_getTodaysHsrBanners() {
    var currentDay = new Date().getDay();
    var elementsDays = [
        [ "physical", "quantum", "lightning", "imaginary", "wind", "ice", "fire" ], // dimanche
        [ "quantum" ], // lundi
        [ "lightning" ], // mardi
        [ "imaginary" ], // mercredi
        [ "wind" ], // jeudi
        [ "ice" ], // vendredi
        [ "fire" ] // samedi
    ];
    var l = [];

    for (var i in elementsDays[currentDay])
        l.push(K_GACHA_BANNERS.find(o => o.element == elementsDays[currentDay][i]));
    return l;
}
function k_loadGachaData() {
    K_GACHA_CHARACTERS_GI = executeQuery("SELECT * FROM K_Character WHERE game='genshin';");
    K_GACHA_CHARACTERS_HSR = executeQuery("SELECT * FROM K_Character WHERE game='hsr';");
    K_GACHA_CHARACTERS_ALL = executeQuery("SELECT * FROM K_Character;");
    K_GACHA_BANNERS = executeQuery("SELECT * FROM K_Banner;");
    K_GACHA_REGIONS = executeQuery("SELECT * FROM K_Region;");
}

var VC_XP_COUNT = 0;
var CHANNEL_VC = null;
function k_increaseVcXp() {
    VC_XP_COUNT += 1;

    if (CHANNEL_VC == null) return;
    if (CHANNEL_VC.members.length == 0) return;
    if (VC_XP_COUNT < CHANNEL_VC.members.size) return;

    VC_XP_COUNT -= parseInt(CHANNEL_VC.members.size);
    var list = Array.from(CHANNEL_VC.members);
    for (var i in list) {
        var member = list[i][1];
        k_addMessageCount(member.id, member.user.username.secureXSS(), CHANNEL_VC.guild.channels.cache.get(CHANNEL_NO_MIC));
    }
}

var GIF_NAHIDA = "https://tenor.com/view/nahida-kusanali-genshin-genshin-impact-sumeru-gif-26819159";
var GIF_GUN = "https://cdn.discordapp.com/attachments/715322091804819486/1128822171649708132/gun.gif";
var GIF_KURU = "https://tenor.com/view/kururin-kuru-kuru-herta-herta-sippining-honkai-star-rail-gif-6255874111095877274";
var GIF_CRYO = "https://media.discordapp.net/attachments/852660792428068874/1132449083756396615/Nouveau_projet_206_9B1F20B.gif";
var GIF_BESTGRILS = "https://media.discordapp.net/attachments/852660792428068874/1132440942796886147/Nouveau_projet_205_60D7D23.gif";
var GIF_KAFKYA = "https://media.discordapp.net/attachments/852660792428068874/1132453402077581322/Nouveau_projet_207_6EBC14F.gif";
var GIF_CANCELSDF = "https://media.discordapp.net/attachments/1011223267928981584/1140618171510968421/New_Project_79_140F995.gif";
var GIF_CANCELNATYTOU = "https://cdn.discordapp.com/attachments/1006231038269325332/1169652164822581359/New_Project_164_9D587D4.gif";
var GIF_NOVEL = "https://cdn.discordapp.com/attachments/1011225594714914936/1158425276297003068/New_Project_118_D20A914.gif";

var EMOTE_KUSANALI = "1011319146186813480";
var EMOTE_SUS = "976147692214452224";

var ROLE_VOYAGEUR = "836619851869978714";
var ROLE_NSFW = "1159221938141540502";

var CHANNEL_NO_MIC = "836404086235463721";
var CHANNEL_DEFAULT_VOC = "836402809649233920";

var K_PROFIL_PAIMON_CHAD = {
    "nom": "Paimon",
    "pfp": "https://cdn.discordapp.com/attachments/667337519477817363/1010869852635934740/unknown.png"
}
var K_PROFIL_PAIMON_STATUE = {
    "nom": "Paimon",
    "pfp": "https://cdn.discordapp.com/attachments/715322091804819486/1161209344319303741/static_wikia_nocookie_net-latest.jpg"
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
    "use_reactions": "Utiliser / envoyer [x] réactions",
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

var K_GACHA_CHARACTERS_GI = [];
var K_GACHA_CHARACTERS_HSR = [];
var K_GACHA_CHARACTERS_ALL = [];
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
        "xp": 13678
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
