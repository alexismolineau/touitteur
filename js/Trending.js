class Trending {

    createTrending = tag => {
        const tagsContainer = document.querySelector('.row.justify-content-around')
        const buttonTag = document.createElement('button');
        buttonTag.classList.add('badge', 'bg-secondary', 'col-auto', 'm-2');
        buttonTag.textContent = `#${tag}`;
        buttonTag.addEventListener('click', event => {
            const tagBtn = event.target;
            const trueString = tagBtn.textContent.substring(1);
            const allTags = document.querySelectorAll('.badge');
            
            if(tagBtn.classList.contains('bg-secondary')){
                Array.from(allTags).map(
                        tag => {
                            tag.classList.remove('bg-primary');
                            tag.classList.add('bg-secondary');
                        }
                    );
                tagBtn.classList.remove('bg-secondary');
                tagBtn.classList.add('bg-primary');
            }else {
                tagBtn.classList.add('bg-secondary');
                tagBtn.classList.remove('bg-primary');
            }
            this.filterByTrending(trueString.toLowerCase(), tagBtn.classList);
        });
        tagsContainer.appendChild(buttonTag);
        }

    filterByTrending = (trending, classList) => {
        const touits = document.querySelectorAll('.touits-list .card.col-12.mb-3');
        if(classList.contains('bg-primary')){
            Array.from(touits).map(
                touit => {
                    if(!touit.firstChild.lastChild.textContent.toLowerCase().includes(trending)){
                        touit.classList.add('touit-hidden');
                    }else {
                        touit.classList.remove('touit-hidden');
                    }
                }
            );
        }
        else {
            Array.from(touits).map(
                touit => {
                        touit.classList.remove('touit-hidden');
                    }
            );
        }
    }
}

export default Trending;