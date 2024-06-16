// promise => something that happens in future

// ? tri state
// ? pending
// ? success
// ? failure

// ? to get result, we need to resolve promise

// ?1. call back function

// const getSum = (a, b, callback) => {
//   let error = true;
//   setTimeout(() => {
//     if (error) {
//       callback("error aayo", null);
//     } else {
//       callback(null, a + b);
//     }
//   }, 1000);
// };

// getSum(2, 7, (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// const getRandomNumber = (callback) => {
//   setTimeout(() => {
//     let randomNumber = Math.random(); // 0 to 1

//     if (randomNumber > 0.5) {
//       callback(null, randomNumber);
//     } else {
//       callback("Too small number", null);
//     }
//   }, 2000);
// };

// getRandomNumber((error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// ?2. .then. catch

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Too small number");
    }
  }, 2000);
});

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ?3. async await

// const getRandomNumber = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error, "error");
//   }
// };

// console.log("hello");

// getRandomNumber();

// console.log("hi");

// ? real use case

// ? await in front of task that takes time
// ? await should wrapped by a async function
// ? for error handling => try catch is used
const getProductData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Api hit failed");
    console.log(error.message);
  }
};

getProductData();

// ? resolving promise using .then .catch
// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     res
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => console.log(error));
