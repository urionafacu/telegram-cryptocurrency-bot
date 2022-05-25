import "env";

const API_KEY = Deno.env.get("API_KEY");
const CHAT_ID = Deno.env.get("CHAT_ID");
const BASE_URL = Deno.env.get("BASE_URL");

export { API_KEY, CHAT_ID, BASE_URL };
