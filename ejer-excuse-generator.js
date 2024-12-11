let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']; 

function datosRandom(who){
    return Math.floor(Math.random() * who.length);
}

function datosRandom(action){
    return Math.floor(Math.random() * action.length);
}

function datosRandom(what){
    return Math.floor(Math.random() * what.length);
}

function datosRandom(when){
    return Math.floor(Math.random() * when.length);
} 

let randomAll = (who[datosRandom(who)] + action[datosRandom(action)] + what[datosRandom(what)] +  when[datosRandom(when)]); 
console.log(randomAll);

