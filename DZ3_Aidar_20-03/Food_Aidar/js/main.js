
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




