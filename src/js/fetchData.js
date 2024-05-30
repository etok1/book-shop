import { saveCart, getBooks, saveBooks, saveCount } from "./saving.js";

const apiKey = "AIzaSyBr9B3Uw7C3Fi4NVVrg2ypGn2YRo7JewKU";
export const urlApi = `https://www.googleapis.com/books/v1/volumes?q='subject:Business'&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

export class BookCard {
  constructor(
    id,
    title,
    authors,
    description,
    image,
    price,
    currency,
    categories
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.description = description;
    this.image = image;
    this.price = price;
    this.currency = currency;
    this.categories = categories;
    this.isAdded = false;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("main__books-option");
    card.setAttribute("data-category", this.categories);
    card.setAttribute("data-id", this.id);
    card.innerHTML = `
      <img class="main__books-cover" src="${this.image}" alt="book"/>
        <div class="main__books-book">
          <p>${this.authors}</p>
          <h1>${this.title}</h1>
          <div class="main__books-review">
              <img src="./src/assets/star.svg" alt="star" />
              <img src="./src/assets/star.svg" alt="star" />
              <img src="./src/assets/star.svg" alt="star" />
              <img src="./src/assets/star.svg" alt="star" />
              <img src="./src/assets/star.svg" alt="star" />
              <p>252 review</p>
          </div>
              <h2 class="main__books-annotation">
                  ${this.description}
               </h2>
                <p class="main__books-price"><span>${this.currency} </span>${this.price}</p>
                 <button class="main__books-btn">buy now</button>
        </div>
      `;

    // const btn = card.querySelector(".main__books-btn");
    // btn.addEventListener("click", () => this.isAddedToCart());

    return card;
  }

  isAddedToCart() {
    if (!this.isAdded) {
      this.isAdded = true;
      console.log(this.isAdded);
    }
  }

  changeBtn() {
    const card = document.querySelectorAll(".main__books-option");

    card.forEach((c) => {
      const btn = c.querySelector(".main__books-btn");
      btn.classList.add("clicked");
      btn.textContent = "in the cart";
    });
  }
}

export const booksContainer = document.querySelector(".main__books-options");
const getCart = localStorage.getItem("shoppingCart");
const cart = [] || JSON.parse(getCart);
console.log(cart);

const books = [];

export function increaseCount() {
  const countSpan = document.querySelector(".header__count");
  let countSaved = parseInt(localStorage.getItem("count")) || 0;
  countSaved++;
  countSpan.style.display = "flex";
  countSpan.textContent = countSaved;
  saveCount(countSaved);
  console.log(countSaved);
}

export function addToCart() {
  const toCartBtn = document.querySelectorAll(".main__books-btn");
  toCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".main__books-option");
      console.log(card);

      increaseCount();
      console.log("clicked");
      btn.classList.add("clicked");
      btn.textContent = "in the cart";

      const id = card.dataset.id;
      const title = card.querySelector(".main__books-book h1").textContent;
      const authors = card.querySelector(".main__books-book p").textContent;
      const authorsArray = authors.split(", ");
      const image = card.querySelector(".main__books-cover").src;
      const categories = card.dataset.category;
      const description = card.querySelector(
        ".main__books-annotation"
      ).textContent;
      const price = card.querySelector(".main__books-price").textContent.trim();
      const priceHandle = price ? price : " ";
      const currency = card.querySelector(
        ".main__books-price span"
      ).textContent;
      const currencyHandle = currency ? currency : " ";
      const book = new BookCard(
        id,
        title,
        authorsArray,
        description,
        image,
        priceHandle,
        currencyHandle,
        categories
      );

      book.isAddedToCart();
      cart.push(book);
      saveCart(cart);
      console.log(book);
    });
  });
}

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function renderCards() {
  const data = await fetchData(urlApi);

  if (!data) {
    return;
  }

  data.items.forEach((item) => {
    const infoArray = item.volumeInfo;
    const id = item.id;
    const authors = infoArray.authors ? infoArray.authors.join(", ") : " ";
    const image = infoArray.imageLinks
      ? infoArray.imageLinks.thumbnail
      : "https://placehold.co/212x300";

    const title = infoArray.title;
    const text = infoArray.description ? infoArray.description : " ";
    const price = item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : "";
    const currency = item.saleInfo.listPrice
      ? item.saleInfo.listPrice.currencyCode
      : "";

    const category = infoArray.categories ? infoArray.categories : "";

    const bookCard = new BookCard(
      id,
      title,
      authors,
      text,
      image,
      price,
      currency,
      category
    );

    books.push(bookCard);
    saveBooks(books);
    console.log(books);
    booksContainer.append(bookCard.render());
  });

  addToCart();
}

const checkBooksString = localStorage.getItem("books");
const checkBooks = checkBooksString ? JSON.parse(checkBooksString) : [];

if (checkBooks.length === 0) {
  await renderCards();
  console.log("NOT from local storage rendered");
} else {
  getBooks();
}
