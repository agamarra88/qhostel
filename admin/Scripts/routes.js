myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "Templates/home.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('nosotros', {
            url: "/nosotros",
            templateUrl: "Templates/nosotros.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('tarifas', {
            url: "/tarifas",
            templateUrl: "Templates/tarifas.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('promociones', {
            url: "/promociones",
            templateUrl: "Templates/promociones.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('bar', {
            url: "/bar",
            templateUrl: "Templates/bar.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('contacto', {
            url: "/contacto",
            templateUrl: "Templates/contacto.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
});