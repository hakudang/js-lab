// file name : promise.js
// fetchData sẽ trả về Promise

/**
 * Mô phỏng hàm fetchData bất đồng bộ
 * lấy dữ liệu và trả về Promise
 * @returns {Promise<Object>}
 */
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data); // Resolve Promise với dữ liệu
    }, 1000);
  });
}

/**
 * Mô phỏng hàm processData bất đồng bộ
 * xử lý dữ liệu và trả về Promise
 * @param {Object} data 
 * @returns {Promise<Object>}
 */
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data); // Resolve Promise với dữ liệu đã xử lý
    }, 1000);
  });
}

/**
 * 
 * @param {Object} data 
 * @returns {Promise<void>}
 */
function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data saved:", data);
      resolve(); // Resolve Promise khi dữ liệu đã được lưu
    }, 1000);
  });
}

// Sử dụng chuỗi Promise để thực hiện các thao tác bất đồng bộ tuần tự
fetchData()
  .then((data) => {  // data nhận được từ resolve của fetchData, sau then phải là 1 hàm callback
    console.log("Data fetched:", data);
    return processData(data); // trả về promise -> then xử lý , nhận data được resolve khi thành công
  })
  .then((data) => {
    console.log("Data processed:", data);
    return saveData(data); // trả về promise -> then xử lý
  })
  .then(() => {
    console.log("All operations completed."); // Kết thúc chuỗi Promise
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Xử lý lỗi nếu có
  })
