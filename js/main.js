document.addEventListener('DOMContentLoaded', () => {
  // Find the hamburger icon and the navigation link list in the HTML
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Listen for when someone clicks or taps the hamburger icon
  hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on and off
    navLinks.classList.toggle('active');
  });
});
