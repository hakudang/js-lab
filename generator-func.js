/**
 * Ví dụ về generator function để xử lý các thao tác bất đồng bộ tuần tự
 * sử dụng yield để tạm dừng và tiếp tục hàm
 * file name: generator-func.js
 */

// async function asyncGenerator() {
//     const result1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data1 = await result1.json();
//     console.log(data1); // Kết quả của JSON từ response đầu tiên

//     const result2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     const data2 = await result2.json();
//     console.log(data2); // Kết quả của JSON từ response thứ hai
// }

function* asyncGenerator() {
    const result1 = yield fetch('https://jsonplaceholder.typicode.com/todos/1'); // yield trả về Promise
    console.log(JSON.stringify(result1)); // in ra Response

    const result2 = yield fetch('https://jsonplaceholder.typicode.com/todos/2'); // yield trả về Promise
    console.log(JSON.stringify(result2)); // in ra Response
}

const gen = asyncGenerator();
gen.next().value  // Lấy Promise từ yield
    .then(response => response.json())  // response là resolve của Promise, response.json() trả về Promise
    .then(data => gen.next(data)) // data là kết quả resolve của response.json(), tiếp tục generator với data
    .then(({ value }) => value) // { value } là kết quả của yield thứ hai, là Promise từ fetch
    .then(response => response.json()) // response là resolve của Promise, response.json() trả về Promise
    .then(data => gen.next(data)) // data là kết quả resolve của response.json(), tiếp tục generator với data
    .catch(err => console.error(err)); // xử lý lỗi nếu có