export function getScrollTop(scrollEl) {
  return {
    scrollTop: scrollEl.scrollTop || 0,
    docHeight: scrollEl.scrollHeight,
  }
}
