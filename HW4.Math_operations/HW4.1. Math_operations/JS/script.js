
// Приказываю юзеру ввести два числа разделенные пробелом
let input = prompt("Введите два числа разделенные пробелом (к примеру, 2 3):");

//Разделяю инпут на два числа
let numbers = input.split(" ");
let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);

// Скрипт математических операций
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// подготовка вывода
let message = `Пользователь ввел ${num1} и ${num2}:
  ${num1} + ${num2} = ${sum}
  ${num1} - ${num2} = ${difference}
  ${num1} * ${num2} = ${product}
  ${num1} / ${num2} = ${quotient}`

// Вывожу алерт
alert(message);