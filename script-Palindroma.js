
const user = prompt('inserisci una parola');
console.log(user);

const parolaInversa = invertiParola(user);
console.log(parolaInversa)

if(parolaInversa === user){
    console.log(`La parola ${user} e la parola ${parolaInversa} sono palindrome`)
}else{
    console.log(`La parola ${user} e la parola ${parolaInversa} NON sono palindrome`)
}

function invertiParola(word) {
    const wordInversa = word.split('').reverse().join('');
    return wordInversa;
}