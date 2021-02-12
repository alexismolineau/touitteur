import Utils from './Utils.js';

class LikeButtons {

    utils;

    constructor(){
        this.utils = new Utils;
    }

    createIcon = (className, path) => {
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('width', '1em');
        icon.setAttribute('height', '1em');
        icon.setAttribute("viewBox", "0 0 16 16");
        icon.setAttribute("class", className);
        icon.setAttribute('fill', 'currentColor');
        icon.setAttribute('xmlns', "http://www.w3.org/2000/svg");

        const iconPath = document.createElementNS('http://www.w3.org/2000/svg',"path");
        iconPath.setAttribute('fill-rule', 'evenodd');
        iconPath.setAttribute('d', path);

        icon.appendChild(iconPath);

        return icon;
    }
    

    createButtons = likeBtn => { 
        likeBtn.appendChild(this.createIcon('bi bi-heart', "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" ));
    }

    addLikeEvent = (likeBtn, touitId ) => {
        likeBtn.addEventListener('click', () => {
            if(likeBtn.firstElementChild.getAttribute('class') === 'bi bi-heart'){
                likeBtn.appendChild(this.createIcon('bi bi-heart-fill', 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'));
                const data = new FormData();
                data.append('message_id', touitId.replace('top-', ''));
                this.utils.sendLike(data);
                
            }
            else {
                likeBtn.appendChild(this.createIcon('bi bi-heart', "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" ));
                const data = new FormData();
                data.append('message_id', touitId.replace('top-', ''));
                this.utils.removeLike(data);

            }
            likeBtn.removeChild(likeBtn.firstElementChild);
        });
    }

}

export default LikeButtons;