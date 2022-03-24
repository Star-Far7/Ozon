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
};
getCart();
