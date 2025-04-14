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
	const infos = document.createElement("div");
	const bookImageDıv = document.createElement("div");

	const dropdownContainer = document.createElement("div");
	const dropdownIcon = document.createElement("img");
	const dropdownMenu = document.createElement("ul");
	const dropdownMenuItem1 = document.createElement("li");
	const dropdownMenuItem2 = document.createElement("li");
	const menuItem1Icon = document.createElement("img");
	const menuItem2Icon = document.createElement("img");

	const bookCardImage = document.createElement("img");
	const bookDeleteButton = document.createElement("button");
	const bookReadButton = document.createElement("button");

	bookTitle.textContent = title;
	bookAuthor.textContent = author;
	bookPage.textContent = `${page} pages • digital • 2025`;
	bookRead.textContent = read == 1 ? "Okundu" : "Okunmadı";
	dropdownMenuItem1.textContent = read == 1 ? "Mark as Unread" : "Mark as Read";
	dropdownMenuItem2.textContent = "Delete Book";
	// bookDeleteButton.textContent = "Kitabı sil.";
	// bookReadButton.textContent = "Okunma durumunu değiştir.";

	bookCard.dataset.id = id;

	bookImageDıv.classList.add("book-image-div");
	bookCardImage.classList.add("book-card-img");
	bookCardImage.setAttribute("src", "/images/book1.avif");
	dropdownIcon.setAttribute("src", "/images/vert.svg");
	const readState = read == 1 ? "/images/unread.svg" : "/images/read.svg";
	menuItem1Icon.setAttribute("src", readState);

	menuItem2Icon.setAttribute("src", "/images/trash.svg");
	infos.classList.add("infos");

	dropdownContainer.classList.add("dropdown-container");
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
	dropdownContainer.appendChild(dropdownIcon);
	dropdownContainer.appendChild(dropdownMenu);
	dropdownMenu.appendChild(dropdownMenuItem1);
	dropdownMenu.appendChild(dropdownMenuItem2);
	dropdownMenuItem1.prepend(menuItem1Icon);
	dropdownMenuItem2.prepend(menuItem2Icon);

	bookImageDıv.appendChild(bookCardImage);
	infos.appendChild(bookTitle);
	infos.appendChild(bookAuthor);
	infos.appendChild(bookPage);
	infos.appendChild(bookRead);
	// bookCard.appendChild(bookDeleteButton);
	// bookCard.appendChild(bookReadButton);
}
function renderLibrary() {
	myLibrary.forEach(function (item, index, array) {
		renderBookCard(item.id, item.title, item.author, item.page, item.read);
	});
}

renderLibrary();

document.addEventListener("click", function (event) {
	const dialog = document.querySelector("dialog");
	const menu =document.querySelectorAll(".dropdown-menu")
	
	if (event.target.matches(".add-book")) {
		dialog.showModal();
	} else if (event.target.matches(".save-book")) {
		createBookAndAddToLibrary(
			titleInput.value,
			authorInput.value,
			pageInput.value,
			readSelect.options[readSelect.selectedIndex].value
		);
		const last = myLibrary.at(-1);
		console.log(last);
		renderBookCard(last.id, last.title, last.author, last.page, last.read);
		dialog.close();
	} else if (event.target == closeAddBook) {
		dialog.close();
	}else if(!event.target.matches(".dropdown-icon")){
		menu.forEach(function(item){
			item.style.display="none"
		})
		console.log(menu)
	}
});

books.addEventListener("click", function (event) {
	const menu =event.target.closest(".dropdown-menu")
	if (event.target.matches(".menu-trash")) {
		const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;
		console.log(event.target);

		const willDeleteBookCards = event.target.closest(".book-card");
		willDeleteBookCards.remove();
		
		const indexNumber = myLibrary.findIndex(function (item, index, array) {
			console.log(item.id);
			if (item.id == hedef) {
				return true;
			}
		});

		myLibrary.splice(indexNumber, 1);
	} else if (event.target.matches(".menu-read-state")) {
		const read = event.target.closest(".book-card").querySelector(".read");

		const hedef = event.target.closest(".book-card").attributes["data-id"].nodeValue;
		

		const findOnArray = myLibrary.find(function (item, index, array) {
			if (item.id == hedef) {
				return true;
			}
		});
		if (findOnArray.read == 1) {
			findOnArray.read = 0;
			read.textContent = findOnArray.read == 1 ? "Read" : "Unread";
			const readState = findOnArray.read == 1 ? "/images/unread.svg" : "/images/read.svg";
			console.log(event.target.firstChild)
			event.target.firstChild.src = readState;
			console.log(findOnArray);
			console.log(findOnArray.read);
			menu.style.display="none"
		} else {
			findOnArray.read = 1;
			read.textContent = findOnArray.read == 1 ? "Read" : "Unread";
			// buraya ayar çekicem gereksiz kontrol var
			const readState = findOnArray.read == 1 ? "/images/unread.svg" : "/images/read.svg";
			console.log(event.target.firstChild)
			event.target.firstChild.src = readState;
			console.log(findOnArray);
			console.log(findOnArray.read);
			menu.style.display="none"
		}
	}else if (event.target.matches(".dropdown-icon")){
		console.log(event.target.nextElementSibling)
		event.target.nextElementSibling.style.display="flex"
	}
});
