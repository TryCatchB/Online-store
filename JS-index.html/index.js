import { globalElements } from "../Common-js/Elements.js";
import { globalFunctions } from "../Common-js/Functions.js";

globalElements.tips.forEach((tip) =>
  tip.addEventListener("click", globalFunctions.showTip)
);
