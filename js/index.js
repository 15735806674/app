$(function () {
    $(".list").click(function(){
        var index=$(".list").index(this);
        // alert(index)
        $(".menu_list").hide().eq(index).css({
            display:"block"
        });
    })
})