
const numeri =[ 1, 2, 3, 4, 5];

const btnPari = document.querySelector(".pari");
const btnDispari = document.querySelector(".pari");
const user = parseInt(prompt("inserisci un numero da 1 a 5"));
const userFound = numeri.includes(user);


if(userFound === true){
    console.log("OK il tuo numero é " + user)
} else{
    alert("ATTENZIONE NUMERO NON CORETTO")
}

alert("scegli pari o dispari coi bottoni");

btnPari.addEventListener ("click", function(){
    const computer = Math.floor(Math.random() * 6) + 1;
    console.log("numero del computer " + computer);
    const verifica = computer + user;
    if(verifica % 2 === 0){
        console.log("HAI VINTO");
    }else{
        console.log("HAI PERSO")
    }

})


// const user = parseInt(prompt("inserisci un numero da 1 a 5"));
// const userFound = numeri.includes(user)
// const computer = Math.floor(Math.random() * 6) + 1;
// console.log(`il computer ha scelto il numero ${computer}`)
// if(userFound === true){
//     console.log("numero trovato");
// } else{
//     allert("numero non corretto");
// }