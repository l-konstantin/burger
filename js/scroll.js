(function() {
  const container = document.querySelector('.js-scroll-content');
  const items = Array.from(container.querySelectorAll('.js-scroll-item'));
  let itemsNumber = items.length;
  const navLinks = Array.from(document.querySelectorAll('.js-scroll-link'));
  let currentItemIndex = 0;
  let scroll = true;

  const moveSection = index => {
    let positionTop = (-index * 100) + '%';
    container.style.top = positionTop;
  };

  const setLocation = index => window.location = `#${items[index].id}`;

  // Set strart params
  container.style.top = 0;
  setLocation(currentItemIndex);
  itemsNumber--;
  
  // Scrolling section by navigation.
  navLinks.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      let sectionID = element.getAttribute('href').slice(1);

      currentItemIndex = items.findIndex(element => {
        return element.id === sectionID;
      });

      moveSection(currentItemIndex);
    });
  });

  // Scrolling sections by mouse/touchpad.
  window.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();

    let direction = event.deltaY;

    if (scroll) {
      if (direction > 0 && currentItemIndex < itemsNumber) {
        currentItemIndex++;
        scroll = false;
      } else if (direction < 0 && currentItemIndex !== 0) {
        currentItemIndex--;
        scroll = false;
      }
      moveSection(currentItemIndex);
    }

  });

  container.addEventListener('transitionend', () => {
    setTimeout(() => scroll = true, 300);
    setLocation(currentItemIndex);
  });

})();