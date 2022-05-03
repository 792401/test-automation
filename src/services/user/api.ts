import { APIClient } from '../../rest/client/client';
import { buildURLPath } from '../utils';
import { users } from '../endpoints';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../../types/types';

const testHeaders = { headers: { agent: 'automated-tests' } };

/**
 * Abstracts User API interface
 */
export class UserAPI {
    private client;

    constructor() {
        this.client = new APIClient();
    }
    async getAllUsers(headers: AxiosRequestConfig = testHeaders): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.client.get(buildURLPath(users.USER), headers);

        return response;
    }

    async createUser(data: User, headers: AxiosRequestConfig = testHeaders): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.client.post(buildURLPath(users.USER), data, headers);

        return response;
    }

    async getUserById(id: string, headers: AxiosRequestConfig = testHeaders): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.client.get(buildURLPath(users.USER, id), headers);

        return response;
    }

    async updateUser(id: string, data: User, headers: AxiosRequestConfig = testHeaders): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.client.put(buildURLPath(users.USER, id), data, headers);

        return response;
    }

    async deleteUser(id: string, headers: AxiosRequestConfig = testHeaders): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.client.delete(buildURLPath(users.USER, id), headers);

        return response;
    }
}
