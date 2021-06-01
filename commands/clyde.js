const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'clyde', // The name of the command
    description: 'Display\'s a custom message from clyde with the message provided.', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '[message]', // Help text to explain how to use the command (if it had any arguments)
  async execute(message, args) {
    if (!args[0]) return this.sendErrorMessage(message, 0, 'Please provide a message to tweet');
    let text = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    if (text.length > 68) text = text.slice(0, 65) + '...';

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('❎ An error occured, please try again!');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return message.channel.send(attachment);
  
    }
}
