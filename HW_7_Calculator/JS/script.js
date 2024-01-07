// Запрашиваю у пользователя что он хочет сделать
let operation = prompt("Какая математическая операция вас интересует? (add, sub, mult, div)").toLowerCase();

// Запрашиваю у пользователя первое число
let num1 = parseFloat(prompt("Введите первое число:"));

// Запрашиваю у пользователя второе число
let num2 = parseFloat(prompt("Введите второе число:"));

let result;
let symbol;

// Тут я выполняю операцию
switch (operation) {
  case "add":
    result = num1 + num2;
    symbol = "+";
    break;
  case "sub":
    result = num1 - num2;
    symbol = "-";
    break;
  case "mult":
    result = num1 * num2;
    symbol = "*";
    break;
  case "div":
    if (num2 !== 0) {
      result = num1 / num2;
      symbol = "/";
    } else {
      console.log("Ошибка: нельзя делить на ноль:)");
    }
    break;
  default:
    console.log("Неправильная операция!");
    break;
}

// Вывожу результат и при этом ограничиваю количество символов в ответе при делении, по пятое число.
if (symbol) {
  if (Number.isInteger(result)) {
    console.log(`${num1} ${symbol} ${num2} = ${result}`);
  } else {
    console.log(`${num1} ${symbol} ${num2} = ${result.toFixed(5)}`);
  }
}
