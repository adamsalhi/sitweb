// Définition d'une fonction pour afficher une alerte lorsque vous cliquez sur une image
function handleClick() {
    alert("Vous avez cliqué sur l'image !");
  }
  
  // Ajout d'un gestionnaire d'événement click à chaque image
  var images = document.querySelectorAll('.image-item img');
  images.forEach(function(image) {
    image.addEventListener('click', handleClick);
  });
  
  // Exemple d'une autre fonction JavaScript pour effectuer une action spécifique
  function doSomething() {
    // Faites quelque chose ici...
  }
  
  if (page === 'Accueil') {
    // Code for Accueil page
    console.log("Accueil page is clicked");
} else if (page === 'Services') {
    // Code for Services page
    console.log("Services page is clicked");
} else if (page === 'À propos') {
    // Code for À propos page
    console.log("À propos page is clicked");
} else if (page === 'Contact') {
    // Code for Contact page
    console.log("Contact page is clicked");
}
