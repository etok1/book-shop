import { saveCart, getBooks } from "./saving.js";

const apiKey = "AIzaSyBr9B3Uw7C3Fi4NVVrg2ypGn2YRo7JewKU";
export const urlApi = `https://www.googleapis.com/books/v1/volumes?q='subject:Business'&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

export class BookCard {
  constructor(title, authors, description, image, price, currency, categories) {
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
                <p class="main__books-price">${this.currency} ${this.price}</p>
                 <button class="main__books-btn">buy now</button>
        </div>
      `;

    const btn = card.querySelector(".main__books-btn");
    btn.addEventListener("click", () => this.isAddedToCart());

    return card;
  }

  isAddedToCart() {
    if (!this.isAdded) {
      this.isAdded = true;
      console.log(this.isAdded);
    }
  }
}

const getBook = localStorage.getItem("shoppingCart");
const cart = [] || JSON.parse(getBook);
console.log(cart);

function addToCart() {
  let count = 0;
  const countSpan = document.querySelector(".header__count");
  const toCartBtn = document.querySelectorAll(".main__books-btn");
  toCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++;
      console.log(count);
      console.log("clicked");
      btn.classList.add("clicked");
      btn.textContent = "in the cart";
      countSpan.style.display = "flex";
      countSpan.textContent = count;
      saveCart(cart);
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
  const booksContainer = document.querySelector(".main__books-options");
  const data = await fetchData(urlApi);

  if (!data) {
    return;
  }

  data.items.forEach((item) => {
    const infoArray = item.volumeInfo;
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
      title,
      authors,
      text,
      image,
      price,
      currency,
      category
    );

    cart.push(bookCard);
    console.log(cart);
    booksContainer.append(bookCard.render());
  });

  addToCart();
}

if (cart.length === 0) {
  renderCards();
  saveCart(cart);
} else {
  getBooks();
}
