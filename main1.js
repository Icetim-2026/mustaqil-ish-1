let num1 = 5;
if (num1 > 0) {
    num1++;
}
console.log(num1);


let num2 = -3;
if (num2 > 0) {
    num2++;
} else {
    num2 -= 2;
}
console.log(num2);


let num3 = 0;
if (num3 > 0) {
    num3++;
} else if (num3 < 0) {
    num3 -= 2;
} else {
    num3 = 10;
}
console.log(num3);


let a4 = 4, b4 = -2, c4 = 8;
let musbatlarSoni = 0;
if (a4 > 0) musbatlarSoni++;
if (b4 > 0) musbatlarSoni++;
if (c4 > 0) musbatlarSoni++;
console.log(musbatlarSoni);


let a5 = 5, b5 = -3, c5 = 0;
let mSoni = 0;
let manfiySoni = 0;
if (a5 > 0) mSoni++; else if (a5 < 0) manfiySoni++;
if (b5 > 0) mSoni++; else if (b5 < 0) manfiySoni++;
if (c5 > 0) mSoni++; else if (c5 < 0) manfiySoni++;
console.log(mSoni, manfiySoni);


let a6 = 15, b6 = 25;
let katta = a6;
if (b6 > a6) {
    katta = b6;
}
console.log(katta);


let a7 = 40, b7 = 12;
if (a7 < b7) {
    console.log(1);
} else {
    console.log(2);
}


let a8 = 8, b8 = 19;
if (a8 > b8) {
    console.log(a8, b8);
} else {
    console.log(b8, a8);
}


let A9 = 45.5, B9 = 12.3;
if (A9 > B9) {
    let vaqtinchalik = A9;
    A9 = B9;
    B9 = vaqtinchalik;
}
console.log(A9, B9);


let A10 = 7, B10 = 7;
if (A10 !== B10) {
    let yigindi = A10 + B10;
    A10 = yigindi;
    B10 = yigindi;
} else {
    A10 = 0;
    B10 = 0;
}
console.log(A10, B10);