
let btn1 = document.querySelector('#ra');
btn1.addEventListener('click', () => {
    let num = document.querySelector('#ru').value;
    let res = document.querySelector('#re');
    if (num % 2 === 0) { 
res.innerHTML = 'Чётное';
    }else {
res.innerHTML = 'Нечётное';
    }
    
});


























