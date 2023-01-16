import React, {Component} from 'react';
import is from 'is_js';

import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  validateControl(value, validation) {
      if (!validation) {
        return true
      }

      let isValid = true;

      if (validation.required) {
        isValid = value.trim() !== '' && isValid
      }

      if (validation.email) {


        isValid = is.email(value) && isValid;
      }

      if (validation.minLength) {
        isValid = value.length >= validation.minLength;
      }

      return isValid
  }

  onChangeHandler = (event, controlName) => {

    
    const FORM_CONTROLS = JSON.parse(JSON.stringify(this.state.formControls));
    const CONTROL = JSON.parse(JSON.stringify(this.state.formControls[controlName]));

    CONTROL.value = event.target.value;
    CONTROL.touched = true;
    CONTROL.valid = this.validateControl(CONTROL.value, CONTROL.validation);

    console.log(CONTROL.valid, ' valid');

    FORM_CONTROLS[controlName] = CONTROL;

    let isFormValid = true;

    Object.keys(FORM_CONTROLS).forEach(name => {
      isFormValid = FORM_CONTROLS[name].valid && isFormValid
    })

    this.setState((state) => {
      return {formControls: FORM_CONTROLS, isFormValid}
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
        const CONTROL = this.state.formControls[controlName];

        return (
          <Input 
            key={controlName + index}
            type={CONTROL.type}
            value={CONTROL.value}
            valid={CONTROL.valid}
            touched={CONTROL.touched}
            label={CONTROL.label}
            shouldValidate={!!CONTROL.validation}
            errorMessage={CONTROL.errorMessage}
            onChange={event => this.onChangeHandler(event, controlName)}
          />
        )
    });

  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form
            className={classes.AuthForm} 
            onSubmit={this.submitHandler}>

            { this.renderInputs() }

            <Button 
              type="success" 
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
              >
                Войти
            </Button>
            <Button 
              type="primary" 
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
              >
                Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}