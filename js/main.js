import Touit from './Touit.js';
import Utils from './Utils.js';
import Trending from './Trending.js';
import Alert from './Alert.js';
import AddTouit from './AddTouit.js';

const touit = new Touit;
const utils = new Utils;
const trending = new Trending;
const alert = new Alert;

const formTouit = document.querySelector('header form');

formTouit.addEventListener('submit', event => {
    event.preventDefault();
    const formPseudo = document.querySelector('#pseudo').value;
    const formContent = document.querySelector('textarea').value;
    if(formPseudo === '' || formContent === ''){
        const alertError = alert.createAlertBox('alert-danger', 'Les champs pseudo et message sont requis');
        formTouit.prepend(alertError);
        setTimeout(
            () => {
                alert.fadeAlert(alertError);
            }, 5000
        )
        return;
    }
    const addTouit = new AddTouit(formPseudo, formContent);
    addTouit.postTouit()
        .then(
            addTouit.createTouit()
        )
        .then(
            () => {
                const alertSuccess = alert.createAlertBox('alert-success', 'Votre Touit a bien été envoyé')
                formTouit.prepend(alertSuccess)
                setTimeout(
                    () => {
                        alert.fadeAlert(alertSuccess);
                    }, 5000
                );
            }   
        )
        .catch(
            error => console.error(error)
        )

    return;
});


const touitList = () => {
    utils.allTouits()
    .then(
        allTouits => allTouits.messages.map(
            oneTouit => {
                touit.createContent(oneTouit.name, oneTouit.message, oneTouit.id, oneTouit.comments_count);
            }
        )
    )
    .then(
        () => document.querySelector('.loading-container').remove()
    );
}




utils.getTrendingsTags()
        .then(
            trendings => {
                for(const [key, value] of Object.entries(trendings)){
                    if(value > 10) {
                        trending.createTrending(key);
                    }
                }
            }
        );

utils.getTopLikedTouit()
        .then(
            topTouit => {
                const topTouitToCreate = touit.createContent(topTouit.top[0].name, topTouit.top[0].message, `top-${topTouit.top[0].id}`, topTouit.top[0].comments_count);
                utils.topTouit(topTouitToCreate);
            }
        );


const refreshTouits = () => {
    const touitContainer = document.querySelector('.row.text-start.flex-column-reverse');
    const loadingGif = utils.createLoadingGif();
    while(touitContainer.firstChild){
        touitContainer.removeChild(touitContainer.firstChild);
    }
    touitContainer.appendChild(loadingGif);
    touitList();
    setTimeout(
        () => {
            refreshTouits();
        }, 300000);
}

refreshTouits();


