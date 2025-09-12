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

// Sử dụng async/await để gọi các hàm bất đồng bộ
async function main() {
  try {
    const data = await fetchData(); // chờ dữ liệu được tải
    console.log("Data fetched:", data)

    const dataProcessed = await processData(data); // chờ dữ liệu được xử lý
    console.log("Data processed:", dataProcessed);

    await saveData(dataProcessed); // chờ dữ liệu được save
    console.log ("All operations completed.")

  } catch (error) {
    console.log("An error occurred:", error)  // xử lý lỗi nếu có
  }
}

// Gọi hàm main để bắt đầu tiến trình
main();
