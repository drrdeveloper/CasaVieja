   import React from 'react';
   import { motion } from "motion/react";
   import ReservaPopup from "../../components/es/reservapopup"

//    ICONOS
    import { IoMdCalendar } from "react-icons/io";

export default function Home() {

 
    return (
        <div className="parent">
            {/* BANNER PRINCIPAL */}
          <div className="header full">

            <motion.div className="content">
            <h1>Un paraíso en el norte de España.</h1>
         
            </motion.div>

            <ReservaPopup />

            <div className="bg">



            </div>
          </div>

        </div>
    );
}






  