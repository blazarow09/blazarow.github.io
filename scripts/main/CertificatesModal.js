(function f() {
    let pbModal = document.getElementById('pbModal');
    let pfModal = document.getElementById('pfModal');
    let stModal = document.getElementById('stModal');
    let caModal = document.getElementById('caModal');
    let cbModal = document.getElementById('cbModal');
    let coaModal = document.getElementById('coaModal');
    let jsfModal = document.getElementById('jsfModal');
    let soonModal = document.getElementById('soonModal');

    let pbImg = document.getElementById('pbImg');
    let pfImg = document.getElementById('pfImg');
    let stImg = document.getElementById('stImg');
    let caImg = document.getElementById('caImg');
    let cbImg = document.getElementById('cbImg');
    let coaImg = document.getElementById('coaImg');
    let jsfImg = document.getElementById('jsfImg');
    let soonImg = document.getElementById('soonImg');

    let pbModalImg = document.getElementById("pbImgF");
    let pfModalImg = document.getElementById("pfImgF");
    let stModalImg = document.getElementById("stImgF");
    let caModalImg = document.getElementById("caImgF");
    let cbModalImg = document.getElementById("cbImgF");
    let coaModalImg = document.getElementById("coaImgF");
    let jsfModalImg = document.getElementById("jsfImgF");
    let soonModalImg = document.getElementById("soonImgF");

    let pbCaptionText = document.getElementById("pbCaption");
    let pfCaptionText = document.getElementById("pfCaption");
    let stCaptionText = document.getElementById("stCaption");
    let caCaptionText = document.getElementById("caCaption");
    let cbCaptionText = document.getElementById("cbCaption");
    let coaCaptionText = document.getElementById("coaCaption");
    let jsfCaptionText = document.getElementById("jsfCaption");
    let soonCaptionText = document.getElementById("soonCaption");

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

    cbImg.onclick = function() {
        cbModal.style.display = "block";
        cbModalImg.src = this.src;
        cbCaptionText.innerHTML = this.src;
    };

    coaImg.onclick = function() {
      coaModal.style.display = "block";
      coaModalImg.src = this.src;
      coaCaptionText.innerHTML = this.src;
    };

    jsfImg.onclick = function(){
      jsfModal.style.display = "block";
      jsfModalImg.src = this.src;
      jsfCaptionText.innerHTML = this.src;
    };

    soonImg.onclick = function() {
      soonModal.style.display = "block";
      soonModalImg.src = this.src;
      soonCaptionText.innerHTML = this.src;
    };

    let pbClose = document.getElementById("pbClose");
    let pfClose = document.getElementById("pfClose");
    let stClose = document.getElementById("stClose");
    let caClose = document.getElementById("caClose");
    let cbClose = document.getElementById("cbClose");
    let coaClose = document.getElementById("coaClose");
    let jsfClose = document.getElementById("jsfClose");
    let soonClose = document.getElementById("soonClose");

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
    };

    cbClose.onclick = function () {
      cbModal.style.display = "none"
    };

    coaClose.onclick = function () {
        coaModal.style.display = "none"
    };

    jsfClose.onclick = function () {
      jsfModal.style.display = "none"
    };

    soonClose.onclick = function () {
      soonModal.style.display = "none"
    };
})();

