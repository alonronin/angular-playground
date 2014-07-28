var app = angular.module('superhero', []);

app.directive('superman', function(){
    return {
        restrict: 'E',
        template: "<div>Here I am to <b>save</b> the day!</div>"
    }
});

app.directive('flash', function(){
    return {
        restrict: 'E',
        template: "<div>Here I am to save the day <b>faster</b>!</div>"
    }
});

app.directive('salert', function(){
    return {
        restrict: 'A',
        link: function(){
            alert("I'm working stornger!");
        }
    }
});

app.directive('falert', function(){
    return {
        restrict: 'A',
        link: function(){
            alert("I'm working faster!");
        }
    }
});