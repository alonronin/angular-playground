var app = angular.module('twitterApp', []);

app.controller('tweetsCtrl', function($scope){
    $scope.loadTweets = function(){
        alert('Loading');

    };

    $scope.deleteTweets = function(){
        alert('Deleting...');
    }
});

app.directive('enter', function(){
    return function(scope, element, attrs){
        element.on('mouseenter', function(e){
            scope.$apply(attrs.enter);
        })
    }
});