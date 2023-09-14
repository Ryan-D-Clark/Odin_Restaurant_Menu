let htmlBody = document.getElementById("content")

export function displayHome(){
    console.log("Testing")
    let homeContainer = document.createElement("div")
    homeContainer.id = "display-home"
    homeContainer.classList.add("tab-content", "active-content")

    let homeTitle = document.createElement("div")
    homeTitle.id = "home-title"
    homeTitle.innerHTML = "Clark's \n Pizza"


    homeContainer.appendChild(homeTitle)
    htmlBody.appendChild(homeContainer)
    }

