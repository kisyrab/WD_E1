$(function(){

    $(".main>li").hover(function(){
        // $(this).find(".sub").stop().slideDown();
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover


    // $(".main>li").mouseover(function(){
    //     $(this).children(".sub").stop().slideDown();
    // })//over
    // $(".main>li").mouseout(function(){
    //     $(".sub").stop().slideUp();
    // })//out

    //이미지 슬라이드

    // var n = 0
    // setInterval(function(){
    //     if(n==2){
    //         n=0;
    //     }else{
    //         n++;
    //     }

    //     $(".left_move").animate({left : n * (-100) + "%"}, 500)

    // },2800)


    setInterval(function(){
        $(".left_move").animate({left : "-100%"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0))
            $(".left_move").css({left:"0"})

        })
    },2500)

//모달팝업

    $(".p_click").click(function(){
        $(".modal , .popup").show();
    })
    $(".close").click(function(){
        $(".modal , .popup").hide();
    })


})//jquery
