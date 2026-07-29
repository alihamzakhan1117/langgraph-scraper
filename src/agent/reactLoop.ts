import {
  AIMessage,
  HumanMessage,
  ToolMessage,
} from "@langchain/core/messages";


import { executeToolCall } from "./toolExecutor.js";
import { agent } from "../services/llm.js";

export async function runAgent(input: string) {

  const messages = [

    new HumanMessage(input)

  ];

  while (true) {

    const response = await agent.invoke(messages);

    messages.push(response);

    if (response.tool_calls.length === 0) {

      console.log(response.content);

      break;

    }

    for (const toolCall of response.tool_calls) {

      const result = await executeToolCall(toolCall);

      messages.push(

        new ToolMessage({

          content: result,

          tool_call_id: toolCall.id,

        })

      );

    }

  }

}