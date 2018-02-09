$(document).ready(function(){
    $(".order-tabs .one-tab-btn").on("click", function(){
        var activeTab = $($(this).attr("data-tab"));
        $(".one-tab-btn").removeClass("active");
        $(this).addClass("active");
        activeTab.siblings().hide();
        activeTab.show();
    });
    $(".order-tabs .one-tab-btn.active").click();

    $("[data-tooltip]").hover(function(e){
        $(".body").css({"position":"relative"});
           if(!$(".popover-container").length){
               var str = $(this).attr("data-tooltip");
               $("body").append(`<div class="popover-container">${str}</div>`);
               $(".popover-container").css($(this).offset()).fadeIn(150);
           }
        }, function(){
        if($(".popover-container").length){
            $(".popover-container").remove();
        }
    });

    $(".order-form .comments-link").click(function(){
       $(".order-form .show-comment").slideDown();
    });

    $(window).on('scroll', function(){
        var fixedTopOffset = 30;
        var distanceToBottom = 250; //185
        var scrollCartPosition = $(window).scrollTop() + $(".order-right .cart").outerHeight() + fixedTopOffset;
        var bottomOffsetParent = $(".order-right").offset().top + $(".order-right").outerHeight() - distanceToBottom;

        if( ($(".order-right").offset().top - fixedTopOffset) >=  $(document).scrollTop()){
            $(".order-right .cart").css({
                "position":"static"
            });
        } else if (scrollCartPosition < bottomOffsetParent){
            $(".order-right .cart").css({
                "position":"fixed",
                "top":"30px",
                "bottom":"auto"
            });
        } else if (scrollCartPosition >= bottomOffsetParent){
            var childTop = $(".order-right .cart").offset().top;
            $(".order-right .cart").css({
                "position":"absolute",
                "top": childTop - $(".order-right").offset().top + "px"
            });
        }
    });

    $(".js-show-tab").on("click", function(){
        var showTabClass = $(this).attr("data-show");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(showTabClass).siblings().hide();
        $(showTabClass).show();
    });
    $(".js-show-tab.active").click();

});
