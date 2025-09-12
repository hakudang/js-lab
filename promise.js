// fetchData sẽ trả về Promise

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data); // Resolve Promise với dữ liệu
    }, 1000);
  });
}

// processData sẽ trả về Promise
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data); // Resolve Promise với dữ liệu đã xử lý
    }, 1000);
  });
}

// saveData sẽ trả về Promise
function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data saved:", data);
      resolve(); // Resolve Promise khi dữ liệu đã được lưu
    }, 1000);
  });
}

// Sử dụng Promise để gọi các hàm bất đồng bộ
fetchData()
  .then((data) => {  // data nhận được từ resolve của fetchData, sau then phải là 1 hàm callback
    console.log("Data fetched:", data);
    return processData(data); // trả về promise -> then xử lý , nhận data được resolve khi thành công
  })
  .then((data) => {
    console.log("Data processed:", data);
    return saveData(data); // trả về promise
  })
  .then(() => {
    console.log("All operations completed.");
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Xử lý lỗi nếu có
  })
