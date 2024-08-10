let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let slider = document.querySelector('.container')
let sliderList = slider.querySelector('.container .class-list')
let thumbnail = document.querySelector('.container .side-img')
let thumbnailItems = thumbnail.querySelectorAll('.list')
thumbnail.appendChild(thumbnailItems[0])
nextBtn.onclick = function(){
    moveSlider('next')
}

prevBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider(direction){
   let sliderItems = sliderList.querySelectorAll('.list')
   let thumbnailItems = document.querySelectorAll('.side-img .list')

   if(direction === 'next'){
      sliderList.appendChild(sliderItems[0])
      thumbnail.appendChild(thumbnailItems[0])
      slider.classList.add('next')
   }else{
      sliderList.prepend(sliderItems[sliderItems.length -1 ])
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
      slider.classList.add('prev')
   }

   slider.addEventListener('animationend', function(){
    if(direction === 'next'){
        slider.classList.remove('next')
    }else{
        slider.classList.remove('prev')
    }
   },{once: true})
} 
