import axios from "axios"
import { useState } from "react"


export default function SignUp(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault() 
        const {name,value} = e.target
        setInputs({...inputs, [name] : value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/user/signup',inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return (<div><h1>회원가입폼</h1>
    <form action="" onSubmit={handleSubmit}>
  
    <div>
    <label><b>사용자ID</b></label>
    <input type="text" name='userId' onChange={handleChange}/><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password' onChange={handleChange} /><br />

    <label htmlFor=""><br/><b>이름</b></label>
    <input type="text" name='name' onChange={handleChange} /><br />

    <label htmlFor=""><b>전화번호</b></label>
    <input type="text" name='number' onChange={handleChange}/><br />

    <button>전 송</button><button>취 소</button>
    <input type = "submit" value= "가입"/>
    
    
    </div>
    </form>
    <div> <span id = "result-span"></span></div>
    </div>)
}