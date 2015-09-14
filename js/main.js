$(document).ready(function () {

    function getRandom() {
        var sectionDef = $('.hero_container'),
            sectionN = sectionDef.find('section').length,
            random = Math.floor(Math.random() * ((sectionN - 1) + 1) + 1);
        $(sectionDef).find('section:nth-child(' + random + ')').addClass('openHero');
        $(sectionDef).mouseenter(function () {
            $(this).find('section').removeClass('openHero');
        });
    }
    function toggleHeaderShadow() {
        /*if(condition) {
            alert('boo');
        }*/
    }

    setTimeout(getRandom,3);
    toggleHeaderShadow();
});


