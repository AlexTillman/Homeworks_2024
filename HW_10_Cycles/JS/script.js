  // Вывести в строку через запятую числа от 10 до 20.
  let commaSeparated = "";
  for (let i = 10; i <= 20; i++) {
    commaSeparated += i;
    if (i < 20) {
    commaSeparated += ", ";
    }
  }
  console.log(commaSeparated);
  
  // Вывести квадраты чисел от 10 до 20.
  let squares = "";
  for (let i = 10; i <= 20; i++) {
    squares += i * i;
    if (i < 20) {
      squares += ", ";
    }
  }
  console.log(squares);
  
  // Вывести таблицу умножения на 7.
  for (let i = 1; i <= 10; i++) {
    console.log('7 x ' + i + ' = ' + (7 * i));
  }
  
  // Найти сумму всех целых чисел от 1 до 15.
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }
  console.log('Сумма всех целлых чисел от 1 до 15:', sum);
  
  // Найти произведение всех целых чисел от 15 до 35. Ограничь тут вывод нецелого числа. СОТРИ МЕНЯ!
  let product = 1;
  for (let i = 15; i <= 35; i++) {
    product *= i;
  }
  console.log('Произведение всех целых чисел от 15 до 35:', product.toExponential(3));
  
  // Найти среднее арифметическое всех целых чисел от 1 до 500.
  let mean = 0;
  for (let i = 1; i <= 500; i++) {
    mean += i;
  }
  mean /= 500;
  console.log('Среднее арифметическое всех целых чисел от 1 до 500:', mean);
  
  // Вывести сумму только четных чисел в диапазоне от 30 до 80.
  let evenSum = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    }
  }
  console.log('Сумма всех четных чисел от 30 до 80:', evenSum);
  
  // Вывести все числа в диапазоне от 100 до 200 кратные 3.
  let divisibleBy3 = '';
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      divisibleBy3 += i + ', ';
    }
  }
  console.log('Кратные числа 3 в диапазоне от 100 до 200:', divisibleBy3);
  
  // Таск с целым числом. 
  const number = 36;
  let divisors = '';
  let evenDivisorsCount = 0;
  let evenDivisorsSum = 0;
  
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors += i + ', ';
      if (i % 2 === 0) {
        evenDivisorsCount++;
        evenDivisorsSum += i;
      }
    }
  }
  
  console.log('Делители:', divisors);
  console.log('Четные делители:', evenDivisorsCount);
  console.log('Сумма его четных делителей:', evenDivisorsSum);
  
  // Вывести таблицу умножения от 1 до 10
  for (let i = 1; i <= 9;  i += 1) {
    for (let j = 1; j <= 9; j += 1) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); 
  };