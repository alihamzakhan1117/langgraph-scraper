export * from './agent/graph.js';
export * from './agent/state.js';
export * from './models/listing.js';
export * from './services/playwright.js';
export * from './tools/browser.js';
export * from './tools/excel.js';
export * from './tools/scraper.js';


import "dotenv/config";


import { HumanMessage } from '@langchain/core/messages';
import { graph } from './agent/graph.js';

async function main() {
  const result = await graph.invoke({
    messages: [
      new HumanMessage(
        "Open the browser and then open https://www.pakwheels.com/used-cars/search/-/"
      ),
    ],
  });

  console.log(result.messages);
}


main();