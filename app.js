const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { Telegraf } = require('telegraf');
const port = 9000;

app.use(bodyParser.json());
app.use(cors());

const token = '7247039495:AAHn1hqM1Ykj1hzmQZgMS8rh5uB638kAWNU';
const bot = new Telegraf(token);
const web_link = "https://splendid-wisp-7896ac.netlify.app/";

bot.start(async (ctx) => {
  ctx.reply(`Welcome! Here are your options:`, {
    reply_markup: {
      inline_keyboard: [
        /* Inline buttons. 2 side-by-side */
        [{ text: "Start Mini App", web_app: { url: web_link } }],
        [{ text: "Invite Friends", url: `https://t.me/share/url?url=https://t.me/lovedlydtoday_bot` }],
      ]
    },
  });
});

bot.launch();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});