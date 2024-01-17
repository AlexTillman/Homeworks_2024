// Создаю массив и запрашиваю у пользователя его длину.
const length = prompt("Введите длину массива:");
const array = [];
for (let i = 0; i < length; i++) {
  array.push(prompt("Введите элемент массива:"));
}
// Тут я вывожу его данные.
console.log(array);

// массив по возрастанию
array.sort((a, b) => a - b);

// Удаляем элементы из массива со 2 по 4 (включительно, помню)
array.splice(1, 3);

// Вывожу снова.
console.log(array);


// // Немного по другому.
// // Бахаю переменную
// let length;

// // Снова запрашиваю
// length = prompt("Введите длину массива:");

// // Задаю массив
// let array = [];

// // Заполняю
// for (let i = 0; i < length; i++) {
//   array.push(prompt("Введите элемент массива:"));
// }

// // Сортирую
// array.sort((a, b) => a - b);

// // Удаляю (включительно, я про это раза 4 забывал)
// array.splice(1, 3);

// // А тут вывожу через forEach()
// array.forEach(element => console.log(element));