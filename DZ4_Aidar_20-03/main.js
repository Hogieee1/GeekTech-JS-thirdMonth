const inputKgs = document.querySelector("#kgs");
const inputKgs2 = document.querySelector("#kgs2");
const inputEur = document.querySelector("#eur");
const inputUsd = document.querySelector("#usd");


inputKgs.addEventListener('input', () => {
    const req = new XMLHttpRequest()

    req.open('GET', 'data.json')
    req.setRequestHeader('Content-type', 'application/json')
    req.send()

    req.addEventListener('load', () => {
        if (req.status === 200) {
            const data = JSON.parse(req.response)
            inputUsd.value = (+inputKgs.value / data.usd).toFixed(2)
        } else {
            inputUsd.value = 'Что то пошло не так'
        }
    }) 
})

inputUsd.addEventListener('input', () => {
    const req = new XMLHttpRequest()

    req.open('GET', 'data.json')
    req.setRequestHeader('Content-type', 'application/json')
    req.send()

    req.addEventListener('load', () => {
        if (req.status === 200) {
            const data = JSON.parse(req.response)
            inputKgs.value = (+ inputUsd.value * data.usd).toFixed(2)
        } else {
            inputKgs.value = 'Что то пошло не так'
        }
    }) 
})

inputKgs2.addEventListener('input', () => {
    const req = new XMLHttpRequest()

    req.open('GET', 'data.json')
    req.setRequestHeader('Content-type', 'application/json')
    req.send()
    req.addEventListener('load', () => {
        if (req.status === 200) {
            const data = JSON.parse(req.response)
            inputEur.value = (+ inputKgs2.value / data.eur).toFixed(2)
        } else {
            inputEur.value = 'Что то пошло не так'
        }
    }) 
})

inputEur.addEventListener('input', () => {
    const req = new XMLHttpRequest()
    
    req.open('GET', 'data.json')
    req.setRequestHeader('Content-type', 'application/json')
    req.send()

    req.addEventListener('load', () => {
        if (req.status === 200) {
            const data = JSON.parse(req.response)
            inputKgs2.value = (+ inputEur.value * data.eur).toFixed(2)
        } else {
            inputKgs2.value = 'Что то пошло не так'
        }
    }) 
})
