//buat object {}, key:value
const user = {
    nama: "Deva",
    umur: 20,
    jurusan: "Informatika",
};

console.log(user.nama);
console.log(user["jurusan"]);

//looping data object
for (const kunci in user) {
    console.log(` key : ${kunci} value : ${user[kunci]} `);
}