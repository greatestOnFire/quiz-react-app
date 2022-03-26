import classes from './AnswerList.module.css'
import AnswerItem from './AnswerItem'

const AnswerList = props => {
    return (
        <ul className={classes.AnswerList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

export default AnswerList