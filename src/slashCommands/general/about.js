const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'about',
	description: 'information about ParaBot',
	type: 'CHAT_INPUT',
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new MessageEmbed()
			.setColor('PURPLE')
			.setFooter({ text: `Executed By: ${interaction.user.tag}` })
			.setTimestamp()
			.setTitle('About')
			.setDescription(
				'ParaBot is a multipurpose bot along with many features starting with moderation to fun to info! Use `/` in order to findout what commands ParaBot can do!\r\n\r\n Made by [Paraformaldead#0404](https://discord.gg/RdtZCXVm)\r\n\r\n'
			);
		interaction.reply({ embeds: [embed] });
	},
};
