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

/* reload game list */

    function reloadGameList(){

        var timer = null;

        /* ajax function for reloading players in page */

            function ajaxCallingForUsersList(){

                $.ajax({
                    url:'js/json/user_add.json',
                    data:'user_reload',
                    method:'POST',
                    success:function(data){

                        if(typeof data == 'object'){
                            var usersData = data;
                        }else{
                            var usersData = JSON.parse(data);
                        }

                        console.log(usersData);

                        /* progress bar change */

                            var progressValue = usersData.progressValue;

                            $('.progress-line').css('width', progressValue+'%');
                            $('.progress-value span').text(progressValue);

                        /* /progress bar change */

                        var usersBarabanLength = $('.baraban-main-wrap .user-img').length;
                        var dataUsersLength = usersData.usersList.length;

                        /* adding or not users images to baraban */

                            if($('.baraban-main-wrap .user-img.added').length < usersBarabanLength){

                                var usersMaxValue = usersBarabanLength;
                                if(dataUsersLength <= usersBarabanLength){
                                    usersMaxValue = dataUsersLength;
                                }

                                for(var i = 0;i < usersMaxValue;i++){

                                    $('.baraban-main-wrap .user-img').eq(i).html('<img src='+usersData.usersList[i].userImg+' alt="" />').addClass('added');
                                }

                            }


                        /* /adding or not users images to baraban */

                    }

                });

            }

        /* /ajax function for reloading players in page */

        ajaxCallingForUsersList();

        timer = setInterval(function(){

            if(!$('.baraban-main-wrap').is('.prepend-animate')){
                ajaxCallingForUsersList();
            }

        }, 10000);

        $(document).on('click', '.button-red-center', function(e){

            e.preventDefault();

            clearInterval(timer);

            ajaxCallingForUsersList();

            timer = setInterval(function(){

                if(!$('.baraban-main-wrap').is('.prepend-animate')){
                    ajaxCallingForUsersList();
                }

            }, 10000);

        });

    }

/* /reload game list */


$(document).ready(function(){

});

$(window).load(function(){

    reloadGameList();

});

$(window).resize(function(){

});