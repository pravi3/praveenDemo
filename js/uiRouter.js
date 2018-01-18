var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 65; // always scroll by 65 extra pixels
                }]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/agFundamentals');

    $stateProvider.state('agFundamentals', {
        url: '/agFundamentals',
        templateUrl: 'views/ag_fundamentals/design_patterns.html',
        controller: 'common-ctrl'
    })
    .state('agCore',{
        url: '/agCore',
        templateUrl: 'views/agCore.html',
        controller: 'common-ctrl'
    })

}]);

app.controller('accordianCtrl', ['$scope', 'httpService', 'sUtility', function ($scope, httpService,                                       sUtility) {

    httpService.getService('json/accordian.json').then(function (response) {
        $scope.accordianContent = response.data;
    }, function (error) {
        alert("Error unable to get accordiang json" + error);
    });
    $scope.scrollTo = function (id) {
        sUtility.scrollToHash(id);
    };
    
   
 }]);

app.controller('common-ctrl', ['$scope', 'sUtility', function ($scope, sUtility) {
    $scope.scrollTo = function (id) {
        sUtility.scrollToHash(id);
    };
}]);