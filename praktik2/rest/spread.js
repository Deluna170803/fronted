//bikin array
const mente = ["Hasna", "Alifah"];

//array 2
const newMente = [...mente, "Yuyun", "Diva"];

console.log(newMente);

//buat objek
const user = {
    name: "Deva",
    age: 20,
    major: "Information Technology",
};

const newUser = {
    ...user,
    hobby: "read",

};

console.log(newUser);