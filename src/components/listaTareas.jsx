import React from 'react'

const Tarea = ({ texto, id }) => {
    return (
        <div>
            <p>{texto}</p>
            <button onClick={() => console.log('completado ' + id)}>Completada</button>
            <button onClick={() => console.log('eliminar ' + id)}>Eliminar</button>
        </div>
    )
}


export const ListaTareas = () => {
    const tareas = [{ id: 1, texto: "tarea 1", test: 'asdasdsad' }]

    return (
        <div>
            {tareas && tareas.map((tarea, i) => <Tarea {...tarea} key={i} />)}
        </div>
    )
}
