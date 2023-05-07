const showMore = document.querySelector('.show-more-btn');
const showMoreContainer = document.querySelector('.gallery-btn-show-more');
const showLess = document.querySelector('.show-less-btn');
const hiddenGallery = document.querySelector('.hidden-gallery');
const closeModal = document.querySelector('.close-modal');
const phoneMenu = document.querySelector('.phone-menu');
const hamburger = document.querySelector('.hamburger');
const phoneA = document.querySelectorAll('.phone-a');

showMore.addEventListener('click', ()=>{
    showMoreContainer.style.setProperty('display','none');
    hiddenGallery.style.setProperty('display','block');
});

showLess.addEventListener('click', ()=>{
    showMoreContainer.style.setProperty('display','block');
    hiddenGallery.style.setProperty('display','none');
});

closeModal.addEventListener('click', ()=>{
    phoneMenu.style.setProperty('display','none');
});

hamburger.addEventListener('click', ()=>{
    phoneMenu.classList.remove('phone-menu-reverse');
    phoneMenu.style.setProperty('display','block');
});

for(let x=0;x<phoneA.length;x++){
    phoneA[x].addEventListener('click', ()=>{
        phoneMenu.classList.add('phone-menu-reverse');
        setTimeout(()=>{phoneMenu.style.setProperty('display','none')},500);
    });
}