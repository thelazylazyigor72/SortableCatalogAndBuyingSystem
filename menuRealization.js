/* so this is peace of code w/ commentary how i done 
menu items and btns 
just to have it to get back to it if needed
firstly we need to get a container where to put menu items
const menuContainer = document.querySelector('.menu_itself')
get a container where to put btns
const btnsCOntainer = document.querySelector('.menu_btns')

DOMContnentLoaded event so when page loads
/* we will already have menu items and functioning btns */
//document.addEventListener('DOMContentLoaded', () => {
    //populate all menu items when page loads 
    //populateMenuItems(menu)
    //populate functioning buttons
    //populateBtns()
//})

//function dat populates menu items based on given array
//const populateMenuItems = arr => {
    /* now we need to wear each of menu-array items data in HTML
    so using map for each item we will get his html skeleton
    and then using .join we will get one line string
    which is actually a peace of HTML code 
    also u can see - using StringInterpolation 
    we creating HTML skeleton
    w/o .join we just have an array which we cant put in html
    but w/ it we have a whole peace of code*/
    /* const madenMenuItems = arr
    .map(item => {
        return `<div class="menu_item mi_mod">
        <img src="${item.img}" alt="" class="photo">
        <div class="mi_head">
            <h6>${item.title}</h6>
            <p>Weight: ${item.weight}g</p>
        </div>
        <p class="description">
            ${item.description}        </p>
        <div class="mi_foot">
            <p class="regular_text">
                ${item.price}$
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
    .join('')*/
    //and now this peace of code we need to put in place it belongs
    // using innerHTML
    /*menuContainer.innerHTML = madenMenuItems
}

//function dat populates already working buttons
//const populateBtns = () => {
    /* we need to know what are categories we have to work w/
    so we need to have an array w/ categories 
    we will have it using .reduce method on menu array
    so whats happening below
    arr - is resulting array
    item - each item in menu array
    second argument is 'all' that we already putted in arr
    cuz we will not have such category from Menu array*/
    //const categories = menu
    //.reduce((arr,item) => {
        /* so if we do not have such category in arr then
        push it to arr
        else just return arr
        so dat way give us list of categories w/o repetitions */
        /*if (!arr.includes(item.category)) {
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
    /*const madenBtns = categories
    .map(category => {
        return `<button data-ctg="${category}" class="btn_ni btn_sort">${category}</button>`
    })
    .join('')
    //now just put that peace of code on a page
    //btnsCOntainer.innerHTML = madenBtns
    /* so now we need to get a collection of just created btns
    cuz if we get this collection in place where we get containers
    we will not have anything, cuz at that moment they arent created
    so we need to get this collection right after we create btns
    and then work w/ them */
    //const btns = document.querySelectorAll('.btn_sort')
    /* now we need to go thru dat collection and for each 
    btn we will have eventListener and based on category
    of individual button we will display categoriesed menu items */
    /*btns.forEach(btn => {
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
            //const activeCategory = e.currentTarget.dataset.ctg
            /* so now, we know our active category */

            /* so for active category we need to have an 
            array of menu items w/ this category
            we will get it by filtering categories menu array  */
            /*const activeCategoryItems = menu
            .filter(item => {
                /* so if menu items category is the same as
                now needed-active category then we need this item
                else we do not need item in active array */
                /*if (item.category === activeCategory) {
                    return item
                }
            })*/
            /* now we just need to know if category is 'all'
            then populate(using already existing function) all menu items
            else just populate activeItems array */
            /* if (activeCategory === 'all') {
                populateMenuItems(menu)
            } else {
                populateMenuItems(activeCategoryItems)
            }
        })
    })
}*/