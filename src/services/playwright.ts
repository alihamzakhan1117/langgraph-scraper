import { chromium } from "playwright";
import type { Browser, Page } from "playwright";


export class PlaywrightService {
  browser?: Browser|undefined;
  page?: Page|undefined;

  async launch() {
    if (this.browser) return;

    this.browser = await chromium.launch({
      headless: false,
      slowMo: 300,
    });

    this.page = await this.browser.newPage();

    console.log("✅ Browser launched");
  }

  async goto(url: string) {
    if (!this.page) {
      throw new Error("Browser has not been launched.");
    }

    await this.page.goto(url);

    console.log(`🌐 Opened ${url}`);
  }

  async close() {
    await this.browser?.close();

    this.browser = undefined;
    this.page = undefined;
  }
}