
let editPfp = document.getElementById("pfp-edit")

editPfp.addEventListener("click", function(e){
    let editModal = document.getElementById("pfp-edit-modal")
    editModal.classList.remove("hide")
})

let changePfp = document.getElementById("change-pfp")

changePfp.addEventListener("click", function(e){
    let editModal = document.getElementById("pfp-edit-modal")
    editModal.classList.add("hide")

    let inputPfpUrl = document.getElementById("input-pfp-url")

    let PfpUrlValue = inputPfpUrl.value

    let pfp = document.getElementById("pfp")

    pfp.src = PfpUrlValue

    let pfpObj = {
        pfpUrl: PfpUrlValue
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/users/pfp", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Clear the input fields for another transaction
            inputPfpUrl.value = '';
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(pfpObj));
})

let aboutMe = document.getElementById("about-me-edit")

aboutMe.addEventListener("click", function(e){
    let aboutMeEditModal = document.getElementById("about-me-edit-modal")
    aboutMeEditModal.classList.remove("hide")
})

let changeAboutMe = document.getElementById("change-about-me")

changeAboutMe.addEventListener("click", function(e){
    let aboutMeEditModal = document.getElementById("about-me-edit-modal")
    aboutMeEditModal.classList.add("hide")

    let inputAboutMe = document.getElementById("input-about-me")

    let aboutMeValue = inputAboutMe.value

    let aboutMe = document.getElementById("about-me")

    aboutMe.textContent = aboutMeValue

    let aboutme = {
        desc: aboutMeValue
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/users/aboutme", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Clear the input fields for another transaction
            inputAboutMe.value = '';
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(aboutme));
})