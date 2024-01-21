const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const pequeña = [];
const mediana = [];
const larga = [];

let z = 0;
let x = 0;
let y = 0;

for(let i = 0; i < movies.length; i++){
    if (movies[i].durationInMinutes < 100){
        pequeña[z] = movies[i].name;
        z++;
    }
    if (movies[i].durationInMinutes > 200){
        larga[y] = movies[i].name;
        y++;
    }
    else {
        mediana[x] = movies[i].name;
        x++;
    }

}
console.log(pequeña);
console.log(mediana);
console.log(larga);