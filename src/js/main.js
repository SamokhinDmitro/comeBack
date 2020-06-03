document.addEventListener('DOMContentLoaded', () => {


    /*Высота header в процентах относительно экрана пользователя*/

   //Высота документа пользователя
   let clientHeight = document.documentElement.clientHeight;

   //Высота шапки 80% от высоты документа пользователя
   let resultSize = (Number(clientHeight) / 100 * 80);


    const header = document.querySelector('.header');

    //Слайды в шапке
    let headerSliderItem = header.querySelectorAll('.header-slider__item');

    let headerTitle = header.querySelector('.header-pages__title');

    //Если в шапке есть карусель
    if(headerSliderItem !== null){
        headerSliderItem.forEach(elem => {
                elem.style.height = resultSize + 'px';

                elem.querySelector('.header-slider__content').style.paddingTop = Number(resultSize / 100 * 32) + 'px';
        });
    }

    //Для главного заголовка на других страницах
    if(headerTitle !== null) {
        headerTitle.style.marginTop = Number(resultSize / 100 * 35) + 'px';
    }

    //Высота шапки
    header.style.height = resultSize + 'px';

    /*END Высота header в процентах относительно экрана пользователя*/

    /*Scroll to Top*/
    new Scroll('.button_up');
    /*End Scroll to Top*/

    /*Next Section*/
    new Next('.header-down__button');
    /*END Next Section*/

    /*Fixed Navigation*/
    new FixedNavigation('.header-top');
    /*END Fixed Navigation*/

    /*NAVIGATION*/
    new Navigation('.header-nav__button', '.popup-navigation', '.popup-content__close');

    /*END NAVIGATION*/


    //TIMER

    //let dedline = '2020-05-23 17:51:00';
    let date = new Date();
    let dedline = new Date(date.setDate(date.getDate() + 2));

    function getTimeRemaing(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor(t/1000)%60,
            minutes = Math.floor(t/1000/60)%60,
            hours = Math.floor(t/(1000*60*60));

        return {
            'counter': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setTime(id, endtime){
        let time = document.getElementById(id),
            hours = time.querySelector('.hours'),
            minutes = time.querySelector('.minutes'),
            seconds = time.querySelector('.seconds'),
            digit = time.querySelectorAll('.digit');


        setInterval(() => {

            digit.forEach(el => {
                if( el.style.display === 'block'){
                    el.style.display = 'none';
                }else{
                    el.style.display = 'block';
                }
            });
        }, 1000);

        window.timer = setInterval(updateTime, 1000);

        function updateTime(){
            let t = getTimeRemaing(endtime);
            hours.textContent = getDigit(t.hours);
            minutes.textContent = getDigit(t.minutes);
            seconds.textContent = getDigit(t.seconds);
            if(t.counter <= 0){
                window.clearInterval(timer);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    function getDigit(num){
        if(num <= 0 || num <= 9){
            return '0' + num;
        }else{
            return num;
        }
    }


    setTime('promo-timer', dedline);
    //END TIMER


    /*Process Form Обработка форм данных от клиентов*/
    //Обработка всех форм с data-form="client"
    let allClientForms = document.querySelectorAll('form[data-form=client]');

    allClientForms.forEach((el) => {
        new SendForm().processForm(el);
    });

    /*END Process Form*/

    /*БЛОК С ПРОЦЕНТАМИ*/


    const numberBlock = document.querySelector('.features-numbers');
    const number = numberBlock.querySelector('.features-numbers__title');
    const numberText = numberBlock.querySelector('.features-numbers__descr');
    const feturesSlider = document.querySelector('.features-slider');



    //ГОТОВА логика смена окон процента на слайдер
    let n = 0;
    let numberTimer =  setInterval(() => {
       // document.body.style.overflowY = 'hidden';
        if(n <= 69){

            number.innerText = n + '%';
            n++;
        }else{
            window.clearInterval(numberTimer);
            numberText.style.display = 'block';

            setTimeout(() => {
                feturesSlider.style.right = 0 + 'px';
                numberBlock.style.display = 'none';
               // document.body.style.overflowY = 'auto';
            }, 4000);

        }

    }, 50);




});
