var readline = require('readline');

function start() {
    console.log('1. Rechercher un collègue par nom');
    console.log('99. Sortir');
}


// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// récupération de la saisie utilisateur
function choix() {
    rl.question('Où voulez vous vous diriger?', function (saisie) {

        console.log(`Vous avez saisi : ${saisie}`);
        if (saisie == 1) {
            console.log('>> Recherche en cours du nom xxx');
        } else if (saisie == 99) {
            console.log('Aurevoir');
        }
        rl.close(); // Pas de saisie possible
})
}

    exports.menu = start;
    exports.menuChoix = choix;