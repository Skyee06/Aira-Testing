const { MessageEmbed } = require('discord.js');

module.exports = {
   name: "ping",
   aliases: ['latency', 'lag'],
   permission: 'ADMINISTRATOR',
   description: 'send the client ping',
   cooldown: 5,
   execute(message, args, commandName, client, Discord) {
      const Response = new MessageEmbed()
      .setColor('RED')
      .setDescription(`🏓 ${client.ws.ping}ms`);
      message.channel.send({embed: [Response]});
   }
}
