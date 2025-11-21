// Récupération des données du DOM.

let dialogs = document.querySelectorAll("dialog");

let openButtons = document.querySelectorAll("dialog + button");

let closeButtons=document.querySelectorAll("dialog .close-btn");


// Association des modals aux boutons d'ouverture et de fermeture (X).

for (let i = 0; i < dialogs.length; i++){
  
  let dialog = dialogs[i];
  let openBtn = openButtons[i];
  let closeBtn = closeButtons[i];

  // Ouvrir le modal.

  openBtn.addEventListener("click", () => {
    dialog.showModal();
  });


   // Fermer via le bouton "×"
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

 

}

