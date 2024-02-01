// document.getElementById('loveForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Get the values of the input fields
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
    
//     // Calculate the love score (a random number between 1 and 100)
//     var loveScore = Math.floor(Math.random() * 100) + 1;
    
//     // Display the love score on the page
//     var loveScoreDisplay = document.getElementById('loveScoreDisplay');
//     if (loveScore > 70) {
//         loveScoreDisplay.textContent = "Your love score is " + loveScore + "% - You love each other as deep as the ocean.";
//     } else {
//         loveScoreDisplay.textContent = "Your love score is " + loveScore + "%";
//     }
// });
document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the values of the input fields
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    
    // Calculate the love score (a random number between 1 and 100)
    var loveScore = Math.floor(Math.random() * 100) + 1;
    
    // Display the love score on the page
    var loveScoreDisplay = document.getElementById('loveScoreDisplay');
    if (loveScore > 70) {
        loveScoreDisplay.textContent = "Your love score is " + loveScore + "% - You love each other as deep as the ocean.";
    } else {
        loveScoreDisplay.textContent = "Your love score is " + loveScore + "%";
    }

    // Generate confetti
    generateConfetti();
});
function generateConfetti() {
    for (var i = 0; i < 50; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.innerHTML = '&#10084;'; // Unicode for a heart icon
        confetti.style.left = Math.random() * (window.innerWidth - 20) + 'px'; // Adjust to ensure confetti stays within window
        confetti.style.top = Math.random() * (window.innerHeight - 20) + 'px'; // Adjust to ensure confetti stays within window
        confetti.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(confetti);
    }
    
    // Remove confetti after 4 seconds (adjust as needed)
    setTimeout(function() {
        var confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });
    }, 2000); // 4000 milliseconds = 4 seconds
}




