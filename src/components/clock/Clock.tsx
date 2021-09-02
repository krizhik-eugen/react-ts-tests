import React, {useEffect, useState} from 'react';

// @ts-ignore
import AnalogClock from 'analog-clock-react'

let options = {
    width: "200px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#fff",
    handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff"
    }
};

type PropsType = {}
const newTimeValuesWith2Digits = (t: number) => t < 10 ? '0' + t : t

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }


    }, [])

    return (
        <div>
            <AnalogClock {...options}/>
            <div>
                <span>{newTimeValuesWith2Digits(date.getHours())}</span>
                :
                <span>{newTimeValuesWith2Digits(date.getMinutes())}</span>
                :
                <span>{newTimeValuesWith2Digits(date.getSeconds())}</span>
            </div>
        </div>
    )
}