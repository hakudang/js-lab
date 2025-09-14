// file name: abc.js

// 1. Khai báo hàm cơ bản trong JavaScript

// cú pháp: function tên(...) { ... }
function functionName1(param1, param2) {
    // thân hàm 
    return param1 + param2 ;
}

// ví dụ sử dụng
function add(a, b) {
    return a + b; 
}
console.log(add(3,5)); // print 8


// 2. biểu thức hàm (Function Expression)
// cú pháp: var/let/const x = function(...) { ... }

// ví dụ sử dụng
const mul = function(a,b){ 
  return a * b; 
}
console.log(mul(3,5)); // print 15

// 3. Hàm mũi tên (Arrow Function)
// cú pháp: (args) => expr hoặc (args) => { ... }

// vi dụ sử dụng
const add1 = (a, b) => a + b; // trả về a + b
const square = x => x * x; // trả về x * x

console.log(add1(2,3)); // print 5
console.log(square(4)); // print 16

// 4. generator function
// cú pháp: function* name(...) { ... yield ...; }
// cho phép tạo ra các iterator

// vi dụ sử dụng
function* idGen() {
  yield 1;
  yield 2;
}

const generator = idGen();

for (let value of generator) {
  console.log(value); // print 1, then 2
}

// 5. Hàm async (Asynchronous Function)
// cú pháp: async function name(...) { ... await ...; }
// vi dụ sử dụng


// const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];

// function userById(list, id) {
//   return list.find(user => user.id === id);
// }

// console.log(userById(users, 1)); // print {id: 1, name: 'A'}
