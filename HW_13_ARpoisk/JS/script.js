// Шутки кончились.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Количество положительных элементов
const countPositive = arr.filter((cur) => cur >= 0).length;

// Сумма положительных элементов
const sumPositive = arr.reduce((acc, cur) => acc + cur, 0);

// Минимальный элемент массива
const min = arr.reduce((acc, cur) => (cur < acc ? cur : acc));

// Порядковый номер минимального элемента массива
const minIndex = arr.indexOf(min);

// Максимальный элемент массива
const max = arr.reduce((acc, cur) => (cur > acc ? cur : acc));

// Порядковый номер максимального элемента массива
const maxIndex = arr.indexOf(max);

// Количество отрицательных элементов
const countNegative = arr.filter((cur) => cur < 0).length;

// Количество нечетных положительных элементов
const countOddPositive = arr.filter((cur) => cur >= 0 && cur % 2 !== 0).length;

// Количество четных положительных элементов
const countEvenPositive = countPositive - countOddPositive;

// Сумма четных положительных элементов
const sumEvenPositive = arr.filter((cur) => cur >= 0 && cur % 2 === 0).reduce((acc, cur) => acc + cur, 0);

// Сумма нечетных положительных элементов
const sumOddPositive = sumPositive - sumEvenPositive;

// Произведение положительных элементов
const productPositive = arr.filter((cur) => cur >= 0).reduce((acc, cur) => acc * cur, 1);

// Обнуление всех элементов, кроме наибольшего
const maxElement = arr.reduce((acc, cur) => (cur >= acc ? cur : acc));
arr.forEach((cur, i) => (cur !== maxElement ? arr[i] = 0 : null));

// Вывод результатов
console.log("Количество положительных элементов:", countPositive);
console.log("Сумма положительных элементов:", sumPositive);
console.log("Минимальный элемент массива:", min);
console.log("Порядковый номер минимального элемента массива:", minIndex);
console.log("Максимальный элемент массива:", max);
console.log("Порядковый номер максимального элемента массива:", maxIndex);
console.log("Количество отрицательных элементов:", countNegative);
console.log("Количество нечетных положительных элементов:", countOddPositive);
console.log("Количество четных положительных элементов:", countEvenPositive);
console.log("Сумма четных положительных элементов:", sumEvenPositive);
console.log("Сумма нечетных положительных элементов:", sumOddPositive);
console.log("Произведение положительных элементов:", productPositive);
