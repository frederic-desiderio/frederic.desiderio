let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  if (event.target.className === "column-body") {
    event.target.appendChild(draggedItem);
  }
}

function addCard(columnId) {
  const columnBody = document.getElementById(columnId);
  const card = document.createElement("div");
  card.className = "card";
  card.drag
