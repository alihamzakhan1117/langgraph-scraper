import { ToolNode } from "@langchain/langgraph/prebuilt";

import {
  openBrowserTool,
  openWebsiteTool,
} from "../tools/browserTool.js";

export const toolNode = new ToolNode([
  openBrowserTool,
  openWebsiteTool,
]);