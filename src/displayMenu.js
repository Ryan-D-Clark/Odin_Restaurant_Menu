let htmlBody = document.getElementById("content")

export function displayMenu(){
    let menuContainer = document.createElement("div")
    menuContainer.id = "display-menu"
    menuContainer.classList.add("tab-content")
    htmlBody.appendChild(menuContainer)

    let pizzaMenu = document.createElement("div")
    pizzaMenu.id = "pizza-menu"

    let title = document.createElement("div")
    title.id = "menu-title"
    title.innerHTML = "Clark's Pizza"
    pizzaMenu.appendChild(title)

    let pizzaList = document.createElement("div")
    pizzaList.id = "pizza-list"
    pizzaMenu.appendChild(pizzaList)

    let pizzas = [
        {
            "name" : "Margherita",
            "desc" : "Tomato sauce and cheese",
            "price" : "£8.40"
        },
        {
            "name" : "Funghi",
            "desc" : "With mushrooms",
            "price" : "£11.20"
        },
        {
            "name" : "Chorizo Pizza",
            "desc" : "Chorizo, red onion, mixed bell peppers, fresh cherry tomatoes",
            "price" : "£11.20"
        },
        {
            "name" : "Pepperoni",
            "desc" : "With pepperoni",
            "price" : "£11.20"
        },
        {
            "name" : "Tandoori Chicken",
            "desc" : "Tandoori chicken and onions",
            "price" : "£11.20"
        },
        {
            "name" : "Mexicana",
            "desc" : "Topped with home made bolognese and jalapenos",
            "price" : "£12.70"
        }
    ]

    for(let i in pizzas){
        let container = document.createElement("div")
        container.classList.add("pizza")

        let name = document.createElement("div")
        name.innerHTML = pizzas[i]["name"]
        name.classList.add("pizza-name")

        let desc = document.createElement("div")
        desc.innerHTML = pizzas[i]["desc"]
        desc.classList.add("pizza-desc")

        let price = document.createElement("div")
        price.innerHTML = pizzas[i]["price"]
        price.classList.add("pizza-price")

        container.appendChild(name)
        container.appendChild(desc)
        container.appendChild(price)
        pizzaList.appendChild(container)

    }


    menuContainer.appendChild(pizzaMenu)

    }