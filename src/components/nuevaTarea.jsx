import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { agregarTarea } from '../redux/actions'

export const NuevaTarea = () => {
    const [value, setvalue] = useState('')
    const dispatch = useDispatch()

    const crearTarea = () => {
        dispatch(agregarTarea(value))
        setvalue("")
    }

    return (
        <div>
            <h2>Agregar nueva tarea</h2>
            <div>
                <input type="text" placeholder="Escribe tu proxima tarea aqui!" value={value} onChange={(e) => setvalue(e.target.value)}></input>
                <button onClick={crearTarea}>Agregar</button>
            </div>
        </div>
    )
}


export default NuevaTarea
