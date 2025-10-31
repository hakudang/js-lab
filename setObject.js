/** @file setObject.js
 * khai báo và sử dụng Set trong JavaScript
 * Tính ứng dụng của Set trong thực tế
 * Các thao tác cơ bản với Set

 * Khi nào dùng Array, khi nào dùng Set?
 * | Array | Cần danh sách có thứ tự, giữ trùng
 * | Set | Cần danh sách không trùng, tra cứu nhanh | không thể truy cập phần tử theo key hoặc index
 * | Map | Cần ánh xạ key-value, tra cứu nhanh theo key qua phương thức get()
 */

// A. Tính ứng dụng của Set trong thực tế
// 1. loại bỏ trùng lặp trong mảng 
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)]; // new Set(arr):tạo đối tượng Set mới từ mảng arr -> ... trải các phần tử trong Set ra, thay vì giữ nó dưới dạng Set -> [] : đưa các phần tử vào mảng
console.log("Mảng sau khi loại bỏ trùng lặp:", unique); // [1, 2, 3, 4, 5]

// 2. kiểm tra sự tồn tại cực nhanh
const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add(6); // thêm phần tử 6 vào Set
console.log("6 có trong mySet ?", mySet.has(6)); // true

// 3. Chống spam / block list 
//  Block keyword hoặc IP hiệu quả hơn array
const blockedUsers = new Set(["spamUser1", "spamUser2", "spamUser3"]);
function isUserBlocked(username) {
    return blockedUsers.has(username);
}
console.log("spamUser2 có bị chặn không?", isUserBlocked("spamUser2")); // true
console.log("goodUser có bị chặn không?", isUserBlocked("goodUser")); // false

const bannedIPs = new Set(["1.2.3.4", "5.6.7.8"]);
function blockUser(ip) {
    console.log(`User bị chặn do IP ${ip} nằm trong danh sách đen.`);
}
const ip = "1.2.3.4";
if (bannedIPs.has(ip)) blockUser(ip);

// 4. Theo dõi trạng thái real time 
// Ví dụ game, chat room, người đang online
const onlineUsers = new Set();
onlineUsers.add("user1");
onlineUsers.add("user2");
onlineUsers.add("user3");
console.log("Người dùng online:", onlineUsers); // Set(3) {"user1", "user2", "user3"}
onlineUsers.delete("user2"); // user2 offline
console.log("Người dùng online sau khi user2 offline:", onlineUsers); // Set(2) {"user1", "user3"}

// 5. Xử lý tập hợp logic (toán học)
// Union, intersection, difference
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", union); // Set(6) {1, 2, 3, 4, 5, 6}
// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection); // Set(2) {3, 4}
// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (setA - setB):", difference); // Set(2) {1, 2}

// B. Các thao tác cơ bản với Set
// 1. Copy 
// 1.1 new Set(oldSet) — cách mặc định, nhanh, rõ
const s1 = new Set([1, 2, 3]);
const s2 = new Set(s1);
s2.add(4);
console.log("s1:", s1);
console.log("s2:", s2);

// 1.2 Sử dụng spread operator - [...oldSet] rồi bọc lại new Set(...) — khi cần thao tác mảng
const s3 = new Set([...s1]);
const s4 = new Set([...s1].map(x => x * 2)); // thao tác mảng
console.log("s3:", s3);
console.log("s4 (mảng nhân đôi):", s4);

// 1.3 Array.from(oldSet) rồi new Set(...) — khi cần thao tác mảng, hiệu quả như spread operator
const s5 = new Set(Array.from(s1)); 
console.log("s5:", s5);

// 1.4 Duyệt thủ công forEach — kiểm soát cao, chậm hơn
const s6 = new Set(); 
s1.forEach(value => { s6.add(value*2);}); // dùng forEach để tạo s6 copy từ s1 với giá trị nhân đôi
console.log("s6:", s6);
