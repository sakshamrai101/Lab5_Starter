window.addEventListener('DOMContentLoaded', init);

function init() {
  const imgElement = document.querySelector('img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    // Clear existing options
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function () {
    const textToSpeak = textArea.value;
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }

    if (textToSpeak !== '') {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
      utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

      utterance.onstart = function () {
        imgElement.src = 'assets/images/smiling-open.png';  
      };

      utterance.onend = function () {
        imgElement.src = 'assets/images/smiling.png';  
      };

      utterance.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
      };

      synth.speak(utterance);
    }
  });
}
