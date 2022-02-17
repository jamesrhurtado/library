const authorField = document.getElementById("author-Field")
const titleField = document.getElementById("title-Field")
const pagesField = document.getElementById("pages-Field")
const readCheckbox = document.getElementById('checkRead')
const cardContainer = document.querySelector('.container')
const formResult = document.querySelector('.form-status')
const btnSubmit = document.querySelector('.btn-add')
let myLibrary = [];


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.changeReadAttribute = function() {
    if(this.read){
        this.read = false
    }else{
        this.read = true
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, parseInt(pages), read)
    myLibrary.push(book)
    updateCards()
}

function updateCards(){

    if(myLibrary.length > 0){
        for(let i=0; i<myLibrary.length; i++){
          let card = document.createElement("div")  
          let author = document.createElement("p")
          let title = document.createElement("p")
          let pages = document.createElement("p")
          let read = document.createElement('p')
          let containerButtons = document.createElement("div");
          let readbtn = document.createElement("button");
          let removebtn = document.createElement("button");
          readbtn.textContent = "Read"
          removebtn.textContent = myLibrary[i].read ? "Mark as Not Read" : "Mark as Read"
          removebtn.dataset.row = i
          readbtn.dataset.row = i
          readbtn.addEventListener('click', (e) =>{
              let row = parseInt(e.target.dataset.row)
              myLibrary[row].changeReadAttribute()
              updateCards()
          });
          removebtn.addEventListener('click', (e) => {
              let row = parseInt(e.target.dataset.row)
              myLibrary.splice(row, 1)
              updateCards()
          });
          containerButtons.appendChild(readbtn)
          containerButtons.appendChild(removebtn)
          author.textContent = "Author: " + myLibrary[i].author
          title.textContent = "Title" + myLibrary[i].title
          pages.textContent = "N pages: " +myLibrary[i].pages
          read.textContent = "Read? " +myLibrary[i].read ? "Read" : "Not Read"
          card.appendChild(author)
          card.appendChild(title)
          card.appendChild(pages)
          card.appendChild(read)
          card.appendChild(containerButtons)
          cardContainer.appendChild(card)
        }
    }else{
        cardContainer.innerHTML = "<p> Currently, you do not have any books</p>"
    }
}


btnSubmit.addEventListener('click', () => {
    if(authorField.value === "" || titleField.value === "" || pagesField.value === ""){
        formResult.textContent = "Please complete all the fields required"
        formResult.style.color = "red"
    }else{
        addBookToLibrary(titleField.value, authorField.value, pagesField.value, readCheckbox.checked)
        authorField.textContent = ""
        titleField.textContent = ""
        pagesField.textContent = ""
        readCheckbox.checked = false
        formResult.textContent = "Sucess!"
        formResult.style.color = "green"
    }
})
