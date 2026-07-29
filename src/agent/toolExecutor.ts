import type { ToolCall } from "@langchain/core/messages";
import { openBrowserTool, openWebsiteTool } from "../tools/browserTool.js";

const tools = {
  open_browser: openBrowserTool,
  open_website: openWebsiteTool,
};

export async function executeToolCall(toolCall: ToolCall) {
  const tool = tools[toolCall.name as keyof typeof tools];

  if (!tool) {
    throw new Error(`Unknown tool: ${toolCall.name}`);
  }

  console.log(`🔧 Executing tool: ${toolCall.name}`);

  const result = await tool.invoke(toolCall.args);

  return result;
}