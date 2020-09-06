arrayOfEmails = [];

//Add emails to the list 
function addEmail(){
    var Email = document.getElementById('validationTooltip02');
    arrayOfEmails.push(Email.value);
    //update();
    printList();
}

//print list 
function printList(){
    for(var i = 0; i < arrayOfEmails.length; i++){
       //document.write("<br>"+arrayOfEmails[i]);
       document.getElementById("result").innerHTML = arrayOfEmails[i];
    }
}

//update list
function update(){
    arrayOfEmails = arrayOfEmails+addEmail();
}
//remove fromlist 
function removeEmail(){
    if (arrayOfEmails.length == 0)
    {
        document.write("There are no emails on the list too delete.");
    }
    arrayOfEmails.pop('validationTooltip02')
}

