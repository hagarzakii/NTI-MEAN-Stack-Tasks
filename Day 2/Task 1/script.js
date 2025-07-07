//Task One

function sum(arr){
    let res = 0;
    for (let index = 0; index < arr.length; index++) {
        if(typeof arr[index] !== 'number'){
            return -1;
        }else{
            res += arr[index];   
        }   
    }
    return res;
}

let arr = [1,2,3,4];
console.log(sum(arr));
