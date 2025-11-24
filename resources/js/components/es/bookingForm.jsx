import React, { useState } from "react";
import { motion } from "motion/react";
import DatePicker from "react-datepicker";
import dayjs, { Dayjs } from 'dayjs';

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "../../../css/components.css";
import { FiArrowRight } from "react-icons/fi";

//    ICONOS
 import { IoMdCalendar } from "react-icons/io";


export default function BookingForm(){
    return(
        <Disponibilidad />
    )

}

export function Disponibilidad(){

    const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());


    return(
        <div className="parent form">
          <div className="loader centered small"></div>
            <h1>Consulta tu Disponibilidad</h1>
            <div className="input-container flex">
        <label htmlFor="fechaEntrada">Fecha de entrada</label>
        <div className="break"></div>
        <DatePicker
        wrapperClassName='date_picker full-width'
        label="Fecha de entrada"
          selected={startDate}
          locale={es}
          dateFormat="dd/MM/YYYY"
          onChange={(date) => setStartDate(date)}
        withPortal

        />
        </div>
          <div className="input-container flex">
        <label htmlFor="fechaEntrada">Fecha de salida</label>
        <div className="break"></div>
        <DatePicker
        label="Fecha de entrada"
          selected={endDate}    
          locale={es}
          dateFormat="dd/MM/YYYY"
          onChange={(date) => setEndDate(date)}
          withPortal
        />
        </div>

        <button className="btn centered">Continuar <FiArrowRight className="icon"/></button>
        
        </div>
    )

}