import React, {useState, ChangeEvent} from 'react';


export const ControlledInputSecret = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = ((event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value))
    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledCheckboxSecret = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = ((event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked))
    return (
        <div>
            <input type='checkbox' checked={parentValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledSelectSecret = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = ((event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value))
    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
            </select>
        </div>
    )
}