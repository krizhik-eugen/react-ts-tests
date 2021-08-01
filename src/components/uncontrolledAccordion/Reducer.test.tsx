import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";


test('collapsed has to be true', () => {
    //data
    const state: StateType = {
         collapsed: false
    }


    //action

   const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expectation
    expect(newState.collapsed).toBe(true)
})
test('collapsed has to be false', () => {
    //data
    const state: StateType = {
         collapsed: true
    }


    //action

   const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expectation
    expect(newState.collapsed).toBe(false)
})
test('error is expected', () => {
    //data
    const state: StateType = {
         collapsed: true
    }


    //action


    //expectation
    expect(()=> {reducer(state, {type: 'fake_type'})} ).toThrowError()
}) 