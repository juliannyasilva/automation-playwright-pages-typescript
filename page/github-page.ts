import { type Locator, type Page } from '@playwright/test';

export class GithubPage {
  readonly page: Page;
  readonly optionSearch: Locator;
  readonly fieldSearch: Locator;
  readonly optionUsers: Locator;
  readonly optionRepositories: Locator;
  readonly fieldSeachRepository: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionSearch = page.getByRole('button', { name: 'Search or jump to...' });
    this.fieldSearch = page.getByRole('combobox', { name: 'Search' });
    this.optionUsers = page.getByTestId('nav-item-users');
    this.optionRepositories = page.getByRole('link', { name: 'Repositories' });
    this.fieldSeachRepository = page.getByPlaceholder('Find a repository');
  }
  
  async goto() {
    await this.page.goto(process.env.URL_GITHUB);
  }

  async clickSearch() {
    await this.optionSearch.click();
  }

  async searchValue(value : string) {
    await this.fieldSearch.fill(value);
    await this.fieldSearch.press("Enter");
  }

  async clickUsers() {
    await this.optionUsers.click();
  }
  
  async clickRepositories() {
    await this.optionRepositories.click();
  }

  async searchRepository(value : string) {
    await this.fieldSeachRepository.fill(value);
    await this.fieldSeachRepository.press("Enter");
  }
}