function pow(num, degree) {
    "use strict";
  
    // Базированная база: Если степень равна 0, верните 1
    if (degree === 0) {
      return 1;
    } else {
      // Рекурсивный случай: Умножь число на само себя, возведенное в степень - 1
      return num * pow(num, degree - 1);
    }
  }
  
  // Получение информации от юзера
  const num = parseFloat(prompt("Введите число:"));
  const degree = parseInt(prompt("Введите степень:"));
  
  // Функция pow и выведи результат
  const result = pow(num, degree);
  console.log(`${num} взвезденный к степени ${degree} является: ${result}`);
  