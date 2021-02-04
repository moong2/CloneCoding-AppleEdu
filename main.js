'use strict'
function revealHidden(){
    const header = document.querySelector('header');
    const icon = document.querySelector('#revealOrHide');
    const body = document.querySelector('body');
    const menu = document.querySelector('nav');
    menu.style.background = 'black';
    const hiddenMenu = document.querySelector('.aside__inside01_hidden');
    console.log(icon.classList[1]);
    if(icon.classList[1] === "fa-bars"){
        hiddenMenu.style.animation = "sweepToBottom 0.5s";
        hiddenMenu.style.display = "block";
        header.style.display = "none";
        body.style.overflow = 'hidden';
        icon.className = "fas fa-times"
    }
    else if(icon.classList[1] === "fa-times"){
        hiddenMenu.style.animation = "sweepToTop 0.5s";
        setTimeout(()=>hiddenMenu.style.display = "none", 400);
        header.style.display = "block";
        body.style.overflow = ('');
        icon.className = "fas fa-bars";
    }
}

function revealCancel(){
    const bar = document.querySelector('.hidden__search__bar');
    const cancel = document.querySelector('.hidden__search__cancel');
    const menu = document.querySelector('nav');
    menu.style.animation = "navSweepToTop 0.5s"
    setTimeout(()=>menu.style.display = "none", 400);
    bar.style.animation = 'barSweepToLeft 0.5s forwards';
    cancel.style.display = "block";
}
function hiddenCancel(){
    const bar = document.querySelector('.hidden__search__bar');
    bar.style.animation = 'barSweepToRight 0.5s forwards';
    const cancel = document.querySelector('.hidden__search__cancel');
    cancel.style.display = 'none'
    const menu = document.querySelector('nav');
    menu.style.animation = "navSweepToBottom 0.5s"
    menu.style.display = 'block';
}