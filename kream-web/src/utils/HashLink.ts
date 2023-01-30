export const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -110;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
};
