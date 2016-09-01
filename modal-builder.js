// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    var modal_title = document.getElementById('modal-title').value;
    document.getElementById('modal-title-template').innerHTML = modal_title;

    var modal_body = document.getElementById('modal-body').value;

    document.getElementById('modal-body-template').innerHTML = modal_body + '<br /><br />';

    var modal_buttons = document.getElementById('modal-buttons').value;
    if ('' != modal_buttons) {
        var modal_buttons_array = modal_buttons.split(',');

        //modal_buttons_array.each
        modal_buttons_array.forEach(function(newRow) {
                var btn = document.createElement("button");        // Create a <button> element
                var t = document.createTextNode(newRow);       // Create a text node
                btn.appendChild(t);                                // Append the text to <button>
                document.getElementById('modal-body-template').appendChild(btn);
            }
        );
    }

    return false;

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}