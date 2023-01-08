function validasi(url) {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var institusi = document.getElementById("institusi").value;
    var sandi = document.getElementById("sandi").value;
    var konfirm = document.getElementById("konfirm").value;
    
    if (nama != "" && email != "" && institusi != "" && sandi != "" && konfirm == sandi ) {
        window.location = url;
    } else if (konfirm != sandi) {
        alert('Kata Sandi Tidak Cocok');
    } else {
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

function myFunctiondemo() {
    var x = document.getElementById("myList").value;
}
