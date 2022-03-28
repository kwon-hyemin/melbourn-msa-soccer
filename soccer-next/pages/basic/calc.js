import React, { useState } from "react";
export default function Calc(){
    const [num1 ,setNum1] = useState()
    const [opcode ,setOpcode] = useState()
    const [num2 ,setNum2] = useState()
    const [result, setResult] = useState(0)
    const sum = () =>{
        let num1 = document.getElementById('num1').value
        console.log('숫자1:'+num1 )
        let num2 = document.getElementById('num2').value
        console.log('숫자2:'+num2 )
        setNum1(num1)
        setNum2(num2)
        switch(opcode){
            case "+":return setResult (Number (num1) + Number(num2))
            case "-":return setResult (Number (num1) - Number(num2))
            case "*":return setResult (Number (num1) * Number(num2))
            case "/":return setResult (Number (num1) / Number(num2))
            case "%":return setResult (Number (num1) % Number(num2))
            default :
            setOpcode(document.getElementById('opcode').value);
        }
    }
    
    
    
    return (<>

        <h1>Calc폼</h1>
        
    <div>    
    <label><b>num1</b></label>
    <input id = "num1" type=""/><br />
    
    <label htmlFor=""><b>opcode</b></label>
    <select  name="" id="opcode" onChange={()=>{sum()}}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
    </select>
    <br />
    
    <label htmlFor=""><b>num2</b></label>
    <input id = "num2" type= "" /><br/>

    <button onChange={()=>{sum()}}>실행</button>
        <div>결과! : {num1} {opcode} {num2} =  {result}  </div>
    </div>

    </>)
}