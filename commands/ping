const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot'),
  async execute(interaction) {
    try {
      const embed = new EmbedBuilder()
      .setColor("Random")
        .setTitle('Ping')
        .setDescription('Calculating ping...');

      const pingMessage = await interaction.reply({ embeds: [embed], fetchReply: true });

      const botPing = pingMessage.createdTimestamp - interaction.createdTimestamp;

      embed.setDescription(` Bot ping: ${botPing}ms`);

      await pingMessage.edit({ embeds: [embed] });
    } catch (error) {
      console.error('Error while executing ping command:', error);
    }
  },
};
