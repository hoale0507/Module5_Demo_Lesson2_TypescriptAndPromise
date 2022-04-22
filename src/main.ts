let array = [1,2,3,4,5];
let sum = 0;
array.map(number => {
    if(number % 2 == 0){
        sum += number;
    }
})

console.log(sum);
// let sum = 0;
// for (let number of array) {
//     if(number % 2 !== 0){
//         sum += number;
//     }
// }
// console.log(sum);