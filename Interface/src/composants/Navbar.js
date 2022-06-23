import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Navbar(props) {
  const { local } = props
  const [requete, setRequete] = useState();
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth > 540) {
        setActiveMenu(false)
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  })

  function toggleMenu() {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      <div className='navnav'>
        <span className='titre'>Toky - Trans</span>
        <span className={activeMenu ? "menuActive" : "menu"}>
          <Link id='link' to='/'><span className={local === "home" ? "item active" : "item"}>Home</span></Link>
          <Link id='link' to="/reserver"><span className={local === "reserver" ? "item active" : "item"}> Reserver </span></Link>
          <span className='item'> Contacts </span>

          <input type="text" onChange={(e) => { setRequete(e.target.value) }} placeholder='Requêtes' list='Requete' className='requete' />
          <button className='chercher-requete' onClick={() => { console.log(`la requete choisi est : ${requete}`) }}>go</button>
          <div>
            <datalist id='Requete'>
              <option className='ok' value="Voiture qui parte pour un voyage">Voiture qui parte pour un voyage</option>
              <option value="Voyage qui parte aujourd'hui">Voyage qui parte aujourd'hui</option>
              <option value="Départ de nuit">Départ de nuit</option>
              <option value="Départ du jour">Départ du jour</option>
              <option value="Réservation d'un client">Réservation d'un client</option>
              <option value="Les offres les plus achetés">Les offres les plus achetés</option>
              <option value="Clients qui fait la même voyage">Clients qui fait la même voyage</option>
              <option value="Les voitures les plus utilisés">Les voitures les plus utilisés</option>
              <option value="Nombre de place non occuper à chaque depart">Nombre de place non occuper à chaque depart</option>
              <option value="Le chauffeur qui conduit lors d'un voyage">Le chauffeur qui conduit lors d'un voyage</option>
              <option value="Les places reserver pour une voyage">Les places reserver pour une voyage</option>
              <option value="Clients qui n'ont pas payé leur reservation">Clients qui n'ont pas payé leur reservation</option>
              <option value="Vehicule qui n'est pas plein le jour de depart">Vehicule qui n'est pas plein le jour de depart</option>
              <option value="Details d'un voyage">Details d'un voyage</option>
              <option value="Les arrêts d'un voyage">Les arrêts d'un voyage</option>
              <option value="Nombre de reservetion reçu en un mois">Nombre de reservetion reçu en un mois</option>
              <option value="Les places disponible pour un jour">Les places disponible pour un jour</option>
              <option value="Vehicules utilisés pour un voyage">Vehicules utilisés pour un voyage</option>
            </datalist>
          </div>
        </span>
        <i class="bi bi-list burger" onClick={toggleMenu}></i>
      </div>
    </>
  )
}
