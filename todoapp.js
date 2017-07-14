$(document).ready(function () {
  var todos = [];

  function addtodo() {
    $('.items').empty();
    $('.count').empty();
    if (!todos.length) {
      var empty = $(`
            <div class = "empty">
                <p>Nothing to show here</p>
                <h1></h1>
                <h1></h1>
            </div>`) //using the back tick (beneath your esc key) instead of normal quote for multi-line    
      $('.items').append(empty);
    } else {
      for (var i = 0; i < todos.length; i++) {
        var todoitem = $(
          `<div id = ${todos[i].id} class="todo ${todos[i].completed === true ? "completed" : ""}">
                    <input class="item-box" type="checkbox" ${todos[i].completed ? "checked": ""}><span> ${todos[i].activity} </span><i class="pull-right close">x</i>
                </div>`
        )
        $('.items').append(todoitem);
      }
    }
    $('.count').html(todos.length + ' item' + (todos.length === 1 ? '' : 's'))
    addHover();
    $('.item-box').change(checkChange);
    $('.close').click(deleteTodo);
  }

  function checkChange() {
    var id = ($(this).parent().attr('id'));
    todos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    addtodo()
  }

  function deleteTodo() {
    var id = $(this).parent().attr('id')
    todos = todos.filter(function (todo) {
      return todo.id !== id;
    })
    addtodo()
  }
  addtodo();

  $('#submittodo').click(function () {
    $('#todoform').submit()
  })

  $('#todoform').submit(function (e) {
    e.preventDefault();
    console.log('Form Submitted')
    var acts = ($('#todoinput').val());
    if (!acts) return;
    var todoObj = {}
    todoObj.activity = acts;
    todoObj.id = 'x' + (todos.length + 1);
    todoObj.created = Date();
    todoObj.completed = false;
    todos.unshift(todoObj);
    // addtodo(todos)
    $("form").trigger("reset");
    addtodo();
  })

  function addHover() {
    $('.todo').hover(function () {
      //     $(this).find('.close').css('visibility', 'visible')
      // }, function(){
      //     $(this).find('.close').css('visibility', 'hidden')
      // }) better done as below:
      $(this).find('.close').slideToggle();
    })
  }
  $('.add').click(function () {
    $('.todofill').slideToggle();
  })
  addtodo();
})