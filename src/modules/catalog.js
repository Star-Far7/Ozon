import renderGoods from "./renderGoods";
import getData from "./getData";
import { categoryFilter } from "./filters";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button"),
    catalogModal = document.querySelector(".catalog"),
    catalogModalItem = document.querySelectorAll(".catalog li");

  let isOpen = false;

  btnCatalog.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }

    catalogModalItem.forEach((item) => {
      item.addEventListener("click", () => {
        const text = item.textContent;
        getData().then((data) => {
          renderGoods(categoryFilter(data, text));
        });
      });
    });
  });
};
export default catalog;
