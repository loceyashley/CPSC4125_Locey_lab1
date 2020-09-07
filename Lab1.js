arrayOfEmails = [];

//Add emails to the list 
function addEmail(){
    var Email = document.getElementById('validationTooltip02');
    arrayOfEmails.push(Email.value);
    printList();
}

//print list 
function printList(){
    /*for(var i = 0; i < arrayOfEmails.length; i++){
       //document.write("<br>"+arrayOfEmails[i]);
       document.getElementById("result").innerHTML = arrayOfEmails;
    }*/
    document.getElementById("result").innerHTML = arrayOfEmails;
}

//remove fromlist 
function removeEmail(){
    arrayOfEmails.pop('validationTooltip02')
    printList();
}

