const { MessageEmbed } = require('discord.js');

module.exports = {
   name: "emitadd",
   permission: 'ADMINISTRATOR',
   description: 'emitadd the guildMemberAdd event.',
   execute(message, args, commandName, client, Discord) {
       client.emit("guildMemberAdd", message.member);
   }
}
