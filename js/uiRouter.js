var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('firstMessage', {
        url: '/first-msg',
        templateUrl: 'delete.html'
    })

}]);

app.controller('accordinaCtrl', ['$scope', 'httpService', function ($scope, httpService) {

    httpService.getService('json/accordian.json').then(function (response) {
        $scope.accordianContent = response.data;
    }, function (error) {
        alert("Error unable to get accordiang json" + error);
    })
 }]);