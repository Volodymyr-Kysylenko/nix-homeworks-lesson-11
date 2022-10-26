//Завдання 1
// function camelize(str) {
//     let array = str.split('-');
//     for (let i = 0; i < array.length; i++) {
//         if (i > 0) array[i] = array[i][0].toUpperCase() + array[i].slice(1);
//     }
//     return array.join('');
// }

// alert(camelize("background-color") == 'backgroundColor');
// alert(camelize("list-style-image") == 'listStyleImage');
// alert(camelize("-webkit-transition") == 'WebkitTransition');


//Завдання 2
// function filterRange(arr, a, b) {
//     return arr.filter(item => (item >= a && item <= b));
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);


//Завдання 3
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {    
//         if (arr[i] < a || arr[i] > b) {
//           arr.splice(i, 1);
//           i--;
//         }
//       }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);
// alert(arr);


//Завдання 4
// function sortDecrease(a, b) {
//     if (a < b) return 1;
//     if (a == b) return 0;
//     if (a > b) return -1;
// }

// let arr = [5, 2, 1, -10, 8];

// arr.sort(sortDecrease);
// alert(arr);


//Завдання 5
// function sortFn(arr) {
//     return arr.concat().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = sortFn(arr);

// alert (sorted);
// alert(arr);


//Завдання 6
// function calculator() {
//     let a = + prompt('Уведіть перше число:');
//     let b = + prompt('Уведіть друге число:');
//     let operator = prompt('Уведіть оператор:');
//     let result;
    
//     if(operator == '+') {
//         result = a + b;
//     }
//     else if(operator == '-') {
//         result = a - b;
//     }
//     else if(operator == '*') {
//         result = a * b;
//     }
//     else if(operator == '/') {
//         result = a / b;
//     } else {
//         return ('Помилка, перевірте уведення!');
//     }

//     return result;
// }

// alert(`Результат обчислення: ${calculator()}`);


//Завдання 7
// function transform(obj) {
//     return obj.map(item => item.name)
// }

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = transform(users);

// alert(names);


//Завдання 8
// function sortByAge(users) {
//     users.sort((a, b) => {
//         if (a.age > b.age) return 1;
//         if (a.age == b.age) return 0;
//         if (a.age < b.age) return -1;
//     })
// }

// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);


//Завдання 9
// function getAverageAge(users) {
//     return (users.reduce((sum, item) => sum + item.age, 0)/users.length);
// }

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];

// alert(getAverageAge(arr));


//Завдання 10
// function unique(arr) {
//     let result = [];
//     for (let item of arr) {
//         (result.includes(item)) || result.push(item);
//     }
//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "крішна", ":-O"];
// alert(unique(strings));


//Завдання 11
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// alert(unique(values));


//Завдання 12
// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++; 
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter2()); //Виведе 0, незалежний від counter() лічильник
// alert(counter2()); //Виведе 1, незалежний від counter() лічильник
// //Тут лічильники в counter() та counter2() незалежні, оскільки використовують різне зовнішнє лексичне оточення, 
// //що було створено при створенні змінних ounter та counter2 відповідно викликом функції makeCounter()


//Завдання 13
// //Непрацюючий код з документу:
// function Counter() {
//     let count = 0;
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return - count; //тут потрібна інструкція "return --count;""
//     };
// }

// let counter = новий Counter(); //тут потрібно замінити "новий" на new();
// alert(counter.up()); //?
// alert(counter.up()); //?
// alert(counter.down() ); //?

// //Виправлений працюючий код:
// function Counter() {
//     let count = 0;
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }

// let counter = new Counter();
// alert(counter.up()); //Виведе 1
// alert(counter.up()); //Виведе 2
// alert(counter.down()); //Виведе 1
// //Тепер функція працює як лічильник. Початкове значення лічильника - 0. При виклику метода up() значення лічильника збільшується на 1,
// //при виклику метода down() - зменшується на 1


//Завдання 14
// function factorial(n) {
//     return (n == 1) ? 1 : n * factorial(n - 1);
// }

// alert(factorial(1));
// alert(factorial(2));
// alert(factorial(3));
// alert(factorial(4));
// alert(factorial(5));