import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { eliminarTarea, completarTarea } from '../redux/actions'



const Tarea = ({ tarea, id }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <p>{tarea}</p>
            <button onClick={() => dispatch(completarTarea(id))}>Completada</button>
            <button onClick={() => dispatch(eliminarTarea(id))}>Eliminar</button>
        </div>
    )
}


export const ListaTareas = () => {
    const tareas = useSelector(state => state.tareas)

    return (
        <div>
            {tareas && tareas.map((tarea, i) => <Tarea {...tarea} key={i} />)}
        </div>
    )
}
