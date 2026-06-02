[main2.js](https://github.com/user-attachments/files/28496361/main2.js)
let ism = "Ali", yosh = 20;
console.log(ism, yosh);


let uzunlik = 10, eni = 5;
let yuzi = uzunlik * eni;
console.log(yuzi);


let radius = 7;
let uzunlikAylana = 2 * Math.PI * radius;
console.log(uzunlikAylana);


let son4 = 8;
if (son4 % 2 === 0) {
    console.log("juft");
} else {
    console.log("toq");
}


let son5 = -5;
if (son5 > 0) {
    console.log("musbat");
} else if (son5 < 0) {
    console.log("manfiy");
} else {
    console.log("nol");
}


let x = 15, y = 30;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);


let a7 = 12, b7 = 45, c7 = 23;
let engKatta = a7;
if (b7 > engKatta) engKatta = b7;
if (c7 > engKatta) engKatta = c7;
console.log(engKatta);


let son8 = 15;
if (son8 % 3 === 0 && son8 % 5 === 0) {
    console.log("bo'linadi");
} else {
    console.log("bo'linmaydi");
}


for (let i = 1; i <= 100; i++) {
    console.log(i);
}


let N10 = 10;
let yigindi10 = 0;
for (let i = 1; i <= N10; i++) {
    yigindi10 += i;
}
console.log(yigindi10);


for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let N12 = 5;
let kopaytma = 1;
for (let i = 1; i <= N12; i++) {
    kopaytma *= i;
}
console.log(kopaytma);


let N13 = 20;
let juftSoni = 0;
for (let i = 1; i <= N13; i++) {
    if (i % 2 === 0) {
        juftSoni++;
    }
}
console.log(juftSoni);


for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


function yigindiF(a, b) {
    return a + b;
}
console.log(yigindiF(5, 7));


function kvadratF(son) {
    return son * son;
}
console.log(kvadratF(6));


function kubF(son) {
    return son * son * son;
}
console.log(kubF(4));
