-- Affichers les clients avec le plus de reservation .
SELECT nom_client, count(date_reservation) FROM reserver
INNER JOIN client ON client.id_client=reserver.id_client 
GROUP BY nom_client