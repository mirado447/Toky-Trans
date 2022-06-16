-- Client qui vont voyager mais  n'ont pas payer l'intégralité de leur frais
SELECT nom_client FROM client 
INNER JOIN reserver ON reserver.id_client=client.id_client
INNER JOIN voyager ON voyager.id_voyage=reserver.id_voyage
INNER JOIN offre ON offre.id_offre=reserver.id_offre
WHERE offre.id_offre>reserver.montant_paye AND voyager.jour_depart=current_date;
