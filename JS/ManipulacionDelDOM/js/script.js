
// Crear tarea
function createTask (title) {
    let task = document.createElement("div");
    let titulo = document.createElement("p");
    let close = document.createElement("p");

    let texto = document.createTextNode(title);
    let x = document.createTextNode("X");

    titulo.append(texto);
    close.append(x);

    // Añado el listerner para cerrar
    close.addEventListener("click", deleteTask);

    task.classList.add("task");
    task.append(titulo);
    task.append(close);
    task.draggable = true;   

    // Si no añádo esto, no funciona el dragable en las nuevas tareas
    task.addEventListener("dragstart", e => {
        console.log("dragStart");
        e.dataTransfer.setData("name",e.target.children[0].textContent);
        e.target.setAttribute("id", "draggable");
    });

    return task;
}

// Capturar evento para añadir una nueva tarea
document.querySelector(".btn").addEventListener("click", e => {

    // Obtenemos el valor del input
    let taskName = document.querySelector("input").value;

    // Compruebo si está vacío
    if (!taskName) {
        alert("El nombre de la tarea está vacío.")
    } else {

        // Añado la tarea
        document.querySelector(".todo .tasks").append(createTask(taskName));

        // Limpiamos el formulario
        document.querySelector("input").value = "";
    }
})

// Borrar tarea
function deleteTask (e) {
    e.target.parentElement.remove();
}

// Capturar eventos para eliminar una tarea
let borrarXs = document.getElementsByClassName("close");

Array.from(borrarXs).map(v => v.addEventListener("click", deleteTask))

// Todas las tareas son draggable
let tasks = document.querySelectorAll(".task");

// ¿Por qué no funciona con map?
tasks.forEach(v => {
    v.draggable = true;
    v.addEventListener("dragstart", e => {
        // Mando el nombre de la tarea
        e.dataTransfer.setData("name", e.target.children[0].textContent);
        // Le añade ese atributo porque crea una tarea nueva donde lo suelto y eliminar la anterior
        // (la que tenga el id dragable)
        e.target.setAttribute("id", "draggable");
    });
})

let tasks_list = document.querySelectorAll(".tasks");

// ¿Por qué no funciona con map?
tasks_list.forEach(lista => {
    lista.addEventListener("dragover", (e) => {
        // Para que funcione el drop
        e.preventDefault();
    })

    lista.addEventListener("drop", (e) => {
        e.preventDefault();
        let name = e.dataTransfer.getData("name");
        e.target.closest(".tasks").append(createTask(name));
        document.getElementById("draggable").remove();
    })
})