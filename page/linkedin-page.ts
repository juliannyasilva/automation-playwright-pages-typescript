import { type Locator, type Page } from '@playwright/test';

export class LinkedinPage {
  readonly page: Page;
  readonly optionPeople: Locator;
  readonly fieldFirstNameSearch: Locator;
  readonly fieldLastNameSearch: Locator;
  readonly optionSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionPeople = page.getByRole('link', { name: 'People', exact: true });
    this.fieldFirstNameSearch = page.getByPlaceholder('First Name');
    this.fieldLastNameSearch = page.getByPlaceholder('Last Name');
    this.optionSearch = page.getByRole('button', { name: 'Search' });
  }
  
  async goto() {
    await this.page.goto(process.env.URL_LINKEDIN);
  }

  async clickPeople() {
    await this.optionPeople.click();
  }
  
  async searchPerson(firstName: string, lastName: string) {
    await this.fieldFirstNameSearch.fill(firstName);
    await this.fieldLastNameSearch.fill(lastName);
  }

  async clickSearch() {
    await this.optionSearch.click();
  }
}