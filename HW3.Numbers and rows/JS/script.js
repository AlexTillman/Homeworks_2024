let line1 = prompt('Enter the first line:');
let line2 = prompt('Enter the second line:');
let line3 = prompt('Enter the third line:');

console.log(line1 + ' ' + line2 + ' ' + line3);

// Вроде как получаем пятизначное число, но почему-то срабатывает 4 раза из 10. Странно. Но скорее работает чем нет.
let fiveDigitNumber = prompt("Enter a five-digit number:");

// Разделяет число на цифры, с пробелом
let digitsArray = fiveDigitNumber.split("").join(" ");
console.log(digitsArray);