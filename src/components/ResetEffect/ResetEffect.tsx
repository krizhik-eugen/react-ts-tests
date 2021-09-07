import React, {useEffect, useState} from 'react';
import {log} from "util";
type PropsType = {}

export const ResetEffect: React.FC<PropsType> = (props) => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occured: ' + counter )
        return ()=>{
            console.log('effect reset ' + counter)}

    }, [counter])

    return (
        <div>
            Hello, counter: {counter} <button onClick={()=>setCounter((counter+1))}>+</button>
        </div>
    )
}