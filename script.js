//addListItem("david" + "/notes", "hi there!!!!");


var name;
var nameInput = $("#name-input");
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    name = nameInput.val()
    console.log(name)
  }	
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    var pretty = (notes + "<br>");
    list.push(pretty)
    noteList.html(list)
  })
}
var list = []
noteInput.keydown(function(e) {
  if (e.which == 13) {
    console.log(noteInput.val());
    addListItem(name + "/notes", noteInput.val());
    getNotesForName(name)
  }
})
