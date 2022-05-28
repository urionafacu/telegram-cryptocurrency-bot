import bot, { sendMessage } from './bot.ts';
import { daily, everyMinute } from 'cron';
import { checkDaiPrice, ping } from 'jobs';

sendMessage('Bot is online');

// Every days check if the bot is alive
daily(ping);

everyMinute(async () => {
	try {
		await checkDaiPrice();
	} catch (error) {
		sendMessage(error.message);
	}
});

// Run the bot
await bot.launch();
