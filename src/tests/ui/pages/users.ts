import { Locator, Page } from '@playwright/test';

export class Users {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickDeletUserButton(username: string) {
        const edit: Locator = this.page.locator(
            `//div[contains(text(),"${username}")]//following-sibling::div[3]//button[2]`
        );

        await edit.click();
    }

    async getUserRow(username: string) {
        const row: Locator = this.page.locator(`//div[contains(text(),"${username}")]`);

        return row;
    }
}
