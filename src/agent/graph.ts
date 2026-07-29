import {
    END,
    START,
    StateGraph
} from "@langchain/langgraph";

import { agentNode } from "./nodes.js";
import { shouldContinue } from "./router.js";
import { AgentState } from "./state.js";
import { toolNode } from "./toolNode.js";



const workflow = new StateGraph(AgentState);

workflow.addNode("agent", agentNode);
workflow.addNode("tools", toolNode);

workflow.addEdge(START, "agent");

workflow.addConditionalEdges(
  "agent",
  shouldContinue,
  {
    tools: "tools",
    __end__: END,
  }
);

workflow.addEdge("tools", "agent");

export const graph = workflow.compile();