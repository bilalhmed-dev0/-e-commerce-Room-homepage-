const menuBtn = document.querySelector('.menu-btn');
const previous = document.querySelector('.fas');
const  next = document.querySelector('.great');
const Hero = document.querySelector('.hero');
const nav = document.querySelector('nav');




menuBtn.addEventListener('click' , ()=>{
    nav.classList.toggle('active');
})



//dealing with the slider
let images = ["images/desktop-image-hero-1.jpg","images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"];
let counter = 0;
// the greater than sign code
next.addEventListener('click', ()=>{
    counter++;
    if (counter > images.length -1 ){
        counter = 0;                   // if the counter is greater than images length then make the counter to zero i.e take it to theb begining
    }

    Hero.src = images[counter];
});
 // the less than sign code
previous.addEventListener('click', ()=>{ 
    counter--;
    if(counter < 0){   // if the counter is less than zero take it to the last image in thee array
        counter = images.length - 1;
    }

    Hero.src = images[counter];
});



