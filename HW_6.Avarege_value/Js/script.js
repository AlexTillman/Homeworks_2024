// Получаем три числа от пользователя
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let number3 = parseFloat(prompt("Введите третье число:"));

// Вычесление среднего арифметического трех чисел
let average = (number1 + number2 + number3) / 3;

// Выводим результат
alert("Среднее арифметическое трех чисел: " + average);