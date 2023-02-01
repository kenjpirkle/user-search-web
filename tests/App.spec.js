// @ts-check
import { test, expect } from '@playwright/test';

test('Elements are visible', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByPlaceholder('Search Users..')).toBeVisible();
  await expect(page.getByText('Search')).toBeVisible();
});

test('Given a search term of "James", when I enter the search term into the search input and click the "Search" button, then the search results should include records for "James Kubu" and "James Pfeffer"', async ({page}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Search Users..').type('James');
  await page.getByText('Search').click();
  await expect(page.getByText('James Kubu')).toBeVisible();
  await expect(page.getByText('James Pfeffer')).toBeVisible();
});

test('Given a search term of "jam", when I enter the search term into the search input and click the "Search" button, then the search results should include records for "James Kubu", "James Pfeffer" and "Chalmers Longfut"', async ({page}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Search Users..').type('jam');
  await page.getByText('Search').click();
  await expect(page.getByText('James Kubu')).toBeVisible();
  await expect(page.getByText('James Pfeffer')).toBeVisible();
  await expect(page.getByText('Chalmers Longfut')).toBeVisible();
});

test('Given a search term of "Katey Soltan", when I enter the search term into the search input and click the "Search" button, then the search results should include only the record for "Katey Soltan"', async ({page}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Search Users..').type('Katey Soltan');
  await page.getByText('Search').click();
  await expect(page.getByText('Katey Soltan')).toBeVisible();
});

test('Given a search term of "Jasmine Duncan", when I enter the search term into the search input and click the "Search" button, then no results should be returned', async ({page}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Search Users..').type('Jasmine Duncan');
  await page.getByText('Search').click();
  await expect(page.getByText('No results found.')).toBeVisible();
});

test('Given an empty search term, when I click the "Search" button, I should be notified that I did not provide a search input and no results should be returned', async ({page}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Search Users..').type('');
  await page.getByText('Search').click();
  await expect(page.getByText('Search cannot be empty. Please provide valid input.')).toBeVisible();
});