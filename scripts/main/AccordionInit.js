$(function accordionInit() {
    let icons = {
        header: "ui-icon-star",
        activeHeader: "ui-icon-star"
    };

    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        icons : icons,
        border: "1px solid black"
    });

    $("#accordionEd").accordion({
            heightStyle: "content",
            collapsible: true,
            icons : icons,
            border: "1px solid black"
        });
});
