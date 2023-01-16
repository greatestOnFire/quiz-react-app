import React, {Component} from 'react';
import classes from './QuizCreator.css';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { createControl } from '../../form/formFramework';

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: createFormControls()
  }

  submitHandler = event => {
    event.preventDefault();
  }

  addQuiestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (value, controlName) => {

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const CONTROL = JSON.parse(JSON.stringify(this.state.formControls[controlName]));

      return (
        <React.Fragment>
          <Input
             key={controlName + index}
             label={CONTROL.label}
             value={CONTROL.value}
             valid={CONTROL.valid}
             shouldValidate={!!CONTROL.validation}
             touched={CONTROL.touched}
             errorMessage={CONTROL.errorMessage}
             onChange={event => this.changeHandler(event.target.value, controlName)}
        />
        { index === 0 && <hr/>}
        </React.Fragment>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>

            { this.renderInputs() }
            <select></select>
            <Button 
              type="primary"
              onClick={this.addQuiestionHandler}
            >
              Добавить вопрос
            </Button>
            <Button 
              type="success"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}