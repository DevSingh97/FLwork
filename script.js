
const fullnav = document.querySelector('#fullnav');
const close = document.querySelector('#flinks');
const fclose = document.querySelector('#fclose')

menu.addEventListener('click', function(){
    fullnav.style.right ='0'
});

close.addEventListener('click',function(){
    fullnav.style.right = '-100%'
});

fclose.addEventListener('click',function(){
    fullnav.style.right = '-100%'
});