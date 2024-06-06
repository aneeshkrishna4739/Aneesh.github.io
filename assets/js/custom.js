// custom.js

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            
            if (targetElement.style.display === 'block') {
                targetElement.style.display = 'none';
            } else {
                targetElement.style.display = 'block';
            }
        });
    });
});

