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

// Sử dụng for index , không khuyến khích dùng for in cho mãng vì thứ tự không đảm bảo dễ lỗi.
for ( const index in arr ) {
    console.log(arr[index]); // 1, 2, 99, 4, 5
}

// Sử dụng forEach, không hỗ trợ break/continue
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

// Hợp nhất mảng
const arr2 = [6, 7, 8];
const mergedArr = arr.concat(arr2); // concat trả về mảng mới, nối 2 mảng
console.log(mergedArr); // [1, 2, 99, 4, 5, 6, 7, 8]
const mergedArr1 = [...arr, ...arr2]; // Toán tử spread hợp nhất 2 mảng
console.log(mergedArr1); // [1, 2, 99, 4, 5, 6, 7, 8]
const mergedArr2 = Array.of(...arr, ...arr2); // Array.of hợp nhất 2 mảng
console.log(mergedArr2); // [1, 2, 99, 4, 5, 6, 7, 8]

// Đảo ngược mảng
const reversedArr = arr.slice().reverse(); // reverse đảo ngược mảng, slice để sao chép mảng tránh thay đổi mảng gốc
console.log(reversedArr); // [5, 4, 99, 2, 1]
console.log(arr); // [1, 2, 99, 4, 5]
arr.reverse(); // Đảo ngược mảng gốc
console.log(arr); // [5, 4, 99, 2, 1]
arr.reverse(); // Đảo ngược lại mảng gốc
console.log(arr); // [1, 2, 99, 4, 5]

// Sắp xếp mảng
const sortedArr = arr.slice().sort((a,b)=> a-b); // sort sắp xếp mảng, slice để sao chép mảng tránh thay đổi mảng gốc
console.log(sortedArr); // [1, 2, 4, 5, 99]
console.log(arr); // [1, 2, 99, 4, 5]
arr.sort((a,b)=> a-b); // Sắp xếp mảng gốc
console.log(arr); // [1, 2, 4, 5, 99]
arr.sort((a,b)=> b-a); // Sắp xếp mảng gốc giảm dần
console.log(arr); // [99, 5, 4, 2, 1]
arr.sort((a,b)=> a-b); // Sắp xếp lại mảng gốc tăng dần
console.log(arr); // [1, 2, 4, 5, 99]

// Tìm phần tử trong mảng
let scores = [3, 9, 7, 10];
let maxScore = Math.max(...scores); // Tìm điểm cao nhất
console.log("Điểm cao nhất:", maxScore); // 10
let minScore = Math.min(...scores); // Tìm điểm thấp nhất
console.log("Điểm thấp nhất:", minScore); // 7
let indexof7 = scores.indexOf(7);
console.log("Vị trí điểm 7:", indexof7); // 2
let indexof8 = scores.indexOf(8);
console.log("Vị trí điểm 8:", indexof8); // -1 (không tìm thấy)

// Tính tổng và trung bình
let sumScores = scores.reduce((sum, currentValue) => sum + currentValue, 0); // Tính tổng điểm
console.log("Tổng điểm:", sumScores); // 34
let avgScore = sumScores / scores.length; // Tính điểm trung bình
console.log("Điểm trung bình:", avgScore); // 8.5

// Lọc các phần tử theo điều kiện
let passingScores = scores.filter(score => score >= 8);
console.log("Điểm đạt:", passingScores); // [9, 10]

// Kiểm tra tất cả phần tử theo điều kiện
let allPassing = scores.every(score => score >= 5);
console.log("Tất cả điểm đều đạt:", allPassing); // false

// Kiểm tra ít nhất một phần tử theo điều kiện
let anyPerfect = scores.some(score => score === 10);
console.log("Có điểm tuyệt đối:", anyPerfect); // true

// các hàm không mutate mảng gốc: concat, slice, map, filter, reduce, forEach, indexOf, find, findIndex, includes
// map tạo mảng mới bằng cách biến đổi từng phần tử
let doubledScores = scores.map(score => score * 2);
console.log("Điểm nhân đôi:", doubledScores); // [6, 18, 14, 20]
console.log("Mảng gốc:", scores); // [3, 9, 7, 10]