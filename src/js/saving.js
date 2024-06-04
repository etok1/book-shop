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
  const books = JSON.parse(localStorage.getItem("books"));
  const count = parseInt(localStorage.getItem("count"));
  const countSpan = document.querySelector(".header__count");

  if (count > 0) {
    countSpan.style.display = "flex";
    countSpan.textContent = count;
  }

  console.log(books);

  books.forEach((book) => {
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
  });

  addToCart();
  console.log("from local storage rendered");
}
