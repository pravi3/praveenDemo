var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/agFundamentals');

    $stateProvider.state('agFundamentals', {
        url: '/agFundamentals',
        templateUrl: '../views/ag_fundamentals/design_patterns.html',
        controller:'common-ctrl'
    })

}]);

app.controller('accordinaCtrl', ['$scope', 'httpService', function ($scope, httpService) {

    httpService.getService('json/accordian.json').then(function (response) {
        $scope.accordianContent = response.data;
    }, function (error) {
        alert("Error unable to get accordiang json" + error);
    })
 }]);

app.controller('common-ctrl', ['$scope', '$anchorScroll', '$location', function ($scope, $anchorScroll, $location) {
    $scope.scrollTo = function (id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };

}]);