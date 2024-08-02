window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.fa-bars');
    const close = document.querySelector('.fa-times');
    const headerLinks = document.querySelector('.header-links');

    hamburger.addEventListener('click', () => {
        headerLinks.classList.toggle('active');
    });
    close.addEventListener('click', () => {
        headerLinks.classList.toggle('active');
    });


    const accordionItems = document.querySelectorAll('.accordion-item');
    let activeItem = document.querySelector('.accordion-item.active');

    accordionItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if(!item.classList.contains('active')){
                item.style.flexBasis = '33%';
            }
        });
        item.addEventListener('mouseout', () => {
            if(!item.classList.contains('active')){
                item.style.flexBasis = '25%';
            }
        });
        item.addEventListener('click', () => {
            activeItem.classList.remove('active');
            activeItem.style.flexBasis = '25%';
            item.classList.add('active');
            item.style.flexBasis = '50%';
            activeItem = item;
        });
    });

    const bentoBoxItems = document.querySelectorAll('.bento-box-item');

    bentoBoxItems.forEach((item) => {
        const hoverContent = item.querySelector('.bento-box-onhover');
        item.addEventListener('mouseover', () => {
            hoverContent.style.transform = 'translate3d(0, -150%, 0)';
            hoverContent.style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            hoverContent.style.transform = 'translate3d(0, 0, 0)';
            hoverContent.style.opacity = '0';
        });
    });

    const advanceCarousel = document.getElementById('advance-carousel');
    const reverseCarousel = document.getElementById('reverse-carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const innerDiv = document.getElementById('inner-div');
    
    let currentCarouselPosition = 0;
    advanceCarousel.addEventListener('click', () => {
        moveCarousel(1);
    });
    
    reverseCarousel.addEventListener('click', () => {
        moveCarousel(-1);
    })
    
    function moveCarousel (direction){
        let increment = window.innerWidth < 768 ? 75 : 31;
        currentCarouselPosition += direction * increment;
        if (increment === 75 && currentCarouselPosition === -4 * increment) {
            currentCarouselPosition = 2 * increment;
        }
        else if(increment === 75 && currentCarouselPosition === 4 * increment){
            currentCarouselPosition += 0;
        }
        else if(increment === 75 && currentCarouselPosition === 5 * increment){
            currentCarouselPosition = 0;
        }
        else if (currentCarouselPosition === -3 * increment) {
            currentCarouselPosition = 2 * increment;
        }
        else if (currentCarouselPosition === 3 * increment) {
            currentCarouselPosition = -2 * increment;
        }
        if (currentCarouselPosition < 0) {
            innerDiv.style.transform = 'translate3d(' + Math.abs(currentCarouselPosition) + 'vw, 0, 0)';
        } else {
            innerDiv.style.transform = 'translate3d(-' + currentCarouselPosition + 'vw, 0, 0)';
        }
        innerDiv.style.transition = 'transform 1s ease-in-out';
        let newFeaturedTestimonial = null;
        carouselItems.forEach((item, index) => {
            if(item.classList.contains('featured-testimonial')){
                item.classList.remove('featured-testimonial');
                newFeaturedTestimonial = index + direction;
                if(newFeaturedTestimonial == 6){
                    newFeaturedTestimonial = 1;
                }
                else if(newFeaturedTestimonial == 0){
                    newFeaturedTestimonial = 5;
                }
            }});
            carouselItems[newFeaturedTestimonial].classList.add('featured-testimonial');
    }
    
});

const faqItems = document.querySelectorAll('.faqs li');

faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        if (item.classList.contains('active')) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    });
})