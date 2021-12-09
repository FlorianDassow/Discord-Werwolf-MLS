


module.exports = {
    name: 'start',
    description: 'Gives every Player a role',
    args: true,
    usage: '[roles]',
    guildOnly: true,

    run: async (bot, message, args) =>
    {
        const admin = await message.guild.roles.cache.find(r => r.name === role_admin);
        const mute = await message.guild.roles.cache.find(r => r.name === role_dead);
        const gm = await message.guild.roles.cache.find(r => r.name === role_gm);
        const night = await message.guild.roles.cache.find(r => r.name === role_night);
        if (!admin || !mute || !gm || !night)
        {
            console.log('[ERROR] Could not find Role.');
            return;
        }

        const firstChannel = await message.guild.channels.cache.find(r => r.name === channel_main);
        if (!firstChannel)
        {
            console.log('[ERROR] Could not find Channel.');
            return;
        }
		if(await message.guild.members.cache.filter(m =>
                m.voice.channelID === firstChannel.id &&
                !m.roles.cache.has(mute.id) &&
                !m.roles.cache.has(admin.id) &&
                !m.roles.cache.has(gm.id) &&
                !m.user.bot,
            ).count() = args.length)
		{
			fn_shuffle_array(args);
			
//////////////////////////////////
			{
				users[] = message.guild.members.cache.filter(m =>
					m.voice.channelID === firstChannel.id &&
					!m.roles.cache.has(mute.id) &&
					!m.roles.cache.has(admin.id) &&
					!m.roles.cache.has(gm.id) &&
					!m.user.bot,
				)
				for(i=0;i<users.length;++i)
				{
					users[i].send
				
        }
        catch (error)
        {
            console.error('[ERROR]:', error);
        }

		}
			
    },
};