const MyCheckBox = document.getElementById("mycheckbox");
const MyStudyBox = document.getElementById("studing");
const MyGymBox = document.getElementById("Gym");
const MySportsBox = document.getElementById("Sports");
const MySubmit = document.getElementById("mysubmit");
const Rohan = document.getElementById("rohan");
const submitres = document.getElementById("submitresponse");

MySubmit.onclick = function(){

    if(MyCheckBox.checked){
        Rohan.textContent = `Welcome Mr. Rohan!`;
        if(MyStudyBox.checked){
            submitres.textContent = `Good. But Focus On Gym and Sports too`;
        }
        else if(MyGymBox.checked){
            submitres.textContent = `Good. But Focus on Study and Sports too`;
        }
        else if(MySportsBox.checked){
            submitres.textContent = `Good. But Focus on Study and Gym too`;
        }
        else{
            submitres.textContent = `Focus on Your Goals.`;
        }
        }
    else{
        Rohan.textContent = `This Response can be only submit by Rohan`;
        }   
}