window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');
        });

        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    const deadline = '2021-12-14';

    function zero(element) {
        if (element < 10) {
            return `0${element}`;
        } else {
            return element;
        }

    }

    function timeRemaining(dead) {
        const time = Date.parse(dead) - Date.parse(new Date());

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);

        return {
            'time': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function changetime(hueta, dead) {
        const timer = document.querySelector(hueta);

        let days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds');

        updateTime();

        id = setInterval(updateTime, 1000);

        function updateTime(head) {
            const t = timeRemaining(dead);

            days.innerHTML = zero(t.days);
            hours.innerHTML = zero(t.hours);
            minutes.innerHTML = zero(t.minutes);
            seconds.innerHTML = zero(t.seconds);

        }

    }
    changetime('timer', deadline);


    const triggerModal = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        triggerClose = document.querySelector('[data-close]');

    triggerModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    triggerClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });


    function User(name, id) {
        this.name = name;
        this.id = id;
        this.dolboyeb = true;
        this.hello = function () {
            console.log(`hello, ${this.name}`);
        }
    }

    const misha = new User('misha', 28);

    console.log(misha);
    misha.hello();


    class Card {
        constructor(img, alt, title, paragraph, price, parentClass, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.paragraph = paragraph;
            this.price = price;
            this.parent = document.querySelector(parentClass);
            this.classes = classes;
            this.conver = 26;
            this.priceConver();
        }

        priceConver() {
            this.price = this.price * this.conver;
        }

        render() {
            const div = document.createElement('div');

            if (this.classes.length === 0) {
                this.div = 'menu__item';
                div.classList.add(this.div);
            } else {
                this.classes.forEach(element => div.classList.add(element));
            }

            div.innerHTML = `
                <img src="${this.img}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.paragraph}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;

            this.parent.append(div);

        }
    }

    new Card(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
    ).render();

    new Card(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        11,
        '.menu .container',
    ).render();


    new Card(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        10,
        '.menu .container'
    ).render();











































    //     const deadline = '2021-12-20';

    //     function getTimeRemaining(endtime) {
    //         const t = Date.parse(endtime) - Date.parse(new Date()),
    //             days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //             hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    //             minutes = Math.floor((t / (1000 * 60)) % 60),
    //             seconds = Math.floor((t / 1000) % 60);

    //         return {
    //             't': t,
    //             'days' : days,
    //             'hours': hours,
    //             'minutes': minutes,
    //             'seconds': seconds
    //         }
    //     }

    //     function zero(num) {
    //         if (num >= 0 && num < 10) {
    //             return `0${num}`;
    //         } else {
    //             return num;
    //         }
    //     }


    //     function changetime(selector, endtime ) {
    //         const timer = document.querySelector(selector),
    //               days = timer.querySelector('#days'),
    //               hours = timer.querySelector('#hours'),
    //               minutes = timer.querySelector('#minutes'),
    //               seconds = timer.querySelector('#seconds');
    //         const id = setInterval(updatetime, 1000);

    //         updatetime();

    //         function updatetime() {
    //             const t = getTimeRemaining(endtime);

    //             if (t.t <= 0 ) {
    //                 clearInterval(id);
    //                 t.t = 00;
    //                 t.days = 00;
    //                 t.hours = 00;
    //                 t.minutes = 00;
    //                 t.seconds = 00;
    //             }           

    //             days.innerHTML = zero(t.days);
    //             hours.innerHTML = zero(t.hours);
    //             minutes.innerHTML = zero(t.minutes);
    //             seconds.innerHTML = zero(t.seconds);
    //         }


    //     }
    //     changetime('.timer', deadline);
    // });


});