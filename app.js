const panel = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
//zero
panel[0].addEventListener('click', function() {
    if(answers[0].classList.contains('shown')){
        answers[0].classList.remove('shown');
    }
    else {
        answers[0].classList.add('shown');
        answers[1].classList.remove('shown');
        answers[2].classList.remove('shown');
        answers[3].classList.remove('shown');
        answers[4].classList.remove('shown');
    }
})
//one
panel[1].addEventListener('click', function() {
    if(answers[1].classList.contains('shown')){
        answers[1].classList.remove('shown');
    }
    else {
        answers[1].classList.add('shown');
        answers[0].classList.remove('shown');
        answers[2].classList.remove('shown');
        answers[3].classList.remove('shown');
        answers[4].classList.remove('shown');
    }
})
//two
panel[2].addEventListener('click', function() {
    if(answers[2].classList.contains('shown')){
        answers[2].classList.remove('shown');
    }
    else {
        answers[2].classList.add('shown');
        answers[1].classList.remove('shown');
        answers[0].classList.remove('shown');
        answers[3].classList.remove('shown');
        answers[4].classList.remove('shown');
    }
})
//three
panel[3].addEventListener('click', function() {
    if(answers[3].classList.contains('shown')){
        answers[3].classList.remove('shown');
    }
    else {
        answers[3].classList.add('shown');
        answers[1].classList.remove('shown');
        answers[2].classList.remove('shown');
        answers[0].classList.remove('shown');
        answers[4].classList.remove('shown');
    }
})
//four
panel[4].addEventListener('click', function() {
    if(answers[4].classList.contains('shown')){
        answers[4].classList.remove('shown');
    }
    else {
        answers[4].classList.add('shown');
        answers[1].classList.remove('shown');
        answers[2].classList.remove('shown');
        answers[3].classList.remove('shown');
        answers[0].classList.remove('shown');
    }
})

