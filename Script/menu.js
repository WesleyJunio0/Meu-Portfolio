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


/* responsividade do menu */

function telasMaiores(){
    const menu = document.querySelector('.display');
    const span = document.querySelector('#span1');
    const icon = document.querySelectorAll('.icons-dentro-do-menu ');
    
  if (window.innerWidth >= 768){
       menu.style.display = 'block';
       span.style.display = 'none';
       icon[0].style.display = 'none'
       icon[1].style.display = 'none'
       icon[2].style.display = 'none'
       icon[3].style.display = 'none'
  }
  else {
      menu.style.display = 'none';
      span.style.display = 'block';
       icon[0].style.display = 'block'
       icon[1].style.display = 'block'
       icon[2].style.display = 'block'
       icon[3].style.display = 'block'
  }

}


window.addEventListener('resize', telasMaiores);

window.addEventListener('load', telasMaiores);

 
