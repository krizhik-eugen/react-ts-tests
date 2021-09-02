import React, {useState} from 'react';
import './App.css';
import {AccordionSecret} from "./components/accordion/AccordionSecret";
import {RatingSecret, RatingValueType} from "./components/rating/RatingSecret";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordionSecret} from "./components/uncontrolledAccordion/UncontrolledAccordionSecret";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOffSecret} from "./components/onOff/OnOffSecret";
import {
    ControlledCheckboxSecret, ControlledInputSecret,
    ControlledSelectSecret
} from "./components/inputCheckboxSelect/InputCheckboxSelect";
import {SelectSecret} from "./components/select/SelectSecret";
import {UseMemoDifficultCounting} from "./components/useMemoTest/useMemoTest";
import {SelectUseMemoTest} from "./components/select/SelectUseMemoTest";
import {Clock} from "./components/clock/Clock";

const Accordion = React.memo(AccordionSecret)
const OnOff = React.memo(OnOffSecret)
const Rating = React.memo(RatingSecret)
export const Select = React.memo(SelectSecret)
const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)
const ControlledInput = React.memo(ControlledInputSecret)
const ControlledCheckbox = React.memo(ControlledCheckboxSecret)
const ControlledSelect = React.memo(ControlledSelectSecret)

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(true)
    /*    let [inputValueControlled, setInputValueControlled] = useState('')*/
    let [selectValue1, setSelectValue1] = useState('2')
    let [selectValue2, setSelectValue2] = useState(null)

    return (
        <div className={'app'}>
            {/* <OnOff on={on} onClick={setOn}/>

            <UncontrolledOnOff/>

            <Accordion titleValue={'Menu'}
                       items={[{title: 'Eugen', value: 1}, {title: 'Margo', value: 2}, {
                           title: 'Nata',
                           value: 3
                       }, {title: 'Martin', value: 4}]}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       onClick={(id) => alert(`user with ID ${id} said hey`)}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
             <UncontrolledRating/>
             <div><input onChange={(e) => {
                inputValueControlled = e.currentTarget.value
            } }  /><button onClick={()=> setInputValueControlled(inputValueControlled)}>save</button>{inputValueControlled}</div>

            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
             <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <RatingSecret value={3}/>
            <AccordionSecret titleValue={'Menu'} collapsed={true}/>
            <AccordionSecret titleValue={'Users'} collapsed={false}/>
            Article 2
            <RatingSecret value={0}/>
            <RatingSecret value={1}/>
            <RatingSecret value={2}/>
            <RatingSecret value={3}/>
            <RatingSecret value={4}/>
            <RatingSecret value={5}/>
            <Select value={selectValue1} onChange={setSelectValue1} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Mosсow'},
                {value: '3', title: 'Kiev'}]}/>
            <Select value={selectValue2} onChange={setSelectValue2} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Mosсow'},
                {value: '3', title: 'Kiev'}]}/>

            <UseMemoDifficultCounting/>

*/}
            <hr/>

            <SelectUseMemoTest/>

            <hr/>
            <Clock/>

        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
