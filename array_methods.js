const marvel_heros = ["Ironman", "thor", "BlackPanther", "Bucky"]
const DC_heros = ["Batan", "superman", "Aquaman", "WonderWomen", "Flash"]

console.log(marvel_heros)
const marv = new String(marvel_heros)

// marvel_heros.push(DC_heros)
// console.log(marvel_heros[4][1])

// const newHeros = marvel_heros.concat(DC_heros)
// console.log(newHeros);

const allNewHero = [...marvel_heros,...DC_heros]
console.log(allNewHero);


const number = [1,2,3,[4,5,6],[3,[7,9,0,6]]]
const newNumber = number.flat(Infinity)
console.log(newNumber);

console.log(Array.isArray("Nirajan"))
console.log(Array.from("Nirajan"))

const score1 = 100
const score2 = 200
const score3 = 400

console.log(Array.of(score1,score2,score3));


