function snow() {
    var flake = $("#container").css({"position": "absolute", "color": "#fff"}).html("❉");
    var newOne = 100; //雪花产生的时间
    var dW = $(document).width();  //获取页面宽度
    var dH = $(document).height(); //获取页面高度

    setInterval(function () {
        var sL = dW * Math.random();  //产生宽距
        var eL = dW * Math.random();  //结束宽距
        var fS = 5 + 50 * Math.random(); //雪大小

        var dT = 4000 + 7000 * Math.random(); //下落需要的事件
        var sO = 0.7 + 0.3 * Math.random(); //雪花产生时的透明度
        var eO = 0.4 + 0.3 * Math.random(); //雪花产生时的透明度
        flake.clone().appendTo($("body")).css({
            "left": sL,
            "top": "-55px",
            "font-size": fS,
            "opacity": sO
        }).animate({
            "left": eL,
            "top": dH,
            "opacity": eO
        }, dT, function () {
            $(this).remove();
        });
    }, newOne);
};
snow();