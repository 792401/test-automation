import * as dotenv from 'dotenv';

dotenv.config();

/**
 * REST API endpoints configs
 */
export const BASE_URL = `http://${process.env.SERVICE_DOMAIN}:${process.env.SERVICE_PORT}`;

export const users = {
    USER: 'user'
};
