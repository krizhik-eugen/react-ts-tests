import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledSelect
} from "./components/inputCheckboxSelect/InputCheckboxSelect";
import {Select} from "./components/select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(true)
    let [inputValueControlled, setInputValueControlled] = useState('')
    let [selectValue1, setSelectValue1] = useState('2')
    let [selectValue2, setSelectValue2] = useState(null)

    return (
        <div className={'app'}>
            <OnOff on={on} onClick={setOn}/>
            {/*
            <UncontrolledOnOff/>
*/}
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
            {/* <UncontrolledRating/>*/}
            {/* <div><input onChange={(e) => {
                inputValueControlled = e.currentTarget.value
            } }  /><button onClick={()=> setInputValueControlled(inputValueControlled)}>save</button>{inputValueControlled}</div>
*/}
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            {/* <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <Select value={selectValue1} onChange={setSelectValue1} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Mocsow'},
                {value: '3', title: 'Kiev'}]}/>

            <Select value={selectValue2} onChange={setSelectValue2} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Mocsow'},
                {value: '3', title: 'Kiev'}]}/>
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
