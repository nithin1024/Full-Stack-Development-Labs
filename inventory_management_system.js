const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = [
 { title: "The Great Gatsby", quantity: 10 },
 { title: "1984", quantity: 8 },
 { title: "Harry Potter", quantity: 20 }
];

// Display books
console.log("Available Books:");
for(let i=0;i<books.length;i++){
    console.log(books[i].title + " - Qty: " + books[i].quantity);
}

// USER SEARCH
rl.question("Enter book title to search: ", function(search){

    let found = false;

    for(let i=0;i<books.length;i++){
        if(books[i].title === search){
            console.log("Book Found:", books[i]);
            found = true;

            // UPDATE QUANTITY
            rl.question("Enter new quantity: ", function(qty){
                books[i].quantity = parseInt(qty);

                console.log("Quantity Updated!");

                console.log("\nUpdated List:");
                for(let j=0;j<books.length;j++){
                    console.log(books[j].title + " - " + books[j].quantity);
                }

                rl.close();
            });

            break;
        }
    }

    if(!found){
        console.log("Book Not Found");
        rl.close();
    }

});
