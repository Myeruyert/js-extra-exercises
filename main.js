//1. Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }
function findMinMax(arr) {
  let maxValue = Math.max(...numbers);
  let minValue = Math.min(...numbers);
  let sum = 0;
  console.log("Maximum element is:", maxValue);
  console.log("Minimum element is:", minValue);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dundajToo = findMinMax(numbers);
console.log("dundaj too", dundajToo);

//2.Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
let orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
// console.log("mainorders", orders[0].items[1]);

function sales(orders) {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].items[i].price;
    console.log("orders", orders[i].items[i].price);
  }
  return sum;
}

let ashig = sales(orders);
console.log("Niit ashig:", ashig);

//3. Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
// output[
//   { original: 2, square: 4, cube: 8 },
// ];

// function findKvadCub(arr) {
//   let org = arr[0];
//   let kvad = arr[0];
//   let cub = arr[0];
//   for (let i = 0; i < arr.length; i++) {}
// }

// result = findAvgMinMax([10, 20, 40, 30]);
// console.log("result:", result);

//1. angid bodson bodolt
function findAvgMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let index = 0; index < arr.length; index++) {
    // console.log("checking", index);
    if (min > arr[index]) {
      min = arr[index];
    }
    if (max < arr[index]) {
      max = arr[index];
    }
    // console.log("checking summ", sum);
    // console.log("checking arr[index]", arr[index]);
    sum += arr[index];
    // console.log("cheking sum", sum);
  }
  avg = sum / arr.length;
  //   let obj = {min: baga, max: ih, avg: dundaj};
  //   return obj;
  return { min: min, max: max, avg: avg };
}
let result = findAvgMinMax([10, 20, 40, 30]);
console.log("result:", result);

//2. angid bodson bodolt
orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
function calculateTotalPrice(orders) {
  sum = 0;
  for (let i = 0; i < orders.length; i++) {
    // console.log(orders[i]);
    // console.log(orders[i].items);
    for (let pi = 0; pi < orders[i].items.length; pi++) {
      //array, obj, array-g select hiisen
      //   console.log(orders[i].items[pi].price);
      sum += orders[i].items[pi].price;
      //   console.log("sum", sum);
    }
    // console.log("sum", sum);
  }
  //   console.log("sum", sum);
  return sum;
}
let prices = calculateTotalPrice(orders);
console.log("Sum of prices", prices);

//4. Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.
const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
function findMaxSalaryName(companyData) {
  let ajilchid = companyData.employees;
  let maxSalary = ajilchid[0].salary;
  let maxSalaryName = " ";
  for (let i = 0; i < ajilchid.length; i++) {
    // console.log("ajilchdiin i", ajilchid[i]);
    if (ajilchid[i].salary > maxSalary) {
      maxSalary = ajilchid[i].salary;
      maxSalaryName = ajilchid[i].name;
    }
  }
  return maxSalaryName;
}

let nameIs = findMaxSalaryName(company);
console.log("Max salary name:", nameIs);
