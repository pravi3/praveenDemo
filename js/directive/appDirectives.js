var app=angular.module('app');  
app.directive('agTopics', function () {
    return {
        scope: {
            topicName: '@',
            topics: '='
        },
        templateUrl: "group-template.html",
        link: function ($scope) {
            // $scope.topicName=$scope.topicName;
            console.log($scope.topics)
            $scope.oneAtATime = true;
            $scope.status = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            }
        }
    }
})