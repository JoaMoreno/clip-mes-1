var respuesta1 = document.getElementById("respuesta");
var intentosText = document.getElementById("intentos");
var info = document.getElementById("info");
const element = document.getElementById("form-1");
var intentos = 4;
element.addEventListener("submit", (event) => {
  event.preventDefault();
  const respuestas = [
    "Capitán América",
    "capitán américa",
    "Capitan America",
    "capitan america",
  ];
  let esCorrecta = respuestas.includes(respuesta1.value);
  if (intentos > 1 || esCorrecta) {
    if (esCorrecta) {
      info.className = "text-success text-center";
      info.innerHTML = "Correcto!";
      intentos = 4;
    } else {
      info.className = "text-danger text-center";
      intentos--;
      if (intentos == 3) {
        info.innerHTML = "Es un Capitán!";
      }
      if (intentos == 1) {
        info.innerHTML = "Y es de América!";
      }
    }
  } else {
    info.innerHTML = "Perdiste!";
    intentos = 4;
  }
  intentosText.innerHTML = intentos;
  respuesta1.value = "";
});
