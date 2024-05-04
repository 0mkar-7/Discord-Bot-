const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('<<Your Token>>');

rest.put(Routes.applicationCommands(''), { body: commands })
  .then(() => {
    console.log('Successfully reloaded application (/) commands.');
  })
  .catch(error => {
    console.error(error);
  });
