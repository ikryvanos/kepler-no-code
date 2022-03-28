export const onDocumentReady = (cb: () => void) => {
  const stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
      cb();
    }
  }, 100);
}
