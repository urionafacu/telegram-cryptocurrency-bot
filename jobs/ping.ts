import { sendMessage } from "../bot.ts";
import { BASE_URL } from "../config.ts";

const ping = async () => {
  try {
    await fetch(`${BASE_URL}/ping`);
  } catch (_) {
    sendMessage("Ping failed!");
  }
};

export default ping;
