"use strict";
// --------------Array Operations --------------
// type PersonArray = { name: string; age: number }[];
// let persons: PersonArray = [
//   {
//     name: "Abhi",
//     age: 24,
//   },
//   {
//     name: "jhon",
//     age: 24,
//   },
// ];
// console.log(persons);
// let upadateAge = persons.map((person) => {
//   console.log((person.age += 1));
// });
// -------------- Average of Array -------------
// type NumberArray = number[];
// const numberArray: NumberArray = [1, 2, 3];
// const sumOfArray = numberArray.reduce((acc, current):number => {
//   return acc + current;
// });
// console.log(sumOfArray);
//------------------  Average of Array-------------------
// type NumberArray = number[];
// const numberArray: NumberArray = [1, 2, 3];
// const avg =
//   numberArray.reduce((acc, curr): number => acc + curr) / numberArray.length;
// console.log(avg);
//------------------ Get odd & even from array using filter-------------------
// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const OddNumbers = numberArray.filter((Number: number):boolean => Number % 2 != 0);
// console.log(OddNumbers);
// const evenNumber = numberArray.filter((Number:number):boolean => Number % 2 == 0);
// console.log(evenNumber);
//------------------ Get Prime number from array using filter-------------------
// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const prime=(values:number)=>{
// }
// const primeNumber = numberArray.filter((values) => );
//------------------Max & min number from array-------------------
// const numberArray: number[] = [33, 45, 55, 66, 11];
// const max = numberArray.reduce((acc, curr): number => Math.max(acc, curr));
// console.log(max);
// const min = numberArray.reduce((acc, curr) => Math.min(acc, curr));
// console.log(min);
//------------------sort array-------------------
// const numberArray: number[] = [1, 22, 3, 0, 9];
// const AscArray = numberArray.sort((a, b) => a - b);
// const descArray = numberArray.sort((a, b) => a - b);
// console.log(AscArray);
// console.log(descArray);
//------------------Array reverese-------------------
const numberArray = [1, 2, 3, 4, 5];
const rev = numberArray.slice().reverse();
console.log(rev);
