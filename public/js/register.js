

let registerForm = document.getElementById("register-form");

if(registerForm){
    registerForm.addEventListener("submit", function (e) {
    
        // Prevent the form from submitting
        e.preventDefault();
    
        // Get form fields we need to get data from
        let inputEmail = document.getElementById("input-register-email");
        let inputUsername = document.getElementById("input-register-username");
        let inputPassword = document.getElementById("input-register-password");
    
        // Get the values from the form fields
        let emailValue = inputEmail.value;
        let usernameValue = inputUsername.value;
        let passwordValue = inputPassword.value;
    
        // Put our data we want to send in a javascript object
        let user = {
            email: emailValue,
            username: usernameValue,
            password: passwordValue,
            pfp: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            aboutme: ""
        }

        console.log(user)

        // Setup our AJAX request
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/users", true);
        xhttp.setRequestHeader("Content-type", "application/json");

        // Tell our AJAX request how to resolve
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {

                // Clear the input fields for another transaction
                inputEmail.value = '';
                inputUsername.value = '';
                inputPassword.value = '';
            }
            else if (xhttp.readyState == 4 && xhttp.status != 200) {
                console.log("There was an error with the input.")
            }
        }

        // Send the request and wait for the response
        xhttp.send(JSON.stringify(user));
    

        window.location.replace(('/user' + user.username))

    })
}
