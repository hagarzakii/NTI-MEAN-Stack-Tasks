//Task Two

function isPalindrome(word, consideringCase){
    let res = 'Palindrome';
    if(consideringCase === 'T'){
        let start = 0;
        let end = word.length - 1;
        while(start < end){
            if(word[start] !== word[end]){
                res = 'Not Palindrome';
                break;
            }
            start ++;
            end--;
        }
    }else if(consideringCase === 'F'){
        word = String(word).toLowerCase();
        let start = 0;
        let end = String(word).length - 1;            
        while(start < end){
            if(word[start] !== word[end]){
                res = 'Not Palindrome';
                break;
            }
            start ++;
            end--;
        }
    }
    else{
      return -1;
    }
    return res;
}

let word = prompt("Enter a word :");
let consideringCase = prompt("Do you want to consider the Case? T/F");

const res = isPalindrome(word, consideringCase);

console.log(res);
