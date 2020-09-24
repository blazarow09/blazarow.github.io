$(function accordionInit() {
    let icons = {
        header: "ui-icon-star",
        activeHeader: "ui-icon-star"
    };

    let accordionConfig = {
        heightStyle: "content",
        collapsible: true,
        icons : icons,
        border: "1px solid black"
    }

    $("#accordion-tm").accordion(accordionConfig);

    $("#accordion-ed").accordion(accordionConfig);

    $("#accordion-pe").accordion(accordionConfig);

    $("#accordion-sp").accordion(accordionConfig);
});
