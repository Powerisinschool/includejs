import { IncludeFile, getFileWithTag } from "./include.module.js";
import { ModalClass } from "./modal.js";
import { Modal } from "/bootstrap/js/bootstrap.esm.js";

var myModal;

//customElements.define('include-file', IncludeFile);
console.log(getFileWithTag('include-file'));

function showModal(modalHead, modalBody, modalNeg, modalPos) {
    customElements.define('info-modal', new ModalClass({
        modalHead: modalHead,
        modalBody: modalBody,
        modalNeg: modalNeg,
        modalPos: modalPos
    }));
    myModal = new Modal(document.getElementById('myModal'), {
        keyboard: true,
        focus: true
    });
    myModal.show();
    refreshActions();
}

showModal('Howdy!!!', 'Welcome Sensei', 'Cancel', 'Same');

function refreshActions() {
    var collelem = document.getElementsByTagName("*");

    var i, element, file;

    for (i = 0; i < collelem.length; i++) {
        element = collelem[i];
        file = element.getAttribute("(click)");
        if (file.match('closeModal()')) {
            element.addEventListener("click", () => {
                file;
                closeModal(myModal);
            });
            element.removeAttribute("(click)");
        }
    }
}

const closeModal = (modal) => {
    modal.destroy();
    myModal = null;
}