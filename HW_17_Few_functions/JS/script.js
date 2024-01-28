
                                                                    // Задача 1

// Разные типы
// const arr = [1, "2", true, 3.5, false, "4"];

// // Функция для вычисления среднего арифметического числовых элементов массива
// function average(arr) {
//   // Пустой массив для числовых элементов
//   const numbers = [];
  
//   for (const element of arr) {
//     if (typeof element === "number") {
//       numbers.push(element);
//     }
//   }
//   // Если массив numbers пустой, то возвращаю NaN
//   if (numbers.length === 0) {
//     return NaN;
//   }
//   // Возвращаю среднее арифметическое числовых элементов
//   return numbers.reduce((a, b) => a + b) / numbers.length;
// }
// // Вывожу среднее арифметическое числовых элементов
// console.log(average(arr)); // 2.25


                                                                    //Задача 2

// function doMath(x, znak, y) {
//     // Строки в числа
//     x = +x;
//     y = +y;
  
//     // Математика. Люблю математику.
//     let result;
//     switch (znak) {
//       case "+":
//         result = x + y;
//         break;
//       case "-":
//         result = x - y;
//         break;
//       case "*":
//         result = x * y;
//         break;
//       case "/":
//         result = x / y;
//         break;
//       case "%":
//         result = x % y;
//         break;
//       case "^":
//         result = Math.pow(x, y);
//         break;
//       default:
//         console.error("Недопустимый знак операции");
//         return;
//     }
  
//     // Результат (убил).
//     console.log("Результат:", result);
//   }
  
//   // Пользователь вводит данные
//   const x = +prompt("Введите первое число:");
//   const y = +prompt("Введите второе число:");
//   const znak = prompt("Введите операцию (+, -, *, /, %, ^):");
  
//   // Вызов функции
//   doMath(x, znak, y);
  

                                                                    // Задача 3
  
//   function fill2DArray() {
//     // Запрашиваем у пользователя
//     const rows = parseInt(prompt("Введите количество строк:"));
//     const cols = parseInt(prompt("Введите количество колонок:"));
  
//     const myArray = new Array(rows);
//     for (let i = 0; i < rows; i++) {
//       myArray[i] = new Array(cols);
//     }
  
//     // Заполняю массив
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         myArray[i][j] = prompt(`Enter value for row ${i + 1}, column ${j + 1}:`);
//       }
//     }
  
//     // Возврат
//     return myArray;
//   }
  
//   // Вызываю функцию и сохраняю заполненный массив
//   const myFilledArray = fill2DArray();
  

//   console.log(myFilledArray);

                                                                    //Задача 4

// function removeCharacters(string, charsToRemove) {
//     // Создаю регулярное выражение, соответствующее любому из символов, которые нужно удалить
//     const regex = new RegExp(`[${charsToRemove}]`, 'g');
  
//     // Возвращаю строку, в которой удалены все встречающиеся символы
//     return string.replace(regex, '');
//   }
  
//   // Получаю данные от юзера
//   const inputString = prompt('Введи слов или фразу:');
//   const charsToRemove = prompt('Введи буквы для удаления:');
  
//   // Call the function to remove characters
//   const modifiedString = removeCharacters(inputString, charsToRemove);
  
//   // Display the modified string
//   console.log('Ну как?:', modifiedString);
  
  
  
    
  
  
  