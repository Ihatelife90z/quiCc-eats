// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  if (logo) {
    // Replace the logo with your GIF
    logo.src = 'https://images.squarespace-cdn.com/content/v1/54a865dbe4b0d05e1aaccf1b/1558550559176-UNMGF9JVX2JPXGN1PHVC/giphy.gif';
    
    // Optional styling for the logo
    logo.style.width = '200px';
    logo.style.height = 'auto';
    logo.style.borderRadius = '12px'; // smooth corners
    logo.style.display = 'block';
    logo.style.margin = '0 auto'; // center horizontally
  } else {
    console.error('Logo element not found!');
  }
});
