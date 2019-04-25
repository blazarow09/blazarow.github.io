(function Init() {
    new Waypoint.Inview({
        element: $('.progress'),
        entered: function (direction) {
            InitializeBars();
            this.destroy();
        },
    });
})();

function InitializeBars() {
    
	$(function() {
		let bars = $('#progressBars .bar');

		for (let i = 0; i < bars.length; i++) {
			const bar = bars[i];
			let percent = $(bar).attr('aria-valuemax');

			$(bar).animate({
				width: `${percent}%`
			}, 999)
		}
	});
}


