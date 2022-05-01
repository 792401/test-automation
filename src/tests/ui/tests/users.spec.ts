import { test } from '@playwright/test';
import { Users } from '../pages/users';

const URL: string = 'http://localhost:3000';
let users: any;
// test.beforeAll(async ({page})=>{
//   users = new Users(page);
// })

test.beforeEach(async ({ page }) => {
    await page.goto(`${URL}/add`);
    users = new Users(page);
});

test.describe('Users', () => {
    test('create user', async ({ page }) => {
        await users.fillUsername('user name1');
    });
});
