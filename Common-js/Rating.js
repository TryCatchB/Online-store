import { globalElements } from "./Elements.js";
import { globalFunctions } from "./Functions.js";

globalElements.stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.dataset.value;

    globalFunctions.setActiveStars(value);
    globalFunctions.verifyActiveClass();
  });

  document.addEventListener("mouseup", () => {
    globalFunctions.removeHoveredStars();
  });
});
