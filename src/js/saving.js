import { BookCard, booksContainer, addToCart } from "./fetchData.js";

export function saveCart(cart) {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

export function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

export function saveCount(count) {
  localStorage.setItem("count", JSON.stringify(count));
}

export function getBooks() {
  const cart = JSON.parse(localStorage.getItem("shoppingCart"));
  const books = JSON.parse(localStorage.getItem("books"));
  const count = JSON.parse(localStorage.getItem("count"));

  console.log(books);
  console.log(cart);

  books.forEach((book) => {
    console.log("from local storage", book);
    const bookCard = new BookCard(
      book.id,
      book.title,
      book.authors,
      book.description,
      book.image,
      book.price,
      book.currency,
      book.categories
    );
    booksContainer.append(bookCard.render());
    if (cart) {
      cart.forEach((c) => {
        const bookCart = new BookCard(
          c.id,
          c.title,
          c.authors,
          c.description,
          c.image,
          c.price,
          c.currency,
          c.categories
        );
        console.log("it is in the cart", bookCart);
        if (bookCard.id.includes(bookCart.id)) {
          const card = booksContainer.querySelector(".main__books-option");
          console.log(card);
          const cardBtn = card.querySelector(".main__books-btn");
          cardBtn.classList.add("clicked");
          cardBtn.textContent = "in the cart";
        }
        // booksContainer.append(bookCart.render());
      });
    }
  });

  addToCart();
  console.log("from local storage rendered");
}
// cart.forEach((c) => {
//   if (book.id.includes(c.id)) {
//     const countSpan = document.querySelector(".header__count");
//     bookCard.changeBtn();
//     console.log(`card-${c.id}`);
//     countSpan.style.display = "flex";
//     countSpan.textContent = count;
//     console.log(count);
//     saveCount(count);
//     console.log("from local storage", c);
//   }
// });
