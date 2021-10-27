(function () {

    let socials = document.querySelectorAll('.social div')
    
    socials.forEach(function(social, index){
        social.style.animation = `moveIn .5s cubic-bezier(0.075, 0.82, 0.165, 1.2) forwards ${index/8 + 0.2}s`

    });

    let rocket_animation = document.querySelectorAll('.middle_block span')
    //   console.log(rocket_animation);
    let rocket = document.querySelector('.rocket')

    let triggerStart = window.innerHeight / 5;

    let rocketOffsetTop = rocket.offsetTop;
    
    let thirdOffsetTop = rocket_animation[2].offsetTop;
    
    document.addEventListener('scroll', (e) => {
        if(window.scrollY > (rocketOffsetTop - triggerStart)){
            rocket_animation[0].classList.add('active_animation');
            rocket_animation[1].classList.add('active_animation');
        }else{
            rocket_animation[0].classList.remove('active_animation');
            rocket_animation[1].classList.remove('active_animation');
        }

        if(window.scrollY > (thirdOffsetTop - triggerStart)){
            rocket_animation[2].classList.add('active_animation');
        
        }else{
            rocket_animation[2].classList.remove('active_animation');            
        }
    })

}())