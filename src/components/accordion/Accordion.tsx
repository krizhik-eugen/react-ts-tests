import React from "react";
import {UncontrolledRating} from "../uncontrolledRating/UncontrolledRating";

type AccordionPropsType = {
    titleValue: string,
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
                { !props.collapsed && <AccordionBody/> }
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => props.onClick(!props.collapsed)}>-- {props.title} --</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}