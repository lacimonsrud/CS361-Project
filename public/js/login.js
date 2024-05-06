let loginForm = document.getElementById("login-form");

let response = ""

if(loginForm){
    loginForm.addEventListener("submit", function (e) {
    
        // Prevent the form from submitting
        e.preventDefault();
    
        // Get form fields we need to get data from
        let inputUsername = document.getElementById("input-username");
        let inputPassword = document.getElementById("input-password");
    
        // Get the values from the form fields
        let usernameValue = inputUsername.value;
        let passwordValue = inputPassword.value;
    
        // Put our data we want to send in a javascript object
        let user = {
            username: usernameValue,
            password: passwordValue
        }

        //console.log(user)

        // Setup our AJAX request
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/users", true);
        xhttp.responseType = "json";

        xhttp.onload = () => {
            if (xhttp.readyState === xhttp.DONE) {
              if (xhttp.status === 200) {
                console.log(xhttp.response);
                response = xhttp.response

                if(response){
                    response.forEach(element => {
                        console.log(element)
                        if((element.username == user.username) && (element.password == user.password)){
                            console.log("You successfully logged in!")
                            window.location.replace('/user' + user.username)
                        }
                    });
                }
              }
            }
        }

        // Send the request and wait for the response
        xhttp.send(null)
    
        //window.location.replace('/user')

    })
}