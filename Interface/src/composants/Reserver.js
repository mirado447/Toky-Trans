import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import '../css/reserver.css';

export default function Reserver() {
  return (
      <>
       <Navbar local='reserver'/>
       <div className="reservation">
         <span className='prelude'>Choisissez votre itinéraire</span>
         <input type="text" placeholder='Départ' list='ville' className='départ'/>
           <datalist id='ville'>
               <option className='ok' value="Antananarivo">Antananarivo</option>
               <option value="Fianarantsoa">Fianarantsoa</option>
               <option value="Majunga">Majunga</option>
               <option value="Antsiranana">Antsiranana</option>
               <option value="Toamasina">Toamasina</option>
           </datalist>
           <input type="text" placeholder='Arrivée' list='ville' className='arriver'/>
           <input type="date" name="" id="date-départ" className='date'/>
           <input type="number" placeholder='Voyageur(s)' className='voyageur'/>
       <div>
          <Link to='/' className='retourner-bouton'>Retourner</Link>
          <Link to='/reserver/suite' className='reserver-bouton'>Réserver</Link>
       </div>
       
       </div>
      </>
    )
}
