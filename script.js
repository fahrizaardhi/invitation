// Intersection Observer to trigger fade-in animation and hide content when not in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the section is in view, add the fade-in class and make the content visible
      entry.target.classList.add('fade-in');
      entry.target.style.visibility = 'visible';  // Make the content visible
    } else {
      // When the section is not in view, remove the fade-in class and hide the content
      entry.target.classList.remove('fade-in');
      entry.target.style.visibility = 'hidden';  // Hide the content
    }
  });
}, {
  threshold: 0.5  // Trigger when 50% of the section is visible
});

const playAudioBtn = document.getElementById('play-audio-btn');
const audio = document.getElementById('audio');
const audioIcon = document.getElementById('audio-icon');

// Setel audio agar mute dan tidak diputar pada awalnya
audio.muted = true;
audio.pause();  // Pastikan audio tidak diputar pada awal
audioIcon.classList.add('fa-volume-mute');

// Fungsi untuk toggle audio
playAudioBtn.addEventListener('click', () => {
  if (audio.muted) {
    // Jika audio sedang mute, unmute dan play, lalu ganti ikon
    audio.muted = false;
    audio.play();
    audioIcon.classList.remove('fa-volume-mute');
    audioIcon.classList.add('fa-volume-up');
  } else {
    // Jika audio tidak mute, mute dan pause, lalu ganti ikon
    audio.muted = true;
    audio.pause();
    audioIcon.classList.remove('fa-volume-up');
    audioIcon.classList.add('fa-volume-mute');

  }
});
