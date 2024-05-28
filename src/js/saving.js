import { BookCard } from "./fetchData.js";

export function saveCart(cart) {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

export function getBooks() {
  const books = JSON.parse(localStorage.getItem("shoppingCart"));
  console.log(books);
  books.forEach((book) => {
    console.log("from local storage" + book);
    const bookCard = new BookCard(
      book.title,
      book.authors,
      book.description,
      book.image,
      book.price,
      book.currency,
      book.categories
    );

    bookCard.render;
  });
}
