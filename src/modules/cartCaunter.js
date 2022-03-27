const cartCounter = () => {
  const cartCounter = document.querySelector(".counter"),
    cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

  cartCounter.textContent = cart.length;
};
export default cartCounter;
