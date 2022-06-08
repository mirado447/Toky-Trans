--Line 15 : les offres le plus fréquemment achetées
   --Si vous voulez la première offre le plus achetée
WITH countOffre (type, count) AS (SELECT type, count(type) FROM offre
        INNER JOIN reserver ON reserver.id_offre=offre.id_offre
        GROUP BY type)
SELECT type, count FROM countOffre WHERE count = (SELECT max(count) FROM countOffre);

   --Si vous voulez l'ordre d'achat des offres ainsi que le nombre d'achat
SELECT type, count(*) FROM reserver
        INNER JOIN offre ON offre.id_offre=reserver.id_offre 
        GROUP BY type
        ORDER BY count(*) DESC;