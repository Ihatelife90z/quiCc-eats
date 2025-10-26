window.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  
  if (logo) {
    logo.src = 'https://images.squarespace-cdn.com/content/v1/54a865dbe4b0d05e1aaccf1b/1558550559176-UNMGF9JVX2JPXGN1PHVC/giphy.gif';
    logo.style.width = '200px';
    logo.style.height = 'auto';
    logo.style.borderRadius = '12px'; // optional: smooth corners
  } else {
    console.error('Logo element not found!');
  }
});