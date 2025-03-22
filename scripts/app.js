"use strict";
const books = document.querySelector(".books");
const addBook = document.querySelector(".add-book");
const closeAddBook= document.querySelector(".kapat");
const inputContainer = document.querySelector(".input-container");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const readSelect = document.querySelector(".read-select");

const myLibrary = [];

function Book(title, author, pages, read) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function createAndAddBooktoArray(title, author, pages, read) {
	const bookName = new Book(title, author, pages, read);
	myLibrary.push(bookName);
}
createAndAddBooktoArray("İrade Terbiyesi", "Jules Payot", "200", "Okunmadı");
createAndAddBooktoArray("İrade Terbiyesi", "Jules Payot", "200", "Okunmadı");
createAndAddBooktoArray("İrade Terbiyesi", "Jules Payot", "200", "Okunmadı");
function addBookToScreen(title1,author1,pages1,read1){
	let bookCard;
	let title;
	let author;
	let page;
	let read;
	bookCard = document.createElement("div");
		title = document.createElement("div");
		title.textContent = title1;
		author = document.createElement("div");
		author.textContent =author1;
		page = document.createElement("div");
		page.textContent = "Sayfa Sayısı: " + pages1;
		read = document.createElement("div");
		read.textContent = read1;

		bookCard.classList.add("book-card");
		title.classList.add("title");
		author.classList.add("author");
		page.classList.add("page");
		read.classList.add("read");
		books.appendChild(bookCard);
		bookCard.appendChild(title);
		bookCard.appendChild(author);
		bookCard.appendChild(page);
		bookCard.appendChild(read);
}
function addBooksToScreen() {
	
	myLibrary.forEach(function (item, index, array) {
		addBookToScreen(item.title,item.author,item.pages,item.read)
	});
}
addBooksToScreen();
addBook.addEventListener("click", function (event) {
	
	event.preventDefault();
	if (inputContainer.style.display == "flex") {


		const title =titleInput.value;
		const author =authorInput.value;
		const page =pageInput.value;
		const read = readSelect.options[readSelect.selectedIndex].text;

		createAndAddBooktoArray(title,author,page,read);
		const last = myLibrary.at(-1);
		console.log(last)
		addBookToScreen(last.title,last.author,last.pages,last.read)
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