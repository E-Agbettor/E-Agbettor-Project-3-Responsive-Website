let submit = document.getElementById('submit')
    submit.addEventListener('click', validation)

 //function to validate input field 
function validation (){
        let fname = document.getElementById("fname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

         // Validate email address
    if(email == "") {
        alert("Please enter your email address");
        } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            alert("Please enter a valid email address");
        } else{
           // Validate mobile number
            if(phone == "") {
                alert("Please enter your mobile number");
                } else {
                var regex = /^[1-9]\d{8}$/;
                if(regex.test(phone) === false) {
                    alert("Please enter a valid 9 digit mobile number");
                } else{
                    alert(`Your Name: ${fname}, Your email: ${email}, Your tel: ${phone} and Message: ${message}. -> submitted successfully.`);
                }
            }
        }
    }
    
    


}