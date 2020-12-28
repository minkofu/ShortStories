$('img').fadeIn(2000);
$('.title').fadeIn(3000);

$(function () {
    setTimeout("animation()", 2500); //アニメーションが実行されるまでの時間
});

function animation() {
    img_1();
    img_2();
    img_3();
    img_4();
    img_5();
    img_6();
}

function img_1() {
    $('.img_1').animate({
        marginTop: '-=16px'
    }, 800).animate({
        marginTop: '+=16px'
    }, 800);
    setTimeout('img_1()', 1750); //アニメーションを繰り返す間隔
}

function img_2() {
    $('.img_2').animate({
        marginTop: '-=15px'
    }, 800).animate({
        marginTop: '+=15px'
    }, 800);
    setTimeout('img_2()', 1400); //アニメーションを繰り返す間隔
}

function img_3() {
    $('.img_3').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('img_3()', 1600); //アニメーションを繰り返す間隔
}

function img_4() {
    $('.img_4').animate({
        marginTop: '-=16px'
    }, 800).animate({
        marginTop: '+=16px'
    }, 800);
    setTimeout('img_4()', 1750); //アニメーションを繰り返す間隔
}

function img_5() {
    $('.img_5').animate({
        marginTop: '-=15px'
    }, 800).animate({
        marginTop: '+=15px'
    }, 800);
    setTimeout('img_5()', 1400); //アニメーションを繰り返す間隔
}

function img_6() {
    $('.img_6').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('img_6()', 1600); //アニメーションを繰り返す間隔
}
