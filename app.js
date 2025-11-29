
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    let iframe = modal.querySelector('iframe');
    
    if (iframe) {
      iframe.src = "juego/index.html"; 
    }
    
    modal.style.display = 'flex'; 
  }
}


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
   
    modal.style.display = 'none'; 
    
    let iframe = modal.querySelector('iframe');
    
    if (iframe) {
        iframe.src = "about:blank"; 
    }
  }
}