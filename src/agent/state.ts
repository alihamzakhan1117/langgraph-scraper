import { BaseMessage } from "@langchain/core/messages";

import { Annotation } from "@langchain/langgraph";
import type { CarListing } from "../models/carListing.js";

export const AgentState = Annotation.Root({

    messages: Annotation<BaseMessage[]>({

        reducer: (x, y) => x.concat(y),

        default: () => [],

    }),

       listings: Annotation<CarListing[]>({
        reducer: (x, y) => x.concat(y),
        default: () => [],
    }),

});