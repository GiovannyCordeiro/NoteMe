// app/javascript/controllers/task_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  submitOnEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = this.element.firstElementChild;
      form.requestSubmit();
    }
  }
}