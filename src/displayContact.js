let htmlBody = document.getElementById("content")

export function displayContact(){
    console.log("Testing")
    let contactContainer = document.createElement("div")
    contactContainer.id = "display-contact"
    contactContainer.classList.add("tab-content")
    contactContainer.innerHTML = "Contact"
    htmlBody.appendChild(contactContainer)
    }