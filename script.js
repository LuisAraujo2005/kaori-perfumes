document.addEventListener('DOMContentLoaded', () => {

  // 1. Menu Mobile Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    // Altera o ícone de hambúrguer para 'X' ao abrir
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Fecha o menu ao clicar em qualquer item da navegação
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });

  // 2. Filtro de Produtos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.card-produto');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe ativa de todos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona classe ativa ao botão clicado
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Validação e Feedback do Formulário de Contato
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    
    // Exemplo visual de confirmação sem recarregar a página
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    
    contactForm.reset();
  });

  // 4. Efeito de interação ao adicionar ao carrinho
  const cartButtons = document.querySelectorAll('.btn-cart');
  
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produto adicionado à sua sacola!');
    });
  });

});