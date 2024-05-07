let exit1Btn = document.getElementById("exit-popup1");

exit1Btn.addEventListener("click", function (e){
    let popup1 = document.getElementById("popup1")
    popup1.classList.add("hide")
})

let exit2Btn = document.getElementById("exit-popup2");

exit2Btn.addEventListener("click", function (e){
    let popup2 = document.getElementById("popup2")
    popup2.classList.add("hide")
})

let postBtn = document.getElementById("add-post");

postBtn.addEventListener("click", function (e){
    let addPostPopup = document.getElementById("add-post-popup")
    addPostPopup.classList.remove("hide")
})

let exitPostBtn = document.getElementById("exit-add-post");

exitPostBtn.addEventListener("click", function (e){
    let youSure = document.getElementById("popup3")
    youSure.classList.remove("hide")
})

let yesBtn = document.getElementById("yes-exit");
if(yesBtn){
    yesBtn.addEventListener("click", function (e){
        let youSure = document.getElementById("popup3")
        youSure.classList.add("hide")
        let addPostPopup = document.getElementById("add-post-popup")
        addPostPopup.classList.add("hide")

        // Get form fields we need to get data from
        let inputImg = document.getElementById("input-pattern-img");
        let inputName = document.getElementById("input-pattern-name");
        let inputDesc = document.getElementById("input-pattern-description");
        let inputInstruct = document.getElementById("input-pattern-instructions");

        inputImg.value = ""
        inputName.value = ""
        inputDesc.value = ""
        inputInstruct.value = ""
    })
}

let noBtn = document.getElementById("no-exit")

if(noBtn){
    noBtn.addEventListener("click", function (e){
        let youSure = document.getElementById("popup3")
        youSure.classList.add("hide")
    })
    
}

changePic = document.getElementById("check-btn")

changePic.addEventListener("click", function(e){

    let inputImg = document.getElementById("input-pattern-img")

    let imgValue = inputImg.value

    let img = document.getElementById("post-img")

    img.src = imgValue
})


let postForm = document.getElementById("post-form");

if(postForm){
    postForm.addEventListener("submit", function (e) {

        let addPostPopup = document.getElementById("add-post-popup")
        addPostPopup.classList.add("hide")
    
        // Prevent the form from submitting
        e.preventDefault();
    
        // Get form fields we need to get data from
        let inputImg = document.getElementById("input-pattern-img");
        let inputName = document.getElementById("input-pattern-name");
        let inputDesc = document.getElementById("input-pattern-description");
        let inputInstruct = document.getElementById("input-pattern-instructions");
    
        // Get the values from the form fields
        let imgValue = inputImg.value;
        let nameValue = inputName.value;
        let descValue = inputDesc.value;
        let instructValue = inputInstruct.value;
    
        // Put our data we want to send in a javascript object
        let post = {
            img: imgValue,
            name: nameValue,
            desc: descValue,
            instruct: instructValue
        }

        inputImg.value = ""
        inputName.value = ""
        inputDesc.value = ""
        inputInstruct.value = ""

        console.log(post)

        var newP = document.createElement('p')
        var text = document.createTextNode(nameValue)
        var newPost = document.createElement('div')
        newP.appendChild(text)
        newP.classList.add("center")
        newPost.appendChild(newP)

        var newImg = document.createElement('img')
        newImg.src = imgValue

        newImg.setAttribute("id", "post-img-size")

        newImg.classList.add("center")

        newPost.appendChild(newImg)
        

        if(descValue){
            var newP2 = document.createElement('p')
            var text2 = document.createTextNode(descValue)
            newP2.appendChild(text2)
            newP2.classList.add("center")
            newPost.appendChild(newP2)
        }

        var newP3 = document.createElement('p')
        var text3 = document.createTextNode(instructValue)
        newP3.appendChild(text3)
        newP3.classList.add("center")
        newPost.appendChild(newP3)

        var posts = document.getElementById('posts')

        newPost.classList.add('post')

        posts.appendChild(newPost)

        //document.body.appendChild(newPost);

    })
}