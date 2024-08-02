    const { Telegraf, Markup } = require("telegraf");
    const TOKEN = '7391569454:AAEysebPf7z2twWUKIy-Giri1Wa-g9CeB28';
    const bot = new Telegraf(TOKEN);
    const express = require("express");
    const app = express()
    app.use(express.json())
    const web_link = "https://cubeswapbot.netlify.app";
    const community_link = "https://t.me/cubeswapcom"; 

    bot.start((ctx) => {
        const startPayload = ctx.startPayload;
        const urlSent = `${web_link}?ref=${startPayload}`;
        const user = ctx.message.from;
        const userName = user.username ? `@${user.username}` : user.first_name;
        ctx.replyWithMarkdown(`*Hey Welcome to CubeSwap Bot! Tap to earn and continue!*
        
    Find the best deals and opportunities here. 
            
    *THIS BOT* is a Decentralized Exchange on the TON Blockchain. The biggest part of bot TOKEN distribution will occur among the players here.
            
    Got friends, relatives, co-workers? 
    Bring them all into the game. More buddies, more coins.`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "👋 Start now!", web_app: { url: urlSent } }],
                    [{ text: "Join our Community", url: community_link }]
                ],
                in: true
            },
        });
    });

    bot.launch();

    app.listen(3005, () => {
        console.log("Server is running on port 3005");
    });
    