import { Locator, Page } from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly users: Locator;
    readonly addUsers: Locator;

    constructor(page: Page) {
        this.page = page;
        this.users = page.locator('[href="/all"]');
        this.addUsers = page.locator('[href="/add"]');
    }

    async clickUsersTab() {
        await this.users.click();
    }

    async clickAddUsersTab() {
        await this.addUsers.click();
    }
}
