/**
 * Ví dụ về các thao tác cơ bản với Object trong JavaScript
 * Tạo, truy cập, thêm, xóa, cập nhật thuộc tính
 * Lặp qua các thuộc tính
 * Sao chép và hợp nhất object
 * file name: object.js
*/
const person = {
    name: "Alice",
    age: 25,
    city: "Hanoi"
};

// lay danh sach key
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// lay danh sach value
const values = Object.values(person);
console.log(values); // ["Alice", 25, "Hanoi"]

// lay danh sach key-value pairs
const entries = Object.entries(person);
console.log(entries); // [["name", "Alice"], ["age", 25], ["city", "Hanoi"]]

// kiem tra mot thuoc tinh co ton tai trong object hay khong
const hasAge = person.hasOwnProperty("age");
console.log("Thuộc tính age tồn tại:", hasAge); // true

const hasCountry = person.hasOwnProperty("country");
console.log("Thuộc tính country tồn tại:", hasCountry); // false

// xoa mot thuoc tinh trong object
// delete person.city
delete person["city"];
console.log(person); // { name: "Alice", age: 25 }

// them mot thuoc tinh moi vao object
person.country = "Vietnam";
console.log(person); // { name: "Alice", age: 25, country: "Vietnam" }

// cap nhat gia tri cua mot thuoc tinh trong object
person.age = 26;
console.log(person); // { name: "Alice", age: 26, country: "Vietnam" }

// lap qua cac thuoc tinh trong object
for (const key in person) { // key la ten thuoc tinh
    const value = person[key]; // value la gia tri cua thuoc tinh
    // if (person.hasOwnProperty(key)) {
    //   console.log("Khóa:", key, ", Giá trị:", value);
    // }
    key && console.log("Khóa:", key, ", Giá trị:", value);
}

// sao chep mot object sang mot object moi
const newPerson = Object.assign({}, person);
newPerson.name = "Tomy"; // thay doi ten trong newPerson
newPerson.age = 55; // thay doi tuoi trong newPerson
newPerson.country = "USA"; // thay doi country trong newPerson
console.log(newPerson); // { name: "Tomy", age: 55, country: "USA" }

// hoac dung toan tu spread
const anotherPerson = { ...person }; // sao chep person sang anotherPerson
anotherPerson.name = "Bob"; // thay doi ten trong anotherPerson
anotherPerson.age = 30; // thay doi tuoi trong anotherPerson
anotherPerson.city = "HCM"; // them city trong anotherPerson
console.log(anotherPerson); // { name: "Bob", age: 30, country: "Vietnam", city: "HCM" }
console.log(person); // { name: "Alice", age: 26, country: "Vietnam" }

// noi hai object voi nhau
const additionalInfo = {
    job: "Engineer",
    hobby: "Reading"
};
const mergePerson = { ...person, ...additionalInfo };
console.log(mergePerson); // { name: "Alice", age: 26, country: "Vietnam", job: "Engineer", hobby: "Reading" }

// hoac dung Object.assign
// noi hai object voi nhau
const additionalInfo2 = {
    job: "Doctor",
    hobby: "Tennis"
};
const mergePerson2 = Object.assign({}, newPerson, additionalInfo2);
console.log(mergePerson2); // { name: "Tomy", age: 55, country: "USA", job: "Doctor", hobby: "Tennis" }

// doi ten key trong object
function renameKey(obj, oldKey, newKey) {
    if (oldKey !== newKey && obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey]; // tao key moi voi gia tri tu key cu
        delete obj[oldKey]; // xoa key cu
    }
    return obj;
}
const updatedPerson = renameKey(person, "country", "nation");
console.log(updatedPerson); // { name: "Alice", age: 26, nation: "Vietnam" }

// doi ten key trong object va tao object moi
function renameKeyNewObject(obj, oldKey, newKey) {
    const newObj = { ...obj }; // sao chep obj sang newObj
    if (oldKey !== newKey && newObj.hasOwnProperty(oldKey)) {
        newObj[newKey] = newObj[oldKey]; // tao key moi voi gia tri tu key cu
        delete newObj[oldKey]; // xoa key cu
    }
    return newObj;
}
const updatedPerson2 = renameKeyNewObject(person, "nation", "country");
console.log(updatedPerson2); // { name: "Alice", age: 26, country: "Vietnam" }
console.log(person); // { name: "Alice", age: 26, nation: "Vietnam" }

// dem so luong key trong object
const countKeys = (obj) => Object.keys(obj).length;
console.log("Số lượng khóa trong person:", countKeys(person));

// kiem tra object co trong hay khong
const isEmpty = (obj) => Object.keys(obj).length === 0;
console.log("Person có empty không ?", isEmpty(person)); // false
console.log("Empty object có empty không ?", isEmpty({})); // true

// lay key co gia tri la mot kieu du lieu nhat dinh
const getKeysByValueType = (obj, type) => {
    return Object.keys(obj).filter(key => typeof obj[key] === type);
};
console.log("Keys with string values:", getKeysByValueType(person, "string")); // ["name", "country"]
console.log("Keys with number values:", getKeysByValueType(person, "number")); // ["age"]

// chuyen object thanh mang cac object con
const objectToArrayOfObjects = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
console.log("Object to array of objects:", objectToArrayOfObjects(person));
// [ { key: 'name', value: 'Alice' }, { key: 'age', value: 26 }, { key: 'country', value: 'Vietnam' } ]

// chuyen mang cac object con thanh object
const arrayOfObjectsToObject = (arr) => {
    return  arr.reduce((acc, {key, value}) => { // acc la object tich luy, moi lan lap lay key va value de gan vao acc
        acc[key] = value; // gan value cho key tuong ung trong acc
        return acc; // tra ve acc de lap tiep
    }, {}); // khoi tao acc la mot object rong
};
console.log("Array of objects to object:", arrayOfObjectsToObject(objectToArrayOfObjects(person)));