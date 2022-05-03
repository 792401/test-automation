import { Page, test, expect } from '@playwright/test';
import { AddUser } from '../pages/addUser';
import { Header } from '../pages/header';
import log from '../../../logger/logger';
import { testUser } from '../../../tests/test-data/ui/users';
import { Users } from '../pages/users';
import { BASE_URL } from '../constants';
import { deleteUser } from '../../../services/user/operations';

let addUsers;
let header;
let users;
let page: Page;

test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({ browserName, browser }) => {
    log.info('Starting Users CRUD operations test suite');
    await deleteUser(testUser.email);
    page = await browser.newPage();
    header = new Header(page);
    users = new Users(page);
    addUsers = new AddUser(page);
    testUser.username = browserName;
});

test.beforeEach(async () => {
    await page.goto(BASE_URL);
});

test.describe('Users', () => {
    test('create user', async () => {
        await header.clickAddUsersTab();
        await addUsers.createUser(testUser);
        await expect(await users.getUserRow(testUser.username), 'Users page should display created user').toBeVisible();
    });

    test('delete user', async () => {
        await header.clickUsersTab();
        await users.clickDeletUserButton(testUser.username);
        await header.clickUsersTab();
        await expect(
            await users.getUserRow(testUser.username),
            'Users page should not display deleted user'
        ).not.toBeVisible();
    });
});
