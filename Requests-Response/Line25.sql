--Line 25 : afficher les voitures les plus utilisés
  --La voiture la plus utilisé
WITH countVehicules (id_vehicule, matricule, count) AS (SELECT vehicules.id_vehicule, matricule, count(*) FROM vehicules
        INNER JOIN utiliser ON utiliser.id_vehicule=vehicules.id_vehicule
        GROUP BY vehicules.id_vehicule, matricule)
SELECT id_vehicule, matricule, count FROM countVehicules WHERE count = (SELECT max(count) FROM countVehicules);

  --OU Si vous voulez l'ordre des vehicules les plus utilisés
SELECT vehicules.id_vehicule, matricule, count(*) FROM vehicules
        INNER JOIN utiliser ON utiliser.id_vehicule=vehicules.id_vehicule
        GROUP BY vehicules.id_vehicule, matricule
	    ORDER BY count(*) DESC;