//HIDE-SHOW HEADER
let lastScrollTop = 0;
const header = document.getElementById('header-hide');
const dropdown = document.getElementById('dropdown');
const menuIcon = document.getElementById('menu-icon'); 
const content = document.getElementById('dropdown-content');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(!dropdown.open){//the header should stay when the dropdown is opened
      if (scrollTop > lastScrollTop && scrollTop > 500) {
          // Scrolling down
          header.style.top = `-${header.offsetHeight}px`;
      } else {
          // Scrolling up
          header.style.top = '0';
      }
    }
    lastScrollTop = scrollTop;
});

//DISPLAY DROPDOWN ON HOVER
document.addEventListener("DOMContentLoaded", function() {

  menuIcon.addEventListener("mouseenter", function() {
    if(!dropdown.open){
      dropdown.setAttribute("open", "open");
    }
  });
  content.addEventListener("mouseleave", function() {
    if(dropdown.open){
      dropdown.removeAttribute("open");
    }
  });
});




// Dark mode
const icon1 = document.getElementById("light-btn1");

icon1.onclick = function () {
  const userPreferredLanguage = localStorage.getItem('lightMode');
  if(userPreferredLanguage == 'on'){
    localStorage.setItem('lightMode', 'off');
    location.reload();
    document.body.classList.add("night-mode");
    icon1.src = "/icons/sun.png";
    icon2.src = "/icons/sun.png";
  } else {
    localStorage.setItem('lightMode', 'on');
    location.reload();
    document.body.classList.remove("night-mode");
    icon1.src = "/icons/moon.png";
    icon2.src = "/icons/moon.png";
  }
}

const icon2 = document.getElementById("light-btn2");
icon2.onclick = function () {
  const userPreferredLanguage = localStorage.getItem('lightMode');
  if(userPreferredLanguage == 'on'){
    localStorage.setItem('lightMode', 'off');
    location.reload();
    document.body.classList.add("night-mode");
    icon1.src = "/icons/sun.png";
    icon2.src = "/icons/sun.png";
  } else {
    localStorage.setItem('lightMode', 'on');
    location.reload();
    document.body.classList.remove("night-mode");
    icon1.src = "/icons/moon.png";
    icon2.src = "/icons/moon.png";
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('lightMode');
  if(userPreferredLanguage == 'on'){
    document.body.classList.add("night-mode");
    icon1.src = "/icons/sun.png";
    icon2.src = "/icons/sun.png";
  } else if(userPreferredLanguage == 'off') {
    document.body.classList.remove("night-mode");
    icon1.src = "/icons/moon.png";
    icon2.src = "/icons/moon.png";
  }
});





//ANIMATED SCROLL INTO VIEW
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('translate-animation');
    }
  });
});

//Get all items we want to animate
const animatedItem = document.querySelectorAll('.animated, .link');
// Loop over the elements and add each one to the observer
animatedItem.forEach((element) => observer.observe(element));