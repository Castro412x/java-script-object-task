let numbers = [
    {number: 10},
    {number: 7},
    {number: 22},
    {number: 37},
    {number: 40}
]
let evenSum = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i].number % 2 === 0){
        console.log(`${numbers[i].number} is Even`)
        evenSum += numbers[i].number;
    }else (console.log(`${numbers[i].number} is Odd`))
}
console.log(`Sum of even numbers is = ${evenSum}`)