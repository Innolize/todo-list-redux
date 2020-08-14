let idGenerator = 0

export const completarTarea = (id) => ({
    type: "COMPLETAR_TAREA",
    payload: id
})

export const eliminarTarea = (id) => ({
    type: "ELIMINAR_TAREA",
    payload: id
})

export const agregarTarea = (tarea) => ({
    type: "AGREGAR_TAREA",
    payload: { tarea, id: idGenerator++ }
})