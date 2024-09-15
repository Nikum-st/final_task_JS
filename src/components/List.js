import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $title = document.createElement('h2');
    $title.classList.add('donates-container__title');
    $title.textContent = 'Список донатов';

    const $listContainer = document.createElement('div');
    $listContainer.classList.add("donates-container__donates");

    this.$rootElement.appendChild($title);
    this.$rootElement.appendChild($listContainer);

    this.$listContainer = $listContainer;
    this.$rootElement.addEventListener('click', this.deleteItem.bind(this))
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  deleteItem(event){
    const buttonDelete = event.target.closest('.donate-item');
    if(buttonDelete &&  event.target.classList.contains('delete-button')){
      const index = [...this.$listContainer.children].indexOf(buttonDelete);
      this.props.onDelete(index);
      buttonDelete.remove();
    }
  }
}