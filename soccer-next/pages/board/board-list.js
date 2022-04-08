import boardStyles from "common/style/user-list.module.css"
import {useEffect, useState} from "react"
import axios from "axios"

const Board = ({columns, colspan, data}) => {
    return(
        <table className={boardStyles.board}>
            <thead>
            <tr className={boardStyles.tr}>
            {columns.map((column) => (
                <th key={column} className={boardStyles.td}>{column}</th>
            ))}
            
            </tr>
            </thead>
            <tbody>
                { data.length == 0  ?<tr className={boardStyles.tr}>
                                <td colSpan={colspan} className={boardStyles.td}>데이터가 없습니다</td>
                                </tr>
                :data.map((user) => (
                <tr className={boardStyles.tr}  key={user.passengerId} >
                  <td className={boardStyles.td}>{user.passengerId}</td>
                  <td className={boardStyles.td}>{user.teamId}</td>
                  <td className={boardStyles.td}>{user.name}</td>
                  <td className={boardStyles.td}>{user.subject}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function BoardList(){
    const columns = ["PassengerId","Name","Team","Subject"]
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/boardlist').then(res => {
            setData(res.data.boards)
        }).catch(err => {})
    },[])
    return(<>
        <h1>게시판 목록</h1>
        <div className={boardStyles.td}>
        <Board columns={columns} colspan={4} data = {data}/>
        </div>
        </>)
}