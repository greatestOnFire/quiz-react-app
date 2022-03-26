import {Component, Fragment} from 'react'

import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'



const links = [
    1, 2, 3
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link} </a>
                </li>
            )
        })
    }

    render() {

        const clazz = [classes.Drawer]

        if (!this.props.isOpen) {
            clazz.push(classes.close)
        }

        return (
            <Fragment>
                <nav className={clazz.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null } 
            </Fragment>
        )
    }
}

export default Drawer