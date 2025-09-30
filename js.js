
$(document).ready(function () {
    $("#form-tarefa").on("submit", function (e) {
        e.preventDefault();

        const tarefa = $("#tarefa").val().trim();

        if (tarefa !== "") {
            $("#lista-tarefas").append("<li>" + tarefa + "</li>");
            $("#tarefa").val("");
        }
    });

    $("#lista-tarefas").on("click", "li", function () {
        $(this).toggleClass("concluida");
    });
});

