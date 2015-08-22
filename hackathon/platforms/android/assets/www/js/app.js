angular.module('grupoHZIApp', ['ionic', 'ngCordova', 'grupoHZIApp.controllers', 'grupoHZIApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(function($ionicPlatform, $cordovaTouchID) {
  $cordovaTouchID.checkSupport().then(function() {
    $cordovaTouchID.authenticate("Please authenticate with your fingerprint!").then(function() {
        alert("You are a trusty mate! Come in and find out...")
      }, function (error) { // 4
        // Hopefully, there will be a better callback code in future releases
        if (error == "Fallback authentication mechanism selected.") {
            // User selected to enter a password 
        } else {
            alert("Sorry, we are not able to grant access.");
        }
      });
  }, function (error) { // 5
      console.log("TouchID: "+error); // TouchID not supported
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.perfil', {
    url: '/perfil',
    views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
  })

  .state('app.enviar_arquivos', {
    url: '/enviar_arquivos',
    views: {
        'menuContent': {
          templateUrl: 'templates/enviar_arquivos.html',
          controller: 'EnviarArquivosCtrl'
        }
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
