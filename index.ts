import { Bot } from "telegram";
import { API_KEY, CHAT_ID } from "./config.ts";

const bot = new Bot(API_KEY!);

bot.telegram.sendMessage({
  chat_id: CHAT_ID!,
  text: "Hello World!",
});

await bot.launch();
