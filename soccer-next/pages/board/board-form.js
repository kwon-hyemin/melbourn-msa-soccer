import { useState } from "react"
import style from "./style/board-form.module.css"


export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name,subject} = inputs
    const [result, setResult] =  useState(``)

    const onChange = (e) => {
        e.preventDefault()
        const {value,name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert(`데이터셋 출력 : ${JSON.stringify(subject)}`)
    }
    return (<>
        <h1>팀등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">PassengerId</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={onChange} />
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={onChange} />
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId">
                    <option value="K09" selected>Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={onChange}  text="화이팅 FC서울 !! " style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                onClick={handleSubmit} />
            </div>
            </htmlForm>
            </div>
    </>)
}