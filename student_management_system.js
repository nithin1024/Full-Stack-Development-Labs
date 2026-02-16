const prompt = require("prompt-sync")();

let students =  [
    {name : "Nithin", marks : 0},
    {name : "Dhoni", marks : 0},
    {name : "Rohit", marks : 0},
    {name : "Kohli", marks : 0}
]

// Display

for(let i = 0;i<students.length;i++){
    console.log("Name : " + students[i].name + " | Marks : " + students[i].marks);
}

// search
while(true){
let search_student =  prompt("\nEnter a student name (or) Enter Exit to stop : ");
if(search_student.toLowerCase() == "exit"){
    break;
}

let found = false;
for(let i = 0;i < students.length;i++){
    if(students[i].name == search_student){
        console.log("Student found ");
        console.log(students[i].name);

        // Enter New marks 
    
        let new_marks = parseInt(prompt("Enter New Marks : "));

        students[i].marks = new_marks;
        console.log("New Marks Updated !");
        found = true;
        break;
    }
}

if(!found){
    console.log("Student Not Found !")
}
}

// Display updated list 
for(let i = 0;i < students.length;i++){
    console.log("Name :" + students[i].name + "| Marks : " + students[i].marks);
}