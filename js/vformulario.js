let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let nombreDeUsuario = id("nameuser"),
  contrasena = id("password")
;

  form.addEventListener("enviar", (e) => {
    e.preventDefault();
    motor(nombreDeUsuario, 0, "El nombre de usuario no puede estar en blanco");
  motor(contrasena, 1, "La contraseña no puede estar en blanco");

  });

  let motor = (id, serial, mensaje) => {

    if (id.value.trim() === "") {
      msjError[serial].innerHTML = mensaje;
    } 
    
    else {
      msjError[serial].innerHTML = "";
    }
  }