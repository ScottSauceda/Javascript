var fruits = ["Apple", "Banana", "Cherry", "Grape", "Kiwi", "Lemon", "Mango", "Orange", "Pear", "Pineapple", "Strawberry", "Watermelon"];

var lilFruits = [];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i].length < 6) {
		lilFruits.push(fruits[i]);
    }
}

var blender = []; // "Mango-Orange"

for (let i = 0; i < fruits.length - 1; i++) {
	let combo = fruits[i] + '-' + fruits[i+1];
	if (combo.length == 12) {
		blender.push(combo);
    }
}
/*
console.log(lilFruits);
VM849:20 (6) ["Apple", "Grape", "Kiwi", "Lemon", "Mango", "Pear"]
undefined
blender
(3) ["Apple-Banana", "Cherry-Grape", "Mango-Orange"]
*/