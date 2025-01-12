function email_checker(){
    var a=document.getElementById("email").value
    if(a.indexOf("@") == -1){
        alert("ელ-ფოსტა არასწორი ფორმატითაა ჩაწერილი");
    }
}

function password_checker(){
    var a=document.getElementById("pass").value
    var b=document.getElementById("pass_check")
    const asoebi = /[a-z]/
    const didi_asoebi = /[A-Z]/
    const ricxvebi = /[0-9]/
    const simboloebi = /[!@#$%^&*(),.?":{}|<>]/ 
    if (asoebi.test(a) && didi_asoebi.test(a) && ricxvebi.test(a) && simboloebi.test(a)) {
        b.innerHTML = "<font color='green'>პაროლი საიმედოა</font>"
    } 
    else if ((asoebi.test(a) && ricxvebi.test(a))||(didi_asoebi.test(a) && ricxvebi.test(a))) {
        b.innerHTML = "<font color='orange'>პაროლი საშუალო სიძლიერისაა</font>"
    } 
    else if (asoebi.test(a) || didi_asoebi.test(a) || (a.length<5 && a.length>0) ) {
        b.innerHTML = "<font color='red'>პაროლი სუსტია</font>"
    } 
    else if (a.length<8 && a.length>0) {
    b.innerHTML = "<font color='red'>პაროლი მაინც 8 სიმბოლოსგან უნდა შედგებოდეს</font>"
    }
    else if (a=="") {
        b.innerHTML = " "
    } 
    else {
        b.innerHTML = "არასწორი ფორმატი"
    }
    document.getElementById("pass").addEventListener("input", password_checker);
}
password_checker()


