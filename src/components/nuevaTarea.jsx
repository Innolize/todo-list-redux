import React, { useState } from 'react'


export const NuevaTarea = () => {
    const [value, setvalue] = useState('')
    console.log(value)
    return (
        <div>
            <h2>Agregar nueva tarea</h2>
            <div>
                <input type="text" placeholder="Escribe tu proxima tarea aqui!" onChange={(e) => setvalue(e.target.value)}></input>
                <button onClick={()=> console.log('hiciste click')}>Agregar</button>
            </div>
        </div>
    )
}


export default NuevaTarea
