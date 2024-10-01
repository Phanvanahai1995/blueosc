// Bài 1

const arr = ["a", "ab", "abc", "cd", "def", "gh"];
const result = arr.filter((item) => item.length === 2);

console.log(result);

// Bài 2
const arr2 = [1, 4, 2, 3, 5];

const numberMax = arr2.sort((a, b) => b - a)[0];
const numberMax2 = arr2.sort((a, b) => b - a)[1];
const result2 = numberMax + numberMax2;
console.log(result2);
