-- Ligne 43 : lister les véhicules qui partent à un certain moment
    --avec chauffeur
    SELECT id_vehicule,nom_complet FROM vehicule 
        INNER JOIN chauffeur ON vehicule.id_vehicule=chauffeur.id_vehicule
        INNER JOIN utiliser ON utiliser.id_vehicule=vehicule.id_vehicule
        INNER JOIN voyage ON utiliser.id_voyage=voyage.id_voyage
        WHERE voyage.jour_depart='2022-05-20'; 