document.addEventListener('DOMContentLoaded', () => {
  const scrollToForm = () => {
    document.getElementById('interest-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  document.getElementById('support-button').addEventListener('click', scrollToForm);
});