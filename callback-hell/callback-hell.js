// file name: callback.js
/**
 * 
 * @param {*} callback 
 */
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data); // được gọi sau 1 giây
    }, 1000);
}

/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
function processData(data, callback) {
    setTimeout(() => {
        data.processed = true; // thêm thuộc tính processed
        callback(data); // được gọi sau 1 giây
    }, 1000);
}

/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
function saveData(data, callback) {
    setTimeout(() => {
        console.log("Data saved:", data);
        callback();
    }, 1000);
}

// Dùng hàm callback lồng nhau làm cho mã trở nên khó đọc, dễ gây nhầm lẫn và khó bảo trì.
fetchData((data) => {
    console.log("Data fetched:", data);
    processData(data, (dataProcessed) => {
        console.log("Data processed:", dataProcessed)
        saveData(dataProcessed, () => {
            console.log("All operations completed.");
        });
    });
});