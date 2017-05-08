(function (app) {
    app.TodoComponent = TodoComponent;
    TodoComponent.annotations = [
      new ng.core.Component({
          selector: 'todo',
          templateUrl: 'app/todo/todo.component.html',
      })
    ];

    function newTodo() {
        return { text: "make a list", done: true };
    }

    function TodoComponent() {
        this.todo = [{ text: "make a list", done: true },
                       { text: "print the list", done: false },
                       { text: "add more functionality...", done: false }];
    }
})(window.app = window.app || {});
