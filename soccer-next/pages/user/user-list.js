import tableStyles from "common/style/user-list.module.css"
import { useEffect,useState } from "react"
import axios from "axios";

const Table = ({columns, colspan, data}) => {

  
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}>
                    {columns.map((column) => (
                        <th key={column} className={tableStyles.td}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                  { data.length == 0  ?<tr className={tableStyles.tr}>
                                      <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr className={tableStyles.tr}  key={user.userId} >
                  <td className={tableStyles.td}>{user.userId}</td>
                  <td className={tableStyles.td}>{user.pw}</td>
                  <td className={tableStyles.td}>{user.userName}</td>
                  <td className={tableStyles.td}>{user.tel}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"]
    const [data, setData] = useState([])
    useEffect(()=> {
      axios.get('http://localhost:5000/api/user/userlist').then(res => {
        setData(res.data.users)
      }).catch(err => {})
    },[])
    return(<>
        <h1>사용자 목록</h1>
        
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data = {data}/>
        </div>
    </>)
}