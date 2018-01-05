var app = angular.module('app');

app.factory('sUtility', ['$anchorScroll', '$location', function ($anchorScroll, $location) {
    var util = {};

    util.scrollToHash = function (scrollToId) {
        $location.hash(scrollToId);
        $anchorScroll();
    }
    
    return util;
}])