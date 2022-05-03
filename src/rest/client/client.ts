import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import log from '../../logger/logger';
import { METHODS } from './contants';

/**
 * HTTP Client
 */
export class APIClient {
    async get(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        const response: AxiosResponse = await axios.get(url, config);
        log.info(`${METHODS.GET} ${url} - Got response status ${response.status}`),
            log.info(`Request headers: ${JSON.stringify(config.headers)}`);

        return response;
    }

    async post(url: string, data: Record<string, unknown>, config: AxiosRequestConfig): Promise<AxiosResponse> {
        const response: AxiosResponse = await axios.post(url, data, config);
        log.info(`${METHODS.POST} ${url} - Got response status ${response.status}`),
            log.info(`Request headers: ${JSON.stringify(config.headers)}`);

        return response;
    }

    async put(url: string, data: Record<string, unknown>, config: AxiosRequestConfig): Promise<AxiosResponse> {
        const response: AxiosResponse = await axios.put(url, data, config);
        log.info(`${METHODS.PUT} ${url} - Got response status ${response.status}`),
            log.info(`Request headers: ${JSON.stringify(config.headers)}`);

        return response;
    }

    async delete(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        const response: AxiosResponse = await axios.delete(url, config);
        log.info(`${METHODS.DELETE} ${url} - Got response status ${response.status}`),
            log.info(`Request headers: ${JSON.stringify(config.headers)}`);

        return response;
    }
}
