import { useState } from 'react'

import Navbar from '../components/Navbar'

import {
 salvarReserva
} from '../services/LocalStorageService'

function Reservas() {

 const [nome, setNome] =
 useState('')

 const reservar = () => {

   salvarReserva({
     nome
   })

   alert('Reserva realizada!')
 }

 return (
   <>
     <Navbar />

     <h1>Reservas</h1>

     <input
       placeholder="Nome"
       onChange={(e) =>
         setNome(e.target.value)
       }
     />

     <button
       onClick={reservar}
     >
       Reservar
     </button>
   </>
 )
}

export default Reservas