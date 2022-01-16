import React from "react";

type ItemType = {
     title: string
     value: any
}

export type AccordionPropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    items?: ItemType[]
    onClick?: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle titleValue={props.title}
                        onClickCallback={props.onChange}
                        />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    titleValue: string
    onClickCallback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    // const onClickTitleHandler = (event: MouseEvent<HTMLHeadingElement>) => {
    //     props.setAccordionCollapsed(!props.collapsed)
    // }
    return <h3 onClick={(e) => props.onClickCallback()}>
        {props.titleValue}
    </h3>
}

type AccordionBodyPropsType = {
    items?: ItemType[]
    onClick?: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items?.map( (i, index) => <li key={index} onClick={() => {props.onClick && props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    )
}
