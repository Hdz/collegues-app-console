var request = require('request');

function rechercherColleguesParNom(nomRecherche) {

    request('https://drouaud-colleguesapi.herokuapp.com/collegues?nom='+nomRecherche, { json: true }, function( body) {

            var tableauColleguesTrouves = body;  
            tableauColleguesTrouves.map (collegue => rechercherColleguesParMatricule(collegue.matricule));

    });
}

exports.rechercherColleguesParNom = rechercherColleguesParNom;
