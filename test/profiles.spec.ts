import { test, expect } from '@playwright/test';
import { GithubPage } from '@pages/github-page';
import { LinkedinPage } from '@pages/linkedin-page';
import { julianny } from '@data/julianny';

test.describe('Visit my profiles', () => {

  test('visit profile on github', async ({ page }) => {
    const githubPage = new GithubPage(page);

    await githubPage.goto();
    await githubPage.clickSearch();
    await githubPage.searchValue('juliannyasilva');
    await expect(page.getByText(julianny.user+'/'+julianny.repoJulianny)).toBeVisible();
    await githubPage.clickUsers();
    await expect(page.getByText(julianny.name)).toBeVisible();
    await page.getByRole('link', { name: julianny.name }).click();
    await expect(page.getByText("Hi, how are you?")).toBeVisible();
    await expect(page.getByRole('link', { name: 'Repositories' })).toBeVisible();;
    await githubPage.clickRepositories();
    await githubPage.searchRepository(julianny.repoPlaywright);
    await expect(page.getByRole('link', { name: julianny.repoPlaywright })).toBeVisible();
  });

  test('visit profile on linkedin', async ({ page }) => {
    const linkedinPage = new LinkedinPage(page);

    await linkedinPage.goto();
  });
});