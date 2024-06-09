//  object copy

const print = (values) => {
  console.log(values);
};

const student1 = {
  name: "Sandhya",
  college: "HCOE",
  isGraduated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};

// print(student1);

// ? shallow copy
// const student2 = student1;

// student2.name = "Kalyan";

// console.log(student1);

// ? spread operator (...)
// ? shallow copy
// ? example1
// const student2 = { ...student1 };
// student2.name = "Yadav";
// console.log(student1);

// ? example2
// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// console.log(student1);

// ? deep copy
// structuredClone

const student2 = structuredClone(student1);
student2.address.permanent = "Z";
console.log(student1);
