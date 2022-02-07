var inpField1 = document.getElementById('inpField1');
var inpField2 = document.getElementById('inpField2');
var resField = document.getElementById('resField');
var form = document.getElementById('percForm');

form.addEventListener('submit', function(event){
    if(!inpField1.value || !inpField2.value){
        alert("Please enter values in both the input fields");
    }
    else{
        var x = parseFloat(inpField1.value);
        var y = parseFloat(inpField2.value);
        var result = x/y;
        var percent = result * 100;

        resField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});