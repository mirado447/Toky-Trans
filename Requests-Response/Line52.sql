--Line 52 : récuperer le nombre des voyages déjà effectués par un client au sein de la compagnie.
SELECT count(*) FROM reserver 
        INNER JOIN client ON client.id_client=reserver.id_client
        WHERE client.id_client='1';

        --On peut mettre aussi le nom et/ou prenom du client pour la precision du recherche /ou n pas mettre de condition 
        --pour avoir la count de toute les clients 
SELECT client.id_client, nom_client, prenom_client, count(*) FROM reserver 
        INNER JOIN client ON client.id_client=reserver.id_client
        WHERE client.id_client='1'            
        GROUP BY client.nom_client, client.prenom_client, client.id_client;
        