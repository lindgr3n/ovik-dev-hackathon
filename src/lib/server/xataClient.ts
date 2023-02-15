import { env } from '$env/dynamic/private';
import { XataClient } from './xata';

const xata = new XataClient({ apiKey: env.XATA_API_KEY });
export { xata };
