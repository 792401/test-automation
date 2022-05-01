import _ from 'lodash';
import { User } from '../../types/types';
import { expect } from 'chai';
import { UserAPI } from '../../services/users/api';

const users = new UserAPI();

export async function verifyUserIsStored(user: User) {
    const { data } = await users.getUserById(user.id);
    const isEqual = _.isEqual(data, user);

    expect(isEqual, 'User was not saved correctly').to.equal(true);
}
