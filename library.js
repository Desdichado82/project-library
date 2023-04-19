let books = [
    {
        title: "Conan",
        author: "R.E Howard",
        cover: "./assets/defaultbooks/Conan.jpg"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "./assets/defaultbooks/the_hobbit.jpg"
    },


{
title: "The Aeanid",
author: "Virgil",
cover: "./assets/defaultbooks/Aeneid.jpg"
}];

let table = document.createElement('table');
let tr1 = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th1.innerHTML = "Book";
th2.innerHTML = "Author";
th3.innerHTML = "Cover";
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
table.appendChild(tr1);

for (let book of books) {
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
td1.innerHTML = book.title;


td2.innerHTML = book.author;
td3.innerHTML = `<img src="${book.cover}" alt="book cover">`;
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
}

document.body.appendChild(table);

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
event.preventDefault();
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let file = document.getElementById('cover').files[0];
let reader = new FileReader();
reader.addEventListener('load', () => {
    let cover = reader.result;
    let book = {
        title: title,
        author: author,
        cover: cover
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));


    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = book.title;
    td2.innerHTML = book.author;
    td3.innerHTML = `<img src="${book.cover}" alt="book cover">`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
});
reader.readAsDataURL(file);
});
