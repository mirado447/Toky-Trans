-- Ligne 26 : quel est le nombre de reservetion reçu en un mois ?

SELECT count(*) FROM reserver
        WHERE date_reservetion > '2022-04-20' AND date_reservetion < '2022-05-20'
        ORDER BY count(*) DESC;