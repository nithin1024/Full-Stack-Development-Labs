function insertDashes(num){
    let str = num.toString();
    let result = str[0];

    for(let i = 1; i < str.length; i++){
        let prev = parseInt(str[i-1]);
        let curr = parseInt(str[i]);

        if (prev % 2 == 0 && curr % 2 != 0 || prev % 2 != 0 && curr % 2 == 0){
            result += "-";

        }
        result += curr;

    }
    return result;

}

input = "025478"
console.log(insertDashes(input))