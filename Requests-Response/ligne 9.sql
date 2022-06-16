ligne 9:
select vehicules.places_dispo from vehicules 
	inner join utiliser 
	inner join voyage 
	on voyage.id_voyage=utiliser.id_voyage 
	on utiliser.id_vehicule=vehicules.id_vehicule 
	where utiliser.id_vehicule=1 
	and utiliser.id_voyage=161;
-- donner les places disponible dans le vehicule 1 pour le voyage 161