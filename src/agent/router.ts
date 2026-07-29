import { AIMessage } from "@langchain/core/messages";
import { AgentState } from "./state.js";

export function shouldContinue(
  state: typeof AgentState.State
) {
  const lastMessage =
    state.messages[state.messages.length - 1];

  if (
    lastMessage instanceof AIMessage &&
    lastMessage.tool_calls.length > 0
  ) {
    return "tools";
  }

  return "__end__";
}