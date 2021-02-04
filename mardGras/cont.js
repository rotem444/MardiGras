
$(document).ready(function() {
    $("#send").click(function() {
    let firstName, lastName, email, message;
    let emptyfields = [], correctEmail = true;
    if((firstName = $("#firstName").val()) == ""){
        emptyfields.push("First Name")
    }
    if((lastName = $("#lastNamee").val()) == ""){
        emptyfields.push("Last Name")
    }
    if((email = $("#email").val()) == ""){
        emptyfields.push("Email")
    }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val()))){
        correctEmail = false;
      }
    if((message = $("#message").val()) == ""){
        emptyfields.push("Last Name")
    }
    console.log(correctEmail)
    console.log(emptyfields)
    if(emptyfields.length > 0 || !correctEmail){
        let errorMessage = ""
        if(emptyfields.length > 0){
            errorMessage += "Empty fields are not allowed! please\nfill in the field"
            if(emptyfields.length > 1){
                errorMessage += "s"
            }
            errorMessage += ": " + emptyfields.join(", ")
            if(!correctEmail){
                errorMessage += "\n"
            }
        }
        if(!correctEmail){
            errorMessage += "Email address is invalid"
        }
        alert(errorMessage)
    }else{
        $("#emailForm").submit();
    }
    
    });
    
    
});