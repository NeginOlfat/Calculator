export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };

export const handleNumber =(value,state) =>{
    if(state.currentValue === '0')
       return{  currentValue:`${value}` };
    else
        return{
            currentValue: `${state.currentValue}${value}`
        }
}

export const handleEqual = state =>{
    const {currentValue, previousValue,operator}=state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState={
        previousValue: null,
        operator:null
    }
    if(operator === '+')
        return{
            currentValue: previous + current,
            ...resetState
        };
    if(operator === '-')
        return{
            currentValue: previous - current,
            ...resetState
        };
    if(operator === 'x')
        return{
            currentValue: previous * current,
            ...resetState
        };
    if(operator === '/')
        return{
            currentValue: previous / current,
            ...resetState
        };
    return state;
}

const calculate = (type, value, state) =>{
    switch(type){
        case 'number':
            return handleNumber(value,state);
           
        case 'operator':
            return{
                operator:value,
                previousValue:state.currentValue,
                currentValue:0,
            };
            
        case 'equal':
            return handleEqual(state);

        case 'clear':
            return initialState; 

        case 'perantage':
            return{
                currentValue:`${parseFloat(state.currentValue) * 0.01}`
            };

        case 'neg-pos':
             return{
                 currentValue: `${parseFloat(state.currentValue) * -1}`
             };
        default:
            return state;
    }
}

export default calculate;
