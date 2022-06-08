-- Ligne 56 : ensemble des voyages passant par une certeine ville

SELECT voyage.id_voyage FROM voyage 
    INNER JOIN passer_par ON voyage.id_voyage=passer_par.id_voyage
    INNER JOIN ville ON ville.id_ville=passer_par.id_ville
    WHERE nom_ville='Ambatolampy';