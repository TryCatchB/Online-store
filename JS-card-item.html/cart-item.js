const tabItems = document.querySelectorAll(".product-info__title");
const tabContents = document.querySelectorAll(".product-info__body");

const quantityInput = document.querySelector(".quantity__input");
const quantityButtonPlus = document.querySelector(".quantity__button_plus");
const quantityButtonMinus = document.querySelector(".quantity__button_minus");

quantityButtonPlus.addEventListener("click", Increment);
quantityButtonMinus.addEventListener("click", Decrement);

tabItems.forEach((item) => item.addEventListener("click", showTabContent));

function showTabContent(event) {
  const tabTarget = event.target;
  const idContent = tabTarget.dataset.button;

  removeClass(tabItems, "tab-active");

  tabTarget.classList.add("tab-active");

  removeClass(tabContents, "content-active");

  document.querySelector(`#${idContent}`).classList.add("content-active");
}

function removeClass(listItems, className) {
  listItems.forEach((item) => {
    if (item.classList.contains(className)) {
      item.classList.remove(className);
    }
  });
}

function Increment() {
  quantityInput.value++;
  return quantityInput.value;
}

function Decrement() {
  if (quantityInput.value <= 1) {
    return;
  }

  quantityInput.value--;
  return quantityInput.value;
}
