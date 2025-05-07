
function suma(){
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    resultado = parseInt(numero1) + parseInt(numero2);
    alert("Sumar los dos numeros: " + resultado);
}

function resta(){
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    resultado = numero1 - numero2;
    alert("Restar los dos numeros: " + resultado);
}

function multiplicacion(){
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    resultado = numero1 * numero2;
    alert("Multiplicar los dos numeros: " + resultado);
}

function division(){
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    resultado = numero1 / numero2;
    alert("Dividir los dos numeros: " + resultado);
}