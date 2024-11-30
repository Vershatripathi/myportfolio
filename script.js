document.addEventListener('DOMContentLoaded', () => {
    // Example of smooth scroll for navigation links
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

