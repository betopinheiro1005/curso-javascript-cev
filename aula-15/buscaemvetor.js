let num = [8, 1, 7, 4, 2, 9];

console.log(num);

let pos = num.indexOf(7);

if(pos == -1){
    console.log(`O valor ${num[pos]} não foi encontrado no array`)
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`);
}

let i = 5;
let pos2 = num.indexOf(i);

if(pos2 == -1){
    console.log(`O valor ${i} não foi encontrado no array`)
} else {
    console.log(`O valor ${num[pos2]} está na posição ${pos2}`);
}    