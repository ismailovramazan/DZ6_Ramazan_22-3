document.querySelector('.btn').addEventListener('click',function (){
    console.log('вы нажали на кнопку')
})
const buttons = document.querySelectorAll('.btn')
for (let i =2; i < buttons.length;i++){
    addEventListener("click",function (){
        console.log('Вы нажали на кнопку')
    })
}
const counters = document.querySelectorAll('[data-counter]');
if (counters){
    counters.forEach(counter =>{
        counter.addEventListener('click',e =>{
            const target = e.target;

            if (target.closest('.counter__button')){
                let value = parseInt(target.closest('.counter').querySelector('input').value);

                if (target.classList.contains('counter__button_minus')){
                    value--;
                }else {
                    value++;
                }

                target.closest('.counter').querySelector('input').value = value;
            }
        })
    })
}
