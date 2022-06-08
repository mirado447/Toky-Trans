--Line 30 : les vehicules utilisés pour un voyage
WITH ville_arrivee (id_ville,nom_ville_arrivee) AS (SELECT id_ville,nom_ville FROM ville)
SELECT vehicules.id_vehicule, matricule, nom_ville, nom_ville_arrivee, jour_depart, heure_depart FROM ville 
        INNER JOIN voyage ON ville.id_ville=voyage.id_ville_depart 
        INNER JOIN ville_arrivee ON ville_arrivee.id_ville=voyage.id_ville_arrivee 
        INNER JOIN utiliser ON utiliser.id_voyage=voyage.id_voyage 
        INNER JOIN vehicules ON utiliser.id_vehicule=vehicules.id_vehicule 
        WHERE jour_depart='2021-08-10'; --AND nom_ville_arrivee='Majunga' AND heure_depart='8:00';
                            --il faut spécifié le voyage par la ville de départ, ville d'arrivé, date et heure de départ pour plus de précision
    
    --OU Si vous voulez juste la matricule et id_vehicule
SELECT vehicules.id_vehicule, matricule FROM vehicules
        INNER JOIN utiliser ON vehicules.id_vehicule=utiliser.id_vehicule
        INNER JOIN voyage on utiliser.id_voyage=voyage.id_voyage
        WHERE jour_depart='2021-08-10';  --AND nom_ville_arrivee='Majunga' AND heure_depart='8:00';