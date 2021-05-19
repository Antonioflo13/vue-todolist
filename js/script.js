const app = new Vue (
    {
        el:"#root",
        data: {
            todoList:[
                {
                    testo:"Fare esercizio fisico",
                    completed: false
                },
                {
                    testo:"Andare a lezione",
                    completed: false
                },
                {
                    testo:"Prendere un caffè rigenerante",
                    completed: false
                },
                {
                    testo:"Imparare Vue",
                    completed: false
                },
                {
                    testo:"Guardare il tramonto",
                    completed: false
                },
            ],
            todoListIndex: 0,
            doList:[],
            newTodo: "",
        },
        methods: {
            check: function(indexTodoList,todo) {
                this.todoList.completed = true;
                this.todoList.splice(indexTodoList, 1);
                this.doList.push(todo);
            },

            addNewTodo: function (event) {
                this.todoList.completed = true;
                if (event.keyCode == 13)
                this.todoList.push(this.newTodo);
            },
        },
    }
);
