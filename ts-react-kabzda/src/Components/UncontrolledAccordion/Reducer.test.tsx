import {reducer, StateType} from "./Reducer";

test('collapsed should be true', () => {
        //data
const state: StateType = {
    collapsed: false
}

        //action
expect( () => {
reducer( state, {type: 'TOGGLE-COLSED'})
}).toThrowError();

        //expectation

})