import { Locator, Page } from '@playwright/test';
import { User } from 'src/types/types';

export class AddUser {
    readonly page: Page;
    readonly nameField: Locator;
    readonly usernameField: Locator;
    readonly emailField: Locator;
    readonly phoneNumberField: Locator;
    readonly addUserButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('[name=name]');
        this.usernameField = page.locator('[name=username]');
        this.emailField = page.locator('[name=email]');
        this.phoneNumberField = page.locator('[name=phone]');
        this.addUserButton = page.locator('.MuiButton-containedPrimary');
        this.cancelButton = page.locator('.MuiButton-containedSecondary');
    }

    async fillName(name: string) {
        await this.nameField.fill(name);
    }

    async fillUsername(username: string) {
        await this.usernameField.fill(username);
    }
    async fillEmail(email: string) {
        await this.emailField.fill(email);
    }
    async fillPhoneNumber(phone: string) {
        await this.phoneNumberField.fill(phone);
    }

    async clickAddUser() {
        await this.addUserButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async createUser(user: User) {
        await this.fillName(user.name);
        await this.fillUsername(user.username);
        await this.fillEmail(user.email);
        await this.fillPhoneNumber(user.phone);
        await this.clickAddUser();
    }
}
