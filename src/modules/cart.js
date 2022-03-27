import cartCounter from "./cartCaunter";
import postData from "./postData,js";
import renderCart from "./renderCart";

const getCart = () => {
  const cartBtn = document.getElementById("cart"),
    cartModal = document.querySelector(".cart"),
    cartClose = cartModal.querySelector(".cart-close"),
    cartTotal = cartModal.querySelector(".cart-total > span"),
    goodsWrapper = document.querySelector(".goods"),
    cartWrapper = document.querySelector(".cart-wrapper"),
    sendCartBtn = document.querySelector(".cart-confirm");

  cartBtn.addEventListener("click", () => {
    cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cartModal.style.display = "flex";

    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);

    cartCounter();
  });

  cartClose.addEventListener("click", () => {
    cartModal.style.display = "";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cartModal.style.display = "";
    }
  });

  goodsWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const card = e.target.closest(".card"),
        key = card.dataset.key,
        goods = JSON.parse(localStorage.getItem("goods")),
        cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [],
        goodsItem = goods.find((i) => {
          return i.id === +key;
        });

      cart.push(goodsItem);

      localStorage.setItem("cart", JSON.stringify(cart));

      cartCounter();
    }
  });

  cartWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const card = e.target.closest(".card"),
        key = card.dataset.key,
        cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [],
        index = cart.findIndex((i) => {
          return i.id === +key;
        });

      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      renderCart(cart);
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);

      cartCounter();
    }
  });

  sendCartBtn.addEventListener("click", () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    postData(cart).then(() => {
      localStorage.removeItem("cart");

      renderCart([]);

      cartTotal.textContent = 0;

      cartCounter();
    });
  });
};
export default getCart;
