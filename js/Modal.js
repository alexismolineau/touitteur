import Collapse from './Collapse.js';
import Utils from './Utils.js';
import AddComment from './AddComment.js';
import Alert from './Alert.js';

//c'est un gros fichier mais c'est surtout de la création d'élements (div, ect...)

class Modal {

    collapse;
    utils;
    alert;

    constructor() {
        this.collapse = new Collapse;
        this.utils = new Utils;
        this.alert = new Alert;
    }


    createDiv = className => {
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    createForm = id => {
        const form = document.createElement('form');
        const formContainer = document.createElement('div');
        formContainer.classList.add('row', 'g-3', 'col-12');
        const inputgroup1 = this.createDiv('input-group');

        const pseudoLabel = document.createElement('label');
        pseudoLabel.classList.add('input-group-text');
        pseudoLabel.setAttribute('for', `comment-pseudo-${id}`);
        pseudoLabel.textContent = "Pseudo";

        const pseudoInput = document.createElement('input');
        pseudoInput.classList.add('form-control');
        pseudoInput.id = `comment-pseudo-${id}`;
        pseudoInput.setAttribute('type', 'text');
        pseudoInput.setAttribute('aria-describedby', `comment-pseudo-${id}`);
        pseudoInput.setAttribute('placeholder', 'pseudo');
        pseudoInput.setAttribute('maxlength', '16');
        pseudoInput.required = true;

        inputgroup1.appendChild(pseudoLabel);
        inputgroup1.appendChild(pseudoInput);

        const inputgroup2 = this.createDiv('input-group');

        const commentInput = document.createElement('input');
        commentInput.classList.add('form-control');
        commentInput.id = `commentaire-${id}`;
        commentInput.setAttribute('type', 'text');
        commentInput.setAttribute('aria-describedby', `commentaire-${id}`);
        commentInput.setAttribute('placeholder', 'commentaire');
        commentInput.setAttribute('maxlength', '200');
        commentInput.required = true;

        inputgroup2.appendChild(commentInput);

        formContainer.appendChild(inputgroup1);
        formContainer.appendChild(inputgroup2);

        form.appendChild(formContainer);

        return form;
    }


    createModal = touitId => {
        const modalContainer = this.createDiv('modal');
        modalContainer.classList.add('fade');
        modalContainer.setAttribute('tabindex', '-1');
        modalContainer.setAttribute('aria-hidden', 'true');
        modalContainer.id = `new-comment-${touitId}`;

        const modalDialog = this.createDiv('modal-dialog');

        const modalContent = this.createDiv('modal-content');

        const modalHeader = this.createDiv('modal-header');

        const modalBody = this.createDiv('modal-body');

        const form = this.createForm(touitId);

        modalBody.appendChild(form);

        const modalFooter = this.createDiv('modal-footer');

        const modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = "Ajouter un commentaire";

        const buttonModalClose = document.createElement('button');
        buttonModalClose.classList.add('btn-close');
        buttonModalClose.setAttribute('type', 'button');
        buttonModalClose.setAttribute('data-bs-dismiss', 'modal');
        buttonModalClose.setAttribute('aria-label', 'Close');


        const buttonCancel = document.createElement('button');
        buttonCancel.classList.add('btn', 'btn-danger');
        buttonCancel.setAttribute('type', 'button');
        buttonCancel.setAttribute('data-bs-dismiss', 'modal');
        buttonCancel.textContent = "Annuler";

        const buttonComment = document.createElement('button');
        buttonComment.classList.add('btn', 'btn-info', 'text-light');
        buttonComment.setAttribute('type', 'button');
        buttonComment.textContent = "Commenter";
        buttonComment.addEventListener('click', () => {
            const pseudo = document.querySelector(`#comment-pseudo-${touitId}`).value;
            const content = document.querySelector(`#commentaire-${touitId}`).value;
            if(pseudo === '' || pseudo === ''){
                const alertError = this.alert.createAlertBox('alert-danger', 'Les champs pseudo et commentaire sont requis');
                modalDialog.prepend(alertError);
                setTimeout(
                    () => {
                        this.alert.fadeAlert(alertError);
                    }, 3000
                )
                return;
            }
            else if(pseudo.length < 3 || pseudo.length > 16){
                const alertError = this.alert.createAlertBox('alert-danger', 'Taille du pseudo incorrecte');
                modalDialog.prepend(alertError);
                setTimeout(
                    () => {
                        this.alert.fadeAlert(alertError);
                    }, 3000
                )
                return;
            }
            const addComment = new AddComment(pseudo, content, touitId);
            addComment.postComment()
                .then(
                    addComment.createComment()
                ).then(
                    () => {
                        const alertSuccess = this.alert.createAlertBox('alert-success', 'Votre commentaire a bien été envoyé');
                        modalDialog.prepend(alertSuccess);
                        setTimeout(
                            () => {
                                this.alert.fadeAlert(alertSuccess);
                            }, 3000
                        )
                    }
                )
                .catch(
                    error => console.error(error)
                )

            this.utils.updateCommentsNumber(touitId);
        });


        modalContainer.appendChild(modalDialog);
        modalDialog.appendChild(modalContent);
        modalContent.appendChild(modalHeader);
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(buttonModalClose);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modalFooter.appendChild(buttonCancel);
        modalFooter.appendChild(buttonComment);

        return modalContainer;
    }

}

export default Modal;