const zelenina = [
  "rajče",
  "okurka",
  "paprika",
  "mrkev",
  "brambory",
  "celer",
  "zelí",
  "květák",
  "ředkvičky",
  "brokolice",
];

const zelenina2 = ["rajče", "okurka", "paprika", ["bobek", "hovno"]];
zelenina2.push("sračky");
zelenina2.pop();
console.log(zelenina2.length);
const ovoce = ["jablko", "hruška", "jahody", "třešně"];
const zdravy = zelenina.concat(ovoce);
console.log(zdravy.join("ahoj "));
zelenina.indexOf("okurka");

console.log(ovoce.includes("jablko"));
const cisla = [1, 23, 435, 5, 2];
console.log(cisla.sort());

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];

const kostka= document.querySelector("h2");
const tlacitko= document.querySelector("button");

tlacitko.onclick = () => {
    const nahodne_cislo = Math.floor(Math.random() * 6);
    kostka.textContent = vety[nahodne_cislo];
};

console.log(vety[5]);



// index
// length
// push/unshift/pop/shift
// concat
// indexOf
// join
// includes
// sort
// Math.random()
