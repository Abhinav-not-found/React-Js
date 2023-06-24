//create a constructor function called Book that takes parameters for title, author and year.
// Insie the constructor, assign the values to the respective properties. Create an 
//array of Book objects and log their details.
//Expand on previous question by adding a method called getSummary to the Book constructor
//that returns a string with a summary of the book(eg, "title: [title]", Author.....).
//Create an array of Book objects and call the getSummary method for each book
function Book(title, author, year) {
    this.title=title
    this.author=author
    this.year=year
   
}
var bookList = [];

var book1 = new Book("abc","abhinav",2020)
var book2 = new Book("xyz","adarsh",2021)
var book3 = new Book("pqr","ashish",2019)
var book4 = new Book("ijk","priya",2020)
var book5 = new Book("ijk","shristi",2021)

bookList.push(book1);
bookList.push(book2);
bookList.push(book3);
bookList.push(book4);
bookList.push(book5);
console.log(bookList)



    for(let i=0;i<bookList.length;i++){
        const a= bookList[i]
        a.getSummary = function(){
            `title : ${this.title} author: ${this.author} year: ${this.year}`
            return '';
        }
       console.log( a.getSummary())
    }
    function Books(id){
        this.id=id

    }
    console.log(Books.prototype)