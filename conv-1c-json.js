'use strict'

function splitByEq(line) {
    if (typeof line !== "string") { return; }
    const ix = line.indexOf("=");
    if (ix <= 0) { return [line]; }
    return [line.substr(0, ix), line.substr(ix + 1)];
}
function objectReducer(a, b) {
    const [field, value] = splitByEq(b);
    if (typeof field === "string" && field.length > 0) {
        a[field] = value;
    }
    return a;
}
export function parse1c(text) {
    if (typeof text !== "string") { return; }
    const lines = text.split(/\r?\n/);
    return lines.reduce(objectReducer, {});
}