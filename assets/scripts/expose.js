window.addEventListener('DOMContentLoaded', init);

function init() {
  const imgElement = document.querySelector('img');
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  const hornData = {
    'air-horn': {
      img: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      img: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      img: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3'
    }
  };

  hornSelect.addEventListener('change', function () {
    const selectedHorn = hornData[this.value];
    if (selectedHorn) {
      imgElement.src = selectedHorn.img;
      imgElement.alt = `Image of ${this.value}`;
      audioElement.src = selectedHorn.sound;
    }
  });

  volumeSlider.addEventListener('input', function () {
    const volume = parseInt(this.value, 10);
    updateVolumeIcon(volume);
    audioElement.volume = volume / 100.0;
  });

  function updateVolumeIcon(volume) {
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Mute';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Low volume';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Medium volume';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'High volume';
    }
  }

  playButton.addEventListener('click', function () {
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    audioElement.play();
  });
}
