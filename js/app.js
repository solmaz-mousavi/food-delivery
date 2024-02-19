// select elements - variables
const navbarElem = document.querySelector('.navbar');
const menuTumbnailElem = document.querySelectorAll('.menu-tumbnail');


// functions
function ChangeScrollY(){
    let verticalScroll = document.documentElement.scrollTop;

   if (verticalScroll > 100) {
    console.log('paeen')
    navbarElem.classList.add('navbar-sticky')
    } else{
       console.log('bala')
    navbarElem.classList.remove('navbar-sticky')
   }
}

function mouseEnterHandler(event){
    let captionElem = event.target.children[1];
    let titleElem = captionElem.children[0];
    captionElem.classList.add('menu-caption-hover')
    titleElem.classList.add('menu-title-hover')
}

function mouseLeaveHandler(event){
    let captionElem = event.target.children[1];
    let titleElem = captionElem.children[0];
    captionElem.classList.remove('menu-caption-hover')
    titleElem.classList.remove('menu-title-hover')
}

// menu hover style handler
menuTumbnailElem.forEach(function(item){
    item.addEventListener('mouseenter', mouseEnterHandler);
    item.addEventListener('mouseleave', mouseLeaveHandler);
})
