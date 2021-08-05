import React, {useState} from 'react';

export type OnOffType = {
    on: boolean
    onClick: (on: boolean) => void
}

export function OnOffSecret(props: OnOffType) {

    const onStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        width: '50px',
        height: '30px',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block',
        padding: '2px'
    };
    const offStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        width: '50px',
        height: '30px',
        backgroundColor: !props.on ? 'red' : 'white',
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
        backgroundColor: props.on ? 'green' : 'red'
    };

    const onClicked = () => props.onClick(true)
    const offClicked = () => props.onClick(false)

    return (
        <div>
            <div>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={offClicked}>Off</div>
                <div style={indicator}></div>
            </div>
        </div>
    )
}

