$(document).ready(function(){
    $(".order-tabs .one-tab-btn").on("click", function(){
        var activeTab = $($(this).attr("data-tab"));
        $(".one-tab-btn").removeClass("active");
        $(this).addClass("active");
        activeTab.siblings().hide();
        activeTab.show();
    });
    $(".order-tabs .one-tab-btn.active").click();
});
console.log("test");