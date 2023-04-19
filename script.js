let myLibrary = [];

function book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = ()=>{
        return this;
    }
   
}

function addBookToLibrary(i){
    myLibrary.push(i);

}


const theHobbit = new book("The Hobbit","By J.R.R Tolkien","340 pages","read");
const ConanTheBarbarian = new book("Conan the Barbarian","By R.E Howard","512 pages","read");
const theAeanid = new book("The Aeanid","By Virgil","600 pages","read");


addBookToLibrary(theHobbit);
addBookToLibrary(ConanTheBarbarian);
addBookToLibrary(theAeanid);
console.log(myLibrary);
console.log(myLibrary[1]);