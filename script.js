function applyChanges() {
    var textInput = document.getElementById('text-input').value;
    var fontStyle = document.getElementById('font-style').value;
    var fontSize = document.getElementById('font-size').value;
    var fontColor = document.getElementById('font-color').value;

    var textDisplay = document.getElementById('text-display');
    textDisplay.innerHTML = textInput;

    textDisplay.style.fontFamily = fontStyle;
    textDisplay.style.fontSize = fontSize;
    textDisplay.style.color = fontColor;
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

document.addEventListener("dragover", function (event) {
    event.preventDefault();
});

document.addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
    var offsetX = event.clientX - draggedElement.offsetWidth / 2;
    var offsetY = event.clientY - draggedElement.offsetHeight / 2;

    draggedElement.style.position = "absolute";
    draggedElement.style.left = offsetX + "px";
    draggedElement.style.top = offsetY + "px";
});
