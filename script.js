// Include the Tone.js library
// You need to include the Tone.js library in your HTML file before this script

// Create a new synth
const synth = new Tone.Synth().toDestination();

// Map key codes to notes
const keyMap = {
  "a": "C4",
  "w": "C#4",
  "s": "D4",
  "e": "D#4",
  "d": "E4",
  "f": "F4",
  "t": "F#4",
  "g": "G4",
  "y": "G#4",
  "h": "A4",
  "u": "A#4",
  "j": "B4",
  "k": "C5",
  "o": "C#5",
  "l": "D5",
  "p": "D#5",
  ";": "E5",
};

// Function to play a note
function playNote(note) {
  synth.triggerAttackRelease(note, "8n");
}

// Add event listeners for key press and release
document.addEventListener("keydown", (event) => {
  const note = keyMap[event.key];
  if (note) {
    playNote(note);
    document.querySelector(`.${note}`).classList.add("active");
  }
});

document.addEventListener("keyup", (event) => {
  const note = keyMap[event.key];
  if (note) {
    document.querySelector(`.${note}`).classList.remove("active");
  }
});
