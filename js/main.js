var turkceNet = 0, matematikNet = 0, sosyalNet = 0, fenNet = 0, diplomaNotu;

function hesapla(ders) {
    let turkceD = document.getElementById("txtTurkceD");
    let turkceY = document.getElementById("txtTurkceY");
    let matematikD = document.getElementById("txtMatematikD");
    let matematikY = document.getElementById("txtMatematikY");
    let sosyalD = document.getElementById("txtSosyalD");
    let sosyalY = document.getElementById("txtSosyalY");
    let fenD = document.getElementById("txtFenD");
    let fenY = document.getElementById("txtFenY");
    let diploma = document.getElementById("txtdiploma");
    if (ders == "turkce") {
        if ((parseInt(turkceD.value) + parseInt(turkceY.value) < 41)) {
            turkceNet = turkceD.value - (turkceY.value / 4);
            document.getElementById("turkceNet").innerText = turkceNet;
        }
        else
            document.getElementById("turkceNet").innerText = 0;
    }
    else if (ders == "matematik") {
        if ((parseInt(matematikD.value) + parseInt(matematikY.value) < 41)) {
            matematikNet = matematikD.value - (matematikY.value / 4);
            document.getElementById("matematikNet").innerText = matematikNet;
        }
        else
            document.getElementById("matematikNet").innerText = 0;
    }
    else if (ders == "sosyal") {
        if ((parseInt(sosyalD.value) + parseInt(sosyalY.value) < 21)) {
            sosyalNet = sosyalD.value - (sosyalY.value / 4);
            document.getElementById("sosyalNet").innerText = sosyalNet;
        }
        else
            document.getElementById("tsosyalNet").innerText = 0;
    }
    else if (ders == "fen") {
        if ((parseInt(fenD.value) + parseInt(fenY.value) < 21)) {
            fenNet = fenD.value - (fenY.value / 4);
            document.getElementById("fenNet").innerText = fenNet;
        }
        else
            document.getElementById("fenNet").innerText = 0;
    }
    else if (ders == "diploma") {
        if (diploma.value >= 0 && diploma.value <= 100) {
            diplomaNotu = (diploma.value * 5) * 0.12;
            document.getElementById("diplomaOBP").innerText = diplomaNotu;
        }
        else
            document.getElementById("diplomaOBP").innerText = "-";
    }
}

function puanHesapla() {
    let puan = (turkceNet * 3.3) + (matematikNet * 3.3) + (sosyalNet * 3.4) + (fenNet * 3.4);
    document.getElementById("hamPuan").innerText = puan;
    document.getElementById("yerleşmePuan").innerText = puan + diplomaNotu;
}