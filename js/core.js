var gnbBtn = null;
var gnbPanel = null;
var popPanel = null;
var popBtn = null;
var muiBtn = null;
var gnbNav = null;

$(document).ready(function(){
    init();
    gnb(gnbBtn,gnbPanel);
    gnbClose();
    imgSlider();
    videoSlider();
    activeToggle(popPanel,popBtn);
    toggleUI(muiBtn,gnbNav);
});

function init(){
    gnbBtn = $('header nav ul li span');
    gnbPanel = $('header nav ul li div');
    popBtn = $(".btn_popUp");
    popPanel = $("[id$=Panel]");
    muiBtn = $('.mui');
    gnbNav = $('header div nav');
}

function activeToggle(target,btn){
    $(btn).click(function(){
        var activePop = $(this).attr('data-callPopup');
        $("#" + activePop).addClass('active');
    });
    $('.btn_close').click(function(){
        $(target).removeClass('active');
    });
}

function gnb(btn,panel){
    $(btn).click(function(){
        var activePanel = $(this).attr('data-GNBName');

        $(btn).removeClass('active');
        $(this).addClass('active');
        $(panel).removeClass('active');
        $('#' + activePanel).addClass('active');
    });
    $(document).scroll(function(){
        $(btn).removeClass('active');
        $(panel).removeClass('active');
    });
}
function gnbClose(){
    $(".btn_back").click(function(){
        $(this).parents("div").removeClass("active");
    });
}
function imgSlider(){
    $('.latestSlider').bxSlider({
        touchEnabled: false,
        pagerCustom: '.customPager',
        auto: true,
        pause: 5500,
        speed: 1500,
        autoHover: false,
    });
}

function videoSlider(){
    $('.videoSlider').bxSlider({
        mode: 'fade',
        speed: 300,
        video : true,
        controls: false,
        pager: true,
        pagerType: 'full',
        pagerCustom : '.videoPager'
    });
    $(".fluid-width-video-wrapper iframe").attr('scrolling','no');
}

function toggleUI(btn,target){
    $(btn).click(function(){
        $(target).toggleClass('active');
    });
}