/** file name: array.js
 *  Ví dụ về các thao tác cơ bản với Array trong JavaScript
 *  Tạo, truy cập, thêm, xóa, cập nhật phần tử
 *  Lặp qua các phần tử
 *  Sao chép và hợp nhất mảng
 *  Đảo ngược mảng
 *  Sắp xếp mảng
 */

// Tạo mảng
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// Truy cập phần tử
console.log(arr[0]); // 1
console.log(arr[2]); // 3
console.log(arr[arr.length - 1]); // 5

// Thêm phần tử vào cuối mảng
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Thêm phần tử vào đầu mảng
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// Xóa phần tử cuối mảng
arr.pop();
console.log(arr); // [0, 1, 2, 3, 4, 5]

// Xóa phần tử đầu mảng
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

// Cập nhật phần tử
arr[2] = 99;
console.log(arr); // [1, 2, 99, 4, 5]

// Lặp qua các phần tử
for ( let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]); // 1, 2, 99, 4, 5
}

// Sử dụng for...of
for ( const value of arr ) {
    console.log(value); // 1, 2, 99, 4, 5
}

// Sử dụng for index
for ( const index in arr ) {
    console.log(arr[index]); // 1, 2, 99, 4, 5
}

// Sử dụng forEach
arr.forEach(value => console.log(value)); // 1, 2, 99, 4, 5

// Sao chép mảng
const arrCopy = arr.slice(); // slice trả về mảng mới, sao chép toàn bộ mảng
console.log(arrCopy); // [1, 2, 99, 4, 5]

const arrCopy1 = arr.concat(); // concat trả về mảng mới, nối mảng ban đầu với mảng rỗng
console.log(arrCopy1); // [1, 2, 99, 4, 5]

const arrCopy2 = [...arr]; // Toán tử spread sao chép mảng
console.log(arrCopy2); // [1, 2, 99, 4, 5]

const arrCopy3 = Array.from(arr); // Array.from sao chép mảng
console.log(arrCopy3); // [1, 2, 99, 4, 5]