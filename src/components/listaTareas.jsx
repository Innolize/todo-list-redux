import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { eliminarTarea, completarTarea } from '../redux/actions'
import "./listaTareas.css"


const Tarea = ({ tarea, id, terminada }) => {
    const dispatch = useDispatch()

    return (
        <div className='tarea'>
            <p className={`tarea-texto ${terminada === true ? 'tarea-terminada' : ""}`}>{tarea}</p>
            <button className="boton completa" onClick={() => dispatch(completarTarea(id))}>Completada</button>
            <button className="boton elimina" onClick={() => dispatch(eliminarTarea(id))}>Eliminar</button>
        </div>
    )
}


export const ListaTareas = () => {
    const tareas = useSelector(state => state.tareas)

    return (
        <div className='lista-tareas'>
            {tareas && tareas.map((tarea, i) => <Tarea {...tarea} key={i} />)}
        </div>
    )
}
