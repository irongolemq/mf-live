try {
  const constraints = { "audio": true };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  const audioElement: HTMLAudioElement | null = document.querySelector("audio#localMic");
  if (audioElement) {
    audioElement.srcObject = stream;
  } else {
    alert("Couldn't get audio element.")
  }
} catch {
  alert("Couldn't get media stream.");
}