import React from "react";
import Button from "../UI/Button";
import "./Table.css";

const Table = (props) => {
    const dltBtn_handler = (e) => {
        localStorage.removeItem(e.target.parentElement.firstElementChild.textContent);
        e.target.parentElement.remove();
    }
    return (
        <div className="table">
            <h2>{props.tableNo}</h2>
            {props.data.map((i) => {
                return <div className="data" key={i.id}>
                    <h3>{i.id}</h3>
                    <h3>{i.dish}</h3>
                    <h3>{i.amount}</h3>
                    <Button className="dlt_btn" onClick={dltBtn_handler}>Delete</Button>
                </div>
            })}
        </div>
    )
}

export default Table;