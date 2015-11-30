$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('#fixed_btn').on('click', function () {
        var audio = document.getElementById('audio');
        var play = document.getElementById('play');
        var pause = document.getElementById('pause');

        var volume = audio.volume;
        if (volume < 1) {
            audio.volume = 1;
            pause.style.display = "block";
            play.style.display = "none";
        } else {
            audio.volume = 0;
            pause.style.display = "none";
            play.style.display = "block";
        }
    })

});