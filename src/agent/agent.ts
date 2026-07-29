import { llm } from "../services/llm.js";
import {
    navigateToUrlTool,
    openBrowserTool,
    openWebsiteTool,
} from "../tools/browserTool.js";

export const agent = llm.bindTools([
    openBrowserTool,
    openWebsiteTool,
    navigateToUrlTool,
]);