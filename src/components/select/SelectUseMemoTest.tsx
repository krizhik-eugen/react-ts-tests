import React, {useMemo, useState} from "react";
import {Select} from "../../App";
import {users} from "../../../../js-ts/src/08/08";

export type CityType = {
    value: string
    title: string
    countryID?: number
    citizens?: number
}

const cities: Array<CityType> = [
    {value: '1', title: 'Minsk', countryID: 1, citizens: 2000000},
    {value: '2', title: 'Mosсow', countryID: 2, citizens: 118000000},
    {value: '3', title: 'Kiev', countryID: 3, citizens: 2800000},
    {value: '4', title: 'Odessa', countryID: 3, citizens: 990000},
    {value: '5', title: 'Zaslavl', countryID: 1, citizens: 15000},
    {value: '6', title: 'Hamburg', countryID: 5, citizens: 1900000},
    {value: '7', title: 'Smolensk', countryID: 2, citizens: 330000},
    {value: '8', title: 'Zhodino', countryID: 1, citizens: 65000},
    {value: '9', title: 'Paris', countryID: 4, citizens: 2100000},
    {value: '10', title: 'Borisov', countryID: 1, citizens: 145000},
    {value: '11', title: 'Novgorod', countryID: 2, citizens: 220000},
    {value: '12', title: 'Berlin', countryID: 5, citizens: 3700000},
    {value: '13', title: 'Cologne', countryID: 5, citizens: 1100000},
    {value: '14', title: 'Marsel', countryID: 4, citizens: 870000}
]

export const SelectUseMemoTest = () => {


    // let firstMCities = cities.filter(c => c.title.toLocaleLowerCase().indexOf('m') === 0);
    const firstMCities = useMemo(() => {
        let tempArr = cities.filter(c => c.title.toLocaleLowerCase().indexOf('m') === 0)
        return tempArr
    }, cities)


    // let belarusCities = cities.filter(c => c.countryID === 1);
    let belarusCities = useMemo(() => {
        let tempArr = cities.filter(c => c.countryID === 1)
        return tempArr
    }, cities)


    // @ts-ignore
    let twoMillionsCities = cities.filter(c => c.citizens >= 2000000);


    const [selectValue1, setSelectValue1] = useState<string | null>(null)
    const [selectValue2, setSelectValue2] = useState<string | null>(null)
    const [selectValue3, setSelectValue3] = useState<string | null>(null)

    const [countValue, setCountValue] = useState(0)

    const inc = () => {
        setCountValue(countValue + 1)
        console.log('counted')
    }


    return (
        <div>

            <button onClick={inc}>inc</button>
            <div>{countValue}</div>
            <Select value={selectValue1} onChange={setSelectValue1} items={firstMCities}/>
            <Select value={selectValue2} onChange={setSelectValue2} items={belarusCities}/>
            <Select value={selectValue3} onChange={setSelectValue3} items={twoMillionsCities}/>
        </div>
    )
}