// const createAccount = document.getElementsByClassName(createAccount);
//
// window.onload = function () {
// 	console.log(`Hello ${createAccount}`)
// }
//
// const arr = [1, 3, true, 4];
//
// console.log(arr.unshift(5, 8));
//
// const newArray = arr;
//
// console.log(newArray.shift());
//
// console.log(newArray);
//
// const numbers = [];
//
// numbers.push(1, 2, 3, 4);
//
// console.log(numbers);
//
// const numbers2 = [5, 6, 7, 8];
//
// //const numbers3 = numbers.concat(numbers2);
//
// const numbers3 = [...numbers, ...numbers2];

// console.log(numbers3);


const numbers = [1, 2, 3, 4];

const newNumbers = numbers.forEach(e => console.log(e * 5));

const colors = ["blue"];

colors.unshift("red");

colors.push("green");

for(let i =0; i < colors.length; i++) {
	//console.log(`My favorite color is ${colors[i].toUpperCase()}.`)
	console.log(`My favorite color is ${colors[i][0].toUpperCase() + colors[i].slice(1)} .`)
};

const cars = "Audi, Toyota, Mercedes, Ford";

const carsArray = cars.split(', ');

console.log(carsArray);

console.log(carsArray.length > 3 ? "It's ok." : "It isn't ok...");


if (carsArray.includes("Audi")) {
	carsArray.push("Fiat")
} else carsArray.pop();

for (let i = 0; i < carsArray.length; i++) {
	console.log(carsArray[i].toUpperCase())
}
