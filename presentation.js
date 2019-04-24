var readline = require('readline');
var service = require('./service');

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
            console.log('>> Recherche en cours du nom : ');
            choiceByName ();

        } else if (saisie == 99) {
            console.log('Aurevoir');
            rl.close(); // Pas de saisie possible

        }


})
}

function choiceByName () 
{
    rl.question('Saisir le nom : ', function (saisie) {
        service.rechercherColleguesParNom(saisie, collegue => console.log (collegue));
        choix ();
    });
}



    exports.menu = start;
    exports.menuChoix = choix;