var small_menu = document.querySelector('.toggle_menu') ;
var menu = document.querySelector('.menu') ;
small_menu.onclick = function () {
   small_menu.classList.toggle('active') ;
   menu.classList.toggle('responsive') ;
}
// Script pour gérer les interactions du chatbot
document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('chatbotForm');
   const questionInput = document.getElementById('question');
   const reponseElement = document.getElementById('reponse');

   form.addEventListener('submit', function (e) {
       e.preventDefault();

       const question = questionInput.value.trim().toLowerCase(); // Récupère la question de l'utilisateur
       let reponse;

       if (question.includes("bonjour") || question.includes("salut") || question.includes("hi")) {
           reponse = "Bonjour ! Comment puis-je vous aider ?";
       } else if (question.includes("menu")) {
           reponse = "Vous pouvez consulter notre menu dans la section 'Nos Gâteaux'.";
       } else if (question.includes("prix")) {
           reponse = "Nos prix varient selon le gâteau. Consultez la section 'Nos Gâteaux' pour plus d'informations.";
       } else if (question.includes("contact")) {
           reponse = "Vous pouvez nous contacter par email ou via notre formulaire de commande.";
       } else {
           reponse = "Je suis désolé, je n'ai pas compris votre question. Veuillez réessayer.";
       }

       // Affiche la réponse
       reponseElement.textContent = reponse;

       // Vide le champ de saisie
       questionInput.value = "";
   });
});
//formulaire
var nom = document.getElementById("nom") ;
var email = document.getElementById("email") ;
var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const numbers = [1,2,3,4,5,6,7,8,9] ;
var numTel = document.getElementById("numTel") ;
function verifier() {
   if ( nom.value.length == 0) {
      nom.style.outline = "1px solid red" ;
   }
   if (!expressionReguliere.test(email.value))  {
      email.style.outline = "1px solid red" ;
   }
   for (var i = 0 ; i< numbers.length ; i++) {
      if(numTel != numbers[i].toString() || numTel.value.length == 0) {
         numTel.style.outline = "1px solid red" ;
      }
   }
}

// Gestion des boutons "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');

        // Récupérer le panier existant ou créer un nouveau
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Ajouter le produit au panier
        cart.push({ name: productName, price: productPrice });

        // Mettre à jour le localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} a été ajouté au panier.`);
    });
});

// Si on est sur la page panier.html, afficher les articles
if (window.location.pathname.includes('panier.html')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length > 0) {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} DT`;
            cartItemsContainer.appendChild(li);
        });
    } else {
        cartItemsContainer.textContent = "Votre panier est vide.";
    }
}
