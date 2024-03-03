const speedSlider = document.getElementById('speedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeed');

// Update speed display initially
currentSpeedDisplay.textContent = speedSlider.value + 'x'; 

// Update speed when slider changes
speedSlider.addEventListener('input', () => {
    let speed = parseFloat(speedSlider.value);
    currentSpeedDisplay.textContent = speed + 'x';

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
    });
});
