const block1 = document.querySelector('.block-1')
const block2 = document.querySelector('.block-2')
const block3 = document.querySelector('.block-3')
const openModal = document.querySelector('.open-modal')



    const modal = document.createElement('div')
    const modalTitle = document.createElement('h1')

openModal.addEventListener('click', () => {

    modal.className = 'modal'
    block2.append(modal)
    modal.append(modalTitle)


    const modalText = {
        loading: 'Загрузка...',
        success: 'Запрос успешно открыт!',
        error: 'Ошибка при запросе',
    }

    modal.style.width = '400px'
    modal.style.height = '300px'
    modal.style.textAlign = 'center'
    modal.style.backgroundColor = '#00B871'
    modal.style.paddingTop = '130px'
    modal.style.zIndex = '1'
    modal.style.position = 'absolute'
    modal.style.top = '200px'
    modal.style.left = '515px'
    
    modalTitle.innerText = modalText.loading


fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    headers: {
        ContenType: 'application/json'
    }
}).then(users => users.json())
    .then(users => users)
        .then(users => users.forEach(user => {
            setTimeout(() => {
                const reqList = document.createElement('p')
                block3.append(reqList)
                reqList.innerText = user.title
                modalTitle.innerText = modalText.success
            }, 2000);
        })).catch(() => modalTitle.innerText = modalText.error)
            .finally(() => {
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 4000);
            })
})