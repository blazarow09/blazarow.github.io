$(function f() {
    let pbModal = document.getElementById('pbModal');
    let pfModal = document.getElementById('pfModal');
    let stModal = document.getElementById('stModal');
    let caModal = document.getElementById('caModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    let pbImg = document.getElementById('pbImg');
    let pfImg = document.getElementById('pfImg');
    let stImg = document.getElementById('stImg');
    let caImg = document.getElementById('caImg');


    let pbModalImg = document.getElementById("pbImgF");
    let pfModalImg = document.getElementById("pfImgF");
    let stModalImg = document.getElementById("stImgF");
    let caModalImg = document.getElementById("caImgF");

    let pbCaptionText = document.getElementById("pbCaption");
    let pfCaptionText = document.getElementById("pfCaption");
    let stCaptionText = document.getElementById("stCaption");
    let caCaptionText = document.getElementById("caCaption");


    pbImg.onclick = function(){
        pbModal.style.display = "block";
        pbModalImg.src = this.src;
        pbCaptionText.innerHTML = this.alt;
    };

    pfImg.onclick = function() {
      pfModal.style.display = "block";
      pfModalImg.src = this.src;
      pfCaptionText.innerHTML = this.alt;
    };

    stImg.onclick = function() {
      stModal.style.display = "block";
      stModalImg.src = this.src;
      stCaptionText.innerText = this.alt;
    };

    caImg.onclick = function() {
      caModal.style.display = "block";
      caModalImg.src = this.src;
      caCaptionText.innerHTML = this.alt;
    };

// Get the <span> element that closes the modal
    let pbClose = document.getElementById("pbClose");
    let pfClose = document.getElementById("pfClose");
    let stClose = document.getElementById("stClose");
    let caClose = document.getElementById("caClose");

// When the user clicks on <span> (x), close the modal
    pbClose.onclick = function() {
        pbModal.style.display = "none";
    };

    pfClose.onclick = function() {
        pfModal.style.display = "none";
    };

    stClose.onclick = function () {
        stModal.style.display = "none";
    };

    caClose.onclick = function () {
        caModal.style.display = "none"
    }
})();

