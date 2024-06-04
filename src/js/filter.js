export function filter() {
  const listCategories = document.querySelectorAll(".main__books-genre");
  const books = document.querySelectorAll(".main__books-option");

  listCategories.forEach((category) => {
    category.addEventListener("click", () => {
      listCategories.forEach((noactive) => {
        noactive.classList.remove("active");
      });
      category.classList.add("active");
      const element = category.textContent;
      books.forEach((book) => {
        const categoryCard = book.dataset.category;
        if (categoryCard.includes(element)) {
          book.style.display = "flex";
        } else {
          book.style.display = "none";
        }
      });
    });
  });
}
