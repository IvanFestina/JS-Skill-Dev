import React, {MouseEvent, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    console.log("Accordion rendering")
    return <div>
        <AccordionTitle titleValue={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const changeCollapsed = (event: MouseEvent<HTMLHeadingElement>) => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={changeCollapsed}> {props.titleValue} </h3>
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
