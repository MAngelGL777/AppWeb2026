document.getElementById("saludo").innerHTML = "Bienvenido a TIID JS";

function myFunction() {
  document.getElementById("saludo").innerHTML = "KirkSaludado.";
}

console.log("Hola mundo!");
console.log(2+2);
console.debug("Esto es un mensaje de depuración");
console.info("Esto es un mensaje informativo");
console.warn("Esto es una advertencia");
console.error("Esto es un mensaje de error");
console.group("Grupo de mensajes");

console.log("UA: ", navigator.userAgent);
console.log("Idioma: ", navigator.language);
console.log("Plataforma: ", navigator.platform);
console.log("Cookies habilitadas: ", navigator.cookieEnabled);
console.log("Online: ", navigator.onLine);
console.groupEnd();