import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const CompB = ({Contacto}) => {
    const [conectado, setConectado] = useState(Contacto.conectado);
    const cambio = () => {
        setConectado(!conectado)
    }
    return (
        <div>
            <div>
                <h2>
                    Nombre: {Contacto.nombre}
                </h2>
                <h3>
                    Apellido: {Contacto.apellido}
                </h3>
                <h4>
                    Email: {Contacto.email}
                </h4>
                <h5>
                    Conectado: {conectado ? 'Contacto En Línea':'Contacto No Disponible'}
                </h5>
                <button onClick={cambio}>
                    Cambiar Estado
                </button>
            </div>
        </div>
    );
};


CompB.propTypes = {
    Contacto: PropTypes.instanceOf(Contacto)
};


export default CompB;
