// function factorial(n){
//     if(n ==0 || n == 1){
//         return 1;
//     }
// else{
//     return n*factorial(n-1);

// }
// }
// console.log(factorial(5));

function sum(n){
    if(n==1){
        return 1;

    }else{
        return n+sum(n-1);
    }
}
console.log(sum(10))