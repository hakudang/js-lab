/**
 * Mô phỏng hàm flaky bất đồng bộ
 * Hàm này sẽ trả về một hàm closure, mỗi lần gọi hàm closure sẽ tạo một Promise mới
 * Hàm closure sẽ thử n lần (n được truyền vào khi tạo hàm flaky)
 * Nếu số lần gọi chưa đạt n thì Promise bị reject, nếu đạt n thì Promise được resolve
 * @param {number} n 
 * @param {string} value 
 * @returns {function(): Promise<string>}
 */
function flaky(n, value = "OK") {
    let attempts = 0;  // Biến attempts được lưu lại qua các lần gọi
    return () => new Promise((res, rej) => {  // trả về một hàm closure, mỗi lần gọi sẽ tạo một Promise mới
        attempts++; // Tăng biến attempts, biến trong hàm closure sẽ cập nhật giá trị mỗi lần gọi
        console.log(`Attempt ${attempts} of ${n}`);
        if (attempts < n) {
            rej(new Error("fail " + attempts)); // Fail nếu attempts < n
        } else {
            res(value); // Resolve nếu attempts == n
        }
    });
}

// Test
(async () => {
    let lastError;
    const n = 3;  // Số lần thử tối đa
    const flakyInstance = flaky(n); // Tạo hàm flaky với n = 3
    for (let i = 1; i <= n; i++) {
        try {
            const result = await flakyInstance(); // Gọi hàm closure trả về Promise và chờ kết quả
            console.log('Success:', result);  // In ra kết quả nếu thành công
            break; // Thoát vòng lặp nếu thành công
        } catch (error) {
            lastError = error;  // Lưu lỗi nếu có
            if (i < n) {
                await new Promise(resolve => setTimeout(resolve, 100));  // Chờ 100ms trước khi thử lại
            }
        }
    }
    if (lastError) {
        console.log('Final Error:', lastError);  // In ra lỗi cuối cùng nếu tất cả các lần thử đều thất bại
    }
})();

// Attempt 1 of 3
// Attempt 2 of 3
// Attempt 3 of 3
// Success: OK
// Final Error: Error: fail 2