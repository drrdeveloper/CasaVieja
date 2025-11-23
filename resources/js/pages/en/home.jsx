   import React from 'react';
   import { motion } from "motion/react";

//    ICONOS
    import { IoMdCalendar } from "react-icons/io";

export default function Home() {

  const reservaOnline = () => {
    
    var fechaEntrada = document.getElementById("entradaInput").value;
    var fechaSalida = document.getElementById("salidaInput").value;
    var url = "/en/booking?fechaEntrada=" + fechaEntrada + "&fechaSalida=" + fechaSalida;
    window.location.href = url;

  }

    return (
        <div className="parent">
            {/* BANNER PRINCIPAL */}
          <div className="header full">

            <motion.div className="content"
            initial={{ 
                x: -100, 
                opacity: 0 
            }}
             animate={{
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 }
            }}
            >
            <h1>An oasis in northern Spain.</h1>
            <h3>Make your booking now</h3>
            <motion.div className="flex"
            initial={{ 
                x: -100, 
                opacity: 0 
            }}
             animate={{
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
            }}
            >
                <div className="input-container hiddenmobile">
                       <label htmlFor='entrada'>Start date</label>
                    <input type='date' name='entradaInput' id='entradaInput' />
                    </div>

                 <div className="input-container hiddenmobile">
                       <label htmlFor='salida'>Exit date</label>
                    <input type='date' name='salidaInput' id='salidaInput' />
                    </div>
                
            <a onClick={reservaOnline} className='btn'>Book now <IoMdCalendar className='icon'/></a>
             </motion.div>
            </motion.div>

            <div className="bg">



            </div>
          </div>

        </div>
    );
}
