const showMore = document.querySelector('.show-more-btn');
const showMoreContainer = document.querySelector('.gallery-btn-show-more');
const showLess = document.querySelector('.show-less-btn');
const hiddenGallery = document.querySelector('.hidden-gallery');

showMore.addEventListener('click', ()=>{
    showMoreContainer.style.setProperty('display','none');
    hiddenGallery.style.setProperty('display','block');
});

showLess.addEventListener('click', ()=>{
    showMoreContainer.style.setProperty('display','block');
    hiddenGallery.style.setProperty('display','none');
});