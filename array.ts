class Projectinput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;

    this.hostElement = <HTMLDivElement>document.getElementById('app')!;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = <HTMLFormElement>importedNode.firstElementChild;
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}