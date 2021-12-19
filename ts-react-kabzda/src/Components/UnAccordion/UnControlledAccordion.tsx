import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = { title: string }

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3> {props.title} </h3>
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
