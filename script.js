let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

Book.prototype.readtoggle = function(){
    this.read = !this.read;
}

function readtoggle(index){
    myLibrary[index].readtoggle();
    render();
}
function render(){
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = '';
    for (i=0; i < myLibrary.length ; i++){
        let book = myLibrary[i];
        let bookEL = document.createElement('div');
        bookEL.setAttribute('class', 'book-card');
        bookEL.innerHTML = `
        <div class= 'class-header'>
            <h3>${book.title}</h3>
            <h3>${book.author}</h3>
        </div>
        <div class= 'class-body'>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read yet'}</p>
            <button onclick='removeBook(${i})'>Remove</button>
            <button onclick='readtoggle(${i})'>Change Read</button>
        </div>`
        libraryEl.appendChild(bookEL);
    }
}
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    //console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    render();
}

const newBookBtn = document.querySelector('#add-new-btn');
newBookBtn.addEventListener('click', () => {
    console.log('hey hi')
    document.querySelector('#add-new-form').style.display = 'block';
})

document.querySelector('#add-new-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hey its submiting');
    addBookToLibrary();
    document.querySelector('#add-new-form').style.display = 'none';
})