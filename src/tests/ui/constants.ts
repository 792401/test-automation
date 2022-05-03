import * as dotenv from 'dotenv';

dotenv.config();
export const BASE_URL = `http://${process.env.UI_DOMAIN}:${process.env.UI_PORT}`;
