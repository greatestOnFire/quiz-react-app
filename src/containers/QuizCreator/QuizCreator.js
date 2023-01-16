import React, {Component} from 'react';
import classes from './QuizCreator.css';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { createControl, validate, validateForm } from '../../form/formFramework';
import Select from '../../components/UI/Select/Select'

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
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = event => {
    event.preventDefault();
  }

  addQuiestionHandler = (event) => {
    event.preventDefault();

    const QUIZ = [...this.state.quiz];
    const INDEX = QUIZ.length + 1;

    const {question, option1, option2, option3, option4} = this.state.formControls

    const QUESTION_ITEM = {
      question: question.value,
      id: INDEX,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value,  id: option1.id},
        { text: option2.value,  id: option2.id},
        { text: option3.value,  id: option3.id},
        { text: option4.value,  id: option4.id},
      ]
    }

    QUIZ.push(QUESTION_ITEM);

    this.setState({
      quiz: QUIZ,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls()
    })
  }

  createQuizHandler = (event) => {
    event.preventDefault();

    console.log(this.state.quiz);
  }

  changeHandler = (value, controlName) => {
    const FORM_CONTROLS = JSON.parse(JSON.stringify(this.state.formControls));
    const CONTROL = JSON.parse(JSON.stringify(this.state.formControls[controlName]));

    CONTROL.touched = true;
    CONTROL.value = value;
    CONTROL.valid = validate(CONTROL.value, CONTROL.validation);

    FORM_CONTROLS[controlName] = CONTROL;

    this.setState({
      formControls: FORM_CONTROLS,
      isFormValid: validateForm(FORM_CONTROLS)
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const CONTROL = JSON.parse(JSON.stringify(this.state.formControls[controlName]));

      return (
        <React.Fragment key={controlName + index}>
          <Input
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

  selectChangeHandler = (event) => {
    this.setState({ 
      rightAnswerId: +event.target.value
    })
  }

  render() {

    const SELECT = <Select
      label="Выберите правильный ответ"
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4},
      ]}
    />

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>

            { this.renderInputs() }
            
            { SELECT }

            <Button 
              type="primary"
              onClick={this.addQuiestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button 
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}