var clock;


function clockCountdown(){
    clock = $('#main_clock').FlipClock(clockSecond, {
        countdown: true,
        clockFace: 'MinuteCounter'
    });
}


$(document).ready(function(){
    clockCountdown();
});

$(window).load(function(){

});

$(window).resize(function(){

});
