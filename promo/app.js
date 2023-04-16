const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    if (!isActive) {
      content.style.maxHeight = content.scrollHeight + "px";
      item.classList.add('active');
      icon.textContent = "+";
    } else {
      content.style.maxHeight = null;
      item.classList.remove('active');
      icon.textContent = "+";
    }
  });
});
