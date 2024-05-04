const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  //Handling Helps
  if (message.content.toLowerCase() === "hi") {
    message.reply({
      content: " Hi , How may i help you?",
    });
  }
  //HAndling message
  if (message.content.toLowerCase() === "<<Your Message>>") {
    message.reply({
      content: "<<Your Reply>>",
    });
  } 
   if (message.content.toLowerCase() === "Your Message") {
    // Send a file as a custom response
    try {
      // Replace 'path_to_your_file' with the actual path to the file you want to send
      const attachment = new Discord.MessageAttachment("<<Attachment>>");
      message.channel.send(attachment);
    } catch (error) {
      console.error("Error sending file:", error);
      message.reply("There was an error sending the file.");
    }
  }
});

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
  "<<Your Token>>"
);
