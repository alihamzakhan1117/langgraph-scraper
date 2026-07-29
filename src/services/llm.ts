import "dotenv/config";

import { ChatOpenAI } from "@langchain/openai";
import { openBrowserTool, openWebsiteTool } from "../tools/browserTool.js";
import { ChatOllama } from "@langchain/ollama";

// export const llm = new ChatOpenAI({
//     apiKey: process.env.OPENROUTER_API_KEY,

//     configuration: {
//         baseURL: "https://openrouter.ai/api/v1",
//     },

//     model: process.env.LLM_MODEL,

//     temperature: 0,

//     maxTokens: 500,
// });


export const llm = new ChatOllama({
  model: "qwen3:8b",
  temperature: 0,
});

export const agent = llm.bindTools([
    openBrowserTool,
    openWebsiteTool,
]);