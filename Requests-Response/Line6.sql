-- Ligne 6 : afficher les noms des clients qui n'ont pas encore payé leur reservation

SELECT nom_client FROM client 
    INNER JOIN reserver ON client.id_client=reserver.id_client
    WHERE reserver.montant_paye=0;