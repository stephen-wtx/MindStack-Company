document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a, #menu-mobile a');
  const sections = document.querySelectorAll('section');
  let activeSectionId = null;

  const removeActive = () => navLinks.forEach(link => link.classList.remove('active'));
  const activateLinks = (id) => {
    if (activeSectionId === id) return;
    activeSectionId = id;
    removeActive();
    document.querySelectorAll(`a[href="#${id}"]`).forEach(link => link.classList.add('active'));
  };

  const observer = new IntersectionObserver((entries) => {
    let visibleSection = null;
    let maxRatio = 0;

    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        visibleSection = entry.target;
      }
    });

    if (visibleSection) activateLinks(visibleSection.getAttribute('id'));
  }, {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  });

  sections.forEach(section => section.id && observer.observe(section));

  const activateInitial = () => {
    if (window.scrollY < 100 && sections[0]) activateLinks(sections[0].id);
  };

  let resizeTimeout;
  window.addEventListener('load', activateInitial);
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(activateInitial, 200);
  });
});