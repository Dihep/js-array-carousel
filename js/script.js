// Genera due numeri random tra 1 e 6 (inclusi), uno per il giocatore e uno per il computer.
let player = Math.floor(Math.random()*7);
console.log("Player rolled: ", player);
let computer = Math.floor(Math.random()*7);
console.log("Computer rolled: ", computer);

//     Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto. 
let result = "IT'S A DRAW!";
if (player>computer) {
    result = "YOU WIN!";
}
else if (player<computer) {
    result = "YOU LOSE!";
};
console.log("Epic dice match result: ", result);