import { browser } from "../../services/browserManager.js";


export async function goto(url: string) {
  if (!browser.page) {
    throw new Error("Browser is not running.");
  }

  console.log(`🌍 Navigating to ${url}`);

  await browser.page.goto(url, {
    waitUntil: "networkidle",
  });

  return `Successfully navigated to ${url}`;
}