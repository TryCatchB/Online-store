const buttonMenu = document.querySelector("#buttonMenu");
const listMenu = document.querySelector("#listMenu");
const popupBtn = document.querySelector("#popup-btn");
const popupContent = document.querySelector("#popup");
const menuCatalogLinks = document.querySelectorAll(".menu-catalog__link");
const mediaQuery = window.matchMedia("(max-width: 1023px)").matches;

buttonMenu.addEventListener("click", openMenu);
popupBtn.addEventListener("click", openPopup);

menuCatalogLinks.forEach((link) =>
  link.addEventListener("click", changeStyleGridTemplateColumns)
);
menuCatalogLinks.forEach((link) =>
  link.addEventListener("click", addClassTotalColumns)
);

document.addEventListener("click", documentActions);
document.onclick = closeElements;

transferElemenst(mediaQuery);

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

function closePopup() {
  popupContent.classList.remove("popup_active");
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

function transferElemenst(mediaQuery) {
  if (mediaQuery) {
    const menuBody = document.querySelector(".menu__body");
    const topHeaderContent = document.querySelector(".top-header__content");
    const phonesHeader = document.querySelector(".phones-header");
    const menuTopHeaderList = document.querySelector(".menu-top-header__list");

    menuBody.appendChild(menuTopHeaderList);
    topHeaderContent.insertBefore(phonesHeader, topHeaderContent.firstChild);
  }
}
