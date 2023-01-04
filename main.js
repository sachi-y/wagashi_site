/*load*/
window.onload =()=>{
    const loadOff = document.getElementById('l-wrap');
    loadOff.classList.add('load__off');
    loadOff.classList.add('load__stop');
};

$(function() {
    $('.p-header__menuBtn').click(function() {
        if($('.l-wrap').hasClass('menu__off')){
            $('.l-wrap').removeClass('menu__off');
            $('.l-wrap').addClass('menu__on');
        }else if($('.l-wrap').hasClass('menu__on')){
            $('.l-wrap').removeClass('menu__on');
            $('.l-wrap').addClass('menu__off');
        }else{
            $('.l-wrap').addClass('menu__on');
        }
    });
});

/*slider*/
// $(function(){
//     $('.p-slider').slick({
//         autoplay:true,
//         autoplaySpeed:5000,
//         cssEase:"linear",
//         speed:0,
//         slidesToShow:5,
//         slidesToScroll:1,
//         arrows:false,
//         infinite: true,
//     })
// });

//分からない
// $(function(){
//     var divElement=document.getElementById("p-slider");
//     var lastElementChild=divElement.lastElementChild;
//     var firstElementChild=divElement.firstElementChild;
//     setInterval(function(){
//         if($('.p-slider__list').hasClass('p-slider__list1')){
//             $('.p-slider__list1').removeClass('p-slider__list1');
//         }else if($('.p-slider__list').hasClass('p-slider__list2')){
//             $('.p-slider__list').addClass('p-slider__list1');
//             $('.p-slider__list').removeClass('p-slider__list2');
//         }else if($('.p-slider__list').hasClass('p-slider__list3')){
//             $('.p-slider__list').addClass('p-slider__list2');
//             $('.p-slider__list').removeClass('p-slider__list3');
//         }else if($('.p-slider__list').hasClass('p-slider__list4')){
//             $('.p-slider__list').addClass('p-slider__list3');
//             $('.p-slider__list').removeClass('p-slider__list4');
//         }else if($('.p-slider__list').hasClass('p-slider__list5')){
//             $('.p-slider__list').addClass('p-slider__list4');
//             $('.p-slider__list').removeClass('p-slider__list5');
//         }else if($('.p-slider__list').hasClass('p-slider__list6')){
//             $('.p-slider__list').addClass('p-slider__list5');
//             $('.p-slider__list').removeClass('p-slider__list6');
//         }else if($('.p-slider__list').hasClass('p-slider__list7')){
//             $('.p-slider__list').addClass('p-slider__list6');
//             $('.p-slider__list').removeClass('p-slider__list7');
//         }else if($('.p-slider__list6').next('.p-slider__list').length!=lastElementChild.length){
//             $('.p-slider__list6').next('.p-slider__list').addClass('p-slider__list7');
//         }else if($('.p-slider__list').next('.p-slider__list').length==lastElementChild.length){
//             firstElementChild.addClass('p-slider__list7');
//             lastElementChild.removeClass('p-slider__list7');
//         }else{
//             $('.p-slider__list').removeClass('p-slider__list1');
//         }
//     },5000);
// });

$(function() {
    setInterval(function(){
    $(".p-slider__list1").removeClass("p-slider__list1"),
    $(".p-slider__list2").addClass("p-slider__list1"),
    $(".p-slider__list2").removeClass("p-slider__list2"),
    $(".p-slider__list3").addClass("p-slider__list2"),
    $(".p-slider__list3").removeClass("p-slider__list3"),
    $(".p-slider__list4").addClass("p-slider__list3"),
    $(".p-slider__list4").removeClass("p-slider__list4"),
    $(".p-slider__list5").addClass("p-slider__list4"),
    $(".p-slider__list5").removeClass("p-slider__list5"),
    $(".p-slider__list6").addClass("p-slider__list5"),
    $(".p-slider__list6").removeClass("p-slider__list6"),
    $(".p-slider__list7").addClass("p-slider__list6"),
    $(".p-slider__list7").removeClass("p-slider__list7"),
    $(".p-slider__list6").next(".p-slider__list").length
        ?$(".p-slider__list6").next(".p-slider__list").addClass("p-slider__list7")
        :$(".p-slider > .p-slider__list:nth-child(1)").addClass("p-slider__list7")},5000);
});

// $(function slideStart(){
//     slideTimer=setInterval(slideAuto,5000)});
// $(function slideStop(){
//     clearInterval(slideTimer)});

// function loadSetting(){
//     $(".wrap").removeClass("load__on"),
//     $(".wrap").addClass("load__off"),
//     $(".wrap").delay(500).queue(function(){$(this).addClass("load__stop").dequeue()}),
//     nowHash&&setTimeout(function(){
//         var t=$("#"+nowHash);
//         if(t=t.length&&t,t.length){
//             var e=t.offset().top-0;
//             $(html,body).animate({scrollTop:e},2e3,"easeInOutExpo")}},500),
//             scrollSetting()};
// function fontSetting(){FLAutoKerning.process($(".kerning_target")),
//     $(".kerning_target").addClass("kerning_complete"),
//     $(".kerning_target").removeClass("kerning_target")};

/*scroll*/
$(window).scroll(function() {
    //ウィンドウの高さを取得
    var windowH = $(window).height(),
    //スクロール位置を取得
    scrollY = $(window).scrollTop();
    $('.scroll__element').each(function() {
        //要素の位置（上端）を取得
        var thisPosition = $(this).offset().top;
        //要素の高さを取得
        var thisHeight = $(this).height();
        //要素の上端が、ウィンドウの下端よりも上か下か
        if (thisPosition <= scrollY + windowH) {
            $(this).addClass('scroll__on');
            $(this).removeClass('scroll__off');
            if($(this).hasClass('scroll__off1')){
                $(this).addClass('scroll__on1');
                $(this).removeClass('scroll__off1');
            }else if($(this).hasClass('scroll__on1')){
                $(this).removeClass('scroll__off1');
            }else if($(this).hasClass('scroll__off2')){
                $(this).addClass('scroll__on2');
                $(this).removeClass('scroll__off2');
            }else{
                $(this).removeClass('scroll__off2');
            };
        }else{
            $(this).addClass('scroll__off') ;
            $(this).removeClass('scroll__on');
            if($(this).hasClass('scroll__on1')){
                $(this).addClass('scroll__off1');
                $(this).removeClass('scroll__on1');
            }else if($(this).hasClass('scroll__off1')){
                $(this).removeClass('scroll__on1');
            }else if($(this).hasClass('scroll__on2')){
                $(this).addClass('scroll__off2');
                $(this).removeClass('scroll__on2');
            }else{
                $(this).removeClass('scroll__on2');
            };
        };
    });
});