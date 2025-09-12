function flaky(n, value = "OK") {
    let attempts = 0;  // Biến attempts được lưu lại qua các lần gọi
    return () => new Promise((res, rej) => {  // hàm closure 
        attempts++; // Mỗi lần gọi lại hàm sẽ làm tăng attempts
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
    const flakyInstance = flaky(n); // Tạo một instance của flaky với n
    for (let index = 1; index <= n; index++) {
        try {
            const result = await flakyInstance();  // Thử tối đa 3 lần
            console.log('Success:', result);  // In ra nếu thành công
            break; // Nếu thành công, dừng vòng lặp
        } catch (error) {
            lastError = error;  // Lưu lỗi nếu có
            if (index < n) {
                await new Promise(resolve => setTimeout(resolve, 100));  // Delay trước khi thử lại
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