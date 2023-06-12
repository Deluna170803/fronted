//buat objek
const user = {
    name: "Deva",
    age: 20,
    major: "Information Technology",
};

//simpen varible menggunakan destructing
const { name, age, major } = user;

console.log(age, name, major);