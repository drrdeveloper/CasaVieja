   import React from 'react';
   import { motion } from "motion/react";
   import BookingForm from "../../components/es/bookingForm.jsx";

//    ICONOS
    import { IoMdCalendar } from "react-icons/io";
    import { MdOutlinePersonAddAlt1 } from "react-icons/md";
    import { MdOutlineMailOutline } from "react-icons/md";
    import { MdOutlinePayments } from "react-icons/md";

export default function Reserva() {
    return (
        <div className="parent">
            {/* BANNER PRINCIPAL */}
          <motion.div className="header small" 
          initial={{
        height: '90vh'

          }}
          animate={{
        height: '30vh'
          }}
          >

            <div className="content">
            <motion.h1 initial={{opacity:1}} animate={{opacity: 1}}>Solicitud de reserva</motion.h1>
       
            </div>

            <div className="bg">



            </div>
          </motion.div>

           <motion.div className="bookingform tabs"
           variants={{
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotateX: 60, // Rota sobre el eje X para el efecto 3D
        y: -20,      // Empieza desde más abajo
        transformPerspective: 800 // Añade perspectiva para la profundidad
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,  // Vuelve a la posición normal
        y: 0,        // Termina en su posición final
        transition: {
          // Curva de animación suave, similar a la de Windows
          ease: [0.25, 1, 0.5, 1], 
          duration: 0.4,
          delay: 0.25
        }
      }
    }}
    initial="hidden"
    animate="visible"
           >
                <span className="tab active">Disponibilidad <IoMdCalendar className='icon'/></span>
                <span className="tab">Datos previos <MdOutlineMailOutline className='icon'/></span>
                <span className="tab">Check-in <MdOutlinePersonAddAlt1 className='icon'/></span>
                <span className="tab">Pago <MdOutlinePayments className='icon'/></span>
            </motion.div>
    <BookingForm />
        </div>
    );
}


export function ReservaPag1(){
    return(
        <div className="parent">
           

        </div>

    )

}
