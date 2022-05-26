import { BASE_URL } from '../config.ts';

interface Response {
	dai: {
		usd: number;
	};
}

const checkDaiPrice = async (): Promise<void> => {
	const response = await fetch(
		`${BASE_URL}/simple/price?ids=dai&vs_currencies=usd`,
	);
	const data: Response = await response.json();
	const price = data.dai.usd;
	if (price < 0.99) {
		throw new Error(`Dai price is less than 0.99: ${price}`);
	}
};

export default checkDaiPrice;
