var clock;

function clockCountdown(){
    clock = $('#main_clock').FlipClock(10/*clockSecond*/, {
        countdown: true,
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function () {
                // Вызов каждую секунду
            },
            stop:function (){
                // Вызов когда кончиться время
                console.log('stop');
                setTimeout(function(){
                    animateSpidy();
                },500);

            }
        }
    });
}


function animateSpidy(){
    var spidy = $('.spidy-wrap');
    spidy.addClass('active');
    setTimeout(function(){
        //console.log('animate is gone');
        // function about baraban run
        $('.baraban-main-wrap').addClass('animate');
        setTimeout(function(){
            resetClockTimer();
        },12000);
    },3400);
}




function resetClockTimer(){
    var spidy = $('.spidy-wrap');
    spidy.removeClass('active');
    $('.baraban-main-wrap').removeClass('animate');
    clock.setTime(10/*clockSecond*/);
    clock.start();
}


/* DOCUMENT READY  */
$(document).ready(function() {
    clockCountdown();
});

$(window).load(function(){

});

$(window).resize(function() {

});