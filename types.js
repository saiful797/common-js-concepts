//JavaScript is a dynamic typed programming language

//primitive type
const a = 13;
const b = 'Aso khelte jai';
const c = true;

//non-primitive type
const array = [2, 3, 4, 5, 6];
const student = {name: 'Asik', id: 5};

//console.log(typeof a, typeof b, typeof c, typeof array, typeof student );


//primitive
let x = 5;
let y = x;

console.log(x, y);
y = 7;
console.log(x, y);

//non-primitive

let p = {name: 'Ali Baba kola khaba'};
let q = p;
console.log(p, q);
//output: { name: 'Ali Baba kola khaba' } { name: 'Ali Baba kola khaba' }
q.name = 'Doyal Baba khejur khaba';

console.log(p, q);
//output: { name: 'Doyal Baba khejur khaba' } { name: 'Doyal Baba khejur khaba' } 
