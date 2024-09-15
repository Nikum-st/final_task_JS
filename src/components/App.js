import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      courent: 0,
      donates: []
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $h1 = document.createElement('h1');
    $h1.innerHTML = `${props.title}: $<span>${this.state.courent}</span>`;
    $h1.classList.add('total-amount');
    this.$rootElement.append($h1);
    this.$h1 = $h1

    const $donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild($donateForm.$rootElement);
    const $donateList = new List({onDelete: this.onItemDelete.bind(this)});
    this.$rootElement.appendChild($donateList.$rootElement);
    this.$donateList = $donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({amount});
    this.state.donates.push(item);
    this.state.courent += Number(amount);
    this.$h1.innerHTML = `${this.props.title}: $<span>${this.state.courent}</span>`;
    this.$donateList.addItem(item);
  }
  onItemDelete(index){
    const itemDelete = this.state.donates[index];
    const amount = itemDelete.state.amount;
    this.state.courent -= amount;
    this.$h1.innerHTML = `${this.props.title}: $<span>${ this.state.courent}</span>`;
    this.state.donates.splice(index,1)
  }
}
