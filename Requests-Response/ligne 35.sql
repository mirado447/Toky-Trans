ligne 35:
select client.id_client,nom_client,prenom_client,contact from client 
	inner join reserver 
	inner join voyage 
	on reserver.id_voyage=voyage.id_voyage 
	on client.id_client=reserver.id_client 
	where voyage.jour_depart='2021-08-10';
-- afficher les des client qui partent aujourd'hui ou un certain jour (2021-08-10) 