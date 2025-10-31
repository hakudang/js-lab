/** @file mapObject.js
 * Khai báo và sử dụng Map trong JavaScript
 * 
 * Khi nào dùng Array, khi nào dùng Set?
 * | Array | Cần danh sách có thứ tự, giữ trùng
 * | Set | Cần danh sách không trùng, tra cứu nhanh | không thể truy cập phần tử theo key hoặc index
 * | Map | Cần ánh xạ key-value, tra cứu nhanh theo key qua phương thức get()
 * 
 * Tính ứng dụng của Map trong thực tế
 * 1. Thay thế Object để làm “bảng tra cứu” (lookup table)
 * 2. Dùng object làm key (Object không làm được)
 * 3. Cache kết quả xử lý (Memoization)
 * 4. Đếm tần suất (statistics)
 * 5. Lưu phiên user trong web server (Node.js)
 * 6. Routing / State machine / Graph
 * 7. DOM Metadata (Rất mạnh khi làm web)
 * Thao tác cơ bản với Map: tạo, thêm, truy cập, xóa, kiểm tra, lặp qua các phần tử
 */

// A. Tính ứng dụng của Map trong thực tế
// 1. Thay thế Object để làm “bảng tra cứu” (lookup table) - key không giới hạn kiểu dữ liệu
const playersScore = new Map();
playersScore.set("player1", 1500);
playersScore.set("player2", 3000);
playersScore.set("player3", 2250);

console.log("Điểm của player2:", playersScore.get("player2")); // 3000 -> So với object, Map tra cứu nhanh và rõ nghĩa hơn
console.log("Tất cả điểm của người chơi:");
for (const [player, score] of playersScore) {
    console.log(`${player}: ${score}`);
}

// 2. Dùng object làm key (Object không làm được)
const user1 = { id: 1, name: "Nguyen" };
const user2 = { id: 2, name: "Nguyen" };
const userPoints = new Map();
userPoints.set(user1, 1500);
userPoints.set(user2, 3000);
console.log(`Điểm của #${user1.id} Mr/Ms ${user1.name} :`, userPoints.get(user1)); // 1500
console.log(`Điểm của #${user2.id} Mr/Ms ${user2.name} :`, userPoints.get(user2)); // 3000

// 3. Cache kết quả xử lý (Memoization)
// Tối ưu hiệu năng xử lý dữ liệu lặp lại.
// Tạo Map để lưu cache: key = n, value = kết quả fib(n)
const memo = new Map();

function fib(n) {
    // Nếu đã tính fib(n) trước đó -> trả ngay từ cache (Map)
    if (memo.has(n)) return memo.get(n);
    // Trường hợp cơ bản của fibonacci (n = 0 hoặc 1)
    if (n <= 1) return n;
    // Tính fib(n) bằng cách gọi đệ quy
    const result = fib(n - 1) + fib(n - 2);
    // Lưu kết quả vào Map để lần sau dùng
    memo.set(n, result);
    // Trả kết quả ra ngoài
    return result;
}
fib(6); // Tính fib(6) và lưu kết quả vào Map
for (const [key, value] of memo) {
    console.log(`Fib(${key}) : ${value}`);
}

// 4. Đếm tần suất (statistics)
// Ví dụ: phân tích từ trong nội dung, anti-spam, SEO tool, chatbot NLP...
const text = "JavaScript is great. I love JavaScript because JavaScript is versatile.";
const wordCounts = new Map();
const words = text.toLowerCase().match(/\b\w+\b/g); // tách từ, bỏ dấu câu
for (const word of words) {
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
}

for (const [word, count] of wordCounts) {
    console.log(`Từ "${word}" xuất hiện ${count} lần.`);
}

// 5. Lưu phiên user trong web server (Node.js)
// Ứng dụng: Auth session, Realtime chat, Multiplayer game
const sessions = new Map();
function createSession(userId) {
    const sessionId = `sess_${Math.random().toString(36).substr(2, 9)}`;
    sessions.set(sessionId, userId);
    return sessionId;
}
const sessionId = createSession(42); // tạo phiên cho userId = 42
console.log("Session ID:", sessionId);
console.log("User ID from session:", sessions.get(sessionId)); // 42

// 6. Routing / State machine / Graph
const routes = new Map([
    ["/", homePage],
    ["/about", aboutPage],
    ["/login", loginPage],
]);
function homePage() {
    console.log("Welcome to home page");
}

function aboutPage() {
    console.log("About us page");
}
function loginPage() {
    console.log("Login page");
}
routes.get("/about")(); // Gọi hàm aboutPage

// 7. DOM Metadata (Rất mạnh khi làm web)

// const data = new Map();
// document.querySelectorAll("button").forEach(btn => {
//     data.set(btn, { clicks: 0 });

//     btn.addEventListener("click", () => {
//         const value = data.get(btn);
//         value.clicks++;
//         console.log(btn.textContent, value.clicks);
//     });
// });

{/* <button>Click me</button>
<button>Press me</button>

<script>
const data = new Map();
document.querySelectorAll("button").forEach(btn => {
  data.set(btn, { clicks: 0 });

  btn.addEventListener("click", () => {
    const state = data.get(btn);
    state.clicks++;
    console.log(btn.textContent, "clicked:", state.clicks);
  });
});
</script> */}
