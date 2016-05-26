/* baraban script */

    function barabanScript(){

        $.ajax({
            url:'js/json/users_list_less.json', // ajaxurl  // js/json/user_list_more.json
            data:'baraban-go',
            method:'POST',
            success:function(data){



            }
        });

    }

/* baraban script */


$(document).ready(function(){

});

$(window).load(function(){

    barabanScript(); // remove after done Radiks work

});

$(window).resize(function(){

});