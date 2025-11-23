   import React from 'react';
      import { motion } from "motion/react";

    //    ICONOS
    import { FiAlignRight } from "react-icons/fi";
    import { FiAlignJustify } from "react-icons/fi";

export default function Register() {
    return (
      <motion.div className="parent centered"  >
        <motion.form action="" method="post" className='formulario'  
         variants={{
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotateX: 60, // Rota sobre el eje X para el efecto 3D
        y: -150,      // Empieza desde más abajo
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
          delay: 0.35
        }
      }
    }}
    initial="hidden"
    animate="visible"
    >
            <img src="../logoCasaVieja-flecha.svg" alt="" />
            <h2>Extranet</h2>
            <h1>Registro de cuenta</h1>
             <div className="input-container" >
                
                <input type="text" id='name' name='name' required/>
                <label htmlFor="name" >Nombre</label>
            </div>
            <div className="input-container" >
                
                <input type="email" id='email' name='email' required/>
                <label htmlFor="email" >Email</label>
            </div>
                <div className="input-container">
               
                <input type="password" id='pass' name='pass' required/>
                 <label htmlFor="pass">Contraseña</label>
            </div>

            <button className="btn">Registrar cuenta</button>
        </motion.form>
      </motion.div>
    );
}
