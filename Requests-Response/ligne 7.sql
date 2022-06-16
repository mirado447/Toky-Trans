ligne 7:
select vehicules.id_vehicule,places_dispo,matricule,nombre_places from vehicules 
	inner join utiliser 
	inner join voyage 
	on voyage.id_voyage=utiliser.id_voyage 
	on vehicules.id_vehicule=utiliser.id_vehicule 
	where jour_depart='2022-06-02';
//affiche les place disponible pour le jour 2022-06-02