import React from "react";
import {MouseEvent} from 'react'

export type AccordionPropsType = {
    titleValue: string
    onClickCallback: () => void
    collapsed: boolean
}
type AccordionTitlePropsType = {
    titleValue: string
    onClickCallback: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle titleValue={props.titleValue}
                        onClickCallback={props.onClickCallback}
                        />
        {!props.collapsed && <AccordionBody/>}
    </div>
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

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
