var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [40.38, 49.82],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
}
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<span class='next' > -  </span>Next", "Prev<span class='prev'>  -  </span>"],
    navClass: ['owl-prev', 'owl-next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
})

$(document).ready(function () {
    $('.fix-navbar').click(function (){ 
        
        
    });
});