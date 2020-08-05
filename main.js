import {PlatPor} from "./comps/pp.js";
import {
    amoutSpelledOut
} from "./pp-sum-in-word.js";

const root = document.getElementById("root");
ReactDOM.render(React.createElement(PlatPor, {Номер:55}), root);

console.log(amoutSpelledOut(0.11));
console.log(amoutSpelledOut(0.1));
console.log(amoutSpelledOut(2.11));
console.log(amoutSpelledOut(2000.11));
console.log(amoutSpelledOut(1000000));
console.log(amoutSpelledOut(2020.42));
console.log(amoutSpelledOut(2743022.73));