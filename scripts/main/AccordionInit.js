$(function accordionInit() {
    let icons = {
        header: "ui-icon-star",
        activeHeader: "ui-icon-star"
    };

    $("#accordion-tm").accordion({
        heightStyle: "content",
        collapsible: true,
        icons : icons,
        border: "1px solid black"
    });

    $("#accordion-ed").accordion({
            heightStyle: "content",
            collapsible: true,
            icons : icons,
            border: "1px solid black"
        });

    $("#accordion-pe").accordion({
            heightStyle: "content",
            collapsible: true,
            icons : icons,
            border: "1px solid black"
        });
});
