const getCart = () => {
  const cartBtn = document.getElementById("cart"),
    cartModal = document.querySelector(".cart"),
    cartClose = cartModal.querySelector(".cart-close");

  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  cartClose.addEventListener("click", () => {
    cartModal.style.display = "";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cartModal.style.display = "";
    }
  });
};
export default getCart;
