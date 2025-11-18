// This script runs after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Website loaded successfully!");

    // You can add more interactivity here.
    // For example, let's make the nav links smooth-scroll
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Stop the default "jump"
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Make it scroll smoothly
            });
        });
    });

});
