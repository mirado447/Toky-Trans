--Line 22 : Le nom des clients qui fait la même voyage dans la même voiture (et leur place)
WITH ville_arrivee (id_ville,nom_ville_arrivee) AS (SELECT id_ville,nom_ville FROM ville)
SELECT nom_client, prenom_client, matricule, place, nom_ville, nom_ville_arrivee, type, jour_depart, heure_depart FROM ville 
        INNER JOIN voyage ON ville.id_ville=voyage.id_ville_depart 
        INNER JOIN ville_arrivee ON ville_arrivee.id_ville=voyage.id_ville_arrivee 
        INNER JOIN utiliser ON utiliser.id_voyage=voyage.id_voyage 
        INNER JOIN vehicules ON utiliser.id_vehicule=vehicules.id_vehicule 
	    INNER JOIN reserver ON reserver.id_vehicule=vehicules.id_vehicule
	    INNER JOIN offre ON reserver.id_offre=offre.id_offre
	    INNER JOIN client ON client.id_client=reserver.id_client
        WHERE vehicules.id_vehicule='43';   --AND voyage.jour_depart='2022-05-21' AND voyage.heure_depart='8:00'
                                            --Spéficié dans la condition 'WHERE' le id_vehicule / matricule / la date et heure de départ pour plus de précision
