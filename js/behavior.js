var app = angular.module('behaviorApp', []);

app.directive('enter', function(){
    return function(scope, element, attrs){
        element.on('mouseenter', function(e){
            scope.$apply(attrs.action);
            element.removeClass(attrs.leave).addClass(attrs.enter);
        })
    }
});

app.directive('leave', function(){
    return function(scope, element, attrs){
        element.on('mouseleave', function(e){
            element.removeClass(attrs.enter).addClass(attrs.leave);
        })
    }
})