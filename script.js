$('.slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 10000,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false
        }
    }]
});

var element = document.getElementsByClassName('chart');
for (var i = 0; i < element.length; i++) {
    new EasyPieChart(element[i], {
        barColor: '#2cdfb3',
        trackColor: '#f0f0f2',
        size: 40,
        scaleColor: false
    });
}