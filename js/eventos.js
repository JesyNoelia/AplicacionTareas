let seccionTareas = document.querySelector('.tareas');
let idActual = 2;

const pintarUnaTarea = function (pJson) {
    let article = document.createElement('article');
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let boton = document.createElement('button');

    boton.dataset.id = pJson.idTarea;
    article.id = 'tarea' + pJson.idTarea;
    boton.title = 'Has completado tu tarea? Eliminala!'

    boton.addEventListener('click', borrarTarea);

    let tituloTarea = document.createTextNode(pJson.titulo);
    let btnEliminar = document.createTextNode('Eliminar');

    h3.appendChild(tituloTarea);
    boton.appendChild(btnEliminar);

    div.appendChild(h3);
    div.appendChild(boton);
    article.appendChild(div);

    seccionTareas.appendChild(article);
}
pintarUnaTarea(tareas);


function pintarListaTareas(pListaTareas) {
    seccionTareas.innerHTML = "";
    idActual = pListaTareas.length;
    pListaTareas.forEach(function (tarea) {
        return pintarUnaTarea(tarea)
    });
}
pintarListaTareas(tareas);





let guardarTarea = document.getElementById('guardar');
let inputTarea = document.getElementById('tarea');
let prioridad = document.getElementById('prioridad');

guardarTarea.addEventListener('click', ingresarTarea);

function ingresarTarea(event) {
    event.preventDefault();
    idActual++;
    tareas.push({ idTarea: idActual, titulo: inputTarea.value.trim(), prioridad: prioridad.value, });
    pintarListaTareas(tareas)
}
console.log(tareas);



function borrarTarea(event) {
    let tareaBorrada = 'tarea' + event.target.dataset.id;
    console.log(tareaBorrada);
    let objetoTarea = document.getElementById(tareaBorrada);

    objetoTarea.parentNode.removeChild(objetoTarea)

    borraArray(tareas, parseInt(event.target.dataset.idTarea))

}