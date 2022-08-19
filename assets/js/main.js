
(function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
      return;
    }
  
    /**
     * @function darkmode
     * @summary: changes the theme to 'dark mode' and save settings to local stroage.
     * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
     */
    function darkMode() {
      document.getElementById('nav').className =
      document.getElementById('nav').className.replace('bg-light', 'bg-black');
      document.getElementById('footer').className =
      document.getElementById('footer').className.replace('bg-light', 'bg-black');
      document.getElementById('chart').className =
      document.getElementById('chart').className.replace('bg-light', 'bg-black');
      document.getElementById('img-dark').classList.remove('none-active')
      document.getElementById('img-light').classList.add('none-active');
      var all = document.getElementsByClassName('form-check');
        for (var i = 0; i < all.length; i++) {
          all[i].style.color = 'white';
        }
      document.querySelectorAll('.bg-light').forEach((element) => {
        element.className = element.className.replace(/-light/g, '-dark');
      });
    

      document.querySelectorAll('.text-black').forEach((element) => {
        element.className = element.className.replace('text-black', 'text-light');
      });

      Array.from(document.getElementsByTagName("a")).forEach(e => {  
        e.style.setProperty("color", "white");
      });
  
      // set light switch input to true
      if (!lightSwitch.checked) {
        lightSwitch.checked = true;
      }
      localStorage.setItem('lightSwitch', 'dark');
    }
  
    /**
     * @function lightmode
     * @summary: changes the theme to 'light mode' and save settings to local stroage.
     */
    function lightMode() {
      document.querySelectorAll('.bg-dark').forEach((element) => {
        element.className = element.className.replace(/-dark/g, '-light');
      });

      document.querySelectorAll('.bg-black').forEach((element) => {
        element.className = element.className.replace(/-black/g, '-light');
      });


      document.querySelectorAll('.text-light').forEach((element) => {
        element.className = element.className.replace('text-light', 'text-black');
      });

      document.getElementById('img-light').classList.remove('none-active');
      document.getElementById('img-dark').classList.add('none-active')

      var all = document.getElementsByClassName('form-check');
        for (var i = 0; i < all.length; i++) {
          all[i].style.color = 'black';
        }
      
      Array.from(document.getElementsByTagName("a")).forEach(e => {
              
        e.style.setProperty("color", "black");

      });
      if (lightSwitch.checked) {
        lightSwitch.checked = false;
      }
      localStorage.setItem('lightSwitch', 'light');
    }
  
    /**
     * @function onToggleMode
     * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
     */
    function onToggleMode() {
      if (lightSwitch.checked) {
        darkMode();
      } else {
        lightMode();
      }
    }
  
    /**
     * @function getSystemDefaultTheme
     * @summary: get system default theme by media query
     */
    function getSystemDefaultTheme() {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        return 'dark';
      }
      return 'light';
    }
  
    function setup() {
      var settings = localStorage.getItem('lightSwitch');
      if (settings == null) {
        settings = getSystemDefaultTheme();
      }
  
      if (settings == 'dark') {
        lightSwitch.checked = true;
      }
  
      lightSwitch.addEventListener('change', onToggleMode);
      onToggleMode();
    }
  
    setup();
  })();