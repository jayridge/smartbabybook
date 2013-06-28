var c = {}
$(document).on('pageshow', function( event, ui ) {
    $('.carousel').each(function(i, e){
        var slides = []
        $(e).find('ul li span').each(function(j, l){
            slides.push($(l).html())
        })
        var carousel = new SwipeView($(e).find('.wrapper')[0], {
            numberOfPages: slides.length,
            hastyPageFlip: true
        })
        for (var i=0; i<3; i++) {
            var page = i==0 ? slides.length-1 : i-1;
            var el = document.createElement('span');
            el.innerHTML = slides[page];
            carousel.masterPages[i].appendChild(el)
        }
        carousel.onFlip(function () {
            var el, upcoming, i;

            for (var i=0; i<3; i++) {
                upcoming = carousel.masterPages[i].dataset.upcomingPageIndex;
                if (upcoming != carousel.masterPages[i].dataset.pageIndex) {
                    el = carousel.masterPages[i].querySelector('span');
                    el.innerHTML = slides[upcoming];
                }
            }
        });
        carousel.pageWidth = $('#wrapper')[0].clientWidth
        c = carousel
    })
})
