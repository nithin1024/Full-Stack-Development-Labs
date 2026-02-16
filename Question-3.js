const prompt = require("prompt-sync")();
let str = prompt("Enter a String: ");

let reversed = "";
for(let i = str.length-1;i >= 0;i--){
    str = str.toLowerCase();
    reversed += str[i];
}
if(reversed == str){
        console.log(str + " is a Palindrome")
    }else {
        console.log(str + "is not a palindrome")
    }
