import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { updateUserByEmail } from '../../services/users/operations';
import { UserAPI } from '../../services/users/api';
import { verifyUserIsStored } from '../../validation/api/validation';
import { testUser, updatedUser } from '../test-data/api/users';
import log from '../../logger/logger';

const users = new UserAPI();

beforeAll(() => {
    log.info('Starting Users CRUD operations test suite');
});

describe('Users CRUD operations', function () {
    it('should create an user', async function () {
        const response: AxiosResponse = await users.createUser(testUser);

        await verifyUserIsStored(response.data);
        expect(response.status).toEqual(StatusCodes.CREATED);
    });

    it('should update an user', async function () {
        const response: AxiosResponse = await updateUserByEmail(testUser.email, updatedUser);

        await verifyUserIsStored(response.data);
        expect(response.status).toEqual(StatusCodes.OK);
    });
});
