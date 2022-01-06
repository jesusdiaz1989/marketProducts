import react, { useState } from 'react';
import Button from '../../Utils/Button';
import './OrderProcess.css';

function OrderProcess(props) {
    
    const [value, setValue] = react.useState(props.value);

    return (
        <>
            <div className="wrap">
                <div className="contentTitle">
                    <h3 className="titleOrder"> Order detail from {props.nameClient} </h3>
                </div>
                <section className="contentProduct">
                    <p>List of products</p>
                    <ul>
                        {props.children}
                    </ul>
                </section>
                <footer>
                    <div className="contentFooter">
                        <div className="contentValue">
                            <p>Total Payment</p>
                            <p>${value} </p>
                        </div>
                        <div className="contentButton">
                            <Button type="button" value="Order Process" classStyle="buttonPay" />
                        </div>
                    </div>
                </footer>
            </div>
        </>
        
    );
}

export default OrderProcess;