import bot from "./bot.ts";
import { daily } from "cron";
import { ping } from "jobs";

// Every days check if the bot is alive
daily(ping);

// Run the bot
await bot.launch();
