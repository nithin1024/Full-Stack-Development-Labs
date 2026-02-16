// Class Definition
class Book {

    constructor(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    display() {
        console.log("Title : " + this.title + 
                    " | Author : " + this.author + 
                    " | Quantity : " + this.quantity);
    }

    updateQuantity(newQty) {
        this.quantity = newQty;
    }
}

// Creating ARRAY OF CLASS OBJECTS
let books = [
    new Book("Harry Potter", "J.K. Rowling", 10),
    new Book("1984", "George Orwell", 8),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 12)
];

// DISPLAY ALL BOOKS
console.log("---- BOOK LIST ----");

for (let i = 0; i < books.length; i++) {
    books[i].display();
}

// SEARCH BOOK
let searchTitle = "1984";
let found = false;

console.log("\nSearching for book : " + searchTitle);

for (let i = 0; i < books.length; i++) {

    if (books[i].title === searchTitle) {

        console.log("Book Found:");
        books[i].display();

        // UPDATE QUANTITY
        books[i].updateQuantity(15);

        console.log("Quantity Updated Successfully!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Book Not Found");
}

// DISPLAY UPDATED LIST
console.log("\n---- UPDATED BOOK LIST ----");

for (let i = 0; i < books.length; i++) {
    books[i].display();
}
