(() => {
    let certImg = Array.from(document.querySelectorAll('.certImg'));

    for (let i = 0 ; i < certImg.length; i++) {
        certImg[i].addEventListener('click', function() {
            let parentElement = this;

            let modal = parentElement.getElementsByClassName('modal')[0];
            let modalImgSrc = modal.getElementsByClassName('modal-content')[0].src;
            let modalImg = modal.getElementsByClassName('modal-content')[0];
            let modalCaptionText = modal.querySelector('.caption p').innerHTML;
            let modalCaption = modal.querySelector('.caption p');
            let closeBtn = modal.querySelector('.certClose');

            $(modal).toggle();
            modalImg.src = modalImgSrc;
            modalCaption.innerHTML = modalCaptionText;

            $(closeBtn).on('click', () => {
                $(modal).toggle();
                $(modal).toggle();
            });
        });
    }
})();

