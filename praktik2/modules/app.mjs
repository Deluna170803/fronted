//panggil data pake import
import { index, store } from "./controller.mjs";

const main = function () {
    const user = { name: " Deva", age: 20 }
    store(user);
    index();

};

main();