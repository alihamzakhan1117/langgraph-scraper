import { PlaywrightService } from "../services/playwright.js";

import { browser } from "../services/browserManager.js";

export async function openBrowser() {
  await browser.launch();

  return "Browser opened";
}

export async function openWebsite(url: string) {
  await browser.goto(url);

  return `Opened ${url}`;
}