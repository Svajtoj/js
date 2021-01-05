/*
Задание 1
Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

Проверка результата
Для проверки подставляйте разные значения в переменные x1, y1, x2, y2 и смотрите на получившуюся площадь.
Примеры для проверки:
Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.
*/

console.log('Задание № 1');

let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;

let sideA = Math.abs(x1 - x2);
let sideB = Math.abs(y1 - y2);

console.log('Площадь прямоугольника c точками координат ( x1 =',x1,'y1 =',y1,'x2 =',x2,'y2 =',y2,') S=', sideA * sideB);

/*
Задание 2
Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

Проверка результата
Для проверки подставляйте разные значения переменных a, b и n и проверяйте получившийся результат.
Сравнения должны давать соответствующий результат true или false в зависимости от получившихся дробных частей.

Примеры для проверки:
Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.
 */

console.log('Задание № 2');

let a = 13.890123;
let b = 2.891564;
let n = 3;

let aFraction = Math.floor(a % 1 * Math.pow(10, n));
console.log('Дробная часть',a,'с точностью',n,' = ',aFraction);

let bFraction = Math.floor(b % 1 * Math.pow(10, n));
console.log('Дробная часть',b,'с точностью',n,' = ',bFraction);

console.log(aFraction,'Больше?',bFraction,aFraction > bFraction);
console.log(aFraction,'Меньше?',bFraction,aFraction < bFraction);
console.log(aFraction,'Больше или Равно?',bFraction,aFraction >= bFraction);
console.log(aFraction,'Меньше или Равно?',bFraction,aFraction <= bFraction);
console.log(aFraction,'Равно?',bFraction,aFraction === bFraction);
console.log(aFraction,'Неравно?',bFraction,aFraction !== bFraction);

/*
Задание 3
Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m.
Вывести результат с помощью console.log.

Проверка результата
Для проверки подставляйте различные значения m и n и смотрите на корректность результата.
Так как число случайное, для одного набора входных параметров рекомендуется запустить код 5–10 раз.
Примеры чисел m и n, для которых алгоритм должен корректно работать:
n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.
 */

console.log('Задание № 3');

n = 0;
let m = 100;

let minNumber = Math.min(n, m);
let range = Math.abs(m - n);
let randomX = Math.round(Math.random() * range + minNumber);
let oddNumber = randomX % 2 -1;
randomX = randomX - oddNumber;
console.log('Рандомное нечётное число',randomX);

/*
let randomX;
if (m > n) {
    randomX = Math.round(Math.random() * (m - n) + n);
} else {
    randomX = Math.round(Math.random() * (n - m) + m);
}

if (randomX % 2 === 0) {
    console.log(randomX + 1);
} else {
    console.log(randomX);
}
*/
