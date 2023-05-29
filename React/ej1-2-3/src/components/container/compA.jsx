import React from 'react';
import { Contacto } from '../../models/contacto.class';
import CompB from '../pure/compB';

const CompA = () => {
    const defecto = new Contacto('Jose', 'Perez', 'hola@hola.com', true);
    return (
        <div>
            <CompB Contacto={defecto}></CompB>
        </div>
    );
};

export default CompA;
