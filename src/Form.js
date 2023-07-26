import React, { useState } from "react";
import {QRCodeCanvas} from 'qrcode.react';



function Form(){
    const [text,setText]=useState(null);
    const [istrue,settrue]=useState(false);
    const [url,seturl]=useState("qr-code-generator");
    const handlesub = (event) => {
        event.preventDefault();
        settrue(true);
        
    }
    function con(URL){
        seturl(URL);
        settrue(false);
    }
    return(
        <>
            <form onSubmit={handlesub}>
            
            { istrue ? con(text) : null}
            <QRCodeCanvas value={url} />
            <br/>
            <br/>
            <input className="box" type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter the text/link"/>
            <br/>
            <br/>
            <button className="btn" type="submit" >CONVERT</button>

            </form>
        </>
    );
}

export default Form;