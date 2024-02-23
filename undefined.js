/*
 * 8 ways to get undefined
1. variable that is not initialize will give undefined
2. function with no return will give undefined
3. parameter that is not pass will be undefined
4. if return has nothing pn the right side will return undefined.
5. property that doesn't exists on an object will give you undefined
6. accessing array element outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined

 */

let first;
// console.log(first);

function second(a, b){
    const total = a + b;
}

const result = second();
//console.log(result);

function third(a, b){
    const total = a + b;
    //console.log(a, b)
}

third(2);


function noNegative (a, b){
    if (a<0 || b< 0){
        return ;
    }
    else return a + b;
}

const total = noNegative(2, -5);
//console.log(total);

const fifth = {id: 1, name:'poncho', age: 40};
//console.log(fifth.age, fifth.salary);

const sixth = [1,2 , 3, 5 , 9];
//you should not do it. Itstead use splice
delete sixth[1];

// console.log(sixth[0], sixth[4], sixth[200]);
// console.log(sixth);

const eight = undefined;

const nine = null;

console.log(typeof undefined);
const data = {result:[], updated: null}
console.log(typeof null);