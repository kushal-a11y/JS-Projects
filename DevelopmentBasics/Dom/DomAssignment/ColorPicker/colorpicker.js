function colorChange(event) {
    const div = document.querySelector('#square-box'); // Target the div to change color
    const color = event.target.style.backgroundColor; // Get color of clicked button
    div.style.backgroundColor = color; // Change div's background color to the button's color
}
