/* Открытие меню */
var main = function() { //главная функция
    $('.icon-menu').click(function() { //выбираем класс icon-menu и добавляем метод click с функцией, вызываемой при клике
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
        }, 200); //скорость движения меню в мс

        $('.background').animate({ //выбираем класс menu и метод animate
            left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
        }, 200); //скорость движения меню в мс
    });


/* Закрытие меню */
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '-285px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс

        $('.background').animate({ //выбираем класс menu и метод animate
            left: '-285px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс
    });
};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню

$(document).ready(function(){
 $('.one-sub').click(function(){
  $(this).parent().children('.one-spoiler-sub').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.two-sub').click(function(){
  $(this).parent().children('.two-spoiler-sub').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.three-sub').click(function(){
  $(this).parent().children('.three-spoiler-sub').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.four-sub').click(function(){
  $(this).parent().children('.four-spoiler-sub').slideToggle();
  return false;
 });
});

/* Spoiler Grum */

$(document).ready(function(){
 $('.one-grum').click(function(){
  $(this).parent().children('.spoiler-one-grum').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.two-grum').click(function(){
  $(this).parent().children('.spoiler-two-grum').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.three-grum').click(function(){
  $(this).parent().children('.spoiler-three-grum').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.four-grum').click(function(){
  $(this).parent().children('.spoiler-four-grum').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.six-grum').click(function(){
  $(this).parent().children('.spoiler-five-grum').slideToggle();
  return false;
 });
});

$(document).ready(function(){
 $('.seven-grum').click(function(){
  $(this).parent().children('.spoiler-six-grum').slideToggle();
  return false;
 });
});