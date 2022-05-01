import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../../types/types';
import { UserAPI } from './api';

/**
 * Operations and processing functions for UserAPI
 */
const users = new UserAPI();

export async function findUserIdFromEmail(email: string): Promise<string> {
    const { data } = await users.getAllUsers();
    const userId: string = data.find((user) => user.email === email).id;

    return userId;
}

export async function updateUserByEmail(
    email: string,
    data: User,
    headers?: AxiosRequestConfig
): Promise<AxiosResponse> {
    const userId: string = await findUserIdFromEmail(email);
    const response: AxiosResponse = await users.updateUser(userId, data, headers);

    return response;
}

export async function getUserByEmail(email: string, headers?: AxiosRequestConfig): Promise<AxiosResponse> {
    const userId: string = await findUserIdFromEmail(email);
    const response: AxiosResponse = await users.getUserById(userId, headers);
    return response;
}
