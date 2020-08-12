"use strict"
const container = document.getElementById("container")
const form = document.getElementById("form")

const listLinks = new ListLinks(container, defaultList)
listLinks.init()

// quand l'événement "submit" pour le formulaire est déclanché
form.addEventListener("submit", (event) => {
  /* le code dans la linge ci-dessous previent le formulaire d'envoyer des données, 
  on remplace le comportement par détaut par notre js */
  event.preventDefault()
  // regardons comment nous pouvons lire les valeurs soumises via le formulaire
  console.log("title", form.elements.title.value)
  console.log("url", form.elements.url.value)
  console.log("description", form.elements.description.url)
  console.log("category", form.elements.category.value)
  // méthode pushEl
  listLinks.pushEl({
    title: form.elements.title.value.trim(),
    url: "", // @todo : de la même façon on peut récupérer la valeur d'url depuis le formulaire
    description: "", // @todo : et la valeur de description depuis le formulaire,
    category: "", // @todo : et la valeur de category depuis le formulaire,
  })
  // la ligne ci-dessous fait un reset du formulaire (les champs redeviennent vides)
  form.reset()
})
