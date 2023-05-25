import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Greeting = props => {
    // Const [variable, metodo para actualizarla] = useState(valorinicial)
    const [age, setage] = useState(24);
    const birthday = () => {
        setage(age + 1)
    }
    return (
        <div>
            <h1>
                Hola {props.name}
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir año
                </button>
            </div>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string
}

export default Greeting