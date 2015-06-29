(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
  app.token = null;
  app.device = null;

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  app.addEventListener('dom-change', function() {

  });

  /* Clear the app state i.e. token and device information */
  app.clearData = function() {
    app.token = null;
    app.device = null;
  };

  window.addEventListener('WebComponentsReady', function() {

  });

})(document);
