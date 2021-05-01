function borrarArray(pLista, pId) {
    let idABorrar = pLista.findIndex(tarea => tarea.idTarea === pId);
    tareas.splice(idABorrar, 1);
}


function filtrarPorPrioridad(pPrioridad, pListaTareas) {
    const listaTareasPrioridad = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() === pPrioridad.toLowerCase());
    return listaTareasPrioridad;
}


function buscarPorPalabra(pPalabra, pList) {
    let palabra = pPalabra.toLowerCase().trim();
    let listaPalabras = pList.filter(tarea => tarea.titulo.toLowerCase().includes(palabra));
    return listaPalabras
}