// Sử dụng async/await để xử lý các hàm bất đồng bộ tuần tự
// file name : async-await.js

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
 * Mô phỏng hàm saveData bất đồng bộ
 * lưu dữ liệu và trả về Promise
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

// Hàm async để thực hiện các thao tác bất đồng bộ tuần tự
(async function main() {
  try {
    const data = await fetchData(); // chờ dữ liệu được fetch
    console.log("Data fetched:", data);

    const dataProcessed = await processData(data); // chờ dữ liệu được process
    console.log("Data processed:", dataProcessed);

    await saveData(dataProcessed); // chờ dữ liệu được save
    console.log ("All operations completed.");

  } catch (error) {
    console.log("An error occurred:", error);  // xử lý lỗi nếu có
  }
})();
