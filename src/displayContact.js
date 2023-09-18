let htmlBody = document.getElementById("content")

export function displayContact(){
    console.log("Testing")
    let contactContainer = document.createElement("div")
    contactContainer.id = "display-contact"
    contactContainer.classList.add("tab-content")
    htmlBody.appendChild(contactContainer)

    let formContainer = document.createElement("div")
    formContainer.id = "form-container"
    contactContainer.appendChild(formContainer)

    formContainer.innerHTML += `
    <h2 id="form-title">Get in touch with us</h2>
    <form id="feedback-form" action=".">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" placeholder="John">

        <br>

        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" placeholder="Smith">

        <br>

        <label for="mobile">Mobile:</label><br>
        <input type="mobile" id="mobile" name="mobile">

        <br>

        <label for="mail">Email:</label><br>
        <input placeholder="John@Smith.com" type="email" id="mail" name="mail">

        <br><br>

        <textarea rows="20" id="feedback" placeholder="Enter your feedback here" id="comments" name="comments"></textarea>

        <br><br>
        <input id="submit-button" type="submit" value="Submit">
    </form>`

    }