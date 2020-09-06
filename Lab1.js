arrayOfEmails = [];

function addEmail(){
    var Email = document.getElementById('validationTooltip02');
    arrayOfEmails.push(Email.value);

    for(var i = 0; i < arrayOfEmails.length; i++){
        document.write("<br>"+arrayOfEmails[i]);
    }
    
    Email.value="";

}
function removeEmail(){
    arrayOfEmails.pop('validationTooltip02')
}

