//Task Three

let s = prompt();

if (s === null){
    console.log("Invalid input");
}else{
    let count = 0;
for (let char of s) {
    if (char === 'e') {
        count++;
    }
}
console.log(count);
}
