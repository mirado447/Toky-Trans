ligne 36:
select client.id_client,nom_client,prenom_client,contact 
	from client inner join reserver 
	on client.id_client=reserver.id_client 
	where reserver.id_offre=1 and reserver.id_voyage=130;
//afficher les client qui font le voyage 130 et qui on choisit l'offre 1

