import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_TOTAL, ADD_MEMORY, MEMORY_CLEAR, MR } from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_TOTAL):
            return({
                ...state,
                total:0
            })
        case(ADD_MEMORY):
            return({
                ...state,
                memory:state.total
            })
        case(MEMORY_CLEAR):
            return({
                ...state,
                memory:0
            })
        case(MR):
            return({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            })
        default:
            return state;
    }
}

export default reducer;