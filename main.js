/*Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. */

const pizzas = [
    {id: 1, nombre: "muzzarella", ingredientes: ["Salsa de tomate", "muzzarella", "aceitunas", "orégano"], precio: 500},
    {id: 2, nombre: "jamón", ingredientes: ["Salsa de tomate", "muzzarella", "jamón", "aceitunas y orégano"], precio: 550},
    {id: 3, nombre: "napolitana", ingredientes: ["Salsa de tomate", "muzzarella", "tomate", "ajo", "aceite de oliva", "aceitunas", "orégano"], precio: 600},
    {id: 4, nombre: "fugazza", ingredientes: ["Cebolla", "aceite de oliva", "aceitunas negras"], precio: 500},
    {id: 5, nombre: "calabresa", ingredientes: ["Salsa de tomate", "muzzarella", "longaniza", "aceitunas", "orégano"], precio: 650},
    {id: 6, nombre: "roquefort", ingredientes: ["Salsa de tomate", "muzzarella", "queso roquefort", "aceitunas negras", "orégano"], precio: 700},
];

const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", compararId);

function compararId() {
    h2.innerHTML = " ";

    h4.innerHTML = " ";

    const idIngresado = input.value;

    pizzas.forEach((pizza) => {
        if(pizza.id == idIngresado) {
            h2.innerHTML = `Es sabor de la pizza solicitada es ${pizza.nombre},`;
            h4.innerHTML = `que tiene un valor de $${pizza.precio}`;
        } 
    })

    if(idIngresado <1 || idIngresado>6) {
        h2.innerHTML = "El Id que ha ingresado es incorrecto!!!";
    }
}