// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I've rejected affection", time: 6, end: 7 },
  { text: "For years and years", time: 7, end: 11 },
  { text: "Now I have it and damn it", time: 11, end: 14 },
  { text: "It's kind of weird", time: 14, end: 17 },
  { text: "He tells me I'm pretty", time: 17, end: 20 },
  { text: "Don't know how to respond", time: 20, end: 23 },
  { text: "I tell him that he's pretty too", time: 23, end: 26 },
  { text: "Can I say that? Don't have a clue", time: 26, end: 29 },
  { text: "With every passing moment", time: 29, end: 32 },
  { text: "I surprise myself", time: 32, end: 34 },
  { text: "I'm scared of flies", time: 34, end: 36 },
  { text: "I'm scared of guys", time: 36, end: 38 },
  { text: "Someone please help", time: 38, end: 42 },
  { text: "'Cause I think I've fallen", time: 42, end: 41 },
  { text: "In love this time", time: 41, end: 47 },
  { text: "I blinked and suddenly I had a Valentine", time: 47, end: 60 },
  { text: "", time: 55, end: 78 }, // 🎵 Silencio entre partes
  { text: "What if he's the last one I kiss?", time: 78, end: 83 },
  { text: "What if he's the only one I'll ever miss?", time: 83, end: 88 },
  { text: "Maybe I should run, I'm only 21", time: 88, end: 93 },
  { text: "I don't even know who I want to become", time: 93, end: 100 },
  { text: "", time: 97, end: 99 }, // 🎵 Silencio corto aquí
  { text: "I've lost all control of my heartbeat now", time: 104, end: 109 },
  { text: "Got caught in a romance with him somehow", time: 109, end: 114 },
  { text: "I still feel a shock through every bone", time: 114, end: 119 },
  { text: "When I hear an 'I love you'", time: 119, end: 123 },
  { text: "'Cause now I've got someone to lose", time: 123, end: 128 },
  { text: "The first one to ever like me back", time: 128, end: 133 },
  { text: "I'm seconds away from a heart attack", time: 133, end: 138 },
  { text: "How the hell did I fall in love this time?", time: 138, end: 143 },
  { text: "And honestly, I can't believe I get to call you mine", time: 143, end: 148 },
  { text: "I blinked and suddenly", time: 148, end: 152 },
  { text: "I had a Valentine", time: 152, end: 156 },
  { text: "(Valentine)", time: 156, end: 174 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);