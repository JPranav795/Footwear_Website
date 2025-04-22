document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        productCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
      image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.innerHTML = `<img src="${image.src}" alt="${image.alt}"><span class="close-lightbox">×</span>`;
        document.body.appendChild(overlay);
        overlay.querySelector('.close-lightbox').addEventListener('click', () => {
          overlay.remove();
        });
      });
    });
  });
  
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
  
    if (name && email && message) {
      formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      formMessage.style.color = '#d4af37';
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#ff0000';
    }
  }