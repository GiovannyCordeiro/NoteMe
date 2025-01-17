import { Controller } from "@hotwired/stimulus";

export default class extends Controller {;
  static targets = [ "deleteZone" ]
  static values = {
    dragged: { type: String, default: 'algo'}
  }


  // connect(){
  //   this.draggedElement = null
  // }

  startDrag(event) {
    console.log("LOG Start DraggedElement", this.draggedelement)
    this.draggedValue = event.currentTarget.outerHTML;
    console.log("LOG Start DraggedElement", this.draggedValue)
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    console.log("LOG Drop DraggedElement", this.draggedValue)

    // if (deleteZone && this.draggedElement) {
    //   const taskId = this.draggedElement.dataset.id;

    //   fetch(`/tasks/${taskId}`, {
    //     method: "DELETE",
    //     headers: {
    //       "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
    //     }
    //   }).then(response => {
    //     if (response.ok) {
    //       this.draggedElement.remove();
    //     }
    //   });

    //   this.draggedElement = null;
    // }
  }
}