import { createReleaseFromTags, getConfig } from './index.js';

async function run() {
  const config = await getConfig(process.env);
  return createReleaseFromTags(config);
}

run();