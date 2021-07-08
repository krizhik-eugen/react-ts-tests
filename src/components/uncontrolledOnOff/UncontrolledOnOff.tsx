import React, {useState} from 'react';

type OnOffType = {
    // on: boolean
}

export function UncontrolledOnOff(props: OnOffType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        width: '50px',
        height: '30px',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        padding: '2px'
    };
    const offStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        width: '50px',
        height: '30px',
        backgroundColor: !on ? 'red' : 'white',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px'
    };
    const indicator = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '15px',
        backgroundColor: on ? 'green' : 'red'
    };

    return (
        <div>
            <div>
                <div style={onStyle} onClick={() => setOn(true)}>On</div>
                <div style={offStyle} onClick={() => setOn(false)}>Off</div>
                <div style={indicator}></div>
            </div>
        </div>
    )
}

