function Login(url){ 
    var email = document.getElementById("email").value;
    var sandi = document.getElementById("sandi").value;

    if (email !="" && sandi != ""){
        window.location = url;
    }else{
        alert("Masukkan ulang email dan kata sandi Anda");
    }
}