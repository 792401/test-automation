import _ from 'lodash';
import { User } from '../../types/types';
import { UserAPI } from '../../services/user/api';

const users = new UserAPI();

/**
 * Verifies if a user is saved correctly by searching it by id in the User API
 * and checking all the fields and values
 * @param user User: An user object that is expected to be stored
 */
export async function isUserSaved(user: User): Promise<boolean> {
    const { data } = await users.getUserById(user.id);
    const isEqual = _.isEqual(data, user);

    return isEqual;
}
