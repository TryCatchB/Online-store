const buttonMenu = document.querySelector("#buttonMenu");
const listMenu = document.querySelector("#listMenu");
const popupBtn = document.querySelector("#popup-btn");
const popupContent = document.querySelector("#popup");

buttonMenu.addEventListener("click", openMenu);
popupBtn.addEventListener("click", openPopup);

document.onclick = (event) => {
  const currentTarget = event.target;

  if (!currentTarget.matches("#buttonMenu")) {
    listMenu.classList.remove("show");
    buttonMenu.classList.remove("active");
  }

  if (currentTarget === popupContent) {
    closePopup();
  }
};

document.addEventListener("click", documentActions);

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
    const catalogMenu = document.querySelector(".catalog-header");

    if (subMenu) {
      if (targetElement.classList.contains("_sub-menu-active")) {
      }

      targetElement.classList.toggle("_sub-menu-active");
      subMenu.classList.toggle("_sub-menu-open");
    } else {
      console.log("Something is wrong");
    }

    event.preventDefault();
  }
}
