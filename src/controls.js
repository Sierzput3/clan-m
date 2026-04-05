// src/controls.js

// Function to handle player movement
function movePlayer(direction) {
    switch (direction) {
        case 'up':
            // Code to move the player up
            console.log('Moving up');
            break;
        case 'down':
            // Code to move the player down
            console.log('Moving down');
            break;
        case 'left':
            // Code to move the player left
            console.log('Moving left');
            break;
        case 'right':
            // Code to move the player right
            console.log('Moving right');
            break;
        default:
            console.log('Invalid direction');
    }
}

// Event listeners for keyboard input
window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            movePlayer('up');
            break;
        case 's':
        case 'ArrowDown':
            movePlayer('down');
            break;
        case 'a':
        case 'ArrowLeft':
            movePlayer('left');
            break;
        case 'd':
        case 'ArrowRight':
            movePlayer('right');
            break;
        default:
            break;
    }
});
