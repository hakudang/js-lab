// function flaky1(n, attempts = 0, value = "OK") {
//     return new Promise((res, rej) => {
//         attempts++;  // Tăng số lần thử

//         if (attempts > n) {
//             rej(new Error("fail " + attempts));  // Nếu số lần thử > n, reject promise
//         } else {
//             console.log("Lần thử thứ:", attempts);
//             res(attempts);  // Nếu số lần thử <= n, resolve với giá trị attempts
//         }
//     }).then(result => {
//         if (result <= n) return flaky1(n, result);  // Gọi lại flaky nếu chưa đạt số lần thử
//     }).catch(error => {
//         console.log("Báo lỗi sau khi đạt số lần thử:", error.message);  // Báo lỗi khi vượt quá số lần thử
//     });
// }

function flaky(n, attempts = 0, value = "OK") {
    return () => new Promise((res, rej) => {
        attempts++;  // Tăng số lần thử

        if (attempts > n) {
            rej(new Error("fail " + (attempts)));  // Nếu số lần thử > n, reject promise
        } else {
            console.log("Lần thử thứ:", attempts);
            res(attempts);  // Nếu số lần thử <= n, resolve với giá trị attempts
        }
    }).then(result => {
        if (result <= n) {
            return flaky(n, result)();  // Gọi lại flaky nếu chưa đạt số lần thử
        }
    }).catch(error => {
        console.log("Báo lỗi sau khi đạt số lần thử:", error.message);  // Báo lỗi khi vượt quá số lần thử
    });
}

flaky(3)();

// flaky1(3);

