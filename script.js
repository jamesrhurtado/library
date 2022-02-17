const author = document.getElementById("author-Field")
const title = document.getElementById("title-Field")
const pages = document.getElementById("pages")
const read = document.getElementById('checkRead')



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        if(read){
            return  "The "+ title+ "by "+author+", "+pages+", has been read"
        }else{	
            return  "The "+ title+ "by "+author+", "+pages+", not read yet"
        }
    }   
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
          removebtn.textContent = myLibrary[i].read ? "Mark as Not Read" : "Masrk as Read"
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




        }


    }
}


