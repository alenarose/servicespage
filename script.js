const services=document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.backgroundColor = '#ddd';
    });

    service.addEventListener('mouseleave', () => {
        service.style.backgroundColor = '#eee';
    });
});

const serviceCards = document.querySelectorAll('.card');

// Add hover effect to scale cards
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-11px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

       