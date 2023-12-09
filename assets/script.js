// Dark mode
var icon1 = document.getElementById("light-btn1");

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

var icon2 = document.getElementById("light-btn2");
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