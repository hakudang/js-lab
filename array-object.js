/** @file array-object.js
 *  Ví dụ về các thao tác cơ bản với Array của Object trong JavaScript
 *  lấy dữ liệu từ database
 *  bao gồm các thao tác với mảng
 *  bao gồm tạo, truy cập, thêm, xóa, cập nhật phần tử
 *  lặp qua các phần tử
 *  sao chép và hợp nhất mảng
 *  đảo ngược mảng
 *  sắp xếp mảng
 *  tạo object
 *  truy cập, thêm, xóa, cập nhật thuộc tính
 *  lặp qua các thuộc tính
 *  sao chép và hợp nhất object
 */

// kết nối MySQL 
const mysql = require('mysql2/promise');

async function getUsers() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin@1111',
        database: 'test_db'
    });

    console.log("Connected to MySQL database.");

    // Lấy 10 sản phẩm đầu tiên ( phân trang )
    const [rows] = await connection.query('SELECT id, name, email FROM users LIMIT 10 OFFSET 0');
    
    // rows là mảng các đối tượng user
    console.log("Danh sach user:", rows); // mảng các object

    // đóng kết nối
    await connection.end();
    console.log("Connection closed.");

}

// gọi hàm lấy user
async function getUserById(userId) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin@1111',
        database: 'test_db'
    });

    const [rows] = await connection // kết quả trả về [rows, fields]
    .execute('SELECT id, name, email FROM users WHERE id = ?', [userId]);  // rows là mảng các object user thỏa mãn điều kiện
    console.log("User details:", rows[0]);

    await connection.end();
    console.log("Connection closed.");
}

getUsers().catch(console.error);
getUserById(1).catch(console.error);