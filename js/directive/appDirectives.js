var app = angular.module('app');
app.directive('agTopics', function () {
    return {
        scope: {
            topicName: '@',
            topics: '='
        },
        templateUrl: "group-template.html",
        link: function ($scope) {
            $scope.oneAtATime = true;
            $scope.status = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            }
        },
        controller: 'accordianCtrl'
    }
});

app.directive('sImage', function () {
    return {
        scope: {
            width: '@',
            url: '@',
            height: '@'
        },
        link: function (scope) {},
        template: '<div class="row">' +
            '<div class="col-md-4">' +
            '<img src="{{url}}" width="{{width }}">' +
            '</div>' +
            ' <!--<div class="col-md-5 col-md-offset-3" style="padding-top: 45px">' +
            ' <p>Connent One</p>' +
            '<p>Connent One</p>' +
            '<p>Connent One</p>' +
            '<p>Connent One</p><p>Connent One</p>' +
            '</div>-->' +
            '</div>'

    }
});


