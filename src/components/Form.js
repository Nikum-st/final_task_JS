import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $inputLabel = document.createElement('label');
    $inputLabel.classList.add('donate-form__input-label');
    $inputLabel.textContent = 'Введите сумму в $';
  
    const $donateInput = document.createElement('input');
    $donateInput.type =  "number";
    $donateInput.classList.add('donate-form__donate-input');
    $donateInput.name = "amount";
    $donateInput.max = 100;
    $donateInput.min = 1;
    $donateInput.setAttribute('required', '');
    $inputLabel.append($donateInput);

    const $submitButton = document.createElement('button');
    $submitButton.classList.add('donate-form__submit-button');
    $submitButton.disabled = true;
    $submitButton.type = 'submit';
    $submitButton.textContent = 'Задонатить';

    this.$rootElement.appendChild($inputLabel);
    this.$rootElement.appendChild($submitButton);

    this.$input = $donateInput;
    this.$button = $submitButton;
    this.$submitButton = $submitButton;

    this.$input.addEventListener('input' , this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit' , this.handleSubmit.bind(this));
  }

  handleInput(event) {
    if (event.target.value.length === 1 && event.target.value === '0') {
      event.target.value = '';  
    }
    this.state.amount = event.target.value;
    if(this.isValid){
      this.$submitButton.disabled = false;
    }else{
      this.$submitButton.disabled = true
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.isValid){
      this.props.onSubmit(this.state.amount)
      this.state.amount = '';
      this.$input.value = '';
      this.$submitButton.disabled = true;
    }
  }
  get isValid (){
    return this.state.amount >=1 && this.state.amount <= 100;
  }
}
