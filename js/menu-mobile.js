$(function(){
    $('.menu-mobile').click(function(){
        $(this).find('ul').slideToggle();
    })

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(this).offset().top();

        $('html,body').animate({'scrollTop':offSetTop})

        return false;
    })
});