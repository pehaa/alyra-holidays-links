"use strict"
class ListLinks {
  constructor(container, defaultList) {
    this.container = container
    this.list = JSON.parse(localStorage.getItem("listLinks")) || defaultList
  }
  init() {
    this.render()
  }

  pushEl(el) {
    /* @todo : remplacer array vide [] dans const urls = [], par l'array qui contient tous les urls
    trouvés dans this.list */
    const urls = []

    if (!urls.includes(el.url)) {
      // si el.url n'est pas dans la liste des urls
      // je l'ajoute
      this.list.push(el)
      // et j'appelle la méthode refresh
      this.refresh()
    }
  }
  remove(el) {
    const i = this.list.findIndex((item) => item === el) // <- ce code trouve index de l'élément récherché
    this.list.splice(index, 1) // <- ce code enleve l'élément avec index i de list
    // @todo : appeller la méthode refresh
  }
  refresh() {
    // @todo: appele la méthode addToLocalStorage
    // @todo: appele la méthode render
  }
  addToLocalStorage() {
    /*
     le code ci-dessous convertis l'array list (array qui contients des objet) en format JSON afin de la
     sauvegarder en localStorage dans la clé "listLinks"
    */
    localStorage.setItem("listLinks", JSON.stringify(this.list))
  }
  render() {
    const ulEl = this.addUl()
    this.container.innerHTML = ""
    // @todo : attache ulEl à la fin de container
  }

  addUl() {
    const ulEl = document.createElement("ul")
    // @todo : ajouter des classes row list-unstyled mt-4
    for (let el of this.list) {
      const li = this.addLi(el)
      // @todo : append chaque li à élément ulEl
    }
    // @todo : retourner ulEl
  }

  addLi(el) {
    const liEl = document.createElement("li")
    // @todo : ajouter des classes à liEl border shadow-sm mb-3 p-2
    liEl.innerHTML = this.addTitle(el)
    // @todo : mettre en place le reste de son contentu en utilisant les méthodes
    //  addDescription(el)
    //  addLink(el)
    //  addButton(el)
    //  retourner liEl
  }

  addTitle(el) {
    // @todo : retourner le markup pour le titre (h3.h6.mb-0), <h3 class="h6 mb-0">Le titre</h3>
  }

  addDescription(el) {
    // @todo : retourner le markup pour la description, <p>Voici la description</p>
  }

  addLink(el) {
    /* @todo : retourner le markup pour le lien vers le ressource a.btn.btn-sm.btn-ouline-warning.mr-2 
    avec le texte visitez le lien */
  }

  addButton(el) {
    const buttonEl = document.createElement(button)
    // @todo : ajouter des classes btn btn-warning btn-sm
    // @todo : mettre le texte "Supprimer le lien"
    // @todo : ajouter un eventListener qui écoute pour 'click' qui déclanchera la méthode remove
    // @todo : retourner buttonEl
  }
}
