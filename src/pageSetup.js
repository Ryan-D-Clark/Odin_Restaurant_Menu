import * as Home from'./displayHome'
import * as Menu from'./displayMenu'
import * as Contact from'./displayContact'
let htmlBody = document.getElementById("content")

let header = document.createElement("div");
let title = document.createElement("div")
let menu = document.createElement("div")
let home = document.createElement("div")
let contact = document.createElement("div")


header.id = "header"
title.id = "title"
home.id = "home"
menu.id = "menu"
contact.id = "contact"

home.classList.add("tab")
menu.classList.add("tab")
contact.classList.add("tab")

home.classList.add("active-tab")


htmlBody.appendChild(header)
header.appendChild(title)
header.appendChild(home)
header.appendChild(menu)
header.appendChild(contact)

title.innerHTML = "Clark's Pizza"
home.innerHTML = "Home"
menu.innerHTML = "Menu"
contact.innerHTML = "Contact"

Home.displayHome()
Menu.displayMenu()
Contact.displayContact()

// Function is for active tab, will then run a js function from Home, menu etc. to change content

let tabList = ["display-home", "display-menu", "display-contact"]

let tabs = document.querySelectorAll(".tab")
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", function() {
        for (let x = 0 ; x < tabs.length; x++){
            tabs[x].classList.remove("active-tab")
        }
        tabs[i].classList.add("active-tab")
        for (let content in tabList){
            document.getElementById(tabList[content]).style.display = "none"
        }
        document.getElementById(tabList[i]).style.display = "block"
    })
}
