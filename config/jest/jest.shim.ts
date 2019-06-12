export interface Global {
  document: Document;
  window: Window;
  requestAnimationFrame: (callback: () => void) => void;
}

declare var global: Global;
// React 16 expects RAF
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
