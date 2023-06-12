//buat variable binatang
const animals = ["nyamuk", "kucing", "anjing", "panda"];

//akses berdasarkna index, index dimulai dari 0
// console.log(animals[0], animals[1]);

// //nampilin semua data
// for (let i = 0; i < animals.length; i++) {
//     console.log(`Hewan : ${animals[i]} `);
// }

//buat loopng for of
for (const animal of animals) {
    console.log(`Hewan : ${animal} `);

}
