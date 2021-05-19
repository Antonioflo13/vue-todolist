const app = new Vue (
    {
        el:"#root",
        data: {
            TodoList:[
                "Fare esercizio fisico",
                "Andare a lezione",
                "Prendere un caffè rigenerante",
                "Imparare Vue",
                "Guardare il tramonto"
            ],
            completed: false,
        },
        methods: {
            check: function() {
                this.completed = true;
            },
        }
    }
);
