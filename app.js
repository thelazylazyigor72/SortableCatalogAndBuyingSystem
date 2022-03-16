/* MODAL---------------------------------------------------------- */
const modalButtons = document.querySelectorAll('.btn_order')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close_form')
const submit = document.querySelector('.submit')

modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
            modal.classList.add('modal_show')
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_show')
})

submit.addEventListener('click', () => {
    modal.classList.remove('modal_show')
})




//CART____________________________________________________________________
//получаем эл-т счетчик который будем менять
let mainCounter = document.querySelector('.counter')
//создаем программный счетчик, репрезент значения эл-та выше
let cartCounter = 0
//берем контейнер где хранятся корзина/счетчик
const cartCounterContainer = document.querySelector('.cart_counter')

//получаем спан ИтогоЦены в модальнике который будем менять
const totalPriceContainer = document.querySelector('.total_price')
//создаем счетчик, репрезент значения ИтогоЦены
let totalPriceCounter = 0


//получаем кнопку Корзина, при нажатии на которую откроется модал
const cartBtn = document.querySelector('.btn_cart')
//получаем эл-т счетчик-реплику в модальнике
let mainCounterModal = document.querySelector('.counter_inner')
//получем модальное окно корзины
const cartModal = document.querySelector('.cart_modal')
//получаем кнопки модальника да, нет и закрыть
const yesCart = document.querySelector('.yes')
const noCart = document.querySelector('.no')
const closeCartModal = document.querySelector('.close_cart_info')
//при нажати на кнопку Коризна - появляется модальник
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('modal_show')
    console.log(cartCounter)
})
//этот слушатель нужен внутри популейтАйтемс, дабы он мог получить
//доступ к нужным эл-там продукта и обнулить их 
//чтоб все отображалось как надо и обнулялось как надо
/*yesCart.addEventListener('click', () => {
    cartCounter = 0
    cartModal.classList.remove('modal_show')
    console.log(cartCounter)
})*/
//при нажатии на Нет модальник закроется, а счетчик корзины не изменится
noCart.addEventListener('click', () => {
    cartModal.classList.remove('modal_show')
})
//при нажатии на Крестик модальник закроется а счетчик не изменится
closeCartModal.addEventListener('click', () => {
    cartModal.classList.remove('modal_show')
})

//функция которая проверяет если счетчик ноль - отображаем корину
//если счетчик пошел, пошел процесс покупки, счетчик считаем кол-во купленных эл-в
/*функция вызывается после всех нажимаемых событий, 
после событий так сказать связанных с процессом покупки, и каждый 
раз проверяет состояние счетчика, надо ли что то с ним щас делать */
const checkOnGlobalCounter = () => {
    if (cartCounter > 0 ) {
        cartCounterContainer.classList.add('show_counter')
    } else {
        cartCounterContainer.classList.remove('show_counter')
    }
}


//get bars to indicate when buy//ON MOBILES/BURGERS
const bars = document.querySelector('.bar_indicator')
/*функция проверяет если процесс  покупки пошел, то
бургеру (если он отображается) добавить индикатор
а если процесс покупки не идет, корзина пуста - индикации нет */
const checkOnIndication = () => {
    if (cartCounter > 0 ) {
        bars.classList.add('bar_indicator_show')
    } else {
        bars.classList.remove('bar_indicator_show')
    }
}






/* SORTED MENU------------------------------------------------------ */

//note!!!! kupleno = pseudoPrice
const menu = [
    {
        id: 1,
        category: 'burger',
        img: './images/burger1.jpg',
        title: 'Flaming Burger',
        weight: '50',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 4,
        kupleno: 0,
    },
    {
        id: 2,
        category: 'pizza',
        img: './images/pizza1.jpg',
        title: 'Soprano',
        weight: '200',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 5,
        kupleno: 0,
    },
    {
        id: 3,
        category: 'sushi',
        img: './images/roll1.jpg',
        title: 'California',
        weight: '100',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet.',
        price: 5,
        kupleno: 0,
    },
    {
        id: 4,
        category: 'burger',
        img: './images/burger2.jfif',
        title: 'Holly',
        weight: '60',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 3,
        kupleno: 0,
    },
    {
        id: 5,
        category: 'pizza',
        img: './images/pizza2.jpg',
        title: 'Chille',
        weight: '220',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor.',
        price: 7,
        kupleno: 0,
    },
    {
        id: 6,
        category: 'sushi',
        img: './images/roll2.jpg',
        title: 'Aleppo',
        weight: '45',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 7,
        kupleno: 0,
    },
    {
        id: 7,
        category: 'burger',
        img: './images/burger3.jpg',
        title: 'Nissan',
        weight: '70',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 6,
        kupleno: 0,
    },
    {
        id: 8,
        category: 'pizza',
        img: './images/pizza3.jfif',
        title: 'Country',
        weight: '300',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet.',
        price: 9,
        kupleno: 0,
    },
    {
        id: 9,
        category: 'sushi',
        img: './images/roll3.jpg',
        title: 'Nori',
        weight: '60',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 5,
        kupleno: 0,
    },
    {
        id: 10,
        category: 'burger',
        img: './images/burger4.jpg',
        title: 'York',
        weight: '55',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 8,
        kupleno: 0,
    },
    {
        id: 11,
        category: 'pizza',
        img: './images/pizza4.jpg',
        title: 'Maria',
        weight: '320',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 10,
        kupleno: 0,
    },
    {
        id: 12,
        category: 'sushi',
        img: './images/roll4.jpg',
        title: 'Yoshi',
        weight: '120',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nihil.',
        price: 6,
        kupleno: 0,
    },
]
//firstly we need to get a container where to put menu items
const menuContainer = document.querySelector('.menu_itself')
//get a container where to put btns
const btnsCOntainer = document.querySelector('.menu_btns')

//DOMContnentLoaded event so when page loads
/* we will already have menu items and functioning btns */
document.addEventListener('DOMContentLoaded', () => {
    //populate all menu items when page loads 
    populateMenuItems(menu)
    //populate functioning buttons
    populateBtns()
});

//function dat populates menu items based on given array
const populateMenuItems = arr => {
    /* now we need to wear each of menu-array items data in HTML
    so using map for each item we will get his html skeleton
    and then using .join we will get one line string
    which is actually a peace of HTML code 
    also u can see - using StringInterpolation 
    we creating HTML skeleton
    w/o .join we just have an array which we cant put in html
    but w/ it we have a whole peace of code*/
    /* ADD pay attention
    data id add data-id to elements w/ id as value */
    const madenMenuItems = arr
    .map(item => {
        return `<div data-id="${item.id}" data-pseudoprice="${item.kupleno}" class="menu_item mi_mod">
        <img src="${item.img}" alt="" class="photo">
        <div class="mi_head">
            <h6>${item.title}</h6>
            <p>Weight: ${item.weight}g</p>
        </div>
        <p class="description">
            ${item.description}        </p>
        <div class="mi_foot">
            <p class="regular_text">
                <span class="price">${item.price}</span>$
            </p>
            <div class="plus_minus_menu">
                <span class="minus">
                    <i class="fas fa-minus"></i>
                </span>
                <span class="plus">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
            <button class="btn_buy">
                buy
            </button>
        </div>
    </div>`
    })
    .join('')
    //and now this peace of code we need to put in place it belongs
    // using innerHTML
    menuContainer.innerHTML = madenMenuItems


    /* здесь начинается кусок кода в котором создается
    функционал где мы нажимаем купить и появляется плюс/минус
    и мы можем накапливать элементы в корзину и при этом неважно
    показываем мы все элемемнты или сортируем, состояние
    кнопки остается неизменным и мы можем работать с ней
    */
    //опять же работаем сразу здесь иначе доступа к эл-там не будет
    //получаем коллекцию только что созданных элементов
    const menuItemsJustLoaded = document.querySelectorAll('.menu_item')
    

    //накидываем через форИч каждому созданному эл-ту определенный функционал
    menuItemsJustLoaded.forEach(item => {
        //здесь мы получаем изначальное базовое значение цены эл-та которое прописано в массиве меню
        //цена только что созданного элемента
        //базовая цена каждого эл-та
        const firstValueOfprice = item.querySelector('.price')
        //прайскаунтер то что будет увеличивать при +/- скажем так просто счетчик значение которого и присваивается как обновленная цена в процессе покупки
        let priceCounter = 0
        //создаем переменную которая будет *крементировать именно фиксированную базовую цену продукта
        //ведь цена если скажем 4 то берем продукт - заплатить - 4 берем еще тоесть +4 заплатить уже 8, понял да? 
        let priceCrement = Number(firstValueOfprice.innerHTML)


        /* здесь мы проверяем если базовая цена не изменилась
        а если она уже до этого менялась то мы присваиваем кантеру цены
        инкризнутое значение(опять же если оно инкризилось) и отображаем эту 
        измененную цену и отображаем +/- потому что если цена 
        уже инкрисится то должны отображаться +/-
        кроме того здесь мы используем юзер атрибуты 
        чтобы запоминать в будущем измененную цену и 
        если надо подгружать ее здесь в начале сразу после
        создания элементов  */
        /*то есть изначально псевдоцена - 0 и мы отображаем эл-т как 
        есть, дальше допустим мы прибавили два таких эле-та
        псевдоцена уже больше базовой, дальше два пути:
        1 мы на этой странице, ничего не фильтруем - все ок, надо 
        убрать - убираем, все встанет на свои места
        2 мы сортируем, и при сортировке вся функция попАйтемс мы вновь на этом этапе
        вновь вызывается, но псевдоцена то другая, она больше
        базовой и изходя из условия - мы отображаем эл-т так сказать
        в активном состоянии, а дальше тоже +- по усмотрению, кроме
        того фильтрация работает в обе стороны, все-конкретное и
        конкретное-все */
        //опять же базовая/исходная цена айтема
        const itemsPrice = item.querySelector('.price')
        //console.log(item.dataset)
        //если базовая/статичная цена меньше либо равна значению (которое может быть уже изменено) то...
        if (Number(itemsPrice.innerHTML) <= item.dataset.pseudoprice) {
            /*то есть здесь если надо я меняю
            исходное значение прайса на странице на то что должно быть/на псевдоцену */
            itemsPrice.innerHTML = item.dataset.pseudoprice
            /*это кантуер чтоб его внутри кода менять потом и 
            чтоб значение было нужное/псевдоцена ведь если во вкладе ВСе мы купили два раза эл-т с ценой 4, то бишь псевдоцена 8 и на вкладке ВСЕ
            у нас спан с ценой отображает 8
            и чтоб эта восьмерка отображалась при переходе на другую вкладку 
            мы и обновляем этот счетчик здесь */
            priceCounter.innerHTML = item.dataset.pseudoprice
            //тоглим нужный класс чтоб отобразить нужное состояние(состояние покупки)
            item.classList.add('release_buy')
        }
        //console.log(menu[0])

        /*здесь очевидно, мы находим у созданного эл-та 
        кнопку КУПИТЬ и накидываем ей функции:
        1 для начала нажать купить - значит уже добавить одну позицию в корзину а значит псевдоцена должна стоать вместо 0 уже допустим 4
        2 отображаем +/- заместо кнопки купить */
        const btn = item.querySelector('.btn_buy')
        btn.addEventListener('click', (e) => {
                //console.log(e.currentTarget)
                //console.log(item.dataset.id)
                //влияем на глобальный счетчик
                cartCounter++
                mainCounter.innerHTML = cartCounter
                mainCounterModal.innerHTML = cartCounter
                //влияем на счетчик ИтогоЦены
                totalPriceCounter+=priceCrement
                totalPriceContainer.innerHTML = totalPriceCounter

                //задаем псевдоцене текующее/базовое значение цены эл-та ведь мы при нажатии как бы покупаем первый эл-т
                //а почему присваиваем базовое значение? смотри выше в условие проверки состояния эл-та после его появления на странице
                //те если база 4 и до нажатия псевдо - 0, то наать купить значит купить первый раз этот эл-т а значит +4 к оплате, а 4 уже равно базе и если мы отсортируем(перепопулируем эл-ты) то при проверке выше, условие больше или равно выполнится и эл-т отобразится в нужном состоянии
                //ведь нажатие кнопки КУПИТь уже значит взять 1 эл-т в корзину
                menu[(Number(itemId) - 1)].kupleno = Number(itemsPrice.innerHTML)
                //console.log(menu[0])
                //тоглим класс отображения
                item.classList.toggle('release_buy')
                //функция проверки состояния глобального счетчика
                checkOnGlobalCounter()
                checkOnIndication()
        })


        /*получаем нужные элементы для +- функционала
        получаем айди чтобы синхронить текущий элемент и его
        данные в ориг массиве, чтобы затем сохранять актуальные данные о цене
        когда синхронизировались то сораняем текущую цену
        эл-та в свойстве псевдоцена в ориг массиве
         */
        //айди для синхрона эл-та с которым работаем с его базой в оригинальном массиве
        //ведь при популяции эл-та мы в айди-дата ставим значение меню.айди
        const itemId = item.dataset.id
        //текующее значение цены эл-та
        let itemPrice = item.querySelector('.price')
        //плюс/минус эл-та чтоб накинуть слушатели событий
        const plus = item.querySelector('.plus')
        const minus = item.querySelector('.minus')
        //счетчик цены эл-та чтоб его уввеличивать/уменьшать и сохранять его значение как значение цены и псевдоцены
        priceCounter = Number(itemPrice.innerHTML)
        //priceCrement = Number(itemPrice.innerHTML)
        //console.log(menu[(Number(itemId) - 1)].kupleno)

        plus.addEventListener('click', () => {
            //инкрементируем счетчик на базовое значение цены текущего эл-та
            priceCounter+=priceCrement

            //ну очевидно увеличиваем глобальный счетчик
            cartCounter++
            mainCounter.innerHTML = cartCounter
            mainCounterModal.innerHTML = cartCounter
            //влияем на счетчик ИтогоЦены
            totalPriceCounter+=priceCrement
            totalPriceContainer.innerHTML = totalPriceCounter
            //обновляем значение цены (спан в котором отображается цена) покупаемого у эл-та
            itemPrice.textContent = priceCounter
            //обновляем значение псевдоцены
            //синхроним и записываем состояние-значение чтоб  
            //в начале отобразить нужное
            //помним что куплено = псевдопрайс
            //слева от равно: синхронимся с помощью айди эл-т = его основа в массиве
            //справа от равно: обновляем псведоцену эл-та
            /*псевдоцена влияет на отображение эл-та при перепопуляции эл-тов
            когда эл-ты перепопулировались мы узнаем если псевдоцена больше базовой(что означает что этот эл-т в данный момент покупается)
            то мы у новопопулированого эл-та обновляем спан с ценой на значение псевдоцены и отображаем/тоглим плюс/минус у эл-та
            а если псевдоцена = 0 (значит эл-т не находится в процессе покупки) то и отображаем эл-т и его цену и ее спан как обычно в базовом состоянии
            */
            menu[(Number(itemId) - 1)].kupleno = Number(itemPrice.innerHTML)
            //console.log(menu[0])
            //функция проверки состояния глобального счетчика
            checkOnGlobalCounter()
            checkOnIndication()
        })
        //в целом аналогично плюсованию но в другую сторону
        minus.addEventListener('click', () => {
            //ИФ: если счетчик цены достигает базового значения
            /* значит мы делаем: */
            if (priceCounter === priceCrement) {
                //убираем класс отображения, возвращаем эл-т в обычное состояние
                item.classList.remove('release_buy')
                //декрементим значение глобального счетчика
                cartCounter--
                mainCounter.innerHTML = cartCounter
                mainCounterModal.innerHTML = cartCounter
                //влияем на счетчик ИтогоЦены
                totalPriceCounter-=priceCrement
                totalPriceContainer.innerHTML = totalPriceCounter
                //и раз эл-т не в состоянии покупки - его псевдоцена 0
                menu[(Number(itemId) - 1)].kupleno = 0
                //sconsole.log(menu[0])
                //функция проверки состояния глобального счетчика
                checkOnGlobalCounter()
                checkOnIndication()
            } else {
                //декрементим счетчик цены
                priceCounter-=priceCrement

                //декрементим глобальный счетчик
                cartCounter--
                mainCounter.innerHTML = cartCounter
                mainCounterModal.innerHTML = cartCounter
                //влияем на счетчик ИтогоЦены
                totalPriceCounter-=priceCrement
                totalPriceContainer.innerHTML = totalPriceCounter
                //обновим значение цены 
                itemPrice.textContent = priceCounter
                //обновим значчение псевдоцены
                menu[(Number(itemId) - 1)].kupleno = Number(itemPrice.innerHTML)
                //console.log(menu[0])
                //функция проверки состояния глобального счетчика
                checkOnGlobalCounter()
                checkOnIndication()
            }
        })

        //кнопка корзинного модальника ДА
        /* То есть в модальнике вопрос - очистить корзину и если 
        ответ ДА, то мы обнуляем глобальный счетчик,
        обнуляем тоталПрайс
        обнуляем у эл-тов псевдоцену, возвращаем эл-т к состоянию
        непокупки/базовому, закрываем модальник */
        yesCart.addEventListener('click', () => {
            totalPriceCounter = 0
            totalPriceContainer.innerHTML = totalPriceCounter
            cartCounter = 0
            menu[(Number(itemId) - 1)].kupleno = 0
            mainCounter.innerHTML = cartCounter
            mainCounterModal.innerHTML = cartCounter
            itemsPrice.innerHTML = priceCrement
            checkOnGlobalCounter()
            checkOnIndication()
            item.classList.remove('release_buy')
            cartModal.classList.remove('modal_show')
            //console.log(cartCounter)
        })

        /*основной прикол в том что весь функционал 
        мы создаем сразу после создания элементов 
        в начале после создания мы проверяем состояние и значения элементов
        прикол в том что мы синхроним значения и записываем их в ориг массив
        чтоб потом прогрузить их и на их основании отобразить нужное состояние
        элемента используя два новых пользовательских аттрибута */
        /* помним что все это просиходит в контексте
        вызова функции создания элементов */
    })
}

//function dat populates already working buttons
const populateBtns = () => {
    /* we need to know what are categories we have to work w/
    so we need to have an array w/ categories 
    we will have it using .reduce method on menu array
    so whats happening below
    arr - is resulting array
    item - each item in menu array
    second argument is 'all' that we already putted in arr
    cuz we will not have such category from Menu array*/
    const categories = menu
    .reduce((arr,item) => {
        /* so if we do not have such category in arr then
        push it to arr
        else just return arr
        so dat way give us list of categories w/o repetitions */
        if (!arr.includes(item.category)) {
            arr.push(item.category)
        } 
        return arr
    }, ['all'])
    /* so now we know what categories we have and it means 
    we know which btns we need on page, so as w/ menu items
    we exact the same way need to populate those btns 
    so w/ map join strInterpolation and already shabloned
    HTML skeleton we also get peace of HTML code to ut in page
    ALSO pay attention that in skeleton we creating user attribute
    via data-, it will help us to put functionality in future*/
    const madenBtns = categories
    .map(category => {
        return `<button data-ctg="${category}" class="btn_ni btn_sort">${category}</button>`
    })
    .join('')
    //now just put that peace of code on a page
    btnsCOntainer.innerHTML = madenBtns
    /* so now we need to get a collection of just created btns
    cuz if we get this collection in place where we get containers
    we will not have anything, cuz at that moment they arent created
    so we need to get this collection right after we create btns
    and then work w/ them */
    const btns = document.querySelectorAll('.btn_sort')
    /* now we need to go thru dat collection and for each 
    btn we will have eventListener and based on category
    of individual button we will display categoriesed menu items */
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            /* so we need to know what is category 
            of activeted button, we will get this info
            from event argument, on active btn we will get
            a value of her user attribute which represent category
            and put it in variable */
            /* also pay attention that we accessing ctg attribute 
            thru .dataset.neededproperty cuz dataset is an object
            of existing user attributes of element, which is can
            be more than one */
            const activeCategory = e.currentTarget.dataset.ctg
            /* so now, we know our active category */

            /* so for active category we need to have an 
            array of menu items w/ this category
            we will get it by filtering categories menu array  */
            const activeCategoryItems = menu
            .filter(item => {
                /* so if menu items category is the same as
                now needed-active category then we need this item
                else we do not need item in active array */
                if (item.category === activeCategory) {
                    return item
                }
            })
            /* now we just need to know if category is 'all'
            then populate(using already existing function) all menu items
            else just populate activeItems array */
            if (activeCategory === 'all') {
                populateMenuItems(menu)
            } else {
                populateMenuItems(activeCategoryItems)
            }
        })
    })
}

/* то есть алгоритм создания меню:
1 Создаем ДОмКонЛод для документа и в нем вызываем 2 функции
- первая это популяция всех эл-ов меню на основе массива меню
- вторая популяция кнопок фильтрации с прописанным функционалом
2 функция популяции эл-тов: на входе массив, массиву хуярим метод мап и каждый элемент массива с помощью стрингИнтерполяции и ${}
обертываем в хтмл шаблон где прописываем через нужные данные в нужных местах
затем джоином объединяем все уже хтмл-эл-ты в одну строку = кусок хтмл кода 
и с помощью иннерХтмл вставляем в див где эл-ты логически должны храниться
3 функция кнопоки их работы: сначала получаем массив категорий эл-тов на которые можно будет фильтровать
леаем это с помощью редьюс метода
далее по аналогии с эл-тами меню обертываем категории в хтмл и добавляем их на страницу
затем получаем коллекцию только что созданных кнопок и через форИч для каждой кнопки создаем слушателя событий с определенными задачами
при нажатии на кнопку - узнаем с помощью ивента карент трагет и датасета - какую категорию мы щас будем юзать
далее фильтруем массив меню по категории нажимаемой кнопки 
и далее условие если категория ВСе - вызываем популейтАйтемс(меню), а если какая-то категория то вызываем
популейтАйтем(отфильрованный массив)
из примечательного - новое использование редьюса, ебка с контекстами(пр то что с кнопками можно работать только после их создания) и использование 
пользов аттрибутов
в целом это все */
/*что касатеся системы покупки
1 работаем внутри функции популейтАйтемс
2 сразу после создания эл-ов поулчаем коллекцию созданных только что эл-ов
и каждому айтему прописываем в форИче функционал
проверяем значение псевдоцены(это пользовательский аттрибут) и на основе проверки отображаем эл-т при его популяции в нужном состоянии
3 находим кнопку купить в этом эл-те и пишем ей функционал
4 прописываем функционал для +/- с использованием пользовательских аттрибутов, синхрона элта с котороым мы работаем и его базой в массиве меню
и псевдоценой которую мы изменяем в +/- и которая каждый раз проверяется  при/после популяции эл-тов */


/*BURGER MENU ------------------------------- */
//get burger icon
const burger = document.querySelector('.btn_burger')
//get whole header to toggle class 
const header = document.querySelector('.header')

burger.addEventListener('click', () => {
    header.classList.toggle('burger_open')
})