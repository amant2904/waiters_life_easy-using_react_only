import React from "react";
import "./Input.css";

const Input = (props) => {
    return (
        <div className={`input-field`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

export default Input;