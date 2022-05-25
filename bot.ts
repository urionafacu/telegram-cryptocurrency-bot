import { Bot } from 'telegram';
import { API_KEY, CHAT_ID } from './config.ts';

const bot = new Bot(API_KEY!);

export const sendMessage = (message: string) => {
	return bot.telegram.sendMessage({
		chat_id: CHAT_ID!,
		text: message,
	});
};

export default bot;
