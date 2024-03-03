function setCustomSpeed(video, speed) {
    video.playbackRate = speed;
}

// Find HTML5 video elements
let videos = document.getElementsByTagName('video');

// Add speed control functionality
for (let video of videos) {
    // You'll likely want to add UI elements, which we'll cover in the next section
    video.addEventListener('click', () => { 
        let newSpeed = prompt("Enter desired speed (e.g., 1.5, 0.8):");
        if (newSpeed) {
            setCustomSpeed(video, parseFloat(newSpeed));
        }
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setSpeed") {
        for (let video of videos) {
            setCustomSpeed(video, request.speed);
        }
    }
});
