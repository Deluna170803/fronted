// panggil data pakai inport
import users from "./data.mjs";

//bikin fungsi index
const index = function () {
    console.log(users);
};

//bikin fungsi tambah data
const store = function (user) {
    user.push(user);
}

export { index, store };