const menuLinks = document.querySelectorAll(".menu__link[data-to]");
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    
    iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle("_lock")
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click',func)
    })

    function func(event){
        const menuLink = event.target;
        if(menuLink.dataset.to && document.querySelector(menuLink.dataset.to)){
            const goBlock = document.querySelector(menuLink.dataset.to);
            const goBlockValue = goBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
            }

            window.scrollTo({
                top: goBlockValue,
                behavior: "smooth"
            })
            event.preventDefault();
        }
    }
}
