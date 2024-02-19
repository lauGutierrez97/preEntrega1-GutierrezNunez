//Prompt para que el usuario se registre.

//credenciales

let usuario = "fulanito";
console.log(usuario);

let password = "12345";
console.log(password);

//Bucle for para el inicio de sesión


for (let i = 1; i <= 3; i++) {
  let nombreUsuario = prompt("Hola ingresa tu usuario");
  let passUsuario = prompt("password");
  if (usuario == nombreUsuario && password == passUsuario) {
    alert("Bienvenido a nuestra tienda de bebidas " + nombreUsuario);
    break;
  } else {
    alert("Credenciales incorrectas. " + i + " de 3 intentos");
  }
}



//funciones para sumar precios del carrito, y para calcular el descuento. Cerveza vale 2.000 pesos. Vino 5.000 y los destilados 7.000
//la funcion del descuento va a reutilizar luego la funcion de la suma para calcular dicho descuento

function sumaPrecios (unidadesCerveza, unidadesVino, unidadesDestilados){
  precioTotal = ((unidadesCerveza * 2000) + (unidadesVino * 5000) + (unidadesDestilados * 7000))
  return  alert ("el total a pagar es $ " + precioTotal)
}



function Descuento (precio1, cantidadDescuento){
  precioDescuento = precio1 - (precio1 * cantidadDescuento)
  return alert ("Por superar los $100.000 te damos un descuento. El total es de $ " + precioDescuento)
}


//switch para seleccionar que tipo de bebidas quiere.



let ingreso = prompt(
  "Selecciona una bebida \n 1 Cerveza \n 2 Vino \n 3 Destilados"
);
switch (ingreso) {
  case "1":
    let num1 = parseFloat(prompt("Cuantas unidades necesitas"));
    sumaPrecios (num1 , 0, 0)
    let continuar = prompt("algo mas?");
    if (continuar != "si") {
      break
    }

  case "2":
    let num2 = parseFloat(prompt("Cuantas unidades necesitas"));
    sumaPrecios (0, num2 , 0);
    let continuar2 = prompt("algo mas?");
    if (continuar2 != "si") {
      break;
    }

  case "3":
    let num3 = parseFloat(prompt("Cuantas unidades necesitas"));
    sumaPrecios (0, 0, num3)
    let continuar3 = prompt("algo mas?");
    if (continuar3 != "si") {
      break;
    }

  case "4":
    if (precioTotal >= 100000){
      console.log (precioTotal)
      Descuento (precioTotal, 0.15)
      break}else{
        console.log ("Adios")
        break
    }
    
     default:
    alert("No seleccionaste ninguna bebida");

}
