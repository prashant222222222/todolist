$(function () {
  let newtodobox = $("#newtodo");
  let addtodo = $("#addtodo");
  let todolist = $("#todolist");

  addtodo.click(function () {
    let newtodo = newtodobox.val();

    $.post("/todo/", { task: newtodo }, function (data) {
      console.log(data);
      todolist.empty();
      for (todo of data) {
        todolist.append("<li>" + todo.task + "</li>");
      }
    });
  });
});
