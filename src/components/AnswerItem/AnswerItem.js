import classes from './AnswerItem.module.css'

const AnswerItem = props => {

    const clazz = [classes.AnswerItem]

    if (props.state) {
        clazz.push(classes[props.state])
    }

    return (
        <li className={clazz.join(' ')}
        onClick={() => props.onAnswerClick(props.answer.id)}>
            { props.answer.text}
        </li>
    )
}

export default AnswerItem