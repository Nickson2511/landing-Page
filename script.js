document.addEventListener('DOMContentLoaded', () => {
  // VARIABLES
  const sections = document.querySelectorAll('section');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');

  const handleActiveNav = () => {
    // CURRENT SCROLL POS.
    let scrollCurrentPos = window.pageYOffset;

    // GET EACH SECTION HEIGHT , TOP & ID
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 56;
      const sectionId = section.getAttribute('id');

      // CHECK IF SECTION LIES WITHIN CURRENT SCROLL POSITION
      if (
        scrollCurrentPos >= sectionTop &&
        scrollCurrentPos <= sectionTop + sectionHeight
      ) {
        //   ADD CLASS ACTIVE TO LINK
        document
          .querySelector('nav ul a[href*=' + sectionId + ']')
          .classList.add('active');
      } else {
        //   REMOVE CLASS ACTIVE TO LINK
        document
          .querySelector('nav ul a[href*=' + sectionId + ']')
          .classList.remove('active');
      }
    });
  };

  const handleToggleNav = () => {
    toggleBtn.classList.toggle('active');
    navList.classList.toggle('active');
  };

  // EVENT LISTENERS
  window.addEventListener('scroll', handleActiveNav);
  toggleBtn.addEventListener('click', handleToggleNav);
});
