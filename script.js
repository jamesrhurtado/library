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
    this.page = page
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
  // do stuff here
}


