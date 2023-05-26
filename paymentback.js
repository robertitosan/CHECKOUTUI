function generate_year()                   
    {
        for (var i = 2023; i <= 2100; i++)

        {
            document.write ("<option value='" + i + "'>" + i + "</option>");
        }   
    }

        function val_cc () {          

        var expiry_month = document.getElementById("expiry_month").value;
        var expiry_year = document.getElementById("expiry_year").value;
        var today = new Date();
        var expiry_date = today.setFullYear(expiry_year, expiry_month);

        if (today.getTime() > expiry_date.getTime())

        {
            alert ("\u2022Expiry month and year cannot be blank/Expiry month and year is before today month and year.");

            return false;
        }
}

function show_month(obj) {
    document.getElementById('expiry_month').selectedIndex = obj.selectedIndex;
}

function confirmarcvv() {
    var input=document.getElementById("cvv");
    var value = input.value;
    value = value.replace(/\D/g,"");
    value = value.substring(0,4);
    input.value = value;
}

function confirmarcc() {
    var input=document.getElementById("ccn");
    var value = input.value;
    value = value.replace(/\D/g,"");
    value = value.substring(0,19);
    input.value = value;
}

function submit(){
    var ccn = document.getElementById("ccn");
    var ccnValue = ccn.value;
    var texto = document.getElementById("success");
    var cvv = document.getElementById("cvv");
    var cvvValue = cvv.value;
    var validccn = document.getElementById("validccn");
    var validcvv = document.getElementById("validcvv")

    console.log(ccnValue.length);
    if (ccnValue === '' || cvvValue === '' ) {
        texto.textContent = "Please complete all fields";
        if (ccnValue.length < 16 || ccnValue.length > 19 ) {
        validccn.textContent = "Fields have to be 16 to 19 characters";
      
        }else{
            validccn.textContent = "";
        }

        if (cvvValue.length < 3 || cvvValue.length > 4) {
            validcvv.textContent = "Fields must be 3 to 4 characters depending bank"
        }else{
            validcvv.textContent = ""
        }

    } else {
            texto.textContent = "Form completed";
    }

    
}