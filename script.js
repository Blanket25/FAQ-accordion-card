const btn = document.getElementsByClassName("btn");
const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");

for ( let i = 0; i < btn.length; i ++) {
    btn[i].addEventListener('click', function(){
        btn[i].classList.toggle("animation");
        answer[i].classList.toggle("active");
        question[i].classList.toggle('bold');
    })
}