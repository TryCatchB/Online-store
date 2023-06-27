const tagHTML = document.querySelector("html");
const stars = document.querySelectorAll(".star");
const listMenu = document.querySelector("#listMenu");
const popupBtn = document.querySelector("#popup-btn");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector(".popup__content");
const iconMenu = document.querySelector(".icon-menu");
const buttonMenu = document.querySelector("#buttonMenu");
const tips = document.querySelectorAll(".media-main-block__tip");
const menuCatalogBtnBack = document.querySelector(".menu-catalog__back");
const menuCatalogLinks = document.querySelectorAll(".menu-catalog__link");
const spollers = document.querySelectorAll(".spoller");
const subMenuCatalogBtnBack = document.querySelector(".back-sub-menu-catalog");
const selectSelecteds = document.querySelectorAll(".select-selected");
const spollerButton = document.querySelector(".spoller__title");
const catalogContent = document.querySelector(".catalog__content");
const contentAll = document.querySelector(".filter-catalog__items");
const filterCatalogTitle = document.querySelector(".filter-catalog__title");
const filterCatalogItems = document.querySelector(".filter-catalog__items");
const mediaQueryMobile = window.matchMedia("(max-width: 767px)").matches;
const mediaQueryTablet = window.matchMedia("(max-width: 1023px)").matches;
const menuCatalogLinkFirstChild = menuCatalogLinks[0];
const menuTopHeaderLinkArrow = document.querySelector(
  ".menu-top-header__link_arrow"
);

export const globalElements = {
  tips,
  popup,
  stars,
  tagHTML,
  listMenu,
  popupBtn,
  iconMenu,
  contentAll,
  buttonMenu,
  popupContent,
  spollerButton,
  menuCatalogBtnBack,
  menuCatalogLinks,
  spollers,
  subMenuCatalogBtnBack,
  selectSelecteds,
  catalogContent,
  filterCatalogTitle,
  filterCatalogItems,
  mediaQueryMobile,
  mediaQueryTablet,
  menuCatalogLinkFirstChild,
  menuTopHeaderLinkArrow,
};
