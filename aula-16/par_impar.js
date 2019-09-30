function par_impar(num){
    if(num%2 == 0){
        return 'Par';
    } else {
        return 'Impar';
    }
}

var res = par_impar(11);

console.log(res);