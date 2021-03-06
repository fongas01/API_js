let card_el = document.createElement("article")
card_el.classList.add("card. mb-2, mx-2")

let img_el = document.createElement("img")
img_el.src = "./img/relogio-de-vinil.jpg"
img_el.alt = "Relógio de vinil"
img_el.classList.add("card-img-top")

let card_body_el = document.createElement("div")
card_body_el.classList.add("card-body")

let card_title_el = document.createElement("h3")
card_title_el.textContent = "Relógio de vinil"
card_title_el.classList.add("card-title")

let card_description_el = document.createElement("p")
card_description_el.textContent = "Esse recurso é útil se você precisar identificar rapidamente os principais pontos de estratégias em uma coleção de documentos."
card - description - el.classList.add("card-text")

card_el.appendChild(img_el)

card_body_el(card_title)
card_body_el.appendChild(card_description)

card_el.appendChild(card_body_el)