const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageUpdate', (message)=>{
  message.repzz
})
client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!!");
});

client.on("messageDelete", (message) => {
  if (message.author.bot) return;
  message.channel.send(
    `Message by ${message.author.username} with content "${message.content}" was deleted.`
  );
});

client.login(
  "<<Yout Token>>"
);
