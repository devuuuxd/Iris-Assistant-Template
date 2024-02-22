const { Client, Collection, Intents, EmbedBuilder, GatewayIntentBits, ActivityType,Partials } = require('discord.js');
const fs = require('fs');
const keep_alive = require("./keep_alive.js")
const {token, mongo ,clientId} = require("./config.json")
//const mongoose = require("mongoose")
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
    ],
    partials: [
      Partials.Channel,
      Partials.Message,
      Partials.User,
      Partials.GuildMember,
      Partials.Reaction
    ]
  });

client.commands = new Collection();


async function registerSlashCommands() {
  await loadSlashCommands();

  const commands = client.commands.map(command => command.data.toJSON());

  try {
    console.log('Started refreshing application (/) commands.');


	  
    await client.application.commands.set(commands);

    console.log('Successfully registered application (/) commands.');
  } catch (error) {
    console.error('Error while registering application (/) commands:', error);
  }
}

async function loadSlashCommands() {
  client.commands.clear();

  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(`Loaded command: ${command.data.name}`);
    client.commands.set(command.data.name, command);
  }
}

client.once('ready', async () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);


/*
  try {
    await mongoose.connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected to MongoDB');
  } catch (error) {
    console.error('Error: Failed to connect to MongoDB.', error);
    return;
  }
*/ // FOR MONGO!!


  client.user.setPresence({
    activities: [{ name: '/ping | Made By Devansh', type: ActivityType.Watching }],
    status: 'online',
  });

  registerSlashCommands();

  fs.watch('./commands', (event, filename) => {
    if (event === 'change') {
      console.log(`Reloading slash commands due to changes in file: ${filename}`);
      registerSlashCommands();
    }
  });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error('Error while executing command:', error);
  }
});
client.login(token)
