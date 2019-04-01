(function scrollToTop() {
    $('#top-btn').on('click', ScrollTop);

    document.addEventListener("scroll", yScroll);

    function yScroll() {

        let yPos = window.pageYOffset;

        if (yPos > 10) {
            document.getElementById("top-btn").style.bottom = "10px";
        } else {
            document.getElementById("top-btn").style.bottom = "-50px";
        }
    }

    function ScrollTop() {

        let i = window.pageYOffset;

        let intervalTimer = setInterval(function() {
            if (i > 0) {
                window.scrollTo(0, i);
                i -= 15;
            } else {
                document.getElementById("top-btn").style.bottom = "-50px";
                clearInterval(intervalTimer);
            }
        }, 0.5);
    }
})();