(function (app) {
    app.TodoComponent = TodoComponent;
    TodoComponent.annotations = [
      new ng.core.Component({
          selector: 'todo',
          templateUrl: 'app/todo/todo.component.html',
      })
    ];

    TodoComponent.parameters = [app.DataService];

    function TodoComponent(dataService) {
        this.todo = { text: "make a list", done: true };

        this.newTodo = function () {
            dataService.addTodo(this.todo);
        };
    }

})(window.app = window.app || {});
