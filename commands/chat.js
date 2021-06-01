
module.exports = {
    name: 'talk', // The name of the command
    description: 'Random phrases', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var phrases = [
            'Hello, person.',
            'Hello friend, i\'m from mars what about you?',
            'How are you?',
            'Ugh, let me sleep',
            'What you up to.'
        ];

        message.channel.send(phrases[Math.floor(Math.random()*phrases.length)]);//replies to their message using math to randomise the response sent
        },
};
