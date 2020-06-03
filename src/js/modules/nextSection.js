class Next{
    constructor(selector){

        const btnNext = this.btnNext = document.querySelector(selector);

        btnNext.addEventListener('click', this.goSection.bind(btnNext));
    }


    goSection(){
       event.preventDefault();

        const sectionFirst = document.querySelector('section');

        function getCoords(elem) {
            let box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };

        }

        let sectionPosition = getCoords(sectionFirst);

        window.scrollTo({
            left: 0,
            top:  sectionPosition.top,
            behavior: "smooth"
        });

    }

}
