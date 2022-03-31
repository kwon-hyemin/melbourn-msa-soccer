import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import styles from "styles/basic/Counter.module.css";

export default function Counter() {
  const count = useState(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('0')
  const incrementValue = Number(incrementAmount) || 0


  return (<>
    <button onClick={() => setCount(count+1)}> + </button>
    <button onClick={() => setCount(count-1)}> - </button>
    <div>{count}</div>
    </>
  )
}