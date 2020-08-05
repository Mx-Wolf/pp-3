import {
    getData
} from "../pp-data.js";
import {
    PlatPorFc
} from "./pp-fc.js";
const defState = {};

async function initiateStateLoad(state, setState, id) {
    if (state.Номер == id) return;
    const data = await getData(id);
    setState(data);
}

export const PlatPor = (p) => {
    const {
        Номер: id
    } = p;
    const [state, setState] = React.useState(defState);
    React.useEffect(() => {initiateStateLoad(state, setState, id)}, [state, setState, id]);
    const {
        Номер
    } = state;
    if (typeof Номер !== "undefined") {
        return React.createElement(PlatPorFc, state);
    } else {
        return React.createElement("h2", undefined, "loading");
    }
}