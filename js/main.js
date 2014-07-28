var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
    return {message: 'I\'m data from service'}
});

function MessageCtrl($scope, Data){
    $scope.data = Data;
}

function ReversedMessageCtrl($scope, Data){
    $scope.data = Data;

    $scope.reversedMessage = function(message){
        return message.split('').reverse().join('');
    }
}