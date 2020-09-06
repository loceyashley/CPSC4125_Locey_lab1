<script type="text/javascript">

arrayOfEmails = [];

function addEmail(){
    var Email = document.getElementById('validationTooltip02');
    arrayOfEmails.push(Email.value);
    Email.value="";

}
function removeEmail(){
    arrayOfEmails.pop('validationTooltip02')
}



</script>