const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'meme', // The name of the command
    description: 'Fetches a meme', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
  async execute(message) {
        try {
      let res = await fetch('https://meme-api.herokuapp.com/gimme');
      res = await res.json();
      const embed = new MessageEmbed()
        .setTitle(res.title)
        .setImage(res.url)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      message.channel.send('Please try again in a few seconds');
    }
  }
};
