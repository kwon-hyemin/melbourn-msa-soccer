import axios from 'axios';
import React, { useState } from 'react';
export default function Bmi() {
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})
    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/basic/bmi', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }
    return (<div>
        <form action="" onSubmit={handleSubmit} >
            <h1>BMI</h1>
            <div>
                <label htmlFor="">이름</label>
                <input type="text" name="name" onChange={handleChange} /><br />

                <label htmlFor="">키</label>
                <input type="text" name="height" onChange={handleChange} /><br />

                <label htmlFor="">몸무게</label>
                <input type="text" name="weight" onChange={handleChange} /><br />
                <input type="submit" value="BMI 체크" /><br />
            </div>
        </form>
    </div>)
}