Попытка реализовать счет уникальных блюд в заказе

// const funBas = (bas: Product[]): any => {
// let arr = {};
// let counter = 0;
// for (let i = 0; i < bas.length - 1; i++) {
// if (bas[i].id === bas[i + 1].id) {
// counter += 1;
// }
// // arr = { ...bas[i], counter };
// // arr.push({ ...bas[i], counter });
// arr = { ...bas[i], counter };
// }

// const der = bas.forEach(
// (el, i) =>
// el.id === ? console.log('ПРАВДА') : console.log('first'),
// []
// );
// let arr = {};
// let arr2 = [];
// let arr3 = [];
// let counter = 1;
// console.log(bas.length);
// for (let i = 0; i < bas.length; i++) {
// // for (let k = 0; k < bas.length - 1; k++) {
// arr2.push({ ...bas[i], counter });
// }
// for (let k = 0; k < arr2.length; k++) {
// for (let i = 0; i < arr2.length - 1; i++) {
// if (arr2[i].id === arr2[i + 1].id) {
// counter += 1;
// }
// counter += 1;
// // arr2.push(bas[i], counter);
// // arr = { ...bas[i], counter };
// arr3.push({ ...arr2[i], counter });
// counter = 1;
// }
// }
// console.log(arr3);
// }
// сравнить счет и взять больший
// reduce ??

// return arr;
// };
// console.log(funBas(bas));

// let w = watch(selectors(selectedDish()));
// store.subscribe(
// w((newVal, oldVal, objectPath) => {
// console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
// // admin.name changed from JP to JOE
// })
// );
// function repeatSelect(bas: Product[]): Product[] {
// let res = {};
// for (let i = 0; i < bas.length; i++) {
// if (bas[i].id === bas[i + 1].id) {
// res[bas[i]]++;
// } else {
// res[bas[i]] = 1;
// }
// }
// console.log(res);

// return res;
// }

//-----------------------------------------------------------------------------------

const bas2 = bas.reduce((acc, el) => {
acc[el] = (acc[el] || 0) + 1;
return acc;
}, {});
console.log(bas2);

//-----------------------------------------------------------------------------------
let arrB = {};
for (let i = 0; i < bas.length; i++) {
if (i === bas.indexOf(bas[i])) {
count += 1;
}
arrB = { ...arrB, ...bas[i], count };
count = 0;
console.log('gg');
}
console.log(uni);
console.log(count);
console.log(arrB);
