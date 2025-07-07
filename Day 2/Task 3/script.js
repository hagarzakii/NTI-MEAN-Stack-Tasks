//Task Three

let s = prompt();

let count = 0;
for (let char of String(s).toLowerCase()) {
    if (char === 'e') {
        count++;
    }
}
console.log(count);