/**
 * Muestra el modal especificado y reinicia la carga del iframe del juego
 * si fue detenido previamente.
 * @param {string} modalId - El ID del modal 
 */
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

/**
 * Oculta el modal y detiene la ejecución del juego (silenciando el audio).
 * @param {string} modalId 
 */
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