const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
       const MemberRole = member.guild.roles.cache.get('920997427144699915');
        member.roles.add(MemberRole);
  
        const WessageEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('WELCOME', member.user.displayAvatarURL({dynamic: true}))
        .setDescription(` Welcome ${member} to the **${member.guild.name}**\'s discord server!\n Latest Member Count **${member.guild.memberCount}**`)
        .setFooter(`${member.user.tag}`, member.user.displayAvatarURL({dynamic: true}))
        .setTimestamp();
        member.guild.channels.cache.get('939152011641909258').send({content: `${member}`, embeds: [WelcomeEmbed]})

        const LogEmbed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${member} Just Joined the Server!`)
        .setTimestamp();

        member.guild.channels.cache.get('939152028230361198').send({embeds: [LogEmbed]});

  }
}
