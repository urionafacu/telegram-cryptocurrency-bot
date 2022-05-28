import bot, { sendMessage } from './bot.ts';
import { cron, daily, everyMinute } from 'cron';
import { checkDaiPrice, ping } from 'jobs';

sendMessage('Bot is online');

// Every days check if the bot is alive
daily(ping);

// Send me message at 9:00 AM every day
cron('* * 12', () => {
	sendMessage('Bot is alive');
});

everyMinute(async () => {
	try {
		await checkDaiPrice();
	} catch (error) {
		sendMessage(error.message);
	}
});

// Run the bot
await bot.launch();
