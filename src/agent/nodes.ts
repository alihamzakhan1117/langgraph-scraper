import type { AgentState } from "./state.js";
import { openBrowser, openWebsite } from "../tools/browser.js";

import { agent } from "./agent.js";

export async function agentNode(
  state: typeof AgentState.State
) {
  const response = await agent.invoke(
    state.messages
  );

  return {
    messages: [response],
  };
}