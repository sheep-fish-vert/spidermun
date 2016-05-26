var clock;

function clockCountdown(){
    clock = $('#main_clock').FlipClock(20/*clockSecond*/, {
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

            },
            reset:function (){
                console.log('reset');
            }
        }
    });
}


function animateSpidy(){
    var spidy = $('.spidy-wrap');
    spidy.addClass('active');
    setTimeout(function(){
        console.log('animate is gone');
        // function about baraban run
    },3400);
}



function resetClockTimer(){
    spidy.removeClass('active');
    clock.setTime(20/*clockSecond*/);
    clock.start();
}





$(document).ready(function(){
    clockCountdown();
});

$(window).load(function(){

});

$(window).resize(function(){

});
