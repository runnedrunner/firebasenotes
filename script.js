//addListItem("david" + "/notes", "hi there!!!!");


var name;
var nameInput = $("#name-input");
console.log(nameInput.val());
console.log("stuff");
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    console.log("stuff");
  }	
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
