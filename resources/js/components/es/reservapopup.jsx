   import React from 'react';
   import { motion } from "motion/react";

//    ICONOS
    import { IoMdCalendar } from "react-icons/io";
    import { MdSearch } from "react-icons/md";

export default function ReservaPopup() {


     const reservaOnline = () => {
        
        var fechaEntrada = document.getElementById("entradaInput").value;
        var fechaSalida = document.getElementById("salidaInput").value;
        var url = "/es/booking?fechaEntrada=" + fechaEntrada + "&fechaSalida=" + fechaSalida;
        window.location.href = url;
    
      }
    

    return(
     <motion.div className="reservapopup"
    // Usar "variants" hace el código más limpio
    initial={{
        opacity: 0,
        scale: 0.8,
        rotateX: 60, // Rota sobre el eje X para el efecto 3D
        y: -150,      // Empieza desde más abajo
        transformPerspective: 800 // Añade perspectiva para la profundidad
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotateX: 0,  // Vuelve a la posición normal
        y: 0,        // Termina en su posición final
       }}
>
 <h3>Solicita tu reserva rápido y online</h3>
 
            <div className="inputs">
              
                <div className="input-container">
                       <label htmlFor='entrada'>Fecha de entrada</label>
                    <input type='date' name='entradaInput' id='entradaInput' />
                    </div>

                 <div className="input-container">
                       <label htmlFor='salida'>Fecha de salida</label>
                    <input type='date' name='salidaInput' id='salidaInput' />
                    </div>
                
            <a onClick={reservaOnline} className='btn'>Reserva ahora <MdSearch className='icon'/></a>
             </div>
</motion.div>

    );

}