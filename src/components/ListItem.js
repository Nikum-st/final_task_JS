import { Component } from '../core/Component';
import moment from 'moment';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: moment().format(`DD/MM/YYYY, HH:mm:ss`),
      amount: props.amount
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `${this.state.date} - $ <b>${this.state.amount}</b>`;

    const $buttonDelete = document.createElement('button');
    $buttonDelete.classList.add('delete-button');
    $buttonDelete.textContent = 'Удалить';

    this.$rootElement.append( $buttonDelete)
  }
}
