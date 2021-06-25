const htmlEl = document.querySelector('html')
const btnMenuEl = document.querySelector('.btn-menu')

btnMenuEl.addEventListener('click', function () {
    htmlEl.classList.toggle('open-menu')
})

const answerEls = document.querySelectorAll('h4 a')
answerEls.forEach(function (answerEl){
    answerEl.addEventListener('click', function (){

    })
})