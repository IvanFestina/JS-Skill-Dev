import React, {useState} from 'react';
import s from './App.module.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledAccordion} from './Components/UncontrolledAccordion/UnControlledAccordion';
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [lights, setLights] = useState<boolean>(true)


    return (
        <div className={s.App}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu"}
                       onClickCallback={() => setAccordionCollapsed(!accordionCollapsed)}
                       collapsed={accordionCollapsed}/>
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating />
            {/*<OnOff lights={lights}*/}
            {/*       setLights={setLights}/>*/}
            <UncontrolledOnOff onChange={setLights}/> {lights.toString()}

        </div>
    );
}

type PageTitlePropsType = { title: string }

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;

