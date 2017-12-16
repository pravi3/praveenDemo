var app = angular.module('app');
app.service('httpService', function ($http) {
    this.postService = function (url, data) {
        return $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            data: data
        });
    }
    this.getService = function (url) {
        return $http({
            method: 'GET',
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            url: url
        });
    }

    this.putService = function (url, data) {
        return $http({
            method: 'PUT',
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            url: url,
            data: data
        });
    }

    this.deleteService = function (url, data) {
        return $http({
            method: 'DELETE',
            url: url,
            data: data,
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            }
        });
    }
});