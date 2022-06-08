--le vehicule qui n'est pas plein le jour de depart
select utiliser.id_vehicule from utiliser,voyage where jour_depart='2022-05-21' and voyage.id_voyage=utiliser.id_voyage;