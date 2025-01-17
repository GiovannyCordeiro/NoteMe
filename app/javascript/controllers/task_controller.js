import { Controller } from "@hotwired/stimulus";

let idElementDell = null
let targetElementDell = null
export default class extends Controller {;
  static targets = [ "deleteZone" ]

  startDrag(event) {
    idElementDell = parseInt(event.currentTarget.getAttribute('data-id'))
    targetElementDell = event.currentTarget.parentElement
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();

    if (idElementDell) {

      fetch(`/tasks/${idElementDell}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
        }
      }).then(response => {
        if (response.ok) {
          targetElementDell.remove();
          console.log("deu certo!")
        }
      });

      idElementDell = null;
    }
  }
}