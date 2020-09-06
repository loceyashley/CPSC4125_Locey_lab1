<script type="text/javascript">

arrayOfEmails = [];

function addEmail(){
    Var Email = document.getElementById('validationTooltip02');
    arrayOfEmails.push(Email.value);
    Email.value="";

}

function printEmail() {
  document.getElementById("values").innerHTML = values.join(", ");
}

function removeEmail(){
    arrayOfEmails.pop(validationTooltip02)
}



</script>