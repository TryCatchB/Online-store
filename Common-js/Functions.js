import { globalElements } from "./Elements.js";

function init() {
  document.addEventListener("mouseup", globalFunctions.closeSelectList);
  globalElements.popupBtn.addEventListener("click", globalFunctions.openPopup);
  globalElements.buttonMenu.addEventListener("click", globalFunctions.openMenu);

  globalElements.iconMenu.addEventListener(
    "click",
    globalFunctions.closeCatalogMenu
  );

  globalElements.iconMenu.addEventListener(
    "click",
    globalFunctions.closeSubMenuCatalog
  );

  globalElements.iconMenu.addEventListener(
    "click",
    globalFunctions.addClassesToElements
  );

  globalElements.menuCatalogBtnBack.addEventListener(
    "click",
    globalFunctions.closeCatalogMenu
  );

  globalElements.menuTopHeaderLinkArrow.addEventListener(
    "click",
    globalFunctions.openCatalogMenu
  );

  globalElements.subMenuCatalogBtnBack.addEventListener(
    "click",
    globalFunctions.closeSubMenuCatalog
  );

  globalElements.menuCatalogLinkFirstChild.addEventListener(
    "click",
    globalFunctions.openSubMenuCatalog
  );

  globalElements.selectSelecteds.forEach((selectSelected) =>
    selectSelected.addEventListener("click", globalFunctions.openSelectList)
  );

  document.addEventListener("mouseup", () => {
    globalElements.spollers.forEach(globalFunctions.closeSpoller);
  });

  globalElements.menuCatalogLinks.forEach((link) =>
    link.addEventListener(
      "click",
      globalFunctions.changeStyleGridTemplateColumns
    )
  );

  globalElements.menuCatalogLinks.forEach((link) =>
    link.addEventListener("click", globalFunctions.addClassTotalColumns)
  );

  if (globalElements.mediaQueryMobile) {
    globalElements.spollers.forEach((spoller) => {
      spoller.addEventListener("click", globalFunctions.openSpoller);
    });
  }

  document.addEventListener("click", globalFunctions.documentActions);
  document.onclick = globalFunctions.closeElements;

  globalFunctions.transferElements(
    globalElements.mediaQueryTablet,
    globalElements.mediaQueryMobile
  );
}

function closeElements(event) {
  const currentTarget = event.target;

  if (!currentTarget.matches("#buttonMenu")) {
    globalElements.listMenu.classList.remove("show");
    globalElements.buttonMenu.classList.remove("active");
  }

  if (currentTarget === globalElements.popup) {
    closePopup();
  }
}

function openMenu() {
  listMenu.classList.add("show");
  buttonMenu.classList.add("active");
}

function openPopup() {
  if (globalElements.popup) {
    globalElements.popup.classList.add("popup_active");
  }
}

function closePopup() {
  globalElements.popup.classList.remove("popup_active");
}

function openSpoller(event) {
  const currentTarget = event.target;
  const number = currentTarget.dataset.number;

  if (currentTarget.type === "submit") {
    const spoller = globalElements.spollers[number];

    const item = choiseElement(spoller);

    item.classList.add("active");
    globalElements.spollerButton.classList.add("active");
  }
}

function closeSpoller() {
  globalElements.spollers.forEach((spoller) => {
    const item = choiseElement(spoller);

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      globalElements.spollerButton.classList.remove("active");
    }
  });
}

function choiseElement(spoller) {
  const spollerMenu = spoller.querySelector(".spoller-menu");
  const spollerText = spoller.querySelector(".spoller__text");
  const spollerSubscribe = spoller.querySelector(".spoller-subscribe");

  return spollerMenu ? spollerMenu : spollerText || spollerSubscribe;
}

function openCatalogMenu() {
  globalElements.tagHTML.classList.add("catalog-open");
}

function openSubMenuCatalog() {
  globalElements.tagHTML.classList.add("sub-catalog-open");
}

function closeCatalogMenu() {
  if (globalElements.tagHTML.classList.contains("catalog-open")) {
    globalElements.tagHTML.classList.remove("catalog-open");
  }
}

function closeSubMenuCatalog() {
  if (globalElements.tagHTML.classList.contains("sub-catalog-open")) {
    globalElements.tagHTML.classList.remove("sub-catalog-open");
  }
}

function documentActions(event) {
  const targetElement = event.target;

  if (targetElement.closest("[data-parent]")) {
    const subMenuId = targetElement.dataset.parent
      ? targetElement.dataset.parent
      : null;

    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

    if (subMenu) {
      const activeLink = document.querySelector("._sub-menu-active");
      const activeBlock = document.querySelector("._sub-menu-open");

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove("_sub-menu-active");
        activeBlock.classList.remove("_sub-menu-open");
      }

      targetElement.classList.toggle("_sub-menu-active");
      subMenu.classList.toggle("_sub-menu-open");
    } else {
      console.log("Something is wrong");
    }

    event.preventDefault();
  }
}

function addClassTotalColumns(event) {
  const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
  const subMenuId = event.target.dataset.parent
    ? event.target.dataset.parent
    : null;

  if (menuBlocks.length) {
    menuBlocks.forEach((menuBlock) => {
      if (menuBlock.dataset.submenu === subMenuId) {
        const menuBlockItems = menuBlock.querySelectorAll(
          ".sub-menu-catalog__category"
        ).length;

        menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);

        changeStyleGridTemplateColumns(menuBlockItems);
      }
    });
  }
}

function changeStyleGridTemplateColumns(menuBlockItems) {
  const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");

  menuBlocks.forEach((menuBlock) => {
    menuBlock.style.gridTemplateColumns = `repeat(${menuBlockItems}, minmax(auto, 20rem))`;
  });
}

function addClassesToElements() {
  globalElements.tagHTML.classList.toggle("menu-open");
  globalElements.iconMenu.classList.toggle("close-icon-menu");
}

function transferElements(mediaQueryTablet, mediaQueryMobile) {
  if (mediaQueryTablet) {
    const menuBody = document.querySelector(".menu__body");
    const menuTopHeaderList = document.querySelector(".menu-top-header__list");
    const topHeaderContent = document.querySelector(".top-header__content");
    const phonesHeader = document.querySelector(".phones-header");

    menuBody.appendChild(menuTopHeaderList);
    topHeaderContent.insertBefore(phonesHeader, topHeaderContent.firstChild);
  }

  if (mediaQueryMobile) {
    const catalogHeaderContent = document.querySelector(
      ".catalog-header__content"
    );
    const bodyHeaderSearch = document.querySelector(".body-header__search");

    catalogHeaderContent.appendChild(bodyHeaderSearch);
  }
}

function openSelectList(event) {
  const currentTarget = event.target;

  if (currentTarget.className === "select-selected") {
    const parentNode = currentTarget.closest(".control");
    const id = parentNode.id;
    const items = parentNode.querySelector(".control__items");
    const options = parentNode.querySelectorAll(".control__item");

    if (!items.classList.contains("active")) {
      items.classList.add("active");

      options.forEach((option) => {
        option.addEventListener("click", () => {
          globalElements.selectSelecteds[id].textContent = option.textContent;
        });
      });
    }
  }
}

function closeSelectList() {
  const items = document.querySelectorAll(".control__items");

  items.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}

function openFilterMenus(event) {
  const button = event.target;

  if (button.tagName.toLowerCase() === "button") {
    const parentNode = button.closest("div");
    const content = parentNode.querySelector("[data-spoller]");

    content.classList.add("active");
    button.classList.add("active");
  }
}

function closeFilterMenus(event) {
  const buttonsActive = document.querySelectorAll("button");
  const button = event.target;

  if (button.tagName.toLowerCase() != "button") {
    const parentNode = button.closest("div");
    const contents = parentNode.querySelectorAll("[data-spoller]");

    contents.forEach((content) => {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      }
    });
  }

  buttonsActive.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
}

function openFilter() {
  if (globalElements.contentAll) {
    globalElements.contentAll.classList.add("active");
  }
}

function closeFilter() {
  if (globalElements.contentAll) {
    globalElements.contentAll.classList.remove("active");
  }
}

function showTip(event) {
  const currentTarget = event.target;

  globalElements.tips.forEach((tip) => {
    const span = tip.querySelector("span");

    if (currentTarget === span) {
      const textTip = tip.querySelector(".media-main-block__tip-text");

      textTip.style.display = "inline-flex";
      textTip.textContent = tip.dataset.tippyContent;

      span.addEventListener(
        "mouseleave",
        () => (textTip.style.display = "none")
      );
    }
  });
}

function setActiveStars(value) {
  globalElements.stars.forEach((star) => {
    if (star.dataset.value <= value) {
      star.classList.add("active");
    }
  });
}

function verifyActiveClass() {
  globalElements.stars.forEach((star) => {
    if (!star.classList.contains("active")) {
      star.classList.add("notActive");
    }
  });
}

function removeHoveredStars() {
  globalElements.stars.forEach((star) => {
    if (
      star.classList.contains("active") ||
      star.classList.contains("notActive")
    ) {
      star.classList.remove("active");
      star.classList.remove("notActive");
    }
  });
}

export const globalFunctions = {
  init,
  closeElements,
  openMenu,
  openPopup,
  openSpoller,
  closeSpoller,
  openCatalogMenu,
  openSubMenuCatalog,
  closePopup,
  closeCatalogMenu,
  closeSubMenuCatalog,
  documentActions,
  addClassTotalColumns,
  changeStyleGridTemplateColumns,
  addClassesToElements,
  transferElements,
  openSelectList,
  closeSelectList,
  openFilterMenus,
  closeFilterMenus,
  openFilter,
  closeFilter,
  showTip,
  setActiveStars,
  verifyActiveClass,
  removeHoveredStars,
};
