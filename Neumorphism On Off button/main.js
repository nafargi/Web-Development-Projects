document.addEventListener('DOMContentLoaded', (event) =>{
hhhhhhhhhhhhhh
 const btnToggle = document.getElementById("btnToggle");
 const span = btnToggle.querySelector('span');
 const circle = btnToggle.querySelector('.circle');

 btnToggle.addEventListener('click',() =>{
    if(span.textContent === 'Off'){
       span.textContent = 'On';
       btnToggle.classList.add('on');
    }else{
      span.textContent ='Off';
      btnToggle.classList.remove('on');
    }
 });
});
