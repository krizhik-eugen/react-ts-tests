import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionSecret(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>-- {props.title} --</h3>
        </div>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={()=> props.onClick(i.value)} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}