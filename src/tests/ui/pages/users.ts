import { Locator, Page } from '@playwright/test';

export class Users {
    readonly page: Page;
    readonly nameField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('[name=username]');
    }

    async fillUsername(username: string) {
        await this.nameField.fill(username);
    }
}
