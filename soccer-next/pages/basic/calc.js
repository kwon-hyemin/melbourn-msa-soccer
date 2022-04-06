import axios from "axios";
import React, { useState } from "react";

export default function Calc() {
    const proxy = 'http://localhost:5000'

    const [inputs, setInputs] = useState({opcode: "+"})
    const [result, setResult] = useState(``)
    const { num1, opcode, num2} = inputs

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({...inputs,[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/basic/calc', inputs)
        .then(res =>{
            alert(`${JSON.stringify(res.data)}`)
            
        })
        .catch(err => alert(err))
    }

    return (<>
        <form action="" onSubmit={handleSubmit}>
        <h1>계산기</h1>
            <div>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={handleChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={handleChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />
            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={handleChange} /><br />
            <input type = "submit" value= "계산"/><br />
            </div>
        </form>
    </>
    )

    }