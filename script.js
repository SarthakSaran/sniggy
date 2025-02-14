document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; // Redirect to yes.html
});

// This is the "No" button hover effect (moves the button)
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});