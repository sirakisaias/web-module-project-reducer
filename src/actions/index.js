export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_TOTAL = 'CLEAR_TOTAL';
export const ADD_MEMORY = 'ADD_MEMORY';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const MR = 'MR';

export const memoryMR = () => {
    return({type:MR})
}

export const clearMemory = () => {
    return({type:MEMORY_CLEAR})
}

export const addMemory = () => {
    return({type:ADD_MEMORY});
}

export const addOne = () => {
    return({type:ADD_ONE});
}
export const clearTotal = () => {
    return({type:CLEAR_TOTAL});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) =>{
    return({type:CHANGE_OPERATION, payload:operation})
}