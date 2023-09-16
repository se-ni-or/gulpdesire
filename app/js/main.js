$(function () {

    $('.header__btn').on('clik',function (){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('clik',function (){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

})