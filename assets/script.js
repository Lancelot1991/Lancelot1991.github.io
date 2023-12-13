// ----------------------------------------------------------------
// HEADER/MENU ANIMATIONS AND FUNCTIONALITY
// ----------------------------------------------------------------
let lastScrollTop = 0;
const header = document.getElementById("header-hide");
const icon = document.getElementById("icon-wrap");
const dropdownMenu = document.getElementById("dropdown-wrap");
const subMenues = document.querySelectorAll(".sub-menu");

//HIDE-SHOW
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //the header should stay fixed when the dropdown is open
  if (!dropdownMenu.classList.contains("display") || window.innerWidth > 1000) {
    if (scrollTop > lastScrollTop && scrollTop > 500) {
      // Scrolling down
      header.style.top = `-${header.offsetHeight}px`;
      //when dropdown, the icon's position is also fixed. This allows for a different trasition effects.
      icon.style.top = `-${header.offsetHeight}px`;
    } else {
      // Scrolling up
      header.style.top = "0";
      icon.style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});

//OPEN DROPDOWN ON CLICK
icon.onclick = function () {
  dropdownMenu.classList.toggle("display");
};

//DISPLAY SUBMENU ON HOVER
subMenues.forEach((subMenu) => {
  document.addEventListener("DOMContentLoaded", function () {
    subMenu.addEventListener("mouseenter", function () {
      // WE DON'T WANT TO OPEN THE SUBMENU ON HOVER WITHIN THE DROPDOWN. This is the same value as the dropdown breakpoint
      if (!subMenu.open && window.innerWidth > 1000) {
        subMenu.setAttribute("open", "open");
      }
    });
    subMenu.addEventListener("mouseleave", function () {
      // WE DON'T WANT TO OPEN THE SUBMENU ON HOVER WITHIN THE DROPDOWN
      if (subMenu.open && window.innerWidth > 1000) {
        subMenu.removeAttribute("open");
      }
    });
  });
});

// ----------------------------------------------------------------
// DARK MODE
// ----------------------------------------------------------------
const icon1 = document.getElementById("light-btn1");

icon1.onclick = function () {
  const userPreferredLanguage = localStorage.getItem("lightMode");
  if (userPreferredLanguage == "on") {
    localStorage.setItem("lightMode", "off");
    location.reload();
    document.body.classList.add("night-mode");
    icon1.src = "/icons/sun.png";
  } else {
    localStorage.setItem("lightMode", "on");
    location.reload();
    document.body.classList.remove("night-mode");
    icon1.src = "/icons/moon.png";
  }
};
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("lightMode");
  if (userPreferredLanguage == "on") {
    document.body.classList.add("night-mode");
    icon1.src = "/icons/sun.png";
    // icon2.src = "/icons/sun.png";
  } else if (userPreferredLanguage == "off") {
    document.body.classList.remove("night-mode");
    icon1.src = "/icons/moon.png";
    // icon2.src = "/icons/moon.png";
  }
});

// ----------------------------------------------------------------
//ANIMATED SCROLL INTO VIEW
// ----------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("translate-animation");
    }
  });
});
//Get all items we want to animate
const animatedItem = document.querySelectorAll(".animated, .link");
// Loop over the elements and add each one to the observer
animatedItem.forEach((element) => observer.observe(element));
