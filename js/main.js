var Engert = function () {
  'use strict';

  var site = {};

  site = {
    /**
     * @function
     * @name init
     * @description This is the initializing function of the entire site
     */
    init: function () {
      site.mobNavInit();
      site.resizeInit();
    },
    mediaPhone: '(max-width: 30em)',
    mediaTablet: '(max-width: 60em)',
    mobNav: document.getElementById('openNav'),
    secNav: document.getElementById('secNav'),
    /**
     * @function
     * @name mobNavInit
     * @description Adds the event listener to the mobile nav button
     */
    mobNavInit: function () {
      site.mobNav.addEventListener('click', site.mobNavAction, false);
    },
    /**
     * @function
     * @name mobNavAction
     * @description mobile nav open and closing function.
     */
    mobNavAction: function () {
      site.mobNav.classList.toggle('open');
      site.secNav.classList.toggle('open');
    },
    /*----------*\
      Resizing
    \*----------*/
    resizeInit: function () {
      window.addEventListener('resize', site.resizeAction, false);
    },
    resizeAction: function () {
      var mobNavO = site.mobNav.classList.contains('open'),
        secNavO = site.secNav.classList.contains('open');
      if (!window.matchMedia(site.mediaPhone).matches && mobNavO && secNavO) {
        console.log("it's all bad!");
        site.mobNavAction();
      }
    }
  };

  return site;
};

var engert = new Engert();

engert.init();