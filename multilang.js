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
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    
    // Seleccionar l'opcio guardada al deplegable, si no, cada cop que actualitza la pagina, es posa el primer
    var mySelect = document.getElementById('languageSelect');

    // mySelect.selectedIndex = 2;
    for(var i, j = 0; i = mySelect.options[j]; j++) {
        if(i.value == userPreferredLanguage) {
            mySelect.selectedIndex = j;
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
