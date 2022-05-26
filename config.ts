import 'env';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = Deno.env.get('API_KEY');
const CHAT_ID = Deno.env.get('CHAT_ID');

export { API_KEY, BASE_URL, CHAT_ID };
