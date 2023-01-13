import React, {Component} from 'react'
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form
            className={classes.AuthForm} 
            onSubmit={this.submitHandler}>
            <Input 
              label="Email" 
              
              />

            <Input 
              label="Паароль"
              errorMessage={"TEST"}
              />

            <Button 
              type="success" 
              onClick={this.loginHandler}>
                Войти
            </Button>
            <Button 
              type="primary" 
              onClick={this.registerHandler}>
                Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}