const mente = [
    {
        nama: "Deva",
        age: "21",
    },
    {
        nama: "Iqbal",
        age: "20",
    },
    {
        nama: "Hasna",
        age: "21",
    },
    {
        nama: "Alifah",
        age: "20",
    },
];
//tampilin data berdasarkan kondi20
const foundMente = mente.find(function (mente) {
    return mente.age > 19;
});

const filteredMente = mente.filter(function (mente) {
    return mente.age > 19;
});

console.log(foundMente);
console.log(filteredMente);