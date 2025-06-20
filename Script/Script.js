     /* Script das animações */



     /*script da linha do titulo Meus principais Projetos */
     const texto = document.querySelector('.texto');
    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animar');
          observer.unobserve(entry.target); // Para a animação rodar só uma vez
        }
      });
    }, { threshold: 1 }); // Anima quando 100% do elemento está visível

    observer1.observe(texto);
 

 
 
 
 /* script das animações dos Projetos principais */
 const observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('active');

      }
    });
  }, {

    threshold: 0.1

  });

  document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-left_p, .slide-in-left_p2, .slide-in-right_p, .slide-in-right_p2').forEach(el => {

    observer2.observe(el);
    
  });


