let htmlBody = document.getElementById("content")

export function displayMenu(){
    console.log("Testing")
    let menuContainer = document.createElement("div")
    menuContainer.id = "display-menu"
    menuContainer.classList.add("tab-content")
    menuContainer.innerHTML = "Menu"
    htmlBody.appendChild(menuContainer)
    }