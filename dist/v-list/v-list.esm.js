import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-ee65d4c1.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["v-list",[[0,"v-list",{"generator":[16],"renderRow":[16],"rowHeight":[8,"row-height"],"height":[2],"rowCount":[2,"row-count"],"initialScrollTop":[2,"initial-scroll-top"],"initialIndex":[2,"initial-index"],"overscanCount":[2,"overscan-count"],"estimatedRowHeight":[2,"estimated-row-height"],"scrollToIndex":[64]}]]]], { resourcesUrl });
});
