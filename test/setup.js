import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.performance = global.window.performance || {
  now: () => new Date().getTime(),
  memory: {
    jsHeapSizeLimit: 1530000000,
    totalJSHeapSize: 24500000,
    usedJSHeapSize: 19300000,
  },
};
if (!global.console.trace) {
  global.console.trace = () => {};
}
if (!global.console.table) {
  global.console.table = () => {};
}
if (!global.console.time) {
  global.console.time = () => {};
}
if (!global.console.timeEnd) {
  global.console.timeEnd = () => {};
}

