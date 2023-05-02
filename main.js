let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Actualmente estudio Ingeniería en Tecnologías y Soluciones de Negocio')
  .pauseFor(200)
  .deleteChars(10)
  .start();
