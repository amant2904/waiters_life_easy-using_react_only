import React from "react";
import Table from "./Table";
import "./AllDetail.css";


const AllDetail = (props) => {
    localStorage.setItem(props.newData.id, JSON.stringify(props.newData));

    const t1_data = [];
    const t2_data = [];
    const t3_data = [];

    for (let i in localStorage) {
        if (i === "length") {
            break;
        }
        let obj = JSON.parse(localStorage[i]);
        if (obj.table === "t1") {
            t1_data.push(obj);
        }
        else if (obj.table === "t2") {
            t2_data.push(obj);
        }
        else if (obj.table === "t3") {
            t3_data.push(obj);
        }
    }

    return (
        <div className="all-details">
            <h1>All Orders</h1>
            <div className="all-tables">
                <Table tableNo="Table 1" data={t1_data} />
                <Table tableNo="Table 2" data={t2_data} />
                <Table tableNo="Table 3" data={t3_data} />
            </div>
        </div>
    )
}

export default AllDetail;