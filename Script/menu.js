function navegar(valor) {
  const menu = document.querySelector('.display');
  const tag1 = document.getElementById('span1'); 
  const tag2 = document.getElementById('span2'); 

    if(valor === 'span1') {
        tag1.style.display ='none';
        tag2.style.display = 'block';
    } 
    else {
        tag2.style.display = 'none';
        tag1.style.display = 'block';
        
    }
    

    


  if (menu.style.display === 'none' || menu.style.display === '' ) {
        menu.style.display = 'block';
    
  } else {
    menu.style.display = 'none';
  }
}
