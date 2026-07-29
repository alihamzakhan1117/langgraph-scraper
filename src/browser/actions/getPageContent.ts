import { browser } from "../../services/browserManager.js";

export async function getPageContent() {

    if (!browser.page) {
        throw new Error("Browser not initialized");
    }

    return await browser.page.content();

}