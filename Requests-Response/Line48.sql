-- linge 48: afficher les arrêts d'un voyage 

SELECT nom_ville FROM ville 
    INNER JOIN passer_par ON ville.id_ville=passer_par.id_ville 
    INNER JOIN voyage ON voyage.id_voyage=passer_par.id_voyage
    WHERE voyage.id_voyage=130; -- dépend de l'insert
