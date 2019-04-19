(function Init() {
    new Waypoint.Inview({
        element: $('.progress'),
        entered: function (direction) {
            InitializeBars(direction);
            this.destroy();
        },
    });
})();

function InitializeBars() {
    $(function() {
            $("#pb1").animate({
                width: "70%"
            }, 999);
            $("#pb2").animate({
                width: "55%"
            }, 999);
            $("#pb3").animate({
                width: "60%"
            }, 999);
            $("#pb4").animate({
                width: "70%"
            }, 999);
            $("#pb5").animate({
                width: "70%"
            }, 999);
            $("#pb6").animate({
                width: "75%"
            }, 999);
            $("#pb7").animate({
                width: "75%"
            }, 999);
            $("#pb8").animate({
                width: "65%"
            }, 999);
            $("#pb9").animate({
                width: "90%"
            }, 999);
        
    });
}


