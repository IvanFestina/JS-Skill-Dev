import React, {useState, MouseEvent} from "react";

// type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 }


export function UncontrolledRating(props: any) {
    console.log("Rating rendering")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5 ) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    const changeValue = (event: MouseEvent<HTMLSpanElement>) => {
       props.setValue(props.value)
    }

    return <span onClick={changeValue}>
    {props.selected ? <b>star </b> : "star "}
     </span>
}