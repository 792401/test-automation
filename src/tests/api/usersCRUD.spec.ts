import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { updateUserByEmail, cleanUp } from '../../services/user/operations';
import { UserAPI } from '../../services/user/api';
import { isUserSaved } from '../../validation/api/validation';
import { testUser, updatedUser } from '../test-data/api/users';
import log from '../../logger/logger';
import { expect } from 'chai';

const users = new UserAPI();

beforeAll(async () => {
    log.info('Starting Users CRUD operations test suite');
    await cleanUp(testUser);
});

describe('Users CRUD operations', function () {
    
    it('should create an user', async function () {
        const response: AxiosResponse = await users.createUser(testUser);

        expect(response.status).to.equal(StatusCodes.CREATED);
        expect(await isUserSaved(response.data), `User with id ${response.data.id} was saved correctly`).to.equal(true);
    });

    it('should update an user', async function () {
        const response: AxiosResponse = await updateUserByEmail(testUser.email, updatedUser);

        expect(response.status).to.equal(StatusCodes.OK);
        expect(await isUserSaved(response.data), `User with id ${response.data.id} was saved correctly`).to.equal(true);
    });
});
