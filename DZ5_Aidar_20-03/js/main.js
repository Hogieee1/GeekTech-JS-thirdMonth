
const tabParent = document.querySelector(".tabheader__items")
const tabItems = document.querySelectorAll(".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabContent.forEach((tabC) => {
        tabC.classList.remove("tabcontent_active")})

    tabItems.forEach((tabI) => {
        tabI.classList.remove("tabheader__item_active")})
}



const showConent = (i = 0) => {
    tabContent[i].classList.add("tabcontent_active")
    tabItems[i].classList.add("tabheader__item_active")
}



hideTabContent()
showConent()



tabParent.addEventListener("click", e => {
    const target = e.target;
    if (!target.classList.contains("tabheader__item_active")) {
        tabItems.forEach((item, i) => {
            if (item === target) {
                hideTabContent()
                showConent(i)
            }
        })
    }
})






// ============================================

const modal = document.querySelector('.modal')
const openModal = document.querySelector("#open_modal")

const close = document.querySelector("#close_modal")


openModal.addEventListener('click', () => {
    modal.classList.add('open_modal')
    modal.classList.remove('close_modal')

})


close.addEventListener('click', () => {
    modal.classList.add('close_modal')
    modal.classList.remove('open_modal')
})


// =================================================



const messageText = {
    loading: 'Пожалуйста подождите...',
    success: 'Все успешно сохранено!',
    error: 'Ошибка при запросе!'
}


const forms = document.querySelectorAll('form')

forms.forEach((form) => {
    postData(form)
})


function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const loadingImg = document.createElement('img')
        loadingImg.src = 'icons/loading.png'

        const messageBlock = document.createElement('div')
        messageBlock.textContent = messageText.loading
        messageBlock.append(loadingImg)
        form.append(messageBlock)
        messageBlock.classList.add('message-block')

        const req = new XMLHttpRequest()
        
        req.open('POST', 'server.php')
        req.setRequestHeader('Content-type', 'application/json')

        const formData = new FormData(form) 

        const obj = {}
        formData.forEach((value,key) => obj[key] = value) 

        req.send(formData); 

        const successImg = document.createElement('img')
        successImg.src = 'icons/success.png'

        const errorImg = document.createElement('img')
        errorImg.src = 'icons/error.png'

        const modalInputs = document.querySelectorAll('.modal__input')

        req.addEventListener('load', () => {
            if(req.status === 200) {
                const response = req.response
                messageBlock.textContent = messageText.success
                messageBlock.append(successImg)
                modalInputs.forEach((modalInput) => {
                    modalInput.style.border = '2px solid green'
                })} else {
                console.log('req ERROR');
                messageBlock.textContent = messageText.error
                messageBlock.append(errorImg)
                modalInputs.forEach((modalInput) => {
                    modalInput.style.border = '2px solid red'
                })
            }
            setInterval(() => {
                messageBlock.remove()
            }, 5000);
        })
    })
}








