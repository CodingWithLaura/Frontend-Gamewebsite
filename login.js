function submit(){
    var form_div = document.getElementById('login_form');
    var inputs   = form_div.getElementsByTagName("input");
    var username = inputs[0].value;
    var password = inputs[1].value;
    var ausgabe = "hallo " + username;
    console.log(ausgabe);
}
