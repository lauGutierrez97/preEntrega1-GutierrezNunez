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

//switch para seleccionar que tipo de bebidas quiere.
//Cerveza vale 2.000 pesos. Vino 5.000 y los destilados 7.000

let ingreso = prompt(
  "Selecciona una bebida \n 1 Cerveza \n 2 Vino \n 3 Destilados"
);
switch (ingreso) {
  case "1":
    let num1 = prompt("Cuantas unidades necesitas");
    alert("total a pagar $ " + num1 * 2000);
    let continuar = prompt("algo mas?");
    if (continuar != "si") {
      break;
    }

  case "2":
    let num2 = prompt("Cuantas unidades necesitas");
    alert("total a pagar $ " + (num2 * 5000 + num1 * 2000));
    let continuar2 = prompt("algo mas?");
    if (continuar2 != "si") {
      break;
    }

  case "3":
    let num3 = prompt("Cuantas unidades necesitas");
    alert("total a pagar $ " + (num3 * 7000 + num1 * 2000 + num2 * 5000));
    let continuar3 = prompt("algo mas?");
    if (continuar3 != "si") {
      break;
    }

  case "4":
    alert(
      "llegaste al maximo de items, el total es de $ " +
        (num1 * 2000 + num2 * 5000 + num3 * 7000)
    );
    break;

  default:
    alert("No seleccionaste ninguna bebida");

}
