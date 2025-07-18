"use strict";
const books = document.querySelector(".books");
const addBook = document.querySelector(".add-book");
const closeAddBook = document.querySelector(".close");
const inputContainer = document.querySelector(".input-container");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const readSelect = document.querySelector(".read-select");

class MyBooks {
	#id;
	static myLibrary = [];

	constructor(title, author, page, read) {
		this.#id = crypto.randomUUID();
		this.title = title;
		this.author = author;
		this.page = page;

		this.read = read;
		MyBooks.myLibrary.push(this);
	}
	get id() {
		return this.#id;
	}
	set id(id) {
		return console.log("You cannot set id.");
	}
	get infos() {
		const readState = this.read == 1 ? "Read" : "Unread";
		return `${this.title} ${this.author} ${this.page} ${readState}`;
	}

	// pushToArray() {
	// 	MyBooks.myLibrary.push(this);
	// }
}
const book1 = new MyBooks(
	"The IT Support Handbook: A How-To Guide",
	"Mike Halsey",
	"304",
	"0"
);
const book2 = new MyBooks("Exam Ref DP-900 Microsoft Azure Data Fundamentals", "Daniel Seara", "184", "1");
const book3 = new MyBooks("Help Desk Practitioner's Handbook", "Barbara Czegel", "72", "1");
const book4 = new MyBooks("Learn Power BI: A comprehensive, step-by-step guide for beginners", "Greg Deckler", "304", "0");
const book5 = new MyBooks("Microsoft 365 Administration Inside Out", "Aaron Guilmette ", "304", "0");
// const myLibrary = [];

// book1.pushToArray();
// book2.pushToArray();
// book3.pushToArray();
// book4.pushToArray();
// book5.pushToArray();
// function Book(title, author, page, read) {
// 	this.id = crypto.randomUUID();
// 	this.title = title;
// 	this.author = author;
// 	this.page = page;
// 	this.read = read;
// }

function createBook(title, author, page, read) {
	new MyBooks(title, author, page, read);
}
// createBookAndAddToLibrary(
// 	"Careless People: A Cautionary Tale of Power, Greed, and Lost Idealism",
// 	"Jules Payot",
// 	"304",
// 	"0"
// );
// createBookAndAddToLibrary("In Praise of Idleness", "Bertrand Russell", "184", "1");
// createBookAndAddToLibrary("The Burnout Society", "Byung-Chul Han", "72", "1");
// createBookAndAddToLibrary("Deep Work", "Cal Newport", "304", "0");
// createBookAndAddToLibrary("Meditations", "Marcus Aurelius", "304", "0");

function renderBookCard(id, title, author, page, read) {
	function getRandomIntInclusive(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
	}

	const bookRandom = getRandomIntInclusive(1, 6);
	const paperRandom = getRandomIntInclusive(1, 3);
	const paperText = paperRandom == 1 ? "digital" : paperRandom == 2 ? "hardcover" : "paperback";
	const yearRandom = getRandomIntInclusive(1999, 2025);

	const bookCard = document.createElement("div");
	const bookTitle = document.createElement("div");
	const bookAuthor = document.createElement("div");
	const bookPage = document.createElement("div");
	const bookRead = document.createElement("div");
	const infos = document.createElement("div");
	const bookImageDıv = document.createElement("div");

	const dropdownContainer = document.createElement("div");
	const dropdownButton = document.createElement("button");
	const dropdownIcon = document.createElement("img");
	const dropdownMenu = document.createElement("ul");
	const dropdownMenuItem1 = document.createElement("li");
	const dropdownMenuItem2 = document.createElement("li");
	const menuItem1Icon = document.createElement("img");
	const menuItem2Icon = document.createElement("img");
	const menuItem1Text = document.createElement("span");
	const menuItem2Text = document.createElement("span");

	const bookCardImage = document.createElement("img");

	bookTitle.textContent = title;
	bookAuthor.textContent = author;
	bookPage.style.whiteSpace = "pre-wrap";
	bookPage.textContent = `${page} pages  •  ${paperText}  •  ${yearRandom}`;
	bookRead.textContent = read == 1 ? "Read" : "Unread";
	menuItem1Text.textContent = read == 1 ? "Mark as Unread" : "Mark as Read";
	menuItem2Text.textContent = "Delete Book";
	// bookDeleteButton.textContent = "Kitabı sil.";
	// bookReadButton.textContent = "Okunma durumunu değiştir.";

	dropdownMenu.dataset.menuState = "";
	bookCard.dataset.id = id;

	bookImageDıv.classList.add("book-image-div");
	bookCardImage.classList.add("book-card-img");
	bookCardImage.setAttribute("src", `images/book${bookRandom}.avif`);
	dropdownIcon.setAttribute("src", "images/vert.svg");
	dropdownButton.setAttribute("ontouchstart", "");
	const readState = read == 1 ? "images/unread.svg" : "images/read.svg";
	menuItem1Icon.setAttribute("src", readState);

	menuItem2Icon.setAttribute("src", "images/trash.svg");
	infos.classList.add("infos");

	dropdownContainer.classList.add("dropdown-container");
	dropdownButton.classList.add("dropdown-button");
	dropdownIcon.classList.add("dropdown-icon");

	dropdownMenu.classList.add("dropdown-menu");
	dropdownMenuItem1.classList.add("menu-read-state");
	dropdownMenuItem2.classList.add("menu-trash");

	bookCard.classList.add("book-card");
	bookTitle.classList.add("title");
	bookAuthor.classList.add("author");
	bookPage.classList.add("page");
	bookRead.classList.add("read");
	// bookDeleteButton.classList.add("delete-button");
	// bookReadButton.classList.add("read-button");

	books.appendChild(bookCard);
	bookCard.appendChild(bookImageDıv);

	bookCard.appendChild(infos);
	bookCard.appendChild(dropdownContainer);
	dropdownContainer.appendChild(dropdownButton);
	dropdownButton.appendChild(dropdownIcon);
	dropdownContainer.appendChild(dropdownMenu);
	dropdownMenu.appendChild(dropdownMenuItem1);
	dropdownMenu.appendChild(dropdownMenuItem2);
	dropdownMenuItem1.appendChild(menuItem1Icon);
	dropdownMenuItem2.appendChild(menuItem2Icon);
	dropdownMenuItem1.appendChild(menuItem1Text);
	dropdownMenuItem2.appendChild(menuItem2Text);

	bookImageDıv.appendChild(bookCardImage);
	infos.appendChild(bookTitle);
	infos.appendChild(bookAuthor);
	infos.appendChild(bookPage);
	infos.appendChild(bookRead);
	// bookCard.appendChild(bookDeleteButton);
	// bookCard.appendChild(bookReadButton);
}
function renderLibrary() {
	MyBooks.myLibrary.forEach(function (item, index, array) {
		renderBookCard(item.id, item.title, item.author, item.page, item.read);
	});
}

renderLibrary();

document.addEventListener("click", function (event) {
	const dialog = document.querySelector("dialog");
	const menu = document.querySelectorAll(".dropdown-menu");
	const titleInput = document.querySelector(".title-input");
	const authorInput = document.querySelector(".author-input");
	const pageInput = document.querySelector(".page-input");
	if (event.target.matches(".add-book")) {
		dialog.showModal();
	} else if (event.target.matches(".save-book")) {
		if (
			titleInput.checkValidity() &&
			authorInput.checkValidity() &&
			pageInput.checkValidity()
		) {
			createBook(
				titleInput.value,
				authorInput.value,
				pageInput.value,
				readSelect.options[readSelect.selectedIndex].value
			);
			const last = MyBooks.myLibrary.at(-1);
			console.log(last);
			renderBookCard(last.id, last.title, last.author, last.page, last.read);
			titleInput.value = "";
			authorInput.value = "";
			pageInput.value = "";
			dialog.close();
		} else {
			pageInput.reportValidity();
			authorInput.reportValidity();
			titleInput.reportValidity();
		}
	} else if (event.target == closeAddBook) {
		dialog.close();
	} else if (
		!event.target.matches(".dropdown-menu") &&
		!event.target.matches(".dropdown-button")
	) {
		menu.forEach(function (item) {
			if (item.dataset.menuState == "open") {
				item.dataset.menuState = "";
			}
		});
	} else if (event.target.matches(".dropdown-button")) {
		menu.forEach(function (item) {
			if (
				item.dataset.menuState == "open" &&
				!(
					item.closest(".book-card").dataset.id ==
					event.target.closest(".book-card").dataset.id
				)
			) {
				item.dataset.menuState = "";
			}
		});
	}
});

books.addEventListener("click", function (event) {
	const menu = event.target.closest(".dropdown-menu");

	if (event.target.matches(".dropdown-button")) {
		console.log(event.target.nextElementSibling);
		if (event.target.nextElementSibling.dataset.menuState) {
			event.target.nextElementSibling.dataset.menuState = "";
		} else {
			event.target.nextElementSibling.dataset.menuState = "open";
		}

		// console.log(	event.target.nextElementSibling.dataset.menuState)
	} else if (event.target.closest(".dropdown-menu")) {
		// event.stopPropagation();
		console.log("menuye");

		if (event.target.closest(".menu-trash")) {
			const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;
			console.log(event.target);

			const willDeleteBookCards = event.target.closest(".book-card");
			willDeleteBookCards.remove();

			const indexNumber = MyBooks.myLibrary.findIndex(function (item, index, array) {
				console.log(item.id);
				if (item.id == hedef) {
					return true;
				}
			});

			MyBooks.myLibrary.splice(indexNumber, 1);
		} else if (event.target.closest(".menu-read-state")) {
			const read = event.target.closest(".book-card").querySelector(".read");

			const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;
			const menuReadState = event.target.closest(".menu-read-state");

			const findOnArray = MyBooks.myLibrary.find(function (item, index, array) {
				if (item.id == hedef) {
					return true;
				}
			});
			if (findOnArray.read == 1) {
				findOnArray.read = 0;
				read.textContent = findOnArray.read == 1 ? "Read" : "Unread";
				const readState = findOnArray.read == 1 ? "images/unread.svg" : "images/read.svg";

				menuReadState.firstChild.src = readState;
				menuReadState.lastElementChild.textContent =
					findOnArray.read == 1 ? "Mark as Unread" : "Mark as Read";
			} else {
				findOnArray.read = 1;
				read.textContent = findOnArray.read == 1 ? "Read" : "Unread";
				// buraya ayar çekicem gereksiz kontrol var
				const readState = findOnArray.read == 1 ? "images/unread.svg" : "images/read.svg";

				menuReadState.firstChild.src = readState;
				menuReadState.lastElementChild.textContent =
					findOnArray.read == 1 ? "Mark as Unread" : "Mark as Read";
			}
		}
	}
});

function stopDoubleTapZoom() {
	let lastTouch = 0;

	return document.addEventListener(
		"touchend",
		function (e) {
			const now = Date.now();
			if (now - lastTouch < 300) {
				e.preventDefault();
			}
			lastTouch = now;
		},
		{ passive: false }
	)();
}
// stopDoubleTapZoom();
