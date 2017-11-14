document.addEventListener("DOMContentLoaded", () => {

// variables
  const signIn = document.querySelector('.signin');
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector('button.close');
  const inputs = document.querySelectorAll('input');
  const submitButton = document.querySelector('button.submit');
  const userField = document.querySelector('#user');
  const passField = document.querySelector('#pass');
  const form = document.querySelector('form');



// modal effects
  signIn.addEventListener('click', () => {
    modal.style.display = "initial";
  });

   closeModal.addEventListener('click', () => {
     modal.style.display = "none";
   });

   form.addEventListener('click', (e) => {
    modal.style.display = "none";
   });

   for (input of inputs) {
     input.addEventListener('click', (e) => {
       e.stopPropagation();
     });
   };

// modal form effects
   submitButton.addEventListener('click', (e) => {
      e.stopPropagation();
     for (let input of inputs) {
       input.className = "error";
      };
   });

   userField.addEventListener('mouseover', () => {
     userField.className = "";
   });

   passField.addEventListener('mouseover', () => {
    passField.className = "";
   });


});
