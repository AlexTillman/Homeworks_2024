// 1. Вывести числа от 20 до 30 через пробел, используя шаг 0,5 
console.log("1. Вывести числа от 20 до 30 через пробел, используя шаг 0,5 :");
let output1 = "";
for (let i = 20; i <= 30; i += 0.5) {
  output1 += i + "; ";
}
console.log(output1);

// 2. Расчитать доллары (1 dollar = 27 UAH (А были времена еще 1 $ = 8 UAH))
console.log("2. Расчет долларов в UAH по курсу 27 за 1:");
for (let dollars = 10; dollars <= 100; dollars += 10) {
  const uah = dollars * 27;
  console.log(`${dollars} $ = ${uah} UAH`);
}

// 3. Выбрать целое число. Обозначить его как N. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N.
const N = 75; // Заменить можно на любое желаемое число.
console.log(`3. Целые числа от 1 до 100, квадрат которых не превышает ${N}:`);
let output3 = "";
for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    output3 += i + ", ";
  }
}
console.log(output3);

// 4. Проверка числа на то, является ли оно простым 
const num = 32; // Заменить можно на любое желаемое число.
console.log(`4. Проверяем ${num} является ли простым числом:`);
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${num} ${isPrime ? "простое число" : "не простое число"}`);

// 5. Определяем, можно ли получить это число путем возведения числа 3 в некоторую степень.
const givenNumber = 81; // Заменить можно на любое желаемое число.
console.log(`5. Проверяем можно ли число ${givenNumber} получить через степень числа 3:`);
let exponent = 0;
let result = 1;
while (result < givenNumber) {
  result = Math.pow(3, exponent);
  if (result === givenNumber) {
    console.log(`${givenNumber} можно получить через ${exponent} степень`);
    break;
  }
  exponent++;
}
if (result !== givenNumber) {
  console.log(`${givenNumber} нельзя получить через степень числа 3.`);
}