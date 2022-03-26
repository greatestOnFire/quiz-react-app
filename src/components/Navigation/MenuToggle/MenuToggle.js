import classes from './MenuToggle.module.css'


const MenuToggle = props => {
    const clazz = [
        classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        clazz.push('fa-times')
        clazz.push(classes.open)
    } else {
        clazz.push('fa-bars')
    }

    return (
        <i
            className={clazz.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle