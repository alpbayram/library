"use strict";
const books = document.querySelector(".books");
const addBook = document.querySelector(".add-book");
const closeAddBook = document.querySelector(".kapat");
const inputContainer = document.querySelector(".input-container");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const readSelect = document.querySelector(".read-select");

const myLibrary = [];

function Book(title, author, page, read) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.page = page;
	this.read = read;
}

function createBookAndAddToLibrary(title, author, page, read) {
	const bookName = new Book(title, author, page, read);
	myLibrary.push(bookName);
}

createBookAndAddToLibrary("İrade Terbiyesi", "Jules Payot", "200", "1");
createBookAndAddToLibrary("İrade Terbiyesi", "Jules Payot", "200", "1");
createBookAndAddToLibrary("İrade Terbiyesi", "Jules Payot", "200", "0");

function renderBookCard(id, title, author, page, read) {
	const bookCard = document.createElement("div");
	const bookTitle = document.createElement("div");
	const bookAuthor = document.createElement("div");
	const bookPage = document.createElement("div");
	const bookRead = document.createElement("div");
	const bookDeleteButton = document.createElement("button");
	const bookReadButton = document.createElement("button");

	bookTitle.textContent = title;
	bookAuthor.textContent = author;
	bookPage.textContent = "Sayfa Sayısı: " + page;
	bookRead.textContent = read == 1 ? "Okundu" : "Okunmadı";
	bookDeleteButton.textContent = "Kitabı sil.";
	bookReadButton.textContent = "Okunma durumunu değiştir.";

	bookCard.dataset.id = id;

	bookCard.classList.add("book-card");
	bookTitle.classList.add("title");
	bookAuthor.classList.add("author");
	bookPage.classList.add("page");
	bookRead.classList.add("read");
	bookDeleteButton.classList.add("delete-button");
	bookReadButton.classList.add("read-button");
	books.appendChild(bookCard);
	bookCard.appendChild(bookTitle);
	bookCard.appendChild(bookAuthor);
	bookCard.appendChild(bookPage);
	bookCard.appendChild(bookRead);
	bookCard.appendChild(bookDeleteButton);
	bookCard.appendChild(bookReadButton);
}
function renderLibrary() {
	myLibrary.forEach(function (item, index, array) {
		renderBookCard(item.id, item.title, item.author, item.page, item.read);
	});
}

renderLibrary();

addBook.addEventListener("click", function (event) {
	event.preventDefault();
	if (inputContainer.style.display == "flex") {
		createBookAndAddToLibrary(
			titleInput.value,
			authorInput.value,
			pageInput.value,
			readSelect.options[readSelect.selectedIndex].value
		);
		const last = myLibrary.at(-1);
		console.log(last);
		renderBookCard(last.id, last.title, last.author, last.page, last.read);
		// titleInput.value = "";
		// authorInput.value = "";
		// pageInput.value = "";
		// inputContainer.style.display = "none";
	} else {
		inputContainer.style.display = "flex";
	}
});
closeAddBook.addEventListener("click", function (event) {
	event.preventDefault();
	if (inputContainer.style.display == "flex") {
		inputContainer.style.display = "none";
	} else {
		inputContainer.style.display = "flex";
	}
});

books.addEventListener("click", function (event) {
	if (event.target.matches(".delete-button")) {
		event.preventDefault();
		const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;
		console.log(event.target);

		const willDeleteBookCards = event.target.parentElement;
		willDeleteBookCards.remove();

		const indexNumber = myLibrary.findIndex(function (item, index, array) {
			console.log(item.id);
			if (item.id == hedef) {
				return true;
			}
		});

		myLibrary.splice(indexNumber, 1);
	} else if (event.target.matches(".read-button")) {
		const read = event.target.parentElement.querySelector(".read");

		const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;

		const findOnArray = myLibrary.find(function (item, index, array) {
			if (item.id == hedef) {
				return true;
			}
		});
		if (findOnArray.read == 1) {
			findOnArray.read = 0;
			read.textContent = findOnArray.read == 1 ? "Okundu" : "Okunmadı";
			console.log(findOnArray);
			console.log(findOnArray.read);
		} else {
			findOnArray.read = 1;
			read.textContent = findOnArray.read == 1 ? "Okundu" : "Okunmadı";
			console.log(findOnArray);
			console.log(findOnArray.read);
		}
	}
});


