
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

// Подготавливаю Алерт
let message = `The user entered ${num1} and ${num2}:
Sum: ${sum}
Difference: ${difference}
Product: ${product}
Quotient: ${quotient}`;

// Вывожу алерт
alert(message);