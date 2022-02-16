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



function addBookToLibrary() {
    const author = document.getElementById("author").value
    const title = document.getElementById("title").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById('input[name="read"]:checked').value
    const book1 = new Book(title, author, pages, read)
    console.log(author, title, pages)
}


