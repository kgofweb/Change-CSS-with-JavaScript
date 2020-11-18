// DOM element
const nav = document.querySelector('.navbar');
const jumb = document.querySelector('.jumbotron');

// Jumb height
const jumHeight = jumb.clientHeight;

// Scroll listen
window.addEventListener('scroll', handleScroll);

function handleScroll() {
   // Scroll traveled
   const scroll = window.scrollY;
   
   if(scroll >= jumHeight) {
      nav.style.position = 'fixed';
      nav.style.top = 0;
      nav.style.width = '100%';
      
      // Add class
      nav.classList.add('scroll');
   } else {
      nav.style.position = 'static';
      nav.classList.remove('scroll');
   }
}


// Ecouter le scroll
// Recuperer la quantité de scroll parcourue
// Condition: Si on depasse une certaine quantité de scroll parcourue, le css de la nav change