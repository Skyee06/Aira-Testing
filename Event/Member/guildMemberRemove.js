const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "guildMemberRemove",
  execute(member) {
      const LogEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${member} Just Left the Server!`)
        .setTimestamp();
        member.guild.channels.cache.get('939152028230361198').send({embeds: [LogEmbed]});
  }
}
