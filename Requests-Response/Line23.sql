--Line 23 : les reservations d'un client--
WITH ville_arrivee (id_ville,nom_ville_arrivee) AS (SELECT id_ville,nom_ville FROM ville)
SELECT client.id_client,nom_client, prenom_client, nom_ville, nom_ville_arrivee, type, jour_depart, heure_depart, place FROM client
        INNER JOIN reserver ON reserver.id_client=client.id_client 
        INNER JOIN voyage ON voyage.id_voyage=reserver.id_voyage 
        INNER JOIN ville ON ville.id_ville=voyage.id_ville_depart 
        INNER JOIN offre ON offre.id_offre=reserver.id_offre 
        INNER JOIN ville_arrivee ON ville_arrivee.id_ville=voyage.id_ville_arrivee 
        WHERE voyage.id_ville_arrivee=ville_arrivee.id_ville AND client.id_client='1'; 
                                                                --on peut ciblé le client par id_client : client.id_client='1'--
                                                                --par nom et prenom : "nom_client='Cumine' AND prenom_client='Jodee'
