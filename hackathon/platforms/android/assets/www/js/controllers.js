angular.module('grupoHZIApp.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            console.log(data);
            $state.go('app.perfil');
        }).error(function(data) {
            console.log(data);
            $state.go('app.perfil');
            /*var alertPopup = $ionicPopup.alert({
                title: 'Falha no login',
                template: 'Usuário ou senha incorretos'
            });*/
        });
    }
})

.controller('AppCtrl', function($scope, $state) {
    $scope.data = {};
 
    $scope.app = function() {
    }
})

.controller('PerfilCtrl', function($scope, $state) {
    $scope.data = {};
 
    $scope.perfil = function() {
    }
})

.controller('EnviarArquivosCtrl', function($scope, $state) {
    $scope.data = {};
 
    $scope.enviar_arquivos = function() {
    }
})



