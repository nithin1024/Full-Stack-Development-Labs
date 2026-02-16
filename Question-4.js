
let arr = [7,14,15,16,12,17,9,32,63];

let max = arr[0];
for(let i = 1;i < arr.length;i++){
    if(max < arr[i]){
        max = arr[i];
}
}
console.log(max);
