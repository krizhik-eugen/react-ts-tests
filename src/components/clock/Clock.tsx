import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

// @ts-ignore
import AnalogueClock from 'react-analogue-clock'

const clockOptions = {
    baseColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 5,
    centerColor: '#000000',
    handColors: {
        hour: '#000000',
        minute: '#000000',
        second: '#000000',
    },
    notchColor: '#000000',
    numbersColor: '#000000',
    showNumbers: true,
    size: 200
}

type PropsType = {}
const newTimeValuesWith2Digits = (t: number) => t < 10 ? '0' + t : t

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    const [analogTime, setAnalogTime] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className={s.clockBlock}>
            {analogTime ? <button onClick={() => setAnalogTime(false)}>Digital Clock View</button>
                : <button onClick={() => setAnalogTime(true)}>Analog Clock View</button>}

            {analogTime ? <AnalogueClock {...clockOptions} /> : <div className={s.digitalClockBlock}>
                <span>{newTimeValuesWith2Digits(date.getHours())}</span>
                :
                <span>{newTimeValuesWith2Digits(date.getMinutes())}</span>
                :
                <span>{newTimeValuesWith2Digits(date.getSeconds())}</span>
            </div>}
        </div>
    )
}