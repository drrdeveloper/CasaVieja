   import React from 'react';

    //    ICONOS
    import { FiAlignRight } from "react-icons/fi";
    import { FiAlignJustify } from "react-icons/fi";
    import { RiHotelBedLine } from "react-icons/ri";
    import { GrLanguage } from "react-icons/gr";

export default function Menu() {
    const home = () => {
        window.location.href = '/es';

    }

    return (
        <div className="menu" onClick={home}>
            <div className="logoarea">
                <img src="../logoCasaVieja.svg" alt=""  className='logo'/>
            </div>
            <div className="btnarea">
                <a href="/en" className="changelang hiddenmobile"><GrLanguage className='icon'/> English</a>
              <a href="/es/booking" className="btn header hiddenmobile">Reserva ahora <RiHotelBedLine className='icon' /></a>

            <div className="mobilebtn">
            <FiAlignRight className='menubtn' /><FiAlignJustify className='menubtn hover'/>
            </div>


        <div className="moremenu" id="moremenu">
        <a href="es/about" className="btn">Nosotros</a>
        <a href="es/ubi" className="btn">Cómo llegar</a>
        <a href="es/avisolegal" className="btn">Aviso legal</a>
        <a href="/login" className="btn">Extranet</a>
        </div>


            </div>



        </div>
    );
}
