import React from 'react';
import classes from './Select.css'

const Select = props => {
    const HTML_FOR = `${props.label}-${Math.random()}`;

        return (
            <div className={classes.Select}>
                <label htmlFor={HTML_FOR}>{props.label}</label>
                <select
                 id={HTML_FOR}
                 value={props.value}
                 onChange={props.onChange}
                >
                    {props.options.map((option, index) => {
                        return (
                            <option
                                key={option.value + index}
                                value={option.value}
                            >
                                {option.text}
                            </option>
                        )
                    })}
                </select>
            </div>
        );
}

export default Select;