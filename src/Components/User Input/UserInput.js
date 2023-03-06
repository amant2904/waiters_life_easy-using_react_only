import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./UserInput.css"

const UserInput = (props) => {
    const [id, setId] = useState("");
    const [dish, setDish] = useState("");
    const [amount, setAmount] = useState("");
    const [table, setTable] = useState("t1");

    const id_handler = (e) => {
        console.log("id changing");
        setId(e.target.value);
    }

    const dish_handler = (e) => {
        console.log("dish changing");
        setDish(e.target.value);
    }

    const amount_handler = (e) => {
        console.log("amount changing");
        setAmount(e.target.value);
    }

    const selectTable_handler = (e) => {
        console.log("table changing");
        setTable(e.target.value);
    }

    const submitBtn_handler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="user-form">
            <h1>Add Orders</h1>
            <form>
                <Input label="ID" id="ID" type="text" placeholder="Enter ID here" value={id} onChange={id_handler} />
                <Input label="Dish" id="dish" type="text" placeholder="Enter the Dish here" value={dish} onChange={dish_handler} />
                <Input label="Amount" id="amount" type="number" placeholder="Enter Amount Here" value={amount} onChange={amount_handler} />
                <div className="select-table">
                    <label htmlFor="table">Choose Table</label>
                    <select id="table" value={table} onChange={selectTable_handler}>
                        <option value="t1">Table 1</option>
                        <option value="t2">Table 2</option>
                        <option value="t3">Table 3</option>
                    </select>
                </div>
                <Button type="submit" onClick={submitBtn_handler} className="submit_btn">Add Order</Button>
            </form>
        </div>
    )
}

export default UserInput;