import Touit from './Touit.js';
import Utils from './Utils.js';

class AddTouit {
    
    formPseudo;
    formContent;
    touit;
    utils

    constructor(formPseudo, formContent){
        this.formPseudo = formPseudo;
        this.formContent = formContent;
        this.touit= new Touit;
        this.utils = new Utils;
    }
    
    createTouit = () => {
        const touitsContainer = document.querySelector('.row.text-start.flex-column-reverse.align-items-center.justify-content-between');
        const lastTouitId = touitsContainer.lastChild.id;
        this.touit.createContent(this.formPseudo, this.formContent, lastTouitId + 1, 0);
    }

    postTouit = () => {
        const data = new FormData();
        data.append('name', this.formPseudo);
        data.append('message', this.formContent);

        return this.utils.sendTouit(data);
    }

}

export default AddTouit;