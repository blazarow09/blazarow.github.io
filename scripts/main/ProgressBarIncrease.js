(function Init() {
    new Waypoint.Inview({
        element: $('.progress'),
        enter: function (direction) {
            InitializeBars(direction);
            this.destroy();
        },
    });
})();

function InitializeBars(direction) {
    $(function() {

        if(direction === "down"){
            $("#pb1").animate({
                width: "60%"
            }, 999);
            $("#pb2").animate({
                width: "40%"
            }, 999);
            $("#pb3").animate({
                width: "50%"
            }, 999);
            $("#pb4").animate({
                width: "70%"
            }, 999);
            $("#pb5").animate({
                width: "60%"
            }, 999);
            $("#pb6").animate({
                width: "70%"
            }, 999);
            $("#pb7").animate({
                width: "70%"
            }, 999);
            $("#pb8").animate({
                width: "60%"
            }, 999);
            $("#pb9").animate({
                width: "90%"
            }, 999);
        }
    });
}


