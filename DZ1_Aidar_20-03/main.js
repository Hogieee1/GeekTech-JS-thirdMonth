const num = document.querySelector('.num')
const sub1 = document.querySelector('.submit1')
const res1 = document.querySelector('.res1')


const numReqExp = /^\+7\(6\d{2}\) \d{3}-\d{2}-\d{2}$/


sub1.addEventListener('click', () => {
    if(numReqExp.test(num.value)) {
        res1.innerText = 'Success!'
        res1.style.color = 'green'
        num.style.borderColor = 'green'

    }else {
        res1.innerText = 'Вы ввели неправильный номер.'
        num.style.borderColor = 'red'
        res1.style.color = 'red'
    }
})
// ==================================

const inn = document.querySelector('.inn')
const sub2 = document.querySelector('.submit2')
const res2 = document.querySelector('.res2')


const innReqExp = /^(1|2)/


sub2.addEventListener('click', () => {
    if (innReqExp.test(inn.value)) {
        inn.style.borderColor = 'green'
        res2.innerText = 'Success!'
        res2.style.color = 'green'
    } else {
        res2.innerText = 'Первыми числами должны быть 1 или 2.'
        inn.style.borderColor = 'red'
        res2.style.color = 'red'
    }

})


// ==================================

const data = document.querySelector('.data')
const sub3 = document.querySelector('.submit3')
const res3 = document.querySelector('.res3')


const dataReqExp = /^(0[1-9]|[1-2]\d|3(0|1))-(0[1-9]|1[0-2])-(19\d\d|20([0-1]\d|2[0-2]))$/

sub3.addEventListener('click', () => {
    if(dataReqExp.test(data.value)) {
        res3.innerText = 'Success!'
        res3.style.color = 'green'
        data.style.borderColor = 'green'

    }else {
        res3.innerText = 'Вы ввели некоректную дату.'
        data.style.borderColor = 'red'
        res3.style.color = 'red'
    }
})




