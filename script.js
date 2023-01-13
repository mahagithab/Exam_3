// Опубликовано 09:25
// Назначено
// 1

// Какие циклы есть в javaScript?
// for, while, do while.


// 2 Создайте объект Student, добавьте ему поля на

// усмотрение удалите одно любое поле и сделайте объект неизменяемым.

// cons Student {
//     name; Oleg;
//     age;23
//     Student; 4 kurs;
//      froze.value
// }
// delete.age
// console.log(key.age)


// 3

// Что такое Хоистинг и как его избежать при создании переменной

// Хоистинг это  var  and Function derection



// 4

// В чем различие между slice, substr, substring и зачем они нужны
// slice i subsrting работаю схожиею сабстр устаревший модель. они принимает индекс.

// let str = "hello"
//  console.log(str.slice(1.3));

// let str = "hello"
//  console.log(str.substring(1.3));



// 5

// Как мы можем получить reference error
// Объект ReferenceError представляет ошибку, возникающую при обращении к несуществующей переменной.





// 6

// В чем разница между методом и функцией приведите примеры

//  Функцция и метод похожие. передать параметры


// 7

// return внутри функций зачем он  нужен? Что вернет функция если нет return

// функция перебирает, return выводит нам то что нужное



// 1

// напишите функцию которая принимает в себя строку состоящую из нескольких слов

// (например «lorem ipsum dolor»), а на выходе

// возвращает строку состоящую из длин каждого слова

// БЫЛО: “Ну здравствуй дивный мир”

// СТАЛО: “2  10  6  3”


// const getLength = ((str) => {
//      let arr = str.split(" ")
//     return arr.reduce((acc, rec) => {
//         return `${acc} ${rec.length}` 
//     }, " ")
    
// })
// console.log(getLength("Ну здравствуй дивный мир"))



















// const divCon = (arr) => {
//     let firstResult = arr.reduce((acc, rec) => {
//         if (typeof rec === "number") {
//             return acc + rec
//         } else {
//             return acc
//         }
//     }, 0)

//     let secondResult = arr.reduce((acc, rec) => {
//         if (typeof rec === "string") {
//             return acc + +rec
//         } else {
//             return acc
//         }
//     }, 0)
//     return firstResult - secondResult
// }
// console.log(divCon([9, 3, '7', '3']))

// let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

// alert( sum(1, 2) ); // 3












// 2

// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает

// объект. При этом необходимо провести валидацию (проверку), если возраст менее

// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»

