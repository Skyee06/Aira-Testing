const { MessageEmbed } = require('discord.js');

module.exports = {
   name: "emitremove",
   permission: 'ADMINISTRATOR',
   description: 'emitadd the guildMemberRemove event.',
   execute(message, args, commandName, client, Discord) {
         client.emit("guildMemberRemove", message.member);
   }
}
