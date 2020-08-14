const initialState = { tareas: [] }

const tareaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AGREGAR_TAREA":
            return { ...state, tareas: [...state.tareas, { id: payload.id, tarea: payload.tarea, terminada: false }] }
        case "COMPLETAR_TAREA":
            return { ...state, tareas: state.tareas.map(tarea => tarea.id === payload ? Object.assign(tarea, { terminada: true }) : tarea) }
        case "ELIMINAR_TAREA":
            debugger
            return { ...state, tareas: state.tareas.filter(tarea => tarea.id !== payload) }

        default:
            return state
    }
}

export default tareaReducer