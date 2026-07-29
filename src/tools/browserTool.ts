import { tool } from "@langchain/core/tools";

import { z } from "zod";

import { browser } from "../services/browserManager.js";
import { goto } from "../browser/actions/goto.js";
import { getPageContent } from "../browser/actions/getPageContent.js";

const openWebsiteSchema = z.object({

    url: z.string().describe(
        "The URL to open."
    )

});

export const openWebsiteTool = tool(

    async ({ url }) => {

        await browser.goto(url);

        return `Opened ${url}`;

    },

    {

        name: "open_website",

        description:
            "Opens a website in Playwright.",

        schema: openWebsiteSchema,

    }

);


export const openBrowserTool = tool(
    async () => {
        await browser.launch();
        return "Browser launched successfully";
    },
    {
        name: "open_browser",
        description: "Launches a Chromium browser if one is not already running.",
        schema: z.object({}),
    }
);



export const navigateToUrlTool = tool(
    async ({ url }) => {
        return await goto(url);
    },
    {
        name: "navigate_to_url",
        description:
            "Navigate the current browser page to a URL.",
        schema: z.object({
            url: z
                .string()
                .url()
                .describe("The URL to visit."),
        }),
    }
);

export const getPageContentTool = tool(

    async () => {

        return await getPageContent();

    },

    {

        name: "get_page_content",

        description:
            "Returns the HTML content of the current page.",

        schema: z.object({}),

    }

);