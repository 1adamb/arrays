/*const zelenina = [
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
console.log(zdravy.join(" ahoj "));
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

/*const kostka = document.querySelector("h2");
const tlacitko = document.querySelector("button");
const knoflik = document.querySelector("button");

tlacitko.onclick = () => {
  const nahodne_cislo = Math.floor(Math.random() * 6);
  kostka.textContent = vety[nahodne_cislo];
};*/

// console.log(vety[5]);

// let number = 1;
// while (number <= 10) {
//  console.log(number);
// number++;

// }

//let heslo = prompt("zadej heslo");
//while (heslo != "heslo123") {
//  heslo = prompt("znovu zadej heslo, protože jsi ho napsal ŠPATNĚ!!!");
//}

// index
// length
// push/unshift/pop/shift
// concat
// indexOf
// join
// includes
// sort
// Math.random()
/*const sheep = document.querySelector("h3");
let ovecka = 1;
while (ovecka <= 50) {
  if (ovecka === 1) {
    document.write(ovecka + "_ovečka ");
  } else if (ovecka === 2 || ovecka === 3 || ovecka === 4) {
    document.write(ovecka + "_ovečky ");
  } else {
    document.write(ovecka + "_oveček ");
  }
  ovecka++;
}

let l = 0;
while (l < zelenina.length) {
  console.log(zelenina[l]);
  l++;
}

const veci = [
  { name: "bobek", vlastnosti: "mazlavej" },
  { name: "pes", vlastnosti: "chlupatej" },
];
console.log(veci.length);

const petrovyVydaje = [];

/*while (i < vydaje.length)
if (vydaje[i].name === "petr") {
  petrovyVydaje.push(vydaje[i].product);
  i++;
};*/
const svatekSpan = document.querySelector("svatek");

fetch("https://nameday.abalin.net/api/V1/today").then((res) => 
  res.json().then((data) => {
    const svatekcz = data.nameday.cz;
    const svatekSpan = document.querySelector(".svatek");
    svatekSpan.textContent = svatekcz;
  }));

fetch("https://api.imgflip.com/get_memes").then((response) =>
  response.json().then((info) => {
    const memes = info.data.memes;
    const obrazky = document.querySelector(".obrazek-kontejner")
    let i = 0;
    while (i < 100) {     
      const jmeno = memes[i].name;
      const url = memes[i].url;             
      const jmenoElement = document.createElement("h3");
      const obrazekElement = document.createElement("img");
      obrazekElement.setAttribute("src",url);
      jmenoElement.textContent = jmeno;
      obrazky.appendChild(jmenoElement);
      obrazky.appendChild(obrazekElement);
      i++;
    }
  })
); 