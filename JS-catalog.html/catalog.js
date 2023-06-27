import { globalElements } from "../Common-js/Elements.js";
import { globalFunctions } from "../Common-js/Functions.js";

document.addEventListener("mouseup", globalFunctions.closeFilterMenus);

globalElements.filterCatalogItems.addEventListener(
  "click",
  globalFunctions.openFilterMenus
);

if (globalElements.mediaQueryTablet) {
  globalElements.catalogContent.addEventListener(
    "mouseup",
    globalFunctions.closeFilter
  );

  globalElements.filterCatalogTitle.addEventListener(
    "click",
    globalFunctions.openFilter
  );
}
