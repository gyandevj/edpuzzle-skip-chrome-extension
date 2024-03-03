document.getElementById('applyButton').addEventListener('click', () => {
    let speedInput = document.getElementById('speedInput');
    let speed = parseFloat(speedInput.value);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
    });
});
