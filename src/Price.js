import { useState } from "react";

const Price = (props) =>{

    return (
        <div className="price">
            <p style={{fontSize: "30px"}}>Estimated Price: $ {props.amount}</p>
        </div>
    );
};

export default Price;