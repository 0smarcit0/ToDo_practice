"use strict";
//se toman los elementos html
const entrada = document.querySelector("#inp_tarea");
const boton = document.querySelector("#ag");
const lista = document.querySelector("#lista");
//id de las tareas
let id = 0;
let time;
//funcion para agregar el evento al boton que elimina la tarea de la lista
let agregar_event = (b) => {
    b.addEventListener("click", (e) => {
        e.preventDefault();
        let tarea = document.getElementById(b.id);
        tarea.classList.add("eliminado");
        console.log("se esta ejecutanto la animacion");
        setTimeout(() => {
            lista.removeChild(tarea);
        }, 400);
    });
};
//funcion para agregar el evento al boton agregar, para agregar un nuevo evento a la lista
boton.addEventListener("click", (e) => {
    e.preventDefault();
    let hijo = document.createElement("li");
    let b1 = document.createElement("button");
    let txt = document.createElement("p");
    b1.className = "but_eliminar";
    hijo.className = "li_tarea";
    b1.id = String(id);
    hijo.id = String(id);
    id += 1;
    agregar_event(b1);
    b1.innerText = "Eliminar";
    txt.innerText = entrada.value;
    lista.appendChild(hijo);
    hijo.appendChild(txt);
    hijo.appendChild(b1);
});
