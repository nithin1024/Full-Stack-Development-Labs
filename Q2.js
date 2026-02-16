function difference(arr, target){
    let pairs = [];

    for(let i = 0;i < arr.length;i++){
        for(let j = i+1; j < arr.length;j++){
            if(Math.abs(arr[i]-arr[j]) === target){
                pairs.push([j,i]);
            }
        }
    }
    return pairs;
}

let arr = [10,20,10,40,50,60,70];
let target = 50;

let result = difference(arr, target);
console.log(result);
