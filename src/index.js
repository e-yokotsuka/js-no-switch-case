const putA = v => `a${v}`;
const putB = v => `b${v}`;
const putC = v => `c${v}`;

const mf = new Map([
  ["a", () => putA("_A")],
  ["b", () => putB("_B")],
  ["c", () => putC("_C")]
]).get("a");
const r = mf ? mf() : `default`;

document.getElementById("app").innerHTML = `<h1>${r}</h1>`;
