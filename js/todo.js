var app = angular.module('todo', []);

app.service('TodoService', function($timeout, $q){
    var self = this;
    var defer = $q.defer();

    self.tasks = [
        {task: 'this is first task', done: false},
        {task: 'this is second task', done: true},
        {task: 'this is third task', done: false}
    ];

    defer.promise.then(function(){
        self.addTask({task: 'check out this', done: true});
    });

    $timeout(function(){
        defer.resolve();
    }, 3000);

    self.addTask = function(task){
        this.tasks.push(task);
    };

});

app.controller('TodoCtrl', function($scope, TodoService){
    var self = this;

    this.todos = TodoService.tasks;
    this.options = [true, false];
    $scope.newTask = {task: '', done: false};

    this.addTask = function(newTask){
        if(newTask.task) TodoService.addTask(newTask);
        $scope.newTask = {task: '', done: false};
    };
});

app.controller('ShowTodosCtrl', function(TodoService){
    this.todos = TodoService.tasks;
});