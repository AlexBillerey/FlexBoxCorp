$(document).ready(function () {

    function getRandom() {
        var sectionDef = $('.hero_container');
        var sectionN = sectionDef.find('section').length;
        var random = Math.floor(Math.random() * ((sectionN-1)+1)+1);
        $(sectionDef).find('section:nth-child('+random+')').addClass('openHero');
        $(sectionDef).mouseenter(function(){
            $(this).find('section').removeClass('openHero');
        })
    }

    setTimeout(getRandom,3);
});


