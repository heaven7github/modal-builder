/* Copyright © 1016-2016 Néhány jog fenntartva. */

var ModalBuilder = function(modal_builder_form) {
    var modal = '';
    var modal_body_template_id = 'modal-body-template';
    var modal_body_id = 'modal-body';
    var modal_buttons_id = 'modal-buttons';
    var modal_title_template_id = 'modal-title-template';
    var modal_content_id = 'modal-content';
    var modal_container_id = 'modal-container'

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {

        // create modal container
        var modal_container = document.createElement('div');
        modal_container.setAttribute('id', modal_container_id);
        modal_container.setAttribute('class', 'modal');
        document.body.appendChild(modal_container);

        // create modal content
        appendElement('div', modal_content_id, modal_container_id, 'modal-content');

        // create h1 tag
        appendElement('h1', modal_title_template_id, modal_content_id);

        // create span for closing the modal
        var span_element = appendElement('span', 'close', modal_content_id, 'close');
        span_element.innerHTML = 'x';

        // When the user clicks on <span> (x), close the modal
        span_element.onclick = function() {
            closeModal();
        }

        appendElement('div', modal_body_template_id, modal_content_id);

        // Get the modal cotainer
        modal = document.getElementById(modal_container_id);
        modal.style.display = "block";

        var modal_title = document.getElementById('modal-title').value;
        document.getElementById(modal_title_template_id).innerHTML = modal_title;

        var modal_body = document.getElementById(modal_body_id).value;
        document.getElementById(modal_body_template_id).innerHTML = modal_body + '<br /><br />';

        renderButtons();

        return false;

    }

    // append element to DOM
    function appendElement(element_type, element_id, append_to, element_class) {
        var element = document.createElement(element_type);
        element.setAttribute('id', element_id);
        if ('' != element_class) {
            element.setAttribute('class', element_class);
        }
        document.getElementById(append_to).appendChild(element);
        return element;
    }


    // Render buttons
    function renderButtons() {
        var modal_buttons = document.getElementById(modal_buttons_id).value;
        if ('' != modal_buttons) {
            var modal_buttons_array = modal_buttons.split(',');

            modal_buttons_array.forEach(function(text_node) {
                var btn = document.createElement('button');        // Create a <button> element
                var t = document.createTextNode(text_node);        // Create a text node
                btn.appendChild(t);                                // Append the text to <button>
                document.getElementById(modal_body_template_id).appendChild(btn);
            });
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // catch the escape character
    window.onkeydown = function( event ) {
        if ( event.keyCode === 27 ) { // 27 = escape char
            closeModal();
        }
    };

    // close modal
    function closeModal() {
        modal.style.display = "none";
    }
}