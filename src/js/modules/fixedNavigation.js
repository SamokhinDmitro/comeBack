class FixedNavigation{
    constructor(selector){

        const navBlock = document.querySelector(selector);

        window.addEventListener('scroll', this.fixedNav.bind(navBlock));

    }

    //Изменение позиции навигации
    fixedNav(){
        if(window.pageYOffset > 0) {
        //if(window.pageYOffset > document.documentElement.clientHeight) {

            this.style.position = 'fixed';
            this.style.top = 0 + 'px';
            this.style.left = 0 + 'px';
            this.style.background = 'rgba(0,0,0, 0.85)';
            this.parentElement.style.zIndex = '999';

        }else{
            this.style.position = 'absolute';
            this.style.background = 'rgba(0,0,0, 0.2)';
            this.parentElement.style.zIndex = '5';
        }
    }
}
