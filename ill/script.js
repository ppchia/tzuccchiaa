var s = skrollr.init();

$(function () {
  $(".draggable").draggable({
    zIndex: 100
  });
  $("#draggable").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    }
  });
});

