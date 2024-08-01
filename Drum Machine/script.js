const powerButton = document.getElementById("power-button");
const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const volumeSlider = document.getElementById("volume");
let powerOn = true;

powerButton.addEventListener("click", togglePower);

volumeSlider.addEventListener("input", () => {
  setVolume(volumeSlider.value);
});

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    if (powerOn) {
      const audio = pad.querySelector("audio");
      playAudio(audio, pad.id);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const pad = document.getElementById(key);
  if (powerOn && pad) {
    const audio = pad.querySelector("audio");
    playAudio(audio, key);
  }
});

function playAudio(audio, key) {
  audio.currentTime = 0; // Reset audio to beginning
  audio.volume = volumeSlider.value; // Set audio volume
  audio.play();
  display.textContent = `Playing: ${key}`;
}

function setVolume(volume) {
  const audioClips = document.querySelectorAll("audio");
  audioClips.forEach((audioClip) => {
    audioClip.volume = volume;
  });
}

function togglePower() {
  powerOn = !powerOn;
  const slider = powerButton.querySelector(".slider");
  slider.classList.toggle("power-off", !powerOn);
}
