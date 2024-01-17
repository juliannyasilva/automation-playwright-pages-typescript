import { type Locator, type Page } from '@playwright/test';

export class LinkedinPage {
  readonly page: Page;
  readonly optionSearch: Locator;
  readonly fieldSearch: Locator;
  readonly optionUsers: Locator;
  readonly optionRepositories: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionSearch = page.getByRole('button', { name: 'Search or jump to...' });
    this.fieldSearch = page.getByRole('combobox', { name: 'Search' });
    this.optionUsers = page.getByTestId('nav-item-users');
    this.optionRepositories = page.getByRole('link', { name: 'Repositories' });
  }
  
  async goto() {
    await this.page.goto(process.env.URL_GITHUB);
  }
}