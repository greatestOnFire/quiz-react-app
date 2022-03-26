import classes from './Button.module.css'

const Button = props => {
    const clazz = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
            onClick={props.onClick}
            className={clazz.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button