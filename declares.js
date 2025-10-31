/** @file declares.js
 * Ví dụ về khai báo biến, hàm, lớp trong JavaScript
 * bao gồm khai báo biến với let, const
 * bao gồm khai báo hàm
 * bao gồm khai báo lớp (class) : constructor, methods. 
 *         Mục đích tạo nhiều đối tượng có giống nhau về cấu trúc và hành vi
 *         Khác với Object literal, class ngoài dữ liệu còn có hành vi (methods)
 * bao gồm khai báo mảng : dùng const để khai báo, mục đích tránh gán lại biến mảng
 * bao gồm khai báo đối tượng : dùng const để khai báo, mục đích tránh gán lại biến object
 * bao gồm ví dụ sử dụng for...in, for...of, for truyền thống, forEach
 * bao gồm ví dụ về hàm callback
 */

// Khai báo biến
let age = 30; // dùng let cho các kiểu number, string, boolean có thể thay đổi
const PI = 3.14; // dùng const cho hằng số, không cho phép gán lại
const brand = "Viet-Sport";

// Khai báo hàm
function greet() {
    console.log("Hello, " + brand);
}

// Khai báo lớp
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    introduce() {
        console.log("My name is " + this.name + " and I am " + this.age + " years old." + " I live in " + this.city);
    }
}

// Khai báo đối tượng
const PersonInfo = {
    name: "Dang",
    age: 40,
    city: "Ebina"
};

// Khai báo mảng
const numbers = [1, 2, 3, 4, 5];

// Sử dụng các khai báo trên
greet();

const person = new Person("Alice", 28, "Tokyo");
person.introduce();

console.log("Age:", age);
console.log("PI:", PI);
console.log("Brand:", brand);
console.log("Numbers:", numbers);
console.log("PersonInfo:", PersonInfo);

// Sử dụng for...in để lặp qua thuộc tính của object
for (const key in PersonInfo) {
    console.log(key + ":", PersonInfo[key]);
}

// Sử dụng for...of để lặp qua mảng, lấy giá trị trực tiếp
for (const num of numbers) {
    console.log("Number:", num);
}

// Sử dụng for truyền thống, cần chỉ số , có thể break hoặc continue linh hoạt
for (let i = 0; i < numbers.length; i++) {
    console.log("numbers[" + i + "] =", numbers[i]);
}

// Sử dụng forEach, là phương thức của mảng, nhận một hàm callback
numbers.forEach((num, index) => {
    console.log("numbers[" + index + "] =", num);
});

// hàm callback
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
function doSomething (callback) {
    console.log("Start...");
    callback("Dang");
    console.log("End.");
}
// gọi hàm với callback
doSomething(sayHello);

// gọi hàm với callback là hàm ẩn danh (anonymous function)
doSomething((name) => {
    console.log("Hi, " + name + "!");
});

// Khai báo đối tượng Set ( không trùng lặp )
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("Unique Numbers:", uniqueNumbers); // Set(5) { 1, 2, 3, 4, 5 }
uniqueNumbers.forEach(num => console.log("Set value:", num));

// Khai báo đối tượng Map ( key-value pairs )
const userRoles = new Map();
userRoles.set("admin", "Administrator");
userRoles.set("editor", "Content Editor");
userRoles.set("viewer", "Content Viewer");
console.log("User Roles:", userRoles); // Map(3) { 'admin' => 'Administrator', 'editor' => 'Content Editor', 'viewer' => 'Content Viewer' }
console.log("editor:", userRoles.get("editor")); // editor: Content Editor

// chạy ứng dụng bằng lệnh: node declares.js