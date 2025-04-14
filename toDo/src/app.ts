//se toman los elementos html
const entrada = document.querySelector(".inp_tarea") as HTMLInputElement;
const boton = document.querySelector("#ag") as HTMLButtonElement;
const lista = document.querySelector("#lista") as HTMLUListElement;
//id de las tareas
let id = 0;

let time:TimerHandler;

entrada.addEventListener("mouseleave",()=>{
    entrada.style.transition = "500ms"
    let a = document.styleSheets;
    let b = a.item(0)

});
//funcion para agregar el evento al boton que elimina la tarea de la lista
let agregar_event = (b:HTMLButtonElement)=>{
    b.addEventListener("click",(e:Event)=>{
        e.preventDefault();
        
        let tarea = document.getElementById(b.id) as HTMLLIElement;
        tarea.classList.add("eliminado");
        console.log("se esta ejecutanto la animacion");
        setTimeout(()=>{
            lista.removeChild(tarea);
        },400);

        
        
    });

};

//funcion para agregar el evento al boton agregar, para agregar un nuevo evento a la lista
boton.addEventListener("click",(e:Event)=>{
    e.preventDefault();
    if(entrada.value===""){
        alert("Debes ingresar la tarea, no puedes agregar una tarea vacia!");

    }else{
        let hijo = document.createElement("li");
        let b1 = document.createElement("button");
        let txt = document.createElement("p");

        b1.className = "but_eliminar"
        hijo.className = "li_tarea"
        b1.id=String(id);

        hijo.id = String(id);
        id+=1
        agregar_event(b1);
    
        b1.innerText="Eliminar";
    
        txt.innerText = entrada.value;
        lista.appendChild(hijo);
        hijo.appendChild(txt);
        hijo.appendChild(b1);

    }
    
});
