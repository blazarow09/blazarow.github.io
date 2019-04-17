(() => {
    document.addEventListener('click', function (event) {
        let parentElement = event.target.parentNode;

        if ($(event.target).attr('class') === 'phover') {
            let modal = parentElement.getElementsByClassName('modal')[0];
            let modalImgSrc = modal.getElementsByClassName('modal-content')[0].src;
            let modalImg = modal.getElementsByClassName('modal-content')[0];
            let modalCaptionText = modal.querySelector('.caption p').innerHTML;
            let modalCaption = modal.querySelector('.caption p');

            $(modal).toggle();
            modalImg.src = modalImgSrc;
            modalCaption.innerHTML = modalCaptionText;
        }

        if ($(event.target).attr('class') === 'close') {
            let modal = event.target.parentNode;
            $(modal).toggle();
        }
    }, false);
})();

