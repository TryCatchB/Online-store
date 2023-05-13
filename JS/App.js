const tagHTML = document.querySelector("html");
const listMenu = document.querySelector("#listMenu");
const popupContent = document.querySelector("#popup");
const popupBtn = document.querySelector("#popup-btn");
const iconMenu = document.querySelector(".icon-menu");
const buttonMenu = document.querySelector("#buttonMenu");
const menuCatalogBtnBack = document.querySelector(".menu-catalog__back");
const subMenuCatalogBtnBack = document.querySelector(".back-sub-menu-catalog");
const mediaQueryMobile = window.matchMedia("(max-width: 767px)").matches;
const menuCatalogLinks = document.querySelectorAll(".menu-catalog__link");
const menuCatalogLinkFirstChild = menuCatalogLinks[0];
const mediaQueryTablet = window.matchMedia("(max-width: 1023px)").matches;
const menuTopHeaderLinkArrow = document.querySelector(
  ".menu-top-header__link_arrow"
);

popupBtn.addEventListener("click", openPopup);
buttonMenu.addEventListener("click", openMenu);
iconMenu.addEventListener("click", closeCatalogMenu);
iconMenu.addEventListener("click", addClassesToElements);
iconMenu.addEventListener("click", closeSubMenuCatalog);
menuCatalogBtnBack.addEventListener("click", closeCatalogMenu);
subMenuCatalogBtnBack.addEventListener("click", closeSubMenuCatalog);
menuTopHeaderLinkArrow.addEventListener("click", openCatalogMenu);
menuCatalogLinkFirstChild.addEventListener("click", openSubMenuCatalog);

menuCatalogLinks.forEach((link) =>
  link.addEventListener("click", changeStyleGridTemplateColumns)
);
menuCatalogLinks.forEach((link) =>
  link.addEventListener("click", addClassTotalColumns)
);

document.addEventListener("click", documentActions);
document.onclick = closeElements;

transferElements(mediaQueryTablet, mediaQueryMobile);

function closeElements(event) {
  const currentTarget = event.target;

  if (!currentTarget.matches("#buttonMenu")) {
    listMenu.classList.remove("show");
    buttonMenu.classList.remove("active");
  }

  if (currentTarget === popupContent) {
    closePopup();
  }
}

function openMenu() {
  listMenu.classList.add("show");
  buttonMenu.classList.add("active");
}

function openPopup() {
  popupContent.classList.add("popup_active");
}

function openCatalogMenu() {
  tagHTML.classList.add("catalog-open");
}

function openSubMenuCatalog() {
  tagHTML.classList.add("sub-catalog-open");
}

function closePopup() {
  popupContent.classList.remove("popup_active");
}

function closeCatalogMenu() {
  if (tagHTML.classList.contains("catalog-open")) {
    tagHTML.classList.remove("catalog-open");
  }
}

function closeSubMenuCatalog() {
  if (tagHTML.classList.contains("sub-catalog-open")) {
    tagHTML.classList.remove("sub-catalog-open");
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
  tagHTML.classList.toggle("menu-open");
  iconMenu.classList.toggle("close-icon-menu");
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
