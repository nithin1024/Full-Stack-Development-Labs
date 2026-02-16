const prompt =  require("prompt-sync")();

let books = [
    {title : "Harry Potter", author: "J.K.Rowling", quantity : 10},
    {title : "1984", author: "George orwell", quantity : 12},
    {title : "10th class love", author: "Nithin", quantity : 10}
];

// Display

for(let i = 0;i < books.length;i++){
    console.log("Title : " + books[i].title + "| Author : " + books[i].author + "| Qty : " + books[i].quantity)
}

// search

let search_title = prompt("\nEnter book title you want to search :");

let found = false;

for(let i = 0;i < books.length;i++){
    if(books[i].title == search_title){
        console.log("Book found : ");
        console.log(books[i]);
        found =  true;

        //update qunatity
        let newQty = parseInt(prompt("Enter new quantity : "));
        books[i].quantity = newQty;

        console.log("Quantity Updated Successfully!");
        break;
    }
}
if(!found){
    console.log("Book not found");
}

// Display Updated List

for(let i = 0;i < books.length;i++){
    console.log(books[i].title + "- Quantity:" + books[i].quantity);
}