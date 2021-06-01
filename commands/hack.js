
const darkrandom = require("random");
const darkemail = require("random-email"); 
const darkpassword = require("generate-password");

module.exports = {
    name: 'hack', // The name of the command
    description: 'Hack someone', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '@user', // Help text to explain how to use the command (if it had any arguments)
  async execute(message, args) {

    
      const text = require(`../data/text/hack.json`)
      
    
    const impostorpassword = darkpassword.generate({
        length: 10,
        numbers: true,
      });
    
       const user = message.mentions.users.first();
      if (!user) {
        return message.channel.send(text.hack1);
      } else {
        if (user.bot) {
        return message.channel.send(text.hackbot);
      }
      }
      const member = message.guild.member(user);
      const mostCommon = [`${text.hack2}`, `${text.hack3}`, `${text.hack3}`, `${text.hack4}`, `${text.hack5}`, `${text.hack6}`];
      const lastdm = [
       `${text.hack7}`,
        `${text.hack8}`,
        `${text.hack9}`,
        `${text.hack10}`,
      ];
    
     
      message.channel.send(`${text.hack11} "${member.user.username}" ${text.hack12}`)
        .then(async (msg) => {
          setTimeout(async function () {
            await msg.edit(`[▘] ${text.hack13}`).catch(() => {});
          }, 2000);
          setTimeout(async function () {
            await msg.edit(
              `[▝] Email: \`${darkemail({
                domain: "gmail.com",
              })}\`\nPassword: \`${impostorpassword}\``
            ).catch(() => {});
          }, 4000);
          setTimeout(async function () {
            await msg.edit(
              `[▖] Last DM: "${lastdm[Math.floor(Math.random() * lastdm.length)]}"`
            ).catch(() => {});
          }, 6000);
          setTimeout(async function () {
            await msg.edit(`[▘] ${text.hack14}`).catch(() => {});
          }, 10000);
          setTimeout(async function () {
            await msg.edit(
              `[▝] mostCommon = "${
                mostCommon[Math.floor(Math.random() * mostCommon.length)]
              }"`
            ).catch(() => {});
          }, 13000);
          setTimeout(async function () {
            await msg.edit(`[▗] Finding IP address...`).catch(() => {});
          }, 17000)
          setTimeout(async function () {
            await msg.edit(
              `[▖] IP address: \`127.0.0.1:${darkrandom.int(100, 9999)}\``
            ).catch(() => {});
          }, 20000);
          setTimeout(async function () {
            await msg.edit(`[▘] ${text.hack15}`).catch(() => {});
          }, 25000);
          setTimeout(async function () {
            await msg.edit(`[▝] ${text.hack16}`).catch(() => {});
          }, 27000);
          setTimeout(async function () {
            await msg.edit(`${text.hack17} ${member.user.username}`).catch(() => {});
          }, 32000);
          setTimeout(async function () {
            await message.channel.send(
              `${text.hack18}`
            ).catch(() => {});
          }, 34000);
        });
    
      }} 
