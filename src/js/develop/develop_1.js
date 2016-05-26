/* baraban moving script */

    function barabanMovingScript(){

        $.ajax({
            url:'js/json/viner_info.json', // ajaxurl
            data:'baraban-go',
            method:'POST',
            success:function(data){



            }
        });

    }

/* baraban moving script */

/* add user to game */

    function addUserToGame(){

        $.ajax({
            url:'js/json/user_add.json',
            data:'user_add',
            method:'POST',
            sucess:function(data){



            }

        });

    }

/* /add user to game */


$(document).ready(function(){

});

$(window).load(function(){

});

$(window).resize(function(){

});