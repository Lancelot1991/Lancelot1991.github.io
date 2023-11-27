 // Function to fetch language data
  async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
  }
  
  // Function to set the language preference
  function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
  }
  
  // Function to update content based on selected language
  function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = langData[key];
    });


  }
  
  // Function to change language
  async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
  }

  // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'ca';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    
    // Seleccionar l'opcio guardada al deplegable, si no, cada cop que actualitza la pagina, es posa el primer
    var mySelect1 = document.getElementById('languageSelect1');
    var mySelect2 = document.getElementById('languageSelect2');

    // mySelect.selectedIndex = 2;
    for(var i, j = 0; i = mySelect1.options[j]; j++) {
        if(i.value == userPreferredLanguage) {
            mySelect1.selectedIndex = j;
            mySelect2.selectedIndex = j;
            break;
    }}

    // aquesta part amaga i ensenya el HTML que no funciona be amb JSON
    const languageSections = document.querySelectorAll('[lang]')
    languageSections.forEach(element => {
      element.classList.add('hidden');
    });

    languageSections.forEach(element => {
      if(userPreferredLanguage == element.getAttribute('lang')){
        element.classList.remove('hidden');
      }
    });

  });


// Dark mode
// var icon = document.getElementById("light-mode");

// icon.onclick = function () {
//   if(document.body.classList.contains("night-mode")){
//     document.body.classList.remove("night-mode");
//     icon.src = "/icons/moon.png";

//   } else {
//     document.body.classList.add("night-mode");
//     icon.src = "/icons/sun.png";
//   }
// }



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