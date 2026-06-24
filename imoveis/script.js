// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Formulário de contato
const formContato = document.getElementById('formContato');
if (formContato) {
  formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Simular envio
    alert(`Obrigado ${nome}! Sua mensagem foi recebida. Entraremos em contato em breve.`);
    
    // Limpar formulário
    formContato.reset();
  });
}

// Botões "Saiba Mais"
document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
  btn.addEventListener('click', function() {
    const titulo = this.closest('.imovel-card').querySelector('h3').textContent;
    alert(`Você selecionou: ${titulo}\n\nUm de nossos consultores entrará em contato com você em breve.`);
  });
});

// Scroll ativo na navegação
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  
  document.querySelectorAll('section').forEach(section => {
    if (section.offsetTop <= scrollPosition + 100 && 
        section.offsetTop + section.offsetHeight > scrollPosition + 100) {
      const navLinks = document.querySelectorAll('.nav-menu a');
      navLinks.forEach(link => link.classList.remove('active'));
      
      const activeLink = document.querySelector(
        `.nav-menu a[href="#${section.id}"]"
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// Dark mode automático
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}
